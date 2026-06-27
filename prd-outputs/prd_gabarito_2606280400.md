# Gabarito — Product Requirement Document

| Campo | Valor |
|-------|-------|
| Versão | 4.0 |
| Data | 2026-06-28 |
| Autor | AI Product Manager (Gabarito) |
| Status | Draft |
| Fontes | `pm-role.md` (com seção Council) · `reports/09-verificacao-dados-2026.md` (**referência de dados — prevalece**) · `reports/01,02,06` · `debate-outputs/` (8 debates, esp. **`council-dor-real-desafio02_2606280330`**, `tese-tecnico-operacional`, `metodo-cientifico-incorporacao`) · `memory/ideas/gabarito/{idea.md,scores.json}` · `index.html` |

> **Mudanças vs PRD 3.0 (incorporação do Council of High Intelligence, 28/06/2026, consenso 5/5):**
> 1. **REPOSICIONAMENTO.** O produto deixa de ser "dado mais novo" e passa a ser **roteador de atenção + trilha de auditoria que protege quem assina**. A dor declarada "base velha" é **sintoma**; a **dor-raiz é "ninguém quer assinar a decisão"** (insegurança jurídica do ato administrativo + ausência de dono do processo contínuo).
> 2. **Evidência que move a raiz:** a Análise Dinamizada já roda a **~66 mil/dia**, mas a conclusão nacional só foi de **2,3% (2024) → 5,9% (2025)** e **~94% dos 8,1 mi de CARs seguem sem conclusão** (SFB jun/2026). Logo o limitante **não é detecção de mudança — é decisão validada/defensável.**
> 3. **Paradoxo da visibilidade → hierarquia de informação:** o score é **invisível na fila** (só roteia/ordena) e **visível/assinável sob demanda** (painel de evidência: recorte Sentinel datado + alerta PRODES/DETER + limiar). Resolve a tensão Rams (score invisível) × Meadows (invisível = ninguém assina).
> 4. **Circularidade do score = DEALBREAKER (Meadows minority report):** calibrar contra a base velha mede a própria ignorância. Exige **ground truth independente** (PRODES/DETER/amostra de campo), **nunca o t0**. Continua o RAT (H1).
> 5. **Adoção reposicionada:** não é incorporação federal direta (RER foi feito *internamente* por MGI/Dataprev, sem precedente de hackathon) — é **virar requisito de licitação estadual / OEMA early-adopter**. Submissão ao haCARthon = **dupla: artefato técnico + modelo de governança (nomear o dono).**
> 6. **Score honesto (`scores.json`):** segue **73/100 ("test")** — o council **não re-pontuou**, reposicionou e endureceu o RAT. Caminho condicional a **~86–89 por bioma** (se H1 passar) e **~90** (com sinal datado de adoção).

---

## 2. Resumo Executivo

O **Gabarito** é o **roteador auditável da análise do CAR**. Cruza um t0 aberto (base estadual qualificada ou **MapBiomas Coleção 10**, Landsat 30 m) com mudança recente (**Sentinel-2** + alertas **PRODES/DETER**), detecta **só os talhões que mudaram**, remapeia apenas esses, e emite um **score de confiança por talhão** que **ordena a fila por risco (invisível)** e, quando a analista abre o caso, **mostra a evidência datada que torna a decisão assinável (visível/auditável)**. Um único artefato (delta + score por talhão) serve **três públicos**: a **analista da OEMA** (persona **Luana** — gasta o olho só no duvidoso e assina com lastro), a **análise dinamizada do SICAR** (libera automático com trilha de auditoria), e o **produtor/RT** (corrige a declaração antes da notificação). **Problema central (reposicionado pelo council):** a Análise Dinamizada já roda a ~66 mil/dia, mas ~94% dos 8,1 mi de CARs seguem sem conclusão e a conclusão nacional mal saiu de 2,3% para 5,9% (2024→2025, SFB) — o gargalo **não é detectar mudança, é produzir uma decisão que alguém aceite assinar.** É **bem público / DPG** (open source e agnóstico de plataforma como boa prática, não requisito do edital), **sem monetização** — destinado a **virar requisito de licitação estadual / ser adotado por uma OEMA early-adopter**. **Diferencial defensável:** a **fusão regulatória por talhão protegida por trilha de auditoria** (declaração × delta sub-anual × classe do Código Florestal × decisão assinável) — frescor e confiança-por-parcela isolados já são commodity (USGS/NASA, datasets globais, DETER diário).

---

## 3. Problem Statement

### A dor-raiz (reposicionada pelo council — não pular)
A dor **declarada** é "a base de referência está velha". O council (5/5) mostrou que isso é **sintoma**. A **dor-raiz é "ninguém quer assinar a decisão"**: o ato administrativo de liberar/notificar um CAR tem peso jurídico, e sem um lastro defensável o servidor recua. Evidência dura: a Análise Dinamizada já roda a **~66 mil/dia** — capacidade de *detecção* não é o gargalo — e mesmo assim a **conclusão nacional só foi 2,3% → 5,9% (2024→2025)** e **~94% dos 8,1 mi de CARs seguem sem conclusão** (SFB jun/2026). Mais detecção não destrava isso; **decisão defensável destrava.** Por isso o produto é um **roteador de atenção + trilha de auditoria que protege quem assina**, não "um mapa mais novo".

### Dores observáveis (com evidência)
- **Analista (Luana):** com base defasada e sem lastro auditável, não confia na liberação automática → abre imóveis à mão e a vazão despenca (oficial: automático **"até 66 mil/dia"**; manual histórico ~3% da base em ~12 anos — `reports/09`). Fila de milhares, 4 sistemas, **assina parecer respondendo juridicamente** (`pm-role.md`). O que ela quer (Rams) é **uma fila que para de crescer**, não um número.
- **Produtor / RT:** auto-declara o polígono "no escuro"; divergência contra a base velha gera **notificação/pendência** → retifica às cegas → recai → **crédito rural travado** (`debate_output_a-dor-desafio02`).
- **Produtor de base/geógrafa:** remapeia 100% do estado quando poucos % dos talhões mudaram; a base contratada por **licitação "não continuada"** (TR SEMAD-GO) é um **snapshot pontual** — quando entra em uso, o território já mudou.

### Lacuna de mercado (jun/2026, verificada)
- **Análise Dinamizada (SICAR/SFB):** triagem **por imóvel** (passível/não-passível), não por talhão; não diz "onde confiar" nem deixa rastro assinável.
- **MapBiomas Col.10** (Landsat 30 m): cobertura anual nacional, classes genéricas; **não** dá delta sub-anual, classes do Código Florestal, nem confiança por parcela.
- **MapBiomas Alerta:** confiança do *alerta*, não da *base*; sem decisão por talhão.
- **PRODES/DETER:** alertas (Shapefile/WFS), não score nem base classificada.
- **Confiança por parcela / frescor isolados:** **commodity** (USGS/NASA land-change com confiança; dataset global de 3,17 bi de polígonos com raster de confiança; DETER diário). → **Não** são o fosso.
- **Lacuna real e estreita:** ninguém produtiza a **fusão por talhão da base do CAR com trilha de auditoria** (declaração × delta sub-anual × classe CF × decisão assinável, calibrada por kappa contra verdade externa).

### Raiz técnico-operacional (mantida de v3.0, sob a dor-raiz do council)
A tese econômica "a base envelhece por falta de OPEX" foi **refutada** (`reports/09`): já existe camada contínua gratuita custeada por terceiros (MapBiomas anual + INPE). O que sobra como raiz **técnico-operacional**: (1) a camada gratuita é **anual**, não sub-anual; (2) está em **classes genéricas**, não APP/RL/área consolidada do Código Florestal; (3) a triagem é **por imóvel, não por talhão**; e — a camada que o council adiciona — (4) **falta a trilha de auditoria que transforma um delta em decisão assinável.**

### Custo da inação
Fila perene e ~94% dos CARs sem conclusão; análise manual cara/lenta; desmatamento recente julgado contra mapa velho (risco ambiental e jurídico); crédito rural represado; e o CAR-DPG exibindo o gargalo de **decisão** (não de dado) na análise.

---

## 4. Product Vision & Goals

**Visão:** dar à analista uma fila que para de crescer e uma decisão que ela aceita assinar — detectando o que mudou, roteando a atenção por risco, e anexando a cada caso a evidência datada que torna a liberação automática **defensável e auditável**.

**Goals (mensuráveis):**
1. **G1 — Frescor:** reduzir a defasagem efetiva da base de "snapshot pontual" para **delta sub-anual** (≤ trimestral, alinhado ao ciclo DETER). Sucesso: delta atualizado por trimestre num bioma-piloto.
2. **G2 — Decisão assinável (não só confiança):** emitir, por talhão, score calibrado **+ painel de evidência abrível** (recorte datado + alerta + limiar + versão) que sustente a assinatura. Sucesso: **recall do delta vs DETER ≥ 0,90** e **kappa ≥ 0,70** nas classes operacionais, no bioma calibrado, **com 100% dos casos liberados carregando trilha de auditoria abrível**.
3. **G3 — Vazão sem perda de conformidade:** elevar a fatia de talhões liberados automaticamente **sem aumentar o erro** vs análise manual. Sucesso: **fatia automática ≥ 40%** com **zero falso-negativo visível** na amostra de auditoria.
4. **G4 — Adoção institucional (reposicionada):** obter **sinal datado** de adoção por via realista — **inclusão como requisito de licitação estadual** ou **compromisso de uma OEMA early-adopter** (acesso a t0 real / MOU / avanço no haCARthon). Sucesso: ≥1 ente libera dado/compromisso datado para piloto. *(Não se mede "incorporação federal direta" — sem precedente.)*
5. **G5 — Custo cirúrgico:** processar **só o talhão alterado**. Sucesso: custo de atualização por cadastro materialmente menor que o remapeamento total amortizado.

**Non-goals (anti-escopo):**
- **N1:** Não substituir o SICAR nem a análise dinamizada — Gabarito **acopla**, não compete.
- **N2:** Não tirar a decisão legal da analista — o produto roteia e dá lastro; **a assinatura é dela**.
- **N3:** Não há produto pago / monetização — é DPG para adoção.
- **N4:** Não prometer cobertura nacional no MVP — **confiança é por bioma calibrado**.
- **N5:** Não exibir o score como número cru na fila (paradoxo da visibilidade) — score **roteia invisível**, evidência **aparece assinável sob demanda**.
- **N6:** Não auto-mapear RL/área consolidada juridicamente complexa no MVP (roadmap).

---

## 5. Target Users & Personas

| Campo | **Luana — Analista OEMA** | **SFB / Gestor SICAR** | **Produtor / RT** |
|-------|---------------------------|------------------------|-------------------|
| Papel | Analista ambiental estadual | Coordenação federal do CAR / dono do pipe | Pequeno/médio produtor + responsável técnico |
| Necessidade #1 | **Assinar sem medo** — fila que para de crescer + lastro defensável por talhão | Elevar conclusão (não só vazão) sem relaxar conformidade | Corrigir a geometria antes da notificação |
| Workaround atual | Abre imóvel a mão, 4 sistemas | Triagem por imóvel; capacita estados | Retifica às cegas após pendência |
| Sucesso | Fila baixa sem subir erro; **parecer com trilha de auditoria** | Módulo aberto adotável que vira requisito de licitação estadual | Crédito liberado na 1ª/2ª tentativa |
| Frequência | Diária | Programática/contínua | Episódica |

(Personas secundárias: **Geógrafa/produtora de base** — remapear só o delta; **Gestor de licitação estadual / OEMA early-adopter** — emite o sinal datado de adoção; **Banca haCARthon** — avalia artefato **e** governança.)

---

## 6. User Stories & Scenarios

#### US-01: Fila ordenada por risco (score invisível) com evidência assinável sob demanda
**As a** analista da OEMA (Luana), **I want to** receber a fila já ordenada por risco (talhões que mudaram × baixa confiança) **sem ver o número cru**, e abrir o caso para um painel com a evidência datada, **so that** eu gaste o olho só no duvidoso e assine com lastro.
**Acceptance Criteria:**
- [ ] A fila ordena por (mudança × baixa confiança) decrescente; o score **não** aparece como número na lista — só posiciona/agrupa.
- [ ] Ao abrir um caso, o painel mostra estado (mudou/não mudou), evidência abrível (recorte Sentinel datado + alerta DETER/PRODES + limiar + versão do score).
- [ ] Talhões "alta confiança + sem mudança" são marcados como liberáveis automaticamente, **com trilha de auditoria anexada**.
**Edge Cases:** talhão em transição de bioma (calibração fraca) → rebaixado para humano com razão explícita; cena com nuvem/desalinhamento → penalização de borda registrada.
**Priority:** P0 — **Complexity:** High

#### US-02: Liberação automática auditável (roteamento da dinamizada)
**As a** análise dinamizada / gestor SICAR, **I want to** que o score por talhão roteie o cruzamento (alta confiança+sem mudança → automático; delta/baixa confiança → humano) **deixando trilha de auditoria**, **so that** a conclusão suba sem relaxar conformidade e o ato seja defensável.
**Acceptance Criteria:**
- [ ] Saída inclui flag de roteamento por talhão + motivo + trilha (cena/data/fonte/limiar/versão do score).
- [ ] Toda liberação automática é reconstruível a partir da trilha.
- [ ] **Zero falso-negativo visível** na amostra de auditoria (critério de morte).
**Edge Cases:** discordância PRODES×DETER → baixa confiança; score acima do limiar mas em classe não calibrada → humano.
**Priority:** P0 — **Complexity:** High

#### US-03: Evidência legível para o produtor/RT antes da notificação
**As a** produtor/RT, **I want to** ver a evidência do delta (recorte datado, legível) que diverge da minha declaração, **so that** eu corrija a geometria ou conteste uma notificação que é da base velha.
**Acceptance Criteria:**
- [ ] Recorte visual datado + texto simples do que divergiu.
- [ ] Distinção explícita "mudança real no território" vs "diferença por base desatualizada".
**Edge Cases:** produtor sem internet boa → export estático leve; divergência por erro de co-registro → sinalizada, não imputada ao produtor.
**Priority:** P1 — **Complexity:** Medium

#### US-04: Backtest anti-circularidade (o RAT — dealbreaker do council)
**As a** time de produto, **I want to** rodar um backtest offline do score contra verdade **independente do t0**, **so that** eu prove que o score é não-circular antes de qualquer adoção.
**Acceptance Criteria:**
- [ ] Verdade externa = PRODES consolidado + DETER trimestral + amostra estratificada fotointerpretada nos casos difíceis (**NUNCA** a base estadual defasada / o t0).
- [ ] Relatório com recall, kappa por classe, taxa de falso-negativo visível, **recall de talhões pequenos (<6,25 ha — abaixo do MMU do PRODES)**, n da amostra e intervalo.
- [ ] Limiares **pré-registrados antes** de rodar.
**Edge Cases:** amostra insuficiente nos casos difíceis → relatar como inválido, não inflar; cross-bioma sem recalibrar → medir degradação.
**Priority:** P0 — **Complexity:** Medium

#### US-05: Calibração local com o olho da analista (active learning)
**As a** analista da OEMA, **I want to** marcar talhões difíceis que me enganam e ver o kappa do meu bioma, **so that** a confiança seja calibrada na minha realidade, não na média nacional.
**Acceptance Criteria:**
- [ ] Interface de marcação que alimenta a amostra de calibração local.
- [ ] Exibição do kappa local e do regime de calibração de cada talhão.
- [ ] Degradação elegante: calibração local fraca → mais talhões ao humano.
**Edge Cases:** viés do anotador → amostragem estratificada; bioma que cruza estado → calibração por bioma-dentro-de-estado.
**Priority:** P1 — **Complexity:** High

#### US-06: Export acoplável ao SICAR
**As a** OEMA/SFB, **I want to** exportar o resultado em formato que o SICAR ingere, **so that** o Gabarito se acople ao fluxo existente.
**Acceptance Criteria:**
- [ ] Export em **shapefile (.zip)/KML/GPX em SIRGAS 2000** para ingestão no SICAR.
- [ ] GeoPackage/COG disponível apenas como artefato de trabalho interno no QGIS.
**Edge Cases:** reprojeção incorreta → validação de CRS obrigatória antes do export.
**Priority:** P0 — **Complexity:** Low

#### US-07: Modelo de governança (submissão dupla do haCARthon)
**As a** time submetendo ao haCARthon, **I want to** entregar — junto do artefato técnico — um **modelo de governança que nomeia o dono do processo contínuo** e a via de adoção, **so that** o protótipo tenha caminho para virar política pública e não morra órfão.
**Acceptance Criteria:**
- [ ] Documento de governança identifica o adotante-alvo (OEMA early-adopter / requisito de licitação estadual), o operador do OPEX e o ciclo de recalibração.
- [ ] A via de adoção é **datada e realista** (não "incorporação federal direta").
**Edge Cases:** nenhum ente sinaliza → registrar como hipótese H2a aberta, não como adoção.
**Priority:** P0 (entrega haCARthon) — **Complexity:** Low

---

## 7. Functional Requirements

| FR-ID | Área | Descrição | Input | Output | Prio | Deps |
|-------|------|-----------|-------|--------|------|------|
| FR-001 | Ingestão | Carregar t0 (base estadual ou MapBiomas Col.10) e geometrias de talhão do CAR | Shapefile/raster + CAR | Camada t0 normalizada (SIRGAS 2000) | P0 | — |
| FR-002 | Ingestão | Obter alertas PRODES/DETER via TerraBrasilis (Shapefile/WFS) | WFS/Shapefile | Camada de alertas datada | P0 | — |
| FR-003 | Imagem | Obter Sentinel-2 (B4/B8) com co-registro + máscara de nuvem (SCL), via openEO/CDSE | Bbox + janela temporal | Mosaico NDVI antes/depois | P0 | FR-001 |
| FR-004 | Detecção | Computar delta por talhão (NDVI + concordância PRODES/DETER) | t0 + alertas + Sentinel | Talhões candidatos (delta) | P0 | FR-001..003 |
| FR-005 | Score | Heurística transparente e versionada: concordância × magnitude × idade × penalização borda/nuvem | Delta + insumos | Score 0–1 por talhão + evidência | P0 | FR-004 |
| FR-006 | Roteamento | Classificar talhão em automático/humano por limiar calibrado; **score roteia, não é exibido cru** | Score + limiar | Flag de roteamento + motivo (ordena fila) | P0 | FR-005 |
| FR-007 | **Trilha de auditoria** | Anexar a cada caso liberável a evidência abrível (cena/data/fonte/limiar/versão) — **decisão assinável** | Score | Painel de evidência reconstruível | P0 | FR-005 |
| FR-008 | Calibração (RAT) | Backtest vs verdade **externa ao t0** (recall, kappa, falso-negativo visível, recall <6,25 ha) | Amostra + PRODES/DETER | Relatório de calibração | P0 | FR-005 |
| FR-009 | Calibração local | Marcação pela analista → amostra local → kappa local | Marcações | Score recalibrado + kappa local | P1 | FR-008 |
| FR-010 | Classes CF | Traduzir delta para classe do Código Florestal (começar pela de melhor sinal/risco) | Delta + CAR | Talhão classificado (CF) | P1 | FR-004 |
| FR-011 | Export | Exportar shapefile/KML/GPX em SIRGAS 2000 | Resultado | Arquivo ingerível pelo SICAR | P0 | FR-006 |
| FR-012 | Visão produtor | Gerar recorte datado legível da divergência | Delta + CAR | Evidência visual + texto | P1 | FR-005 |
| FR-013 | Governança | Documento que nomeia dono do processo + via de adoção datada | Contexto do piloto | Modelo de governança (entrega dupla) | P0 | — |

---

## 8. Non-Functional Requirements

| Categoria | Requisito | Alvo |
|-----------|-----------|------|
| Acurácia | Recall do delta vs DETER (bioma calibrado) | ≥ 0,90 |
| Acurácia | Kappa nas classes operacionais | ≥ 0,70 |
| Acurácia | Recall de talhões pequenos (<6,25 ha, abaixo do MMU do PRODES) | reportado e não-zero |
| Segurança de decisão | Falso-negativo visível na amostra de auditoria | **= 0 (critério de morte)** |
| Auditabilidade | Decisão liberada reconstruível a partir da trilha (cena/data/fonte/limiar/versão) | 100% dos casos |
| Transparência | Heurística do score versionada e legível (sem caixa-preta) | Obrigatório |
| **Hierarquia de informação** | Score não exibido como número cru na fila; evidência abrível sob demanda | Obrigatório |
| Não-circularidade | Verdade de calibração independente do t0 | Obrigatório (dealbreaker) |
| Desempenho | Processar delta de 1 município | viável em desktop OEMA + nuvem CDSE |
| Portabilidade | Rodar sem GEE/ArcGIS (boa prática) | QGIS/PostGIS + openEO/CDSE |
| Interoperabilidade | Export para SICAR | shapefile/KML/GPX em SIRGAS 2000 |
| Escopo de confiança | Confiança reportada **por bioma** | nunca agregado nacional |
| Acessibilidade | Evidência ao produtor (baixa conectividade) | export estático leve |
| Idioma | Interface e relatórios | Português (pt-BR) |

---

## 9. Data Model

- **Talhao** — id, geometria (SIRGAS 2000), id_CAR, bioma, classe_CF (nullable até FR-010), area_ha. (N:1 com Imovel_CAR.)
- **Imovel_CAR** — id_CAR, geometria declarada, status_dinamizada. (1:N Talhao.)
- **Delta** — id, talhao_id, data_ref_t0, data_deteccao, magnitude_ndvi, fonte_alerta (PRODES/DETER), tipo_mudanca. (N:1 Talhao.)
- **Score** — id, talhao_id, valor (0–1), versao_heuristica, pesos {alertas, magnitude, idade, penal_borda}, flag_roteamento (auto/humano), motivo, evidencia_ref. (1:1 com Delta vigente.) **Nota:** `valor` alimenta o roteamento/ordenação; **não é renderizado como número na fila** (hierarquia de informação).
- **Evidencia** — id, score_id, recorte_sentinel (cena/data), alerta_ref, limiar, crs. (A trilha de auditoria assinável.)
- **Calibracao** — id, bioma, kappa, recall, recall_talhoes_pequenos, falso_neg_visivel, n_amostra, fonte_verdade {PRODES, DETER, fotointerpretacao}, data, versao.
- **MarcacaoAnalista** — id, talhao_id, analista_id, rotulo, dificuldade. (alimenta Calibracao — active learning.)
- **Governanca** — id, adotante_alvo, operador_opex, via_adocao (licitacao_estadual/oema_early_adopter), ciclo_recalibracao, sinal_datado (nullable). (Entrega dupla do haCARthon.)

**Constraints:** todo Score referencia uma Evidencia e uma Calibracao do bioma do Talhao; `flag_roteamento=auto` exige score ≥ limiar **e** classe calibrada **e** `falso_neg_visivel=0` na calibração vigente **e** Evidencia reconstruível. **Não-circularidade:** `Calibracao.fonte_verdade` jamais inclui o t0. **Ciclo de vida:** Delta/Score recomputados por janela trimestral; versões antigas retidas para auditoria (não deletadas).

---

## 10. API Design

`POST /pipeline/delta` — roda detecção de delta para um recorte. Auth: token interno. Request: `{bbox, t0_ref, janela:{ini,fim}, bioma}`. Response: `{talhoes:[{id, delta, magnitude}]}`. Errors: 422 (CRS inválido), 424 (insumo Sentinel/DETER indisponível).
`POST /score/calc` — Request: `{talhao_ids[], versao_heuristica}`. Response: `{scores:[{talhao_id, flag, motivo, evidencia_ref}]}` *(valor numérico omitido do payload de fila por design; disponível em `/evidence`)*. Errors: 409 (bioma não calibrado).
`GET /evidence/{score_id}` — Response: `{valor, recorte_url, cena, data, alerta_ref, limiar, crs, versao}` — o painel assinável.
`POST /calibration/backtest` — Request: `{bioma, amostra_ref, limiares_preregistrados}`. Response: `{recall, kappa, recall_talhoes_pequenos, falso_neg_visivel, n, intervalo}`. Errors: 412 (limiares não pré-registrados), 422 (fonte_verdade inclui t0 → rejeitado, anti-circularidade).
`GET /export/sicar?recorte=` — Response: arquivo shapefile/KML/GPX SIRGAS 2000.

(N/A para a entrega haCARthon: código funcional não é obrigatório; estas APIs são o contrato para o piloto pós-evento.)

---

## 11. UI/UX Requirements

- **Telas-chave:** (1) **Fila por risco** (ordenada, **sem número de score cru** — só agrupa/posiciona); (2) **Painel do talhão** (mapa + evidência abrível + trilha de auditoria + botão "liberar/rever" — **a tela assinável**); (3) Painel de calibração (kappa local, marcação de difíceis); (4) Export SICAR; (5) Visão produtor (recorte datado legível).
- **Fluxo crítico (valor):** fila por risco → abrir caso → evidência datada + trilha → **assinar (libera/rever)** → export. A demo de 2 min do haCARthon deve mostrar **o caso difícil** (transição/borda) com o sistema **recusando** liberar e **mostrando por quê** — não o caso fácil.
- **Padrões:** **hierarquia de informação** — score invisível na fila, evidência sempre abrível no caso (nunca "o sistema confiou" sem prova); cor = legenda do mapa (paleta cor-da-terra do `pm-role.md`).
- **Responsivo:** desktop-first (QGIS/OEMA); visão produtor leve para baixa conectividade.
- **Acessibilidade:** navegação por teclado; contraste AA; rótulos de incerteza explícitos ("não sei — vai pro humano").

---

## 12. Dependencies & Integrations

| Dependência | Tipo | Propósito | Fallback |
|-------------|------|-----------|----------|
| MapBiomas Col.10 (Landsat 30 m) | Dado aberto | t0 quando base estadual indisponível | Base estadual qualificada (t0 preferível) |
| PRODES/DETER (TerraBrasilis, Shapefile/WFS) | Dado aberto | **Verdade independente do t0** (calibração não-circular) / alerta | Apenas Sentinel-2 NDVI (recall menor) |
| Sentinel-2 via openEO/CDSE (Copernicus) | Serviço nuvem | Imagem + processamento pesado | Processamento local parcial (limitado a município) |
| eo-learn / GDAL / rasterio / scikit-image | Lib open source | Change detection / pipeline | Implementação própria mínima |
| QGIS / PostGIS | Ferramenta | Orquestração/visualização local | — |
| SICAR (ingestão) | Plataforma gov | Acoplamento (export) | Entrega de arquivos manuais à OEMA |
| Base estadual (t0 real) | Acesso institucional | Insumo do delta | MapBiomas Col.10 + consulta.car |
| Adotante institucional (OEMA / licitação estadual) | Via de adoção | Dono do processo contínuo (governança) | Hipótese H2a aberta — registrar, não fingir adoção |

---

## 13. Release Strategy

> **Sem monetização — "release" = caminho de adoção institucional (reposicionado pelo council).**

- **MVP (haCARthon / piloto):** motor de delta + score por talhão **+ trilha de auditoria** em **1 município de bioma maduro (Amazônia/Cerrado)**, classe-alvo única **"área declarada consolidada/uso × supressão nova de nativa"** (alto sinal, baixo risco jurídico). **Entrega dupla:** (a) **artefato técnico** — ideação (formulário) + protótipo (vídeo ≤2 min mostrando o caso difícil e o sistema recusando liberar) + pitch (vídeo ≤3 min); (b) **modelo de governança** — nomeia o dono do processo contínuo e a via de adoção. Código funcional **não obrigatório**, mas o **backtest H1** roda como prova e vira o protótipo.
- **Fase 2 (pós-evento):** calibração local (active learning), export SICAR, visão produtor; **buscar virar requisito de licitação estadual** / fechar **OEMA early-adopter**; pleito a edital (Fundo Amazônia/BNDES/Norad).
- **Fase 3:** tradução para classes CF mais complexas (APP, depois RL/consolidada); generalização **bioma a bioma**.
- **Sinalização de adoção (em vez de feature flags):** submeter ao haCARthon (artefato **+** governança) é o **experimento de adoção datado**; avançar de fase / fechar OEMA early-adopter = sinal datado.
- **Rollout:** município → bioma → estados via **requisito de licitação estadual / OEMAs early-adopters** (não "incorporação federal direta" — sem precedente). **Nunca** "big-bang nacional".

---

## 14. Success Metrics

| Métrica | Definição | Alvo | Como medir |
|---------|-----------|------|-----------|
| **Aquisição/adoção** | Sinal datado de adoção (OEMA libera t0 / MOU / requisito de licitação / avanço haCARthon) | ≥1 no ciclo do piloto | Registro do compromisso |
| **Engajamento (vazão)** | Fatia de talhões liberados automaticamente | ≥ 40% no bioma | Pipeline + amostra |
| **Resultado (conclusão)** | Variação na taxa de conclusão de CARs no recorte vs baseline manual | sobe sem subir erro | Comparativo do piloto |
| **Retenção (uso operacional)** | Analistas que seguem usando após 30 dias sem re-checar a fatia automática | ≥ 2 de 3 no piloto | Observação + log |
| **Segurança (confiança)** | Falso-negativo visível na amostra de auditoria | **= 0** | Revisão por especialista |
| **Auditabilidade** | Decisões liberadas reconstruíveis a partir da trilha | 100% | Amostra de reconstrução |
| **Eficiência pública** | Custo de atualização por cadastro vs remapeamento total amortizado | materialmente menor | Comparativo de custo do piloto |

(Acurácia técnica — recall ≥0,90, kappa ≥0,70 — em §8.)

---

## 15. Risks & Mitigations

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| **Score circular** (calibrado contra o t0) → kappa cosmético | Média | Alto | **Dealbreaker do council:** verdade externa ao t0 (PRODES/DETER + fotointerpretação); backtest H1 pré-registrado (FR-008); API rejeita fonte_verdade=t0 |
| **Anestésico** (Meadows): roteador melhora o fluxo mas não muda o paradigma de "ninguém assina" | Média | Alto | Trilha de auditoria foca a **assinatura** (não só detecção); governança nomeia o dono; medir conclusão (não só vazão) |
| **Paradoxo da visibilidade** (score visível trava / invisível impede auditoria) | Média | Médio | Hierarquia de informação: invisível na fila, assinável sob demanda (FR-006/007) |
| **Risco de plataforma:** SFB reconstrói internamente (CAR Pré-Preenchido) | Média | Alto | Open source + acoplável; entrar como **requisito de licitação estadual** (canal sem precedente federal de hackathon); ser mais rápido que o roadmap interno |
| **Falso-negativo visível** destrói confiança da analista (irrecuperável) | Média | Alto | Calibração conservadora (na dúvida → humano); critério de morte = zero |
| **Co-registro/nuvem** gera falso-positivo de borda | Alta | Médio | Máscara SCL + co-registro; penalização de borda no score |
| **Generalização** entre biomas infla falsa confiança | Alta | Médio | Confiança por bioma; "motor + calibração por bioma"; começar onde DETER é maduro |
| **Órfão sem dono** (sem adoção) | Média | Alto | Submissão dupla (artefato + governança); nomear adotante-alvo (OEMA early-adopter) e via (licitação estadual) |
| **Fit do time** (barra geoespacial/ML) | Média | Médio | eo-learn/openEO reduzem a barra; código não exigido no edital |

---

## 16. Open Questions

| Pergunta | Owner | Prazo | Status |
|----------|-------|-------|--------|
| Há amostra fotointerpretada suficiente nos casos difíceis para kappa estável? | Eng. Geo | Piloto | Open |
| Recall ≥0,90 vs DETER se sustenta fora da Amazônia (Cerrado) e em talhões <6,25 ha? | Eng. Geo | Piloto | Open |
| A trilha de auditoria de fato move a **assinatura** (H2b: analista assina sem re-checar)? | Produto | Piloto | Open |
| Que ente é o early-adopter realista — qual OEMA / qual licitação estadual? | Adoção | Pós-evento | Open |
| Que evidência **datada** de adoção conta (MOU / requisito de licitação / piloto)? | Adoção | Pós-evento | Open |
| Acesso ao t0 estadual real do município-piloto? | GTM/Adoção | Pré-piloto | Open |
| Qual classe CF entra primeiro depois da classe-MVP? | Produto | Fase 3 | Open |

---

## 17. Appendix

**Glossário:** *Talhão* — unidade de geometria/uso dentro do imóvel; *t0* — base de referência inicial; *Delta* — mudança detectada; *Score por talhão* — confiança 0–1 que **roteia** a decisão (não exibida crua); *Trilha de auditoria* — evidência datada que torna a decisão assinável; *Hierarquia de informação* — score invisível na fila, evidência assinável sob demanda; *Análise dinamizada* — módulo do SICAR que cruza declarado × base (por imóvel); *DPG* — Bem Público Digital; *Kappa* — métrica de concordância; *Falso-negativo visível* — desmate flagrante liberado por engano; *MMU* — unidade mínima mapeável (PRODES ~6,25 ha); *SIRGAS 2000* — datum aceito pelo SICAR.

**Fontes:** `pm-role.md` (seção Council); `reports/09-verificacao-dados-2026.md` (prevalece); `reports/01,02,06`; `memory/ideas/gabarito/{idea.md,scores.json}`.

**Debates referenciados (decisões incorporadas):**
- `debate_output_council-dor-real-desafio02_2606280330.md` — **Council 5/5:** dor-raiz = "quem assina"; reposicionar como roteador auditável; hierarquia de informação; circularidade = dealbreaker; adoção = licitação estadual/OEMA early-adopter; submissão dupla.
- `debate_output_tese-tecnico-operacional_2606271430.md` — fosso técnico-operacional; 6 critérios de morte; classe-MVP "consolidado × supressão".
- `debate_output_metodo-cientifico-incorporacao_2606271520.md` — RAT = H1 (não-circularidade); confiança por bioma; score 73 → caminho condicional.

**Resumo competitivo:** adjacentes gratuitos (MapBiomas Alerta, Análise Dinamizada por imóvel, USGS/datasets globais de confiança) cobrem frescor e confiança-por-parcela como commodity; nenhum produtiza a **fusão regulatória por talhão protegida por trilha de auditoria** — o fosso do Gabarito.

**Arquitetura (texto):** Insumos abertos (t0 + PRODES/DETER + Sentinel-2 via CDSE) → detecção de delta (eo-learn/GDAL) → score heurístico versionado por talhão (penalização de borda/nuvem) → roteamento auto/humano (**score invisível**) + trilha de auditoria abrível (**assinável**) → export SICAR (SIRGAS 2000) + fila da analista + evidência do produtor. Calibração por bioma com **verdade externa ao t0** (PRODES/DETER + fotointerpretação) e active learning pela analista.

**Score honesto (de `scores.json`):** **73/100 ("test")** hoje (o council reposicionou, não re-pontuou); **~86–89 por bioma** se o backtest H1 passar (recall ≥0,90, kappa ≥0,70, falso-negativo visível = 0); **~90 no bioma** com sinal datado de adoção. Veredito do método: *"pedir 90 não cria 90; rodar H1 cria"*.
