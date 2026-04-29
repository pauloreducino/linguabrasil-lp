# 🇧🇷 Língua Brasil — Landing Page

Landing page moderna para escola de português para estrangeiros. Desenvolvida com Next.js 15, Tailwind CSS v4, TypeScript, e pnpm.

## ✨ Features

- **Design "Tropical Academia"** — identidade visual com Brazil vibes (verde floresta, dourado, curvas orgânicas)
- **Mobile-first** — otimizada para Instagram bio link (acesso majoritariamente via mobile)
- **SEO completo** — metadata, Open Graph, Twitter Cards, JSON-LD structured data, sitemap automático
- **Segurança** — headers HTTP completos (CSP, HSTS, X-Frame-Options, etc.)
- **Cache eficiente** — static assets com 1 ano, imagens com stale-while-revalidate, SSG puro
- **Performance** — next/font (zero layout shift), next/image (avif/webp), compress habilitado
- **Acessibilidade** — WCAG AA, aria-labels, focus-visible, semântica HTML correta
- **PWA-ready** — manifest.json e theme-color configurados

## 🚀 Stack

| Tech | Versão |
|------|--------|
| Next.js | 15.x (App Router) |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| pnpm | 9.x |

## 📁 Estrutura

```
lingua-brasil/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout + fonts + SEO metadata
│       ├── page.tsx            # Página principal (SSG)
│       ├── globals.css         # Tailwind v4 + design tokens + animations
│       ├── sitemap.ts          # Sitemap automático
│       ├── not-found.tsx       # Página 404
│       └── components/
│           ├── Navbar.tsx          # Navbar sticky com scroll behavior
│           ├── Hero.tsx            # Hero section com foto e CTAs
│           ├── StatsBar.tsx        # Barra de estatísticas
│           ├── About.tsx           # Seção sobre a professora
│           ├── Method.tsx          # Método de ensino (4 passos)
│           ├── Differentials.tsx   # Diferenciais da escola
│           ├── Testimonials.tsx    # Depoimentos de alunos (6 cards)
│           ├── CTA.tsx             # CTA final + FAQ
│           ├── Footer.tsx          # Rodapé com links e social
│           └── FloatingWhatsApp.tsx # Botão flutuante WhatsApp
├── public/
│   ├── manifest.json           # Web App Manifest (PWA)
│   └── robots.txt              # Instruções para crawlers
├── next.config.ts              # Config com headers de segurança e cache
├── .env.example                # Variáveis de ambiente (copiar para .env.local)
└── package.json
```

## ⚙️ Setup

### 1. Instalar dependências

```bash
pnpm install
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local` com seus dados:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999   # Número sem espaços/símbolos
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Quero agendar minha aula experimental.
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
NEXT_PUBLIC_INSTAGRAM_HANDLE=seuperfil
```

### 3. Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 4. Build de produção

```bash
pnpm build
pnpm start
```

## 🎨 Personalização

### Trocar a foto da professora

Substitua a URL da imagem em `src/app/components/Hero.tsx` e `About.tsx`:

```tsx
// Hero.tsx — linha ~130
src="https://SUA-FOTO.jpg"

// About.tsx — linha ~75  
src="https://SUA-FOTO.jpg"
```

Para usar imagens locais, coloque em `/public/images/` e use `/images/foto.jpg`.

### Trocar o nome da professora

Faça busca global por `"Ana Silva"` e substitua pelo nome real.

### Ajustar depoimentos

Edite o array `testimonials` em `src/app/components/Testimonials.tsx`.

### Ajustar cores

Todas as cores estão definidas como CSS custom properties em `src/app/globals.css`:

```css
@theme {
  --color-forest: #1a3c2e;   /* Verde principal */
  --color-gold: #e8a020;     /* Dourado/acento */
  --color-cream: #fefdf4;    /* Fundo claro */
  /* ... */
}
```

## 🚢 Deploy no Vercel

```bash
pnpm build   # Verificar se build passa sem erros
```

1. Push para GitHub
2. Importe o repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente no dashboard do Vercel
4. Deploy automático ✅

## 🔒 Segurança implementada

- `Content-Security-Policy` — restringe origens de scripts, fontes e imagens
- `Strict-Transport-Security` — força HTTPS com preload
- `X-Frame-Options: SAMEORIGIN` — previne clickjacking
- `X-Content-Type-Options: nosniff` — previne MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — desabilita câmera, microfone e geolocalização

## 📊 Cache Strategy

| Recurso | Cache |
|---------|-------|
| `/_next/static/*` | 1 ano imutável |
| `/_next/image*` | 24h + stale-while-revalidate 7 dias |
| Fontes | 1 ano imutável |
| Página HTML | SSG — gerada no build, CDN edge caching |

## 📱 Seções da Landing Page

1. **Navbar** — Sticky, blur effect no scroll, menu mobile
2. **Hero** — CTA principal, foto professora, social proof mini
3. **Stats Bar** — 200+ alunos, 30+ países, 8+ anos, 98% satisfação
4. **About** — Bio da professora, credenciais, frase inspiradora
5. **Method** — 4 passos do método imersivo
6. **Differentials** — 6 diferenciais + banner CTA interno
7. **Testimonials** — 6 depoimentos reais + trust badges
8. **CTA Final** — Card destaque + FAQ com 4 perguntas
9. **Footer** — Links, social, contato
10. **WhatsApp Flutuante** — Botão pulsante com tooltip

---

Desenvolvido com 💚 no Brasil 🇧🇷
