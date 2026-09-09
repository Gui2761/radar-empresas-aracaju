// Radar Aju — Lógica do Frontend

let map = null;
let markersLayer = null;
let currentEmpresas = [];
let activeEmpresaId = null;
let currentOutreachData = null;
let currentStitchPrompt = "";

// Categorias para estilização de pins
const CATEGORY_PINS = {
    clinica: { class: "pin-clinica", icon: "activity" },
    gastronomia: { class: "pin-gastronomia", icon: "utensils" },
    advocacia: { class: "pin-advocacia", icon: "scale" },
    imobiliaria: { class: "pin-imobiliaria", icon: "home" },
    fitness: { class: "pin-fitness", icon: "dumbbell" },
    pet: { class: "pin-pet", icon: "heart" },
    estetica: { class: "pin-estetica", icon: "sparkles" },
    automotivo: { class: "pin-automotivo", icon: "wrench" },
    varejo: { class: "pin-varejo", icon: "shopping-bag" },
    educacao: { class: "pin-educacao", icon: "book-open" },
    servicos: { class: "pin-servicos", icon: "sun" },
    live_search: { class: "pin-default", icon: "map-pin" }
};

document.addEventListener("DOMContentLoaded", async () => {
    initMap();
    await loadFilters();
    await fetchAndRenderEmpresas();
    setupEventListeners();
    lucide.createIcons();
});

// Inicialização do Mapa Leaflet
function initMap() {
    // Coordenadas centrais de Aracaju (região Jardins / 13 de Julho)
    const ajuCenter = [-10.9472, -37.0731];
    
    map = L.map("map", {
        zoomControl: true,
        scrollWheelZoom: true
    }).setView(ajuCenter, 13);

    // Tiles modernos e limpos (CartoDB Positron)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);
}

// Carrega Bairros e Nichos para os selects
async function loadFilters() {
    try {
        const [bairrosRes, nichosRes] = await Promise.all([
            fetch("/api/bairros").then(r => r.json()),
            fetch("/api/nichos").then(r => r.json())
        ]);

        const selectBairro = document.getElementById("select-bairro");
        selectBairro.innerHTML = bairrosRes.bairros.map(b => `<option value="${b}">${b}</option>`).join("");

        const selectNicho = document.getElementById("select-nicho");
        selectNicho.innerHTML = nichosRes.nichos.map(n => `<option value="${n}">${n}</option>`).join("");
    } catch (e) {
        console.error("Erro ao carregar filtros:", e);
    }
}

// Busca e renderiza empresas
async function fetchAndRenderEmpresas() {
    const nicho = document.getElementById("select-nicho").value;
    const bairro = document.getElementById("select-bairro").value;
    const semSite = document.getElementById("check-no-site").checked;
    const q = document.getElementById("input-search").value;

    const params = new URLSearchParams();
    if (nicho && nicho !== "Todos") params.append("nicho", nicho);
    if (bairro && bairro !== "Todos") params.append("bairro", bairro);
    if (semSite) params.append("sem_site", "true");
    if (q) params.append("q", q);

    try {
        const res = await fetch(`/api/empresas?${params.toString()}`);
        const data = await res.json();
        currentEmpresas = data.empresas;

        renderLeadsList(currentEmpresas);
        renderMapMarkers(currentEmpresas);
        updateCounters(currentEmpresas);
    } catch (e) {
        console.error("Erro ao buscar empresas:", e);
    }
}

// Renderiza a lista de Cards
function renderLeadsList(empresas) {
    const container = document.getElementById("leads-container");
    const countLabel = document.getElementById("label-results-count");
    countLabel.textContent = `${empresas.length} empresas`;

    if (empresas.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-56 text-slate-400 text-center p-6">
                <i data-lucide="search-x" class="w-10 h-10 text-slate-300 mb-2"></i>
                <p class="text-sm font-semibold text-slate-600">Nenhuma empresa encontrada</p>
                <p class="text-xs text-slate-400 mt-1">Tente ajustar os filtros de bairro, nicho ou faça uma busca ao vivo.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    container.innerHTML = empresas.map(empresa => {
        const hasSite = Boolean(empresa.website);
        const pinConfig = CATEGORY_PINS[empresa.categoria_tag] || CATEGORY_PINS.default;

        return `
            <div id="card-${empresa.id}" onclick="focusEmpresa('${empresa.id}')" 
                 class="group p-3.5 rounded-xl border border-slate-200/80 hover:border-brand-500 bg-white hover:bg-brand-50/20 transition-all cursor-pointer shadow-2xs">
                
                <!-- Card Header -->
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
                                    🎯 Sem Site Oficial
                                </span>
                            ` : ''}
                        </div>
                        <h3 class="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition">
                            ${empresa.nome}
                        </h3>
                    </div>

                    <!-- Google Maps Rating Badge -->
                    <div class="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200/70 px-2 py-1 rounded-lg text-xs font-bold shrink-0">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-500"></i>
                        <span>${empresa.google_rating}</span>
                        <span class="text-[10px] text-amber-600 font-normal">(${empresa.google_reviews_count})</span>
                    </div>
                </div>

                <!-- Brief Description -->
                <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    ${empresa.descricao}
                </p>

                <!-- Opportunity snippet -->
                <div class="mt-2 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start gap-1.5">
                    <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i>
                    <span class="line-clamp-2"><strong>Diagnóstico:</strong> ${empresa.oportunidade_digital}</span>
                </div>

                <!-- Channels & Direct Actions -->
                <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                    
                    <!-- Contacts -->
                    <div class="flex items-center gap-2">
                        <!-- Direct WhatsApp -->
                        <a href="https://wa.me/${empresa.whatsapp_raw}" target="_blank" onclick="event.stopPropagation()"
                           title="Chamar no WhatsApp" 
                           class="flex items-center gap-1 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-1 rounded-md font-semibold transition">
                            <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
                            ${empresa.whatsapp ? empresa.whatsapp.split(" ")[2] || "WhatsApp" : "WhatsApp"}
                        </a>

                        <!-- Google Maps Link -->
                        <a href="${empresa.maps_url}" target="_blank" onclick="event.stopPropagation()"
                           title="Abrir no Google Maps"
                           class="p-1 rounded-md text-slate-500 hover:text-sky-600 hover:bg-sky-50 border border-slate-200 transition">
                            <i data-lucide="map" class="w-3.5 h-3.5"></i>
                        </a>

                        <!-- Instagram -->
                        ${empresa.instagram ? `
                            <a href="https://instagram.com/${empresa.instagram.replace('@', '')}" target="_blank" onclick="event.stopPropagation()"
                               title="Ver Instagram"
                               class="p-1 rounded-md text-slate-500 hover:text-pink-600 hover:bg-pink-50 border border-slate-200 transition">
                                <i data-lucide="instagram" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}
                    </div>

                    <!-- AI Actions (Outreach & Google Stitch) -->
                    <div class="flex items-center gap-1.5">
                        <button onclick="openOutreachModal('${empresa.id}', event)" 
                                class="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] px-2.5 py-1 rounded-md transition shadow-2xs">
                            <i data-lucide="send" class="w-3 h-3"></i>
                            Mensagem
                        </button>
                        
                        <button onclick="openStitchModal('${empresa.id}', event)" 
                                class="flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold text-[11px] px-2.5 py-1 rounded-md transition">
                            <i data-lucide="sparkles" class="w-3 h-3 text-indigo-600"></i>
                            Stitch Spec
                        </button>
                    </div>

                </div>

            </div>
        `;
    }).join("");

    lucide.createIcons();
}

// Renderiza Marcadores no Mapa Leaflet
function renderMapMarkers(empresas) {
    markersLayer.clearLayers();

    if (empresas.length === 0) return;

    const bounds = [];

    empresas.forEach(empresa => {
        if (!empresa.lat || !empresa.lng) return;

        const pinConfig = CATEGORY_PINS[empresa.categoria_tag] || CATEGORY_PINS.default;

        // Custom HTML Marker Icon
        const customIcon = L.divIcon({
            className: "custom-div-icon",
            html: `
                <div class="custom-pin ${pinConfig.class}">
                    <span style="font-size: 11px; font-weight: bold;">📍</span>
                </div>
            `,
            iconSize: [34, 34],
            iconAnchor: [17, 34],
            popupAnchor: [0, -34]
        });

        const marker = L.marker([empresa.lat, empresa.lng], { icon: customIcon });

        // Popup Content
        const popupContent = `
            <div class="p-1 max-w-[220px]">
                <span class="text-[10px] font-bold text-slate-400 uppercase">${empresa.bairro}</span>
                <h4 class="text-xs font-bold text-slate-900 leading-snug">${empresa.nome}</h4>
                <p class="text-[11px] text-amber-700 font-semibold my-1">★ ${empresa.google_rating} (${empresa.google_reviews_count} avaliações)</p>
                <div class="flex items-center gap-1 mt-2">
                    <a href="https://wa.me/${empresa.whatsapp_raw}" target="_blank" class="text-[10px] bg-emerald-600 text-white font-bold px-2 py-1 rounded">
                        WhatsApp
                    </a>
                    <a href="${empresa.maps_url}" target="_blank" class="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-2 py-1 rounded">
                        Google Maps
                    </a>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent);
        marker.on("click", () => {
            highlightCard(empresa.id);
        });

        markersLayer.addLayer(marker);
        bounds.push([empresa.lat, empresa.lng]);
    });

    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }
}

// Sincroniza clique do Card para o Mapa
function focusEmpresa(empresaId) {
    const empresa = currentEmpresas.find(e => e.id === empresaId);
    if (!empresa) return;

    highlightCard(empresaId);

    if (empresa.lat && empresa.lng) {
        map.flyTo([empresa.lat, empresa.lng], 16, { animate: true, duration: 1 });
        
        // Abre o popup do marcador correspondente
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

// Atualiza contadores do Header
function updateCounters(empresas) {
    const totalEl = document.getElementById("counter-total");
    const noSiteEl = document.getElementById("counter-no-site");

    const total = empresas.length;
    const noSite = empresas.filter(e => !e.website).length;

    totalEl.textContent = total;
    noSiteEl.textContent = noSite;
}

// Event Listeners dos Filtros
function setupEventListeners() {
    document.getElementById("select-nicho").addEventListener("change", fetchAndRenderEmpresas);
    document.getElementById("select-bairro").addEventListener("change", fetchAndRenderEmpresas);
    document.getElementById("check-no-site").addEventListener("change", fetchAndRenderEmpresas);

    // Busca com debounce
    let debounceTimer;
    document.getElementById("input-search").addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(fetchAndRenderEmpresas, 350);
    });

    // Busca ao Vivo via Nominatim / Maps
    document.getElementById("btn-live-search").addEventListener("click", performLiveSearch);

    // Exportar CSV
    document.getElementById("btn-export-csv").addEventListener("click", () => {
        const nicho = document.getElementById("select-nicho").value;
        const bairro = document.getElementById("select-bairro").value;
        const semSite = document.getElementById("check-no-site").checked;
        const q = document.getElementById("input-search").value;

        const params = new URLSearchParams();
        if (nicho && nicho !== "Todos") params.append("nicho", nicho);
        if (bairro && bairro !== "Todos") params.append("bairro", bairro);
        if (semSite) params.append("sem_site", "true");
        if (q) params.append("q", q);

        window.location.href = `/api/exportar/csv?${params.toString()}`;
    });
}

// Busca ao Vivo (OpenStreetMap / Web Aracaju)
async function performLiveSearch() {
    const termo = document.getElementById("input-search").value.trim();
    if (!termo) {
        showToast("Digite um termo para pesquisar em Aracaju!");
        return;
    }

    showToast(`Buscando "${termo}" ao vivo no mapa de Aracaju...`);
    const btn = document.getElementById("btn-live-search");
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="loader" class="w-3 h-3 animate-spin"></i> Buscando...`;
    lucide.createIcons();

    try {
        const res = await fetch(`/api/busca-ao-vivo?termo=${encodeURIComponent(termo)}`);
        const data = await res.json();
        
        if (data.empresas && data.empresas.length > 0) {
            // Mescla leads ao vivo com os existentes evitando duplicados
            const novos = data.empresas.filter(ne => !currentEmpresas.some(ce => ce.nome.toLowerCase() === ne.nome.toLowerCase()));
            currentEmpresas = [...novos, ...currentEmpresas];
            
            renderLeadsList(currentEmpresas);
            renderMapMarkers(currentEmpresas);
            updateCounters(currentEmpresas);
            showToast(`${data.empresas.length} estabelecimentos encontrados no mapa!`);
        } else {
            showToast("Nenhum novo local retornado na busca ao vivo. Mostrando catálogo local.");
            fetchAndRenderEmpresas();
        }
    } catch (e) {
        console.error(e);
        showToast("Erro ao conectar à busca ao vivo. Verifique a conexão.");
    } finally {
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
}

// ==========================================
// MODAL DE MENSAGENS DE PROSPECÇÃO (OUTREACH)
// ==========================================

async function openOutreachModal(empresaId, event) {
    if (event) event.stopPropagation();
    
    try {
        const res = await fetch(`/api/empresa/${empresaId}/mensagens`);
        currentOutreachData = await res.json();

        document.getElementById("modal-outreach-title").textContent = `Mensagens para: ${currentOutreachData.empresa_nome}`;
        document.getElementById("outreach-target-wa").textContent = currentOutreachData.whatsapp || "Não informado";

        selectOutreachTab(0);

        document.getElementById("modal-outreach").classList.remove("hidden");
        lucide.createIcons();
    } catch (e) {
        console.error("Erro ao carregar mensagens:", e);
        showToast("Erro ao carregar mensagens de prospecção.");
    }
}

function selectOutreachTab(index) {
    if (!currentOutreachData || !currentOutreachData.mensagens[index]) return;

    const msg = currentOutreachData.mensagens[index];
    document.getElementById("current-pitch-title").textContent = msg.titulo;
    document.getElementById("current-pitch-text").textContent = msg.texto;

    const btnWa = document.getElementById("btn-open-wa-direct");
    btnWa.href = msg.wa_link;

    // Atualiza botões das abas
    const tabs = document.querySelectorAll("#outreach-tabs .tab-btn");
    tabs.forEach((tab, idx) => {
        if (idx === index) {
            tab.className = "tab-btn font-semibold px-3 py-1.5 rounded-lg transition bg-emerald-600 text-white shadow-xs";
        } else {
            tab.className = "tab-btn font-semibold px-3 py-1.5 rounded-lg transition bg-slate-100 text-slate-700 hover:bg-slate-200";
        }
    });
}

function closeOutreachModal() {
    document.getElementById("modal-outreach").classList.add("hidden");
}

function copyOutreachText() {
    const text = document.getElementById("current-pitch-text").textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast("Mensagem copiada para a área de transferência!");
    });
}

// ==========================================
// MODAL DO GOOGLE STITCH PROTOTYPER SPEC
// ==========================================

async function openStitchModal(empresaId, event) {
    if (event) event.stopPropagation();

    try {
        const res = await fetch(`/api/empresa/${empresaId}/stitch`);
        const data = await res.json();

        currentStitchPrompt = data.stitch_prompt;
        document.getElementById("stitch-prompt-content").value = currentStitchPrompt;
        document.getElementById("modal-stitch-subtitle").textContent = `Especificação pronta para gerar protótipo de: ${data.empresa_nome} (${data.bairro})`;

        // Renderiza paleta de cores
        const paletteContainer = document.getElementById("stitch-palette-chips");
        const p = data.palette;
        paletteContainer.innerHTML = `
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
    } catch (e) {
        console.error("Erro ao gerar prompt do Stitch:", e);
        showToast("Erro ao carregar prompt do Google Stitch.");
    }
}

function closeStitchModal() {
    document.getElementById("modal-stitch").classList.add("hidden");
}

function copyStitchPrompt() {
    if (!currentStitchPrompt) return;
    navigator.clipboard.writeText(currentStitchPrompt).then(() => {
        showToast("Prompt do Google Stitch copiado com sucesso!");
    });
}

// ==========================================
// TOAST NOTIFICATION HELPER
// ==========================================

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    toastMsg.textContent = message;

    toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
        toast.classList.remove("translate-y-0", "opacity-100");
    }, 3000);
}
