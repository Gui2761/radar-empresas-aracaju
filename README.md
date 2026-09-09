# 📍 Radar Aju — Inteligência Comercial Aracaju & Região

Aplicação web para prospecção de empresas, diagnóstico digital e geração de protótipos de alta conversão para negócios de **Aracaju e Região Metropolitana (Sergipe)**.

Totalmente compatível com **GitHub Pages** (100% Client-Side, sem necessidade de servidor backend).

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

### Opção 1: Via Terminal (Git)

1. No terminal, acesse a pasta do projeto:
```bash
cd "C:\Users\gnsilva\.gemini\antigravity\scratch\aracaju-lead-finder"
```

2. Inicialize o repositório git e faça o primeiro commit:
```bash
git init
git add .
git commit -m "feat: radar empresas aracaju para github pages"
```

3. Crie um novo repositório no seu GitHub (exemplo: `radar-empresas-aracaju`) e vincule o repositório:
```bash
git branch -M main
git remote add origin https://github.com/<SEU-USUARIO>/<SEU-REPOSITORIO>.git
git push -u origin main
```

4. **Ative o GitHub Pages**:
   - Vá no seu repositório no GitHub.
   - Clique na aba **Settings** (Configurações).
   - No menu lateral esquerdo, clique em **Pages**.
   - Na seção **Build and deployment** -> **Branch**:
     - Selecione: `main`
     - Pasta: `/ (root)`
     - Clique em **Save**.
   - Aguarde cerca de 1 a 2 minutos e sua página estará no ar em:  
     `https://<SEU-USUARIO>.github.io/<SEU-REPOSITORIO>/`

---

### Opção 2: Pelo Navegador (Sem Git Instalado)

1. Crie um novo repositório público no [GitHub.com](https://github.com/new).
2. Clique em **"uploading an existing file"** (carregar arquivos existentes).
3. Arraste todos os arquivos desta pasta:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `data.js`
   - `.nojekyll`
4. Faça o commit direto no botão verde.
5. Vá em **Settings** -> **Pages** -> Selecione a branch `main` -> **Save**. Pronto!

---

## 🛠️ Tecnologias Utilizadas
- **Tailwind CSS (CDN)**: Estilização responsiva moderna.
- **Leaflet.js + CartoDB**: Mapas geoespaciais interativos sem dependência de cartão de crédito.
- **Lucide Icons**: Ícones minimalistas e leves.
- **OpenStreetMap Nominatim**: Busca ao vivo de estabelecimentos em Sergipe.
- **Engine Client-Side**: Filtros em tempo real, geração de cópias comerciais para WhatsApp e prompts do Google Stitch.
