"""
Módulo para geração de mensagens persuasivas de prospecção comercial (Outreach / Cold Copy).
Oferece múltiplos ângulos de abordagem (Criação de Site, Google Maps, Automação WhatsApp e Parceria).
"""

import urllib.parse

def generate_outreach_messages(empresa: dict) -> list:
    nome = empresa.get("nome", "Empresa")
    nicho = empresa.get("nicho", "Negócios")
    bairro = empresa.get("bairro", "Aracaju")
    cidade = empresa.get("cidade", "Aracaju")
    whatsapp_raw = empresa.get("whatsapp_raw", "")
    rating = empresa.get("google_rating", 4.8)
    reviews = empresa.get("google_reviews_count", 50)
    tem_site = bool(empresa.get("website"))
    oportunidade = empresa.get("oportunidade_digital", "")

    # Modelo 1: Criação ou Modernização de Landing Page
    if not tem_site:
        msg1_titulo = "🌐 Criação de Landing Page de Alta Conversão"
        msg1_corpo = (
            f"Olá, tudo bem? Notei o trabalho de excelência da *{nome}* aqui no bairro {bairro}! "
            f"Vocês têm uma nota impressionante de {rating}★ com {reviews} avaliações no Google Maps, parabéns! 👏\n\n"
            f"Percebi que quando alguém pesquisa por *{nicho} em Aracaju*, vocês ainda não contam com uma página oficial exclusiva para receber os clientes e fechar agendamentos automáticos no WhatsApp.\n\n"
            f"Eu desenvolvo páginas e protótipos de alta conversão aqui na região. Montei uma proposta visual sob medida para a *{nome}* que pode dobrar o volume de contatos diários de vocês.\n\n"
            f"Posso te mandar um link com o modelo de teste sem compromisso para você dar uma olhada?"
        )
    else:
        msg1_titulo = "🚀 Modernização & Conversão Web Mobile"
        msg1_corpo = (
            f"Olá equipe da *{nome}*, tudo bem? Acompanho a referência de vocês em {bairro} e o padrão de qualidade nota {rating}★ no Google!\n\n"
            f"Estava analisando a presença digital de vocês no celular e identifiquei 2 ajustes rápidos no site que podem acelerar a conversão direta de clientes para o WhatsApp de vocês, especialmente à noite e fins de semana.\n\n"
            f"Criei uma demonstração rápida de como essa nova estrutura ficaria para a *{nome}*.\n\n"
            f"Poderia compartilhar um print ou link de 1 minuto para vocês avaliarem?"
        )

    # Modelo 2: Otimização de Google Meu Negócio / Google Maps
    msg2_titulo = "📍 Domínio do Google Maps & Buscas Locais em Aracaju"
    msg2_corpo = (
        f"Olá! Tudo bem com a equipe da *{nome}*?\n\n"
        f"Estava pesquisando por recomendações de *{nicho}* aqui na região de {bairro} e encontrei o perfil de vocês no Maps. A reputação de vocês é excelente ({rating} estrelas)! ⭐\n\n"
        f"No entanto, identifiquei que com pequenos ajustes na descrição, palavras-chave da Grande Aracaju e botões de chamada rápida, a *{nome}* pode aparecer no Top 1 do mapa para quem pesquisa no celular na 13 de Julho, Jardins e Atalaia.\n\n"
        f"Tenho um diagnóstico gratuito de 3 pontos para elevar a posição de vocês. Posso enviar por aqui?"
    )

    # Modelo 3: Automação Inteligente de Atendimento no WhatsApp
    msg3_titulo = "🤖 Automação de Atendimento & Captação Noturna"
    msg3_corpo = (
        f"Oi, pessoal da *{nome}*! Tudo joia?\n\n"
        f"Quem atende o WhatsApp de vocês sabe o quanto o dia a dia é corrido respondendo as mesmas dúvidas de preços, localização no {bairro} e agendamentos.\n\n"
        f"Implementamos uma solução prática de triagem automática que responde dúvidas na hora, 24 horas por dia, e já entrega o cliente pronto para vocês fecharem pelo WhatsApp sem perder nenhum lead.\n\n"
        f"Gostaria de ver uma demonstração interativa de 30 segundos simulando a *{nome}*?"
    )

    # Modelo 4: Contato Direto & Parceria Estratégica
    msg4_titulo = "🤝 Proposta de Parceria & Demonstração Rápida"
    msg4_corpo = (
        f"Olá! Meu nome é [Seu Nome], atuo com soluções digitais e crescimento de negócios aqui em Aracaju e região.\n\n"
        f"Admiro muito a atuação da *{nome}* em {cidade}. Preparei um protótipo visual completo e interativo de um novo portal para vocês no {bairro}, com foco em atração de novos clientes locais.\n\n"
        f"Não tem custo nenhum para visualizar. Se fizer sentido para o momento de vocês, podemos conversar! Posso enviar o link?"
    )

    modelos = [
        {"tipo": "site", "titulo": msg1_titulo, "texto": msg1_corpo},
        {"tipo": "maps", "titulo": msg2_titulo, "texto": msg2_corpo},
        {"tipo": "automacao", "titulo": msg3_titulo, "texto": msg3_corpo},
        {"tipo": "parceria", "titulo": msg4_titulo, "texto": msg4_corpo},
    ]

    for m in modelos:
        encoded = urllib.parse.quote(m["texto"])
        if whatsapp_raw:
            m["wa_link"] = f"https://wa.me/{whatsapp_raw}?text={encoded}"
        else:
            m["wa_link"] = f"https://wa.me/?text={encoded}"

    return modelos
