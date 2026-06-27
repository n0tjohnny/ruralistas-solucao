# Gabarito — Product Requirement Document

| Campo | Valor |
|-------|-------|
| Versão | 3.0 |
| Data | 2026-06-27 |
| Autor | AI Product Manager (Gabarito) |
| Status | Draft |
| Fontes | `pm-role.md` (v2) · `reports/09-verificacao-dados-2026.md` (**referência de dados — prevalece**) · `reports/01-desafio-oficial.md`, `02-dominio-car.md`, `06-edital-completo.md` · `debate-outputs/` (7 debates, esp. `tese-tecnico-operacional` e **`metodo-cientifico-incorporacao`**) · `memory/ideas/gabarito/{idea,scores}.json` · buscas web jun/2026 · `index.html` |

> **Mudanças vs PRD 2.0 (full update):**
> 1. **PREMISSA CORRIGIDA (decisão do usuário): NÃO há monetização.** O modelo de sucesso é **incorporação por governo/estados** (SFB/OEMA). Toda seção de negócio (Release, Métricas, Riscos) foi reescrita: o "pagador" é o ente público; o eixo de viabilidade é **incorporação institucional**, não receita.
> 2. **Raiz reescrita: o fosso é técnico-operacional, NÃO econômico.** A tese "só-CAPEX/sem-OPEX / não há dono do processo contínuo" foi **refutada** (`reports/09` + debate): MapBiomas (anual, gratuito) + INPE PRODES/DETER (contínuo, gratuito) já são camadas custeadas por terceiros. O valor é **frescor sub-anual + classes do Código Florestal + confiança por talhão como decisão**.
> 3. **Protocolo científico incorporado (debate `metodo-cientifico-incorporacao`):** o RAT é **H1 — o score por talhão é não-circular?**; **6 critérios de morte pré-registrados**; **confiança por bioma** (não nacional); **motor + calibração por bioma**.
> 4. **Correções de dado factual:** o **SICAR ingere shapefile/KML/GPX em SIRGAS 2000** (GeoPackage/COG = trabalho interno no QGIS, NÃO ingerível); PRODES/DETER em **Shapefile/WFS**; **MapBiomas Col.10 = Landsat 30 m** (o produto 10 m é GEE-bound); evento **remoto**; **código funcional não é obrigatório**; **não há** regra de narração humana nem proibição de GEE/ArcGIS (boas práticas, não requisitos); métrica honesta = **"até 66 mil/dia"** (oficial), evitar "20–30 mil vs 6/dia" (relato de organizador) e "2–2,5 anos" (sem fonte primária).
> 5. **Score honesto (`scores.json`):** **73/100 ("test")** hoje; caminho condicional a **~86–89 por bioma** (se H1 passar) e **~90** (se houver sinal real de incorporação).

---

## 2. Resumo Executivo

O **Gabarito** é a **base de referência viva** do CAR: cruza um t0 aberto (base estadual qualificada ou **MapBiomas Coleção 10**, Landsat 30 m) com mudança recente (**Sentinel-2** + alertas **PRODES/DETER**), detecta **só os talhões que mudaram**, remapeia apenas esses, e emite um **score de confiança auditável por talhão** que **roteia a decisão**: onde a confiança é alta, a análise dinamizada libera automático; onde é baixa, vai para o humano. Um único artefato (delta + score por talhão) serve **três públicos**: a **analista da OEMA** (persona **Luana**, ordena a fila e assina sem medo), a **análise dinamizada do SICAR** (automatiza com trilha de auditoria) e o **produtor/RT** (corrige a declaração antes da notificação). É **bem público / DPG**: open source e agnóstico de plataforma (boa prática, não requisito do edital), **sem monetização — destinado a ser incorporado pelo SFB/estados**. **Por que agora:** a análise dinamizada já roda em **9 estados** (+1 mi CARs, até 66 mil/dia, SFB jun/2026) e o CAR é o **1º Bem Público Digital do Brasil** — há demanda institucional e mandato aberto, mas ninguém entrega frescor sub-anual + classes do Código Florestal + **confiança por talhão como decisão**. **Diferencial defensável:** a **fusão regulatória por talhão** (declaração do CAR × delta × classe CF × decisão auditável) — frescor e confiança-por-parcela isolados já são commodity (USGS/NASA, datasets globais, DETER diário).

---

## 3. Problem Statement

### Dores observáveis (com evidência das fontes)
- **Analista (Luana):** com base de referência defasada, não confia na liberação automática → abre imóveis à mão e a vazão despenca (oficial: automático **"até 66 mil/dia"**; manual histórico ~3% da base em ~12 anos — `reports/09`). Fila de milhares, 4 sistemas, **assina parecer respondendo juridicamente** (`pm-role.md`).
- **Produtor / RT:** auto-declara o polígono "no escuro"; divergência contra a base velha gera **notificação/pendência** → retifica às cegas → recai → **crédito rural travado** (debate `a-dor-desafio02`).
- **Produtor de base/geógrafa:** remapeia 100% do estado quando poucos % dos talhões mudaram; a base contratada por **licitação "não continuada"** (TR SEMAD-GO) é um **snapshot pontual** — quando entra em uso, o território já mudou.

### Lacuna de mercado (jun/2026, verificada)
- **Análise Dinamizada (SICAR/SFB):** triagem **por imóvel** (passível/não-passível), não por talhão; não diz "onde confiar".
- **MapBiomas Col.10** (Landsat 30 m): cobertura anual nacional, classes genéricas; **não** dá delta sub-anual, classes do Código Florestal, nem confiança por parcela.
- **MapBiomas Alerta:** valida alertas de perda e cruza com CAR — confiança do *alerta*, não da *base*; sem decisão por talhão.
- **PRODES/DETER:** alertas (Shapefile/WFS), não score nem base classificada.
- **Confiança por parcela / frescor** isolados: **já são commodity** (USGS/NASA land-change com camada de confiança; dataset global de 3,17 bi de polígonos com raster de confiança contínuo; DETER diário). → **Não** são o fosso.
- **Lacuna real e estreita:** ninguém produtiza a **fusão por talhão da base do CAR** (declaração × delta sub-anual × classe CF × decisão de liberar/rever, calibrada por kappa).

### Raiz (reescrita — técnico-operacional, não econômica)
A tese econômica "a base envelhece por falta de OPEX / não há dono do processo contínuo" foi **refutada**: já existe camada contínua gratuita custeada por terceiros (MapBiomas anual + INPE). O que sobra como raiz **técnico-operacional**: (1) a camada gratuita é **anual**, não sub-anual; (2) está em **classes genéricas**, não APP/RL/área consolidada do Código Florestal; (3) a triagem é **por imóvel, não por talhão**. A auto-declaração ruim do produtor é **sintoma secundário** — o CAR Pré-Preenchido que a corrigiria passará a depender de uma base boa quando propuser feições ambientais (entrega futura anunciada, Live 06).

### Custo da inação
Fila perene; análise manual cara/lenta; desmatamento recente julgado contra mapa velho (risco ambiental e jurídico); crédito rural represado; e o CAR-DPG exibindo gargalo na análise.

---

## 4. Product Vision & Goals

**Visão:** manter viva, barata e confiável a base de referência do CAR — detectando o que mudou, remapeando só isso, e devolvendo à analista o direito de confiar na automação — para que nenhum cadastro espere anos por um mapa.

**Goals (mensuráveis):**
1. **G1 — Frescor:** reduzir a defasagem efetiva da base de "snapshot pontual" para **delta sub-anual** (≤ trimestral, alinhado ao ciclo DETER). Sucesso: delta atualizado por trimestre num bioma-piloto.
2. **G2 — Confiança decisória:** emitir score por talhão calibrado que permita **liberação automática auditável**. Sucesso: **recall do delta vs DETER ≥ 0,90** e **kappa ≥ 0,70** nas classes operacionais, no bioma calibrado.
3. **G3 — Vazão sem perda de conformidade:** elevar a fatia de talhões liberados automaticamente **sem aumentar o erro** vs análise manual. Sucesso: **fatia automática ≥ 40%** com **zero falso-negativo visível** na amostra de auditoria.
4. **G4 — Incorporação institucional:** obter **sinal datado** de incorporação (avançar no haCARthon / conversa formal SFB-OEMA / acesso a t0 real). Sucesso: ≥1 ente libera dado/compromisso para piloto.
5. **G5 — Custo cirúrgico:** processar **só o talhão alterado** (não o estado). Sucesso: custo de atualização por cadastro materialmente menor que o remapeamento total amortizado.

**Non-goals (anti-escopo):**
- **N1:** Não substituir o SICAR nem a análise dinamizada — Gabarito **acopla**, não compete.
- **N2:** Não tirar a decisão legal da analista — o produto informa, não decide.
- **N3:** Não há produto pago / monetização — é DPG para incorporação.
- **N4:** Não prometer cobertura nacional no MVP — **confiança é por bioma calibrado**.
- **N5:** Não auto-mapear RL/área consolidada juridicamente complexa no MVP (roadmap) — MVP foca a classe de melhor razão sinal/risco.

---

## 5. Target Users & Personas

| Campo | **Luana — Analista OEMA** | **SFB / Gestor SICAR** | **Produtor / RT** |
|-------|---------------------------|------------------------|-------------------|
| Papel | Analista ambiental estadual | Coordenação federal do CAR / dono do pipe | Pequeno/médio produtor + responsável técnico |
| Necessidade #1 | Saber em qual talhão confiar para assinar sem medo | Elevar vazão da dinamizada sem relaxar conformidade | Corrigir a geometria antes da notificação |
| Workaround atual | Abre imóvel a mão, 4 sistemas | Triagem por imóvel; capacita estados | Retifica às cegas após pendência |
| Sucesso | Fila baixa sem subir erro; parecer defensável | Módulo aberto incorporável que escala aos estados | Crédito liberado na 1ª/2ª tentativa |
| Frequência | Diária | Programática/contínua | Episódica (na regularização/atualização) |

(Personas secundárias: **Geógrafa/produtora de base** — quer remapear só o delta; **Banca haCARthon** — emite o sinal de incorporação.)

---

## 6. User Stories & Scenarios

#### US-01: Fila ordenada por risco com confiança por talhão
**As a** analista da OEMA (Luana), **I want to** receber a fila de cadastros já ordenada por talhões que mudaram, cada um com "mudou/não mudou + confiança + evidência", **so that** eu gaste meu olho só no duvidoso.
**Acceptance Criteria:**
- [ ] Cada talhão exibe estado (mudou/não mudou), score 0–1, e a evidência abrível (recorte Sentinel datado + alerta DETER/PRODES + limiar).
- [ ] A fila ordena por (mudança × baixa confiança) decrescente.
- [ ] Talhões "alta confiança + sem mudança" são marcados como liberáveis automaticamente.
**Edge Cases:** talhão em zona de transição de bioma (calibração fraca) → rebaixado para humano com razão explícita; cena com nuvem/desalinhamento → penalização de borda registrada no score.
**Priority:** P0 — **Complexity:** High

#### US-02: Liberação automática auditável (roteamento da dinamizada)
**As a** análise dinamizada / gestor SICAR, **I want to** que o score por talhão roteie o cruzamento (alta confiança+sem mudança → automático; delta/baixa confiança → humano), **so that** a vazão suba sem relaxar conformidade.
**Acceptance Criteria:**
- [ ] Saída inclui flag de roteamento por talhão e o motivo.
- [ ] Toda liberação automática carrega trilha de auditoria (cena/data/fonte/limiar/versão do score).
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

#### US-04: Backtest anti-circularidade (validação científica — o RAT)
**As a** time de produto, **I want to** rodar um backtest offline do score contra verdade externa (PRODES/DETER + amostra fotointerpretada), **so that** eu prove que o score é não-circular antes de qualquer adoção.
**Acceptance Criteria:**
- [ ] Verdade externa = PRODES consolidado + DETER trimestral + amostra estratificada fotointerpretada nos casos difíceis (NUNCA a base estadual defasada).
- [ ] Relatório com recall, kappa por classe, taxa de falso-negativo visível, n da amostra e intervalo.
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

---

## 7. Functional Requirements

| FR-ID | Área | Descrição | Input | Output | Prio | Deps |
|-------|------|-----------|-------|--------|------|------|
| FR-001 | Ingestão | Carregar t0 (base estadual ou MapBiomas Col.10) e geometrias de talhão do CAR | Shapefile/raster + CAR | Camada t0 normalizada (SIRGAS 2000) | P0 | — |
| FR-002 | Ingestão | Obter alertas PRODES/DETER via TerraBrasilis (Shapefile/WFS) | WFS/Shapefile | Camada de alertas datada | P0 | — |
| FR-003 | Imagem | Obter Sentinel-2 (B4/B8) com co-registro + máscara de nuvem (SCL), via openEO/CDSE | Bbox + janela temporal | Mosaico NDVI antes/depois | P0 | FR-001 |
| FR-004 | Detecção | Computar delta (mudança) por talhão (NDVI + concordância PRODES/DETER) | t0 + alertas + Sentinel | Talhões candidatos (delta) | P0 | FR-001..003 |
| FR-005 | Score | Heurística transparente e versionada: concordância de alertas × magnitude × idade do dado × penalização borda/nuvem | Delta + insumos | Score 0–1 por talhão + evidência | P0 | FR-004 |
| FR-006 | Roteamento | Classificar talhão em automático/humano por limiar calibrado | Score + limiar | Flag de roteamento + motivo | P0 | FR-005 |
| FR-007 | Auditoria | Anexar trilha (cena/data/fonte/limiar/versão) a cada score | Score | Registro de auditoria abrível | P0 | FR-005 |
| FR-008 | Calibração | Backtest vs verdade externa (recall, kappa, falso-negativo visível) | Amostra + PRODES/DETER | Relatório de calibração | P0 | FR-005 |
| FR-009 | Calibração local | Marcação pela analista → amostra local → kappa local | Marcações | Score recalibrado + kappa local | P1 | FR-008 |
| FR-010 | Classes CF | Traduzir delta para classe do Código Florestal (começar pela classe de melhor sinal/risco) | Delta + CAR | Talhão classificado (CF) | P1 | FR-004 |
| FR-011 | Export | Exportar shapefile/KML/GPX em SIRGAS 2000 | Resultado | Arquivo ingerível pelo SICAR | P0 | FR-006 |
| FR-012 | Visão produtor | Gerar recorte datado legível da divergência | Delta + CAR | Evidência visual + texto | P1 | FR-005 |

---

## 8. Non-Functional Requirements

| Categoria | Requisito | Alvo |
|-----------|-----------|------|
| Acurácia | Recall do delta vs DETER (bioma calibrado) | ≥ 0,90 |
| Acurácia | Kappa nas classes operacionais | ≥ 0,70 |
| Segurança de decisão | Falso-negativo visível na amostra de auditoria | **= 0 (critério de morte)** |
| Auditabilidade | Score rastreável até cena/data/fonte/limiar/versão | 100% dos scores |
| Transparência | Heurística do score versionada e legível (sem caixa-preta) | Obrigatório |
| Desempenho | Processar delta de 1 município | viável em desktop OEMA + nuvem CDSE (não baixar série estadual local) |
| Portabilidade | Rodar sem GEE/ArcGIS (boa prática) | QGIS/PostGIS + openEO/CDSE |
| Interoperabilidade | Export para SICAR | shapefile/KML/GPX em SIRGAS 2000 |
| Escopo de confiança | Confiança reportada **por bioma** | nunca agregado nacional |
| Acessibilidade | Evidência ao produtor (baixa conectividade) | export estático leve |
| Idioma | Interface e relatórios | Português (pt-BR) |

---

## 9. Data Model

- **Talhao** — id, geometria (SIRGAS 2000), id_CAR, bioma, classe_CF (nullable até FR-010), area_ha. (N:1 com Imovel/CAR.)
- **Imovel_CAR** — id_CAR, geometria declarada, status_dinamizada. (1:N Talhao.)
- **Delta** — id, talhao_id, data_ref_t0, data_deteccao, magnitude_ndvi, fonte_alerta (PRODES/DETER), tipo_mudanca. (N:1 Talhao.)
- **Score** — id, talhao_id, valor (0–1), versao_heuristica, pesos {alertas, magnitude, idade, penal_borda}, flag_roteamento (auto/humano), motivo, evidencia_ref. (1:1 com Delta vigente.)
- **Evidencia** — id, score_id, recorte_sentinel (cena/data), alerta_ref, limiar, crs. 
- **Calibracao** — id, bioma, kappa, recall, falso_neg_visivel, n_amostra, fonte_verdade {PRODES, DETER, fotointerpretacao}, data, versao.
- **MarcacaoAnalista** — id, talhao_id, analista_id, rotulo, dificuldade. (alimenta Calibracao — active learning.)

**Constraints:** todo Score referencia uma Evidencia e uma Calibracao do bioma do Talhao; flag_roteamento=auto exige score ≥ limiar **e** classe calibrada **e** falso_neg_visivel=0 na calibração vigente. **Ciclo de vida:** Delta/Score recomputados por janela trimestral; versões antigas retidas para auditoria (não deletadas).

---

## 10. API Design

`POST /pipeline/delta` — Purpose: roda detecção de delta para um recorte. Auth: token interno. Request: `{bbox, t0_ref, janela:{ini,fim}, bioma}`. Response: `{talhoes:[{id, delta, magnitude}]}`. Errors: 422 (CRS inválido), 424 (insumo Sentinel/DETER indisponível).
`POST /score/calc` — Request: `{talhao_ids[], versao_heuristica}`. Response: `{scores:[{talhao_id, valor, flag, motivo, evidencia_ref}]}`. Errors: 409 (bioma não calibrado).
`GET /evidence/{score_id}` — Response: `{recorte_url, cena, data, alerta_ref, limiar, crs}`.
`POST /calibration/backtest` — Request: `{bioma, amostra_ref, limiares_preregistrados}`. Response: `{recall, kappa, falso_neg_visivel, n, intervalo}`. Errors: 412 (limiares não pré-registrados).
`GET /export/sicar?recorte=` — Response: arquivo shapefile/KML/GPX SIRGAS 2000.

(N/A para entrega haCARthon: código funcional não é obrigatório; estas APIs são o contrato para o piloto pós-evento.)

---

## 11. UI/UX Requirements

- **Telas-chave:** (1) Fila por risco (lista ordenada + filtros bioma/confiança); (2) Detalhe do talhão (mapa + score + evidência abrível + botão "liberar/rever"); (3) Painel de calibração (kappa local, marcação de casos difíceis); (4) Export SICAR; (5) Visão produtor (recorte datado legível).
- **Fluxo crítico (valor):** fila → talhão sinalizado (mudou + confiança) → evidência abrível → decisão (libera/rever) → export. A demo de 2 min do haCARthon deve mostrar **o caso difícil** (transição/borda) com o sistema **recusando** liberar — não o caso fácil.
- **Padrões:** evidência sempre abrível (nunca "o sistema confiou" sem prova); cor = legenda do mapa (paleta cor-da-terra do `pm-role.md`).
- **Responsivo:** desktop-first (QGIS/OEMA); visão produtor leve para baixa conectividade.
- **Acessibilidade:** navegação por teclado; contraste AA; rótulos de incerteza explícitos ("não sei — vai pro humano").

---

## 12. Dependencies & Integrations

| Dependência | Tipo | Propósito | Fallback |
|-------------|------|-----------|----------|
| MapBiomas Col.10 (Landsat 30 m) | Dado aberto | t0 quando base estadual indisponível | Base estadual qualificada (t0 preferível) |
| PRODES/DETER (TerraBrasilis, Shapefile/WFS) | Dado aberto | Verdade de mudança / alerta | Apenas Sentinel-2 NDVI (recall menor) |
| Sentinel-2 via openEO/CDSE (Copernicus) | Serviço nuvem | Imagem + processamento pesado | Processamento local parcial (limitado a município) |
| eo-learn / GDAL / rasterio / scikit-image | Lib open source | Change detection / pipeline | Implementação própria mínima |
| QGIS / PostGIS | Ferramenta | Orquestração/visualização local | — |
| SICAR (ingestão) | Plataforma gov | Acoplamento (export) | Entrega de arquivos manuais à OEMA |
| Base estadual (t0 real) | Acesso institucional | Calibração não-circular | MapBiomas Col.10 + consulta.car |

---

## 13. Release Strategy

> **Sem monetização — "release" = caminho de incorporação institucional.**

- **MVP (haCARthon / piloto):** motor de delta + score por talhão em **1 município de bioma maduro (Amazônia/Cerrado)**, classe-alvo única **"área declarada consolidada/uso × supressão nova de nativa"** (change detection puro, alto sinal, baixo risco jurídico). Entregáveis do edital: **ideação (formulário) + protótipo (vídeo ≤2 min, mostrando o caso difícil) + pitch (vídeo ≤3 min)**. Código funcional **não obrigatório**, mas o **backtest H1** roda como prova e vira o protótipo.
- **Fase 2 (pós-evento):** calibração local (active learning), export SICAR, visão produtor; **conversa formal de incorporação** com SFB/OEMA; pleito a edital (Fundo Amazônia/BNDES).
- **Fase 3:** tradução para classes CF mais complexas (APP, depois RL/consolidada); generalização **bioma a bioma** (cada bioma = calibração nova pequena).
- **Sinalização de incorporação (em vez de feature flags):** submeter ao haCARthon é o **experimento de incorporação institucional** (canal oficial MGI/SFB); avançar de fase = sinal datado.
- **Rollout:** município → bioma → estados via canal federal do SFB (que já distribui a dinamizada a 9+). **Nunca** "big-bang nacional" (confiança é por bioma).

---

## 14. Success Metrics

| Métrica | Definição | Alvo | Como medir |
|---------|-----------|------|-----------|
| **Aquisição/incorporação** | Sinal datado de incorporação (ente libera t0 / MOU / avanço haCARthon) | ≥1 no ciclo do piloto | Registro do compromisso |
| **Engajamento (vazão)** | Fatia de talhões liberados automaticamente | ≥ 40% no bioma | Pipeline + amostra |
| **Retenção (uso operacional)** | Analistas que continuam usando após 30 dias sem re-checar a fatia automática | ≥ 2 de 3 no piloto | Observação + log |
| **Resultado (conformidade)** | Erro na fatia automática vs manual | ≤ erro manual atual | Auditoria amostral |
| **Segurança (confiança)** | Falso-negativo visível na amostra de auditoria | **= 0** | Revisão por especialista |
| **Eficiência pública** | Custo de atualização por cadastro vs remapeamento total amortizado | materialmente menor | Comparativo de custo do piloto |

(Acurácia técnica — recall ≥0,90, kappa ≥0,70 — em §8.)

---

## 15. Risks & Mitigations

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| **Score circular** (calibrado contra base defasada) → kappa cosmético | Média | Alto | Verdade externa (PRODES/DETER + fotointerpretação); backtest H1 pré-registrado (FR-008) |
| **Risco de plataforma:** SFB reconstrói internamente (CAR Pré-Preenchido) | Média | Alto | Open source + acoplável + entrar pelo canal que o SFB já usa (RER/DPG, WebAmbiente, Fundo Amazônia); ser mais rápido que o roadmap interno |
| **Falso-negativo visível** destrói confiança da analista (irrecuperável) | Média | Alto | Calibração conservadora (na dúvida → humano); critério de morte = zero |
| **Co-registro/nuvem** gera falso-positivo de borda | Alta | Médio | Máscara SCL + co-registro; penalização de borda no score |
| **Generalização** entre biomas infla falsa confiança | Alta | Médio | Confiança por bioma; "motor + calibração por bioma"; começar onde DETER é maduro |
| **Órfão sem dono** (sem incorporação) | Média | Alto | haCARthon como teste de incorporação; nomear adotante-alvo (SFB) e via (DPG/edital) |
| **Fit do time** (barra geoespacial/ML) | Média | Médio | eo-learn/openEO reduzem a barra; código não exigido no edital |

---

## 16. Open Questions

| Pergunta | Owner | Prazo | Status |
|----------|-------|-------|--------|
| Há amostra fotointerpretada suficiente nos casos difíceis para kappa estável? | Eng. Geo | Piloto | Open |
| Recall ≥0,90 vs DETER se sustenta fora da Amazônia (Cerrado)? | Eng. Geo | Piloto | Open |
| Canal concreto de incorporação pelo SFB — adota ou reconstrói? | Incorporação | Pós-evento | Open |
| Que evidência **datada** de incorporação conta (carta/piloto/edital)? | Incorporação | Pós-evento | Open |
| Acesso ao t0 estadual real do município-piloto? | GTM/Incorporação | Pré-piloto | Open |
| Qual classe CF entra primeiro depois da classe-MVP? | Produto | Fase 3 | Open |

---

## 17. Appendix

**Glossário:** *Talhão* — unidade de geometria/uso dentro do imóvel; *t0* — base de referência inicial; *Delta* — mudança detectada; *Score por talhão* — confiança 0–1 que roteia a decisão; *Análise dinamizada* — módulo do SICAR que cruza declarado × base (por imóvel); *DPG* — Bem Público Digital; *Kappa* — métrica de concordância; *Falso-negativo visível* — desmate flagrante liberado por engano; *SIRGAS 2000* — datum geodésico aceito pelo SICAR.

**Fontes:** `pm-role.md`; `reports/09-verificacao-dados-2026.md` (prevalece); `reports/01,02,06`; `memory/ideas/gabarito/{idea,scores}.json`.

**Debates referenciados (decisões incorporadas):**
- `debate_output_tese-tecnico-operacional_2606271430.md` — fosso técnico-operacional; 6 critérios de morte; classe-MVP "consolidado × supressão".
- `debate_output_metodo-cientifico-incorporacao_2606271520.md` — RAT = H1 (não-circularidade); confiança por bioma; incorporação como eixo de viabilidade; score 73 → caminho condicional a 90.

**Resumo competitivo:** adjacentes gratuitos (MapBiomas Alerta, Análise Dinamizada por imóvel, USGS/datasets globais de confiança) cobrem frescor e confiança-por-parcela como commodity; nenhum produtiza a **fusão regulatória por talhão da base do CAR** com decisão auditável calibrada por bioma — o fosso do Gabarito.

**Arquitetura (texto):** Insumos abertos (t0 + PRODES/DETER + Sentinel-2 via CDSE) → detecção de delta (eo-learn/GDAL) → score heurístico versionado por talhão (com penalização de borda/nuvem) → roteamento auto/humano → export SICAR (SIRGAS 2000) + fila da analista + evidência do produtor. Calibração por bioma com verdade externa (PRODES/DETER + fotointerpretação) e loop de active learning pela analista.

**Score honesto (de `scores.json`):** **73/100 ("test")** hoje; **~86–89 por bioma** se o backtest H1 passar (recall ≥0,90, kappa ≥0,70, falso-negativo visível = 0); **~90** com sinal real de incorporação. Veredito do método: *"pedir 90 não cria 90; rodar H1 cria"*.
