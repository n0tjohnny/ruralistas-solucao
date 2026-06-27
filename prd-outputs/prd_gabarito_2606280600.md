# Gabarito — Product Requirement Document

| Campo | Valor |
|-------|-------|
| Versão | 5.0 |
| Data | 2026-06-28 |
| Autor | AI Product Manager (Gabarito) |
| Status | Draft — **direção travada pelo PM** |
| Fontes | `pm-role.md` (seção **DIREÇÃO DECIDIDA 27/06**) · `reports/09` (dados, prevalece) · `debate-outputs/debate_output_viabilidade-edital-chance_2606271700.md` (10 rounds) · `debate-outputs/debate_output_refutacao-oradores_2606271830.md` (**verificação web 2025-2026**) · `debate_output_council-dor-real-desafio02_2606280330` · `memory/ideas/gabarito/{idea.md,scores.json}` |

> **Mudanças vs PRD 4.0 — DECISÕES TRAVADAS (pós-debate viabilidade/edital/chance + refutação adversarial com pesquisa web).** O haCARthon **está acontecendo agora (26–28/06/2026)**; o edital foi reconfirmado na fonte primária.
>
> **6 decisões de produto:**
> 1. **Posicionamento travado:** o fosso **não** é priorizar a análise — a refutação confirmou que o **MapBiomas Alerta já prioriza por imóvel** (laudo automático, irregularidade em <4% dos imóveis, RAD-2024). O fosso é **confiança auditável POR TALHÃO que torna a decisão assinável**.
> 2. **Piloto = Goiás/SEMAD** (Cerrado, céu limpo, base qualificada, dinamizada rodando). **Amazônia + Sentinel-1 SAR = Fase 2.**
> 3. **Protótipo = backtest de ANTECIPAÇÃO** (~20 talhões; gráfico "dias de antecipação"; precision + falso-negativo visível ZERO; verdade independente, nunca o t0).
> 4. **Pitch = 5 beats** cravando UM eixo (decisão pública); abre pela analista que assina com CPF; corta EUDR/Fundo/SAR/produtor/CF do corpo.
> 5. **Submissão dupla** (artefato + governança): dono = SFB-como-serviço + ABEMA; OPEX via Fundo Amazônia (proponente IPAM/ICV); minuta de portaria anexada.
> 6. **Frase âncora:** "O MapBiomas pinta o Brasil; o Gabarito mostra à analista o que ela pode assinar primeiro — e por quê." (nunca "o algoritmo decide").
>
> **5 correções factuais (verificação web):** (a) **Sentinel-2 detecta <6,25 ha** — 6,25 ha é limiar do PRODES, não do sensor (reforça o produto); (b) PRODES/DETER já veem degradação (DETER Não Floresta, set/2025); regeneração/rotação seguem fora; (c) **EUDR 30/12/2026 vigente** (Reg. UE 2025/2650, 2ª prorrogação); (d) trocar "~6 imóveis/dia" por métrica verificável (0,4% histórico / 5,9% acumulado); (e) "chance ~55% top 5" **sem denominador** → tratar como "candidato a finalista" qualitativo.

---

## 2. Resumo Executivo

O **Gabarito** é o **roteador auditável da análise do CAR**: cruza um t0 aberto (base estadual qualificada de Goiás ou MapBiomas Coleção 10, Landsat 30 m) com mudança recente (Sentinel-2 + alertas PRODES/DETER), detecta **só os talhões que mudaram**, e emite um **score de confiança por talhão** que **ordena a fila por risco (invisível)** e, quando a analista abre o caso, **mostra a evidência datada que torna a decisão assinável**. Serve **três públicos** com um artefato: analista da OEMA (Luana), análise dinamizada do SICAR, e produtor/RT. **Por que agora:** o haCARthon corre em 26–28/06/2026 e a EUDR exige geolocalização por lote a partir de 30/12/2026. **Diferencial defensável (corrigido):** priorizar a análise já existe (MapBiomas Alerta, por imóvel) — o fosso é a **fusão regulatória por talhão com trilha de auditoria assinável** (declaração × delta sub-anual × classe do Código Florestal × decisão defensável). É bem público / DPG, sem monetização, destinado a virar requisito de licitação estadual.

---

## 3. Problem Statement

### Dor-raiz (council): "ninguém quer assinar a decisão"
A Análise Dinamizada já roda a **~66 mil/dia** (detecção não é o gargalo), mas **~94% dos 8,1 mi de CARs seguem sem conclusão** e a conclusão nacional só foi de **2,3% → 5,9% (2024→2025, SFB jun/2026, verificado)**. O ato de liberar/notificar tem peso jurídico; sem lastro defensável, o servidor recua. O produto protege quem assina.

### Dores observáveis
- **Analista (Luana):** sem lastro auditável não confia na liberação automática → abre à mão. Métrica verificável do gargalo manual: **0,4% da base com análise total historicamente / 5,9% acumulado** (substitui o anedótico "6/dia", sem fonte).
- **Produtor/RT:** auto-declara no escuro → notificação contra base velha → crédito travado.
- **Base estadual:** licitação "não continuada" (TR SEMAD-GO) = snapshot pontual.

### Lacuna de mercado (jun/2026, verificada na web)
- **MapBiomas Alerta:** **já cruza alerta × CAR e prioriza por imóvel** (laudo automático, <4% dos imóveis irregulares). → priorização **não** é o fosso.
- **Análise Dinamizada (SICAR):** triagem **por imóvel**, não por talhão; sem rastro assinável.
- **MapBiomas Col.10** (Landsat 30 m): anual, classes genéricas; sem delta sub-anual nem classes CF.
- **PRODES/DETER:** alertas (Shapefile/WFS); **DETER já mapeia degradação** (DETER Não Floresta, set/2025), mas não score nem base classificada por talhão.
- **Lacuna real e estreita:** ninguém produtiza a **fusão por talhão com trilha de auditoria assinável**.

### Custo da inação
Fila perene; desmatamento recente julgado contra mapa velho; crédito represado; e o CAR-DPG exibindo o gargalo de **decisão**, não de dado.

---

## 4. Product Vision & Goals

**Visão:** dar à analista uma fila que para de crescer e uma decisão que ela aceita assinar — roteando atenção por risco e anexando a cada caso a evidência datada que torna a liberação automática defensável e auditável.

**Goals (mensuráveis):**
1. **G1 — Antecipação (prova do haCARthon):** demonstrar, em ~20 talhões de Goiás, que o Gabarito sinaliza a mudança **antes** do PRODES/DETER. Sucesso: **antecipação mediana ≥ 2 meses** e **precision ≥ 0,80** nos talhões elevados à fila.
2. **G2 — Decisão assinável:** por talhão, score calibrado **+ painel de evidência abrível**. Sucesso: **recall do delta vs DETER ≥ 0,90**, **kappa ≥ 0,70**, **100% dos casos liberados com trilha de auditoria abrível**.
3. **G3 — Vazão sem perda de conformidade:** **fatia automática ≥ 40%** com **falso-negativo visível = ZERO** na amostra de auditoria.
4. **G4 — Calibração honesta (anti-circularidade):** score validado **exclusivamente** contra verdade independente (PRODES/DETER/amostra fotointerpretada), **nunca contra o t0**.

**Non-goals:** não substituir o SICAR nem a análise dinamizada; **não decidir o ato** (a analista decide); não gerar a base do zero (remapeia só o delta); não monetizar; não cobrir Amazônia no protótipo (Fase 2, exige SAR).

---

## 5. Target Users & Personas

| Persona | Papel | Necessidade #1 | Workaround hoje | Sucesso | Frequência |
|--------|------|----------------|-----------------|---------|-----------|
| **Luana** | Analista ambiental OEMA (Goiás) | Assinar a liberação com lastro defensável | Abre imóvel à mão, fila não baixa | Gasta o olho só no duvidoso; fila para de crescer | Diária |
| **Sistema/SFB** | Análise dinamizada SICAR | Elevar vazão automática sem relaxar conformidade | Triagem por imóvel | Score roteia auto×humano com trilha | Contínua |
| **Produtor/RT** | Declarante do CAR | Corrigir a geometria antes da notificação | Retifica às cegas, recai | Evidência legível antes da notificação | Por ciclo |
| **Gestor/Procuradoria** | Dono do processo | Repartir a responsabilidade do ato | Recusa automação | Minuta de portaria (faixa de score → ação) | Por norma |

---

## 6. User Stories & Scenarios

#### US-01: Fila roteada por risco (score invisível)
**Como** analista da OEMA, **quero** que minha fila venha ordenada por risco de mudança real, **para** atacar primeiro o que importa.
**Aceitação:** [ ] fila ordenada por score descendente; [ ] talhões "não-conclusivos" sobem ao topo; [ ] score não aparece como número na fila (só ordena).
**Edge:** e se o co-registro estiver deslocado? → penaliza borda, marca não-conclusivo. E se nuvem cobrir o talhão? → marca "sem observação válida", não "sem mudança".
**Prioridade:** P0 · **Complexidade:** Média

#### US-02: Painel de evidência assinável (score visível sob demanda)
**Como** analista, **quero** abrir um talhão e ver recorte Sentinel datado + alerta PRODES/DETER + limiar + versão, **para** assinar com lastro.
**Aceitação:** [ ] cada decisão liberada carrega trilha abrível; [ ] mostra a regra da minuta acionada; [ ] exporta para o SICAR em shapefile/KML SIRGAS 2000.
**Edge:** divergência analista×score → registra override e motivo. **Prioridade:** P0 · **Complexidade:** Média

#### US-03: Backtest de antecipação (protótipo haCARthon)
**Como** time, **quero** provar em ~20 talhões que o Gabarito sinalizou antes do PRODES/DETER, **para** demonstrar valor não-redundante.
**Aceitação:** [ ] gráfico "dias de antecipação" por talhão; [ ] precision/recall medidos contra verdade independente; [ ] falso-negativo visível = ZERO; [ ] vídeo ≤2 min.
**Edge:** talhão onde o DETER não disparou mas houve mudança → é exatamente o caso a destacar. **Prioridade:** P0 · **Complexidade:** Alta

---

## 7. Functional Requirements

| FR-ID | Área | Descrição | Input | Output | Prio | Dep |
|-------|------|-----------|-------|--------|------|-----|
| FR-001 | Detecção | Detectar talhões mudados cruzando Sentinel-2 (NDVI antes/depois, co-registro + máscara de nuvem SCL) com t0 | t0 + cena S2 | Polígonos delta | P0 | — |
| FR-002 | Alertas | Ingerir PRODES/DETER (Shapefile/WFS, TerraBrasilis) como reforço e verdade independente | WFS | Alertas espacializados | P0 | — |
| FR-003 | Score | Heurística transparente versionada: concordância PRODES×DETER + magnitude da mudança + idade do dado; **assimétrica (erra pra cima)** | delta + alertas | Score 0–1 por talhão + flag não-conclusivo | P0 | FR-001,002 |
| FR-004 | Calibração | Backtest anti-circularidade contra verdade **independente**; medir precision/recall/kappa/antecipação | histórico + PRODES/DETER | Relatório de calibração | P0 | FR-003 |
| FR-005 | Fila | Ordenar fila por score (invisível); não-conclusivos ao topo | scores | Fila priorizada | P0 | FR-003 |
| FR-006 | Evidência | Painel abrível: recorte datado + alerta + limiar + versão + regra da minuta | talhão | Trilha de auditoria | P0 | FR-003 |
| FR-007 | Export | Exportar para SICAR em **shapefile/KML SIRGAS 2000** | talhões revisados | Arquivo ingerível | P1 | FR-006 |
| FR-008 | Classes CF | Traduzir delta para classes do Código Florestal (APP/RL/consolidado) | delta + base CAR | Classe por talhão | **P2 (Fase 2)** | FR-001 |
| FR-009 | SAR | Fusão Sentinel-1 (SAR) para frescor sob nuvem (Amazônia) | S1 GRD | Delta sob nuvem | **P2 (Fase 2)** | FR-001 |

---

## 8. Non-Functional Requirements

| Categoria | Requisito | Alvo |
|----------|-----------|------|
| Performance | Processamento do delta (município-piloto) | cloud-assistido (openEO/CDSE); não exigir desktop processar série estadual |
| Acurácia | recall delta vs DETER / kappa | ≥0,90 / ≥0,70 no bioma calibrado |
| Segurança/Confiança | Falso-negativo visível na amostra | ZERO (dealbreaker) |
| Auditabilidade | Score caixa-preta | Proibido; heurística versionada com rastro até cena/data/fonte/limiar |
| Portabilidade | Ferramental | QGIS/PostGIS + libs abertas (GDAL/rasterio/eo-learn); evitar GEE/ArcGIS por portabilidade (boa prática, não regra) |
| Formato | Saída p/ SICAR | shapefile/KML/GPX SIRGAS 2000 (não GeoPackage/COG) |
| i18n | Idioma | PT-BR |

---

## 9. Data Model

- **Talhão** (id, geometria, classe_t0, classe_atual, área_ha) — N:1 com **Imóvel/CAR**.
- **Delta** (talhão_id, data_detecção, magnitude_ndvi, fonte) — 1:1 com Talhão por ciclo.
- **Alerta** (id, fonte=PRODES|DETER, data, geometria, área) — M:N com Talhão (interseção).
- **Score** (talhão_id, valor, faixa, não_conclusivo, versão_heurística, evidências[]) — 1:1 com Delta.
- **TrilhaAuditoria** (score_id, recorte_url, data_cena, limiar, regra_minuta, analista_id?, override?) — 1:1 com Score.
- **Lifecycle:** delta por trimestre (alinhado ao DETER); score versionado; trilha imutável após assinatura.

---

## 10. API Design

```
POST /delta/run        — dispara detecção num recorte (input: bbox+t0+período; output: talhões delta)
GET  /fila?oema=GO     — fila priorizada por score (output: lista ordenada, score oculto)
GET  /talhao/{id}/evidencia — painel de evidência abrível (output: trilha de auditoria)
POST /export/sicar     — exporta talhões revisados (output: shapefile/KML SIRGAS 2000)
GET  /calibracao       — relatório de backtest (precision/recall/kappa/antecipação)
```
Auth: institucional (OEMA). Erros: 422 (cena sem observação válida/nuvem), 409 (co-registro deslocado → não-conclusivo).

---

## 11. UI/UX Requirements

- **Telas:** (1) Fila priorizada (sem número de score visível); (2) Painel de evidência do talhão (recorte datado + alerta + limiar + regra); (3) Relatório de calibração/antecipação.
- **Fluxo crítico:** fila → abrir talhão duvidoso → ver evidência → assinar/override → exportar pro SICAR.
- **Padrão obrigatório:** hierarquia de informação (score invisível na fila, visível/assinável sob demanda).
- **Acessibilidade:** cor-da-terra é a própria legenda; contraste AA; nunca esconder a evidência atrás do score.

---

## 12. Dependencies & Integrations

| Dependência | Tipo | Propósito | Fallback |
|------------|------|-----------|----------|
| Sentinel-2 (CDSE/openEO) | Dado externo | Detecção de mudança 10 m | Sentinel-1 SAR (Fase 2) sob nuvem |
| PRODES/DETER (TerraBrasilis) | Dado externo | Verdade independente + reforço | Amostra fotointerpretada |
| MapBiomas Col.10 | Dado externo | t0 alternativo (30 m) | Base estadual SEMAD-GO |
| QGIS/PostGIS | Ferramenta | Orquestração/visualização | — |
| SICAR | Integração | Ingestão (shapefile/KML SIRGAS) | Export manual |

---

## 13. Release Strategy

- **MVP / haCARthon (agora, 26–28/06; deadline domingo 23:59 BRT, sem prorrogação):** FR-001..006 num recorte de Goiás + **backtest de antecipação filmado** + pitch + **minuta de governança anexada**. Submissão dupla.
  - **Regras de entrega (Live 7 — `reports/10`):** **Protótipo** = vídeo **≤2 min** (>2 min desclassifica), no YouTube **público/não-listado** (privado desclassifica), **narração por integrante do time** (voz humana real — não usar `*.mp3` clonado; IA pode auxiliar o vídeo). **Pitch** = **slides PDF ESTÁTICO (sem vídeo/animação) + áudio narrado**, ≤3 min, no YouTube — os 5 beats continuam, o meio é PDF+voz. **Ideação:** nome (Gabarito) + logo (qualidade não avaliada) + **resumo ≤300 caracteres** + **"próximos passos"** (nomear: t0 SEMAD-GO, validação com analista, arranjo SFB/ABEMA/Fundo Amazônia). **Mentoria ≥1 obrigatória.** Material complementar navegável = opcional e **não avaliado** (só o vídeo de 2 min conta). **Contexto competitivo: +200 equipes / 5 prêmios** → calibre-finalista, sem cravar %.
- **Fase 2 (pós-prêmio):** FR-008 (classes CF) + FR-009 (SAR/Amazônia) + integração SICAR em produção; piloto operacional com a SEMAD-GO.
- **Fase 3:** generalização por bioma (motor + calibração por bioma); serviço hospedado (SFB) + consórcio ABEMA.
- **Rollout:** Goiás como prova de conceito; Amazônia como mercado financiável (Fundo Amazônia).

---

## 14. Success Metrics

| Métrica | Definição | Alvo | Como medir |
|---------|-----------|------|-----------|
| Antecipação (aquisição de prova) | Dias entre sinal do Gabarito e PRODES/DETER | mediana ≥ 60 dias | backtest 20 talhões |
| Precision da fila (engajamento) | % de talhões elevados que eram mudança real | ≥ 0,80 | verdade independente |
| Fatia automática (negócio/conformidade) | % liberado sem humano sem aumentar erro | ≥ 40% c/ FN visível = 0 | amostra de auditoria |
| Sinal de adoção (outcome) | Evento datado: avançar no haCARthon / conversa SEMAD-GO / inclusão roadmap | ≥ 1 sinal | registro |

---

## 15. Risks & Mitigations

| Risco | Prob | Impacto | Mitigação |
|------|------|---------|-----------|
| Circularidade do score (calibrar contra t0) | Média | Alto | Verdade **independente** obrigatória; backtest pré-registrado |
| Backtest prova só redundância (DETER já via) | Média | Alto | Focar nos talhões que o DETER **não** disparou; vender **antecipação**, não concordância |
| Redundância percebida com MapBiomas Alerta | Alta | Alto | Cravar moat em **talhão + assinável**, não priorização (que já existe) |
| Sem dono institucional (órfão/OPEX) | Alta | Alto | Submissão dupla; SFB-serviço + ABEMA; Fundo Amazônia via IPAM/ICV |
| Nuvem amazônica trava frescor | Alta | Médio | Goiás (céu limpo) no protótipo; SAR na Fase 2 |
| Pitch desfocado (scope creep) | Média | Alto | 5 beats travados; cortes no anexo |
| EUDR adiar de novo (já é 2ª prorrogação) | Média | Baixo | Usar como urgência, não como fato consumado |

---

## 16. Open Questions

| Questão | Dono | Prazo | Status |
|---------|------|-------|--------|
| Acesso ao t0 qualificado da SEMAD-GO? | Time | pré-piloto | Aberto |
| Contato real com analista de OEMA p/ o vídeo? | Time | pré-pitch | Aberto |
| SFB topa o arranjo "score como serviço"? | Heitor/articulação | pós-prêmio | Aberto |
| Proponente captador (IPAM/ICV) p/ Fundo Amazônia? | Heitor | Fase 2 | Aberto |

---

## 17. Appendix

- **Glossário:** talhão (parcela de uso homogêneo); t0 (base de referência inicial); delta (talhão mudado); score assimétrico (erra pra cima → dúvida vai pro humano); antecipação (dias entre sinal do Gabarito e o oficial).
- **Frase âncora:** "O MapBiomas pinta o Brasil; o Gabarito mostra à analista o que ela pode assinar primeiro — e por quê."
- **Fontes-chave:** `debate_output_viabilidade-edital-chance_2606271700.md`, `debate_output_refutacao-oradores_2606271830.md`, `reports/09`, edital nº 158/2026 (ENAP).
- **Competitiva (resumo):** MapBiomas Alerta (prioriza por imóvel — concorrente de priorização) · Análise Dinamizada (por imóvel) · MapBiomas Col.10 (anual 30 m). Fosso = talhão + trilha assinável + classes CF sub-anual.
