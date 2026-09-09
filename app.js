// Radar Aju — Controlador Client-Side Otimizado para GitHub Pages
// Funciona 100% no navegador: Base Verificada Real + Busca ao Vivo

let map = null;
let markersLayer = null;
let currentEmpresas = [];
let liveSearchResults = [];
let activeEmpresaId = null;
let currentOutreachData = null;
let currentSelectedTabIndex = 0;
let currentStitchPrompt = "";

const CATEGORY_PINS = {
    clinica: { class: "pin-clinica" },
    gastronomia: { class: "pin-gastronomia" },
    advocacia: { class: "pin-advocacia" },
    imobiliaria: { class: "pin-imobiliaria" },
    fitness: { class: "pin-fitness" },
    pet: { class: "pin-pet" },
    estetica: { class: "pin-estetica" },
    automotivo: { class: "pin-automotivo" },
    varejo: { class: "pin-varejo" },
    educacao: { class: "pin-educacao" },
    servicos: { class: "pin-servicos" },
    live_search: { class: "pin-default" }
};

document.addEventListener("DOMContentLoaded", () => {
    initMap();
    populateFilters();
    applyFilters();
    setupEventListeners();
    lucide.createIcons();
});

// ==========================================
// MAPA LEAFLET
// ==========================================

function initMap() {
    const ajuCenter = [-10.9472, -37.0731];
    map = L.map("map", { zoomControl: true, scrollWheelZoom: true }).setView(ajuCenter, 13);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);
}

// ==========================================
// FILTROS E LISTA
// ==========================================

function populateFilters() {
    const allEmpresas = [...liveSearchResults, ...EMPRESAS_VERIFICADAS];
    
    const bairros = [...new Set(allEmpresas.map(e => e.bairro))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    const selectBairro = document.getElementById("select-bairro");
    const currentBairro = selectBairro.value || "Todos";
    selectBairro.innerHTML = [`<option value="Todos">Todos os Bairros</option>`, ...bairros.map(b => `<option value="${b}">${b}</option>`)].join("");
    if (bairros.includes(currentBairro)) selectBairro.value = currentBairro;

    const nichos = [...new Set(allEmpresas.map(e => e.nicho))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    const selectNicho = document.getElementById("select-nicho");
    const currentNicho = selectNicho.value || "Todos";
    selectNicho.innerHTML = [`<option value="Todos">Todos os Nichos</option>`, ...nichos.map(n => `<option value="${n}">${n}</option>`)].join("");
    if (nichos.includes(currentNicho)) selectNicho.value = currentNicho;
}

function applyFilters() {
    const nicho = document.getElementById("select-nicho").value;
    const bairro = document.getElementById("select-bairro").value;
    const semSite = document.getElementById("check-no-site").checked;
    const query = document.getElementById("input-search").value.toLowerCase().trim();

    const all = [...liveSearchResults, ...EMPRESAS_VERIFICADAS];

    // Eliminar duplicatas por ID ou nome+bairro
    const seen = new Set();
    const uniqueList = [];
    all.forEach(e => {
        const key = (e.nome + "|" + e.bairro).toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            uniqueList.push(e);
        }
    });

    currentEmpresas = uniqueList.filter(e => {
        if (nicho && nicho !== "Todos" && e.nicho.toLowerCase() !== nicho.toLowerCase()) return false;
        if (bairro && bairro !== "Todos" && e.bairro.toLowerCase() !== bairro.toLowerCase()) return false;
        if (semSite && e.website) return false;
        if (query) {
            const match = (
                e.nome.toLowerCase().includes(query) ||
                e.nicho.toLowerCase().includes(query) ||
                e.bairro.toLowerCase().includes(query) ||
                e.cidade.toLowerCase().includes(query) ||
                (e.descricao || "").toLowerCase().includes(query) ||
                (e.endereco || "").toLowerCase().includes(query)
            );
            if (!match) return false;
        }
        return true;
    });

    renderLeadsList(currentEmpresas);
    renderMapMarkers(currentEmpresas);
    updateCounters(currentEmpresas);
}

function setupEventListeners() {
    document.getElementById("select-nicho").addEventListener("change", applyFilters);
    document.getElementById("select-bairro").addEventListener("change", applyFilters);
    document.getElementById("check-no-site").addEventListener("change", applyFilters);

    let debounceTimer;
    document.getElementById("input-search").addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(applyFilters, 250);
    });

    document.getElementById("input-search").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            performLiveSearch();
        }
    });

    document.getElementById("btn-live-search").addEventListener("click", performLiveSearch);

    document.getElementById("btn-export-csv").addEventListener("click", () => {
        if (currentEmpresas.length === 0) {
            showToast("Nenhuma empresa na lista atual para exportar.");
            return;
        }
        exportLeadsToCSVClient(currentEmpresas);
        showToast("Planilha CSV baixada com sucesso!");
    });
}

// ==========================================
// BUSCA AO VIVO NO OPENSTREETMAP
// ==========================================

async function performLiveSearch() {
    const termo = document.getElementById("input-search").value.trim();
    if (!termo) {
        showToast("Digite o nome ou segmento para buscar no mapa.");
        return;
    }

    showToast(`Buscando "${termo}" em Aracaju e região...`);
    const btn = document.getElementById("btn-live-search");
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="loader" class="w-3 h-3 animate-spin"></i> Buscando...`;
    btn.disabled = true;
    lucide.createIcons();

    try {
        const queryUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(termo + ", Aracaju, Sergipe")}&format=json&addressdetails=1&extratags=1&limit=12`;
        const res = await fetch(queryUrl, {
            headers: { "Accept-Language": "pt-BR" }
        });

        if (!res.ok) throw new Error("Erro na busca: " + res.status);
        const data = await res.json();

        if (data && data.length > 0) {
            const novos = data.map((item, idx) => {
                const parts = (item.display_name || "").split(",").map(p => p.trim());
                const nome = parts[0] || termo;
                const addr = item.address || {};
                const bairro = addr.suburb || addr.neighbourhood || addr.quarter || addr.city_district || "Aracaju";
                const cidade = addr.city || addr.town || addr.municipality || "Aracaju";
                const lat = parseFloat(item.lat);
                const lng = parseFloat(item.lon);
                const extra = item.extratags || {};
                
                // Extração de contatos
                const phone = extra.phone || extra["contact:phone"] || "";
                const cleanPhone = phone.replace(/\D/g, "");
                let rawWa = "";
                if (cleanPhone.length >= 10) {
                    rawWa = cleanPhone.startsWith("55") ? cleanPhone : "55" + cleanPhone;
                }
                const website = extra.website || extra["contact:website"] || null;
                const instagram = extra["contact:instagram"] || extra.instagram || "";

                // Google Maps URL pesquisando exatamente pelo nome e bairro
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nome + " " + bairro + " Aracaju SE")}`;

                return {
                    id: `live-${idx}-${Date.now() % 100000}`,
                    nome: nome,
                    nicho: termo.charAt(0).toUpperCase() + termo.slice(1),
                    categoria_tag: "live_search",
                    bairro: bairro,
                    cidade: cidade,
                    endereco: parts.slice(0, 3).join(", ") || `${nome} - ${bairro}, ${cidade} - SE`,
                    lat: lat,
                    lng: lng,
                    telefone: phone,
                    whatsapp: rawWa ? `+55 ${rawWa.slice(2,4)} ${rawWa.slice(4)}` : "",
                    whatsapp_raw: rawWa,
                    instagram: instagram,
                    website: website,
                    google_rating: null,
                    google_reviews_count: null,
                    maps_url: mapsUrl,
                    descricao: `${nome}, localizado em ${bairro}, ${cidade} - SE. Identificado via busca cartográfica em tempo real.`,
                    pontos_fortes: `Local físico em atividade em ${bairro}, ${cidade}.`,
                    oportunidade_digital: website
                        ? "Já possui site. Oportunidade para modernização mobile e automação de atendimento."
                        : "Sem site próprio identificado. Excelente potencial para Landing Page e destaque local.",
                    stitch_palette: { primary: "#0D9488", secondary: "#14B8A6", accent: "#0F766E", bg: "#F0FDFA" }
                };
            });

            // Evitar duplicatas com base local ou resultados anteriores
            const existingKeys = new Set(liveSearchResults.map(e => (e.nome + "|" + e.bairro).toLowerCase()));
            const reallyNew = novos.filter(n => !existingKeys.has((n.nome + "|" + n.bairro).toLowerCase()));
            
            liveSearchResults = [...reallyNew, ...liveSearchResults];
            populateFilters();
            applyFilters();

            showToast(`${reallyNew.length} novos locais encontrados no mapa!`);
        } else {
            showToast("Nenhum local novo encontrado para este termo.");
        }
    } catch (e) {
        console.warn("Erro ao buscar:", e);
        showToast("Não foi possível conectar ao mapa externo. Usando base local.");
    } finally {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
        lucide.createIcons();
    }
}

// ==========================================
// RENDERIZAÇÃO DOS CARDS
// ==========================================

function renderLeadsList(empresas) {
    const container = document.getElementById("leads-container");
    const countLabel = document.getElementById("label-results-count");
    countLabel.textContent = `${empresas.length} empresas`;

    if (empresas.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-56 text-slate-400 text-center p-6">
                <i data-lucide="search-x" class="w-10 h-10 text-slate-300 mb-2"></i>
                <p class="text-sm font-semibold text-slate-600">Nenhuma empresa encontrada</p>
                <p class="text-xs text-slate-400 mt-1">Tente ajustar os filtros ou busque pelo nome/ramo no campo de busca.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    container.innerHTML = empresas.map(empresa => {
        const hasSite = Boolean(empresa.website);
        const hasWa = Boolean(empresa.whatsapp_raw);
        const hasPhone = Boolean(empresa.telefone);
        const hasInsta = Boolean(empresa.instagram);
        const hasRating = Boolean(empresa.google_rating);

        return `
            <div id="card-${empresa.id}" onclick="focusEmpresa('${empresa.id}')" 
                 class="group p-3.5 rounded-xl border border-slate-200/80 hover:border-brand-500 bg-white hover:bg-brand-50/20 transition-all cursor-pointer shadow-2xs">
                
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1">
                        <div class="flex items-center gap-1.5 flex-wrap mb-1">
                            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                                ${empresa.bairro}
                            </span>
                            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200/60">
                                ${empresa.nicho}
                            </span>
                            ${!hasSite ? `
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300 badge-pulse">
                                    🎯 Sem Site
                                </span>
                            ` : ''}
                        </div>
                        <h3 class="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition">
                            ${empresa.nome}
                        </h3>
                    </div>

                    ${hasRating ? `
                        <div class="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/70 px-2 py-1 rounded-lg text-xs font-bold shrink-0">
                            <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-500"></i>
                            <span>${empresa.google_rating}</span>
                            <span class="text-[10px] text-amber-700 font-normal">(${empresa.google_reviews_count})</span>
                        </div>
                    ` : `
                        <a href="${empresa.maps_url}" target="_blank" onclick="event.stopPropagation()"
                           class="flex items-center gap-1 bg-sky-50 text-sky-700 border border-sky-200/70 px-2 py-1 rounded-lg text-xs font-bold shrink-0 hover:bg-sky-100 transition"
                           title="Ver no Google Maps">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sky-600"></i>
                            Maps
                        </a>
                    `}
                </div>

                <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    ${empresa.descricao}
                </p>

                <!-- Endereço e Telefone -->
                <div class="mt-2 flex items-center gap-3 text-[11px] text-slate-600 flex-wrap">
                    ${hasPhone ? `
                        <span class="inline-flex items-center gap-1 text-slate-700 font-medium">
                            <i data-lucide="phone" class="w-3 h-3 text-slate-400"></i>
                            ${empresa.telefone}
                        </span>
                    ` : ''}
                    <span class="inline-flex items-center gap-1 text-slate-500 truncate max-w-[280px]">
                        <i data-lucide="map-pin" class="w-3 h-3 text-slate-400 shrink-0"></i>
                        ${empresa.endereco}
                    </span>
                </div>

                <!-- Diagnóstico -->
                <div class="mt-2 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start gap-1.5">
                    <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i>
                    <span class="line-clamp-2"><strong>Diagnóstico:</strong> ${empresa.oportunidade_digital}</span>
                </div>

                <!-- Ações e Contatos -->
                <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        ${hasWa ? `
                            <a href="https://wa.me/${empresa.whatsapp_raw}" target="_blank" onclick="event.stopPropagation()"
                               title="Chamar no WhatsApp" 
                               class="flex items-center gap-1 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold transition">
                                <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
                                WhatsApp
                            </a>
                        ` : hasPhone ? `
                            <a href="tel:${empresa.telefone}" onclick="event.stopPropagation()"
                               title="Ligar"
                               class="flex items-center gap-1 text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-md font-semibold transition">
                                <i data-lucide="phone" class="w-3.5 h-3.5 text-blue-600"></i>
                                Ligar
                            </a>
                        ` : ''}

                        <a href="${empresa.maps_url}" target="_blank" onclick="event.stopPropagation()"
                           title="Abrir no Google Maps"
                           class="flex items-center gap-1 text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-1 rounded-md transition" title="Google Maps">
                            <i data-lucide="map" class="w-3.5 h-3.5 text-slate-500"></i>
                            <span class="text-[11px] font-medium">Maps</span>
                        </a>

                        ${hasInsta ? `
                            <a href="https://instagram.com/${empresa.instagram.replace('@', '')}" target="_blank" onclick="event.stopPropagation()"
                               title="Ver Instagram"
                               class="p-1 rounded-md text-slate-500 hover:text-pink-600 hover:bg-pink-50 border border-slate-200 transition">
                                <i data-lucide="instagram" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}

                        ${hasSite ? `
                            <a href="${empresa.website}" target="_blank" onclick="event.stopPropagation()"
                               title="Abrir Site"
                               class="p-1 rounded-md text-slate-500 hover:text-sky-600 hover:bg-sky-50 border border-slate-200 transition">
                                <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}
                    </div>

                    <div class="flex items-center gap-1.5">
                        <button onclick="openOutreachModal('${empresa.id}', event)" 
                                class="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] px-3 py-1.5 rounded-md transition shadow-2xs">
                            <i data-lucide="send" class="w-3 h-3"></i>
                            Mensagem
                        </button>
                        
                        <button onclick="openStitchModal('${empresa.id}', event)" 
                                class="flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold text-[11px] px-2.5 py-1.5 rounded-md transition">
                            <i data-lucide="sparkles" class="w-3 h-3 text-indigo-600"></i>
                            Stitch
                        </button>
                    </div>
                </div>

            </div>
        `;
    }).join("");

    lucide.createIcons();
}

// ==========================================
// RENDERIZAÇÃO DO MAPA
// ==========================================

function renderMapMarkers(empresas) {
    markersLayer.clearLayers();
    if (empresas.length === 0) return;

    const bounds = [];

    empresas.forEach(empresa => {
        if (!empresa.lat || !empresa.lng) return;

        const pinConfig = CATEGORY_PINS[empresa.categoria_tag] || CATEGORY_PINS.live_search;

        const customIcon = L.divIcon({
            className: "custom-div-icon",
            html: `<div class="custom-pin ${pinConfig.class}"><span style="font-size:11px;font-weight:bold;">📍</span></div>`,
            iconSize: [34, 34],
            iconAnchor: [17, 34],
            popupAnchor: [0, -34]
        });

        const marker = L.marker([empresa.lat, empresa.lng], { icon: customIcon });
        const hasWa = Boolean(empresa.whatsapp_raw);

        const popupContent = `
            <div class="p-1 max-w-[220px]">
                <span class="text-[10px] font-bold text-slate-400 uppercase">${empresa.bairro}</span>
                <h4 class="text-xs font-bold text-slate-900 leading-snug">${empresa.nome}</h4>
                ${empresa.google_rating ? `<p class="text-[11px] text-amber-700 font-semibold my-1">★ ${empresa.google_rating} (${empresa.google_reviews_count} avaliações)</p>` : `<p class="text-[11px] text-slate-500 my-1">${empresa.nicho}</p>`}
                <div class="flex items-center gap-1 mt-2 flex-wrap">
                    ${hasWa ? `
                        <a href="https://wa.me/${empresa.whatsapp_raw}" target="_blank" class="text-[10px] bg-emerald-600 text-white font-bold px-2 py-1 rounded">
                            WhatsApp
                        </a>
                    ` : ''}
                    <a href="${empresa.maps_url}" target="_blank" class="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-2 py-1 rounded">
                        Google Maps
                    </a>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent);
        marker.on("click", () => highlightCard(empresa.id));

        markersLayer.addLayer(marker);
        bounds.push([empresa.lat, empresa.lng]);
    });

    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }
}

// ==========================================
// INTERAÇÃO LISTA <-> MAPA
// ==========================================

function focusEmpresa(empresaId) {
    const empresa = currentEmpresas.find(e => e.id === empresaId);
    if (!empresa) return;

    highlightCard(empresaId);

    if (empresa.lat && empresa.lng) {
        map.flyTo([empresa.lat, empresa.lng], 16, { animate: true, duration: 1 });
        
        markersLayer.eachLayer(layer => {
            const latLng = layer.getLatLng();
            if (Math.abs(latLng.lat - empresa.lat) < 0.0001 && Math.abs(latLng.lng - empresa.lng) < 0.0001) {
                layer.openPopup();
            }
        });
    }
}

function highlightCard(empresaId) {
    document.querySelectorAll('[id^="card-"]').forEach(c => {
        c.classList.remove("ring-2", "ring-brand-500", "bg-brand-50/40");
    });

    const card = document.getElementById(`card-${empresaId}`);
    if (card) {
        card.classList.add("ring-2", "ring-brand-500", "bg-brand-50/40");
        card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function updateCounters(empresas) {
    document.getElementById("counter-total").textContent = empresas.length;
    document.getElementById("counter-no-site").textContent = empresas.filter(e => !e.website).length;
}

// ==========================================
// MODAL DE MENSAGENS (OUTREACH)
// ==========================================

function openOutreachModal(empresaId, event) {
    if (event) event.stopPropagation();

    const empresa = currentEmpresas.find(e => e.id === empresaId) || getEmpresaById(empresaId);
    if (!empresa) return;

    const msgs = generateOutreachMessagesClient(empresa);
    currentOutreachData = {
        empresa: empresa,
        empresa_nome: empresa.nome,
        whatsapp_raw: empresa.whatsapp_raw || "",
        mensagens: msgs
    };

    document.getElementById("modal-outreach-title").textContent = `Mensagens para: ${empresa.nome}`;
    
    // Configurar input de WhatsApp editável
    const inputWa = document.getElementById("input-custom-wa");
    inputWa.value = empresa.whatsapp_raw || empresa.telefone || "";

    // Configurar botão de busca no Google
    const btnSearchGoogle = document.getElementById("btn-search-google-contact");
    btnSearchGoogle.href = `https://www.google.com/search?q=${encodeURIComponent(empresa.nome + " " + empresa.bairro + " Aracaju telefone whatsapp")}`;

    selectOutreachTab(0);
    document.getElementById("modal-outreach").classList.remove("hidden");
    lucide.createIcons();
}

function updateOutreachWaNumber() {
    if (!currentOutreachData) return;

    const inputVal = document.getElementById("input-custom-wa").value.trim();
    const cleanNumber = inputVal.replace(/\D/g, "");

    let finalRaw = "";
    if (cleanNumber.length >= 10) {
        finalRaw = cleanNumber.startsWith("55") ? cleanNumber : "55" + cleanNumber;
    } else if (cleanNumber.length > 0) {
        finalRaw = "5579" + cleanNumber;
    }

    currentOutreachData.whatsapp_raw = finalRaw;

    // Atualiza links das mensagens
    currentOutreachData.mensagens.forEach(m => {
        const encoded = encodeURIComponent(m.texto);
        m.wa_link = finalRaw ? `https://wa.me/${finalRaw}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
    });

    selectOutreachTab(currentSelectedTabIndex);
    showToast("Número de WhatsApp aplicado ao botão de envio!");
}

function selectOutreachTab(index) {
    if (!currentOutreachData || !currentOutreachData.mensagens[index]) return;

    currentSelectedTabIndex = index;
    const msg = currentOutreachData.mensagens[index];
    document.getElementById("current-pitch-title").textContent = msg.titulo;
    document.getElementById("current-pitch-text").textContent = msg.texto;

    const btnWa = document.getElementById("btn-open-wa-direct");
    btnWa.href = msg.wa_link;

    const tabs = document.querySelectorAll("#outreach-tabs .tab-btn");
    tabs.forEach((tab, idx) => {
        tab.className = idx === index
            ? "tab-btn font-semibold px-3 py-1.5 rounded-lg transition bg-emerald-600 text-white shadow-xs"
            : "tab-btn font-semibold px-3 py-1.5 rounded-lg transition bg-slate-100 text-slate-700 hover:bg-slate-200";
    });
}

function closeOutreachModal() {
    document.getElementById("modal-outreach").classList.add("hidden");
}

function copyOutreachText() {
    const text = document.getElementById("current-pitch-text").textContent;
    navigator.clipboard.writeText(text).then(() => showToast("Mensagem copiada para a área de transferência!"));
}

// ==========================================
// MODAL GOOGLE STITCH SPEC
// ==========================================

function openStitchModal(empresaId, event) {
    if (event) event.stopPropagation();

    const empresa = currentEmpresas.find(e => e.id === empresaId) || getEmpresaById(empresaId);
    if (!empresa) return;

    const spec = generateStitchPromptClient(empresa);
    currentStitchPrompt = spec.stitch_prompt;

    document.getElementById("stitch-prompt-content").value = currentStitchPrompt;
    document.getElementById("modal-stitch-subtitle").textContent = `Especificação pronta para: ${empresa.nome} (${empresa.bairro})`;

    const p = spec.palette;
    document.getElementById("stitch-palette-chips").innerHTML = `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono" style="background-color: ${p.primary}; color: white;">
            Primária ${p.primary}
        </span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono" style="background-color: ${p.secondary}; color: white;">
            Secundária ${p.secondary}
        </span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono" style="background-color: ${p.accent}; color: white;">
            Destaque ${p.accent}
        </span>
    `;

    document.getElementById("modal-stitch").classList.remove("hidden");
    lucide.createIcons();
}

function closeStitchModal() {
    document.getElementById("modal-stitch").classList.add("hidden");
}

function copyStitchPrompt() {
    if (!currentStitchPrompt) return;
    navigator.clipboard.writeText(currentStitchPrompt).then(() => showToast("Prompt do Google Stitch copiado!"));
}

// ==========================================
// TOAST
// ==========================================

function showToast(message) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-message").textContent = message;

    toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
        toast.classList.remove("translate-y-0", "opacity-100");
    }, 3000);
}
