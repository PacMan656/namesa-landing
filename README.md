# NaMesa — Landing page de vendas

Página de vendas do NaMesa em **Next.js 16 + React 19 + TypeScript**. Oferta: 15 dias grátis, depois R$ 100/mês.

## Rodar no VS Code

Requisito: Node 20.9 ou superior.

```bash
npm install
cp .env.example .env.local   # preencha o WhatsApp e o e-mail
npm run dev                  # http://localhost:3000
```

Produção:

```bash
npm run build
npm start
```

## Configuração (`.env.local`)

| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Endereço final do site (SEO, sitemap, compartilhamento) |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp de vendas, só números com 55 + DDD (ex.: `5585999999999`). Vazio esconde o botão flutuante |
| `NEXT_PUBLIC_EMAIL` | E-mail de contato mostrado na página e nos termos |
| `RESEND_API_KEY`, `EMAIL_FROM`, `CONTATO_EMAIL_PARA` | Opcional. Envia o formulário por e-mail via [Resend](https://resend.com). Sem isso, o formulário abre o WhatsApp com a mensagem já preenchida |

## Estrutura

```
app/
  page.tsx              página inicial (monta as seções)
  layout.tsx            fontes, metadados e SEO
  globals.css           todo o visual (tema, animações, responsivo)
  api/contato/route.ts  recebe o formulário (validação, anti-robô, limite por IP)
  termos/ privacidade/  páginas legais (modelos para revisar)
  sitemap.ts robots.ts icon.svg
components/
  Hero.tsx              topo com o pedido "voando" do celular para a cozinha
  Secoes.tsx            dores, como funciona, recursos, para quem é
  Vendas.tsx            diferencial, prova social, preço, FAQ
  RodaGigante.tsx       carrossel 3D em ciclo (arrastar, setas e teclado)
  Contato.tsx FormContato.tsx
  Header.tsx Rodape.tsx Logo.tsx Icon.tsx Reveal.tsx Legal.tsx
lib/
  config.ts             preço, dias grátis, WhatsApp, e-mail
  depoimentos.ts        depoimentos reais (vazio = mostra convite)
public/img/             prints reais do NaMesa em WebP
```

## Decisões para ficar leve

- **Sem biblioteca de animação.** Tudo em CSS; um único `IntersectionObserver` revela as seções ao rolar.
- **Ícones em SVG inline**, sem pacote de ícones.
- **Fontes empacotadas** (Fraunces e Schibsted Grotesk via Fontsource), servidas pelo próprio site.
- **Imagens em WebP** com `next/image` e carregamento sob demanda; só as do topo são prioritárias.
- **Página estática.** Só o formulário roda no servidor.
- Respeita "reduzir movimento" do sistema e funciona com teclado.

## Antes de publicar

1. Preencha `NEXT_PUBLIC_WHATSAPP` e `NEXT_PUBLIC_EMAIL`.
2. Revise **Termos de uso** e **Política de privacidade** com um advogado e coloque razão social e CNPJ.
3. Quando tiver clientes, coloque os depoimentos **reais** (com autorização) em `lib/depoimentos.ts`.
4. Troque os prints de demonstração por fotos e vídeos reais dos pratos quando tiver.
5. Publique na Vercel (grátis para começar): importe o repositório, cole as variáveis do `.env.local` e pronto.
