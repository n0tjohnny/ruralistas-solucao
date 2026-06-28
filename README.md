# Gabarito — workspace de estratégia de produto (haCARthon)

Repositório de **estratégia de produto** para o **haCARthon** (maratona de inovação aberta do governo para o **CAR — Cadastro Ambiental Rural**). Não há código de aplicação convencional (sem backend, sem testes), mas há **um protótipo interativo** (`/painel`, app React/DCLogic) e duas etapas de build idempotentes (`tools/build-painel.cjs`, `tools/build-pitch.cjs`). O "produto" hoje são **páginas** (visão, pitch, explicador, fluxos, **painel interativo**) + os documentos de estratégia.

## Páginas publicadas (Cloudflare Pages — `gabarito.pages.dev`)

| URL | O que é | Público |
|---|---|---|
| [`/`](https://gabarito.pages.dev/) | Visão do produto | geral |
| [`/painel`](https://gabarito.pages.dev/painel) | **Painel do Analista — protótipo interativo** (fila por risco, mapa por talhão com zoom/pan, antes/depois, trilha de auditoria assinável, fila Concluídos). App React/DCLogic; **NÃO editar à mão** — compilado por `tools/build-painel.cjs`. É o que o vídeo de protótipo filma ao vivo. | banca / analista |
| [`/pitch`](https://gabarito.pages.dev/pitch) | Deck do pitch (13 slides, tecla `N` = narração). Compilado via `tools/build-pitch.cjs` do bundle Claude Design. | banca do haCARthon |
| [`/entenda`](https://gabarito.pages.dev/entenda) | **Explicador sem jargão** — analogia do GPS, fluxos simples e pitch comercial. | o **time** (entender antes de vender) |
| [`/fluxos`](https://gabarito.pages.dev/fluxos) | Fluxogramas técnicos (hoje × com o Gabarito × comparativo). | banca / técnico |

> ⚠️ **Houve um pivô.** O projeto começou como **Compadre** (Desafio 03 — entendimento da legislação do CAR no WhatsApp, persona *Seu Raimundo*) e migrou para **Gabarito** (Desafio 02 — dados geoespaciais). Tudo que menciona Compadre/Seu Raimundo está **superado**. O índice da virada e o status de cada arquivo estão em **[`PIVOT-DESAFIO-02.md`](PIVOT-DESAFIO-02.md)**.

## O produto, em uma frase

**Gabarito** é o **roteador auditável da análise do CAR**: detecta o que mudou no território (Sentinel-2 + PRODES/DETER sobre um t0), remapeia só os talhões alterados, ordena a fila da analista por risco (score invisível) e, quando ela abre o caso, mostra a **evidência datada que torna a decisão assinável** (trilha de auditoria). Um único artefato serve **três públicos**: analista da OEMA (persona **Luana**), análise dinamizada do SICAR e produtor/RT. É **bem público digital (DPG)** — sem monetização, voltado a adoção institucional.

## Por onde começar (ordem de leitura)

1. **[`APRESENTACAO-INTERNA-DESAFIO-02.md`](APRESENTACAO-INTERNA-DESAFIO-02.md)** — 👈 **comece aqui.** Apresentação do time: problema, gargalos de todas as pesquisas/debates, jornada até a solução e **conformidade 100% com o edital**.
2. **[`PIVOT-DESAFIO-02.md`](PIVOT-DESAFIO-02.md)** — o pivô + status de cada artefato (atual / válido / superado).
3. **[`pm-role.md`](pm-role.md)** — **fonte canônica** da estratégia e persona de produto. Ver a seção **DIREÇÃO DECIDIDA (27/06/2026)** no topo: decisões travadas pelo PM (posicionamento, piloto, protótipo, pitch, submissão).
4. **[`prd-outputs/`](prd-outputs/)** — o PRD mais recente é o **`prd_gabarito_2606281925.md` (v5.1)** (v5.1 documenta o protótipo interativo `/painel` na §11.1).
5. **[`reports/09-verificacao-dados-2026.md`](reports/09-verificacao-dados-2026.md)** + **[`reports/10-refutacao-debate-2026.md`](reports/10-refutacao-debate-2026.md)** — verificações adversariais dos dados (com pesquisa web 2025-2026); **prevalecem** em caso de conflito.
6. **Debates decisivos:** [`debate-outputs/debate_output_viabilidade-edital-chance_2606271700.md`](debate-outputs/) (10 rounds: é viável? respeita o edital? chance de ganhar?) + [`debate_output_refutacao-oradores_2606271830.md`](debate-outputs/) (refutação web de cada orador).

## Mapa do repositório

| Pasta / arquivo | O que é |
|---|---|
| `APRESENTACAO-INTERNA-DESAFIO-02.md` | **Apresentação do time:** problema, gargalos, jornada e conformidade com o edital. Comece por aqui. |
| `index.html` · `public/index.html` | Página de visão do Gabarito (entregável; cópias idênticas — editar as duas). Deploy via Cloudflare Wrangler. |
| `pitch.html` · `public/pitch.html` | **Deck do pitch** (`/pitch`, 13 slides). **NÃO editar à mão** — é compilado por `tools/build-pitch.cjs` a partir do bundle Claude Design; cópias idênticas geradas pelo script. |
| `painel.html` · `public/painel.html` · `support.js` · `public/support.js` | **Painel do Analista — protótipo interativo** (`/painel`, app React/DCLogic). **NÃO editar à mão** — compilado por `tools/build-painel.cjs` (mapa por talhão, zoom/pan, antes/depois, rodapé fixo + responsivo, fila Concluídos); as 4 saídas são geradas byte-idênticas. |
| `submission/` | Pacote de submissão da Live 7 (ideação, roteiro do protótipo que filma o `/painel`, narração do pitch, receita do backtest, minuta de nota técnica). Ver `submission/README.md`. |
| `public/entenda.html` | Explicador sem jargão (`/entenda`) para o time. |
| `public/fluxos.html` | Fluxogramas técnicos (`/fluxos`). |
| `diagrams/` | Fontes Mermaid (`.mmd`) + PNG renderizado dos fluxos (`simples_*` didáticos, `fluxo_*` técnicos) + `README.md`. Re-renderizar com `npx @mermaid-js/mermaid-cli`. |
| `gabarito-pitch/` | Roteiros de pitch: `pitch-simples.md` (comercial, sem jargão) e `narracao-prototipo.md` (narração ≤2 min do vídeo de protótipo). |
| `tools/` *(gitignored, versionado à força)* | `build-pitch.cjs` (compila `pitch.html`) e `build-painel.cjs` (compila o protótipo `/painel`) — ambos com **saneamento idempotente** anti-fabricação + trap de strings proibidas + asserts; mais os bundles-fonte (`pitch-bundle.dc.json`, `painel-bundle.dc.json`, `painel-support.js`). |
| `apresentacao.html` · `public/apresentacao.html` | Deck interno do time (espelho do `APRESENTACAO-INTERNA-DESAFIO-02.md`; cópias idênticas — editar as duas). |
| `apresentacao-mentores.html` · `public/apresentacao-mentores.html` | Deck para os **mentores** do haCARthon (compilado do bundle Claude Design via DesignSync MCP; 100% responsivo). Cópias idênticas — editar as duas. |
| `pm-role.md` | Persona/estratégia de PM do Gabarito — **fonte da verdade** (produto). |
| `design.md` | **Fonte da verdade do design** — tipografia, paleta, componentes, regras mobile e workflow de compilação. Seguir antes de mexer em UI. |
| `PIVOT-DESAFIO-02.md` | Índice do pivô Compadre→Gabarito e status dos artefatos. |
| `prd-outputs/` | PRDs versionados (mais recente = **v5.1**, `prd_gabarito_2606281925.md` — §11.1 documenta o protótipo `/painel`). |
| `debate-outputs/` | Transcrições de debates multi-agente (`council-dor-real-*`; `viabilidade-edital-chance-*`; `refutacao-oradores-*`). |
| `debate-materials/` | Insumos de debate. |
| `reports/` | Pesquisa numerada (`01`–`10`) + `reports/exploration/`. `09` e `10` (verificações com pesquisa web) prevalecem sobre dados. |
| `memory/ideas/gabarito/` | `idea.md` + `scores.json` (score atual **73/100 — "test"**). |
| `source-material/` | Material-fonte bruto do haCARthon: `transcricoes-lives/` (Lives) + `documentos/` (PDFs, links, edital). |
| `CLAUDE.md` / `AGENTS.md` | Instruções para os agentes de IA (PM ativo / framework legado). |
| `skills/` · `workflows/` · `.claude/` | Toolchain de IA (PM + validação de ideias). |
| `claude-pm.sh` · `wrangler.toml` | Lançar o PM de IA · config de deploy da página. |

## Rodar a página

```bash
npx wrangler pages dev ./public     # local
npx wrangler pages deploy ./public  # deploy
```

## Idioma

Artefatos de produto e a página estão em **português (pt-BR)**.
