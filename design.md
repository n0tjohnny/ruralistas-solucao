# Gabarito — Design System (modelo a seguir)

> **Fonte da verdade do design.** Toda página estática do projeto (`index.html`, `apresentacao.html`, `apresentacao-mentores.html` e seus espelhos em `public/`) deve seguir este documento. Antes de adicionar **qualquer** CSS novo, confira aqui. Páginas compiladas de bundles do Claude Design devem ser auditadas contra esta régua e reconciliadas.
>
> Derivado de auditoria das 3 páginas (fontes, escala tipográfica e paleta batem entre si) + da seção "Marca, Voz e Identidade" do `pm-role.md`, que prevalece em caso de conflito de marca.

---

## 1. Tipografia

**Famílias (só estas duas — nunca introduzir uma terceira):**
- **Spectral** (serifa) — títulos, números de destaque, frases-âncora. Pesos 400–800 + itálico.
- **Hanken Grotesk** (sans) — corpo de texto, rótulos, UI, dados. Pesos 400–800.

Carregadas via Google Fonts no `<head>`. O `body`/container raiz define `font-family: 'Hanken Grotesk'`; títulos sobrescrevem para `'Spectral'`. **Não repetir `font-family` inline desnecessariamente** — herança cobre o corpo.

**Escala tipográfica canônica** (px; `index.html` é a referência). Use **só** estes degraus:

| px | Papel | Família | Notas |
|----|-------|---------|-------|
| 68 | H1 capa (página) | Spectral 700 | `line-height:1.06; letter-spacing:-0.6px` |
| 54 | H2 de fechamento (CTA grande) | Spectral 700 | `letter-spacing:-0.5px` |
| 46 | H2 de seção (padrão) | Spectral 700 | `line-height:1.08; letter-spacing:-0.4px` |
| 44 | Número de destaque (stat) | Spectral 700 | |
| 38 | H2 menor (ex.: Fontes) | Spectral 700 | |
| 30 / 26 / 25 | H3 de card | Spectral 700 | |
| 22 / 20 | Parágrafo-lead | Hanken | `line-height:1.6` |
| 18 | Corpo enfatizado / título de card | ambas | |
| 17 / 16 / 15 | Corpo / texto de card | Hanken | `line-height:1.5–1.6` |
| 14 | Texto pequeno / chips | Hanken | |
| 13 | **Eyebrow/kicker** | Hanken 700 | `text-transform:uppercase; letter-spacing:3px` |
| 12 | Rótulo de seção | Hanken 700 | `uppercase; letter-spacing:2px` |
| 11 / 10 | Micro-rótulos | Hanken 700 | |

**Variante "deck" (apresentações):** hero pode usar **56** (em vez de 68) e H2 **42** (em vez de 46) para telas mais densas. É a única variação aceita — qualquer outro tamanho fora da régua é desvio.

---

## 2. Cores (paleta cor-da-terra + carta)

As cores são a legenda do mapa — nada de azul corporativo frio. `--ga-accent: #D6A23E` é baked no `:root`.

**Superfícies escuras:** `#25382A` Mata (dark primário) · `#2F4A33` Floresta (dark alt) · `#1F2D22` (mais profundo: rodapé, tooltip).
**Superfícies claras:** `#F6EFE0` Creme (fundo de página) · `#ECE2CB` (seção alt) · `#FCF8EF` (superfície de card).
**Acento / destaque:** `#D6A23E` Trigo/Gold (`--ga-accent`, CTA, highlight) · variantes sobre terracota: `#F4D9A8`, `#FBE6CE`, `#FBF3E6`.
**Mudança / alerta:** `#C0573B` Terracota (mudança, CTA forte, seção quente) · `#9A4A33` terracota escuro (texto).
**Legenda do mapa:** `#5F8A55` Vegetação nativa · `#C9A86A` Área consolidada · `#5E8CA8` Hidrografia.
**Texto sobre claro:** `#2E2519` (tinta) · `#5A4F3D` (silenciado) · `#99694E` (rótulo marrom) · `#8A7B63` (fraco).
**Texto sobre escuro:** `#F3ECDC` (primário) · `#DCD3BE` / `#C7CFB9` (silenciado) · `#9FB191` (rótulo verde) · `#E7DFCB`.
**Bordas:** `#E4D8BD` (card sobre claro) · `rgba(214,162,62,.22–.45)` (sobre escuro).

---

## 3. Layout, espaçamento e forma

- **Largura de conteúdo:** `max-width: 1080px` (1200px no navbar/cockpit), centralizado.
- **Padding de seção:** `92px 40px` (vision) / `70px 40px` (deck). Mobile: `44–56px 20px` (via `.ga-pad` ou media query).
- **Raio:** cards 14–22px · pills/chips `999px` · elementos pequenos 6–12px.
- **Eyebrow → H2 → lead** é o ritmo de abertura de toda seção.
- Gradientes radiais sutis de acento/hidro para profundidade em seções escuras (`opacity ≤0.16`).

---

## 4. Componentes

- **Eyebrow/kicker:** 13px, uppercase, `letter-spacing:3px`, weight 700, cor acento ou terracota.
- **Card:** `background:#FCF8EF; border:1px solid #E4D8BD; border-radius:14–20px; padding:20–36px`. Em dark: `#25382A`/`#2F4A33` com borda `rgba`.
- **Stat block:** número Spectral grande na cor acento + rótulo Hanken pequeno.
- **Chip/pill:** fundo translúcido, borda 1px, `border-radius:999px`, 13–14px.
- **Accordion:** `<details>/<summary>` (CSS-only); chevron `.ga-chev` rotaciona em `[open]`. Sem JS.
- **Navbar de abas** (deck): sticky `top:0`, fundo `#25382A`, scroll horizontal com inércia, **touch target ≥44px**, chip ativo na cor acento, auto-scroll-into-view, fade na borda direita (`#ga-navbar::after`).
- **Termo do glossário** (`.ga-term`): `border-bottom:1.5px dotted rgba(214,162,62,.9); cursor:help`. Sublinhado só em **corpo de texto** — **nunca** em H1–H4.
- **Tooltip** (`#ga-gtip`): `position:fixed`, fundo `#1F2D22`, borda acento, raio 12px, `max-width:300px` (mobile `calc(100vw-24px)`), clampado à viewport, `pointer-events:none`, título em Spectral acento.
- **Microcopy / voz do sistema (texto da UI):** só **termos reais do CAR/SICAR** (fotointerpretação manual, liberação automática, análise dinamizada, analista responsável, parecer, cena, talhão, delta, limiar) — **não inventar linguagem**. **Sem travessão `—`** (lê como IA; usar ponto ou vírgula). O humano é a autoridade que **assina**: a máquina **encaminha** o caso a ele, **nunca "rebaixa"**. Registro profissional, sem coloquialismo nem frase redundante. Canônico em `pm-role.md` → "Marca, Voz e Identidade"; no `/painel`, o build (`tools/build-painel.cjs`) trava `—`/`rebaix`/`seu nome no ato`.

---

## 5. Interação (deck) — com fallback gracioso sem JS

- **Abas:** troca via JS (`data-nav` ↔ `data-tab`); sem JS, todas as abas renderizam empilhadas.
- **Swipe:** deslize horizontal troca de aba (passive, threshold 60px + dominância horizontal; clampa nas pontas; ignora `#ga-navbar`).
- **Glossário (tooltips):** o linker deriva termos **e definições do próprio glossário** (cards com `data-terms="forma|forma2"`). Sublinha a 1ª ocorrência de cada forma por aba; tooltip no hover (desktop), toque (mobile) e foco (teclado). Fecha em toque fora / scroll / resize. **Completude é garantida por construção + self-check** (`console.warn` se algum card ficar sem `data-terms`).

---

## 6. Mobile (Android-first — "todo mundo usa android")

- **Breakpoints:** `920px` (colapso de layout: grids → 1–2 colunas; encolhe títulos) e `600px` (compacta navbar, esconde wordmark).
- **Encolhimento de títulos:** todo tamanho ≥40px tem regra de redução no `@media(max-width:920px)`. Ao adicionar um título grande novo, **adicione a regra correspondente** (ver bloco "ponytail: mobile-safety").
- **Touch targets ≥44px** (WCAG AAA).
- **`#ga-root { overflow-x:hidden }`** — rede de segurança contra scroll horizontal de página.
- **`-webkit-overflow-scrolling:touch`** em áreas de scroll horizontal intencional (navbar).
- Tooltips/popovers sempre clampados à viewport.

---

## 7. Workflow de build (compilação de bundle)

Páginas são compiladas de bundles do Claude Design (`*.dc.html`) via DesignSync MCP. Ao compilar:
1. Remover wrapper: `<x-dc>`, `<helmet>` (fundir no `<head>`), `support.js`, `<template>`/thumbnail, `<script data-dc-script>`.
2. Baked `:root{--ga-accent:#D6A23E;--ga-anno:block;}`.
3. **Caçar `{{ ... }}` e handlers `onClick="{{ }}"`** — o bundle espera o `support.js` ligar isso; na página estática viram **inertes**. Religar com JS vanilla próprio (ex.: troca de abas) ou remover.
4. Adicionar `<title>` + `<meta description>`.
5. Auditar a escala tipográfica contra a seção 1 e reconciliar one-offs.
6. **Espelhar root ↔ `public/`** (cópias idênticas) e validar (`diff -q`).

---

## Checklist de revisão (antes de commitar mudança visual)

- [ ] Só Spectral + Hanken; tamanhos dentro da régua (§1).
- [ ] Cores dentro da paleta (§2); nada de azul frio.
- [ ] Nenhum `{{ }}` / handler inerte; nenhum artefato de bundle (`x-dc`, `helmet`, `support.js`).
- [ ] Glossário: termo sublinhado só em corpo (nunca em H1–H4); todos os cards têm `data-terms`.
- [ ] Mobile: grids colapsam, títulos ≥40px encolhem, touch ≥44px, sem scroll horizontal.
- [ ] `index.html`/`apresentacao*.html` idênticos aos espelhos em `public/`.
- [ ] Microcopy: **sem travessão `—`**; só termos reais do CAR/SICAR; humano **encaminhado**, nunca "rebaixado".
