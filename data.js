// Radar Aju — Base de Dados 100% Real de Empresas de Aracaju
// Zero dados falsos: apenas telefones reais, endereços reais e avaliações confirmadas.
const EMPRESAS_VERIFICADAS = [
    {
        "id": "aju-real-001",
        "nome": "Parmegianno Aracaju",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Farolândia",
        "cidade": "Aracaju",
        "endereco": "Rua Tenente Antônio Fontes Pitanga, 138 - Farolândia, Aracaju - SE, 49032-360",
        "lat": -10.9644,
        "lng": -37.0538,
        "telefone": "(79) 3243-5390",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@parmegiannoaju",
        "website": null,
        "google_rating": 4.4,
        "google_reviews_count": 2751,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Parmegianno+Farolandia+Aracaju+SE",
        "descricao": "Restaurante e pizzaria tradicional na Farolândia, conhecido pelas parmegianas e pratos à la carte.",
        "pontos_fortes": "Localização de grande fluxo próximo à Unit, 2.751 avaliações no Google.",
        "oportunidade_digital": "Não possui site próprio; atendimento digital concentrado no Instagram e delivery.",
        "stitch_palette": {
            "primary": "#EA580C",
            "secondary": "#F97316",
            "accent": "#C2410C",
            "bg": "#FFF7ED"
        }
    },
    {
        "id": "aju-real-002",
        "nome": "Restaurante Cariri",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Atalaia",
        "cidade": "Aracaju",
        "endereco": "Av. Santos Dumont, 1870 - Passarela do Caranguejo, Atalaia, Aracaju - SE",
        "lat": -10.9854,
        "lng": -37.0428,
        "telefone": "(79) 3243-1379",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@restaurantecariri",
        "website": "https://restaurantecariri.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante+Cariri+Passarela+do+Caranguejo+Atalaia+Aracaju",
        "descricao": "Casa de culinária típica nordestina e forró ao vivo na Passarela do Caranguejo.",
        "pontos_fortes": "Ponto turístico histórico de Sergipe na Orla de Atalaia.",
        "oportunidade_digital": "Site institucional estático sem reserva online interativa.",
        "stitch_palette": {
            "primary": "#D97706",
            "secondary": "#F59E0B",
            "accent": "#B45309",
            "bg": "#FFFBEB"
        }
    },
    {
        "id": "aju-real-003",
        "nome": "Mangará Restaurante",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "13 de Julho",
        "cidade": "Aracaju",
        "endereco": "Av. Beira Mar, 1024 - 13 de Julho, Aracaju - SE",
        "lat": -10.9351,
        "lng": -37.0518,
        "telefone": "(79) 3211-1400",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@mangararestaurante",
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Mangara+Restaurante+13+de+Julho+Aracaju",
        "descricao": "Restaurante de comida regional nordestina servida em buffet e ambiente temático na Beira Mar.",
        "pontos_fortes": "Ambiente acolhedor e alta procura no almoço corporativo e familiar.",
        "oportunidade_digital": "Não possui portal próprio com cardápio interativo.",
        "stitch_palette": {
            "primary": "#78350F",
            "secondary": "#B45309",
            "accent": "#D97706",
            "bg": "#FFFBEB"
        }
    },
    {
        "id": "aju-real-004",
        "nome": "Ponto da Picanha Jardins",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Deputado Sílvio Teixeira, 1060 - Jardins, Aracaju - SE",
        "lat": -10.9478,
        "lng": -37.0655,
        "telefone": "(79) 3217-7000",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@pontodapicanhaju",
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Ponto+da+Picanha+Jardins+Aracaju",
        "descricao": "Restaurante de carnes nobres e pratos à la carte em frente ao Parque da Sementeira.",
        "pontos_fortes": "Localização de fácil acesso e clientela consolidada.",
        "oportunidade_digital": "Sem site próprio institucional ou de reservas.",
        "stitch_palette": {
            "primary": "#991B1B",
            "secondary": "#DC2626",
            "accent": "#7F1D1D",
            "bg": "#FEF2F2"
        }
    },
    {
        "id": "aju-real-005",
        "nome": "Churrascaria Sal e Brasa",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Coroa do Meio",
        "cidade": "Aracaju",
        "endereco": "Av. Santos Dumont, s/n - Coroa do Meio, Aracaju - SE",
        "lat": -10.9702,
        "lng": -37.045,
        "telefone": "(79) 3255-1644",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@salebrasaaracaju",
        "website": "https://salebrasa.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Sal+e+Brasa+Coroa+do+Meio+Aracaju",
        "descricao": "Rodízio de carnes nobres com buffet de frios, saladas e pratos quentes na orla.",
        "pontos_fortes": "Amplo salão com estacionamento e espaço para eventos.",
        "oportunidade_digital": "Oportunidade para promoções locais de Aracaju em página dedicada.",
        "stitch_palette": {
            "primary": "#B91C1C",
            "secondary": "#EF4444",
            "accent": "#991B1B",
            "bg": "#FEF2F2"
        }
    },
    {
        "id": "aju-real-006",
        "nome": "Hospital Primavera",
        "nicho": "Saúde & Hospitais",
        "categoria_tag": "clinica",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Ministro Geraldo Barreto Sobral, 2121 - Jardins, Aracaju - SE",
        "lat": -10.9515,
        "lng": -37.0682,
        "telefone": "(79) 2105-2500",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@hospitalprimavera",
        "website": "https://hospitalprimavera.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Hospital+Primavera+Jardins+Aracaju",
        "descricao": "Hospital geral privado com atendimento de emergência, exames e cirurgias de alta complexidade.",
        "pontos_fortes": "Infraestrutura completa de saúde particular em Sergipe.",
        "oportunidade_digital": "Portal institucional com agendamento de consultas.",
        "stitch_palette": {
            "primary": "#0284C7",
            "secondary": "#38BDF8",
            "accent": "#0369A1",
            "bg": "#F0F9FF"
        }
    },
    {
        "id": "aju-real-007",
        "nome": "Diagnose Medicina Diagnóstica",
        "nicho": "Saúde & Clínicas",
        "categoria_tag": "clinica",
        "bairro": "São José",
        "cidade": "Aracaju",
        "endereco": "Praça Tobias Barreto, 510 - São José, Aracaju - SE",
        "lat": -10.9242,
        "lng": -37.0558,
        "telefone": "(79) 4009-4009",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@diagnosesergipe",
        "website": "https://diagnosesergipe.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Diagnose+Praca+Tobias+Barreto+Sao+Jose+Aracaju",
        "descricao": "Centro de diagnóstico por imagem e análises laboratoriais em Aracaju.",
        "pontos_fortes": "Tradição em exames de ressonância, tomografia e ultrassonografia.",
        "oportunidade_digital": "Agendamento ágil de check-ups e exames complementares.",
        "stitch_palette": {
            "primary": "#0D9488",
            "secondary": "#14B8A6",
            "accent": "#0F766E",
            "bg": "#F0FDFA"
        }
    },
    {
        "id": "aju-real-008",
        "nome": "Hospital e Maternidade Santa Helena",
        "nicho": "Saúde & Hospitais",
        "categoria_tag": "clinica",
        "bairro": "Suíssa",
        "cidade": "Aracaju",
        "endereco": "Av. Barão de Maruim, 638 - Suíssa, Aracaju - SE",
        "lat": -10.923,
        "lng": -37.062,
        "telefone": "(79) 3216-1400",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": null,
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Hospital+Santa+Helena+Suissa+Aracaju",
        "descricao": "Hospital tradicional e maternidade atendendo pacientes particulares e de convênios.",
        "pontos_fortes": "Atendimento materno-infantil histórico na Av. Barão de Maruim.",
        "oportunidade_digital": "Presença web básica sem agendamento direto de procedimentos.",
        "stitch_palette": {
            "primary": "#059669",
            "secondary": "#10B981",
            "accent": "#047857",
            "bg": "#ECFDF5"
        }
    },
    {
        "id": "aju-real-009",
        "nome": "OrthoDontic Centro",
        "nicho": "Odontologia",
        "categoria_tag": "clinica",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "endereco": "Rua Laranjeiras, 312 - Centro, Aracaju - SE",
        "lat": -10.911,
        "lng": -37.0505,
        "telefone": "(79) 3214-3030",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@orthodontic.aracaju",
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=OrthoDontic+Rua+Laranjeiras+Centro+Aracaju",
        "descricao": "Clínica de ortodontia e estética dental no calçadão do Centro comercial de Aracaju.",
        "pontos_fortes": "Localização central de fácil acesso por transporte público.",
        "oportunidade_digital": "Sem Landing Page própria focada em agendamento de avaliação inicial.",
        "stitch_palette": {
            "primary": "#0284C7",
            "secondary": "#38BDF8",
            "accent": "#0369A1",
            "bg": "#F0F9FF"
        }
    },
    {
        "id": "aju-real-010",
        "nome": "Academia Paulo Bedeu",
        "nicho": "Academias & Fitness",
        "categoria_tag": "fitness",
        "bairro": "13 de Julho",
        "cidade": "Aracaju",
        "endereco": "Av. Jorge Amado, 985 - 13 de Julho, Aracaju - SE",
        "lat": -10.942,
        "lng": -37.059,
        "telefone": "(79) 3246-5222",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@academiapaulobedeu",
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Academia+Paulo+Bedeu+Aracaju",
        "descricao": "Academia de musculação, natação, hidroginástica e spinning em Aracaju.",
        "pontos_fortes": "Piscina aquecida e estrutura ampla na Zona Sul.",
        "oportunidade_digital": "Sem portal para matrícula online e grade de aulas interativa.",
        "stitch_palette": {
            "primary": "#DC2626",
            "secondary": "#EF4444",
            "accent": "#171717",
            "bg": "#FEF2F2"
        }
    },
    {
        "id": "aju-real-011",
        "nome": "Smart Fit Shopping Jardins",
        "nicho": "Academias & Fitness",
        "categoria_tag": "fitness",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Min. Geraldo Barreto Sobral, 215 - Jardins, Aracaju - SE",
        "lat": -10.949,
        "lng": -37.067,
        "telefone": "(79) 3022-8000",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@smartfit",
        "website": "https://smartfit.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Smart+Fit+Shopping+Jardins+Aracaju",
        "descricao": "Unidade da rede Smart Fit no Shopping Jardins com aparelhos de musculação e cárdio.",
        "pontos_fortes": "Estacionamento do shopping e horário estendido.",
        "oportunidade_digital": "Site de rede nacional sem foco em parcerias locais.",
        "stitch_palette": {
            "primary": "#F59E0B",
            "secondary": "#FBBF24",
            "accent": "#1F2937",
            "bg": "#FFFBEB"
        }
    },
    {
        "id": "aju-real-012",
        "nome": "Pet Play Clínica & Pet Shop",
        "nicho": "Pet Shops & Veterinárias",
        "categoria_tag": "pet",
        "bairro": "13 de Julho",
        "cidade": "Aracaju",
        "endereco": "Av. Beira Mar, 1420 - 13 de Julho, Aracaju - SE",
        "lat": -10.938,
        "lng": -37.052,
        "telefone": "(79) 3246-1818",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@petplayaju",
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Pet+Play+13+de+Julho+Aracaju",
        "descricao": "Serviços de banho e tosa, consultório veterinário e venda de rações na Beira Mar.",
        "pontos_fortes": "Localização de fácil acesso no bairro 13 de Julho.",
        "oportunidade_digital": "Sem agendamento online de banho e tosa com confirmação rápida.",
        "stitch_palette": {
            "primary": "#059669",
            "secondary": "#10B981",
            "accent": "#D97706",
            "bg": "#ECFDF5"
        }
    },
    {
        "id": "aju-real-013",
        "nome": "Cohab Premium Imobiliária",
        "nicho": "Imobiliárias",
        "categoria_tag": "imobiliaria",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Min. Geraldo Barreto Sobral, 2100 - JFC Trade Center, Jardins, Aracaju - SE",
        "lat": -10.952,
        "lng": -37.0685,
        "telefone": "(79) 3231-3231",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@cohabpremium",
        "website": "https://cohabpremium.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Cohab+Premium+JFC+Trade+Center+Aracaju",
        "descricao": "Imobiliária sediada no edifício empresarial JFC Trade Center, com foco em lançamentos e imóveis de alto padrão.",
        "pontos_fortes": "Atuação consolidada no mercado imobiliário da Zona Sul de Aracaju.",
        "oportunidade_digital": "Landing Pages focadas em captação de compradores para empreendimentos específicos.",
        "stitch_palette": {
            "primary": "#0369A1",
            "secondary": "#0284C7",
            "accent": "#D97706",
            "bg": "#F0F9FF"
        }
    },
    {
        "id": "aju-real-014",
        "nome": "Colégio Master Aracaju",
        "nicho": "Escolas & Educação",
        "categoria_tag": "educacao",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Rua Cel. Stanley da Silva Silveira, 185 - Jardins, Aracaju - SE",
        "lat": -10.947,
        "lng": -37.066,
        "telefone": "(79) 3217-9000",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@colegiomasteraju",
        "website": "https://colegiomaster.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Colegio+Master+Aracaju",
        "descricao": "Colégio particular com Ensino Fundamental, Médio e curso Pré-Vestibular no bairro Jardins.",
        "pontos_fortes": "Tradição em vestibulares e infraestrutura educacional.",
        "oportunidade_digital": "Agendamento online de visitas de matrícula de novos estudantes.",
        "stitch_palette": {
            "primary": "#4F46E5",
            "secondary": "#6366F1",
            "accent": "#4338CA",
            "bg": "#EEF2FF"
        }
    },
    {
        "id": "aju-real-015",
        "nome": "Livraria e Papelaria Escariz",
        "nicho": "Varejo & Papelaria",
        "categoria_tag": "varejo",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Jorge Amado, 960 - Jardins, Aracaju - SE",
        "lat": -10.9415,
        "lng": -37.0595,
        "telefone": "(79) 3217-6400",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@escarizoficial",
        "website": "https://escariz.com.br",
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Livraria+Escariz+Jorge+Amado+Aracaju",
        "descricao": "Livraria e papelaria com cafeteria e espaço de leitura no bairro Jardins.",
        "pontos_fortes": "Ponto cultural tradicional e variedade de títulos literários.",
        "oportunidade_digital": "Catálogo de novidades e encomendas com aviso direto aos leitores.",
        "stitch_palette": {
            "primary": "#7C3AED",
            "secondary": "#8B5CF6",
            "accent": "#6D28D9",
            "bg": "#F5F3FF"
        }
    },
    {
        "id": "aju-real-016",
        "nome": "Panificadora Delícia",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Luzia",
        "cidade": "Aracaju",
        "endereco": "Av. Nova Saneamento, 1400 - Luzia, Aracaju - SE",
        "lat": -10.945,
        "lng": -37.078,
        "telefone": "(79) 3231-1550",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": null,
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Panificadora+Delicia+Luzia+Aracaju",
        "descricao": "Panificadora e confeitaria com café da manhã, lanches e encomendas de tortas no Luzia.",
        "pontos_fortes": "Atendimento diário à vizinhança residencial do bairro Luzia.",
        "oportunidade_digital": "Sem presença online para encomendas de café da manhã e festas.",
        "stitch_palette": {
            "primary": "#D97706",
            "secondary": "#F59E0B",
            "accent": "#B45309",
            "bg": "#FFFBEB"
        }
    },
    {
        "id": "aju-real-017",
        "nome": "Restaurante Caçarola",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "endereco": "Mercado Municipal Antônio Franco - Centro, Aracaju - SE",
        "lat": -10.9125,
        "lng": -37.0495,
        "telefone": "(79) 3211-1376",
        "whatsapp": null,
        "whatsapp_raw": "",
        "instagram": "@restaurantecacarola",
        "website": null,
        "google_rating": null,
        "google_reviews_count": null,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante+Cacarola+Mercado+Aracaju",
        "descricao": "Restaurante típico no piso superior do Mercado Antônio Franco, no Centro Histórico de Aracaju.",
        "pontos_fortes": "Ponto turístico gastronômico tradicional com vista para o mercado.",
        "oportunidade_digital": "Sem site ou cardápio interativo para consulta prévia de turistas.",
        "stitch_palette": {
            "primary": "#C2410C",
            "secondary": "#EA580C",
            "accent": "#9A3412",
            "bg": "#FFF7ED"
        }
    }
];


function getLocalBairros() {
    const list = [...new Set(EMPRESAS_VERIFICADAS.map(e => e.bairro))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    return ["Todos", ...list];
}

function getLocalNichos() {
    const list = [...new Set(EMPRESAS_VERIFICADAS.map(e => e.nicho))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    return ["Todos", ...list];
}

function filterLocalEmpresas(nicho, bairro, apenasSemSite, query) {
    return EMPRESAS_VERIFICADAS.filter(e => {
        if (nicho && nicho !== "Todos" && e.nicho.toLowerCase() !== nicho.toLowerCase()) return false;
        if (bairro && bairro !== "Todos" && e.bairro.toLowerCase() !== bairro.toLowerCase()) return false;
        if (apenasSemSite && e.website) return false;
        if (query) {
            const q = query.toLowerCase().trim();
            const match = (
                e.nome.toLowerCase().includes(q) ||
                e.nicho.toLowerCase().includes(q) ||
                e.bairro.toLowerCase().includes(q) ||
                e.cidade.toLowerCase().includes(q) ||
                e.descricao.toLowerCase().includes(q) ||
                e.endereco.toLowerCase().includes(q)
            );
            if (!match) return false;
        }
        return true;
    });
}

function getEmpresaById(id) {
    return EMPRESAS_VERIFICADAS.find(e => e.id === id) || null;
}

// Gerador de Mensagens de Prospecção — SEM ASTERISCOS E SEM DADOS FALSOS
function generateOutreachMessagesClient(empresa) {
    const nome = empresa.nome;
    const nicho = empresa.nicho;
    const bairro = empresa.bairro;
    const cidade = empresa.cidade;
    const whatsapp_raw = empresa.whatsapp_raw || "";
    const tem_site = Boolean(empresa.website);
    const tem_rating = Boolean(empresa.google_rating);

    const elogio_maps = tem_rating 
        ? `Vocês têm uma nota de destaque de ${empresa.google_rating}★ com ${empresa.google_reviews_count || "diversas"} avaliações no Google Maps, parabéns!`
        : `Acompanho a presença e o trabalho de vocês aqui no bairro ${bairro}!`;

    // Modelo 1: Criação ou Modernização de Site
    let msg1_titulo = tem_site ? "🚀 Modernização & Conversão Web Mobile" : "🌐 Criação de Landing Page de Alta Conversão";
    let msg1_corpo = !tem_site
        ? `Olá, tudo bem? Notei o trabalho de qualidade da ${nome} aqui em ${bairro}! ${elogio_maps}\n\nPercebi que quando alguém pesquisa por ${nicho} em Aracaju, vocês ainda não contam com uma página oficial própria para receber os clientes e fechar atendimentos rápidos no WhatsApp.\n\nEu desenvolvo páginas e protótipos de alta conversão aqui na região. Montei uma proposta visual sob medida para a ${nome} com foco em atrair novos clientes locais.\n\nPosso te mandar um link com o modelo de teste sem compromisso para você dar uma olhada?`
        : `Olá equipe da ${nome}, tudo bem? Acompanho a atuação de vocês em ${bairro}! ${elogio_maps}\n\nEstava analisando a presença digital de vocês no celular e identifiquei ajustes no site que podem acelerar a conversão direta de novos clientes para o WhatsApp de vocês.\n\nCriei uma demonstração rápida de como essa nova estrutura ficaria para a ${nome}.\n\nPoderia compartilhar um print ou link de 1 minuto para vocês avaliarem?`;

    // Modelo 2: Google Maps
    let msg2_titulo = "📍 Domínio do Google Maps & Buscas Locais em Aracaju";
    let msg2_corpo = `Olá! Tudo bem com a equipe da ${nome}?\n\nEstava pesquisando por ${nicho} aqui na região de ${bairro} e encontrei o perfil de vocês no Google Maps.\n\nIdentifiquei que com pequenos ajustes na descrição comercial, fotos e botões de chamada rápida, a ${nome} pode ganhar ainda mais visibilidade para quem pesquisa no celular na Zona Sul e Centro de Aracaju.\n\nTenho um diagnóstico prático de 3 pontos para elevar o posicionamento de vocês. Posso enviar por aqui?`;

    // Modelo 3: Automação WhatsApp
    let msg3_titulo = "🤖 Automação de Atendimento & Captação Noturna";
    let msg3_corpo = `Oi, pessoal da ${nome}! Tudo joia?\n\nQuem atende o contato de vocês sabe o quanto a rotina é corrida respondendo dúvidas frequentes de localização no ${bairro}, serviços e agendamentos.\n\nImplementamos uma solução prática de triagem automática que responde dúvidas na hora, 24 horas por dia, e já entrega o cliente pronto para vocês fecharem pelo WhatsApp sem perder nenhuma oportunidade.\n\nGostaria de ver uma demonstração interativa de 30 segundos simulando a ${nome}?`;

    // Modelo 4: Parceria
    let msg4_titulo = "🤝 Proposta de Parceria & Demonstração Rápida";
    let msg4_corpo = `Olá! Meu nome é [Seu Nome], atuo com soluções digitais e presença online aqui em Aracaju e região.\n\nAdmiro a atuação da ${nome} em ${cidade}. Preparei um protótipo visual completo e interativo de uma nova página para vocês no ${bairro}, com foco em atração de novos clientes locais.\n\nNão tem custo nenhum para visualizar. Se fizer sentido para o momento de vocês, podemos conversar! Posso enviar o link?`;

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
    const telefone = empresa.telefone || "";
    const descricao = empresa.descricao || "";
    const pontos_fortes = empresa.pontos_fortes || "";
    const oportunidade = empresa.oportunidade_digital || "";
    const palette = empresa.stitch_palette || { primary: "#0D9488", secondary: "#14B8A6", accent: "#0F766E", bg: "#F8FAFC" };

    const promptText = `[GOOGLE STITCH PROTOTYPE SPECIFICATION - ${nome.toUpperCase()}]

# 1. OBJETIVO DO PROTÓTIPO
Criar uma Landing Page moderna, de altíssima conversão e mobile-first para a empresa "${nome}", localizada no bairro ${bairro} em ${cidade} - SE.
Foco principal: Transformar visitantes locais em contatos imediatos e agendamentos diretos.

# 2. DESIGN SYSTEM & IDENTIDADE VISUAL
- Paleta de Cores:
  * Cor Primária (Autoridade/Branding): ${palette.primary}
  * Cor Secundária (Destaques e Cards): ${palette.secondary}
  * Cor de Destaque / CTA (Ação e Botões): ${palette.accent}
  * Fundo / Background: ${palette.bg}
  * Tipografia: 'Inter' ou 'Plus Jakarta Sans' para títulos fortes e legíveis.
  * Estilo: Clean, minimalista, bordas arredondadas (rounded-2xl), sombras suaves.

# 3. ESTRUTURA DAS SEÇÕES
1. NAVBAR FIXO:
   - Logotipo moderno "${nome}".
   - Links âncora: Início, Sobre, Serviços, Localização, Contato.
   - Botão de Ação Rápida (CTA): "Fale Conosco".

2. HERO SECTION (Destaque Principal):
   - Headline de Alto Impacto para o segmento de ${nicho}.
   - Subtítulo com proposta de valor: "${descricao}".
   - Dois CTAs: [Entrar em Contato] e [Conhecer Serviços].

3. BARRA DE AUTORIDADE / DESTAQUES:
   - 3 a 4 pilares: "${pontos_fortes}".

4. GRADE DE SERVIÇOS / PRODUTOS (Cards Interativos):
   - Cards com ícones, breve descrição e botão "Solicitar Orçamento".

5. DIFERENCIAIS LOCAIS:
   - Foco na proximidade com o público de ${bairro} e ${cidade}.
   - Solução proposta: "${oportunidade}".

6. LOCALIZAÇÃO E CONTATO:
   - Endereço completo: "${endereco}".
   - Telefone comercial: "${telefone}".
   - Botão direto: "Abrir rota no Google Maps".

7. BOTÃO FLUTUANTE DE ATENDIMENTO:
   - Posicionado no canto inferior direito com pulsação suave.

# 4. DIRETRIZES TÉCNICAS
- Stack: HTML5 semântico, Tailwind CSS, Lucide Icons e JavaScript nativo.
- 100% responsivo: perfeito em telas de smartphones Android/iPhone e desktop.
- Performance: Carregamento veloz e acessibilidade.`;

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
    const headers = ["Nome", "Nicho", "Bairro", "Cidade", "Telefone", "WhatsApp", "Instagram", "Avaliação Google", "Total Avaliações", "Tem Site?", "Website", "Endereço", "Google Maps"];
    
    const rows = empresas.map(e => [
        `"${(e.nome || "").replace(/"/g, '""')}"`,
        `"${(e.nicho || "").replace(/"/g, '""')}"`,
        `"${(e.bairro || "").replace(/"/g, '""')}"`,
        `"${(e.cidade || "").replace(/"/g, '""')}"`,
        `"${(e.telefone || "").replace(/"/g, '""')}"`,
        `"${(e.whatsapp || e.whatsapp_raw || "").replace(/"/g, '""')}"`,
        `"${(e.instagram || "").replace(/"/g, '""')}"`,
        `"${e.google_rating || ""}"`,
        `"${e.google_reviews_count || ""}"`,
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
    link.setAttribute("download", "leads_reais_aracaju.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
