# Gabarito — Product Requirement Document

| Campo | Valor |
|-------|-------|
| Versão | 2.0 |
| Data | 2026-06-27 |
| Autor | AI Product Manager (Gabarito) |
| Status | Draft |
| Fontes | `pm-role.md` (v2, pós-debates) · `debate-outputs/` (4 debates: desafio02, 2026-update, live, **a-dor-desafio02**, **final-stress**) · `reports/01-desafio-oficial.md`, `reports/02-dominio-car.md`, `reports/06-edital-completo.md` · transcrições das Lives haCARthon · `index.html` (página de visão) |

> **Mudança vs PRD 1.0:** incorpora os acordos dos debates — **um artefato para três públicos**, **score auditável/versionado**, **confiança por talhão como decisão**.
>
> ⚠️ **Correção de dados (`reports/09-verificacao-dados-2026.md` — prevalece sobre este PRD onde conflitar):** (1) o fosso é **técnico-operacional, não econômico** — a tese "só-CAPEX/sem-OPEX" foi **refutada** (MapBiomas + INPE já dão camadas contínuas gratuitas); o valor é **frescor sub-anual + classes do Código Florestal + confiança por talhão**. (2) **GeoPackage/COG NÃO é ingerido pelo SICAR** — o SICAR aceita **shapefile/KML/GPX em SIRGAS 2000**; GeoPackage/COG é trabalho interno no QGIS. (3) **PRODES/DETER** são distribuídos em **Shapefile/WFS** (não GeoPackage); **MapBiomas Col.10 = Landsat 30 m**. (4) Concorrentes adjacentes reais: **MapBiomas Alerta** e a **Análise Dinamizada** (triagem por imóvel). (5) Edital: **código funcional não é obrigatório**; **não há** regra de "narração humana" nem proibição de **GEE/ArcGIS**; evento **remoto**; prêmio **5×R$15k**. (6) Métrica "6 vs 20–30 mil/dia" é **relato de organizador** (oficial: "até 66 mil/dia").

---

## 2. Resumo Executivo

O **Gabarito** é a **base de referência viva** do CAR: detecta o que mudou no território (Sentinel-2 + PRODES/DETER sobre um t0 aberto), remapeia **só o talhão alterado** e emite um **score de confiança auditável por talhão**, em formato aberto (GeoPackage/COG, sem GEE/ArcGIS). Serve à analista ambiental estadual (persona **Luana**), à **análise dinamizada do SICAR** e ao **produtor/responsável técnico** — um único artefato, três consumos. O problema que resolve: a base de referência que confere cada declaração do CAR nasce defasada (~2–2,5 anos de licitação) e por isso a analista abandona a automação e cai para ~6 análises/dia, o produtor entra num vai-e-volta de notificações injustas, e o crédito rural trava. **Por que agora:** a análise dinamizada já roda em 9 estados (+1 milhão de CARs, SFB jun/2026) e o CAR é o 1º Bem Público Digital do Brasil — há demanda real e mandato aberto, mas ninguém entrega frescor + confiança por talhão. **Diferencial:** **frescor sub-anual + classes do Código Florestal + confiança por talhão como decisão** sobre as camadas que já existem (MapBiomas anual + PRODES/DETER) — o que nem o MapBiomas Alerta (confiança do alerta) nem a Análise Dinamizada (triagem por imóvel) entregam.

---

## 3. Problem Statement

### Dores observáveis (com evidência das fontes)
- **Analista (Luana):** com base defasada, não confia na análise automática → abre cada imóvel à mão e cai de **20–30 mil análises/dia (automático) para ~6/dia (manual)**; fila de ~12 mil; 4 sistemas abertos; **assina parecer respondendo juridicamente** (Lives haCARthon; `pm-role.md`).
- **Produtor / RT:** auto-declara o polígono "no escuro"; divergência contra a base velha gera **notificação/pendência** → retifica às cegas → recai → **crédito rural travado, safra perdida** (Live 05/06; debate a-dor).
- **Geógrafa/produtor de base:** remapeia 100% do estado quando ~3% dos talhões mudaram; ciclo de licitação de ~2 anos entrega "retrato anual de um filme diário".

### Lacuna de mercado
- A **análise dinamizada** cruza o declarado contra a base e faz **triagem por imóvel**, mas **não diz onde confiar por talhão**. **MapBiomas Col.10** (Landsat 30 m) dá cobertura anual nacional, mas não o delta sub-anual nem confiança por parcela. **MapBiomas Alerta** valida alertas de perda e cruza com o CAR, mas é confiança do *alerta*, não da *base*. **PRODES/DETER** dão o alerta, não o score nem a base classificada. Lacuna real (jun/2026): **ninguém acopla confiança *por talhão da base* à decisão de liberar/rever** — mas "não há concorrente" seria exagero.

### Dor-raiz (Five-Whys — debate `a-dor-desafio02`)
6 análises/dia → não confio na base → base velha → refeita em lote bienal por licitação → só há verba pra refazer tudo (CAPEX), não pra atualizar o delta (OPEX) → **não há dono do processo contínuo**. Raiz **técnica** (base defasada/em-lote/opaca) sustentada por raiz **econômica** (financiamento só-CAPEX). A auto-declaração ruim é **sintoma secundário**: o CAR Pré-Preenchido que a corrigiria é **refém da base**.

### Custo da inação
Fila perene; análise manual cara e lenta; desmatamento recente julgado contra mapa velho (risco ambiental e jurídico); crédito rural represado; e o CAR-DPG, vitrine internacional do Brasil, exibindo gargalo na ponta de análise.

---

## 4. Product Vision & Goals

**Visão:** devolver à analista o direito de confiar no mapa — a base de referência do CAR mantida viva, barata e auditável, para que a automação volte a rodar em escala e nenhum cadastro espere anos por um mapa.

**Metas (mensuráveis):**
1. **G1 — Vazão:** elevar a análise de **6 → 18 cadastros/dia** por analista no recorte-piloto **sem aumentar a taxa de erro de liberação**.
2. **G2 — Acurácia do delta:** **recall do delta vs DETER ≥ 80%** no recorte-piloto (os talhões realmente alterados aparecem no topo da fila).
3. **G3 — Auditabilidade:** **100%** dos scores rastreáveis até cena/data/fonte/limiar e reproduzíveis pela regra versionada.
4. **G4 — Vai-e-volta:** elevar a taxa de cadastro aprovado na **1ª/2ª tentativa** (baseline a medir no piloto).
5. **G5 — Custo:** **custo por cadastro atualizado** (delta) inferior ao do remapeamento total, demonstrado em projeção de OPEX.

**Não-metas (anti-scope creep):**
- **N1:** não substituir o SICAR nem a análise dinamizada (somos camada, não plataforma concorrente).
- **N2:** não tomar a decisão legal — o produto informa, a analista decide e assina.
- **N3:** não traduzir o delta para todas as classes do Código Florestal (APP/RL/consolidada completas) no MVP — fica no roadmap.
- **N4:** não depender de GEE/ArcGIS nem de imagem comercial paga no MVP.
- **N5:** não construir captura individual por CPF/produtor (isso é Desafio 01/Compadre, arquivado).

---

## 5. Target Users & Personas

| Campo | Luana (primária) | Eng. da Análise Dinamizada (SICAR/SFB) | Responsável Técnico do Ruralista |
|-------|------------------|----------------------------------------|----------------------------------|
| Papel | Analista ambiental/geógrafa de OEMA | Dono do módulo de cruzamento do SICAR | Técnico contratado pelo produtor |
| Necessidade #1 | Saber por talhão onde confiar e liberar, e o que exige olho humano | Roteie automático vs humano sem relaxar conformidade | Cadastro aprovado sem retrabalho cego |
| Workaround hoje | Abre cada imóvel à mão (~6/dia), 4 sistemas | Cruza tudo no mesmo balde; depende do pré-preenchido | Redesenha polígono no escuro, retifica e reza |
| Sucesso = | Fila anda com segurança; assina sem medo | Mais liberação automática com rastro auditável | Aprovação na 1ª/2ª tentativa, evidência anexável |
| Frequência | Diária (jornada inteira) | Contínua (motor do SICAR) | A cada cadastro/retificação |

Personas secundárias (decisão/financiamento, não-usuárias diretas): **Gestor de OEMA / Financiador** (assina o cheque; exige dono institucional + custeio OPEX) e **Banca do haCARthon** (avalia ideação+protótipo+pitch).

---

## 6. User Stories & Scenarios

#### US-01: Fila priorizada por risco
**Como** Luana, **quero** abrir a fila já ordenada por risco real (mudança × confiança), **para** atacar primeiro o que importa em vez de processar por ordem de chegada.
**Critérios de aceite:**
- [ ] A fila lista cadastros com coluna "mudou/não mudou" e score de confiança por talhão.
- [ ] Ordenação padrão = maior risco (delta detectado + baixa confiança) no topo.
- [ ] Cada item linka para o detalhe do talhão (US-02).
**Edge cases:** cadastro sem alerta PRODES/DETER no período (→ marcar "sem mudança detectada", confiança alta); cadastro em área de nuvem persistente no Sentinel (→ confiança baixa por baixa observabilidade, não por mudança).
**Prioridade:** P0 · **Complexidade:** Média

#### US-02: Detalhe do talhão com evidência
**Como** Luana, **quero** ver, no talhão, antes/depois Sentinel datado + alerta PRODES/DETER + % de sobreposição (UC/TI/outro CAR) + a decomposição do score, **para** decidir com evidência, não no escuro.
**Critérios de aceite:**
- [ ] Mostra recorte Sentinel-2 antes/depois com datas.
- [ ] Mostra a decomposição do score (ex.: "alerta DETER + queda NDVI + dado <30 dias = alta confiança").
- [ ] Mostra sobreposições geométricas com camadas oficiais.
- [ ] Do clique no talhão ao parecer fundamentado em **≤30 s** (NFR).
**Edge cases:** deslocamento/co-registro entre base vetorial e raster (→ sinalizar "possível desalinhamento", baixar confiança de borda); múltiplos alertas no mesmo talhão (→ agregar, manter rastro de cada).
**Prioridade:** P0 · **Complexidade:** Alta

#### US-03: Ação — liberar ou rascunho de parecer
**Como** Luana, **quero** "liberar para análise dinamizada" (alta confiança) ou gerar um rascunho de parecer editável e rastreável (cada frase ligada à evidência), **para** fechar o caso sem reescrever do zero.
**Critérios de aceite:**
- [ ] Botão "liberar" disponível só quando confiança ≥ limiar configurável.
- [ ] Rascunho de parecer cita a evidência (cena/data/fonte) automaticamente.
- [ ] A decisão final é sempre da analista (nada é liberado sem ação humana no MVP).
**Edge cases:** analista discorda do score (→ override manual registrado com justificativa); confiança no limiar exato (→ default = rota humana).
**Prioridade:** P0 · **Complexidade:** Média

#### US-04: Roteamento para a análise dinamizada (SICAR)
**Como** Eng. da análise dinamizada, **quero** consumir o score por talhão para rotear (alta+sem-mudança → automático; delta/baixa → humano), **para** subir a vazão automática sem relaxar conformidade.
**Critérios de aceite:**
- [ ] Saída em GeoPackage/COG com atributo de score + metadados de rastro por talhão.
- [ ] Regra de corte versionada e documentada (não caixa-preta).
**Edge cases:** versão da regra muda entre lotes (→ carimbar versão no dado); score ausente (→ tratar como rota humana).
**Prioridade:** P1 · **Complexidade:** Média

#### US-05: Evidência legível para o produtor/RT
**Como** RT do ruralista, **quero** receber a evidência do delta (recorte datado, linguagem clara, anexável), **antes** da notificação, **para** corrigir a geometria ou contestar uma divergência que é da base velha — não minha.
**Critérios de aceite:**
- [ ] Evidência exportável em formato anexável ao processo (PDF/imagem + metadados).
- [ ] Texto legível por não-geógrafo ("a imagem de DD/MM mostra X neste ponto"), sem expor só "confiança 0,72".
**Edge cases:** divergência atribuível à base velha (→ rotular como "possível defasagem da base", caminho de contestação); produtor sem RT (→ linguagem ainda mais simples).
**Prioridade:** P1 · **Complexidade:** Média

#### US-06: Modelo de sustentação (governança)
**Como** Gestor/Financiador, **quero** um dono institucional do processo contínuo + custeio plurianual (OPEX), **para** que a base viva não morra no fim do piloto.
**Critérios de aceite:**
- [ ] Proposta nomeia o dono (OEMA / SFB / consórcio) e a fonte de custeio (edital/Fundo Amazônia/BNDES).
- [ ] Projeção de custo do delta (OPEX) vs remapeamento total (CAPEX).
**Edge cases:** nenhum dono assume (→ produto fica como ferramenta avulsa de OEMA, escopo reduzido).
**Prioridade:** P1 (proposta) · **Complexidade:** Baixa (documental)

---

## 7. Functional Requirements

| FR-ID | Área | Descrição | Input | Output | Prio | Dep |
|-------|------|-----------|-------|--------|------|-----|
| FR-001 | Ingestão | Ingerir t0 (base estadual qualificada **ou** MapBiomas Col.10) | GeoPackage/raster do t0 | Camada t0 normalizada em PostGIS | P0 | — |
| FR-002 | Ingestão | Ingerir alertas PRODES/DETER do recorte/período | GeoPackage (TerraBrasilis) | Camada de alertas | P0 | — |
| FR-003 | Ingestão | Ingerir mosaico Sentinel-2 antes/depois do recorte | Cenas Sentinel-2 (abertas) | Raster co-registrado | P0 | — |
| FR-004 | Detecção | Computar o **delta** (talhões candidatos a remapeamento) cruzando alerta + mudança espectral (NDVI) sobre t0 | FR-001..003 | Conjunto de talhões com flag "mudou" | P0 | FR-001,2,3 |
| FR-005 | Detecção | Tratar co-registro/deslocamento; penalizar borda/desalinhamento | Rasters/vetores | Máscara de confiabilidade geométrica | P0 | FR-003 |
| FR-006 | Classificação | Reclassificar **apenas** talhões sinalizados; permitir correção humana no fluxo | Talhões do delta | Talhões reclassificados | P0 | FR-004 |
| FR-007 | Score | Calcular score de confiança por talhão = f(concordância PRODES×DETER, magnitude NDVI, idade do dado, confiabilidade geométrica), com **pesos explícitos versionados** | FR-004,005 | Score [0–1] + decomposição + versão da regra | P0 | FR-004,5 |
| FR-008 | Score | Calibrar score contra amostra (kappa por classe/bioma) | Amostra de verdade | Relatório de calibração | P1 | FR-007 |
| FR-009 | UI Fila | Exibir fila ordenada por risco (mudança×confiança) | FR-007 | Tela de fila | P0 | FR-007 |
| FR-010 | UI Talhão | Exibir detalhe: Sentinel antes/depois datado, alerta, sobreposições, decomposição do score | FR-006,007 | Tela de detalhe | P0 | FR-006,7 |
| FR-011 | Ação | Liberar (alta confiança) ou gerar rascunho de parecer rastreável | Ação da analista | Decisão registrada + parecer | P0 | FR-010 |
| FR-012 | Sobreposição | Detectar e quantificar sobreposição com UC/TI/outro CAR | Camadas oficiais + imóvel | % de sobreposição por talhão | P1 | FR-001 |
| FR-013 | Saída SICAR | Exportar **shapefile (.shp zipado)/KML em SIRGAS 2000** com score + metadados de rastro (GeoPackage/COG só para trabalho interno no QGIS — SICAR não os ingere) | FR-007 | Arquivo no formato do SICAR | P1 | FR-007 |
| FR-014 | Saída Produtor | Exportar evidência legível e anexável do delta | FR-010 | PDF/imagem + metadados | P1 | FR-010 |
| FR-015 | Auditoria | Versionar regra de score e carimbar versão em cada saída | Config de pesos/limiares | Registro versionado | P0 | FR-007 |
| FR-016 | Governança | Documentar modelo de sustentação (dono + custeio OPEX) | — | Anexo da proposta | P1 | — |

---

## 8. Non-Functional Requirements

| Categoria | Requisito | Alvo |
|-----------|-----------|------|
| Desempenho (UX) | Clique no talhão → parecer fundamentado | **≤ 30 s** |
| Desempenho (UX) | Carregar a fila do recorte | < 3 s |
| Desempenho (pipeline) | Rodar o delta de 1 município/trimestre | Em horas, em hardware de OEMA (não dias) |
| Escalabilidade | Unidade de processamento | Por município/recorte (não estado-inteiro de uma vez) |
| Acurácia | Recall do delta vs DETER | ≥ 80% (piloto) |
| Auditabilidade | Rastreabilidade do score | 100% até cena/data/fonte/limiar; regra versionada |
| Abertura | Stack | 100% open source; **sem GEE/ArcGIS**; QGIS/PostGIS + libs geo abertas |
| Interoperabilidade | Formato de saída | Trabalho interno: GeoPackage/COG (QGIS). Ingestão no SICAR: **shapefile/KML em SIRGAS 2000** (SICAR não lê GeoPackage/COG) |
| Portabilidade | Execução | Roda no ferramental que a OEMA já tem; sem licença comercial |
| Acessibilidade | Evidência ao produtor | Legível por não-geógrafo |
| Segurança/Conformidade | Decisão legal | Sempre humana; nada liberado sem ação da analista (MVP) |
| Sustentação | Continuidade | Modelo OPEX com dono institucional definido |
| i18n | Idioma | pt-BR (replicável como DPG) |

---

## 9. Data Model

**Entidades:**
- **Imóvel/CAR** — id do CAR, geometria declarada, status na fila. (1:N talhões)
- **Talhão** — id, geometria, classe atual (t0), flag de mudança, score de confiança, versão da regra, atributos de evidência. (N:1 imóvel)
- **Alerta** — fonte (PRODES/DETER), data, geometria, severidade. (M:N talhões)
- **CenaSentinel** — id, data, footprint, índice (NDVI) pré/pós. (M:N talhões)
- **CamadaOficial** — tipo (UC/TI/CAR vizinho), geometria. (M:N talhões via sobreposição)
- **RegraDeScore** — versão, pesos, limiares, data. (1:N talhões pontuados)
- **DecisãoDaAnalista** — talhão/imóvel, ação (liberar/parecer/override), justificativa, timestamp, autor. (N:1 talhão)

**Relacionamentos:** Imóvel 1:N Talhão; Talhão M:N Alerta/Cena/CamadaOficial; RegraDeScore 1:N Talhão; Talhão 1:N Decisão.

**Constraints:** todo Talhão pontuado referencia uma RegraDeScore (versão obrigatória); score ∈ [0,1]; toda Decisão tem autor + timestamp; flag de mudança ∈ {mudou, não-mudou, indeterminado}.

**Ciclo de vida:** t0 ingerido por recorte; delta recalculado por janela (trimestral/sob alerta); scores recalculados quando a regra muda (carimbando nova versão); decisões são imutáveis (append-only, para auditoria).

---

## 10. API Design

> MVP é protótipo/mockup (sem código exigido); a API abaixo é a intenção de integração, não um contrato implementado.

```
GET /recorte/{id}/fila
Propósito: fila priorizada por risco
Auth: sessão OEMA
Resposta: [{car_id, talhao_id, mudou, score, top_evidencia}]
Erros: 404 recorte inexistente

GET /talhao/{id}
Propósito: detalhe + evidência + decomposição do score
Resposta: {geom, antes/depois (urls COG), alertas[], sobreposicoes[], score:{valor, fatores[], regra_versao}}

POST /talhao/{id}/decisao
Propósito: registrar liberação/parecer/override
Request: {acao, justificativa}
Resposta: {ok, parecer_rascunho}
Erros: 409 liberar com confiança < limiar

GET /recorte/{id}/export?fmt=gpkg|cog
Propósito: saída para a análise dinamizada (score + rastro + versão)
```

---

## 11. UI/UX Requirements

- **Telas-chave (escopo congelado — 1 fluxo, 3 telas):** (1) **Fila priorizada por risco**; (2) **Detalhe do talhão** (antes/depois Sentinel datado + alerta + sobreposição + decomposição do score); (3) **Ação** (liberar / rascunho de parecer rastreável).
- **Caminho crítico:** abrir fila → clicar no talhão de maior risco → ver evidência → liberar OU gerar parecer → próximo. Valor entregue em ≤30 s por talhão.
- **Padrões de interação:** a cor é a legenda do mapa (verde=nativa, etc.); confiança em verde/amarelo/vermelho; toda confiança sempre exibida **com** a evidência que a sustenta (nunca número solto).
- **Responsivo:** desktop-first (QGIS/estação de trabalho da OEMA); o protótipo de demonstração pode ser mockup navegável.
- **Acessibilidade:** contraste AA; rótulos legíveis; a evidência exportada ao produtor é legível por não-geógrafo.

---

## 12. Dependencies & Integrations

| Dependência | Tipo | Propósito | Fallback |
|-------------|------|-----------|----------|
| Sentinel-2 (Copernicus) | Dado aberto | Detecção de mudança (NDVI antes/depois) | Landsat aberto onde Sentinel falhar; alta-res só p/ refino |
| PRODES/DETER (TerraBrasilis) | Dado aberto (**Shapefile/WFS**) | Sinal oficial de mudança | DETER diário se PRODES anual atrasar |
| MapBiomas Col.10 (**Landsat 30 m**) | Dado aberto (CC-BY) | t0 quando base estadual indisponível | Base estadual qualificada (preferida). *Produto 10 m do MapBiomas depende de GEE — evitar.* |
| Sentinel-2 via CDSE/openEO | Dado aberto + processamento | 10 m, NDVI antes/depois (precisa co-registro + máscara de nuvem) | Processamento cloud-assistido (série estadual inviável em desktop) |
| Base de referência estadual | Dado do órgão | t0 preferido (já em classes utilizáveis) | MapBiomas Col.10 |
| consulta.car.gov.br | Dado público | Polígono/dados do CAR do recorte | Consulta pública clássica por nº de CAR |
| QGIS/PostGIS + libs geo abertas | Ferramenta | Pipeline e visualização | — (requisito; sem GEE/ArcGIS) |
| Interface da análise dinamizada (SICAR) | Integração | Consumir o score/roteamento | Saída GeoPackage entregue offline |

---

## 13. Release Strategy

- **MVP (haCARthon / piloto 1 município):** FR-001..007, FR-009..011, FR-015 — detectar delta sobre t0, score auditável, fila + detalhe + ação, em um recorte real (preferência: OEMA de alta pressão; estados do sandbox AL/RJ servem). Prova: recall do delta vs DETER + score reproduzível + ganho de vazão.
- **Fase 2:** FR-008 (calibração kappa formal), FR-012 (sobreposição UC/TI/CAR), FR-013/014 (saídas SICAR e produtor), FR-016 (modelo de sustentação amarrado a um dono).
- **Fase 3:** tradução do delta para classes completas do Código Florestal (APP/RL/consolidada); generalização multi-bioma; cadência sub-anual automatizada; replicação como DPG por outros países.
- **Feature flags:** limiar de liberação automática (por estado); versão da regra de score.
- **Rollout:** 1 município → 1 estado → multi-estado, sempre com revisão humana embutida.

---

## 14. Success Metrics

| Métrica | Definição | Alvo | Como medir |
|---------|-----------|------|------------|
| Aquisição (adoção) | OEMAs/recortes rodando o Gabarito | ≥1 piloto real | Acordo de piloto com OEMA |
| Engajamento (vazão) | Análises/dia por analista | **6 → 18** sem subir erro | Log de decisões no piloto |
| Acurácia (produto) | Recall do delta vs DETER | **≥ 80%** | Validação contra DETER no recorte |
| Retenção (vai-e-volta) | Aprovação na 1ª/2ª tentativa | Sobe vs baseline | Histórico de retificações |
| Resultado de negócio | Custo por cadastro atualizado | Delta < remapeamento total | Projeção OPEX vs CAPEX |
| Confiança/auditoria | % de scores rastreáveis e reproduzíveis | 100% | Auditoria da regra versionada |

---

## 15. Risks & Mitigations

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| Score mal calibrado/caixa-preta → erro jurídico ou desmascarado no Q&A | Média | Alto | Heurística transparente/versionada; kappa por classe; revisão humana; evidência rastreável (FR-007/015) |
| Co-registro/deslocamento gera falso-positivo | Média | Alto | Penalizar borda/desalinhamento no score (FR-005) |
| Sem dono institucional / só CAPEX → morre no fim do piloto | Alta | Alto | Modelo de sustentação como entregável (FR-016, US-06) |
| Acesso ao t0 estadual real a tempo | Média | Médio | Plano B: MapBiomas Col.10 + consulta.car (timebox) |
| "É só feature do SICAR / recriaram a dinamizada" (banca) | Média | Médio | Posicionar como camada de decisão (frescor+confiança por talhão), aberta, que roda em qualquer OEMA |
| Generalização entre biomas falha | Média | Médio | Começar por recorte de município; classes CF no roadmap |
| Cronograma do hackathon (recurso/tempo) | Média | Alto | Escopo congelado (1 fluxo, 3 telas); demo gravada; buffer |

---

## 16. Open Questions

| Pergunta | Dono | Prazo | Status |
|----------|------|-------|--------|
| A base qualificada do estado-piloto está acessível para o protótipo? | Time + OEMA | Piloto | Aberta (plano B: MapBiomas) |
| Cadência real de atualização das bases estaduais (justifica o "frescor"?) | Time | Piloto | Aberta |
| Quem é o dono institucional do processo contínuo (OEMA/SFB/consórcio)? | Gestor/SFB | Pós-piloto | Aberta (veto de financiamento) |
| Ponto de corte do handoff score → análise dinamizada | OEMA + SICAR | Piloto | Aberta |
| Pesos/critérios de avaliação da banca do haCARthon | ENAP | Evento | Aberta (página JS não pública) |

---

## 17. Appendix

**Glossário:**
- **Base de referência / "gabarito":** mapa de uso e cobertura do solo (satélite vetorizado) usado para conferir cada declaração do CAR.
- **Delta:** conjunto de talhões que mudaram desde o t0 — o que o Gabarito remapeia.
- **t0:** base de partida (estadual qualificada ou MapBiomas Col.10).
- **Análise dinamizada:** módulo do SICAR que cruza o declarado contra a base; já em produção em 9 estados.
- **CAR Pré-Preenchido:** iniciativa do SFB que usa a base para propor a geometria ao produtor (refém da qualidade da base).
- **Score de confiança:** [0–1] por talhão, heurística transparente versionada; define handoff automático×humano.
- **CAPEX/OPEX:** remapeamento pontual (capital) vs atualização contínua (custeio) — núcleo da raiz econômica.
- **OEMA:** Órgão Estadual de Meio Ambiente. **RT:** Responsável Técnico. **kappa:** métrica de concordância usada pelos estados.

**Fontes / referências:**
- `pm-role.md` (v2) · `reports/01-desafio-oficial.md`, `reports/02-dominio-car.md`, `reports/06-edital-completo.md`
- Debates: `debate-outputs/debate_output_a-dor-desafio02_2606271300.md` (dor-raiz dupla, 3 públicos), `debate_output_gabarito-final-stress_2606271200.md` (Red Team/Pre-mortem/Reversibility), e os 3 anteriores.
- Externas: SFB (>1 mi CARs, jun/2026); MapBiomas Col.10; INPE/TerraBrasilis (PRODES/DETER); MGI (CAR DPG, consulta.car).

**Resumo competitivo:** análise dinamizada (cruza, não dá confiança por talhão) · MapBiomas (cobertura anual nacional, sem delta sub-anual/score) · PRODES/DETER (alerta, sem base classificada/score). Lacuna confirmada (jun/2026): ninguém entrega frescor + confiança por talhão para o CAR.

**Diagrama (texto):** `Sentinel-2 (CDSE/openEO) + PRODES/DETER (Shapefile/WFS) + t0 (MapBiomas 30 m / base estadual) → [co-registro + máscara de nuvem + detecção de delta] → [classificação dirigida só no delta] → [score auditável versionado] → {fila p/ analista (QGIS/GeoPackage) · shapefile/KML SIRGAS 2000 p/ SICAR · evidência legível p/ produtor}`.
