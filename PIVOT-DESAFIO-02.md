# PIVÔ — Desafio 01 (Compadre) → Desafio 02 (Gabarito)

**Data:** 27 de junho de 2026

O time trocou de desafio no haCARthon. Este documento é o índice da virada: o que mudou, o produto novo em uma página, e o status de cada artefato do repositório.

---

## O que mudou

| | Antes (arquivado) | Agora (alvo) |
|---|---|---|
| **Desafio** | 01 — Simplificar o CAR para o usuário | **02 — Melhorar o acesso a dados geoespaciais do CAR** |
| **Produto** | Compadre (guia do CAR no WhatsApp) | **Gabarito** (base de referência viva do CAR) |
| **Herói** | Seu Raimundo (pequeno produtor) | **Luana** (analista ambiental/geógrafa de OEMA) |
| **Dor central** | Não entender a lei e perder a terra | Base de referência defasada → análise manual e fila travada |
| **Canal/tech** | WhatsApp, áudio, IA conversacional | Sentinel-2 + PRODES/DETER, change detection, QGIS/PostGIS, score por talhão |

**Pergunta-guia do Desafio 02:** *Como atualizar anualmente, com rapidez e acurácia, o mapeamento de uso e cobertura do solo de todos os estados — melhorando a atualização dos cadastros e a quantidade/qualidade das análises do CAR?*

---

## Gabarito em uma página

- **One-liner:** O Gabarito mantém viva a base de referência do CAR — detectando o que mudou e remapeando só isso, em formato aberto — pra que a analista volte a confiar na automação e nenhum cadastro espere anos por um mapa.
- **Problema em 3 camadas:** externo (a base envelhece sozinha, 2–2,5 anos) · interno (insegurança de julgar no escuro → análise manual ~6/dia) · filosófico (um mapa de 2 anos atrás não pode julgar um território que mudou mês passado).
- **Plano (3 passos):** 1) Detecta a mudança (Sentinel-2 + PRODES/DETER) · 2) Remapeia só o que mudou (classificação dirigida + revisão humana) · 3) Entrega base + confiança (GeoPackage/COG aberto + score por talhão; dinamizada onde a confiança é alta, humano onde é baixa).
- **O que NÃO fazemos:** não substitui SICAR nem a análise dinamizada; não tira a decisão legal da analista.
- **Diferenciais:** remapeia só o talhão que mudou · score de confiança por talhão · formato aberto (sem GEE/ArcGIS) · revisão humana embutida.
- **Ask:** piloto com uma OEMA de alta pressão (Amazônia/Cerrado), recorte de município.

Fonte canônica detalhada: **`pm-role.md`** e a página **`index.html`**.

---

## Status dos artefatos do repositório

### ✅ Atualizados para o Desafio 02
- `index.html` / `public/index.html` — **página de visão do produto Gabarito** (compilada a partir de `Gabarito - Visao do Produto.dc.html` do projeto Claude Design). É o entregável.
- `pm-role.md` — persona de PM reescrita para o Gabarito/Luana.
- `reports/01-desafio-oficial.md` — desafio, três HMWs e alinhamento atualizados para o 02.
- Este `PIVOT-DESAFIO-02.md`.

### ♻️ Continuam válidos (pesquisa de domínio CAR, independem do produto)
- `reports/02-dominio-car.md` — domínio do CAR, Código Florestal, classes (nativa, consolidada, APP, RL). **Reaproveitar.**
- `reports/06-edital-completo.md` — regras do haCARthon (open source, DPG). **Reaproveitar.**
- `reports/07-pesquisa-aprofundada-2026.md` — contexto regulatório/2026 (parcial; filtrar o que é de crédito/produtor).
- `reports/exploration/02-car-prepreenchido-apis.md`, `10-dpg-casos-internacionais.md`, `00-INDICE-consolidado.md` — referências de ecossistema/APIs/DPG.
- `links-uteis.txt`, `Material de Apoio.txt`, transcrições das Lives — material-fonte do haCARthon.

### ⚠️ Superados (eram do Compadre/Desafio 01 — não usar como verdade atual)
- `reports/03-publico-produtor-rural.md` — persona Seu Raimundo (Desafio 01).
- `reports/08-pfd-review-comunicacao.md` — review de comunicação do Compadre.
- `reports/04-concorrentes-solucoes.md`, `05-viabilidade-tecnica.md` — concorrência/viabilidade do Compadre (a viabilidade do Gabarito está em `pm-role.md` e `index.html`).
- `reports/exploration/01,03,04,05,06,07,08,09-*.md` — explorações orientadas ao Compadre (crédito, WhatsApp API, IA conversacional, canal cooperativa, monetização produtor).
- `debate-materials/compadre-visao-do-produto.md`, `memory/ideas/compadre/*`, `prd-outputs/prd_compadre_*.md` — artefatos do produto Compadre.
- Áudios `public/*.mp3` (compadre-1, raimundo-1, raimundo-2) — narração do Compadre; **órfãos** (a página do Gabarito não usa áudio). Manter para histórico ou remover do deploy.

---

## Pendência para a próxima sessão
- O skill global **`pm-role-compadre`** (em `~/.claude/`, fora deste repositório) ainda injeta a persona antiga. Re-sincronizar a partir do novo `pm-role.md` (agora `pm-role-gabarito`) para que sessões futuras não voltem ao Compadre.
