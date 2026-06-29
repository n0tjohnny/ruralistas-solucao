# PIVÔ — Desafio 03 (Compadre) → Desafio 02 (Gabarito)

**Data:** 27 de junho de 2026

O time trocou de desafio no haCARthon. Este documento é o índice da virada: o que mudou, o produto novo em uma página, e o status de cada artefato do repositório.

---

## O que mudou

| | Antes (arquivado) | Agora (alvo) |
|---|---|---|
| **Desafio** | 03 — Aumentar o entendimento das legislações do CAR | **02 — Melhorar o acesso a dados geoespaciais do CAR** |
| **Produto** | Compadre (guia do CAR no WhatsApp) | **Gabarito** (base de referência viva do CAR) |
| **Herói** | Seu Raimundo (pequeno produtor) | **Luana** (analista ambiental/geógrafa de OEMA) |
| **Dor central** | Não entender a lei e perder a terra | Falta **frescor sub-anual + classes do Código Florestal + confiança por talhão como decisão** sobre a base de referência → análise manual, fila travada e vai-e-volta ruralista↔estado. *(A tese "só-CAPEX/sem-OPEX" foi refutada — `reports/09`.)* |
| **Canal/tech** | WhatsApp, áudio, IA conversacional | Sentinel-2 + PRODES/DETER, change detection, QGIS/PostGIS, score por talhão |

**Pergunta-guia do Desafio 02:** *Como atualizar anualmente, com rapidez e acurácia, o mapeamento de uso e cobertura do solo de todos os estados — melhorando a atualização dos cadastros e a quantidade/qualidade das análises do CAR?*

---

## Gabarito em uma página

- **One-liner:** O Gabarito mantém viva a base de referência do CAR — detectando o que mudou e remapeando só isso, em formato aberto — pra que a analista volte a confiar na automação e nenhum cadastro espere anos por um mapa.
- **Dor-raiz (debates + verificação `reports/09`):** fosso **técnico-operacional** — falta **frescor sub-anual + classes do Código Florestal + confiança por talhão como decisão**. (A tese "econômica/só-CAPEX" foi **refutada**: MapBiomas + INPE já dão camadas contínuas gratuitas.) Auto-declaração = gargalo **secundário**; pré-preenchido depende da base só em **entrega futura**.
- **Reposicionamento pós-council (28/06/2026, `debate_output_council-dor-real-desafio02_2606280330.md`, consenso 5/5):** a dor declarada "base velha" é **sintoma**; a **dor-raiz é "ninguém quer assinar a decisão"** (insegurança jurídica do ato + ausência de dono do processo contínuo). Evidência: Análise Dinamizada a ~66 mil/dia, mas conclusão nacional só 2,3%→5,9% (2024→2025) e ~94% dos 8,1 mi de CARs sem conclusão (SFB jun/2026) → o limitante é **decisão defensável, não detecção**. O produto se reposiciona como **roteador de atenção + trilha de auditoria que protege quem assina** (não "dado mais novo"); score com **hierarquia de informação** (invisível na fila, visível/assinável sob demanda); **circularidade do score = dealbreaker** (ground truth independente, nunca o t0); **adoção = requisito de licitação estadual / OEMA early-adopter** (não incorporação federal — RER sem precedente de hackathon), com **submissão dupla: artefato técnico + modelo de governança**.
- **Problema em 3 camadas:** externo (a base é um **snapshot pontual**, sem atualização sub-anual) · interno (insegurança de julgar no escuro → recuo para análise manual: oficial ~3% da base em ~12 anos) · filosófico (um mapa de anos atrás não pode julgar um território que mudou mês passado).
- **Plano (3 passos):** 1) Detecta a mudança (Sentinel-2 + PRODES/DETER sobre t0) · 2) Remapeia só o que mudou (classificação dirigida + revisão humana) · 3) Entrega base + confiança auditável (GeoPackage/COG aberto + score versionado por talhão com evidência; dinamizada onde a confiança é alta, humano onde é baixa).
- **Um artefato, 3 públicos:** analista (libera/roteia a fila) · análise dinamizada/SICAR (automatiza com rastro) · produtor/RT (corrige antes da notificação, com evidência legível). É o que faz dele **produto, não feature**.
- **O que NÃO fazemos:** não substitui SICAR nem a análise dinamizada; não tira a decisão legal da analista.
- **Diferenciais:** frescor sub-anual · confiança **por talhão como decisão** (vs triagem por imóvel da Análise Dinamizada; vs confiança-do-alerta do MapBiomas Alerta) · classes do Código Florestal (roadmap) · score auditável · revisão humana embutida.
- **Ask:** piloto com uma OEMA de alta pressão (Amazônia/Cerrado), recorte de município — **com dono institucional nomeado** (caminho realista pós-council: **requisito de licitação estadual / OEMA early-adopter**, não incorporação federal direta), senão a base viva morre no fim do piloto.
- **Métricas:** 6→18 análises/dia sem subir erro · recall do delta vs DETER · aprovação do ruralista na 1ª/2ª tentativa · custo/cadastro cai.

Fonte canônica detalhada: **`pm-role.md`** e a página **`index.html`**.

---

## Status dos artefatos do repositório

### ✅ Atualizados para o Desafio 02
- `index.html` / `public/index.html` — **página de visão do produto Gabarito** (compilada a partir de `Gabarito - Visao do Produto.dc.html` do projeto Claude Design). É o entregável.
- `pm-role.md` — persona de PM reescrita para o Gabarito/Luana.
- `reports/01-desafio-oficial.md` — desafio, três HMWs e alinhamento atualizados para o 02 (inclui dor-raiz dupla + 3 públicos).
- `debate-outputs/` — 8 debates do Gabarito/Desafio 02; o mais recente e decisivo é o **`debate_output_council-dor-real-desafio02_2606280330.md`** (Council of High Intelligence, consenso 5/5: reposiciona como roteador auditável; dor-raiz = "quem assina"); a tese do fosso está em `debate_output_tese-tecnico-operacional_*` e o protocolo científico (RAT/H1) em `debate_output_metodo-cientifico-incorporacao_*`.
- `prd-outputs/prd_gabarito_*` — PRD do Gabarito; o mais recente (**v5.1**, `prd_gabarito_2606281925.md`) trava as **decisões de direção** do PM (posicionamento = confiança auditável por talhão, NÃO priorização — o MapBiomas Alerta já prioriza por imóvel; piloto Goiás; protótipo = backtest de antecipação; pitch de 5 beats; submissão dupla) e as **correções da verificação web** (Sentinel-2 vê <6,25 ha; DETER Não Floresta set/2025; EUDR 30/12/2026 vigente); a **§11.1** documenta o protótipo interativo `/painel`. Ver a seção **DIREÇÃO DECIDIDA** em `pm-role.md` (canônico) e os debates `viabilidade-edital-chance_2606271700` + `refutacao-oradores_2606271830`.
- `pitch.html` / `public/pitch.html` — **deck do pitch** (`/pitch`, 13 slides). Compilado por `tools/build-pitch.cjs` do bundle `Gabarito - Pitch (haCARthon).dc.html`; inclui o slide da **analogia do GPS** e um **saneamento idempotente anti-fabricação** (ver abaixo). Não editar à mão.
- `painel.html` / `public/painel.html` + `support.js` / `public/support.js` — **Painel do Analista, protótipo interativo** (`/painel`, app React/DCLogic). Compilado por `tools/build-painel.cjs` do bundle **`Gabarito - Painel do Analista (protótipo) v2.dc.html`** (v1 preservado em `tools/painel-bundle-v1.dc.json`), com o mesmo **saneamento idempotente + trap + asserts**. Entrega: fila por risco (score invisível) com grupo **Concluídos**, **"o que mudou neste talhão"** por caso, **mapa de satélite Sentinel-2 REAL** (EOX cloudless, coordenadas reais em Goiás — `tools/fetch-satellite.cjs` → `public/assets/sat/`) com **comparador antes/depois arrastável entre duas épocas reais (2018 × 2024)**, **trilha de auditoria assinável** (4 evidências acima da dobra), rodapé de decisão fixo + responsivo `≤900px`. É a tela que o vídeo de protótipo filma ao vivo. Não editar à mão.
- `public/entenda.html` — **explicador sem jargão** (`/entenda`) para o time entender e acreditar antes de vender: analogia do GPS, fluxos simples e pitch comercial. Persona = **analista** (não "fiscal").
- `public/fluxos.html` + `diagrams/` — fluxogramas (hoje × Gabarito × comparativo), fontes Mermaid `.mmd` + PNG. `simples_*` = didáticos; `fluxo_*` = técnicos.
- `gabarito-pitch/` — `pitch-simples.md` (roteiro comercial) e `narracao-prototipo.md` (narração ≤2 min do vídeo de protótipo, voz de integrante do time).
- **(28/06) Correção de honestidade:** o deck afirmava resultados **fabricados** como fato ("Testamos em ~20 áreas de Goiás" + gráfico medido) e usava municípios de **Alagoas** num slide "Goiás". Reescrito para framing de **projeção/meta a medir** e municípios de Goiás; `tools/build-pitch.cjs` ganhou uma **trava** que faz o build falhar se a fabricação voltar. Guardrail registrado em `CLAUDE.md`.
- Este `PIVOT-DESAFIO-02.md`.

### ♻️ Continuam válidos (pesquisa de domínio CAR, independem do produto)
- `reports/02-dominio-car.md` — domínio do CAR, Código Florestal, classes (nativa, consolidada, APP, RL). **Reaproveitar.**
- `reports/06-edital-completo.md` — regras do haCARthon (open source, DPG). **Reaproveitar.**
- `reports/07-pesquisa-aprofundada-2026.md` — contexto regulatório/2026 (parcial; filtrar o que é de crédito/produtor).
- `reports/exploration/02-car-prepreenchido-apis.md`, `10-dpg-casos-internacionais.md`, `00-INDICE-consolidado.md` — referências de ecossistema/APIs/DPG.
- `source-material/` — material-fonte do haCARthon (transcrições das Lives, `links-uteis.txt`, `Material de Apoio.txt`, PDFs oficiais).

### ⚠️ Superados (eram do Compadre/Desafio 03 — não usar como verdade atual)
- `reports/03-publico-produtor-rural.md` — persona Seu Raimundo (Desafio 03).
- `reports/08-pfd-review-comunicacao.md` — review de comunicação do Compadre.
- `reports/04-concorrentes-solucoes.md`, `05-viabilidade-tecnica.md` — concorrência/viabilidade do Compadre (a viabilidade do Gabarito está em `pm-role.md` e `index.html`).
- `reports/exploration/01,03,04,05,06,07,08,09-*.md` — explorações orientadas ao Compadre (crédito, WhatsApp API, IA conversacional, canal cooperativa, monetização produtor).
- `debate-materials/compadre-visao-do-produto.md`, `memory/ideas/compadre/*`, `prd-outputs/prd_compadre_*.md` — artefatos do produto Compadre.
- Áudios `public/*.mp3` (compadre-1, raimundo-1, raimundo-2) — narração clonada do Compadre; **REMOVIDOS do deploy (27/06)** via `git rm`. Eram órfãos (a página do Gabarito não usa áudio) e a Live 7 pede locução por integrante do time → voz clonada é risco. (Permanecem no histórico git; rescrita de histórico não foi feita por ser desproporcional.)

---

## Estado das skills (auditado 28/06/2026)
- **Skills do projeto** (`skills/`, `.claude/skills/`, `workflows/`) são **toolchain genérico e reutilizável** (idea-scoring, debate, gen-prd, competitor-mapper etc.) — por design **não** carregam o produto. Não citam Compadre/Desafio; o único hit "WhatsApp" em `competitor-mapper` é exemplo genérico de concorrente-substituto. **Nada a atualizar.**
- **Persona do produto** vive em `pm-role.md` (raiz) — já no Gabarito/Desafio 02. O skill global de persona foi **re-sincronizado para `pm-role-gabarito`** e reflete o reposicionamento do council; a antiga `pm-role-compadre` não está mais em uso. **Pendência resolvida.**
- O Gabarito-específico de scoring vive em `memory/ideas/gabarito/scores.json` (73/test, atual) — não nas skills.
