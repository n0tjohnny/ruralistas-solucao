# Relatório 09 — Verificação Adversarial dos Dados (10 agentes, jun/2026)

**Elaborado em:** 27 de junho de 2026
**Método:** 10 agentes de pesquisa com postura de **refutação** (tentar falsificar cada dado, não confirmá-lo), pesquisa web 2026 + fontes primárias.
**Motivo:** desconfiança declarada nos números que sustentam a tese do Gabarito. Este relatório é a **nova referência de dados** do repo — onde ele conflitar com `pm-role.md`, PRD ou debates antigos, **este prevalece**.

> **TL;DR:** a *direção* do produto sobrevive, mas vários **números e "regras" estavam errados ou sem fonte**. As duas correções mais graves: (1) a **tese econômica "só-CAPEX / sem OPEX" está parcialmente refutada** — MapBiomas + INPE já oferecem camadas contínuas e gratuitas; o fosso é **técnico-operacional**, não de financiamento. (2) Duas "regras decisivas" do haCARthon (**narração humana obrigatória** e **proibição de GEE/ArcGIS**) **não existem no edital**.

---

## Quadro de veredito

| # | Afirmação | Veredito | Correção |
|---|-----------|----------|----------|
| 1 | Análise dinamizada em 9 estados; +1 mi CARs (SFB jun/2026) | ✅ **CONFIRMADO** | Manter. Add: +3 mi ha, 309 mil processos concluídos, 500 mil retificações. 13 estados+DF em capacitação → "9" pode crescer. |
| 2 | Base de referência leva ~2–2,5 anos (licitação) | ⚠️ **PARCIAL** | Número sem fonte primária ("2 anos" da imprensa = rollout do AnalisaCAR, não a base). Mas licitação **"não continuada"/pontual** ✓ (TR SEMAD-GO) e base = *snapshot* ✓; gargalo de base documentado (ICV). Qualificar o prazo. |
| 3 | 20–30 mil análises/dia (auto) vs ~6/dia (manual) | ⚠️ **PARCIAL (anedótico)** | Vem das Lives 05/06 (fala de organizador, com "às vezes"). Oficial escrito: **"até 66 mil/dia"** (SFB/Canal Rural) e **~3% da base em ~12 anos** no manual. Citar como "relato de organizador"; preferir números oficiais. |
| 4 | MapBiomas Coleção 10: anual, **10 m**, 1985–2024, aberta | ⚠️ **PARCIAL** | **Coleção 10 = Landsat, 30 m** (não 10 m). O produto **10 m é outro** (MapBiomas 10m, Col.3 beta, 2017–2024) e é **distribuído via Google Earth Engine**. Col.10.1 (fev/2026) ✓. Licença CC-BY ✓. |
| 5 | CAR = 1º DPG do Brasil (COP30); RER=CAR; consulta.car (mai/2026) | ✅ **CONFIRMADO** | Manter. Nuance: o artefato catalogado na DPGA é o **módulo de cadastro open source (RER)**, não o SICAR inteiro. consulta.car.gov.br lançado 07/05/2026. |
| 6 | PRODES/DETER abertos em **GeoPackage**/TerraBrasilis; DETER diário; PRODES 2025 Amazônia 5.796 km² | ⚠️ **PARCIAL** | Formato é **Shapefile (.zip) + WFS** (não GeoPackage). DETER diário/PRODES anual ✓. Amazônia: usar **consolidado 5.731 km² (mar/2026)** (5.796 era preliminar). Cerrado 7.235/−11,49% ✓. 6,25 ha = limiar da taxa ✓. |
| 7 | haCARthon: org. (MGI/FBDS/ENAP/Impact Hub/**Norad**); R$75k; **presencial**; Desafio 02; **sem GEE/ArcGIS**; **narração humana obrigatória** | ⚠️ **PARCIAL (erros graves)** | **R$75k (5×R$15k)** ✓, datas ✓, texto Desafio 02 ✓, vídeos (≤2min/≤3min) ✓. **"Norad" ❌** (é Noruega via MRE/Embaixada, *financiadora*). **"Presencial" ❌ → é REMOTO** (Edital 7.1). **"Sem GEE/ArcGIS" ❌ não consta no edital.** **"Narração humana obrigatória / voz IA desclassifica" ❌ não consta — narração é só recomendada.** Código funcional **não é obrigatório**. |
| 8 | CAR Pré-Preenchido propõe geometria/feições da base; refém da base; construído a partir do RER | ⚠️ **PARCIAL** | Módulo existe (MGI+**Dataprev**, COP30). Mas hoje pré-preenche **fundiárias (SNCR/Sigef)**; propor **feições ambientais a partir da base = PRÓXIMA entrega** (Live 06) → "refém da base" é **prospectivo**. "Construído a partir do RER" ❌ (RER é irmão "Light", não alicerce). Retificação dinamizada já propõe correção ✓. |
| 9 | Sentinel-2 10 m NDVI; pipeline open-source sem GEE local; GeoPackage/COG consumível pelo SICAR | ⚠️ **PARCIAL** | Sentinel 10 m NDVI ✓ mas exige **co-registro + máscara de nuvem**. Pipeline open-source sem GEE ✓ mas **cloud-assistido (openEO/CDSE)**, não 100% local (série estadual = teras). **GeoPackage/COG NÃO é ingerido pelo SICAR** ❌ — SICAR aceita **shapefile/KML/GPX em SIRGAS 2000**; GeoPackage/COG = trabalho interno no QGIS. |
| 10 | Não há concorrente open-source de "frescor + confiança por talhão"; raiz econômica = só-CAPEX | ⚠️ **PARCIAL / tese econômica REFUTADA** | "Sem concorrente" forte demais: **MapBiomas Alerta** (valida alertas + cruza CAR) e **Análise Dinamizada** (triagem por imóvel) são adjacentes. **CAPEX/OPEX refutada:** MapBiomas (anual, gratuita, contínua) + INPE PRODES/DETER (contínuo, gratuito) já são camadas custeadas por terceiros. O fosso é **técnico-operacional**: sub-anual + classes do Código Florestal + **confiança por talhão como decisão**. |

---

## As duas reviravoltas que mudam a estratégia

### A) O fosso NÃO é econômico — é técnico-operacional
A tese "a base fica velha porque só se paga remapeamento pontual (CAPEX), nunca atualização contínua (OPEX)" **não se sustenta como redigida**: o MapBiomas publica base **anual, nacional, aberta e gratuita** e o INPE publica **mudança contínua e gratuita** (PRODES/DETER). Existe, sim, camada contínua custeada — por terceiros, a custo zero pro estado.

**O que sobra de válido (o fosso real):** a camada gratuita é **anual** (não sub-anual) e em **classes genéricas** (não APP/RL/área consolidada pré-2008 do Código Florestal); e as "bases de referência qualificadas" estaduais ainda são esforço pontual. Logo o valor do Gabarito é:
1. **Frescor sub-anual** (delta entre coleções anuais, via DETER/Sentinel);
2. **Tradução para classes do Código Florestal** (o que MapBiomas não entrega pronto) — hoje roadmap;
3. **Confiança por talhão como decisão operacional** ("liberar automático aqui / humano ali") — o que nem MapBiomas Alerta nem a Análise Dinamizada (que faz triagem por **imóvel**, não por **talhão**) entregam.

→ **Ação:** reescrever a "raiz econômica" em `pm-role.md`/PRD/PIVOT como **gap técnico-operacional**. Manter a sustentação/dono institucional apenas como ponto de operação das bases estaduais, não como "a raiz".

### B) O "gate de conformidade" do haCARthon era um fantasma
O edital nº 158/2026 (assinado, no repositório ENAP) **não** exige narração humana nem proíbe voz de IA/TTS, e **não** proíbe GEE/ArcGIS. Open source é o **modelo esperado** (e código funcional nem é obrigatório). O evento é **remoto**. → As decisões dos debates anteriores que giraram em torno de "voz IA = desclassificação" e "sem GEE = regra" estavam ancoradas em fala de live, não em norma. Abandonar voz clonada e preferir open source/sem-GEE seguem sendo **boas práticas**, não requisitos.

---

## Fontes primárias (principais)
- **Edital nº 158/2026 + anexos (ENAP):** https://repositorio.enap.gov.br/handle/1/9909 · Edital PDF: `.../SEI_0993344_Edital_158.pdf` · Briefing v2 (texto Desafio 02) · Guia do Participante (entregáveis) · Cronograma (datas).
- **SFB — +1 mi CARs / 9 estados (jun/2026):** https://www.gov.br/florestal/pt-br/assuntos/noticias/2026/junho/sfb-apoia-estados-na-analise-de-mais-de-um-milhao-de-cadastros-rurais
- **Análise dinamizada "até 66 mil/dia":** https://www.canalrural.com.br/agricultura/sistema-de-analise-dinamizada-do-car/ · Manual Retificação Dinamizada: https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/documento/2024-11/manual_retificacao_dinamizada.pdf
- **MapBiomas Col.10 (30 m, 13/08/2025) / 10.1 (09/02/2026) / 10m (Sentinel via GEE):** https://brasil.mapbiomas.org/2026/02/09/mapbiomas-publica-colecao-10-1-de-mapas-anuais-de-cobertura-e-uso-da-terra-no-brasil/ · https://brasil.mapbiomas.org/en/mapbiomas-cobertura-10m/ · MapBiomas Alerta: https://alerta.mapbiomas.org/metodo
- **CAR DPG / RER / consulta.car:** https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/na-cop30-mgi-lanca-o-car-como-primeiro-bem-publico-digital-do-brasil · RER GitHub: https://github.com/Rural-Environmental-Registry/frontend · https://consulta.car.gov.br/
- **CAR Pré-Preenchido (MGI+Dataprev, COP30):** https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/mgi-lanca-cadastro-ambiental-rural-pre-preenchido-direcionado-a-produtores-e-proprietarios-de-imoveis-rurais
- **PRODES consolidado 5.731 km² (mar/2026):** https://data.inpe.br/biomasbr/novos-dados-do-prodes-sao-atualizados-pelo-programa-biomasbr/ · TerraBrasilis (Shapefile/WFS): https://terrabrasilis.dpi.inpe.br/downloads/
- **Pipeline open-source/CDSE/openEO:** https://dataspace.copernicus.eu/ · https://plugins.qgis.org/plugins/openeo_plugin/ · upload SICAR (shapefile/KML/GPX): https://smastr16.blob.core.windows.net/sicar/2019/01/9-como-fazer-upload-de-arquivos-espaciais-no-sicar.pdf
- **Base estadual licitada "não continuada" (TR SEMAD-GO):** https://sislog.sistemas.go.gov.br/pcg/viewdoc?d=MnZlWS9QcElLMnc9 · Gargalo de base (ICV): https://observatorioflorestal.org.br/wp-content/uploads/2024/08/icv-nota-tecnica-car.pdf

---

## Atualização 28/06/2026 — documentos primários agora no repo

A verificação original deste relatório leu o edital **via web** (repositório ENAP), mas os **PDFs oficiais não estavam versionados** — o repo só tinha os decks das Lives. Isso foi corrigido: os **5 documentos oficiais** (Edital nº 158/2026, Briefing V1, Briefing V2, Guia do Participante, Cronograma) foram baixados de `repositorio.enap.gov.br/handle/1/9909` para **`source-material/documentos/edital-oficial/`**, e a conformidade foi **re-checada contra o texto primário** (ver `edital-oficial/README.md`). Todos os 9 pontos confirmaram. Citações‑chave: protótipo "vídeo de até 2 minutos" (Guia), pitch "no máximo 3 (três) minutos" (Edital 9.4), "Não é obrigatório apresentar software funcional ou código-fonte" (Briefing v2), "R$ 75.000,00 ... 5 primeiros colocados ... R$ 15.000,00" (Edital 10.4). Ressalva: Briefing **v1** dizia soluções "**devem** ser desenvolvidas em código aberto"; **v2** suaviza para "modelo de código aberto" — sem impacto (o Gabarito é aberto por design).

## Impacto nos artefatos do repo (corrigidos nesta sessão)
- `pm-role.md` — raiz reescrita (técnico-operacional), MapBiomas 30 m, formatos (Shapefile/WFS; SICAR≠GeoPackage), métrica qualificada, concorrentes nomeados, pipeline cloud-assistido, regras do edital corrigidas.
- `reports/01-desafio-oficial.md` — organizadores (sem Norad), evento remoto, entregáveis/regras corrigidos.
- `prd-outputs/prd_gabarito_2606271400.md` — mesmas correções de dado.
- `PIVOT-DESAFIO-02.md` e `CLAUDE.md` — dor reescrita e "regras decisivas" corrigidas.
