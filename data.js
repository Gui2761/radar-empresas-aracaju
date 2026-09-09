// Radar Aju — Base de Dados Client-Side
// Base local VAZIA: todas as empresas são buscadas ao vivo via OpenStreetMap

const EMPRESAS_DATA = [];

function getLocalBairros() {
    return ["Todos"];
}

function getLocalNichos() {
    return ["Todos"];
}

function filterLocalEmpresas(nicho, bairro, apenasSemSite, query) {
    return [];
}

function getEmpresaById(id) {
    return null;
}

// Gerador de Mensagens de Prospecção Client-Side
function generateOutreachMessagesClient(empresa) {
    const nome = empresa.nome;
    const nicho = empresa.nicho;
    const bairro = empresa.bairro;
    const cidade = empresa.cidade;
    const whatsapp_raw = empresa.whatsapp_raw || "";
    const rating = empresa.google_rating || 4.5;
    const reviews = empresa.google_reviews_count || 30;
    const tem_site = Boolean(empresa.website);

    let msg1_titulo = tem_site ? "🚀 Modernização & Conversão Web Mobile" : "🌐 Criação de Landing Page de Alta Conversão";
    let msg1_corpo = !tem_site
        ? `Olá, tudo bem? Notei o trabalho de excelência da ${nome} aqui no bairro ${bairro}! Vocês têm uma nota impressionante de ${rating}★ com ${reviews} avaliações no Google Maps, parabéns! 👏\n\nPercebi que quando alguém pesquisa por ${nicho} em Aracaju, vocês ainda não contam com uma página oficial exclusiva para receber os clientes e fechar agendamentos automáticos no WhatsApp.\n\nEu desenvolvo páginas e protótipos de alta conversão aqui na região. Montei uma proposta visual sob medida para a ${nome} que pode dobrar o volume de contatos diários de vocês.\n\nPosso te mandar um link com o modelo de teste sem compromisso para você dar uma olhada?`
        : `Olá equipe da ${nome}, tudo bem? Acompanho a referência de vocês em ${bairro} e o padrão de qualidade nota ${rating}★ no Google!\n\nEstava analisando a presença digital de vocês no celular e identifiquei 2 ajustes rápidos no site que podem acelerar a conversão direta de clientes para o WhatsApp de vocês, especialmente à noite e fins de semana.\n\nCriei uma demonstração rápida de como essa nova estrutura ficaria para a ${nome}.\n\nPoderia compartilhar um print ou link de 1 minuto para vocês avaliarem?`;

    let msg2_titulo = "📍 Domínio do Google Maps & Buscas Locais em Aracaju";
    let msg2_corpo = `Olá! Tudo bem com a equipe da ${nome}?\n\nEstava pesquisando por recomendações de ${nicho} aqui na região de ${bairro} e encontrei o perfil de vocês no Maps. A reputação de vocês é excelente (${rating} estrelas)! ⭐\n\nNo entanto, identifiquei que com pequenos ajustes na descrição, palavras-chave da Grande Aracaju e botões de chamada rápida, a ${nome} pode aparecer no Top 1 do mapa para quem pesquisa no celular na 13 de Julho, Jardins e Atalaia.\n\nTenho um diagnóstico gratuito de 3 pontos para elevar a posição de vocês. Posso enviar por aqui?`;

    let msg3_titulo = "🤖 Automação de Atendimento & Captação Noturna";
    let msg3_corpo = `Oi, pessoal da ${nome}! Tudo joia?\n\nQuem atende o WhatsApp de vocês sabe o quanto o dia a dia é corrido respondendo as mesmas dúvidas de preços, localização no ${bairro} e agendamentos.\n\nImplementamos uma solução prática de triagem automática que responde dúvidas na hora, 24 horas por dia, e já entrega o cliente pronto para vocês fecharem pelo WhatsApp sem perder nenhum lead.\n\nGostaria de ver uma demonstração interativa de 30 segundos simulando a ${nome}?`;

    let msg4_titulo = "🤝 Proposta de Parceria & Demonstração Rápida";
    let msg4_corpo = `Olá! Meu nome é [Seu Nome], atuo com soluções digitais e crescimento de negócios aqui em Aracaju e região.\n\nAdmiro muito a atuação da ${nome} em ${cidade}. Preparei um protótipo visual completo e interativo de um novo portal para vocês no ${bairro}, com foco em atração de novos clientes locais.\n\nNão tem custo nenhum para visualizar. Se fizer sentido para o momento de vocês, podemos conversar! Posso enviar o link?`;

    const modelos = [
        { tipo: "site", titulo: msg1_titulo, texto: msg1_corpo },
        { tipo: "maps", titulo: msg2_titulo, texto: msg2_corpo },
        { tipo: "automacao", titulo: msg3_titulo, texto: msg3_corpo },
        { tipo: "parceria", titulo: msg4_titulo, texto: msg4_corpo }
    ];

    modelos.forEach(m => {
        const encoded = encodeURIComponent(m.texto);
        m.wa_link = whatsapp_raw ? `https://wa.me/${whatsapp_raw}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
    });

    return modelos;
}

// Gerador de Prompt para o Google Stitch Client-Side
function generateStitchPromptClient(empresa) {
    const nome = empresa.nome;
    const nicho = empresa.nicho;
    const bairro = empresa.bairro;
    const cidade = empresa.cidade;
    const endereco = empresa.endereco || "";
    const whatsapp = empresa.whatsapp || "";
    const whatsapp_raw = empresa.whatsapp_raw || "";
    const rating = empresa.google_rating || 4.5;
    const reviews = empresa.google_reviews_count || 30;
    const descricao = empresa.descricao || "";
    const pontos_fortes = empresa.pontos_fortes || "";
    const oportunidade = empresa.oportunidade_digital || "";
    const palette = empresa.stitch_palette || { primary: "#0D9488", secondary: "#14B8A6", accent: "#0F766E", bg: "#F8FAFC" };

    const promptText = `[GOOGLE STITCH PROTOTYPE SPECIFICATION - ${nome.toUpperCase()}]

# 1. OBJETIVO DO PROTÓTIPO
Criar uma Landing Page moderna, de altíssima conversão e mobile-first para a empresa "${nome}", localizada no bairro ${bairro} em ${cidade} - SE.
Foco principal: Transformar visitantes locais em contatos imediatos no WhatsApp (${whatsapp}) e agendamentos diretos.

# 2. DESIGN SYSTEM & IDENTIDADE VISUAL
- Paleta de Cores:
  * Cor Primária (Autoridade/Branding): ${palette.primary}
  * Cor Secundária (Destaques e Cards): ${palette.secondary}
  * Cor de Destaque / CTA (Ação e Botões): ${palette.accent}
  * Fundo / Background: ${palette.bg}
  * Tipografia: 'Inter' ou 'Plus Jakarta Sans' para títulos fortes e legíveis.
  * Estilo: Clean, minimalista, bordas arredondadas (rounded-2xl), sombras suaves (shadow-sm/shadow-md).

# 3. ESTRUTURA DAS SEÇÕES
1. NAVBAR FIXO:
   - Logotipo moderno "${nome}".
   - Links âncora: Início, Sobre, Serviços, Depoimentos, Localização.
   - Botão de Ação Rápida (CTA): "Fale Conosco" com ícone do WhatsApp.

2. HERO SECTION (Destaque Principal):
   - Selo de Prova Social: "★ ${rating} (${reviews} avaliações no Google Maps em ${bairro})".
   - Headline de Alto Impacto personalizada para o nicho de ${nicho}.
   - Subtítulo com proposta de valor: "${descricao}".
   - Dois CTAs: [Agendar Atendimento via WhatsApp] (verde) e [Conhecer Serviços] (outline).

3. BARRA DE AUTORIDADE / DESTAQUES:
   - 3 a 4 pilares: "${pontos_fortes}".

4. GRADE DE SERVIÇOS / PRODUTOS (Cards Interativos):
   - Cards com ícones, breve descrição e botão "Solicitar Orçamento".

5. DIFERENCIAIS & HISTÓRIA LOCAL:
   - Conteúdo conectando a marca à comunidade de ${cidade} e ${bairro}.
   - Solução para: "${oportunidade}".

6. PROVA SOCIAL & AVALIAÇÕES GOOGLE:
   - Carrossel com depoimentos de clientes satisfeitos.
   - Card com nota ${rating}/5 estrelas e link para o perfil do Google Maps.

7. LOCALIZAÇÃO E CONTATO:
   - Endereço completo: "${endereco}".
   - Horários de funcionamento e mapa interativo integrado.
   - Botão de rota: "Abrir no Google Maps".

8. BOTÃO FLUTUANTE DO WHATSAPP:
   - Posicionado no canto inferior direito com pulsação suave.
   - Link direto: https://wa.me/${whatsapp_raw}?text=Olá!%20Encontrei%20vocês%20no%20site%20e%20gostaria%20de%20mais%20informações.

# 4. DIRETRIZES TÉCNICAS
- Stack: HTML5 semântico, Tailwind CSS v3/v4, Lucide Icons e JavaScript nativo.
- Totalmente responsivo: perfeito em telas de iPhone/Android e monitores 4K.
- Performance: Código limpo, carregamento instantâneo, acessibilidade (WCAG AA).`;

    return {
        empresa_id: empresa.id,
        empresa_nome: nome,
        nicho: nicho,
        bairro: bairro,
        cidade: cidade,
        stitch_prompt: promptText,
        palette: palette
    };
}

// Exportador CSV Client-Side
function exportLeadsToCSVClient(empresas) {
    const headers = ["Nome", "Nicho", "Bairro", "Cidade", "WhatsApp", "Telefone", "Instagram", "Tem Site?", "Website", "Endereço", "Google Maps"];
    
    const rows = empresas.map(e => [
        `"${(e.nome || "").replace(/"/g, '""')}"`,
        `"${(e.nicho || "").replace(/"/g, '""')}"`,
        `"${(e.bairro || "").replace(/"/g, '""')}"`,
        `"${(e.cidade || "").replace(/"/g, '""')}"`,
        `"${(e.whatsapp || "").replace(/"/g, '""')}"`,
        `"${(e.telefone || "").replace(/"/g, '""')}"`,
        `"${(e.instagram || "").replace(/"/g, '""')}"`,
        `"${e.website ? "Sim" : "Não"}"`,
        `"${(e.website || "Sem site").replace(/"/g, '""')}"`,
        `"${(e.endereco || "").replace(/"/g, '""')}"`,
        `"${(e.maps_url || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map(r => r.join(";"))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "leads_aracaju.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
