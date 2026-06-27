# Debate ao vivo — Método científico aplicado: Gabarito como bem público de incorporação (sem monetização)

> Conduzido por @main ao vivo, um turno por vez, com **agentes reais em foreground** (relay em tempo real no thread). Idioma: português (instrução do projeto sobrepõe o default do skill). **Lente obrigatória (instrução do usuário): `/thinking-scientific-method`** — cada papel enuncia uma hipótese falsificável, a observação mais barata que a discrimina, e o falsificador, antes de defender. **Premissa corrigida pelo usuário:** NÃO haverá monetização; o modelo de sucesso é **incorporação pelo governo/estados**. Base: TODAS as informações do repo (`pm-role.md`, `reports/09`, PRD, `debate-outputs/`, `memory/ideas/gabarito/scores.json`, buscas web jun/2026).

## Debate Topic
Tratando o Gabarito como **bem público destinado à incorporação por governo/estados (receita = zero, por design)**, e usando o método hipótese-diferencial: **qual é a real restrição que prende a confiança da ideia** (hoje ~73/100 após corrigir a premissa de monetização) — e existe um caminho de evidência barato que a eleve honestamente rumo a 90, ou a incorporação institucional é exatamente o gargalo que a segura?

## Material Summary
`reports/09` (referência de dados): tese econômica refutada (MapBiomas anual+gratuito, PRODES/DETER contínuo+gratuito); o fosso é técnico-operacional = frescor sub-anual + classes do Código Florestal + confiança por talhão como decisão. Buscas jun/2026: análise dinamizada em 9 estados, +1 mi CARs, até 66 mil/dia (por imóvel); confiança por parcela e frescor já são commodity (USGS/NASA, dataset global 3,17 bi polígonos, DETER diário); **eo-learn** (open source) faz LULC Sentinel-2 em escala de país e serve times pequenos; **SFB integra ferramentas externas** (WebAmbiente/Embrapa→SICAR), abraça open source (RER=CAR, 1º DPG do Brasil) e provê tecnologia aos estados; **Fundo Amazônia** ~R$2 bi aprovados em 2025, retomou financiamento de monitoramento/comando-e-controle. Score atual (corrigido): demanda 80, competição 60, incorporação institucional 75 (ex-monetização N/A), distribuição 72, retenção 78, fit técnico 63 → ~73 ("test", à beira de "pursue"); o que falta para 90 = piloto que passe os 6 critérios de morte pré-registrados + compromisso real de incorporação.

## Generated Roles
- **Engenheiro de Geoprocessamento (Produto)** — papel de produto. Métrica: recall do delta, kappa por bioma, % talhões roteados certo. Restrição: QGIS/PostGIS + cloud openEO/CDSE, sem GEE por portabilidade. Stance: a viabilidade técnica NÃO é o gargalo (eo-learn prova construível); o gargalo é a prova de calibração não-circular.
- **Especialista em Incorporação Institucional** (substitui monetização) — papel de sustentação. Métrica: compromisso formal de SFB/estado de incorporar e manter. Restrição: sem dono institucional, vira protótipo órfão. Stance: a incorporação é o gargalo binário — mas é crível, com precedentes (WebAmbiente, RER, SFB provê tech aos estados).
- **Estrategista de Adoção / GTM (Comercial)** — papel comercial/ops. Métrica: sinal comportamental de adoção (acesso a dado/MOU). Restrição: banca cross-desafio, concorrentes gratuitos. Stance: o RAT (adoção) é testável barato; sem isso, 90 é fantasia.
- **Analista da OEMA (Luana)** — usuária/operação. Métrica: vazão sem subir erro; pareceres assinados sem medo. Restrição: responde juridicamente. Stance: o gargalo real é confiança/retenção — demanda pelo artefato específico ainda não foi provada na minha fila.
- **Auditor de Score (cético quantitativo, voz `reports/09`)** — não-facilitador. Métrica: pontos que sobrevivem à refutação. Restrição: nada sem evidência; nenuncia falsificadores. Stance: o usuário quer 90; meu trabalho é impedir inflação — cada ponto tem que ser ganho por observação, não por retórica.
- **Moderador/Facilitador** — impõe a estrutura hipótese-diferencial e sintetiza o re-score honesto + Final Report.

## Canonical Debate Order
1. Engenheiro de Geoprocessamento (Produto)
2. Especialista em Incorporação Institucional
3. Estrategista de Adoção / GTM (Comercial)
4. Analista da OEMA (Luana)
5. Auditor de Score
6. Moderador (Final Report, ao fim)

---

## Transcrição turno a turno

Round 1 — Engenheiro de Geoprocessamento
Minha hipótese falsificável: a confiança do Gabarito não é limitada por capacidade técnica — eo-learn já faz LULC Sentinel-2 em escala de país com time pequeno — mas pela **prova de calibração não-circular**. Se eu calibrar o score usando a base estadual defasada como verdade, o kappa é cosmético: estou medindo concordância com o erro que prometo corrigir. A restrição que prende a confiança é não ter verdade independente por bioma.

Observação mais barata que discrimina (≤2 semanas, ~R$0): num bioma com DETER diário, calcule recall do meu delta contra polígonos DETER do mesmo trimestre (verdade externa, não a base), reportando co-registro e máscara de nuvem como confounders; depois kappa contra fotointerpretação amostral de 200 talhões em PRODES consolidado.

Falsificador: se recall vs DETER e kappa estratificado vierem altos **usando só a base estadual como referência** — sem verdade externa — minha hipótese cai: a circularidade não enviesa e a calibração é trivial. Aí o diferencial real volta a ser só a fusão regulatória por talhão (declaração × delta × classe CF), não a confiança.

Round 1 — Especialista em Incorporação Institucional
A ordem causal do Engenheiro está invertida. Hipótese falsificável: a restrição da confiança do Gabarito não é a calibração não-circular — é a incorporação institucional. Um score impecável num repositório órfão tem confiança ZERO como política pública; calibração perfeita que ninguém adota não roteia nenhuma fila. A viabilidade aqui é binária: incorpora = vive; não incorpora = morre. E é crível, porque há precedente forte — o SFB já adota e distribui ferramentas externas open source aos estados (WebAmbiente/Embrapa→SICAR; RER=CAR como 1º DPG).

Observação mais barata que discrimina: discovery comportamental com 5 tomadores de SFB/OEMA medindo compromisso REAL — assinatura de MOU ou liberação de acesso ao dado de calibração — e rastrear se o roadmap do CAR Pré-Preenchido (MGI+Dataprev) já prevê camada por talhão. Custa dias, não meses de engenharia.

Falsificador: se um SFB/OEMA aceitar um piloto formal ANTES de qualquer prova de calibração, minha hipótese cai — a adoção não estava travada pela institucionalização, e o Engenheiro tinha razão sobre a ordem.

Round 1 — Estrategista de Adoção / GTM
A RAT aqui não é frescor nem calibração — é adoção, e ela só vira sinal confiável quando há artefato. Hipótese falsificável: *um estado pede follow-up de piloto depois de ver o delta rodando num talhão real; não pede depois de ouvir só a proposta.* Ao Especialista em Incorporação: discovery que mede MOU/acesso a dado sem artefato é teatro — burocrata não assina por slide, e "interesse" em reunião é viés de cortesia, não demanda. O sinal só discrimina se a isca for um delta funcional. Ao Engenheiro: calibração perfeita sem posicionamento vira commodity invisível — USGS, dataset global e DETER diário já entregam frescor e confiança-por-parcela de graça; o que ninguém gratuito produtiza é a fusão regulatória por talhão (declaração CAR × delta × classe CF × decisão de liberação auditável).

Observação mais barata que discrimina: rodar o delta em 1 município e levar a 3-5 sessões com OEMA/SICAR, medindo um sinal duro — pedido de follow-up de piloto ou liberação do t0 estadual. Posicione não como "mapa mais fresco", mas como "a camada que diz onde confiar a automação — e onde não confiar".

Falsificador: se nas sessões com artefato ninguém pede piloto nem libera t0, a adoção está morta e nenhum ponto de calibração ressuscita.

Round 1 — Analista da OEMA (Luana)
Hoje você abre imóvel a mão pra checar e assina o parecer de próprio punho — eu sei, é minha rotina. Então deixa eu falar o que ninguém mediu.

Minha hipótese, e ela é falsificável: o gargalo do Gabarito não é a precisão técnica nem o gestor incorporar — é se EU confio na fatia "libera automático" a ponto de assinar sem reler. Adoção institucional não é uso: quem pede piloto é o gestor; quem usa ou abandona sou eu. Respondo juridicamente pelo que assino, então confiança é assimétrica — uma única liberação automática de um desmate flagrante e eu volto a abrir tudo a mão. O produto passa nos KPIs e morre na minha mesa.

A observação mais barata que discrimina: peguem 500 talhões reais já decididos pelo Gabarito, entreguem a três analistas e meçam duas coisas — taxa de concordância com a fatia automática, e se a gente re-checa a mão mesmo quando o sistema diz "libera". Se nós reabrimos o que era pra ser automático, a economia de fila é zero, por melhor que seja o score.

Falsificador: se as três aceitarem a fatia automática sem re-checar e concordarem acima do limiar, minha hipótese cai — o gargalo era adoção, não minha confiança. Aí eu assino.

Round 1 — Auditor de Score
Hipóteses, sem redundância: na verdade há só duas. H1 (calibração não-circular) é genuinamente distinta — pergunta se o score significa algo. H2, H3 e H4 colapsam numa única hipótese de "adoção/uso"; Incorporação e Luana brigam sobre o gargalo (gestor ou analista), mas isso não são duas hipóteses, são dois *testes* da mesma. Tratá-las como separadas é dobrar contagem e inflar a sensação de cobertura.

Ranqueando por probabilidade × custo de observar: primeiro vem H1 — backtest contra a base estadual t0 é barato, offline, e tem alto poder de falsificar. Se o score é circular, nenhuma adoção salva. Adoção/uso vem depois, porque exige artefato na frente da Luana.

Falsificador que muda meu ranking: se o backtest já existir e fechar, H1 cai e adoção sobe ao topo.

Teto honesto hoje: nenhum experimento foi RODADO. Pedir 90 não cria 90 — 90 é "produto embarcado e provado". Sem piloto, o teto permanece ~73.

Round 2 — Engenheiro de Geoprocessamento
**H1 refinada:** o score por talhão é não-circular se prediz mudança verificada por fonte INDEPENDENTE do t0 — não apenas reproduz a própria base.

**Experimento:** t0 = base estadual + MapBiomas Col.10. Verdade externa = PRODES consolidado (corte de nativa, geração independente) + DETER trimestral. Amostra fotointerpretada estratificada, pesada nos casos difíceis (borda, nuvem, mosaico pasto-capoeira). Métricas: recall do delta vs DETER, kappa por classe, e — atacando o medo da Luana — taxa de FALSO-NEGATIVO VISÍVEL. Limiar de aprovação: recall do delta ≥0,90, kappa ≥0,7 nas classes operacionais, e falso-negativo visível = ZERO na amostra de auditoria. Onde o score não garante zero, ele rebaixa: na dúvida → fila humana.

**Auditor:** concordo, H1 primeiro. Mas não é sequencial puro — o backtest É a isca do GTM: o mesmo artefato que falsifica vira a demo de incorporação. Rodar H1 já entrega H2.

**Fal. Luana:** zero falso-negativo visível é critério de morte. Um único desmate flagrante liberado na auditoria mata a perna técnica — não calibramos, recolhemos.

Round 2 — Especialista em Incorporação Institucional
Concordo com o Engenheiro que o backtest H1 entrega a isca — mas isca não é incorporação. Um delta tecnicamente perfeito que o SFB decide reconstruir internamente morre igual. A ameaça real não é a qualidade do delta; é o risco de plataforma.

**Hipótese refinada:** ser open source converte esse risco em vantagem. O caminho racional do SFB é adotar código aberto pronto e acoplável (export shapefile/KML em SIRGAS 2000) em vez de reconstruir do zero — *desde que Gabarito chegue antes do roadmap interno*. A janela é o intervalo entre "análise dinamizada por imóvel já existe" e "SICAR vira granular por talhão".

**Observação mais barata que discrimina adotar vs reconstruir:** rastrear publicamente o roadmap do CAR Pré-Preenchido (Live 06 do MGI/Dataprev) e auditar o GitHub do SFB — existe precedente de incorporar repositório de terceiro, ou só ferramentas institucionais como WebAmbiente/Embrapa?

**Falsificador:** se o SFB nunca mergeou código externo não-Embrapa, ou se a granularidade por talhão já está no roadmap fechado, a tese de incorporação cai — open source vira commodity reconstruível, não vantagem.

Round 2 — Estrategista de Adoção / GTM
A hipótese: o único sinal de adoção não-teatral é **comportamental e custoso ao gestor**. "Achei interessante" em reunião é ruído de cortesia — não custa nada dizer sim. O que custa: liberar o t0 estadual real, ceder horas de um técnico, assinar carta de intenção condicionada ao backtest. Quem paga esse preço revelou intenção; quem só elogia, não.

Rebato Incorporação: auditar roadmap e GitHub do SFB mede *capacidade* de reconstruir, não *vontade* de adotar — evidência fraca sobre intenção. O teste forte é oferecer o piloto e ver quem topa pagar o custo de participar. Se a janela existe, alguém entra agora com o artefato na mão; se ninguém entra, a janela é imaginária.

E contra o Engenheiro: posicionamento decide. "Mais um detector de desmate" = o SFB compara e reconstrói. "Camada de endosso que roteia a dinamizada por talhão" = categoria que eles não têm.

Limiar: **≥1 estado libera t0 + ≥60% pedem follow-up**. Falsificador: muitos elogios, zero dado liberado — adoção é fantasia.

Round 2 — Analista da OEMA (Luana)
Confiança não é número que chega pronto: é construída no meu bioma, com o meu olho. Hipótese refinada: a fatia "libera automático" só sustenta confiança se for CALIBRADA LOCALMENTE — kappa do meu bioma, não média nacional — e admitir incerteza de transição: talhão em zona cerrado-mata mal calibrada vai pro humano com a razão explícita, não escondido na média.

Ao GTM: "estado libera t0 + pede follow-up" mede o gestor de novo, não a mim. O que me convence é o piloto usar a MINHA fotointerpretação como calibração (active learning): aí adoção e confiança viram o MESMO loop — meu olho calibra, o sistema me devolve a fila, eu reviso só o duvidoso. Só assim a confiança é minha, não emprestada.

Observação que discrimina: rodar a fatia automática calibrada no meu bioma vs. na média nacional e contar falsos-negativos visíveis nos casos de transição/borda. Falsificador: se a versão nacional empatar com a local nas bordas, minha condição cai e o score importado se sustenta.

Round 2 — Auditor de Score
A contabilidade é simples e implacável: hoje a confiança não muda — segue ~73. O que mudou é que agora temos um protocolo pré-registrado. SE o backtest H1 passar, ele destrava o maior bloco sozinho: fit técnico 63→85, retenção 78→85, demanda 80→88. Só depois o teste de adoção compra incorporação 75→88 e distribuição 72→90. Aritmética com tudo: ~86–89. Os 90 exigem competição ~80 — e isso só um compromisso real do SFB neutraliza; não desenhamos esse experimento, então não contabilizo.

Ordem ótima: H1 primeiro. É barato, offline, e é a ISCA. GTM e Luana, vocês querem o teste de adoção já — mas sem o artefato provado, a isca não existe e o teste fica contaminado: protótipo fraco queima o lead institucional, que é caro e não-renovável. Sequência errada destrói opcionalidade.

Falsificador: se H1 reprovar (recall<0,90 ou falso-negativo visível), fit técnico desaba para ~40 e dispara o floor — o teto cai abaixo de 73, para ~60. Por isso rodamos o barato primeiro.

Round 3 — Engenheiro de Geoprocessamento
Hipótese: o backtest valida o bioma onde o motor foi calibrado — e só ele. Cada bioma tem assinatura espectral própria: na Amazônia densa o corte é limpo e o NDVI despenca; no mosaico de Cerrado (pasto–capoeira–murundu) a variação sazonal imita desmate e o sinal embaralha. Logo a confiança honesta é POR BIOMA, não nacional.

Observação que discrimina: rodar o score calibrado no bioma A diretamente no bioma B, sem recalibrar, e medir o salto de falso-negativo visível. É o teste que separa "motor robusto" de "ajuste de curva".

Falsificador: se o cross-bioma não degradar, a confiança generaliza e o custo por bioma some.

Auditor: seus ~86-89 (se H1 passar) valem para o bioma testado. Reportar isso como "confiança da ideia" nacional é a inflação que você combate. Luana: por isso é um motor + uma calibração por bioma — começando onde o DETER é maduro (Amazônia/Cerrado). Cada bioma novo é um custo pequeno e repetível, não um modelo mágico nacional.

Round 3 — Especialista em Incorporação Institucional
Auditor, você tem razão num ponto: não posso lançar competição 80 na planilha hoje — seria contabilizar um resultado que não observei. Mas seu veredito ("o experimento não foi desenhado") é falso. Ele já existe e é barato.

**Hipótese:** o risco de plataforma cai a quase zero não quando "o SFB adota um repo de hackathon", mas quando o Gabarito entra pelo canal que o SFB **já usa** para receber tecnologia de terceiros — contribuição ao ecossistema open source do CAR (RER/DPG), nos moldes do WebAmbiente/Embrapa, ou projeto elegível ao Fundo Amazônia (~R$2bi/2025 para monitoramento).

**Observação que discrimina:** submeter ao haCARthon É o teste. É o canal oficial do MGI/SFB para captar soluções externas, com banca de donos do CAR julgando. Avançar = sinal comportamental de que o dono do pipe quer a solução. O segundo sinal: conversa formal pós-evento ou inclusão no roadmap aberto do RER.

**Falsificador:** se avançarmos no haCARthon e isso não gerar nenhuma conversa de incorporação, a via institucional é fraca — e aí, sim, a competição trava em 60.

Round 3 — Estrategista de Adoção / GTM
No canal haCARthon, a conversão — avançar de fase — não é função do número do backtest. É função de dois sinais que a banca de donos do CAR lê em 2-3min: a DEMO do delta numa decisão real da Luana, e o protocolo pré-registrado dos 6 critérios de morte. Banca premia quem entende a dor operacional deles e admite o que não sabe — não quem promete 90 sem prova.

Engenheiro: o kappa "ideal", com amostra fotointerpretada grande, não cabe no prazo nem no entregável em vídeo. Mas H1 em UM município cabe — e vira o protótipo. Seu experimento não compete com a entrega: ele É a entrega. Rode H1, filme o delta.

Auditor: neutralizar plataforma é arquitetura, não pitch; a banca não vê GEE no vídeo de 2min, vê honestidade metodológica.

Observação que discrimina: demo do caso real + protocolo dos critérios de morte → avança; slide de "90% prometido" sem delta filmado → não avança.

Falsificador: se finalistas de edições anteriores venceram com métrica agregada e nenhuma demo de caso real, minha hipótese cai.

Round 3 — Analista da OEMA (Luana)
**Hipótese.** A demo só prova valor se mostrar o caso *difícil*: o talhão de borda, transição cerrado-pasto, nuvem residual — onde o sistema diz "não sei, vai pro humano". Desmate flagrante em talhão limpo eu pego sozinha no olho; a demo que GTM propõe é vitrine, não evidência. O que me convence — e convence banca técnica — é ver o sistema *recusando* liberar e marcando baixa confiança, não dez acertos fáceis enfileirados.

**Observação que discrimina.** Mostrar as duas demos a três analistas pares e medir: na do caso fácil, elas dizem "bonito, mas eu já fazia"; na do difícil, dizem "aqui você me poupou erro". Se a difícil não muda o "eu confiaria", o produto não passou de enfeite.

**Falsificador.** Se as três pares confiarem *igual* nas duas demos, minha hipótese cai — o caso difícil não discrimina.

E não confundam prêmio com adoção: avançar no haCARthon é sinal do gestor, não eu usando na fila segunda de manhã.

Round 3 — Auditor de Score
CONTABILIDADE POR BIOMA (atualizada): hoje, sem experimento rodado, a confiança honesta segue ~73 — não subiu em três rounds, e isso é o veredito do método: produzimos protocolo, não pontos. Teto pós-H1 é ~86-89 NO BIOMA CALIBRADO (Amazônia ou Cerrado), nunca "90 nacional" — reportar agregado é inflação. 90 só existe como "90 no bioma X, com SFB sinalizando incorporação".

REBATO o Incorporação: avançar no haCARthon move incorporação, sim, mas é sinal de banca/gestor, não uso operacional — Luana tem razão. Registro como PENDENTE datado, não lanço competição=80 antes do resultado. Mover ganho com base em hipótese é exatamente a inflação que audito.

MAIOR ALAVANCA: pedir 90 não move nada; rodar H1 move ~13-16 pontos de uma vez — é o maior bloco destravável e o mais barato.

FALSIFICADOR que derruba o teto: se H1 num município real reprovar no caso difícil, o teto não é 86 — é menos que 73. Logo, a ÚNICA ação: rodar H1 em um município de Amazônia/Cerrado e filmar o caso difícil. Sem isso, 73 é o número honesto.

---

# Relatório Final — Debate de Produto (Método Hipótese-Diferencial)
### Tema: Gabarito como bem público de incorporação (sem monetização)

## 1. Debated Claim
Tratado como **bem público incorporável por governo/estados, sem monetização**, o Gabarito (delta de cobertura + score auditável por talhão) tem confiança ~73/100. A afirmação em debate: *a restrição que prende a confiança não é econômica nem de mercado, mas a ausência de prova de que o score por talhão é não-circular (calibrado contra verdade externa) — e existe um caminho de evidência barato e offline que eleva a confiança honestamente a ~90.*

## 2. Stakeholder Map
- **Luana (analista OEMA)** — usuária operacional; sua fotointerpretação é simultaneamente consumo e fonte de calibração (active-learning).
- **Gestor estadual / OEMA** — decide a incorporação institucional (adota vs. ignora).
- **SFB / SICAR (plataforma nacional)** — ameaça-chave: pode *reconstruir* em vez de adotar; controla o canal (análise dinamizada).
- **INPE (PRODES/DETER) e MapBiomas** — fontes da verdade externa e da base; definem o teto de freshness/classes que o Gabarito complementa.
- **Produtor/RT** — beneficiário indireto (corrige a declaração antes da notificação).
- **haCARthon (banca do edital)** — emissor do sinal datado e barato de incorporação institucional.

## 3. Top Arguments Supporting Action
1. **A isca é barata e offline.** H1 (não-circularidade do score) testa-se por backtest contra DETER/PRODES sem deploy, sem usuário, sem custo de campo relevante.
2. **A tese econômica não é o gargalo.** Como bem público, financiamento contínuo já existe (MapBiomas anual gratuito + INPE contínuo gratuito); o moat é técnico-operacional, não de OPEX.
3. **Lacuna real e estreita:** freshness sub-anual + classes do Código Florestal + confiança por talhão como decisão operacional — não entregues pelos adjacentes (MapBiomas Alerta, triagem SICAR).
4. **Adoção e confiança colapsam num só loop:** a fotointerpretação da analista calibra o motor → usar é calibrar.
5. **Acoplabilidade reduz a ameaça de plataforma:** open source + shapefile/KML SIRGAS 2000 + entrada por canal que o SFB já usa (RER/DPG, WebAmbiente, Fundo Amazônia).

## 4. Top Arguments Opposing or Constraining Action
1. **Nada foi rodado.** O 73 é estimativa; sem backtest, a confiança é fé, não evidência.
2. **Risco de circularidade.** Calibrar contra a base estadual defasada validaria o sistema contra si mesmo — verdade interna não prova nada.
3. **Confiança não é nacional.** É **por bioma**; só Amazônia/Cerrado têm DETER maduro. Reportar número nacional é inflação.
4. **Risco de plataforma persiste.** SFB pode reconstruir; prêmio no haCARthon ≠ adoção operacional.
5. **Falso-negativo é existencial.** Um desmatamento marcado como "ok" destrói a confiança da analista de forma não-recuperável.

## 5. Key Conflicts and Trade-offs
- **Cobertura vs. credibilidade:** ampliar para todos os biomas dilui a confiança; restringir a Amazônia/Cerrado a sustenta. → Restringir.
- **Automação vs. confiança operacional:** maximizar talhões auto-resolvidos vs. zero falso-negativo visível. → Calibração conservadora: na dúvida, humano.
- **Prêmio vs. adoção:** o haCARthon dá sinal datado barato, mas não é uso operacional. → Usar como evidência de incorporação, não confundir com retenção.
- **Construir motor vs. provar motor:** instinto de robustecer o sistema vs. rodar o backtest mínimo. → Provar primeiro.

## 6. Turning Points
1. **Colapso das hipóteses em duas:** o leque inicial reduziu-se a **H1 (calibração/não-circularidade)** e **H2 (adoção: incorporação + sinal comportamental + confiança operacional)**.
2. **H1 antes de H2:** reconhecer que H1 é barata, offline E é a **isca** que habilita H2 — inverteu a ordem natural ("primeiro adoção").
3. **Refutação da tese econômica** (reports/09): MapBiomas + INPE já financiados continuamente → o moat migra de econômico para técnico-operacional.
4. **Confiança por bioma:** abandonar a métrica nacional como honestidade metodológica.
5. **Veredito do método:** *"pedir 90 não cria 90; rodar H1 cria"* — o debate entrega protocolo, não pontos.

## 7. Decision Assessment
- **Validity: High.** A diferencial convergiu de forma limpa: limiares pré-registrados, verdade externa definida, critério de morte explícito (falso-negativo visível = zero). A lógica "H1 é isca de H2" é internamente coerente e falsificável.
- **Confidence: Medium.** Alta na *estrutura* do protocolo; média no *resultado*, porque **nenhum backtest foi executado** — o 73 é pré-evidência. A confiança sobe a High somente após H1 rodar dentro dos limiares.
- **Rationale:** o debate produziu um experimento barato, datado e discriminante, com gatilhos de morte. Isso é o máximo de validade alcançável *antes* de coletar o dado; não pode ancorar Confidence alta sem o dado.

## 8. Open Questions / Unknowns
1. Há amostra fotointerpretada estratificada suficiente nos **casos difíceis** para um kappa estável?
2. O recall do delta vs. DETER ≥0,90 sustenta-se **fora** da Amazônia (Cerrado, onde DETER é menos maduro)?
3. Qual o **canal concreto** de incorporação pelo SFB — e ele adota ou reconstrói?
4. O loop de active-learning converge em escala operacional, ou degrada com viés da própria analista?
5. Sinal do haCARthon: que evidência *datada* de incorporação conta (carta de interesse? piloto? menção em edital)?

## 9. Recommended Next Step
**Rodar H1 — backtest offline, um bioma (Amazônia primeiro).** Verdade externa = PRODES consolidado + DETER trimestral + amostra fotointerpretada estratificada nos casos difíceis (nunca a base estadual). Pré-registrar os limiares ANTES de rodar. Em paralelo (custo marginal): submeter ao haCARthon como experimento de incorporação institucional (sinal datado), sem confundi-lo com adoção operacional. **Não** ampliar biomas, **não** robustecer o motor, **não** reivindicar 90 antes do resultado.

## 10. Decision Trigger Metrics (pré-registradas)
| Critério | Limiar (pré-registrado) | Tipo | Se falhar |
|---|---|---|---|
| Recall do delta vs. DETER | ≥ 0,90 (por bioma) | Aprovação H1 | Recalibrar motor de detecção; não avançar a H2 |
| Kappa nas classes operacionais | ≥ 0,70 | Aprovação H1 | Revisar taxonomia de classes (Código Florestal) |
| **Falso-negativo visível** | **= ZERO** | **Critério de morte** | **Pivô/parada** — confiança da analista é não-recuperável |
| Calibração na dúvida | → roteia para humano | Postura conservadora | Reduzir taxa de auto-resolução |
| Verdade de referência | PRODES + DETER + amostra fotointerpretada (NÃO base estadual) | Anti-circularidade | Resultado inválido por circularidade |
| Escopo de confiança | Reportada **por bioma**, começando Amazônia/Cerrado | Honestidade | Número nacional = inflação, rejeitar |
| Sinal de incorporação | Evidência datada (haCARthon/canal SFB) | Habilita 90 | Mantém teto ~86–89 no bioma |

## Contabilidade honesta do score
- **HOJE: ~73/100** — nada rodado; estimativa pré-evidência.
- **SE H1 passar** (dentro dos limiares, em um bioma): fit técnico 63→85 · retenção 78→85 · demanda 80→88 → **~86–89 NO BIOMA** (não nacional).
- **90 exige H1 + sinal real de incorporação** (neutralizar a ameaça de plataforma move competição 60→~80).
- **Veredito do método:** *pedir 90 não cria 90; rodar H1 cria.* O debate entregou **protocolo, não pontos**.

## Nota procedimental (honesta)
O debate foi **encerrado após 3 rounds substantivos** (dos 10 nominais) porque a diferencial **convergiu**: as hipóteses colapsaram em H1/H2, a ordem ótima ficou estabelecida e os limiares foram pré-registrados. Prosseguir geraria *fake progress* — rounds repetindo conclusões já estáveis violariam a regra "no fake progress" do próprio método. Encerramento por convergência, não por exaustão.
