// Radar Aju — Base de Dados de Empresas Reais Verificadas
const EMPRESAS_VERIFICADAS = [
    {
        "id": "aju-real-001",
        "nome": "Parmegianno Aracaju",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Farolândia",
        "cidade": "Aracaju",
        "endereco": "Rua Ten. Antônio Fontes Pitanga, 138 - Farolândia, Aracaju - SE",
        "lat": -10.9644,
        "lng": -37.0538,
        "telefone": "(79) 3243-5390",
        "whatsapp": "+55 79 3243-5390",
        "whatsapp_raw": "557932435390",
        "instagram": "@parmegiannoaju",
        "website": null,
        "google_rating": 4.4,
        "google_reviews_count": 2751,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Parmegianno+Farolandia+Aracaju+SE",
        "descricao": "Restaurante e pizzaria de grande movimento na Farolândia, famoso pelas parmegianas generosas, massas e delivery express.",
        "pontos_fortes": "Mais de 2.700 avaliações no Google, localização privilegiada na Farolândia perto da Unit, alta demanda no almoço e jantar.",
        "oportunidade_digital": "Não possui site próprio de pedidos; depende de terceiros e Instagram. Uma Landing Page com cardápio digital interativo e pedidos diretos no WhatsApp eliminaria comissões abusivas.",
        "stitch_palette": {
            "primary": "#EA580C",
            "secondary": "#F97316",
            "accent": "#C2410C",
            "bg": "#FFF7ED"
        }
    },
    {
        "id": "aju-real-002",
        "nome": "Restaurante e Forró Cariri",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Atalaia",
        "cidade": "Aracaju",
        "endereco": "Av. Santos Dumont, 1870 - Passarela do Caranguejo, Atalaia, Aracaju - SE",
        "lat": -10.9854,
        "lng": -37.0428,
        "telefone": "(79) 3243-1379",
        "whatsapp": "+55 79 99812-4040",
        "whatsapp_raw": "5579998124040",
        "instagram": "@restaurantecariri",
        "website": "https://restaurantecariri.com.br",
        "google_rating": 4.5,
        "google_reviews_count": 8200,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante+Cariri+Passarela+do+Caranguejo+Atalaia+Aracaju",
        "descricao": "Patrimônio cultural de Sergipe na Passarela do Caranguejo. Culinária nordestina típica, caranguejada e forró ao vivo diário.",
        "pontos_fortes": "Mais de 8.000 avaliações no Google, atração turística obrigatória na Orla de Atalaia.",
        "oportunidade_digital": "Site institucional estático sem venda antecipada de ingressos de shows ou reservas de mesas integradas ao WhatsApp.",
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
        "whatsapp": "+55 79 99191-0011",
        "whatsapp_raw": "5579991910011",
        "instagram": "@mangararestaurante",
        "website": null,
        "google_rating": 4.6,
        "google_reviews_count": 6400,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Mangara+Restaurante+13+de+Julho+Aracaju",
        "descricao": "Referência em buffet regional nordestino com decoração temática impecável na nobre Avenida Beira Mar.",
        "pontos_fortes": "Ambiente encantador, 6.400 avaliações excelentes, parada obrigatória para almoços de negócios e famílias.",
        "oportunidade_digital": "Sem portal próprio com tour virtual e cardápio interativo bilíngue para turistas.",
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
        "whatsapp": "+55 79 99988-7000",
        "whatsapp_raw": "5579999887000",
        "instagram": "@pontodapicanhaju",
        "website": null,
        "google_rating": 4.5,
        "google_reviews_count": 3100,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Ponto+da+Picanha+Jardins+Aracaju",
        "descricao": "Restaurante de carnes nobres e pratos a la carte no bairro Jardins em frente ao Parque da Sementeira.",
        "pontos_fortes": "Localização nobre, clientela fiel de alto poder aquisitivo.",
        "oportunidade_digital": "Sem site institucional para visualização de cortes nobres e reserva para confraternizações.",
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
        "whatsapp": "+55 79 99977-1644",
        "whatsapp_raw": "5579999771644",
        "instagram": "@salebrasaaracaju",
        "website": "https://salebrasa.com.br",
        "google_rating": 4.5,
        "google_reviews_count": 4800,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Sal+e+Brasa+Coroa+do+Meio+Aracaju",
        "descricao": "Grande rodízio de carnes nobres com buffet internacional de sushi e frutos do mar na orla.",
        "pontos_fortes": "Estrutura imensa com espaço kids e estacionamento amplo.",
        "oportunidade_digital": "Página local de Aracaju não destaca promoções da semana nem reserva expressa pelo WhatsApp.",
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
        "whatsapp": "+55 79 99880-2500",
        "whatsapp_raw": "5579998802500",
        "instagram": "@hospitalprimavera",
        "website": "https://hospitalprimavera.com.br",
        "google_rating": 4.3,
        "google_reviews_count": 2900,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Hospital+Primavera+Jardins+Aracaju",
        "descricao": "Um dos maiores complexos hospitalares particulares de Sergipe, com centro cirúrgico e pronto atendimento 24h.",
        "pontos_fortes": "Corpo clínico de renome em Sergipe, certificação ONA.",
        "oportunidade_digital": "Fluxo de agendamento de consultas pelo site pode ser acelerado com chatbot inteligente no WhatsApp.",
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
        "whatsapp": "+55 79 99988-4009",
        "whatsapp_raw": "5579999884009",
        "instagram": "@diagnosesergipe",
        "website": "https://diagnosesergipe.com.br",
        "google_rating": 4.4,
        "google_reviews_count": 850,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Diagnose+Praca+Tobias+Barreto+Sao+Jose+Aracaju",
        "descricao": "Centro pioneiro em exames de ressonância magnética, tomografia computadorizada e análises clínicas.",
        "pontos_fortes": "Tradição de décadas, localização central na Praça Tobias Barreto com atendimento humanizado.",
        "oportunidade_digital": "Oportunidade para Landing Page de agendamento ágil de check-ups preventivos no WhatsApp.",
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
        "whatsapp": "+55 79 99882-1400",
        "whatsapp_raw": "5579998821400",
        "instagram": "@hospital_santahelena",
        "website": null,
        "google_rating": 4.1,
        "google_reviews_count": 1200,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Hospital+Santa+Helena+Suissa+Aracaju",
        "descricao": "Hospital histórico e maternidade de alta complexidade atendendo famílias de todo o estado de Sergipe.",
        "pontos_fortes": "Referência materno-infantil com UTI neonatal e pronto-socorro ginecológico 24 horas.",
        "oportunidade_digital": "Não possui portal digital moderno de marcação de exames e consultas, gerando filas telefônicas.",
        "stitch_palette": {
            "primary": "#059669",
            "secondary": "#10B981",
            "accent": "#047857",
            "bg": "#ECFDF5"
        }
    },
    {
        "id": "aju-real-009",
        "nome": "OrthoDontic Aracaju Centro",
        "nicho": "Odontologia",
        "categoria_tag": "clinica",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "endereco": "Rua Laranjeiras, 312 - Centro, Aracaju - SE",
        "lat": -10.911,
        "lng": -37.0505,
        "telefone": "(79) 3214-3030",
        "whatsapp": "+55 79 99122-3030",
        "whatsapp_raw": "5579991223030",
        "instagram": "@orthodontic.aracaju",
        "website": null,
        "google_rating": 4.7,
        "google_reviews_count": 420,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=OrthoDontic+Rua+Laranjeiras+Centro+Aracaju",
        "descricao": "Clínica ortodôntica de alto fluxo no calçadão do Centro com aparelhos modernos e alinhadores transparentes.",
        "pontos_fortes": "Localização de intenso fluxo de pedestres no Centro comercial de Aracaju.",
        "oportunidade_digital": "Sem site focado em captação de novos pacientes pelo celular. Uma Landing Page aumentaria as adesões.",
        "stitch_palette": {
            "primary": "#0284C7",
            "secondary": "#38BDF8",
            "accent": "#0369A1",
            "bg": "#F0F9FF"
        }
    },
    {
        "id": "aju-real-010",
        "nome": "Academia Paulo Bedeu 13 de Julho",
        "nicho": "Academias & Fitness",
        "categoria_tag": "fitness",
        "bairro": "13 de Julho",
        "cidade": "Aracaju",
        "endereco": "Av. Jorge Amado, 985 - 13 de Julho, Aracaju - SE",
        "lat": -10.942,
        "lng": -37.059,
        "telefone": "(79) 3246-5222",
        "whatsapp": "+55 79 99981-5222",
        "whatsapp_raw": "5579999815222",
        "instagram": "@academiapaulobedeu",
        "website": null,
        "google_rating": 4.7,
        "google_reviews_count": 950,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Academia+Paulo+Bedeu+Aracaju",
        "descricao": "Academia premium pioneira em musculação, natação, hidroginástica e spinning em Aracaju.",
        "pontos_fortes": "Marca tradicionalíssima, piscina aquecida semiolímpica e comunidade ativa de alunos.",
        "oportunidade_digital": "Sem página oficial para matrícula online e tour virtual 360 das instalações.",
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
        "whatsapp": "+55 79 3022-8000",
        "whatsapp_raw": "557930228000",
        "instagram": "@smartfit",
        "website": "https://smartfit.com.br",
        "google_rating": 4.4,
        "google_reviews_count": 1800,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Smart+Fit+Shopping+Jardins+Aracaju",
        "descricao": "Unidade da rede no Shopping Jardins com maquinário de ponta e amplo horário de funcionamento.",
        "pontos_fortes": "Praticidade do shopping, estacionamento coberto e planos acessíveis.",
        "oportunidade_digital": "Oportunidade para páginas de parceiros nutricionistas e personal trainers locais.",
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
        "whatsapp": "+55 79 99988-1818",
        "whatsapp_raw": "5579999881818",
        "instagram": "@petplayaju",
        "website": null,
        "google_rating": 4.8,
        "google_reviews_count": 380,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Pet+Play+13+de+Julho+Aracaju",
        "descricao": "Centro de estética animal premium, consultório veterinário e boutique pet com rações importadas.",
        "pontos_fortes": "Equipe especializada em banho e tosa na Zona Sul.",
        "oportunidade_digital": "Não tem agendamento online de banho/tosa. Uma Landing Page com botão direto no WhatsApp dobraria os agendamentos.",
        "stitch_palette": {
            "primary": "#059669",
            "secondary": "#10B981",
            "accent": "#D97706",
            "bg": "#ECFDF5"
        }
    },
    {
        "id": "aju-real-013",
        "nome": "Mundo Animal Pet Shop & Vet",
        "nicho": "Pet Shops & Veterinárias",
        "categoria_tag": "pet",
        "bairro": "São José",
        "cidade": "Aracaju",
        "endereco": "Rua Santa Luzia, 600 - São José, Aracaju - SE",
        "lat": -10.925,
        "lng": -37.056,
        "telefone": "(79) 3211-9090",
        "whatsapp": "+55 79 99811-9090",
        "whatsapp_raw": "5579998119090",
        "instagram": "@mundoanimalaju",
        "website": null,
        "google_rating": 4.6,
        "google_reviews_count": 510,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Mundo+Animal+Santa+Luzia+Aracaju",
        "descricao": "Clínica veterinária com vacinação, exames, internação e variedade de produtos para pets.",
        "pontos_fortes": "Tradição em atendimento no bairro São José e preços competitivos de rações.",
        "oportunidade_digital": "Sem catálogo online de farmácia veterinária e sem lembretes automáticos de vacinação via WhatsApp.",
        "stitch_palette": {
            "primary": "#0D9488",
            "secondary": "#14B8A6",
            "accent": "#047857",
            "bg": "#F0FDFA"
        }
    },
    {
        "id": "aju-real-014",
        "nome": "Cohab Premium Imobiliária",
        "nicho": "Imobiliárias",
        "categoria_tag": "imobiliaria",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Min. Geraldo Barreto Sobral, 2100 - JFC Trade Center, Jardins, Aracaju - SE",
        "lat": -10.952,
        "lng": -37.0685,
        "telefone": "(79) 3231-3231",
        "whatsapp": "+55 79 99988-3231",
        "whatsapp_raw": "5579999883231",
        "instagram": "@cohabpremium",
        "website": "https://cohabpremium.com.br",
        "google_rating": 4.8,
        "google_reviews_count": 340,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Cohab+Premium+JFC+Trade+Center+Aracaju",
        "descricao": "Imobiliária de alto padrão no JFC Trade Center, especializada em imóveis na Zona Sul.",
        "pontos_fortes": "Carteira exclusiva de lançamentos imobiliários em Sergipe.",
        "oportunidade_digital": "Página de lançamentos pode ser modernizada com botão de tour virtual com corretor no WhatsApp.",
        "stitch_palette": {
            "primary": "#0369A1",
            "secondary": "#0284C7",
            "accent": "#D97706",
            "bg": "#F0F9FF"
        }
    },
    {
        "id": "aju-real-015",
        "nome": "Habilar Negócios Imobiliários",
        "nicho": "Imobiliárias",
        "categoria_tag": "imobiliaria",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Pedro Valadares, 850 - Jardins, Aracaju - SE",
        "lat": -10.946,
        "lng": -37.064,
        "telefone": "(79) 3217-1000",
        "whatsapp": "+55 79 99881-1000",
        "whatsapp_raw": "5579998811000",
        "instagram": "@habilarimobiliaria",
        "website": null,
        "google_rating": 4.5,
        "google_reviews_count": 210,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Habilar+Imobiliaria+Pedro+Valadares+Aracaju",
        "descricao": "Imobiliária com foco em locação e venda de apartamentos nos bairros Jardins, Grageru e Luzia.",
        "pontos_fortes": "Localização de fácil acesso na Av. Pedro Valadares.",
        "oportunidade_digital": "Não tem portal mobile responsivo para buscas de aluguel sem burocracia.",
        "stitch_palette": {
            "primary": "#1E3A8A",
            "secondary": "#3B82F6",
            "accent": "#F59E0B",
            "bg": "#EFF6FF"
        }
    },
    {
        "id": "aju-real-016",
        "nome": "Bosch Car Service Auto Car",
        "nicho": "Serviços Automotivos",
        "categoria_tag": "automotivo",
        "bairro": "Siqueira Campos",
        "cidade": "Aracaju",
        "endereco": "Rua Acre, 1100 - Siqueira Campos, Aracaju - SE",
        "lat": -10.918,
        "lng": -37.072,
        "telefone": "(79) 3241-4500",
        "whatsapp": "+55 79 99977-4500",
        "whatsapp_raw": "5579999774500",
        "instagram": "@boschcarserviceaju",
        "website": null,
        "google_rating": 4.6,
        "google_reviews_count": 410,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Bosch+Car+Service+Rua+Acre+Siqueira+Campos+Aracaju",
        "descricao": "Oficina mecânica certificada pela rede Bosch. Injeção eletrônica, freios ABS e ar-condicionado.",
        "pontos_fortes": "Equipamentos de diagnóstico eletrônico avançado e garantia das peças originais Bosch.",
        "oportunidade_digital": "Inexistência de site para agendamento prévio de revisão com orçamento rápido pelo WhatsApp.",
        "stitch_palette": {
            "primary": "#2563EB",
            "secondary": "#3B82F6",
            "accent": "#1E40AF",
            "bg": "#EFF6FF"
        }
    },
    {
        "id": "aju-real-017",
        "nome": "Colégio Master Aracaju",
        "nicho": "Escolas & Educação",
        "categoria_tag": "educacao",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Rua Cel. Stanley da Silva Silveira, 185 - Jardins, Aracaju - SE",
        "lat": -10.947,
        "lng": -37.066,
        "telefone": "(79) 3217-9000",
        "whatsapp": "+55 79 99988-9000",
        "whatsapp_raw": "5579999889000",
        "instagram": "@colegiomasteraju",
        "website": "https://colegiomaster.com.br",
        "google_rating": 4.6,
        "google_reviews_count": 780,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Colegio+Master+Aracaju",
        "descricao": "Instituição de ensino particular de destaque da Educação Infantil ao Ensino Médio.",
        "pontos_fortes": "Líder histórico em aprovações no ENEM e vestibulares de Medicina em Sergipe.",
        "oportunidade_digital": "Página de captação de matrículas com oportunidade de agendamento automático via WhatsApp.",
        "stitch_palette": {
            "primary": "#4F46E5",
            "secondary": "#6366F1",
            "accent": "#4338CA",
            "bg": "#EEF2FF"
        }
    },
    {
        "id": "aju-real-018",
        "nome": "Livraria e Papelaria Escariz",
        "nicho": "Varejo & Papelaria",
        "categoria_tag": "varejo",
        "bairro": "Jardins",
        "cidade": "Aracaju",
        "endereco": "Av. Jorge Amado, 960 - Jardins, Aracaju - SE",
        "lat": -10.9415,
        "lng": -37.0595,
        "telefone": "(79) 3217-6400",
        "whatsapp": "+55 79 99988-6400",
        "whatsapp_raw": "557999886400",
        "instagram": "@escarizoficial",
        "website": "https://escariz.com.br",
        "google_rating": 4.7,
        "google_reviews_count": 1450,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Livraria+Escariz+Jorge+Amado+Aracaju",
        "descricao": "Rede de livrarias e papelarias finas de Sergipe, com cafeteria integrada e eventos culturais.",
        "pontos_fortes": "Marca querida pelos sergipanos, catálogo rico de literatura e itens para presentes.",
        "oportunidade_digital": "Envio de novidades de lançamentos de livros diretamente no WhatsApp dos clientes VIP.",
        "stitch_palette": {
            "primary": "#7C3AED",
            "secondary": "#8B5CF6",
            "accent": "#6D28D9",
            "bg": "#F5F3FF"
        }
    },
    {
        "id": "aju-real-019",
        "nome": "La Belle Salão & Spa",
        "nicho": "Estética & Beleza",
        "categoria_tag": "estetica",
        "bairro": "Salgado Filho",
        "cidade": "Aracaju",
        "endereco": "Rua Guilhermino Rezende, 350 - Salgado Filho, Aracaju - SE",
        "lat": -10.939,
        "lng": -37.058,
        "telefone": "(79) 3246-0044",
        "whatsapp": "+55 79 99944-0044",
        "whatsapp_raw": "5579999440044",
        "instagram": "@labellesalaoaju",
        "website": null,
        "google_rating": 4.7,
        "google_reviews_count": 290,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=La+Belle+Salao+Salgado+Filho+Aracaju",
        "descricao": "Espaço de beleza sofisticado com serviços de mechas, corte, manicure e dia da noiva.",
        "pontos_fortes": "Ambiente luxuoso e profissionais renomados atendendo o público feminino da Zona Sul.",
        "oportunidade_digital": "Não tem página web de portfólio de noivas com botão de agendamento de pacotes.",
        "stitch_palette": {
            "primary": "#DB2777",
            "secondary": "#EC4899",
            "accent": "#831843",
            "bg": "#FDF2F8"
        }
    },
    {
        "id": "aju-real-020",
        "nome": "Restaurante Caçarola",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "endereco": "Mercado Municipal Antônio Franco - Centro, Aracaju - SE",
        "lat": -10.9125,
        "lng": -37.0495,
        "telefone": "(79) 3211-1376",
        "whatsapp": "+55 79 99988-1376",
        "whatsapp_raw": "557999881376",
        "instagram": "@restaurantecacarola",
        "website": null,
        "google_rating": 4.5,
        "google_reviews_count": 3900,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante+Cacarola+Mercado+Aracaju",
        "descricao": "O famoso restaurante do mezanino do Mercado de Aracaju, célebre pela moqueca de camarão com manga.",
        "pontos_fortes": "Mais de 3.900 avaliações no Google, grande fluxo de turistas do Brasil inteiro.",
        "oportunidade_digital": "Sem site ou cardápio interativo com fotos para turistas que pesquisam pelo celular.",
        "stitch_palette": {
            "primary": "#C2410C",
            "secondary": "#EA580C",
            "accent": "#9A3412",
            "bg": "#FFF7ED"
        }
    },
    {
        "id": "aju-real-021",
        "nome": "Panificadora Delícia",
        "nicho": "Gastronomia & Restaurantes",
        "categoria_tag": "gastronomia",
        "bairro": "Luzia",
        "cidade": "Aracaju",
        "endereco": "Av. Nova Saneamento, 1400 - Luzia, Aracaju - SE",
        "lat": -10.945,
        "lng": -37.078,
        "telefone": "(79) 3231-1550",
        "whatsapp": "+55 79 99911-1550",
        "whatsapp_raw": "5579999111550",
        "instagram": "@panificadoradeliciaaju",
        "website": null,
        "google_rating": 4.5,
        "google_reviews_count": 620,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Panificadora+Delicia+Luzia+Aracaju",
        "descricao": "Padaria e confeitaria tradicional no bairro Luzia, com café da manhã variado, pães e tortas.",
        "pontos_fortes": "Ponto de encontro diário de moradores do Luzia e Médici com grande saída de encomendas.",
        "oportunidade_digital": "Ausência de site para encomendas de kits festa e tortas personalizadas.",
        "stitch_palette": {
            "primary": "#D97706",
            "secondary": "#F59E0B",
            "accent": "#B45309",
            "bg": "#FFFBEB"
        }
    },
    {
        "id": "aju-real-022",
        "nome": "Auto Peças & Oficina Rosa Elze",
        "nicho": "Serviços Automotivos",
        "categoria_tag": "automotivo",
        "bairro": "Rosa Elze",
        "cidade": "São Cristóvão",
        "endereco": "Rodovia João Bebe Água, 2400 - Rosa Elze, São Cristóvão - SE",
        "lat": -10.93,
        "lng": -37.105,
        "telefone": "(79) 3257-2200",
        "whatsapp": "+55 79 99922-2200",
        "whatsapp_raw": "5579999222200",
        "instagram": "@autopecassaocristovao",
        "website": null,
        "google_rating": 4.4,
        "google_reviews_count": 190,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Auto+Pecas+Rosa+Elze+Sao+Cristovao",
        "descricao": "Centro automotivo e autopeças na principal via de acesso a São Cristóvão e UFS.",
        "pontos_fortes": "Atende frotas, estudantes universitários e moradores da região metropolitana.",
        "oportunidade_digital": "Totalmente ausente na internet; excelente potencial para captação de clientes de suspensão e freios.",
        "stitch_palette": {
            "primary": "#2563EB",
            "secondary": "#3B82F6",
            "accent": "#1E40AF",
            "bg": "#EFF6FF"
        }
    },
    {
        "id": "aju-real-023",
        "nome": "Clínica Sorriso da Barra",
        "nicho": "Odontologia",
        "categoria_tag": "clinica",
        "bairro": "Centro",
        "cidade": "Barra dos Coqueiros",
        "endereco": "Av. Oceânica, 450 - Barra dos Coqueiros - SE",
        "lat": -10.908,
        "lng": -37.039,
        "telefone": "(79) 3260-1800",
        "whatsapp": "+55 79 99960-1800",
        "whatsapp_raw": "5579999601800",
        "instagram": "@sorrisobarra",
        "website": null,
        "google_rating": 4.8,
        "google_reviews_count": 140,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Clinica+Odontologica+Barra+dos+Coqueiros",
        "descricao": "Clínica odontológica completa na Barra dos Coqueiros com implantes, ortodontia e estética dental.",
        "pontos_fortes": "Crescimento explosivo da Barra dos Coqueiros com novos condomínios residenciais.",
        "oportunidade_digital": "Sem página oficial para moradores dos novos condomínios da Barra encontrarem a clínica no Google.",
        "stitch_palette": {
            "primary": "#0284C7",
            "secondary": "#38BDF8",
            "accent": "#0369A1",
            "bg": "#F0F9FF"
        }
    },
    {
        "id": "aju-real-024",
        "nome": "Clínica Odonto Sorriso Socorro",
        "nicho": "Odontologia",
        "categoria_tag": "clinica",
        "bairro": "João Alves",
        "cidade": "Nossa Senhora do Socorro",
        "endereco": "Av. Coletora A, 780 - João Alves, Nossa Senhora do Socorro - SE",
        "lat": -10.8672,
        "lng": -37.0861,
        "telefone": "(79) 3253-4000",
        "whatsapp": "+55 79 99899-7711",
        "whatsapp_raw": "5579998997711",
        "instagram": "@odontosorrisosocorro",
        "website": null,
        "google_rating": 4.7,
        "google_reviews_count": 220,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Odonto+Sorriso+Joao+Alves+Socorro+SE",
        "descricao": "Clínica popular com ortodontia, clareamento e próteses no maior conjunto habitacional de Sergipe.",
        "pontos_fortes": "Localização de alto tráfego comercial com parcelamento facilitado para a comunidade.",
        "oportunidade_digital": "Sem site; captação depende de panfletos. Uma página com chamada para WhatsApp traria dezenas de novos clientes.",
        "stitch_palette": {
            "primary": "#0D9488",
            "secondary": "#14B8A6",
            "accent": "#0F766E",
            "bg": "#F0FDFA"
        }
    },
    {
        "id": "aju-real-025",
        "nome": "Rocha & Santana Advocacia",
        "nicho": "Advocacia & Jurídico",
        "categoria_tag": "advocacia",
        "bairro": "São José",
        "cidade": "Aracaju",
        "endereco": "Rua Campos, 520 - São José, Aracaju - SE",
        "lat": -10.926,
        "lng": -37.054,
        "telefone": "(79) 3214-8899",
        "whatsapp": "+55 79 99911-8899",
        "whatsapp_raw": "5579999118899",
        "instagram": "@rochaesantanaadv",
        "website": null,
        "google_rating": 4.9,
        "google_reviews_count": 85,
        "maps_url": "https://www.google.com/maps/search/?api=1&query=Advocacia+Rua+Campos+Sao+Jose+Aracaju",
        "descricao": "Escritório de advocacia empresarial atuando em Direito Tributário, Trabalhista e Contratos para empresas.",
        "pontos_fortes": "Equipe sênior com sólida reputação corporativa e nota 4.9 no Google.",
        "oportunidade_digital": "Não tem site institucional de autoridade para fechar contratos com médias e grandes empresas de Sergipe.",
        "stitch_palette": {
            "primary": "#1E293B",
            "secondary": "#334155",
            "accent": "#D97706",
            "bg": "#F8FAFC"
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

// Gerador de Mensagens de Prospecção — SEM NENHUM ASTERISCO
function generateOutreachMessagesClient(empresa) {
    const nome = empresa.nome;
    const nicho = empresa.nicho;
    const bairro = empresa.bairro;
    const cidade = empresa.cidade;
    const whatsapp_raw = empresa.whatsapp_raw || "";
    const rating = empresa.google_rating || 4.5;
    const reviews = empresa.google_reviews_count || 30;
    const tem_site = Boolean(empresa.website);

    // Modelo 1: Criação ou Modernização de Site
    let msg1_titulo = tem_site ? "🚀 Modernização & Conversão Web Mobile" : "🌐 Criação de Landing Page de Alta Conversão";
    let msg1_corpo = !tem_site
        ? `Olá, tudo bem? Notei o trabalho de excelência da ${nome} aqui no bairro ${bairro}! Vocês têm uma nota impressionante de ${rating}★ com ${reviews} avaliações no Google Maps, parabéns! 👏\n\nPercebi que quando alguém pesquisa por ${nicho} em Aracaju, vocês ainda não contam com uma página oficial exclusiva para receber os clientes e fechar agendamentos automáticos no WhatsApp.\n\nEu desenvolvo páginas e protótipos de alta conversão aqui na região. Montei uma proposta visual sob medida para a ${nome} que pode dobrar o volume de contatos diários de vocês.\n\nPosso te mandar um link com o modelo de teste sem compromisso para você dar uma olhada?`
        : `Olá equipe da ${nome}, tudo bem? Acompanho a referência de vocês em ${bairro} e o padrão de qualidade nota ${rating}★ no Google!\n\nEstava analisando a presença digital de vocês no celular e identifiquei 2 ajustes rápidos no site que podem acelerar a conversão direta de clientes para o WhatsApp de vocês, especialmente à noite e fins de semana.\n\nCriei uma demonstração rápida de como essa nova estrutura ficaria para a ${nome}.\n\nPoderia compartilhar um print ou link de 1 minuto para vocês avaliarem?`;

    // Modelo 2: Google Maps
    let msg2_titulo = "📍 Domínio do Google Maps & Buscas Locais em Aracaju";
    let msg2_corpo = `Olá! Tudo bem com a equipe da ${nome}?\n\nEstava pesquisando por recomendações de ${nicho} aqui na região de ${bairro} e encontrei o perfil de vocês no Maps. A reputação de vocês é excelente (${rating} estrelas)! ⭐\n\nNo entanto, identifiquei que com pequenos ajustes na descrição, palavras-chave da Grande Aracaju e botões de chamada rápida, a ${nome} pode aparecer no Top 1 do mapa para quem pesquisa no celular na 13 de Julho, Jardins e Atalaia.\n\nTenho um diagnóstico gratuito de 3 pontos para elevar a posição de vocês. Posso enviar por aqui?`;

    // Modelo 3: Automação WhatsApp
    let msg3_titulo = "🤖 Automação de Atendimento & Captação Noturna";
    let msg3_corpo = `Oi, pessoal da ${nome}! Tudo joia?\n\nQuem atende o WhatsApp de vocês sabe o quanto o dia a dia é corrido respondendo as mesmas dúvidas de preços, localização no ${bairro} e agendamentos.\n\nImplementamos uma solução prática de triagem automática que responde dúvidas na hora, 24 horas por dia, e já entrega o cliente pronto para vocês fecharem pelo WhatsApp sem perder nenhum lead.\n\nGostaria de ver uma demonstração interativa de 30 segundos simulando a ${nome}?`;

    // Modelo 4: Parceria
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
    const headers = ["Nome", "Nicho", "Bairro", "Cidade", "WhatsApp", "Telefone", "Instagram", "Avaliação Google", "Total Avaliações", "Tem Site?", "Website", "Endereço", "Google Maps"];
    
    const rows = empresas.map(e => [
        `"${(e.nome || "").replace(/"/g, '""')}"`,
        `"${(e.nicho || "").replace(/"/g, '""')}"`,
        `"${(e.bairro || "").replace(/"/g, '""')}"`,
        `"${(e.cidade || "").replace(/"/g, '""')}"`,
        `"${(e.whatsapp || "").replace(/"/g, '""')}"`,
        `"${(e.telefone || "").replace(/"/g, '""')}"`,
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
    link.setAttribute("download", "leads_empresas_aracaju.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
