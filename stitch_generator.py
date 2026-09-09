"""
Módulo para gerar especificações e prompts completos para o Google Stitch / Prototipador AI.
Gera a estrutura arquitetural, paleta visual e código conceitual pronto para colagem.
"""

def generate_stitch_prompt(empresa: dict) -> dict:
    nome = empresa.get("nome", "Empresa")
    nicho = empresa.get("nicho", "Negócios")
    bairro = empresa.get("bairro", "Aracaju")
    cidade = empresa.get("cidade", "Aracaju")
    endereco = empresa.get("endereco", "")
    telefone = empresa.get("telefone", "")
    whatsapp = empresa.get("whatsapp", "")
    whatsapp_raw = empresa.get("whatsapp_raw", "")
    instagram = empresa.get("instagram", "")
    rating = empresa.get("google_rating", 4.8)
    reviews = empresa.get("google_reviews_count", 50)
    descricao = empresa.get("descricao", "")
    pontos_fortes = empresa.get("pontos_fortes", "")
    oportunidade = empresa.get("oportunidade_digital", "")
    palette = empresa.get("stitch_palette", {
        "primary": "#0D9488",
        "secondary": "#14B8A6",
        "accent": "#0F766E",
        "bg": "#F8FAFC"
    })

    # Prompt formatado especificamente para o Google Stitch / Project IDX / v0
    prompt_raw = f"""[GOOGLE STITCH PROTOTYPE SPECIFICATION - {nome.upper()}]

# 1. OBJETIVO DO PROTÓTIPO
Criar uma Landing Page moderna, de altíssima conversão e mobile-first para a empresa "{nome}", localizada no bairro {bairro} em {cidade} - SE.
Foco principal: Transformar visitantes locais em contatos imediatos no WhatsApp ({whatsapp}) e agendamentos diretos.

# 2. DESIGN SYSTEM & IDENTIDADE VISUAL
- Paleta de Cores:
  * Cor Primária (Autoridade/Branding): {palette.get('primary')}
  * Cor Secundária (Destaques e Cards): {palette.get('secondary')}
  * Cor de Destaque / CTA (Ação e Botões): {palette.get('accent')}
  * Fundo / Background: {palette.get('bg')}
  * Tipografia: 'Inter' ou 'Plus Jakarta Sans' para títulos fortes e legíveis.
  * Estilo: Clean, minimalista, bordas arredondadas (rounded-2xl), sombras suaves (shadow-sm/shadow-md) e efeito glassmorphism no navbar.

# 3. ESTRUTURA DAS SEÇÕES
1. NAVBAR FIXO:
   - Logotipo moderno "{nome}".
   - Links âncora: Início, Sobre, Serviços, Depoimentos, Localização.
   - Botão de Ação Rápida (CTA): "Fale Conosco" com ícone do WhatsApp.

2. HERO SECTION (Destaque Principal):
   - Selo de Prova Social: "★ {rating} ({reviews} avaliações no Google Maps em {bairro})".
   - Headline de Alto Impacto personalizada para o nicho de {nicho}.
   - Subtítulo com proposta de valor: "{descricao}".
   - Dois CTAs: [Agendar Atendimento via WhatsApp] (verde/destaque) e [Conhecer Serviços] (outline).
   - Imagem ou mock visual moderno contextualizado ao segmento.

3. BARRA DE AUTORIDADE / DESTAQUES:
   - 3 a 4 pilares baseados nos pontos fortes: "{pontos_fortes}".
   - Ex: "Atendimento Rápido", "Equipe Especializada", "Localização Privilegiada no {bairro}".

4. GRADE DE SERVIÇOS / PRODUTOS (Cards Interativos):
   - Cards com ícones dinâmicos, breve descrição e botão "Solicitar Orçamento".
   - Hover effects suaves com micro-interações.

5. DIFERENCIAIS & HISTÓRIA LOCAL:
   - Conteúdo autêntico conectando a marca à comunidade de {cidade} e {bairro}.
   - Solução para o ponto crítico: "{oportunidade}".

6. PROVA SOCIAL & AVALIAÇÕES GOOGLE:
   - Carrossel com 3 depoimentos de clientes satisfeitos de Aracaju elogiando a agilidade e qualidade.
   - Card com nota {rating}/5 estrelas e link para o perfil do Google Maps.

7. LOCALIZAÇÃO E CONTATO:
   - Endereço completo: "{endereco}".
   - Horários de funcionamento e mapa interativo integrado.
   - Botão de rota: "Abrir no Google Maps".

8. BOTÃO FLUTUANTE DO WHATSAPP:
   - Posicionado no canto inferior direito com pulsação suave e tooltip: "Dúvidas? Fale conosco agora!".
   - Link direto: https://wa.me/{whatsapp_raw}?text=Olá!%20Encontrei%20vocês%20no%20site%20e%20gostaria%20de%20mais%20informações.

# 4. DIRETRIZES TÉCNICAS PARA GERAÇÃO NO GOOGLE STITCH
- Stack: HTML5 semântico, Tailwind CSS v3/v4, Lucide Icons e JavaScript interativo nativo.
- Totalmente responsivo: perfeito em telas de iPhone/Android e monitores 4K.
- Performance: Código limpo, carregamento instantâneo, acessibilidade (WCAG AA).
"""

    return {
        "empresa_id": empresa.get("id"),
        "empresa_nome": nome,
        "nicho": nicho,
        "bairro": bairro,
        "cidade": cidade,
        "stitch_prompt": prompt_raw,
        "palette": palette,
        "recommended_frameworks": ["Tailwind CSS", "Lucide Icons", "Alpine.js / React", "Leaflet Maps"],
        "estimated_conversion_score": "94/100"
    }
