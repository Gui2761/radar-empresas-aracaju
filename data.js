// Base de Dados e Motores de Inteligência Client-Side para o GitHub Pages
// Radar Aju — 100% Autônomo e Serverless

const EMPRESAS_DATA = [
    {
        id: "aju-001",
        nome: "Clínica Bem Estar & Saúde Integrada",
        nicho: "Saúde & Clínicas",
        categoria_tag: "clinica",
        bairro: "13 de Julho",
        cidade: "Aracaju",
        endereco: "Av. Beira Mar, 1240 - 13 de Julho, Aracaju - SE",
        lat: -10.9321,
        lng: -37.0514,
        telefone: "(79) 3214-5500",
        whatsapp: "+55 79 99123-4567",
        whatsapp_raw: "5579991234567",
        instagram: "@clinicabemestaraju",
        website: null,
        google_rating: 4.8,
        google_reviews_count: 142,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Clinica+Bem+Estar+13+de+Julho+Aracaju",
        descricao: "Clínica multidisciplinar referência em fisioterapia, RPG, nutrição funcional e medicina preventiva na nobre região da 13 de Julho.",
        pontos_fortes: "Excelente reputação local, equipe com mais de 8 especialistas, ambiente moderno com vista para o rio.",
        oportunidade_digital: "Não possui site próprio; captação hoje depende exclusivamente do boca a boca e Instagram. Alta urgência para Landing Page de agendamento de consultas via WhatsApp.",
        stitch_palette: { primary: "#0D9488", secondary: "#14B8A6", accent: "#0F766E", bg: "#F0FDFA" }
    },
    {
        id: "aju-002",
        nome: "Restaurante Sabor da Terra Sergipana",
        nicho: "Gastronomia & Restaurantes",
        categoria_tag: "gastronomia",
        bairro: "Atalaia",
        cidade: "Aracaju",
        endereco: "Av. Santos Dumont, 1850 - Passarela do Caranguejo, Atalaia, Aracaju - SE",
        lat: -10.9854,
        lng: -37.0428,
        telefone: "(79) 3243-7788",
        whatsapp: "+55 79 99876-5432",
        whatsapp_raw: "5579998765432",
        instagram: "@sabordaterrasergipe",
        website: "http://sabordaterrasergipe.com.br",
        google_rating: 4.6,
        google_reviews_count: 520,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Sabor+da+Terra+Passarela+do+Caranguejo+Aracaju",
        descricao: "Restaurante típico de culinária nordestina e frutos do mar localizado no coração turístico da Orla de Atalaia.",
        pontos_fortes: "Ponto privilegiado na Passarela do Caranguejo, pratos tradicionais e música ao vivo nos finais de semana.",
        oportunidade_digital: "Site desatualizado sem cardápio digital interativo e sem sistema de reserva de mesas online. Oportunidade para WebApp de reservas e pedidos.",
        stitch_palette: { primary: "#EA580C", secondary: "#F97316", accent: "#C2410C", bg: "#FFF7ED" }
    },
    {
        id: "aju-003",
        nome: "Carvalho & Lima Advogados Associados",
        nicho: "Advocacia & Jurídico",
        categoria_tag: "advocacia",
        bairro: "Jardins",
        cidade: "Aracaju",
        endereco: "Rua Ministro Geraldo Barreto Sobral, 2100, Edf. Jardins Business - Jardins, Aracaju - SE",
        lat: -10.9492,
        lng: -37.0671,
        telefone: "(79) 3022-8900",
        whatsapp: "+55 79 98111-2233",
        whatsapp_raw: "5579981112233",
        instagram: "@carvalholima.adv",
        website: null,
        google_rating: 4.9,
        google_reviews_count: 48,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Carvalho+e+Lima+Advogados+Jardins+Aracaju",
        descricao: "Boutique jurídica especializada em Direito Tributário, Imobiliário e Empresarial atendendo médias e grandes empresas de Sergipe.",
        pontos_fortes: "Advogados com pós-graduação e forte atuação nos tribunais de Sergipe e Brasília. Atendimento sigiloso e consultoria preventiva.",
        oportunidade_digital: "Não possuem presença web institucional. Precisam urgentemente de uma Landing Page corporativa de autoridade para fechar contratos B2B de alto tíquete.",
        stitch_palette: { primary: "#1E293B", secondary: "#334155", accent: "#D97706", bg: "#F8FAFC" }
    },
    {
        id: "aju-004",
        nome: "Prime Imóveis Aracaju",
        nicho: "Imobiliárias",
        categoria_tag: "imobiliaria",
        bairro: "Garcia",
        cidade: "Aracaju",
        endereco: "Av. Jorge Amado, 850 - Garcia, Aracaju - SE",
        lat: -10.9415,
        lng: -37.0610,
        telefone: "(79) 3217-9000",
        whatsapp: "+55 79 99944-8822",
        whatsapp_raw: "5579999448822",
        instagram: "@primeimoveisaju",
        website: "https://primeimoveisaracaju.com.br",
        google_rating: 4.5,
        google_reviews_count: 89,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Prime+Imoveis+Jorge+Amado+Garcia+Aracaju",
        descricao: "Imobiliária especializada em lançamentos de alto padrão e aluguel nos bairros Jardins, Garcia e Treze de Julho.",
        pontos_fortes: "Carteira exclusiva de apartamentos na planta e prontos para morar; corretores credenciados no CRECI-SE.",
        oportunidade_digital: "Falta sistema de tour virtual 360 e integração com inteligência artificial para qualificar leads de compra no WhatsApp automaticamente.",
        stitch_palette: { primary: "#0369A1", secondary: "#0284C7", accent: "#F59E0B", bg: "#F0F9FF" }
    },
    {
        id: "aju-005",
        nome: "Academia IronFit Performance",
        nicho: "Academias & Fitness",
        categoria_tag: "fitness",
        bairro: "Farolândia",
        cidade: "Aracaju",
        endereco: "Av. Murilo Dantas, 430 - Farolândia, Aracaju - SE",
        lat: -10.9663,
        lng: -37.0588,
        telefone: "(79) 3251-1200",
        whatsapp: "+55 79 99155-6677",
        whatsapp_raw: "5579991556677",
        instagram: "@ironfitaju",
        website: null,
        google_rating: 4.7,
        google_reviews_count: 210,
        maps_url: "https://www.google.com/maps/search/?api=1&query=IronFit+Farolandia+Aracaju",
        descricao: "Centro de treinamento de força, musculação avançada, crossfit e nutrição esportiva próximo à UNIT (Universidade Tiradentes).",
        pontos_fortes: "Público jovem universitário, maquinário importado biomecanicamente calibrado e funcionamento até 23h.",
        oportunidade_digital: "Não tem site próprio nem checkout de planos online. Perde dezenas de matrículas de estudantes por não ter página com matrícula com desconto instantâneo.",
        stitch_palette: { primary: "#DC2626", secondary: "#EF4444", accent: "#171717", bg: "#FEF2F2" }
    },
    {
        id: "aju-006",
        nome: "Pet & Vet Patas & Focinhos Hospital 24h",
        nicho: "Pet Shops & Veterinárias",
        categoria_tag: "pet",
        bairro: "Salgado Filho",
        cidade: "Aracaju",
        endereco: "Rua Arauá, 1530 - Salgado Filho, Aracaju - SE",
        lat: -10.9380,
        lng: -37.0545,
        telefone: "(79) 3045-3322",
        whatsapp: "+55 79 99888-4411",
        whatsapp_raw: "5579998884411",
        instagram: "@patasefocinhosaju",
        website: null,
        google_rating: 4.9,
        google_reviews_count: 175,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Patas+e+Focinhos+Salgado+Filho+Aracaju",
        descricao: "Hospital veterinário 24h, banho e tosa com água aquecida, hotelzinho pet e farmácia veterinária completa.",
        pontos_fortes: "Plantão médico emergencial 24 horas, equipe com especialistas em felinos e dermatologia pet.",
        oportunidade_digital: "Excelente avaliação no Google Maps, mas sem página para agendamento online de banho/tosa e sem triagem prévia.",
        stitch_palette: { primary: "#059669", secondary: "#10B981", accent: "#F59E0B", bg: "#ECFDF5" }
    },
    {
        id: "aju-007",
        nome: "Studio Bella Derme Estética Avançada",
        nicho: "Estética & Beleza",
        categoria_tag: "estetica",
        bairro: "Grageru",
        cidade: "Aracaju",
        endereco: "Rua Hermes Fontes, 980 - Grageru, Aracaju - SE",
        lat: -10.9429,
        lng: -37.0694,
        telefone: "(79) 3211-4090",
        whatsapp: "+55 79 99633-2211",
        whatsapp_raw: "5579996332211",
        instagram: "@belladermeaju",
        website: null,
        google_rating: 4.8,
        google_reviews_count: 94,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Studio+Bella+Derme+Grageru+Aracaju",
        descricao: "Clínica de estética facial e corporal: harmonização, depilação a laser, drenagem linfática e peeling de diamante.",
        pontos_fortes: "Equipamentos de última geração aprovados pela Anvisa, atendimento personalizado com protocolo individualizado.",
        oportunidade_digital: "Vendas concentradas em direct do Instagram com perda de conversões fora do horário comercial. Necessita de Landing Page com pré-agendamento e prova social estruturada.",
        stitch_palette: { primary: "#DB2777", secondary: "#EC4899", accent: "#831843", bg: "#FDF2F8" }
    },
    {
        id: "aju-008",
        nome: "Auto Mecânica & Centro Automotivo Sergipe",
        nicho: "Serviços Automotivos",
        categoria_tag: "automotivo",
        bairro: "Siqueira Campos",
        cidade: "Aracaju",
        endereco: "Rua Bahia, 640 - Siqueira Campos, Aracaju - SE",
        lat: -10.9238,
        lng: -37.0722,
        telefone: "(79) 3241-1020",
        whatsapp: "+55 79 98855-3344",
        whatsapp_raw: "5579988553344",
        instagram: "@automecanicase",
        website: null,
        google_rating: 4.6,
        google_reviews_count: 82,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Centro+Automotivo+Bahia+Siqueira+Campos+Aracaju",
        descricao: "Centro automotivo com injeção eletrônica computadorizada, alinhamento 3D, balanceamento e revisão preventiva multimarcas.",
        pontos_fortes: "Tradição de mais de 15 anos no bairro Siqueira Campos, garantia de 1 ano nas peças e mão de obra ágil.",
        oportunidade_digital: "Sem presença digital em site. Oportunidade perfeita para criar uma página 'Revisão Rápida de Férias e Viagem' com orçamento expresso via WhatsApp.",
        stitch_palette: { primary: "#2563EB", secondary: "#3B82F6", accent: "#1E40AF", bg: "#EFF6FF" }
    },
    {
        id: "aju-009",
        nome: "Boutique Litoral Chique Moda Praia & Resort",
        nicho: "Varejo & Moda",
        categoria_tag: "varejo",
        bairro: "Coroa do Meio",
        cidade: "Aracaju",
        endereco: "Av. Santos Dumont, 450 - Coroa do Meio, Aracaju - SE",
        lat: -10.9630,
        lng: -37.0461,
        telefone: "(79) 3255-6677",
        whatsapp: "+55 79 99911-0022",
        whatsapp_raw: "5579999110022",
        instagram: "@litoralchiqueaju",
        website: "https://litoralchiquemoda.com.br",
        google_rating: 4.7,
        google_reviews_count: 63,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Boutique+Litoral+Chique+Coroa+do+Meio+Aracaju",
        descricao: "Conceito exclusivo de moda praia, biquínis, saídas de banho de linho e acessórios de luxo artesanais sergipanos.",
        pontos_fortes: "Peças assinadas por estilistas locais com tecidos biodegradáveis e proteção UV 50+.",
        oportunidade_digital: "O e-commerce é lento no mobile e não tem catálogo integrado com WhatsApp Business nem botão de compra rápida para turistas de hotéis na orla.",
        stitch_palette: { primary: "#0D9488", secondary: "#06B6D4", accent: "#0E7490", bg: "#F0FDFA" }
    },
    {
        id: "aju-010",
        nome: "Colégio & Cursos Futuro do Saber",
        nicho: "Escolas & Educação",
        categoria_tag: "educacao",
        bairro: "Luzia",
        cidade: "Aracaju",
        endereco: "Rua Castro Alves, 510 - Luzia, Aracaju - SE",
        lat: -10.9478,
        lng: -37.0754,
        telefone: "(79) 3231-8800",
        whatsapp: "+55 79 99122-3344",
        whatsapp_raw: "5579991223344",
        instagram: "@futurodosaberaju",
        website: null,
        google_rating: 4.8,
        google_reviews_count: 110,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Colegio+Futuro+do+Saber+Luzia+Aracaju",
        descricao: "Ensino infantil e fundamental com metodologia bilíngue, educação socioemocional e robótica educacional.",
        pontos_fortes: "Espaço verde amplo, turmas reduzidas e excelente taxa de aprovação nos colégios de ensino médio.",
        oportunidade_digital: "Período de matrícula escolar depende de ligações telefônicas. Urgência em ter uma Landing Page de captação de matrículas com agendamento de visita escolar guiada.",
        stitch_palette: { primary: "#4F46E5", secondary: "#6366F1", accent: "#4338CA", bg: "#EEF2FF" }
    },
    {
        id: "aju-011",
        nome: "Solar da Barra Empreendimentos Imobiliários",
        nicho: "Imobiliárias",
        categoria_tag: "imobiliaria",
        bairro: "Centro da Barra",
        cidade: "Barra dos Coqueiros",
        endereco: "Av. Oceânica, 300 - Centro, Barra dos Coqueiros - SE",
        lat: -10.9085,
        lng: -37.0392,
        telefone: "(79) 3262-1515",
        whatsapp: "+55 79 99777-6655",
        whatsapp_raw: "5579997776655",
        instagram: "@solardabarrase",
        website: null,
        google_rating: 4.5,
        google_reviews_count: 39,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Solar+da+Barra+Empreendimentos+Barra+dos+Coqueiros",
        descricao: "Especialistas em loteamentos fechados, condomínios à beira-mar e investimentos imobiliários na Barra dos Coqueiros.",
        pontos_fortes: "Região com maior valorização imobiliária da Grande Aracaju após a ponte Construtor João Alves.",
        oportunidade_digital: "Sem portal web nem formulário de simulação de financiamento. Grande oportunidade para criar Landing Page de captura de investidores de outros estados.",
        stitch_palette: { primary: "#0E7490", secondary: "#06B6D4", accent: "#155E75", bg: "#ECFEFF" }
    },
    {
        id: "aju-012",
        nome: "Super Clínica Odonto Sorriso",
        nicho: "Saúde & Clínicas",
        categoria_tag: "clinica",
        bairro: "João Alves",
        cidade: "Nossa Senhora do Socorro",
        endereco: "Av. Coletora A, 780 - Conjunto João Alves, N. Sra. do Socorro - SE",
        lat: -10.8672,
        lng: -37.0861,
        telefone: "(79) 3253-4000",
        whatsapp: "+55 79 99899-7711",
        whatsapp_raw: "5579998997711",
        instagram: "@odontosorrisosocorro",
        website: null,
        google_rating: 4.7,
        google_reviews_count: 133,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Odonto+Sorriso+Joao+Alves+Nossa+Senhora+do+Socorro",
        descricao: "Clínica odontológica popular com implantes dentários, ortodontia, lentes de contato dental e próteses.",
        pontos_fortes: "Localização de intenso fluxo de pedestres no maior conjunto habitacional de Socorro, facilidade de parcelamento no boleto/cartão.",
        oportunidade_digital: "Ausência total de site. Podem triplicar os atendimentos com uma página dedicada a Implantes e Clareamento com chamada direta para avaliação gratuita pelo WhatsApp.",
        stitch_palette: { primary: "#0284C7", secondary: "#38BDF8", accent: "#0369A1", bg: "#F0F9FF" }
    },
    {
        id: "aju-013",
        nome: "Café & Bistrô Casarão Histórico",
        nicho: "Gastronomia & Restaurantes",
        categoria_tag: "gastronomia",
        bairro: "Centro Histórico",
        cidade: "São Cristóvão",
        endereco: "Praça São Francisco, 45 - Centro Histórico, São Cristóvão - SE",
        lat: -11.0142,
        lng: -37.2064,
        telefone: "(79) 3261-2244",
        whatsapp: "+55 79 99188-5522",
        whatsapp_raw: "5579991885522",
        instagram: "@casaraobistrosc",
        website: null,
        google_rating: 4.9,
        google_reviews_count: 280,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Bistro+Praca+Sao+Francisco+Sao+Cristovao+Sergipe",
        descricao: "Bistrô charmoso em casarão colonial tombado pela UNESCO, servindo café artesanal, queijadas tradicionais e doces típicos de São Cristóvão.",
        pontos_fortes: "Patrimônio Cultural da Humanidade pela UNESCO, atmosfera acolhedora para turistas e eventos culturais.",
        oportunidade_digital: "Sem cardápio bilíngue online nem reservas antecipadas para grupos de turistas. Um site one-page com fotos gastronômicas aumentaria o tíquete médio.",
        stitch_palette: { primary: "#78350F", secondary: "#92400E", accent: "#D97706", bg: "#FFFBEB" }
    },
    {
        id: "aju-014",
        nome: "Espaço Nutri & Vida Saúde",
        nicho: "Saúde & Clínicas",
        categoria_tag: "clinica",
        bairro: "Inácio Barbosa",
        cidade: "Aracaju",
        endereco: "Rua Universo, 210 - Inácio Barbosa, Aracaju - SE",
        lat: -10.9575,
        lng: -37.0712,
        telefone: "(79) 3249-1144",
        whatsapp: "+55 79 99812-7744",
        whatsapp_raw: "5579998127744",
        instagram: "@nutrievidaaju",
        website: null,
        google_rating: 4.9,
        google_reviews_count: 76,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Espaco+Nutri+e+Vida+Inacio+Barbosa+Aracaju",
        descricao: "Consultório de emagrecimento saudável, bioimpedância tetrapolar, exames laboratoriais rápidos e acompanhamento pós-bariátrica.",
        pontos_fortes: "Atendimento humanizado, plano alimentar no aplicativo e taxas elevadas de manutenção de peso.",
        oportunidade_digital: "Site inexistente. Os pacientes chegam apenas por indicação. Uma página focada em 'Emagrecimento sem dietas restritivas em Aracaju' captaria dezenas de pacientes particulares.",
        stitch_palette: { primary: "#16A34A", secondary: "#22C55E", accent: "#15803D", bg: "#F0FDF4" }
    },
    {
        id: "aju-015",
        nome: "Aracaju Solar Energia Sustentável",
        nicho: "Serviços & Engenharia",
        categoria_tag: "servicos",
        bairro: "Centro",
        cidade: "Aracaju",
        endereco: "Rua Laranjeiras, 420 - Centro Comercial, Aracaju - SE",
        lat: -10.9125,
        lng: -37.0542,
        telefone: "(79) 3214-3030",
        whatsapp: "+55 79 99900-1188",
        whatsapp_raw: "5579999001188",
        instagram: "@aracajusolar.eng",
        website: "https://aracajusolarenergia.com.br",
        google_rating: 4.6,
        google_reviews_count: 55,
        maps_url: "https://www.google.com/maps/search/?api=1&query=Aracaju+Solar+Energia+Centro+Aracaju",
        descricao: "Projetos, homologação na Energisa Sergipe e instalação de painéis solares fotovoltaicos para residências e fazendas.",
        pontos_fortes: "Engenheiros eletricistas certificados, financiamento bancário em até 84x com a economia da conta de luz.",
        oportunidade_digital: "Falta uma calculadora interativa na página inicial para o cliente de Aracaju saber na hora quanto vai economizar na conta de luz da Energisa.",
        stitch_palette: { primary: "#EAB308", secondary: "#FACC15", accent: "#CA8A04", bg: "#FEFCE8" }
    }
];

// Funções de Consulta e Filtragem
function getLocalBairros() {
    const list = [...new Set(EMPRESAS_DATA.map(e => e.bairro))].sort();
    return ["Todos", ...list];
}

function getLocalNichos() {
    const list = [...new Set(EMPRESAS_DATA.map(e => e.nicho))].sort();
    return ["Todos", ...list];
}

function filterLocalEmpresas(nicho, bairro, apenasSemSite, query) {
    return EMPRESAS_DATA.filter(e => {
        if (nicho && nicho !== "Todos" && e.nicho.toLowerCase() !== nicho.toLowerCase()) return false;
        if (bairro && bairro !== "Todos" && e.bairro.toLowerCase() !== bairro.toLowerCase()) return false;
        if (apenasSemSite && e.website) return false;
        if (query) {
            const q = query.toLowerCase().trim();
            const textMatch = (
                e.nome.toLowerCase().includes(q) ||
                e.nicho.toLowerCase().includes(q) ||
                e.bairro.toLowerCase().includes(q) ||
                e.cidade.toLowerCase().includes(q) ||
                e.descricao.toLowerCase().includes(q)
            );
            if (!textMatch) return false;
        }
        return true;
    });
}

function getEmpresaById(id) {
    return EMPRESAS_DATA.find(e => e.id === id) || null;
}

// Gerador de Mensagens de Prospecção (Outreach) Client-Side
function generateOutreachMessagesClient(empresa) {
    const nome = empresa.nome;
    const nicho = empresa.nicho;
    const bairro = empresa.bairro;
    const cidade = empresa.cidade;
    const whatsapp_raw = empresa.whatsapp_raw || "";
    const rating = empresa.google_rating || 4.8;
    const reviews = empresa.google_reviews_count || 50;
    const tem_site = Boolean(empresa.website);

    // Modelo 1: Criação ou Modernização de Site
    let msg1_titulo = tem_site ? "🚀 Modernização & Conversão Web Mobile" : "🌐 Criação de Landing Page de Alta Conversão";
    let msg1_corpo = !tem_site
        ? `Olá, tudo bem? Notei o trabalho de excelência da *${nome}* aqui no bairro ${bairro}! Vocês têm uma nota impressionante de ${rating}★ com ${reviews} avaliações no Google Maps, parabéns! 👏\n\nPercebi que quando alguém pesquisa por *${nicho} em Aracaju*, vocês ainda não contam com uma página oficial exclusiva para receber os clientes e fechar agendamentos automáticos no WhatsApp.\n\nEu desenvolvo páginas e protótipos de alta conversão aqui na região. Montei uma proposta visual sob medida para a *${nome}* que pode dobrar o volume de contatos diários de vocês.\n\nPosso te mandar um link com o modelo de teste sem compromisso para você dar uma olhada?`
        : `Olá equipe da *${nome}*, tudo bem? Acompanho a referência de vocês em ${bairro} e o padrão de qualidade nota ${rating}★ no Google!\n\nEstava analisando a presença digital de vocês no celular e identifiquei 2 ajustes rápidos no site que podem acelerar a conversão direta de clientes para o WhatsApp de vocês, especialmente à noite e fins de semana.\n\nCriei uma demonstração rápida de como essa nova estrutura ficaria para a *${nome}*.\n\nPoderia compartilhar um print ou link de 1 minuto para vocês avaliarem?`;

    // Modelo 2: Google Maps
    let msg2_titulo = "📍 Domínio do Google Maps & Buscas Locais em Aracaju";
    let msg2_corpo = `Olá! Tudo bem com a equipe da *${nome}*?\n\nEstava pesquisando por recomendações de *${nicho}* aqui na região de ${bairro} e encontrei o perfil de vocês no Maps. A reputação de vocês é excelente (${rating} estrelas)! ⭐\n\nNo entanto, identifiquei que com pequenos ajustes na descrição, palavras-chave da Grande Aracaju e botões de chamada rápida, a *${nome}* pode aparecer no Top 1 do mapa para quem pesquisa no celular na 13 de Julho, Jardins e Atalaia.\n\nTenho um diagnóstico gratuito de 3 pontos para elevar a posição de vocês. Posso enviar por aqui?`;

    // Modelo 3: Automação WhatsApp
    let msg3_titulo = "🤖 Automação de Atendimento & Captação Noturna";
    let msg3_corpo = `Oi, pessoal da *${nome}*! Tudo joia?\n\nQuem atende o WhatsApp de vocês sabe o quanto o dia a dia é corrido respondendo as mesmas dúvidas de preços, localização no ${bairro} e agendamentos.\n\nImplementamos uma solução prática de triagem automática que responde dúvidas na hora, 24 horas por dia, e já entrega o cliente pronto para vocês fecharem pelo WhatsApp sem perder nenhum lead.\n\nGostaria de ver uma demonstração interativa de 30 segundos simulando a *${nome}*?`;

    // Modelo 4: Parceria
    let msg4_titulo = "🤝 Proposta de Parceria & Demonstração Rápida";
    let msg4_corpo = `Olá! Meu nome é [Seu Nome], atuo com soluções digitais e crescimento de negócios aqui em Aracaju e região.\n\nAdmiro muito a atuação da *${nome}* em ${cidade}. Preparei um protótipo visual completo e interativo de um novo portal para vocês no ${bairro}, com foco em atração de novos clientes locais.\n\nNão tem custo nenhum para visualizar. Se fizer sentido para o momento de vocês, podemos conversar! Posso enviar o link?`;

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
    const rating = empresa.google_rating || 4.8;
    const reviews = empresa.google_reviews_count || 50;
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
  * Estilo: Clean, minimalista, bordas arredondadas (rounded-2xl), sombras suaves (shadow-sm/shadow-md) e efeito glassmorphism no navbar.

# 3. ESTRUTURA DAS SEÇÕES
1. NAVBAR FIXO:
   - Logotipo moderno "${nome}".
   - Links âncora: Início, Sobre, Serviços, Depoimentos, Localização.
   - Botão de Ação Rápida (CTA): "Fale Conosco" com ícone do WhatsApp.

2. HERO SECTION (Destaque Principal):
   - Selo de Prova Social: "★ ${rating} (${reviews} avaliações no Google Maps em ${bairro})".
   - Headline de Alto Impacto personalizada para o nicho de ${nicho}.
   - Subtítulo com proposta de valor: "${descricao}".
   - Dois CTAs: [Agendar Atendimento via WhatsApp] (verde/destaque) e [Conhecer Serviços] (outline).
   - Imagem ou mock visual moderno contextualizado ao segmento.

3. BARRA DE AUTORIDADE / DESTAQUES:
   - 3 a 4 pilares baseados nos pontos fortes: "${pontos_fortes}".
   - Ex: "Atendimento Rápido", "Equipe Especializada", "Localização Privilegiada no ${bairro}".

4. GRADE DE SERVIÇOS / PRODUTOS (Cards Interativos):
   - Cards com ícones dinâmicos, breve descrição e botão "Solicitar Orçamento".
   - Hover effects suaves com micro-interações.

5. DIFERENCIAIS & HISTÓRIA LOCAL:
   - Conteúdo autêntico conectando a marca à comunidade de ${cidade} e ${bairro}.
   - Solução para o ponto crítico: "${oportunidade}".

6. PROVA SOCIAL & AVALIAÇÕES GOOGLE:
   - Carrossel com 3 depoimentos de clientes satisfeitos de Aracaju elogiando a agilidade e qualidade.
   - Card com nota ${rating}/5 estrelas e link para o perfil do Google Maps.

7. LOCALIZAÇÃO E CONTATO:
   - Endereço completo: "${endereco}".
   - Horários de funcionamento e mapa interativo integrado.
   - Botão de rota: "Abrir no Google Maps".

8. BOTÃO FLUTUANTE DO WHATSAPP:
   - Posicionado no canto inferior direito com pulsação suave e tooltip: "Dúvidas? Fale conosco agora!".
   - Link direto: https://wa.me/${whatsapp_raw}?text=Olá!%20Encontrei%20vocês%20no%20site%20e%20gostaria%20de%20mais%20informações.

# 4. DIRETRIZES TÉCNICAS PARA GERAÇÃO NO GOOGLE STITCH
- Stack: HTML5 semântico, Tailwind CSS v3/v4, Lucide Icons e JavaScript interativo nativo.
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

// Exportador CSV Client-Side (Blob Download)
function exportLeadsToCSVClient(empresas) {
    const headers = ["Nome", "Nicho", "Bairro", "Cidade", "WhatsApp", "Telefone", "Instagram", "Tem Site?", "Website", "Nota Google", "Avaliações", "Oportunidade Digital"];
    
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
        `"${e.google_rating || ""}"`,
        `"${e.google_reviews_count || ""}"`,
        `"${(e.oportunidade_digital || "").replace(/"/g, '""')}"`
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
