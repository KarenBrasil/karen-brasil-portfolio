# 🚀 Portfólio Karen Brasil

## 📋 Informações

**Nome:** Karen Brasil  
**Especialidade:** Análise de Dados & Automação  
**Stack:** Python, SQL, n8n, Claude API, Gemini, ZABBIX, GRAFANA, Power BI  
**Status:** Bilíngue (PT-BR / EN)  
**Design:** Minimalista Tech Escuro - Verde/Lilás/Rosa  

---

## 🎨 Estrutura do Site

```
┌─────────────────────────────────────────┐
│  NAVBAR (Menu fixo)                      │
│  - Logo + Links de navegação             │
│  - Botão de idioma (EN/PT)               │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  HERO (Início)                           │
│  - Apresentação + CTA                    │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  ABOUT (Sobre)                           │
│  - Bio + Info básicas                    │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  SKILLS (Habilidades)                    │
│  - 5 Categorias em Cards 4x4              │
│    • Linguagens                          │
│    • Frameworks & IA                     │
│    • Ferramentas                         │
│    • Banco de Dados                      │
│    • Outras Competências                 │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  EXPERIENCE (Experiência)                │
│  - 3 Experiências profissionais          │
│  - Formação/Educação                     │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  CONTACT (Contato)                       │
│  - 4 Links: LinkedIn, GitHub, Email, WA  │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│  FOOTER                                  │
└─────────────────────────────────────────┘
```

---

## 🛠️ Arquivos Inclusos

- `index.html` — Estrutura HTML completa
- `style.css` — Estilo minimalista + efeitos
- `script.js` — Navegação + idiomas + efeitos
- `README.md` — Este arquivo

---

## 🚀 Como Usar

### 1️⃣ **Localmente (Desenvolvimento)**

Abra o arquivo `index.html` no navegador:
- Windows: Clique 2x em `index.html`
- Mac/Linux: Arraste para o navegador

Ou use um servidor local:
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx http-server
```

Depois acesse: `http://localhost:8000`

---

### 2️⃣ **Publicar Online GRATUITO**

#### **Opção A: GitHub Pages (Recomendado)**

1. Criar repositório em github.com (ex: `karen-brasil-portfolio`)
2. Fazer upload dos 3 arquivos
3. Em Settings → Pages → Source = Main branch
4. Site fica em: `github.com/KarenBrasil/karen-brasil-portfolio`

#### **Opção B: Vercel (Muito fácil)**

1. Ir em vercel.com
2. Fazer login com GitHub
3. Importar repositório
4. Deploy automático!
5. Site fica em: `karen-brasil.vercel.app`

#### **Opção C: Netlify**

1. Ir em netlify.com
2. Drag & drop os 3 arquivos
3. Site fica em: `karen-brasil-portfolio.netlify.app`

#### **Opção D: Seu próprio Domínio**

Comprar domínio em:
- Namecheap (~$0.98/ano)
- Google Domains
- Locaweb

E apontar para Vercel/GitHub Pages

---

## 📱 Recursos

### ✨ **Efeitos Inclusos**

- ✅ Navbar fixa com menu fluido
- ✅ Fade-in animations ao carregar
- ✅ Hover effects nos cards
- ✅ Scroll smooth automático
- ✅ Gradient backgrounds
- ✅ Blur backdrop
- ✅ Botão de idioma (PT/EN)
- ✅ Responsivo (Mobile, Tablet, Desktop)

### 🎨 **Cores**

```
Primária: #10b981 (Verde Tech)
Secundária: #c084fc (Lilás) / #ec4899 (Rosa)
Background: #0f0f0f (Preto)
Texto: #f0f0f0 (Branco suave)
```

### 📱 **Responsividade**

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (480px - 767px)
- ✅ Ultra mobile (< 480px)

---

## 🔧 Personalizações

### Adicionar Foto Profissional

1. Abra `index.html`
2. Procure por: `<!-- hero-content -->`
3. Adicione antes de `<h1>`:

```html
<div class="hero-photo">
    <img src="sua-foto.jpg" alt="Karen Brasil">
</div>
```

4. Em `style.css`, adicione:

```css
.hero-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--accent-green);
    margin-bottom: 2rem;
}

.hero-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Mudar Cores

Em `style.css`, procure por `:root` e altere:

```css
:root {
    --accent-green: #10b981;    /* Sua cor primária */
    --accent-pink: #ec4899;      /* Sua cor secundária */
}
```

### Adicionar Novo Projeto

Em `index.html`, procure por `<!-- EXPERIÊNCIAS -->` e adicione um novo `experience-item`:

```html
<div class="experience-item">
    <div class="exp-header">
        <h3>Seu Título</h3>
        <span class="exp-date">2024 - 2025</span>
    </div>
    <p class="exp-company">Sua Empresa</p>
    <p class="exp-description">Descrição do que você fez.</p>
</div>
```

---

## 🌐 SEO Básico

Site já inclui:
- ✅ Meta tags
- ✅ Título otimizado
- ✅ Estrutura semântica
- ✅ Links com open graph

Para melhorar ainda mais:

1. Adicione ao `<head>`:

```html
<meta name="description" content="Portfólio de Karen Brasil - Analista de Dados & Automação...">
<meta name="keywords" content="data analytics, python, sql, automação, brasil">
```

---

## 📊 Estatísticas de Carga

- **Tamanho:** ~15KB (HTML + CSS + JS)
- **Tempo de carga:** < 1s (muito rápido!)
- **Performance:** ⚡ Excelente

---

## 🐛 Troubleshooting

### Site não abre
- ✅ Verifique se `index.html` está na mesma pasta que `style.css` e `script.js`
- ✅ Tente abrir em outro navegador

### Idioma não funciona
- ✅ Verifique se `script.js` carregou (F12 → Console)
- ✅ Limpe cache do navegador (Ctrl+Shift+Del)

### Cores/Estilo diferente
- ✅ Verifique se `style.css` está carregando
- ✅ Força recarregar: Ctrl+Shift+R

---

## 📞 Contatos do Site

- LinkedIn: linkedin.com/in/karen-brasil19
- GitHub: github.com/KarenBrasil
- Email: eukarenbrasil@gmail.com
- WhatsApp: +55 85 99837-0928

---

## 📈 Próximos Passos

- [ ] Adicionar foto profissional
- [ ] Publicar online (GitHub Pages/Vercel)
- [ ] Compartilhar link no LinkedIn
- [ ] Adicionar projetos quando prontos
- [ ] Monitorar analytics (Google Analytics)

---

## 📝 Notas

- Site é 100% responsivo
- Sem dependências externas
- Funciona offline
- Pronto para produção
- Otimizado para performance

---

## 🎯 Objetivo

Este portfólio foi criado para:
1. ✅ Destacar habilidades técnicas
2. ✅ Mostrar experiência profissional
3. ✅ Facilitar contato com recrutadores
4. ✅ Ser acessível em qualquer dispositivo
5. ✅ Refletir profissionalismo e expertise

---

**Criado em 2025 com ❤️**  
Pronto para impressionar recrutadores! 🚀
