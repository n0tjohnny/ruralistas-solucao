# Backtest de antecipação (H1) — receita reproduzível + worked example

> O protótipo do haCARthon. Um experimento **barato (~R$ 0), curto (≤ 2 semanas) e binário**: mede se o Gabarito sinaliza a mudança de um talhão **antes de a base de referência ser atualizada**, calibrando contra **verdade independente** — nunca contra o t0. Tudo com dado **público e gratuito**, sem Google Earth Engine.

## 1. Hipótese (falsificável)
**H1:** em talhões reais de Goiás, o sinal ótico do Gabarito (queda de NDVI no Sentinel-2) aparece **com antecedência mensurável** em relação à atualização da base de referência (PRODES é **anual**), e a fila que ele forma tem **alta precisão** contra verdade independente.

**Passa se (pré-registrado):**
- Antecipação mediana **≥ 2 meses** entre o sinal do Gabarito e a consolidação da base.
- **Precision ≥ 0,80** nos talhões elevados à fila (eram mudança real).
- **Recall do delta ≥ 0,90** vs DETER · **kappa ≥ 0,70** nas classes operacionais.
- **Falso-negativo visível = 0** (nenhuma supressão clara escapou para "liberável").

**Falha se** qualquer meta não bater → registramos e dizemos por quê. A honestidade é o produto.

## 2. Dados (todos públicos, gratuitos, sem GEE)
| Camada | Fonte | Como | Campos/uso |
|---|---|---|---|
| **Alertas (verdade p/ rotular)** | DETER Cerrado, TerraBrasilis (INPE) | Shapefile ou WFS `terrabrasilis.dpi.inpe.br/geoserver/ows`, `CQL_FILTER=date BETWEEN 'AAAA-MM-DD' AND 'AAAA-MM-DD'` | `view_date` (data da imagem do alerta), `class_name`, `area_km`, `sensor` |
| **Base anual (referência consolidada)** | PRODES Cerrado (INPE) | TerraBrasilis | incremento anual + data de consolidação |
| **t0 (base de origem)** | Base estadual da SEMAD-GO **ou** MapBiomas Coleção 10 (Landsat 30 m) | download | mapa de uso/cobertura no instante inicial |
| **Imagem (o sinal)** | Sentinel-2 **L2A** | Copernicus Data Space Ecosystem — **openEO** (free tier, processamento na nuvem) ou STAC/OData | B4/B8 → **NDVI** antes/depois; SCL → máscara de nuvem |
| **Projeção** | — | SIRGAS 2000 (EPSG:4674) p/ casar com SICAR | — |

## 3. Amostra
- **~20 talhões de teste:** filtrar DETER Cerrado por **UF = Goiás** numa janela passada conhecida (t0 → t0+12 meses). São polígonos com data real (`view_date`).
- **Talhões-controle (não-redundância):** incluir talhões que o **DETER NÃO disparou** mas que mudaram (checados contra PRODES anual + amostra fotointerpretada). É aqui que provamos valor além do que já existe.

## 4. Procedimento (6 passos)
1. **Recorte:** para cada talhão, baixar a série Sentinel-2 L2A do período (via openEO/CDSE), aplicar máscara de nuvem (SCL) e co-registro.
2. **Sinal:** computar NDVI por data; marcar a **primeira data** em que a queda cruza o limiar de supressão = **data-sinal do Gabarito**.
3. **Score:** atribuir `s` por talhão (concordância de alerta × magnitude da queda × idade do dado), versionado.
4. **Rótulo (verdade independente):** mudança real = confirmada por DETER (`view_date`) e/ou amostra de campo fotointerpretada. **Nunca usar o t0 como verdade.**
5. **Antecipação:** `dias = data_atualização_da_base − data_sinal_Gabarito`. Como PRODES é anual, a antecipação cai naturalmente em meses; reportar também, como métrica secundária honesta, `data_DETER_view_date − data_sinal` nos talhões em que for positivo.
6. **Métricas:** precision/recall/kappa contra a verdade independente; conferir falso-negativo visível = 0.

## 5. Saídas (o que vira vídeo de 2 min)
- **Gráfico "dias de antecipação" por talhão** (o visual-âncora do protótipo).
- **Matriz de confusão pública** (talhão na fila × mudança real).
- **Um caso difícil filmado:** o sistema **recusando** liberar (borda/nuvem) e dizendo por quê.

## 6. Anti-circularidade (a regra que não se quebra)
O score **nunca** é avaliado contra o t0 — isso mediria concordância com o erro que ele existe para corrigir. A verdade é **sempre externa** (PRODES/DETER/campo). "Um alerta não se valida contra o futuro; um gabarito sim."

## 7. Riscos e mitigação
- **Co-registro / deslocamento entre fontes** → falso-positivo de borda: o score penaliza borda e desalinhamento.
- **Nuvem (mesmo no Cerrado):** máscara SCL; em Goiás o céu limpo do Cerrado favorece o ótico (por isso o piloto é aqui; Amazônia exige SAR/Sentinel-1 — Fase 2).
- **Backtest provar só redundância** (DETER já via): por isso os **talhões-controle** que o DETER não disparou — vendemos **antecipação e não-redundância**, não concordância.

## 8. Worked example (ilustrativo — a mecânica é real)
Talhão `DETER-GO · view_date 2024-05-12`, classe `Desmatamento_CR`, 9,1 ha:
- Série Sentinel-2 mostra NDVI estável (~0,72) até **2024-03-09**, quando cai para ~0,28 em duas passagens consecutivas (revisita de 5 dias).
- **Data-sinal do Gabarito = 2024-03-09.** DETER `view_date = 2024-05-12`. Base estadual t0 = 2023 (anual).
- **Antecipação vs. base anual:** o talhão só entraria na base na próxima consolidação — meses depois. Vs. o `view_date` do DETER: **~64 dias** antes.
- Score baixo (mudança nova sobre nativa) → **sobe pra fila com a trilha datada**. A analista abre, confere o recorte, assina.

*(Valores ilustrativos; o backtest publica os reais.)*

---

## E-MAIL PRONTO — pedido de acesso ao t0 (SEMAD-GO)

**Para:** Superintendência de Proteção Ambiental / Geoprocessamento — SEMAD-GO
**Assunto:** Piloto sem custo — base de referência viva e auditável para a análise do CAR (haCARthon Desafio 02)

Prezados(as),

Somos a equipe do **Gabarito**, solução do **Desafio 02 do haCARthon** (melhorar o acesso aos dados geoespaciais do CAR). Goiás acaba de registrar o **menor desmatamento da série histórica do PRODES (231 km², INPE)** — um feito que depende de uma base de referência que **se mantenha atual** para sustentar a análise do CAR em escala.

O Gabarito detecta, com Sentinel-2 gratuito + alertas PRODES/DETER, **só os talhões que mudaram**, e entrega à analista uma fila priorizada por risco com **trilha de auditoria datada** — tornando a liberação **assinável**, sem substituir o SICAR nem tirar a decisão do servidor. É **aberto** (QGIS/PostGIS) e exporta em **SIRGAS 2000** para o SICAR.

Para um piloto **sem custo e em ≤ 2 semanas**, pedimos:
1. **Acesso a um recorte da base de referência (t0)** de um município, para rodar um **backtest de antecipação** (anexo: método reproduzível) calibrado contra verdade independente;
2. **30 minutos com um(a) analista** que faz a análise do CAR, para validar o fluxo da fila e da trilha.

Em troca, entregamos o relatório de calibração (precision/recall/kappa/antecipação, matriz de confusão pública) e uma **minuta de Nota Técnica** que reparte a responsabilidade do roteamento — pronta para discussão com a procuradoria.

Podemos apresentar em uma chamada esta semana?

Atenciosamente,
Equipe Gabarito — [nome] · [contato]

> *Fontes técnicas: DETER/PRODES via TerraBrasilis (INPE); Sentinel-2 L2A via Copernicus Data Space Ecosystem (openEO, free tier); PRODES Goiás 2024/25 = 231 km² (INPE/SEMAD).*
