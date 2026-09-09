// Radar Aju — Controlador Client-Side (Somente Empresas Reais)
// Busca empresas REAIS via OpenStreetMap Nominatim + Overpass API

let map = null;
let markersLayer = null;
let currentEmpresas = [];
let allFoundEmpresas = []; // Todas as empresas reais encontradas
let activeEmpresaId = null;
let currentOutreachData = null;
let currentStitchPrompt = "";
let isLoading = false;

// Categorias que serão buscadas automaticamente ao abrir
const AUTO_SEARCH_CATEGORIES = [
    { termo: "restaurante", nicho: "Gastronomia & Restaurantes", tag: "gastronomia", palette: { primary: "#EA580C", secondary: "#F97316", accent: "#C2410C", bg: "#FFF7ED" } },
    { termo: "clínica", nicho: "Saúde & Clínicas", tag: "clinica", palette: { primary: "#0D9488", secondary: "#14B8A6", accent: "#0F766E", bg: "#F0FDFA" } },
    { termo: "academia", nicho: "Academias & Fitness", tag: "fitness", palette: { primary: "#DC2626", secondary: "#EF4444", accent: "#171717", bg: "#FEF2F2" } },
    { termo: "pet shop", nicho: "Pet Shops & Veterinárias", tag: "pet", palette: { primary: "#059669", secondary: "#10B981", accent: "#F59E0B", bg: "#ECFDF5" } },
    { termo: "advocacia escritório", nicho: "Advocacia & Jurídico", tag: "advocacia", palette: { primary: "#1E293B", secondary: "#334155", accent: "#D97706", bg: "#F8FAFC" } },
    { termo: "imobiliária", nicho: "Imobiliárias", tag: "imobiliaria", palette: { primary: "#0369A1", secondary: "#0284C7", accent: "#F59E0B", bg: "#F0F9FF" } },
    { termo: "salão beleza estética", nicho: "Estética & Beleza", tag: "estetica", palette: { primary: "#DB2777", secondary: "#EC4899", accent: "#831843", bg: "#FDF2F8" } },
    { termo: "oficina mecânica", nicho: "Serviços Automotivos", tag: "automotivo", palette: { primary: "#2563EB", secondary: "#3B82F6", accent: "#1E40AF", bg: "#EFF6FF" } },
    { termo: "escola curso", nicho: "Escolas & Educação", tag: "educacao", palette: { primary: "#4F46E5", secondary: "#6366F1", accent: "#4338CA", bg: "#EEF2FF" } },
    { termo: "loja moda roupa", nicho: "Varejo & Moda", tag: "varejo", palette: { primary: "#7C3AED", secondary: "#8B5CF6", accent: "#6D28D9", bg: "#F5F3FF" } },
    { termo: "dentista odontológica", nicho: "Odontologia", tag: "clinica", palette: { primary: "#0284C7", secondary: "#38BDF8", accent: "#0369A1", bg: "#F0F9FF" } },
    { termo: "farmácia", nicho: "Farmácias", tag: "clinica", palette: { primary: "#16A34A", secondary: "#22C55E", accent: "#15803D", bg: "#F0FDF4" } },
];

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
    setupEventListeners();
    lucide.createIcons();
    autoLoadRealEmpresas();
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
// CARREGAMENTO AUTOMÁTICO DE EMPRESAS REAIS
// ==========================================

async function autoLoadRealEmpresas() {
    const container = document.getElementById("leads-container");
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center h-56 text-slate-400 text-center p-6">
            <i data-lucide="loader" class="w-8 h-8 animate-spin mb-3 text-brand-600"></i>
            <p class="text-sm font-semibold text-slate-700">Buscando empresas reais em Aracaju...</p>
            <p class="text-xs text-slate-400 mt-1" id="loading-status">Conectando ao OpenStreetMap...</p>
        </div>
    `;
    lucide.createIcons();

    isLoading = true;
    let totalFound = 0;

    for (let i = 0; i < AUTO_SEARCH_CATEGORIES.length; i++) {
        const cat = AUTO_SEARCH_CATEGORIES[i];
        const statusEl = document.getElementById("loading-status");
        if (statusEl) {
            statusEl.textContent = `Buscando ${cat.nicho} (${i + 1}/${AUTO_SEARCH_CATEGORIES.length})...`;
        }

        try {
            const results = await searchNominatim(cat.termo, cat.nicho, cat.tag, cat.palette, 8);
            
            // Adiciona sem duplicatas (por nome + bairro)
            const existingKeys = new Set(allFoundEmpresas.map(e => (e.nome + e.bairro).toLowerCase()));
            const novos = results.filter(r => !existingKeys.has((r.nome + r.bairro).toLowerCase()));
            allFoundEmpresas = [...allFoundEmpresas, ...novos];
            totalFound += novos.length;

        } catch (e) {
            console.warn(`Erro ao buscar ${cat.termo}:`, e);
        }

        // Respeitar rate limit do Nominatim (1 req/s)
        await sleep(1100);
    }

    isLoading = false;

    // Popular filtros com dados reais encontrados
    populateFiltersFromData();
    applyFilters();

    if (totalFound > 0) {
        showToast(`${totalFound} empresas reais de Aracaju carregadas no radar!`);
    } else {
        showToast("Não foi possível carregar empresas. Use a busca manual.");
    }
}

async function searchNominatim(termo, nicho, tag, palette, limit) {
    const queryUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(termo + ", Aracaju, Sergipe")}&format=json&addressdetails=1&extratags=1&limit=${limit}`;
    
    const res = await fetch(queryUrl, {
        headers: { "Accept-Language": "pt-BR" }
    });

    if (!res.ok) throw new Error("HTTP " + res.status);

    const data = await res.json();
    if (!data || data.length === 0) return [];

    return data.map((item, idx) => {
        const parts = (item.display_name || "").split(",").map(p => p.trim());
        const nome = parts[0] || termo;
        const addr = item.address || {};
        const bairro = addr.suburb || addr.neighbourhood || addr.quarter || addr.city_district || "Aracaju";
        const cidade = addr.city || addr.town || addr.municipality || "Aracaju";
        const lat = parseFloat(item.lat);
        const lng = parseFloat(item.lon);
        const extra = item.extratags || {};
        const phone = extra.phone || extra["contact:phone"] || "";
        const cleanPhone = phone.replace(/\D/g, "");
        const rawWa = cleanPhone.length >= 10 ? "55" + cleanPhone : "";
        const website = extra.website || extra["contact:website"] || null;
        const instagram = extra["contact:instagram"] || "";
        const openingHours = extra.opening_hours || "";

        return {
            id: `real-${tag}-${idx}-${Date.now() % 100000}`,
            nome: nome,
            nicho: nicho,
            categoria_tag: tag,
            bairro: bairro,
            cidade: cidade,
            endereco: parts.slice(0, 3).join(", ") || `${nome} - ${bairro}, ${cidade} - SE`,
            lat: lat,
            lng: lng,
            telefone: phone || "Ver no Google Maps",
            whatsapp: rawWa ? `+${rawWa.slice(0,2)} ${rawWa.slice(2,4)} ${rawWa.slice(4,9)}-${rawWa.slice(9)}` : "",
            whatsapp_raw: rawWa,
            instagram: instagram ? `@${instagram}` : "",
            website: website,
            google_rating: null,
            google_reviews_count: null,
            maps_url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
            descricao: `${nome}, localizado no bairro ${bairro} em ${cidade} - SE.${openingHours ? " Horário: " + openingHours + "." : ""}`,
            pontos_fortes: `Estabelecimento real e ativo em ${bairro}, ${cidade}.`,
            oportunidade_digital: website
                ? "Já possui site. Oportunidade para otimização mobile, SEO local e integração com WhatsApp Business."
                : "Sem site identificado. Excelente oportunidade para Landing Page, Google Meu Negócio e captação via WhatsApp.",
            stitch_palette: palette
        };
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================================
// FILTROS
// ==========================================

function populateFiltersFromData() {
    const bairros = ["Todos", ...new Set(allFoundEmpresas.map(e => e.bairro))].sort((a, b) => {
        if (a === "Todos") return -1;
        if (b === "Todos") return 1;
        return a.localeCompare(b, "pt-BR");
    });
    document.getElementById("select-bairro").innerHTML = bairros.map(b => `<option value="${b}">${b}</option>`).join("");

    const nichos = ["Todos", ...new Set(allFoundEmpresas.map(e => e.nicho))].sort((a, b) => {
        if (a === "Todos") return -1;
        if (b === "Todos") return 1;
        return a.localeCompare(b, "pt-BR");
    });
    document.getElementById("select-nicho").innerHTML = nichos.map(n => `<option value="${n}">${n}</option>`).join("");
}

function applyFilters() {
    const nicho = document.getElementById("select-nicho").value;
    const bairro = document.getElementById("select-bairro").value;
    const semSite = document.getElementById("check-no-site").checked;
    const query = document.getElementById("input-search").value.toLowerCase().trim();

    currentEmpresas = allFoundEmpresas.filter(e => {
        if (nicho && nicho !== "Todos" && e.nicho !== nicho) return false;
        if (bairro && bairro !== "Todos" && e.bairro !== bairro) return false;
        if (semSite && e.website) return false;
        if (query) {
            if (!(
                e.nome.toLowerCase().includes(query) ||
                e.nicho.toLowerCase().includes(query) ||
                e.bairro.toLowerCase().includes(query) ||
                e.cidade.toLowerCase().includes(query) ||
                e.descricao.toLowerCase().includes(query)
            )) return false;
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
        debounceTimer = setTimeout(applyFilters, 300);
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
            showToast("Nenhuma empresa para exportar.");
            return;
        }
        exportLeadsToCSVClient(currentEmpresas);
        showToast("Planilha CSV baixada com sucesso!");
    });
}

// ==========================================
// BUSCA AO VIVO MANUAL
// ==========================================

async function performLiveSearch() {
    const termo = document.getElementById("input-search").value.trim();
    if (!termo) {
        showToast("Digite o que procurar: nome, ramo ou tipo de empresa.");
        return;
    }

    if (isLoading) {
        showToast("Aguarde o carregamento inicial terminar...");
        return;
    }

    showToast(`Buscando "${termo}" em Aracaju...`);
    const btn = document.getElementById("btn-live-search");
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="loader" class="w-3 h-3 animate-spin"></i> Buscando...`;
    btn.disabled = true;
    lucide.createIcons();

    try {
        const results = await searchNominatim(
            termo,
            termo.charAt(0).toUpperCase() + termo.slice(1),
            "live_search",
            { primary: "#0D9488", secondary: "#14B8A6", accent: "#0F766E", bg: "#F0FDFA" },
            12
        );

        if (results.length > 0) {
            const existingKeys = new Set(allFoundEmpresas.map(e => (e.nome + e.bairro).toLowerCase()));
            const novos = results.filter(r => !existingKeys.has((r.nome + r.bairro).toLowerCase()));
            allFoundEmpresas = [...novos, ...allFoundEmpresas];

            populateFiltersFromData();
            
            // Resetar filtros para mostrar resultados novos
            document.getElementById("select-nicho").value = "Todos";
            document.getElementById("select-bairro").value = "Todos";
            applyFilters();

            showToast(`${novos.length} novos locais reais adicionados ao radar!`);
        } else {
            showToast("Nenhum resultado para esse termo. Tente outro nome.");
        }
    } catch (e) {
        console.warn("Erro na busca:", e);
        showToast("Erro de conexão. Verifique sua internet.");
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

    if (empresas.length === 0 && !isLoading) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-56 text-slate-400 text-center p-6">
                <i data-lucide="search-x" class="w-10 h-10 text-slate-300 mb-2"></i>
                <p class="text-sm font-semibold text-slate-600">Nenhuma empresa encontrada</p>
                <p class="text-xs text-slate-400 mt-1">Tente ajustar os filtros ou busque um ramo específico (ex: "padaria", "dentista").</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    container.innerHTML = empresas.map(empresa => {
        const hasSite = Boolean(empresa.website);
        const hasWa = Boolean(empresa.whatsapp_raw);
        const hasRating = empresa.google_rating !== null;

        return `
            <div id="card-${empresa.id}" onclick="focusEmpresa('${empresa.id}')" 
                 class="group p-3.5 rounded-xl border border-slate-200/80 hover:border-brand-500 bg-white hover:bg-brand-50/20 transition-all cursor-pointer shadow-2xs">
                
                <div class="flex items-start justify-between gap-2">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 flex-wrap mb-1">
                            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
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

                    <a href="${empresa.maps_url}" target="_blank" onclick="event.stopPropagation()"
                       class="flex items-center gap-1 bg-sky-50 text-sky-700 border border-sky-200/70 px-2 py-1 rounded-lg text-xs font-bold shrink-0 hover:bg-sky-100 transition"
                       title="Ver no Google Maps">
                        <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sky-600"></i>
                        Maps
                    </a>
                </div>

                <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    ${empresa.descricao}
                </p>

                <div class="mt-2 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start gap-1.5">
                    <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i>
                    <span class="line-clamp-2"><strong>Diagnóstico:</strong> ${empresa.oportunidade_digital}</span>
                </div>

                <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div class="flex items-center gap-2">
                        ${hasWa ? `
                            <a href="https://wa.me/${empresa.whatsapp_raw}" target="_blank" onclick="event.stopPropagation()"
                               title="Chamar no WhatsApp" 
                               class="flex items-center gap-1 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-1 rounded-md font-semibold transition">
                                <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
                                WhatsApp
                            </a>
                        ` : `
                            <span class="flex items-center gap-1 text-slate-400 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md text-[10px]">
                                <i data-lucide="phone-off" class="w-3 h-3"></i>
                                Verificar no Maps
                            </span>
                        `}

                        ${empresa.instagram ? `
                            <a href="https://instagram.com/${empresa.instagram.replace('@', '')}" target="_blank" onclick="event.stopPropagation()"
                               title="Ver Instagram"
                               class="p-1 rounded-md text-slate-500 hover:text-pink-600 hover:bg-pink-50 border border-slate-200 transition">
                                <i data-lucide="instagram" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}

                        ${hasSite ? `
                            <a href="${empresa.website}" target="_blank" onclick="event.stopPropagation()"
                               title="Abrir site"
                               class="p-1 rounded-md text-slate-500 hover:text-brand-600 hover:bg-brand-50 border border-slate-200 transition">
                                <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}
                    </div>

                    <div class="flex items-center gap-1.5">
                        <button onclick="openOutreachModal('${empresa.id}', event)" 
                                class="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] px-2.5 py-1 rounded-md transition shadow-2xs">
                            <i data-lucide="send" class="w-3 h-3"></i>
                            Mensagem
                        </button>
                        
                        <button onclick="openStitchModal('${empresa.id}', event)" 
                                class="flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold text-[11px] px-2.5 py-1 rounded-md transition">
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
// MAPA — MARCADORES
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
                <p class="text-[11px] text-slate-500 my-1">${empresa.nicho}</p>
                <div class="flex items-center gap-1 mt-2 flex-wrap">
                    ${hasWa ? `
                        <a href="https://wa.me/${empresa.whatsapp_raw}" target="_blank" class="text-[10px] bg-emerald-600 text-white font-bold px-2 py-1 rounded">WhatsApp</a>
                    ` : ''}
                    <a href="${empresa.maps_url}" target="_blank" class="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-2 py-1 rounded">Google Maps</a>
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
            const ll = layer.getLatLng();
            if (Math.abs(ll.lat - empresa.lat) < 0.0001 && Math.abs(ll.lng - empresa.lng) < 0.0001) {
                layer.openPopup();
            }
        });
    }
}

function highlightCard(empresaId) {
    document.querySelectorAll('[id^="card-"]').forEach(c => c.classList.remove("ring-2", "ring-brand-500", "bg-brand-50/40"));
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
// MODAIS — OUTREACH & STITCH
// ==========================================

function openOutreachModal(empresaId, event) {
    if (event) event.stopPropagation();
    const empresa = currentEmpresas.find(e => e.id === empresaId);
    if (!empresa) return;
    const msgs = generateOutreachMessagesClient(empresa);
    currentOutreachData = { empresa_nome: empresa.nome, whatsapp: empresa.whatsapp, mensagens: msgs };
    document.getElementById("modal-outreach-title").textContent = `Mensagens para: ${empresa.nome}`;
    document.getElementById("outreach-target-wa").textContent = empresa.whatsapp || "Não encontrado — verifique no Google Maps";
    selectOutreachTab(0);
    document.getElementById("modal-outreach").classList.remove("hidden");
    lucide.createIcons();
}

function selectOutreachTab(index) {
    if (!currentOutreachData || !currentOutreachData.mensagens[index]) return;
    const msg = currentOutreachData.mensagens[index];
    document.getElementById("current-pitch-title").textContent = msg.titulo;
    document.getElementById("current-pitch-text").textContent = msg.texto;
    document.getElementById("btn-open-wa-direct").href = msg.wa_link;
    document.querySelectorAll("#outreach-tabs .tab-btn").forEach((tab, idx) => {
        tab.className = idx === index
            ? "tab-btn font-semibold px-3 py-1.5 rounded-lg transition bg-emerald-600 text-white shadow-xs"
            : "tab-btn font-semibold px-3 py-1.5 rounded-lg transition bg-slate-100 text-slate-700 hover:bg-slate-200";
    });
}

function closeOutreachModal() { document.getElementById("modal-outreach").classList.add("hidden"); }
function copyOutreachText() {
    navigator.clipboard.writeText(document.getElementById("current-pitch-text").textContent)
        .then(() => showToast("Mensagem copiada!"));
}

function openStitchModal(empresaId, event) {
    if (event) event.stopPropagation();
    const empresa = currentEmpresas.find(e => e.id === empresaId);
    if (!empresa) return;
    const spec = generateStitchPromptClient(empresa);
    currentStitchPrompt = spec.stitch_prompt;
    document.getElementById("stitch-prompt-content").value = currentStitchPrompt;
    document.getElementById("modal-stitch-subtitle").textContent = `Especificação para: ${empresa.nome} (${empresa.bairro})`;
    const p = spec.palette;
    document.getElementById("stitch-palette-chips").innerHTML = `
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono" style="background-color:${p.primary};color:white;">Primária ${p.primary}</span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono" style="background-color:${p.secondary};color:white;">Secundária ${p.secondary}</span>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-slate-200 text-[10px] font-mono" style="background-color:${p.accent};color:white;">Destaque ${p.accent}</span>
    `;
    document.getElementById("modal-stitch").classList.remove("hidden");
    lucide.createIcons();
}

function closeStitchModal() { document.getElementById("modal-stitch").classList.add("hidden"); }
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
