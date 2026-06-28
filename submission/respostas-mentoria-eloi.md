# Respostas aos questionamentos da mentoria — Eloi Chad

> Respaldo das 5 perguntas levantadas pelo mentor, com dados **concretos e verificáveis** (web-verificados em jun/2026). Marcação honesta: **[DADO OFICIAL]** = norma/fonte primária · **[META a medir no piloto]** = projeção, não resultado obtido · **[ESTIMATIVA]** = cálculo/leitura não confirmada em fonte única.
> Complementa o §10 de `ideacao-completa.md`.

---

## 1. "Não vai engessar ainda mais a aprovação da analista?"

**Resposta:** é o contrário — o Gabarito tira da mesa os casos fáceis (a maioria, que **não mudou**) e entrega os que mudaram já com a prova montada. Engessar seria mandar a analista olhar 8,1 milhões de CARs na ordem de chegada. Priorização por risco + laudo automático **já é o padrão do próprio governo, e multiplica a vazão**.

- O gargalo é **a análise/decisão, não o cadastro**: *"a etapa de análise de dados continua sendo o principal gargalo de implementação da lei"* — Cristina Leme Lopes, CPI/PUC-Rio, Radiografia do CAR (2025). **[DADO OFICIAL]** — https://www.climatepolicyinitiative.org/pt-br/
- Escala que torna "olhar tudo" inviável: **~8,1 mi de CARs**, conclusão nacional só **5,9% (2025)** vs 2,3% (2024) → **~94% sem conclusão**. **[DADO OFICIAL — SFB, boletim 2025]**
- Automação como aceleradora (precedente do Estado): Análise Dinamizada do SICAR roda **até 66 mil/dia**; **+1 milhão de CARs analisados, >3 mi ha, 9 estados** (gov.br/florestal, 18/06/2026). **[DADO OFICIAL]** — https://www.gov.br/florestal/pt-br/assuntos/noticias/2026/junho/sfb-apoia-estados-na-analise-de-mais-de-um-milhao-de-cadastros-rurais
- Triagem automática **aumentou** produtividade da equipe existente: **Alagoas +1.300%**, **Rio de Janeiro dobrou** as análises (CPI/PUC-Rio, 2025). **[DADO OFICIAL]**
- Human-in-the-loop com laudo pronto: o **MapBiomas Alerta** gera laudo automático por imóvel ("efeito semelhante à foto da placa do veículo em auto de infração") — a máquina entrega a evidência empacotada, o humano decide. **[DADO OFICIAL]** — https://alerta.mapbiomas.org/perguntas-frequentes

> Ressalva: não há dado público que quantifique "% do tempo da analista gasto em imóveis que não mudaram" — esse ganho é **[META a medir no piloto]**.

## 2. "Qual a previsibilidade legal para adoção? É viável juridicamente?"

**Resposta:** não pedimos lei nova. O dever de análise já existe, o satélite já é prova administrativa pacificada, e a motivação mecanizada já é expressamente autorizada. O Gabarito **não decide** — informa um score rastreável que a analista assina.

- **Código Florestal (Lei 12.651/2012), arts. 29–30:** CAR obrigatório + **dever do poder público de analisar/validar**. O Gabarito instrumentaliza esse ato, não o substitui. **[DADO OFICIAL]** — https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm
- **IN MMA nº 2/2014:** regulamenta o procedimento de análise do CAR/SICAR — o gancho regulatório onde o score por talhão se encaixa. **[DADO OFICIAL]** — https://www.car.gov.br/leis/IN_CAR.pdf
- **Lei 9.784/1999, art. 50, §2º:** autoriza expressamente **"meio mecânico que reproduza os fundamentos das decisões"** em atos repetitivos. O **score auditável por talhão é a motivação rastreável** que o art. 50 exige — resolve a objeção da "caixa-preta" de frente. **[DADO OFICIAL]** — https://www.planalto.gov.br/ccivil_03/leis/l9784.htm
- **Satélite como prova:** imagens georreferenciadas + laudo técnico têm **presunção relativa de veracidade** (CPC art. 405; uso pacificado em fiscalização ambiental); CNMP expediu nota técnica subsidiando MPs no uso de sensoriamento remoto. **[DADO OFICIAL]** — https://www.cnmp.mp.br/portal/todas-as-noticias/13914
- **LGPD art. 20** (revisão de decisão automatizada): o Gabarito fica **fora do gatilho** por desenho — a decisão (validar/notificar) é da analista; entregamos critérios + trilha explicável. **[DADO OFICIAL na norma]**
- **Precedente direto do próprio órgão:** a Análise Dinamizada do SFB já é "automatiza + humano valida + trilha" em operação. O Gabarito segue esse modelo, adicionando frescor sub-anual + confiança por talhão. **[DADO OFICIAL]**

> Ressalva: a previsibilidade vem da **convergência** dessas normas, não de um dispositivo que diga "use score de IA no CAR". A presunção de veracidade é **relativa** (o produtor pode contestar) — e é justamente por isso que a trilha auditável assinável importa. **[INTERPRETAÇÃO]**

## 3. "Um comparativo de tempo que seria ganho."

**Resposta (comparativo honesto "hoje vs. com priorização"):**

| Métrica | Hoje | Status | Fonte |
|---|---|---|---|
| Triagem automatizada | até **66 mil/dia** | Gabarito não compete — entra no delta | SFB / Canal Rural |
| % com análise **concluída** | **5,9%** (2025) vs 2,3% (2024) | ~94% é o gargalo real | SFB, dez/2025 |
| Frescor da imagem | base licitada = **snapshot pontual** | **Sentinel-2: revisita 5 dias** | ESA Copernicus |
| Latência de alerta | **PRODES anual** / **DETER diário** | leva ao analista só o que mudou | INPE/OBT |
| Passivo histórico (manual) | **0,4% regularizado em 10 anos** | profundidade do problema | Observatório do Clima |

- Sentinel-2: revisita **5 dias** (2 satélites, desde 2018). **[DADO OFICIAL]** — https://sentinels.copernicus.eu/web/success-stories/-/sentinel-2-images-the-globe-every-5-days
- DETER (alertas ~diários) vs PRODES (taxa anual). **[DADO OFICIAL]** — http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/deter/deter

> Ressalva crítica: **não há benchmark público de "% de ganho de tempo por priorizar por risco"** — isso é **[META a medir no backtest do piloto]**. E como o MapBiomas Alerta já prioriza por imóvel, o comparativo de tempo deve vender **frescor sub-anual + classes do Código Florestal + decisão assinável**, não "a gente prioriza melhor". Não há run executado: tempo médio por análise manual não tem número oficial por imóvel.

## 4. "Como seria o piloto na prática?"

**Resposta:** um **backtest sobre 1–3 municípios do sudoeste goiano** (Rio Verde, Jataí, Mineiros, Cristalina — agropecuária forte, talhões grandes), em Goiás, porque a dor é documentada e a SEMAD tem autonomia para plugar o artefato.

- **A dor tem número:** Goiás atingiu **100% dos imóveis cadastrados (150.592 CARs)**, mas só **~27.496 analisados (~18%)** na foto do anúncio. O cadastro é fácil; a análise é o funil. **[DADO OFICIAL]** — https://goias.gov.br/meioambiente/goias-atinge-100-de-imoveis-rurais-cadastrados-no-car/
- **Autonomia:** a SEMAD lançou o **SIGCAR** (sistema estadual próprio, set/2025), adaptado à legislação local → pode integrar o delta+score sem depender do federal. **[DADO OFICIAL]** — https://goias.gov.br/meioambiente/semad-deixa-sistema-nacional-do-car-e-lanca-plataforma-propria-mais-funcional/
- **Céu favorável:** Cerrado tem estação seca (mai–set) com céu limpo → Sentinel-2 óptico funciona sem precisar de SAR (que na Amazônia é necessário pela nuvem >80% na estação úmida). **[DADO OFICIAL]**

**Etapas:** t0 (base SEMAD **ou** MapBiomas Col.10, Landsat 30 m) → sinal de mudança (Sentinel-2 L2A via CDSE/openEO grátis + PRODES/DETER via TerraBrasilis, Shapefile/WFS) → delta + score por talhão → **validação contra polígonos PRODES/DETER já publicados** (recall, precisão/F1, **kappa ≥0,6 = "muito bom"** na literatura, e **falso-negativo** como métrica que mais importa) → medir **dias de antecipação** por município.

> Ressalva: nenhuma métrica é resultado medido — são **[META a medir no backtest]**. Acesso ao t0 da SEMAD-GO e validação com analista da OEMA são o "ask" do piloto, ainda não confirmados.

## 5. "Não seria custoso demais a comparação das imagens?"

**Resposta:** a imagem é de graça, o processamento de um piloto cabe no free tier, e a gente não reprocessa o estado — só os ~0,4% que mudam por ano. O caro seria licitar o remapeamento inteiro; o Gabarito existe para **não** fazer isso.

- **Sentinel-2 = grátis e aberto** (política "full, free and open" do Copernicus/ESA; 10 m em B4/B8 para NDVI; revisita 5 dias). **[DADO OFICIAL]** — https://www.esa.int/Applications/Observing_the_Earth/Copernicus/ESA_Member_States_approve_full_and_open_Sentinel_data_policy_principles
- **CDSE free tier:** **40.000 Processing Units/mês + 10.000 créditos openEO/mês**, gratuitos por conta (reset mensal); CDSE é recomendado oficialmente para **hackathons**. **[DADO OFICIAL]** — https://documentation.dataspace.copernicus.eu/Quotas.html
- **Base de referência já processada de graça:** MapBiomas mapeia o Brasil inteiro, anual, 30 m, custo R$ 0 para o usuário (financiado por filantropia, não por OPEX do estado). **[DADO OFICIAL]** — https://brasil.mapbiomas.org/
- **O delta é minúsculo:** desmatamento Cerrado 2024 = **8.174 km²** (PRODES/INPE) sobre ~2.040.000 km² → **≈0,4% do território/ano**. Remapear só o delta = processar 0,4% da área em vez de 100%. **[DADO OFICIAL no desmatamento; ESTIMATIVA no %]** — https://data.inpe.br/biomasbr/

> Ressalva: **R$/km² de licitação de remapeamento estadual** e **orçamento anual do MapBiomas** **não** foram confirmados em fonte única — não usar como número cravado. O argumento de custo se sustenta nos itens confirmados (imagem grátis + free tier + delta de 0,4%).

---

### Reconciliação de números (para não divergir entre fontes)
- **9 estados / +1 mi analisados** (gov.br jun/2026) é a fonte oficial — usar essa, não "13 estados".
- **66 mil/dia**, **5,9%**, **~94%**, **8,1 mi** já constam como verificados no repo (`reports/09`).
- Páginas Canal Rural / Portal DBO retornaram HTTP 403 na captura direta; os números batem com SFB/CPI, mas revalidar no navegador antes de cravar em slide.
