# Gabarito — Apresentação Interna · Desafio 02 (haCARthon)

**Para:** o time. **Data:** 28/06/2026. **Status:** consolidação pré‑submissão.
**Fonte da verdade:** `pm-role.md` · `reports/09` (dados) · `prd-outputs/prd_gabarito_2606280400.md` (v4.0) · 8 debates em `debate-outputs/`.
**Como ler:** este documento existe para sairmos daqui **com uma história só**. Lê, discorda, melhora — mas batemos o martelo aqui.

> **Lentes aplicadas:** revisão geral (`/idea-scoring` → mantido **73/100 · test**) e estruturação por **Perception‑First Design** (carga cognitiva primeiro: uma tese por seção, número sempre com fonte, chamada única no fim).

---

## 0. A história em uma frase (decore esta)

> **Ninguém precisa de um mapa mais novo. Precisa de uma decisão que dê pra assinar.**
> O Gabarito roteia a fila do CAR por risco e anexa a cada caso a evidência datada que torna a liberação **assinável** — detecta o que mudou, remapeia só isso, em formato aberto — pra que a análise automática volte a rodar e nenhum cadastro espere anos por uma decisão.

Se uma tela, um talhão ou um slide não couber nessa frase, está fora.

---

## 1. Qual problema estamos resolvendo?

**O enunciado do Desafio 02 (verbatim do edital):**
> *"Melhorar o acesso a dados geoespaciais do CAR — Como podemos atualizar anualmente, com rapidez e acurácia, o mapeamento de uso e cobertura do solo de todos os estados brasileiros, melhorando a atualização dos cadastros e propiciando o aumento na quantidade e qualidade das análises do CAR?"*

**O que descobrimos olhando fundo (e que muda o jogo):** o enunciado fala de *atualizar o mapa*. Mas a dor que trava o país **não é a falta de mapa novo — é a falta de uma decisão que alguém aceite assinar.** Validar ou notificar um CAR é **ato administrativo com peso jurídico**; sem lastro defensável, o servidor recua para a análise manual. A base velha não é a doença — é o que tira o lastro.

**A prova está nos próprios números do CAR (verificados — `reports/09` + balanço SFB 2025):**

| Dado | O que diz | Fonte |
|---|---|---|
| **~66 mil/dia** | Capacidade da Análise Dinamizada do SICAR — **detectar não é o gargalo** | SFB/gov.br · Canal Rural (jun/2026) |
| **2,3% → 5,9%** | Conclusão nacional do CAR em um ano inteiro (8.154.567 cadastros, 480.700 concluídos) | Balanço Sicar 2025 (SFB) |
| **~94%** | dos 8,1 mi de cadastros seguem **sem conclusão** | SFB (jun/2026) |
| **~3% em ~12 anos** | ritmo histórico da análise **manual** (≈8 h/cadastro) | SFB · `reports/09` |

→ Se a máquina já vê **66 mil/dia** mas o país conclui **5,9%**, o limitante **não é mais detecção — é decisão validada e defensável.** É esse o problema que o Gabarito ataca.

---

## 2. O problema em três camadas (como contamos a dor)

1. **Externo (o obstáculo):** a base de referência — o "gabarito" que confere cada declaração — é um **snapshot pontual** (licitação não‑continuada, por estado, em classes genéricas). Camada gratuita existe (MapBiomas anual + INPE), mas é **anual**, não sub‑anual, nem nas classes do Código Florestal.
2. **Interno (o sentimento):** **medo de assinar no escuro.** Um "validado" errado tem peso jurídico e leva o nome da analista. Sem lastro, ela abandona o automático e abre imóvel a imóvel.
3. **Filosófico (o sentido):** um mapa de anos atrás não pode reger um território que mudou mês passado — e uma decisão **sem dono do processo contínuo** não vira política: morre órfã no fim do piloto.

**A heroína é a Luana** (analista ambiental de OEMA), não o produto. O Gabarito é o **guia** que devolve a ela o direito de confiar no mapa.

---

## 3. Os gargalos identificados — em todas as pesquisas e debates

Cada linha é um gargalo real que uma rodada de pesquisa/debate cravou. A leitura de cima para baixo **é** a nossa evolução de pensamento.

| # | Fonte (pesquisa/debate) | Gargalo identificado | O que mudou na tese |
|---|---|---|---|
| 1 | `reports/02` (domínio CAR) + `reports/06` (edital) | O CAR é gargalo nacional; o Desafio 02 pede atualização anual de uso/cobertura por estado | Definiu o terreno: base de referência é o eixo |
| 2 | `debate_…gabarito-desafio02` (R1) | A ideia precisa ser **defensável e dentro das regras** (open source, DPG) — não só bonita | Conformidade vira pré‑requisito, não enfeite |
| 3 | `debate_…gabarito-2026-update` (R2) | Pesquisa 2026: MapBiomas/PRODES/DETER já existem e são gratuitos | Forçou a pergunta "então qual é o nosso delta?" |
| 4 | `debate_…gabarito-live` (R3) | Risco de banca: *"vocês são só uma feature do MapBiomas + análise dinamizada"* | Resposta: MapBiomas diz o que **existe**; PRODES/DETER o que **mudou**; nós entregamos **confiança por talhão** que nenhum deles dá |
| 5 | `debate_…a-dor-desafio02` | **A base envelhece mais rápido do que dá pra confiar nela**; insumo é diário, o processo só sabe trabalhar em lotes raros | Cravou a dor‑raiz operacional: descompasso de ritmo |
| 6 | `debate_…tese-tecnico-operacional` | A tese **"econômica" (só‑CAPEX/sem‑OPEX) é frágil** — camada contínua gratuita já existe | **Virada:** o fosso é **técnico‑operacional** (sub‑anual + classes CF + confiança por talhão), não de dinheiro |
| 7 | `reports/09` (verificação adversarial, 10 agentes) | Vários números/"regras" estavam errados: tese econômica refutada; "sem GEE" e "narração humana" **não estão no edital**; MapBiomas Col.10 é **30 m** (não 10 m); SICAR **não** ingere GeoPackage | Saneou os dados; `reports/09` passa a **prevalecer** |
| 8 | `debate_…metodo-cientifico-incorporacao` | Sem monetização (é DPG), o gargalo vira: **a analista confia na fatia "libera automático" a ponto de assinar sem re‑checar?** | Trouxe o método científico: hipóteses H1/H2 falsificáveis |
| 9 | `debate_…council-dor-real` (decisivo, consenso 5/5) | A dor declarada "base velha" é **sintoma**; a raiz é **"ninguém quer assinar"** (insegurança jurídica + ausência de dono). Adoção federal direta é **ingênua** (SFB já constrói com parceiros maiores) | **Reposicionamento:** roteador de atenção + trilha de auditoria que protege quem assina; adoção = **OEMA early‑adopter / requisito de licitação estadual** |
| 10 | `debate_…gabarito-final-stress` (R4) | Tese fechada e defensável; **o risco residual é 100% de execução**, não de produto | Foco final: produzir os entregáveis, não re‑debater |

**Quatro correções duras que o council nos obrigou a adotar:**
1. O produto **não é "dado mais novo"** — é um **roteador de atenção + trilha de auditoria**.
2. **Paradoxo da visibilidade do score** → resolvido por **hierarquia de informação**: score **invisível na fila** (só roteia/ordena) e **visível/assinável sob demanda** (painel de evidência datada).
3. **Circularidade do score = dealbreaker** → nunca calibrar contra o t0 velho; só contra **verdade independente** (PRODES/DETER/amostra de campo).
4. **Adoção** não é incorporação federal → é virar **requisito de licitação estadual / OEMA early‑adopter**; e a submissão é **dupla: artefato técnico + modelo de governança** (nomear o dono).

---

## 4. Como chegamos à solução atual (a jornada)

```
Compadre (Desafio 01)            →   Gabarito (Desafio 02)
WhatsApp p/ o produtor               base de referência viva p/ a analista
  │ pivô 27/06 (PIVOT-DESAFIO-02.md)
  ▼
"base fica velha por falta de $$"  →  "base fica velha por falta de OPEX técnico"   (tese econômica REFUTADA, reports/09)
  ▼
"entregamos um mapa mais fresco"   →  "entregamos uma DECISÃO assinável"            (council 5/5)
  ▼
"o SFB incorpora nacionalmente"    →  "uma OEMA adota; vira requisito de licitação" (adoção realista)
```

O produto sobreviveu a 8 debates e a uma verificação adversarial de 10 agentes. O que mudou não foi *o quê* (detectar mudança, remapear só o delta, score por talhão), mas **por que isso importa**: deixou de ser frescor de pixel e virou **defensabilidade do ato administrativo**.

---

## 5. A solução atual — Gabarito, em 3 passos

1. **Detecta a mudança** — cruza um t0 aberto (base estadual ou **MapBiomas Col.10**, Landsat 30 m) com **Sentinel‑2 gratuita** (co‑registro + máscara de nuvem) e **alertas PRODES/DETER** (Shapefile/WFS). Aponta o delta.
2. **Remapeia só o que mudou** — a classificação roda **só nos talhões sinalizados**; o técnico revisa ali mesmo. A ida‑e‑volta de meses vira um fluxo só.
3. **Entrega base + trilha auditável** — saída em formato aberto, **score por talhão** que **roteia a fila** (invisível) e **evidência datada** que **torna a liberação assinável** (sob demanda). Automático onde a confiança é alta; humano onde é baixa.

**Um artefato, três públicos** (é o que faz dele produto, não feature):
- **Analista (Luana):** fila roteada por risco; assina com lastro.
- **Análise dinamizada / SICAR:** libera o automático **com trilha de auditoria**; conclusão sobe sem relaxar conformidade.
- **Produtor / RT:** vê a evidência **antes da notificação**; corrige a geometria ou contesta o que é da base velha.

**O que NÃO fazemos:** não substituímos o SICAR nem a análise dinamizada; **não tiramos a decisão legal da analista**.

**A honestidade que sustenta tudo (não‑circularidade):** o score é checado contra **PRODES consolidado + DETER + amostra de campo** — nunca contra o t0. Metas pré‑registradas: **kappa ≥ 0,70**, **recall do delta ≥ 0,90**, **falso‑negativo visível = 0**.

---

## 6. Conformidade com o Edital — Desafio 02 (a checagem de 100%)

**Veredito:** ✅ **A solução está 100% aderente ao enunciado e às regras do edital.** ⚠️ **A submissão ainda exige produzir 3 entregáveis** (ideação + 2 vídeos). Conformidade de *conceito* ≠ entrega *submetida*.

### 6.1 Aderência ao enunciado e às regras

| Requisito do edital (`reports/01` + `reports/09`, fonte primária ENAP) | Gabarito | Status |
|---|---|---|
| **Enunciado Desafio 02** — atualizar uso/cobertura por estado, melhorando atualização dos cadastros e qualidade das análises | É exatamente isso: delta sub‑anual + remapeamento dirigido + score que eleva a vazão **e** a qualidade da análise | ✅ Aderente verbatim |
| **Open source** (modelo esperado — CAR como DPG) | Aberto por design; roda em QGIS/PostGIS; libs abertas (GDAL/rasterio/eo‑learn) | ✅ |
| **Fortalecer o SICAR / acessibilidade** | Acopla por baixo: exporta **shapefile/KML em SIRGAS 2000** que o SICAR ingere; não recria plataforma | ✅ |
| **Código funcional NÃO obrigatório** | Entregamos visão + protótipo de conceito + backtest H1 como prova; código é opcional | ✅ (dentro da regra) |
| **Evento remoto · submissão 28/06 · R$75k (5×15k)** | Ciente; submissão dupla (artefato + governança) | ✅ |

### 6.2 "Regras" que **não** constam no edital (não nos restringem — `reports/09`)

| Suposição antiga | Realidade | Nossa postura |
|---|---|---|
| "Proibido GEE/ArcGIS" | **Não está no edital** | Evitamos GEE mesmo assim — **boa prática de portabilidade**, não exigência |
| "Narração humana obrigatória / voz de IA desclassifica" | **Não existe** — narração é só recomendada | Usamos narração limpa; sem risco de desclassificação |
| "Presencial" | É **remoto** (item 7.1) | Submissão online |

### 6.3 O que ainda falta produzir para a submissão ser 100% (gap de execução)

| Entregável exigido | Formato | Estado | Dono | Prazo |
|---|---|---|---|---|
| **Ideação** | Formulário da plataforma appdesafios | ⬜ A preencher (base pronta neste doc + `pm-role.md`) | — | 28/06 |
| **Protótipo** | Vídeo **≤ 2 min** (acima desclassifica) | ⬜ A gravar — roteiro: o **caso difícil**, o sistema **recusando** liberar e dizendo por quê | — | 28/06 |
| **Pitch** | Slides + áudio, vídeo **≤ 3 min** | 🟡 Conteúdo pronto (página `index.html` + seções 1–5 deste doc); falta montar/gravar | — | 28/06 |

> ⚠️ **Único risco vivo: execução, não produto** (eco do debate R4). O conceito passa no edital; o que pode nos derrubar é estourar os 2 min do protótipo ou não fechar os 3 entregáveis a tempo.

---

## 7. Revisão da nota (`/idea-scoring`)

**Mantido: 73/100 · veredito `test` · confiança `medium`.** Nenhuma evidência nova desde o council justifica re‑pontuar; o que a revisão do edital muda é a **clareza do gate de conformidade**, não as dimensões. (Score é estimativa pré‑evidência — sobe só quando o RAT rodar.)

| Dimensão (reinterpretada p/ DPG B2G — `scores.json`) | Nota | Leitura |
|---|---|---|
| Demanda | **80** | Job validado por ação de governo (9 estados, +1 mi CARs, 66 mil/dia) |
| Retenção (uso operacional) | **78** | Fila perpétua → estruturalmente sticky; churn = colapso de confiança |
| Incorporação institucional (*substitui monetização*) | **75** | Adoção via OEMA / licitação estadual; **sem receita por design** |
| Distribuição (canal institucional) | **72** | Pipe do SFB a 9+ estados |
| Founder‑market fit | **63** | eo‑learn baixa a barra; profundidade geoespacial do time não evidenciada |
| Competição | **60** | Nicho vazio mas estreito (risco de plataforma SICAR/Pré‑Preenchido) |

**RAT (o experimento que destrava tudo) — H1, backtest anti‑circularidade:** 1 município de bioma maduro; t0 = base estadual + MapBiomas Col.10; verdade **externa** = PRODES + DETER + amostra fotointerpretada nos casos difíceis. **Passa se:** recall do delta vs DETER ≥ 0,90 **e** kappa ≥ 0,70 **e** falso‑negativo visível = 0 (pré‑registrado, binário). Custo ~R$0, ≤ 2 semanas. **Filmar esse backtest = o protótipo do haCARthon.**

---

## 8. A chamada (o que pedimos)

Um **piloto com uma OEMA de alta pressão** (Amazônia/Cerrado), recorte de município, classe‑alvo única (área consolidada × supressão nova de nativa), **com um dono institucional nomeado**. Submissão **dupla**: o **artefato técnico** que prova o método (backtest H1) + o **modelo de governança** que nomeia quem opera o OPEX e recalibra. Sem dono, a base viva morre no fim do piloto.

**Métricas de sucesso do piloto:** vazão **6 → 18/dia sem subir o erro** · recall do delta vs DETER · aprovação do ruralista na 1ª/2ª tentativa · custo por cadastro atualizado cai.

---

### Anexos / rastreabilidade
- Estratégia canônica: `pm-role.md` · PRD v4.0: `prd-outputs/prd_gabarito_2606280400.md`
- Dados verificados (prevalece): `reports/09-verificacao-dados-2026.md`
- Debates: `debate-outputs/` (decisivo: `debate_output_council-dor-real-desafio02_2606280330.md`)
- Página de visão (entregável base do pitch): `index.html` / https://gabarito.pages.dev/
- Score: `memory/ideas/gabarito/scores.json`
