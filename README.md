# Sorveteria e Açaíteria

Site institucional da **Brothers Sorveteria e Açaíteria** — sabor artesanal direto do coração da Amazônia.


## Sobre o projeto

Site estático, leve e responsivo construído com **HTML5**, **CSS3** e **JavaScript** puro (vanilla), sem dependências de build, frameworks ou bibliotecas externas. Pensado para carregar rápido em qualquer dispositivo — do celular antigo à smart TV.

### Características

- Design editorial com tipografia marcante (Yellowtail + Anton + DM Sans)
- Paleta personalizada (amarelo Brothers + roxo açaí)
- Totalmente responsivo (mobile, tablet, desktop, TV)
- Acessível (WCAG AA — skip link, ARIA, foco visível, `prefers-reduced-motion`)
- SEO-friendly (Open Graph, Twitter Cards, sitemap, robots, dados estruturados)
- Conforme **LGPD** (banner de consentimento + página de privacidade)
- PWA-ready (manifest + ícones)
- Página 404 customizada

## Estrutura

```
.
├── index.html   # Página inicial
├── Contato.html               # Página de contato com formulário
├── privacidade.html           # Política de privacidade (LGPD)
├── 404.html                   # Página de erro 404
├── lgpd.js                    # Banner de consentimento de cookies
├── manifest.json              # Manifesto PWA
├── robots.txt                 # Diretivas para crawlers
├── sitemap.xml                # Mapa do site
├── favicon.svg                # Ícone do site
├── assets/                    # Imagens dos produtos e identidade visual
└── uploads/                   # Capturas e fotos extras
```

## Como rodar localmente

Como é um site 100% estático, basta abrir o arquivo `index.html` no navegador.

Para uma experiência mais próxima da produção (com `fetch`, rotas etc.), suba um servidor estático:

```bash
# Python 3
python -m http.server 8080

# Node (sem instalar nada)
npx serve .

# PHP
php -S localhost:8080
```

Depois acesse `http://localhost:8080/`.

## Publicação

O site pode ser hospedado em qualquer serviço de arquivos estáticos:

- **GitHub Pages** — gratuito, basta ativar nas configurações do repositório
- **Netlify** / **Vercel** — drag & drop, deploy automático a cada push
- **Cloudflare Pages** — CDN global, gratuito

## Acessibilidade

- Navegação completa por teclado (Tab, Shift+Tab, Enter, Esc)
- Skip link "Pular para o conteúdo"
- Atributos ARIA em elementos interativos
- Contraste WCAG AA nas cores principais
- Suporte a `prefers-reduced-motion` para usuários sensíveis a movimento
- Alternativas textuais (`alt`) em todas as imagens

## SEO

- Meta tags otimizadas (description, keywords, robots)
- Open Graph para compartilhamento em redes sociais
- Twitter Cards
- Dados estruturados Schema.org (LocalBusiness / IceCreamShop)
- `sitemap.xml` e `robots.txt`
- URLs amigáveis e tags semânticas (`<main>`, `<nav>`, `<section>`)

## LGPD

O site coleta o mínimo de dados possível. O banner de consentimento aparece na primeira visita e a escolha é guardada no `localStorage` (sem cookies de terceiros). A política completa está em [privacidade.html](privacidade.html).

## Navegadores suportados

Funciona em todos os navegadores modernos:

- Chrome / Edge ≥ 90
- Firefox ≥ 88
- Safari ≥ 14
- Opera ≥ 76

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Contato

- **WhatsApp:** [link](https://wa.me/5500000000000)
- **Instagram:** [@brotherssorveteria](https://instagram.com/brotherssorveteria)
- **E-mail:** contato@brotherssorveteria.com.br
