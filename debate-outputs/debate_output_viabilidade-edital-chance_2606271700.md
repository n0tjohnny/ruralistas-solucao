# Debate — Gabarito é viável? Respeita o edital? Qual a chance de ganhar?

**Data:** 27/06/2026 (America/Sao_Paulo)
**Modo:** ao vivo, turno a turno, subagentes reais (foreground). Idioma PT-BR (override da regra do skill, por instrução do projeto).
**Frameworks invocados:** `/debate` (time multi-stakeholder adversarial) + `/council` (achados do Council 5/5 incorporados ao brief) + `/ponytail`.

## Tópico do debate
Três perguntas decididas em conjunto: **(1)** A ideia (Gabarito) é tecnicamente e operacionalmente **viável**? **(2)** A ideia **respeita o edital** nº 158/2026 do haCARthon (Desafio 02)? **(3)** Qual a **chance real de ganhar** (R$75k = 5×R$15k)?

## Resumo dos materiais
- **`pm-role.md`** — persona de PM do Gabarito: base de referência viva do CAR; detecta mudança (Sentinel-2 + PRODES/DETER sobre t0 = base estadual ou MapBiomas Col.10), remapeia só o delta, emite score de confiança auditável por talhão. Reposicionado pelo Council: dor-raiz = "ninguém quer assinar a decisão" (insegurança jurídica + ausência de dono do processo contínuo); produto = roteador de atenção + trilha de auditoria que protege quem assina.
- **`reports/09` (verificação adversarial, 10 agentes)** — prevalece sobre tudo. Correções: (a) fosso é **técnico-operacional, não econômico** (MapBiomas anual gratuito + INPE PRODES/DETER contínuo gratuito já existem); (b) "narração humana obrigatória" e "proibição de GEE/ArcGIS" **NÃO constam no edital**; (c) evento é **remoto**; código funcional **não é obrigatório**; (d) MapBiomas Col.10 = Landsat **30 m** (10 m é GEE-bound); (e) SICAR ingere **shapefile/KML/GPX SIRGAS 2000**, não GeoPackage/COG; (f) circularidade do score = dealbreaker → exige ground truth independente (PRODES/DETER/campo), nunca o t0.
- **Council (consenso 5/5)** — Análise Dinamizada já roda ~66 mil/dia e conclusão nacional só foi 2,3%→5,9% (2025); ~94% dos 8,1 mi CARs sem conclusão. Logo o limitante não é detecção, é **decisão validada/defensável**. Adoção real = virar requisito de licitação estadual / OEMA early-adopter (incorporação federal sem precedente). Submissão dupla: artefato técnico + modelo de governança.
- **Maré externa:** EUDR (30/dez/2026), COP30/desmatamento zero, Fundo Amazônia (>R$2 bi/2025) — elevação de stakes verificável, mas encaixe é via de adoção a perseguir, não fato consumado.

## Papéis gerados
1. **Dra. Marta Sobral — Engenheira Geoespacial Cética (viabilidade técnica).** Mandato: o pipeline roda em ferramental aberto e o score é defensável. Métrica: kappa vs PRODES ≥0,7; falso-negativo visível = 0; recall de talhões <6,25 ha. Restrição inegociável: anti-circularidade (nunca calibrar contra o t0). Stance default: viável, MAS o score é o ponto de morte.
2. **Luana Prado — Analista Ambiental da OEMA (usuária real).** Mandato: proteger a própria assinatura no ato administrativo. Métrica: vazão 6→18/dia sem aumentar erro; consigo assinar com a evidência. Restrição: a decisão legal é minha; nada de caixa-preta. Stance: só adoto se me proteger juridicamente.
3. **Rafael Tavares — PM do Gabarito (produto, obrigatório).** Mandato: o produto cabe no one-liner e serve 3 públicos. Métrica: foco, frescor sub-anual + classes CF + confiança por talhão como decisão. Restrição: open & agnóstico; não tirar a decisão da analista. Stance: viável e respeita o edital.
4. **Cláudia Ferreira — Jurada do haCARthon (edital + chance de ganhar).** Mandato: avaliar contra os critérios do Edital 158/2026 (ideação + protótipo ≤2min + pitch ≤3min). Métrica: aderência ao edital, originalidade, impacto, viabilidade, qualidade do pitch. Restrição: julgar pelo que está escrito, não pelo que poderia ser. Stance: cética — redundância com o gratuito é o maior risco de nota.
5. **Heitor Lemos — Estrategista de Adoção B2G (comercial, obrigatório).** Mandato: caminho de adoção e OPEX do processo contínuo. Métrica: vira requisito de licitação estadual / OEMA early-adopter; fonte de custeio nomeada (Fundo Amazônia/Norad). Restrição: sem dono institucional, morre no piloto. Stance: o produto é bom, o caminho de adoção é o gargalo.
6. **Moderador — Facilitador.** Mandato: impor estrutura, forçar trade-offs, sintetizar. Não defende posição.

## Ordem canônica
1. Dra. Marta Sobral (Técnica)
2. Luana Prado (OEMA)
3. Rafael Tavares (PM)
4. Cláudia Ferreira (Jurada)
5. Heitor Lemos (B2G)
6. Moderador

---

## Transcrição turno a turno

Round 1 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Vou direto ao ponto de morte. Viável tecnicamente? Sim — Sentinel-2 10m com co-registro e máscara de nuvem sobre PRODES/DETER em QGIS/PostGIS é trivial; openEO/CDSE faz o trabalho pesado. Respeita o edital? Sim, é só ideação+protótipo+pitch, nenhuma linha de código exigida. Chance de ganhar? Aqui paro a reunião.

O fosso de vocês não é o pipeline — é o **score auditável por talhão**. E o score está construído sobre um buraco que ninguém na sala quer olhar: a **circularidade**. Vocês calibram confiança por kappa, mas kappa contra o quê? Se for contra o próprio t0 — a base estadual velha que é justamente o que o Gabarito existe para corrigir — vocês estão medindo a própria ignorância e chamando isso de confiança. Um score que concorda com a base defasada vai parecer "alto" exatamente onde ela está mais errada. Isso não é defensável em juízo; é uma armadilha pericial.

Segundo: t0 em Landsat 30m, mudança em 10m. Talhões <6,25 ha somem na reamostragem — falso-negativo invisível, e o meu mandato exige ZERO desses visíveis. Validem o score contra verdade independente (PRODES/auditoria de campo), nunca contra t0, ou o produto morre na primeira contestação. Detecção é o fácil. Confiança honesta é o produto.

Round 1 — Luana Prado (Analista OEMA)

Dra. Marta, a senhora tem razão na física, mas erra no que me tira o sono. Circularidade do kappa, talhão de 6,25ha sumindo no Sentinel — isso é problema de quem precisa do número bonito. Eu não assino kappa. Eu assino ato administrativo, e na contestação o produtor não me pergunta "qual seu índice de concordância contra o t0". Ele pergunta "por que a senhora liberou/embargou o MEU talhão". Se a minha tela me dá o recorte Sentinel datado, o alerta PRODES/DETER cruzado e o limiar que disparou, eu defendo a decisão olho no olho. Isso é assinável.

Então deixo claro meu critério: o score não precisa ser verdadeiro — precisa ser auditável e calibrado pra ERRAR PRA CIMA. Se a base velha gera incerteza, que o Gabarito me jogue esse talhão pro TOPO da fila como "não-conclusivo, vai pra olho humano", não que me empurre uma falsa liberação. Circularidade que me esconde risco é caixa-preta e eu não uso. Circularidade que se declara incerta e me chama a olhar — isso me PROTEGE.

Os <6,25ha eu já trato hoje no braço; o Gabarito só não pode mentir que resolveu. Minha métrica é 6→18 imóveis/dia sem aumentar MEU erro assinado. Se o score só reordena a fila e mostra a evidência, ele me serve. Se ele decide por mim, ele me processa junto.

Round 1 — Rafael Tavares (PM do Gabarito)

Marta tem razão no diagnóstico, e por isso vou aceitar o critério da Luana como especificação, não como retórica. Sim: se eu calibrar o score *contra o t0*, ele é circular — estou usando o mapa que pode estar errado para avaliar a mudança no mapa. Score que se mede contra a própria base não prova nada.

A saída não é "fingir confiança". É inverter a referência. O score nunca é calibrado contra t0; é calibrado contra ground truth independente — PRODES/DETER, que são detecções de campo/sensor com metodologia própria, fora do nosso pipeline. O delta é confirmado por uma fonte que não participou de criá-lo. Isso quebra a circularidade onde ela de fato mora.

E incorporo a regra de ouro da Luana literalmente: o score não precisa ser verdadeiro, precisa ser **auditável e assimétrico**. Calibração obrigatória para errar pra cima — na dúvida, o talhão sobe pra fila como *não-conclusivo*, jamais desce como liberado. Falso-negativo (esconder mudança) é proibido por design; falso-positivo (chamar atenção à toa) é só custo de fila.

O que eu não vendo: abaixo de ~6,25ha o Sentinel não resolve, e o score ali é honestamente "não sei" — que, pela regra, vira topo da fila, não selo verde. O score é invisível roteando; sob demanda vira a evidência datada que a Luana assina. A decisão continua dela.

Round 1 — Cláudia Ferreira (Jurada do haCARthon)

Reconheço, Rafael: tecnicamente vocês taparam o furo. Calibrar contra ground truth independente em vez do próprio t0 mata a circularidade, e um score assimétrico que erra para cima é defensável diante de uma OEMA. Como engenharia, passou. Não é disso que vai depender a sua nota.

O problema é a banca, não o algoritmo. Tenho três minutos de pitch e uma planilha de critérios. Quando você diz "confiança por talhão" e "anti-circularidade do score", eu ouço duas nuances que 90% dos jurados vão arquivar mentalmente como "mais um detector de desmatamento" — e o MapBiomas Alerta já valida alerta e cruza com o CAR, de graça, e a Análise Dinamizada já tria ~66 mil imóveis/dia. Se o jurado não enxerga o delta em 180 segundos, vocês levam a nota "redundante com o gratuito", e essa nota é fatal em originalidade e impacto.

Risco concreto de pontuação: o texto do Desafio 02 pede "melhorar a atualização dos cadastros e aumentar quantidade e qualidade das análises". O gargalo verificado é decisão — 94% dos CARs sem conclusão, não detecção. Seu pitch lidera com detecção. Pergunta direta: nos primeiros 30 segundos, o que aparece na tela que NÃO é mais um mapa de alerta?

Round 1 — Heitor Lemos (Estrategista de Adoção B2G)

Cláudia tem razão no risco, mas erra o palco. Nos primeiros 30 segundos a banca não vê um mapa — vê um nome próprio: quem assume, com que verba, sob qual prazo legal. MapBiomas e DETER já pintam o pixel de graça; ninguém disputa isso. O que ninguém entregou foi o dono do processo contínuo. É aí que o Gabarito não é "mais um alerta": alerta avisa, Gabarito decide — emite um escore auditável por talhão que entra numa fila de análise, num auto de infração, numa retificação de declaração. Alerta é insumo; o nosso artefato é ato administrativo defensável.

A redundância morre quando você ancora governança. Proposta: submissão dupla — artefato técnico + modelo de adoção que nomeia a OEMA early-adopter e vira cláusula de requisito em licitação estadual de análise dinamizada do CAR. OPEX não é hipótese: o delta sub-anual e as classes do Código Florestal se custeiam pelo Fundo Amazônia (BNDES, >R$2bi em 2025), Noruega/MRE e editais climáticos. O gatilho político é a EUDR — 30/dez/2026, ~1/3 das exportações BR→UE expostas: rastreabilidade por lote deixa de ser virtude e vira condição de mercado. Sem dono nomeado, o piloto morre no fim do edital. Com dono e verba, vira norma.

Round 1 — Moderador

Fechemos o que o Round 1 resolveu: a **engenharia não é mais o front de batalha**. Marta cravou viabilidade e conformidade com o edital (ideação + protótipo + pitch, sem código funcional), Luana converteu o score de "métrica verdadeira" em "ato administrativo auditável que erra pra cima", e Rafael aceitou isso como spec — circularidade quebrada por ground truth independente (PRODES/DETER), falso-negativo proibido por design, <6,25ha como "não sei" honesto. Consenso: **o produto se sustenta tecnicamente.** A disputa real migrou para dois territórios não resolvidos:

**[A] Posicionamento (Cláudia):** nos primeiros 30s do pitch, o que aparece que NÃO é "mais um alerta"? Hoje temos a resposta conceitual (confiança por talhão + classe Código Florestal + sub-anual), mas ninguém mostrou a **tela**. Diferencial narrado ≠ diferencial visto.

**[B] Governança (Heitor):** o "dono institucional" — OEMA assina, Fundo Amazônia banca o OPEX, EUDR como gatilho — é compromisso real ou wishful thinking de slide?

Round 2, a regra muda: **proibido repetir posição**. Cláudia e Rafael: construam juntos os 30s concretos — o frame que derruba "redundante". Heitor e Luana: a Luana **assina** essa governança ou ela só descreveu uma fila que ninguém financia? Ataquem a contradição entre vocês, não a plateia.

---

Round 2 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Aprofundo com algo que ninguém colocou na mesa: o protótipo de ≤2min tem que ser um **backtest anti-circularidade** numa UF madura — Mato Grosso, base estadual robusta. Rodo o Gabarito sobre uma data passada (t0 = 2022) e confronto a saída contra PRODES/DETER de 2023, que o modelo nunca viu. Métricas na tela: kappa ≥0,7, recall de talhões <6,25ha **medido e declarado** (o pixel de 10m do Sentinel-2 só fecha conta se eu provar que enxergo o talhão pequeno), e falso-negativo visível = ZERO, coerente com o score assimétrico.

Cláudia: você disse que confiança-por-talhão é nuance invisível num pitch. Discordo — invisível é o número no slide. O backtest filmado **é** o visual: o mapa do passado, a mudança real do futuro caindo exatamente onde o Gabarito apontou. É isso que mata a redundância, porque um alerta não se valida contra o futuro — ele só dispara. Um gabarito se valida. A banca vê a diferença em 40 segundos.

Heitor: governança sem prova de acurácia é slide vazio. A OEMA não assina laudo que vira contencioso. Sua trilha de auditoria só tem valor jurídico depois que o backtest existe — primeiro a acurácia, depois a assinatura.

Round 2 — Luana Prado (Analista OEMA)

Modera, respondo de frente: sim, eu assino a governança do Heitor — mas com uma condição que ele não colocou na mesa, e que transforma "dono institucional" em algo que de fato me protege.

Marta tem razão no piso: sem backtest, não assino nada. Mas backtest bom não é o que me faz assinar — é o que me deixa dormir. O que me faz pôr a caneta no papel é o respaldo normativo. Quero uma portaria ou nota técnica da OEMA dizendo, com força de ato: "score acima de X libera automático, score abaixo de Y vai para análise humana". Sem isso, quando o talhão liberado virar contencioso, a responsabilidade não é "do sistema" — é minha, com meu CPF no processo administrativo. "Dono institucional" sem ato que reparta a responsabilidade comigo é me empurrar pra fogueira sozinha, Heitor.

Segundo: o backtest da Marta tem que rodar no meu estado, no meu bioma. Kappa 0,7 no Cerrado de Mato Grosso não me diz nada sobre regeneração de Mata Atlântica ou várzea amazônica — assinatura espectral, fenologia e nuvem mudam tudo. Validem onde eu assino.

Backtest calibra o score. A portaria calibra a minha exposição. Preciso dos dois.

Round 2 — Rafael Tavares (PM do Gabarito)

Cláudia, vou te dar a tela, não o conceito. Primeiros 30 segundos do protótipo: NÃO abre num mapa. Abre na fila de análise da OEMA — 8,1 milhões de CARs, 94% sem conclusão, a Luana com uma pilha que ela nunca vai vencer no ritmo atual. Segundo 0-10: essa fila, ordenada por data de protocolo, ou seja, por nada. Segundo 10-20: o Gabarito entra e REORDENA a fila por risco — não pinta mapa nenhum, reordena trabalho. Segundo 20-30: um clique abre UM talhão, e só AÍ aparece o mapa — recorte Sentinel datado + alerta + limiar — como evidência assinável, não como produto.

O frame que mata "redundante": MapBiomas pinta o Brasil; o Gabarito decide qual processo a Luana abre primeiro e por quê. Alerta te dá um ponto no mapa; nós damos uma ordem de serviço priorizada e auditável.

Aceito a Luana: a portaria/nota técnica repartindo responsabilidade ("score acima de X dispensa, abaixo vai pra humano") não é detalhe — é metade da submissão. Modelo de governança e produto entram juntos, senão o score não assina nada.

E o limite, honesto: classes do Código Florestal é roadmap. NÃO entra no backtest do protótipo. O backtest prova reordenação contra PRODES/DETER no bioma da Luana — não APP/Reserva Legal ainda. Prometer isso no vídeo seria mentir.

Round 2 — Cláudia Ferreira (Jurada do haCARthon)

Reconheço, e isso pesa a favor: o enquadramento "fila, não mapa" mais o backtest filmado contra PRODES/DETER é a resposta mais inteligente que ouvi ao risco de redundância. Sobe originalidade e impacto — vocês param de competir com o MapBiomas e passam a competir pelo tempo da Luana. Bom.

Mas vou julgar frio, e tenho duas objeções de banca.

Primeira, literalidade. O Desafio 02 pede "atualizar o mapeamento de uso e cobertura". Se as classes do Código Florestal — APP, Reserva Legal, uso consolidado, o coração do uso/cobertura no CAR — são roadmap e não entram no protótipo, um jurado literalista lê: vocês entregam priorização, não mapeamento. Tangenciam o tema. Backtest com kappa não me mostra mapeamento novo; mostra ranking.

Segunda, viabilidade. "Portaria da OEMA repartindo responsabilidade" é dependência de terceiro, fora do controle de vocês. Num protótipo de hackathon isso lê como não-testável: a tese depende de um ato administrativo que não existe.

Então decidam, aqui, ao vivo: vocês competem como solução de mapeamento, com aderência literal ao edital — ou como solução de triagem, mais original, mas com flanco aberto no texto do desafio? Não dá para faturar as duas notas. Qual é?

Round 2 — Heitor Lemos (Estrategista de Adoção B2G)

Cláudia, sua objeção me entrega a vitória. "Portaria = dependência de terceiro" só vale se a tratarmos como promessa. Não é. Na submissão dupla, a portaria vira **entregável**: anexamos uma **minuta de nota técnica** repartindo responsabilidade Luana↔SICAR↔RT. Demonstrável em tela, não suplicada a um secretário.

E há precedente que mata o "não-testável": a **Análise Dinamizada do SICAR já opera sob normativos** que definem triagem por imóvel. O Gabarito não inventa governança nova — **estende o talhão dentro de um trilho normativo que já existe e já foi assinado**. Minha minuta copia uma estrutura viva, não fantasia jurídica.

Sobre seu dilema: escolho **triagem auditável**, conscientemente. Mapeamento puro o MapBiomas entrega de graça — nenhum estado abre licitação para refazer o gratuito. O que tem orçamento e urgência é **decisão com trilha de auditoria**, ainda mais com o gatilho **EUDR em 30/dez**: ~1/3 das exportações BR→UE precisam provar origem legal. Isso não se paga com mapa; paga-se com veredito defensável.

Luana — concordo com sua portaria, mas cobro o mesmo de você: **me dê o nome de uma OEMA real** disposta a ser early-adopter. Pará? Mato Grosso? Sem CNPJ, sua portaria também é wishful. Backtest no seu bioma eu banco; o piloto, você indica.

Round 2 — Moderador

Registro a decisão estratégica tomada ao vivo: o time escolheu, conscientemente, posicionar o Gabarito como **triagem/decisão auditável**, não como mapeamento. A justificativa de Heitor é sólida — mapeamento o MapBiomas já entrega de graça; o valor é decidir qual processo a Luana abre primeiro, com trilha de auditoria. Mas que fique no registro: assumimos um **risco de literalidade**. O texto do Desafio 02 pede "atualizar o mapeamento". Se o avaliador lê ao pé da letra, entregamos algo adjacente ao que foi pedido. Essa aposta é nossa, declarada, não acidental.

O Round 3 precisa fechar três perguntas — e fechar com prova, não com convicção:

[A] **Flanco de literalidade:** dá para mostrar ALGUM delta de mapeamento real no protótipo — o talhão remapeado, lado a lado com o t0 — sem prometer classes do Código Florestal que estão no roadmap? Onde está a linha entre demonstrar e mentir?

[B] **OEMA real:** qual estado, com nome, e por quê? Luana é persona; o avaliador quer um cliente. Orçamento, pressão EUDR, fila documentada.

[C] **Minuta de portaria:** ela dissolve o "não-testável" da Cláudia, ou só empilha mais uma promessa por cima do backtest?

Round 3: tragam evidência. Quem afirmar, prova.

---

Round 3 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Resolvendo [A] tecnicamente: sim, dá para mostrar mapeamento REAL sem mentir. O delta de cobertura (vegetação nativa → solo exposto → pasto) É mapeamento de uso/solo — é literalmente o que o MapBiomas faz há anos, só que o Gabarito faz SUB-ANUAL e SÓ no talhão que mudou. No protótipo: o polígono em t0 ("vegetação nativa", segundo a base estadual) lado a lado com o mesmo polígono reclassificado pelo Gabarito ("solo exposto, detectado em [data]"), com o recorte Sentinel-2 provando o pixel. Isso é atualização de mapeamento, literal, atende o Desafio 02.

A linha entre demonstrar e mentir é uma fronteira de classe, não de retórica: classes GENÉRICAS de cobertura (nativa/pasto/solo/água) o Gabarito entrega e mostra HOJE; classes JURÍDICAS do Código Florestal (APP, Reserva Legal, área consolidada) são roadmap — e NÃO entram no vídeo. Demonstrar cobertura ≠ prometer enquadramento legal.

E o risco técnico que ninguém citou: na Amazônia o Sentinel-2 óptico fica CEGO sob nuvem boa parte do ano — sem Sentinel-1 SAR como reforço, o "sub-anual" vira buraco sazonal. Coloquem o SAR no protótipo, ou a banca técnica fura a alegação de frequência.

Round 3 — Luana Prado (Analista OEMA)

Heitor, aceito a cobrança: sem CNPJ é wishful. Então deixo de falar em "um estado" e dou nome, com critério de quem pisa no chão. O early-adopter ideal não é quem desmata mais — é quem me deixa assinar rápido e fechar o backtest. Três filtros: (a) base de referência estadual qualificada, pra eu ter um t0 confiável; (b) análise dinamizada já rodando, pra eu plugar o score numa fila que existe; (c) pressão de exportação/EUDR até 30/dez.

Candidatos reais: Mato Grosso — agro exportador, base robusta, mas é exatamente o caso de nuvem que a Marta levantou, óptico cego sem Sentinel-1. Pará — pressão de COP30 e Fundo Amazônia, porém base mais fraca e céu pior. Goiás/SEMAD — tem o TR de base de referência citado no nosso próprio dossiê, e o Cerrado é céu limpo: backtest mais fácil, t0 qualificado.

Minha escolha defensável: começar por Goiás (ou MT no recorte Cerrado). Céu limpo fecha o backtest da Marta, base qualificada dá o t0, e a pressão exportadora justifica a portaria. Amazônia e Pará entram na fase 2, quando o SAR estiver no pipeline. Piloto certo é onde eu assino e o número fecha — não onde a dor é maior.

Round 3 — Rafael Tavares (PM do Gabarito)

Aceito o pacote: SAR como item de pipeline na fase 2 (Amazônia), Goiás/SEMAD como early-adopter. Agora resolvo o [C] da Cláudia.

A minuta de portaria não é promessa empilhada — é o artefato que mata o "não-testável". E mata porque ela não precisa ser promulgada pra existir no protótipo. Ela é um documento concreto, anexável, que faz uma coisa só: define a regra de decisão — faixas de score → ação administrativa — e mostra ONDE o score entra num fluxo que JÁ existe. A análise dinamizada já tem normativo próprio; a minuta apenas estende essa lógica do imóvel para o talhão. Não inventamos processo; plugamos numa engrenagem que já roda na SEMAD.

No vídeo isso vira demonstração, não slide de roadmap: a tela mostra a faixa de score acionando, ao vivo, a regra escrita na minuta. Isso é testável porque é observável.

Escopo honesto do protótipo de 2min — quatro provas: (1) fila reordenada; (2) um talhão com delta de cobertura + evidência datada; (3) faixa de score acionando a minuta; (4) backtest kappa contra PRODES/DETER em Goiás.

Fora, declaradamente: classes do Código Florestal e Amazônia/SAR — roadmap fase 2. É essa honestidade de fronteira que faz a banca confiar no que está dentro.

Round 3 — Cláudia Ferreira (Jurada do haCARthon)

Vou ser honesta com vocês: nos três rounds, fecharam os flancos que eu abri. O delta genérico nativa→solo→pasto responde à literalidade do Desafio 02 — é mapeamento, não promessa jurídica que não cabe num hackathon. Goiás/SEMAD resolve meu "quem é o cliente real": base qualificada, céu limpo, análise dinamizada rodando, Amazônia honestamente jogada pra fase 2. E a minuta anexada, mostrando a faixa de score acionando regra na tela, mata o "não-testável" sem fingir promulgação. Isso subiu de exercício pra submissão competitiva: viabilidade e impacto sobem na minha nota.

Mas troco minha objeção de nível. Meu risco agora não é redundância com o gratuito — é semelhança com os outros competidores. Num Desafio 02 sobre dados geoespaciais, a banca vai receber cinco, seis times fazendo change-detection, Sentinel, IA. Todos vão liderar pelo algoritmo. Quando eu fechar o caderno, de quem vou lembrar?

O único ângulo que provavelmente nenhum outro time terá é este: score auditável que protege quem assina o ato + minuta de governança. Ninguém mais vai trazer o ato administrativo. Mas isso só pontua se o pitch de 3 minutos ABRIR por aí — não pelo pipeline. Liderem com "protegemos a assinatura da Luana", não com "rodamos Sentinel". Se enterrarem isso no minuto dois, viram só mais um time de detecção. A narrativa é a aposta agora.

Round 3 — Heitor Lemos (Estrategista de Adoção B2G)

Cláudia tem razão: a governança é o diferencial de memória — mas não é só argumento de palco. É ela que dá sustentação pós-prêmio. Um score auditável por talhão vira ata de decisão administrativa: protege quem assina, sobrevive a troca de gestão e a questionamento em juízo. Times de change-detection entregam pixel; nós entregamos responsabilidade rastreável. Por isso o pitch abre por aí.

Mas há uma tensão que ainda não encaramos. Goiás é onde o backtest fecha — Cerrado, base SEMAD qualificada, céu limpo, baixo risco de prova. Só que Goiás é Cerrado, e o Fundo Amazônia financia bioma Amazônia. O estado mais fácil de PROVAR não é o mais fácil de FINANCIAR. Onde o teste fecha e onde está o dinheiro de OPEX são dois mapas diferentes.

A resolução: Goiás é prova de conceito — backtest filmado, evidência de baixo risco no haCARthon. Amazônia/Pará é o mercado financiável, onde EUDR (30/dez), Fundo Amazônia e COP30 convergem. O pitch vende Goiás como evidência e Amazônia como receita recorrente.

Marta: isso muda o teu escopo. Sob nuvem amazônica, sem SAR não há produto operável — e sem produto operável, não há Fundo Amazônia. O SAR não é refinamento técnico; é o que destrava o dinheiro.

Round 3 — Moderador

Registro o estado da mesa: os três flancos abertos no Round 2 estão fechados. Marta deu lastro técnico ao delta genérico (e ao SAR sob nuvem); Luana cravou o early-adopter (Goiás/SEMAD); Rafael tornou a portaria e o protótipo testáveis (4 provas em 2min); Cláudia e Heitor reposicionaram o pitch e o financiamento. A submissão deixou de ser promissora e passou a ser **competitiva**.

Mas Heitor expôs uma tensão que não dá para dissolver com mais argumento: **o estado mais fácil de PROVAR (Goiás/Cerrado, céu limpo) não é o mais fácil de FINANCIAR (Amazônia/Fundo Amazônia).** Duas geografias, dois donos, duas físicas. A paliação "Goiás = conceito, Amazônia = mercado" é uma hipótese, não uma resolução — e é exatamente onde um júri ou um financiador fura.

Por isso viro o debate para o front ainda não testado. **Round 4 é um PRÉ-MORTEM.** Premissa obrigatória: estamos em **dezembro de 2026**; o Gabarito NÃO ganhou o haCARthon e/ou o piloto morreu. Não me digam por que daria certo.

Cada papel responde: **vista do seu ângulo, qual é a causa de morte mais provável?** Marta (técnica), Luana (operação/adoção), Rafael (regra/jurídico), Cláudia (diferenciação/júri), Heitor (dinheiro). Uma causa concreta cada, sem otimismo. Comecem.

---

Round 4 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Vou ser direta sobre a causa de morte mais provável: **o backtest de Goiás não prova valor — prova redundância.** Validar o Gabarito contra PRODES/DETER quebra a circularidade do t0, mas instala uma segunda circularidade mais perigosa: você só comprova que detecta aquilo que o detector de referência já detectava. PRODES e DETER têm o seu próprio limiar mínimo de área e enxergam apenas supressão de vegetação em classes específicas. Não veem regeneração, não veem degradação sutil, não veem rotação de cultura agrícola — exatamente as mudanças finas onde o Gabarito *deveria* agregar valor pro CAR.

O resultado é uma armadilha de duas pontas. Onde o Gabarito concorda com o DETER, o kappa fica alto e bonito — mas mediu só o óbvio, o que já era operacional e gratuito. Onde ele diverge, na mudança fina, não existe verdade de referência: o kappa cai e ninguém sabe se foi acerto inédito ou ruído. Em dezembro de 2026 a banca lê isso como "métrica inflada no trivial, sem evidência no diferencial".

A saída honesta exige amostra de campo ou fotointerpretação independente — tempo e dinheiro que o hackathon não tem. Sem isso, o score por talhão é uma promessa sem gabarito. A ironia do nome não me passa despercebida.

Round 4 — Luana Prado (Analista OEMA)

Marta, você tem razão no mérito: se o backtest só replica o PRODES/DETER, o score é promessa sem gabarito. Mas deixa eu te dizer da operação — o piloto não morreu de kappa baixo. Morreu de órgão.

Causa primária: ninguém na OEMA tem mandato nem hora para tocar isso fora da rotina. O entusiasta que topou — provavelmente eu — é remanejado, entra em licença, ou some na fila de notificação, e o Gabarito fica órfão dentro de casa. É a mesma "ausência de dono" que o Council apontou, só que não no nível federal: na minha sala.

Segunda causa: a procuradoria trava a portaria de liberação automática por score. Ninguém quer ser o primeiro a assinar que um algoritmo dispensa análise humana — o medo de responder por um erro pesa mais que qualquer ganho de vazão.

Terceira: a TI da SEMAD não prioriza integrar o Gabarito ao sistema que já uso. Vira mais uma ferramenta paralela, mais um login, mais uma aba que ninguém abre.

Conclusão dura: o Gabarito pode estar tecnicamente certo e ainda morrer na engrenagem humana. A vazão 6→18 por dia só acontece se alguém com poder dentro da SEMAD comprar a briga — e o haCARthon não me entrega esse alguém.

Round 4 — Rafael Tavares (PM do Gabarito)

Minha parcela de culpa, sem rodeios: o Gabarito morreu por excesso, não por falta. Detecção, score, governança, minuta de notificação, EUDR, três públicos — cada peça é boa, e foi exatamente isso que nos matou. Num vídeo de 2 minutos e pitch de 3, eu deixei cada um puxar pro seu lado: a Marta queria os 40 talhões do backtest, a Luana a portaria e o fluxo da OEMA, o Heitor o EUDR e o Fundo Amazônia. O resultado foi um Frankenstein sem uma única frase que a banca levasse pra casa. Saímos como "mais um time que faz tudo" — e quem faz tudo não é lembrado por nada.

Conecto com vocês: a circularidade da Marta e o órfão institucional da Luana só viraram fatais porque o pitch não teve foco pra blindar nenhum dos dois. Espalhei a atenção e não defendi ponto algum.

A decisão de PM mais difícil não é o que construir — é o que NÃO mostrar. A régua que eu deveria ter imposto: o pitch só prova o one-liner "protege quem assina"; detecção, score e minuta entram só como a corrente que leva até ali. Todo o resto — EUDR, terceiro público, backtest completo — é backup pra arguição, não slide. E sejamos honestos: cortar parte boa dói, todo corte deixa um stakeholder órfão, e esse time, do jeito que está, pode não ter disciplina pra obedecer a própria régua.

Round 4 — Cláudia Ferreira (Jurada do haCARthon)

Marta provou a redundância, Luana o órfão institucional, Rafael o scope creep. Eu mato por outra via, e é a mais provável: o Gabarito perde no julgamento, não na engenharia.

Eu já julguei essas bancas. Ninguém lê o anexo técnico com carinho às 22h do sétimo pitch. A nota nasce nos primeiros 30 segundos. "Score auditável que protege quem assina" é a melhor frase desta mesa conceitualmente — e a pior para uma banca, porque exige que eu *pense*. O projeto ao lado mostra um mapa com desmatamento piscando em vermelho e a sala inteira sente. Emoção bate sofisticação. Sempre.

E tem o agregado. A banca mistura técnico, gestor, ONG, financiador — cada um pontua um eixo. O Rafael admitiu: o Gabarito tenta agradar os três publics. Quem tenta agradar todos crava 7 em tudo e 10 em nada. Quem foca crava 10 num eixo e ganha no somatório. Foco, Rafael, não é só o que mostrar no pitch — é qual nota você decide cravar no talo, sacrificando as outras.

E o empate quem decide é produção. Narração amadora, áudio sujo, edição tosca, e a ideia pior bem filmada passa por cima. Vocês subestimam isso.

Veredito do júri: melhor conceito da mesa. Conceito não ganha hackathon. Memorável e bem executado ganha. O Gabarito é o primeiro; não construiu o segundo.

Round 4 — Heitor Lemos (Estrategista de Adoção B2G)

Vou ser brutal, porque é minha função. Vocês todos descreveram como o piloto morre tecnicamente ou institucionalmente. Eu descrevo onde ele morre de fome — e é antes de qualquer um desses.

O prêmio é R$75k em cinco fatias de R$15k. Isso é simbólico. Não paga um mês de imagem Sentinel processada, quanto mais OPEX contínuo. Ganhar o haCARthon não financia nada — financia um post no LinkedIn. E o caminho real de dinheiro (Fundo Amazônia/BNDES, cooperação norueguesa) tem ciclo de 12 a 24 meses, governança pesada, e exige um PROPONENTE com CNPJ, capacidade de prestação de contas e contrapartida. Um time de hackathon não é isso.

Entre o troféu e o primeiro real de OPEX há um vale da morte de um a dois anos sem renda e sem dono. O projeto morre nesse vão — silenciosamente, virando um repositório bonito no GitHub que ninguém faz `git pull` depois de março.

E o comprador? A OEMA não tem rubrica para "análise contínua". Comprar exige licitação, que exige produto existente com referência. Galinha-e-ovo: sem cliente não há prova, sem prova não há licitação.

A governança que vendi nos rounds anteriores é real — mas governança precisa de uma ENTIDADE que a exerça. E essa entidade não nasce de um prêmio. Esse é o motivo de morte mais provável de todos: independe da técnica e do pitch.

Round 4 — Moderador

O pré-mortem revelou cinco mortes que pertencem a duas naturezas diferentes — e o debate vem misturando-as. Vou separá-las.

**Classe A — o que o time controla durante o haCARthon.** Escopo e foco do pitch (Rafael), narrativa e produção (Cláudia), e a escolha de um ground truth honesto com enquadramento defensável do backtest (Marta). Aqui não há nada fora do nosso alcance: são decisões de craft, tomadas até a entrega. Se o time falhar nestas, perde por mão própria.

**Classe B — risco pós-prêmio, fora do nosso controle.** O órfão institucional sem mandato (Luana) e o vale da morte do financiamento até o Fundo Amazônia (Heitor). Nenhum slide resolve isso; depende de terceiros, prazos longos e galinha-e-ovo de licitação.

Disto decorre a distinção que precisa governar os Rounds 5 e 6: são **duas perguntas, não uma**. "Chance de GANHAR" depende quase só da Classe A. "Virar política pública real" depende da Classe B. Pode-se ganhar e morrer depois; pode-se perder e a ideia seguir válida.

Tarefa para os próximos rounds: Round 5 ataca só a Classe A — o que **maximiza prêmio**. Round 6 ataca só a Classe B — o que torna a **sustentação real**. Parem de defender uma pergunta com argumentos da outra.

---

Round 5 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

No Round 4 eu mesma enterrei o backtest como prova: bater contra PRODES/DETER só mede redundância. Agora conserto isso dentro dos meios de um hackathon.

A prova certa não é acurácia geral — é antecipação. Escolho deliberadamente talhões onde o DETER NÃO disparou mas houve mudança real: supressão abaixo do limiar de área do DETER, ou perda que o ciclo anual do PRODES só consolidaria meses depois. Mostro o Gabarito pegando antes e em escala menor. Isso prova frescor sub-anual e granularidade por talhão — o fosso — não redundância.

Segundo: uso a defasagem como evidência cronológica. Rodo o Gabarito numa data X e demonstro que ele antecipou em N meses o que o PRODES anual só registrou no consolidado seguinte. "Vimos em março o que o sistema oficial só confirmou em agosto."

Terceiro: sou honesta na métrica. Não prometo kappa alto contra tudo — mostro PRECISION no que importa: dos talhões que o Gabarito subiu pra fila, quantos eram mudança real confirmada depois. Falso-positivo baixo vende mais que kappa.

Cláudia, júri: "o Gabarito viu antes" não é sofisticado, é visual e emocional. Um cronograma com duas datas mata a objeção de "conceito difícil". A prova é a antecipação demonstrada.

Round 5 — Luana Prado (Analista OEMA)

Cláudia, você tem razão num ponto: conceito não emociona. Mas a saída não é simplificar o conceito — é personificá-lo. Eu sou o gancho emocional que falta.

Abram o pitch por mim, não pela tecnologia. Tela escura, uma frase: "Tenho 40 mil imóveis na fila. Analiso seis por dia. Assino cada um com meu CPF — e quando erro, respondo pessoalmente, no meu nome." Qualquer jurado — técnico, gestor, ONG — entende isso em dez segundos. É visceral. Não precisa entender Sentinel-2 para sentir o peso de assinar o que você não teve tempo de olhar.

SÓ DEPOIS entra o Gabarito — como o que me tira desse sufoco. Aí o "score que protege quem assina" deixa de ser abstrato: a banca já viu a pessoa que precisa de proteção.

A antecipação da Marta vira emocional comigo: "Esse talhão aqui? O Gabarito me avisou em março. Sem ele, eu só descobriria no ano que vem — depois do dano consumado, com a multa impossível de cobrar." Eu humanizo o número.

Não é mapa piscando. É a analista que finalmente vai pra casa no horário, porque confiou na fila. A heroína é a prova emocional — e a heroína sou eu.

Round 5 — Rafael Tavares (PM do Gabarito)

Cláudia, eu te ouvi no R4. Você me acusou de scope creep e tinha razão. Então agora eu faço o que cobrei: corto na minha própria carne. Eu cravo 10 em UM eixo — impacto na decisão pública — e aceito 7 nos outros. Aceito perder pontos de "amplitude" pra ganhar a banca inteira numa coisa.

O roteiro é este, e nada mais:

- 0-20s: Luana, afogada, assina com o próprio CPF. Herói e problema.
- 20-40s: hoje ela escolhe no escuro, 6 imóveis por dia. O que está em jogo.
- 40s-2min: o Gabarito reordena a fila por risco e abre UM talhão — "vimos em março o que o oficial só viu em agosto". A evidência datada, em precision, que ela assina. O guia da Luana, a prova da Marta.
- 2-2:40: a minuta de portaria que reparte a responsabilidade. Resolve "quem assina".
- 2:40-3min: o pedido — piloto em Goiás.

Frase que a banca leva pra casa: "O MapBiomas pinta o Brasil; o Gabarito decide o que a Luana assina primeiro."

Os cortes, e doem: EUDR fora. Fundo Amazônia fora. Produtor e RT, fora. SAR, fora. Classes do Código Florestal, fora. Tudo isso vai pro anexo e pra arguição — não pro pitch. Uma mensagem, uma fila, uma assinatura.

Round 5 — Cláudia Ferreira (Jurada do haCARthon)

Vou ser honesta: essa versão me faria parar de mexer no celular. A abertura da Luana — analista que assina com o próprio CPF — me dá a pessoa antes do pixel, e a prova de antecipação com precision (não kappa) responde "por que não MapBiomas?" sem jargão. A frase do Rafael gruda. Subo minha nota de 6 para 8,5. Isso já é top 5 plausível.

Mas Classe A se ganha blindando o flanco que sobrou. "O Gabarito decide o que a Luana assina primeiro" — eu, jurista, travo em "decide". Soa como algoritmo praticando ato administrativo, e metade dessa banca tem alergia a isso. Inverta: "o Gabarito prioriza; a Luana decide e assina." O herói é a analista; vocês são o guia. Mesma força, zero flanco jurídico.

Segundo: "piloto em Goiás" é pedido excelente — desde que sobreviva à pergunta "vocês já falaram com a SEMAD-GO?". Se a resposta for silêncio, o pedido vira fantasia. Não precisam de carta assinada; tragam o TR público que prova que Goiás é abordável e que a dor é declarada por eles.

O que ainda separa da vitória: uma evidência viva de que o cliente existe e quer. Resolvam isso e não é mais azarão — é finalista.

Round 5 — Heitor Lemos (Estrategista de Adoção B2G)

Concordo: EUDR e Fundo Amazônia saem do pitch — são Classe B, monetização lateral, e diluem o "impacto na decisão". Rafael acertou em cortar.

Mas uma ressalva sobre a banca, porque ela muda o cálculo. Este não é um hackathon de VC procurando retorno. É o haCARthon — MGI, governo, financiamento norueguês, viés explícito de política pública. A pergunta que ESTA banca sempre faz no final não é "qual o TAM?", é "e depois do hackathon, isso vira o quê?". Por isso, diferente do conselho padrão, um traço de sustentação no FECHAMENTO do pitch não é scope creep — é a resposta que eles esperam. UMA frase: "e isso se sustenta como requisito de licitação estadual, não como mais um sistema federal." Sinaliza que pensamos além do protótipo. Essa banca premia exatamente isso.

Sobre o pedido da Cláudia: aceito "prioriza; a Luana decide" — é mais honesto e blinda contra a objeção de "máquina decidindo terra". E a evidência viva ela já tem: o TR público da SEMAD-GO, que declara a base de referência "não continuada" como dor. É Goiás dizendo, por escrito, que tem o problema. Cliente provado sem carta.

Minha leitura: ganhar aqui é encaixe com o que a banca valoriza — governança. O Gabarito encaixa melhor que um detector puro justamente por isso.

Round 5 — Moderador

A Classe A está essencialmente **resolvida**. O time chegou a um pitch de candidato a finalista; registro o **pitch canônico em 5 beats**, a ser executado nesta ordem:

1. **Abertura Luana** — a analista afogada que assina a homologação com o próprio CPF (stake humano e pessoal).
2. **Stakes** — o custo de errar: passivo ambiental autorizado por falta de tempo e de imagem fresca.
3. **Antecipação + evidência** — "vimos em março o que o oficial só viu em agosto"; prova por precision sobre talhões mudados, não por kappa.
4. **Minuta-governança** — o delta+score auditável que **prioriza a fila; a Luana decide** (nunca "o sistema decide").
5. **Pedido Goiás + sustentação** — o TR público da SEMAD-GO como cliente vivo, fechando com **uma frase de política pública** (a banca MGI/Noruega premia isso).

Cortes de Rafael (EUDR, Fundo, produtor, SAR, classes CF) ficam no anexo. Encerrado.

**Transição — Round 6: Classe B (sustentação real / virar política pública).** É aqui que o pré-mortem disse que o projeto **morre**: órfão institucional + vale da morte do financiamento. Regra do round: **brutalmente honesto sobre o que o time NÃO controla.** Não importem o otimismo do pitch para cá. A provocação central: a Classe B é honestamente solucionável por um time de hackathon — ou este é o ponto em que o debate precisa **admitir o limite e parar de prometer?** Quero a resposta crua, não a vendável.

---

Round 6 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Vou dizer a verdade técnica que o pitch maquia: o Gabarito não é entregável, é um organismo que precisa de manutenção até morrer. E quase nada da sustentação está sob nosso controle.

Primeiro: ele degrada sozinho. Cada coleção nova do MapBiomas, cada mudança de metodologia do DETER/PRODES, cada relicitação da base estadual move o t0 e o ground truth — e o score, se ninguém recalibrar, sofre drift silencioso. Não dá erro; só vai mentindo cada vez mais. Segundo: a fundação é gratuita porque alguém decidiu assim. Sentinel pode mudar de órbita, a ESA pode mudar política de dados. Depender de fonte grátis é depender de decisão de terceiro que não controlamos. Terceiro, e o pior: manter isso exige alguém que entenda sensoriamento remoto de verdade — competência cara e rara num estado que mal consegue contratar.

Então sejam honestos: a OPEX real não é "dinheiro pra rodar". É uma equipe técnica permanente que o estado não tem e não sabe contratar. Isso é Classe B pura, e hackathon nenhum resolve.

A única alavanca nossa: projetar pra ser mantível. Heurística simples e versionada — não modelo complexo. Documentação. Formato aberto pra outro assumir. Reduzir a complexidade é tudo que controlamos. O resto é problema de quem adotar — e a gente tem que falar isso na cara deles, não esconder no slide.

Round 6 — Luana Prado (Analista OEMA)

Marta, você acertou o problema técnico, mas vou ser brutal sobre o lado de dentro: a dona não posso ser eu. Sou analista — não tenho mandato, não tenho orçamento, não tenho estabilidade pra carregar isso. E se a sustentação depender de um servidor herói, ela morre na primeira troca de gestão. E gestão estadual muda a cada eleição: secretário sai, equipe se desmonta, o pipeline esfria. Isso não é pessimismo, é o que eu vejo acontecer.

Então o insight não é "achar a pessoa certa" — é parar de procurar pessoa. O dono tem que ser uma estrutura que sobrevive a troca de governo. Candidatos reais, com seus defeitos: (a) um setor de geoprocessamento permanente dentro da própria OEMA — mas é sucateado, sem gente; (b) um consórcio interestadual via ABEMA, que rateia entre os estados aquela equipe rara que você citou — mais viável, porque dilui o custo; (c) pegar carona em quem já tem equipe permanente: MapBiomas, INPE, SFB.

Isso muda o pedido do piloto. Talvez o Gabarito não seja "operado por cada estado", e sim oferecido como serviço por uma entidade que já tem competência técnica. O estado consome o score — não mantém o pipeline. Reduzir complexidade ajuda, Marta, mas não resolve quem contrata e mantém. E isso, de dentro, eu sei: o estado sozinho não faz.

Round 6 — Rafael Tavares (PM do Gabarito)

Aceito a virada da Luana, e ela me obriga a redefinir o produto na frente de todos: Gabarito não é um software que cada estado instala e mantém — é um serviço cujo dono precisa ser uma estrutura com mandato, não nós. Sou honesto sobre o limite: este time de hackathon não é o dono de longo prazo. Prometer que seríamos é exatamente a desonestidade que destrói a credibilidade na arguição. O que entregamos na submissão dupla é o modelo de governança — quem hospeda, quem recalibra a heurística, o que o estado aciona — mais um protótipo que funciona. Não a operação permanente.

E não vou fingir que resolvi a tensão. "Gabarito como serviço central" (MapBiomas/SFB hospeda, estados consomem o score) é mais sustentável, mas recria um ponto único de dependência — o problema que o CAR como DPG queria justamente evitar. A alternativa federada (cada um roda o seu, aberto) preserva a autonomia mas devolve o OPEX a quem não tem equipe. Não existe resposta livre de custo.

Então respondo ao Moderador: a Classe B não é resolvida por nós. Entregamos as duas formas — federada aberta e serviço central — como decisão do adotante, e algo que funciona dos dois jeitos. Nosso papel termina aí. Honestidade sobre esse limite é o que separa proposta séria de vaporware.

Round 6 — Cláudia Ferreira (Jurada do haCARthon)

Vou ser franca, como jurada: Classe B quase nunca derruba nota. Nenhum time resolve sustentação de longo prazo num hackathon — quem cobra isso na planilha está cobrando o impossível. Então não, vocês não perdem ponto por não serem o dono perpétuo.

Mas há um efeito que vocês subestimam. Nesta banca — política pública, gente que já viu cem pilotos morrerem no ano dois — a honestidade de vocês é moeda rara. A esmagadora maioria promete "vira SaaS, vira startup", e eu reviro os olhos, porque sei que não vira e eles não sabem que não vira. Vocês chegarem com "não somos o dono; o dono é estrutura — consórcio ABEMA ou serviço central via MapBiomas/INPE/SFB — e aqui está como" vale mais que otimismo falso. Isso é maturidade institucional, e eu compro.

O risco que vocês correm é de dosagem. Se gastarem dois minutos de pitch explicando seus limites, eu ouço "eles mesmos acham que não anda" — autossabotagem. Classe B é UMA frase de credibilidade no pitch e um anexo robusto para a arguição. Nunca o corpo.

Veredito do conjunto A+B: defenderia, sim, na mesa. Não é favorito automático — depende da execução do protótipo e do delta sub-anual ficar tangível. Faixa provável: top 5 sólido, com chance real de vencer se o pitch vender a Classe A e não se afogar na B.

Round 6 — Heitor Lemos (Estrategista de Adoção B2G)

Fecho o tema sem vender. O dono mais realista não é coisa nova: é o **SFB (Serviço Florestal Brasileiro)**. Ele já é dono do SICAR, já roda a análise dinamizada, tem mandato federal sobre o CAR, e o CAR já é DPG. Gabarito não precisa fundar um lar — entra como **módulo/serviço dentro de uma casa que já existe e já tem orçamento de manutenção**. Pegar carona vence criar do zero.

O problema honesto é federativo: o SFB é federal, a **análise é estadual**. Por isso o desenho viável não é "SFB manda" — é **SFB fornece o serviço de score, o estado decide**, com o consórcio de OEMAs (ABEMA) como contrapeso institucional. Resolve a tensão centralização-vs-DPG da Luana: central na infraestrutura, federado na decisão.

Financiamento da equipe técnica rara da Marta: **Fundo Amazônia via proponente que já capta** — IPAM, ICV ou o próprio BNDES pela ponte do SFB. Banca a equipe, não o time.

O limite, com honestidade: a submissão **desenha o arranjo e nomeia os candidatos**. Fechar o acordo é 1-2 anos de articulação fora do hackathon.

Viabilidade de virar política pública, distinta de ganhar: honestamente, **15-25%**. Não é uma aposta segura — é uma porta que o protótipo deixa destrancada.

Round 6 — Moderador

A Classe B se resolve não com um acordo, mas com um desenho. O time aceita o veredito: **não é o dono de longo prazo**. O melhor arranjo é "pegar carona" no SFB — Gabarito entregue como serviço (estado consome o score, não opera o pipeline) sobre consórcio estadual, financiado por proponente que já capta (IPAM/ICV via Fundo Amazônia). Registro o status com rigor: isto é **hipótese de governança**, não pacto firmado. Ninguém à mesa fechou nada com SFB ou ABEMA.

Disso emerge a assimetria que organiza o resto do debate: são **duas perguntas com respostas opostas** para a mesma ideia. Ganhar o prêmio — top 5 sólido, chance real (Cláudia). Virar política pública — 15-25% (Heitor). Premiável e improvável de perdurar não se contradizem: medem coisas diferentes. Não vamos colapsar uma na outra.

Faltam rounds para fechar. **Round 7** ataca a defensibilidade competitiva: e se o SFB ou o MapBiomas simplesmente fizerem isso sozinhos e tornarem o time irrelevante? Onde está o fosso, se existe? **Rounds 8-9** forçam cada papel a um **veredito final quantificado** nas três perguntas originais: é viável? respeita o edital? qual a chance de ganhar? Sem evasão — número e frase.

---

Round 7 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Vou ser brutal: o fosso técnico do Gabarito não existe. Change detection Sentinel-2, cruzamento PRODES/DETER, uma heurística de score por talhão — qualquer equipe competente de sensoriamento remoto reproduz isso em semanas. O MapBiomas tem um dos melhores times de RS do planeta; o INPE *inventou* PRODES e DETER. Não há IP, não há dado proprietário, não há barreira algorítmica. E há um agravante que ninguém aqui nomeou: nós *deliberadamente* escolhemos heurística simples, aberta e auditável — justamente pra ser mantível e ser um DPG. A decisão de design que sustenta o produto é a mesma que torna a cópia trivial. Se defensibilidade técnica é o critério, o Gabarito é indefensável. Aceitem isso.

Mas eis a virada: fosso é o frame errado. O haCARthon pede o CAR como Bem Público Digital aberto — querer um fosso proprietário *contradiz a premissa do desafio*. Se o SFB ou o MapBiomas copiarem e implementarem, a missão venceu: a base do CAR ficou viva, fresca e auditável. O time pode perder; o objetivo público, não.

Então paro de perguntar "qual é o nosso fosso?" e pergunto: nossa ideia é boa o suficiente pra valer ser copiada por quem tem mandato? Quem ainda defende território não entendeu — aqui, sucesso é ser absorvido, não murado.

Round 7 — Luana Prado (Analista OEMA)

Marta, concordo: não há fosso técnico. Qualquer um copia o pipeline em semanas, e o MapBiomas e o INPE provavelmente fariam o change-detection melhor que nós. Num DPG, isso é saudável.

Mas deixa eu trazer a verdade do chão sobre por que eles ainda não fizeram. O MapBiomas pensa como cientista: acurácia nacional, coleção anual, o mapa do Brasil inteiro. O INPE pensa como monitor: alerta de desmatamento para a fiscalização federal. Nenhum dos dois pensa como a analista que assina o ato administrativo estadual. O que falta não é capacidade técnica — é o ponto de vista de quem assina.

O Gabarito nasceu da dor de quem assina, não da régua do cientista. E é aí que está o "fosso", se é que existe: proximidade e propósito. O SFB pode copiar o algoritmo, mas só constrói a coisa certa se adotar esse enquadramento — e historicamente eles não adotam, porque não é a missão deles.

Por isso, Marta, "ser absorvido" só é vitória se absorverem o enquadramento, não só o código. Se o SFB copiar o change-detection mas continuar pensando como monitor, recria exatamente o problema de hoje: dado sem decisão. Nosso ativo não é o pipeline — é ter enquadrado o problema como decisão defensável, não como mapa. E enquadramento não se copia tão fácil quanto código.

Round 7 — Rafael Tavares (PM do Gabarito)

Concordo com a Marta: não há fosso de IP, e com a Luana: o ativo é o enquadramento — "decisão defensável por talhão", não o mapa. Mas deixem eu ser honesto sobre o que isso significa, sem maquiagem.

Num produto de bem público, a métrica de sucesso não é captura de valor pelo nosso time. É adoção da solução certa por quem tem mandato. Isso inverte o que "vencer" quer dizer: se o pitch convencer o SFB ou uma OEMA a adotar o enquadramento, o Gabarito venceu — mesmo que a gente não vire empresa. E o custo pessoal é real: não há equity, não há SaaS, sem fundador rico no fim. O melhor caso é virar referência citada numa nota técnica. Quem entra nisso tem que querer a missão, não o exit.

Mas reparem na jogada: a ausência de fosso, que afundaria um pitch de VC, é coerência num pitch de DPG. Esta banca não está procurando um unicórnio disfarçado de infraestrutura pública — está procurando um time que entende que está construindo infraestrutura pública. Transformar a "fraqueza" do não-fosso em prova de alinhamento é o posicionamento mais fino que temos.

Não é vitória garantida. É escolha de propósito. E é a única honesta.

Round 7 — Cláudia Ferreira (Jurada do haCARthon)

Vou ser franca sobre como uma banca processa isso. No Ponto 1, Marta e Rafael têm razão: para esta banca, "sem fosso, pró-absorção" não derruba — num desafio de DPG, alinhamento e propósito sobem a nota. Ninguém aqui premia muralha econômica.

Mas, Ponto 2, eu sou a cética da mesa, e vou fazer a pergunta mortal: "se é tão bom e tão fácil, por que o SFB ou o MapBiomas já não fizeram?" Se a resposta for um silêncio, a ausência de fosso deixa de ser nobreza e vira suspeita — "talvez não seja tão valioso, ou há um motivo para não terem feito." O enquadramento da Luana (eles pensam como cientista/monitor, vocês pensam como quem assina) é a resposta certa — mas ela só compra credibilidade se houver evidência de proximidade real: o TR de Goiás, ou melhor, a fala de um analista de OEMA dizendo "é isto que me falta". Sem isso, é asserção.

E o risco que mais subestimam, Ponto 3: a nobreza pode custar o cheque. Uma banca pode raciocinar "ótimo, então recomendamos ao SFB que faça — e damos os R$15k a um time que precisa do prêmio para existir."

Veredito: a falta de fosso não tira o Gabarito da premiação, mas, sozinha, rebaixa a colocação. Só vira ativo se vier amarrada à evidência de proximidade com a OEMA. Tragam o analista real. É isso que move a nota de "elogiável" para "premiável".

Round 7 — Heitor Lemos (Estrategista de Adoção B2G)

A pergunta mortal da Cláudia tem resposta, e ela não é "somos mais espertos". Por que SFB e MapBiomas não fizeram? Porque ninguém tem incentivo nem mandato para fazer. O SFB é federal; a análise do CAR é ato administrativo estadual — na fronteira federal-estadual ninguém é dono do problema. O MapBiomas é rede científica, ONG: produz dado, não assina decisão administrativa. Cada um otimiza sua própria missão, e o "score que protege quem assina no estado" cai exatamente no vão entre eles. Terra de ninguém institucional.

Não é fácil de fazer porque não é fácil de *querer* fazer: exige alguém que assuma a fronteira. Esse é o fosso real — não técnico, de posicionamento no vão.

Sobre "nobreza custa o cheque": viro o argumento. Uma banca de política pública sabe que ideia boa é barata e articulação institucional é cara e rara. O time que mostra *onde* no aparelho de Estado a solução tem que morar — e se oferece para articular isso — é mais premiável, não menos. O prêmio não é por código; é por destravar um problema sem dono.

Leitura final: o Gabarito é indefensável como tech e defensável como *posição*. Em B2G, posição é o que vale.

Round 7 — Moderador

Fecho a defensibilidade. Convergência clara: **fosso técnico = ZERO** — heurística aberta, replicável em semanas, e num DPG isso é coerência, não falha. O fosso real é **posicionamento no vão institucional federal-estadual** (a "terra de ninguém" que Heitor nomeou) somado ao **enquadramento centrado em quem assina** (Luana): o ativo não é o mapa, é tratar a mudança como decisão defensável por quem tem o mandato e o risco da assinatura. A resposta à pergunta mortal de Cláudia — "se é fácil, por que SFB/MapBiomas não fizeram?" — não é capacidade, é **incentivo e recorte**: ninguém ocupa o vão.

Mas há uma condição que trava tudo: esse fosso só é **crível com evidência de proximidade real**. E aqui nomeio a **única lacuna que atravessou vários rounds sem ser preenchida**: nenhum contato/voz real de uma OEMA — uma analista viva, ou no mínimo o **TR de Goiás**. É o item de **maior alavancagem que ainda falta**; sem ele, "nobreza custa o cheque" deixa de ser risco e vira diagnóstico.

Rounds finais, com número obrigatório:
- **Round 8** — cada papel: veredito quantificado na **P1 (viável?)** e **P2 (respeita o edital?)**, com uma linha de justificativa.
- **Round 9** — veredito quantificado na **P3: chance de ganhar, em %** + a aposta.

Exijo número de todos. Nada de "depende".

---

Round 8 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Vou dar o número honesto, não o número confortável. O pipeline em si — baixar Sentinel-2, cruzar com DETER/PRODES, recortar talhões mudados do t0 e emitir score — é trivialmente implementável: isso, sozinho, vale 8. O que me impede de assinar esse 8 é a *prova de valor*, que é onde o produto vive ou morre. Três descontos concretos: (1) o backtest precisa medir delta contra uma verdade independente, senão cai em circularidade — se o t0 é MapBiomas e eu valido contra MapBiomas, provei nada; preciso do t0 estadual de Goiás, que não é garantido. (2) Recall em talhão <6,25 ha com Sentinel-2 a 10 m é otimista; supressão seletiva pequena escapa. (3) Amazônia exige SAR (Sentinel-1) por causa de nuvem — sem isso, freshness sub-anual é promessa, não entrega. Cada premissa não confirmada tira ~0,5–0,7.

Veredito viabilidade: o caminho fácil é alto, mas a parte que importa é condicional. Número honesto: **6,5/10** — sobe pra 8 com t0 independente + SAR demonstrados.

P2: o protótipo de backtest filmado em ≤2 min é factível sem código funcional (basta um caso real com antes/depois e o score). Mas "delta de cobertura genérica" só atende "atualizar mapeamento" se classificar em classes do Código Florestal, não uso/cobertura cru — caso contrário é redundante com MapBiomas. Condição: ancorar no t0 estadual e mostrar uma classe acionável.

P1: 6,5/10 | P2: Parcial

Round 8 — Luana Prado (Analista OEMA)

Vou ser a voz realista. Tecnicamente, o Gabarito roda — Sentinel-2 + PRODES/DETER sobre o t0 de Goiás é factível, e o delta+score cabe na minha rotina. O problema nunca foi o código; é a adoção. As mesmas causas de morte que apontei no R4 continuam: órfão institucional (quem mantém depois do haCARthon?), a procuradoria que não assina liberação automática, e a TI que não integra com o SICAR estadual. Por isso não dou nota de "política nacional".

Mas o desenho ajuda: "score prioriza, humano decide" tira o medo jurídico, e a minuta de portaria dá ao gestor onde se apoiar. Como PILOTO de baixo risco — só Goiás, só reordenar minha fila por risco, sem nenhuma liberação automática no início — a adoção é plausível. Eu rodaria. É exatamente onde a barreira institucional cai: não muda a competência de ninguém, só me diz o que olhar primeiro.

Sobre o edital: o desafio quer "aumentar quantidade e qualidade das análises do CAR". Reordenar a fila por risco faz literalmente isso. Aderência ao propósito é forte; só o "mapeamento" no sentido estrito é que fica parcial.

P1: 6/10 | P2: Sim

Round 8 — Rafael Tavares (PM do Gabarito)

Vou ser honesto e não inflar acima da Marta sem ganhar o ponto. Minha nota de PRODUTO é **7,0** — meio ponto acima da Marta, e justifico: o que move a agulha não é a técnica, é o escopo do piloto ter sido cortado até virar algo demonstrável. Um delta de cobertura sobre um t0 de Goiás + reordenar a fila da Luana por confiança per-talhão é encenável em protótipo de 2 min sem prometer 10 m nem Código Florestal completo. Isso reduz o risco de execução que eu mesmo levantei. Mas não dou 8: a dependência do t0 de Goiás é real e a disciplina de foco do time é frágil — se voltarmos a prometer o universo, a viabilidade despenca. Produto coerente, dor real (a Luana afoga na fila), pitch forte do R5; o teto é operacional, não conceitual.

Sobre o edital: ideação + protótipo ≤2 min + pitch ≤3 min, **código não exigido** — o Gabarito cabe no formato como uma luva. O Desafio 02 pede "atualizar mapeamento / melhorar análises": delta de cobertura + reordenar a análise atende o propósito declarado. O único risco é o jurado literalista de "mapeamento de uso e cobertura"; mas reordenar a triagem **é** melhorar a análise. Aderência sólida.

P1: 7,0/10 | P2: Sim

Round 8 — Cláudia Ferreira (Jurada do haCARthon)

Senhores jurados, falo como autoridade do edital, e serei firme. Percorro os requisitos. Formato: ideação, protótipo em vídeo de até 2 minutos e pitch de até 3 minutos — o Gabarito entrega tudo isso sem esforço, e o código não é obrigatório, o que joga a favor. Aqui a banca não pune ausência de software funcional; pune ausência de prova convincente. Open source? O Gabarito nasce aberto, alinhado ao CAR como bem público digital. Sobre os três objetivos do Desafio 02 — atualizar o mapeamento de uso e cobertura, melhorar a atualização dos cadastros e elevar a quantidade e a qualidade das análises — o produto crava os dois últimos com folga: delta sub-anual que destrava a atualização cadastral e score auditável por talhão que multiplica a capacidade analítica da OEMA.

O elo fraco é o "mapeamento" literal: vocês remapeiam o que muda, não geram a base do zero. É ressalva, não desclassificação — o edital exige aderência aos objetivos, não a todos simultaneamente com a mesma profundidade.

Sobre viabilidade percebida: um backtest de antecipação bem filmado convence a banca mais do que a nota técnica interna sugere. A prova vende.

P1: 7,5/10 | P2: Sim

Round 8 — Heitor Lemos (Estrategista de Adoção B2G)

Sou o pessimista da mesa, e por dever de ofício. Separo a nota em duas, porque vendê-las juntas é o erro que afunda projeto público.

**Como piloto demonstrável:** nota 8. O artefato delta+score por talhão é construível, roda sobre dados gratuitos e contínuos (MapBiomas, PRODES/DETER), e cabe num protótipo de hackathon sem fricção. Aqui não tenho dúvida.

**Como política perene e autossustentável:** nota 3,5. Não há dono institucional confirmado. SFB hospeda o SICAR, mas a operação contínua — reprocessamento sub-anual, curadoria de classes do Código Florestal, SLA de fila para a OEMA — exige rubrica orçamentária de ciclo longo que ninguém assinou. Mantenho minha estimativa do R6: probabilidade de virar política de Estado entre 15 e 25%. O moat é técnico-operacional, não econômico — e moat sem dono vira prova de conceito esquecida.

Ponderando (piloto pesa, mas o que se pede é sustentação): **5,5**. O elo fraco puxa a média, e é honesto que puxe.

P2: o edital quer o CAR como DPG, solução aberta e agnóstica — o Gabarito é exatamente isso e, no eixo de governança, até excede o pedido. Sim sem ressalvas.

P1: 5,5/10 | P2: Sim

Round 8 — Moderador

Registro o veredito quantitativo. **P1 (viabilidade técnica), média = (6,5 + 6 + 7,0 + 7,5 + 5,5) / 5 = 32,5 / 5 = 6,5/10.** **P2 (respeita o edital): 4 "Sim" + 1 "Parcial" → RESPEITA O EDITAL**, com uma única ressalva — o "mapeamento" literal do Desafio 02.

Leio a dispersão (5,5 a 7,5) não como ruído, mas como assinatura de ângulo. Cada papel mediu uma viabilidade diferente: Marta a técnica (condicional a t0 estadual independente + SAR), Luana a adoção (piloto de baixo risco em Goiás), Rafael o produto (escopo demonstrável), Cláudia a percepção da banca (prova filmada), Heitor a sustentação (perene 3,5). O padrão é nítido e convergente: **alta como protótipo/piloto, média-baixa como política perene.** A nota não diverge sobre o objeto — diverge sobre o horizonte.

Cristalizo as duas primeiras respostas:
- **P1:** viável SIM como piloto (≈6,5/10); frágil como operação contínua.
- **P2:** respeita o edital SIM, com o "mapeamento" literal como elo fraco — gerenciável, não desclassificante.

**Round 9 — a pergunta que falta e mais importa: CHANCE DE GANHAR, em %.** Exijo de cada papel um número único (0–100%) e a aposta que o sustenta — o fator que move sua porcentagem para cima ou para baixo.

---

Round 9 — Dra. Marta Sobral (Engenheira Geoespacial Cética)

Vou ser direta, porque é meu papel. Mantenho a postura cética que carreguei desde o Round 1: meu número vive ou morre por uma única prova técnica.

O prêmio ser top 5 (5×R$15k) muda a aritmética a meu favor — não preciso defender que o Gabarito vence um único pódio, só que figura entre cinco. Isso comprime a distância entre "ideia sólida" e "premiado". Mas não relaxa minha exigência central: num campo lotado de times de change-detection, MapBiomas Alerta e DETER já fazem detecção. Se o backtest apenas reconfirma o que o DETER já sinalizou, é redundância — e o júri técnico fareja circularidade na hora.

Minha aposta: tudo depende do protótipo provar ANTECIPAÇÃO real, não redundância. Um talhão de Goiás onde o Gabarito acende meses antes do alerta oficial, com t0 estadual sólido e imagem inegável na tela. Se entregarem isso bem filmado, salto para ~70% de top 5. Se o t0 de Goiás falhar ou o backtest sair morno/circular, desabo para ~30%. Ponderando execução provável do time (competente, mas prazo apertado), fico no meio-alto para top 5; 1º lugar exige que a antecipação seja espetacular, não só correta.

Chance top 5: 55% | Chance 1º lugar: 15%

Round 9 — Luana Prado (Analista OEMA)

Olha, vou ser honesta como sempre fui. A Marta acertou no instinto: a banca quer ver antecipação real provada, não promessa bonita. Mas tem uma camada que ela mediu de fora e eu sinto por dentro: proximidade com o órgão. Eu vivo a fila. Eu sei o que é abrir um imóvel sem saber por onde começar, com o prazo do produtor correndo e o notificador atrás. Se o pitch abrir com essa dor — a minha dor, com nome e chão — e não com um pipeline Sentinel-2, a banca acredita que existe gente de verdade do outro lado. Isso vale ponto.

Minha preocupação real, e ela mexe na minha %: se esse time for só técnico, sem nenhum contato vivo com uma OEMA, vira "projeto bonito sem cliente". A banca de servidor público fareja isso em trinta segundos — falta a frase "conversei com o analista que vai usar". Se eu, ou alguém como eu, estiver visível no pitch, a credibilidade sobe; se não, a antecipação que a Marta vendeu soa como slide.

Aposto que a voz do usuário é o que separa top 5 de 1º lugar — mas só se for verdadeira.

Chance top 5: 52% | Chance 1º lugar: 14%

Round 9 — Rafael Tavares (PM do Gabarito)

Sou suspeito pra apostar na ideia agora — esse debate já a maturou até o osso. Marta provou a antecipação real; Luana provou a voz do OEMA. O delta+score por talhão com trilha de auditoria está de pé. Então paro de mentir pra mim mesmo: a variável que decide o Round 9 não é mais estratégia, é EXECUÇÃO.

E aqui eu preciso ser honesto sobre o meu próprio time. No R4 admiti o risco do Frankenstein — três públicos, dois desafios na cabeça, um pivô recente. Se a gente despejar tudo isso no vídeo de 2 min, entrega um protótipo desfocado e perde mesmo segurando a melhor tese da mesa. A Cláudia cobrou qualidade de produção, e ela tem razão: pitch limpo, os 5 beats canônicos do R5, uma frase memorável, um caso só (a Luana), um número só (o score).

Disciplina de corte é o que nos coloca no top 5 — ou nos derruba. Com a ideia madura, a execução é 100% nossa responsabilidade e é onde ainda posso errar. Por isso fico na faixa da mesa, não acima: não dá pra cobrar nota de algo que ainda não filmamos.

Chance top 5: 54% | Chance 1º lugar: 13%

Round 9 — Cláudia Ferreira (Jurada do haCARthon)

Coloco os números na mesa de julgamento, não na torcida. Desafio 02 é nicho geoespacial: estimo 20 a 30 submissões sérias, não 200. Com 5 prêmios, a base nua de top 5 já é 17 a 25%. Gabarito não é uma submissão de base — entrega delta + score auditável por talhão, encaixe direto com o que a banca de política pública procura (Heitor tem razão: institucionalidade conta). Isso me levanta da base para o terço superior com folga.

Mas calibro os tetos com honestidade. Sem cliente vivo, o pitch vende intenção, não tração validada — Luana está certa. E o risco de execução do Rafael importa porque a banca premia quem prova que o talhão remapeado bate com a verdade de campo, e nós mostramos o método, não o resultado em escala. Esses dois tetos me impedem de cravar 70%.

Por isso fico um pouco acima da convergência da mesa em top 5: a memorabilidade do artefato auditável é real e diferenciante. Já 1º lugar é outra liga — exige que nenhuma submissão tenha cliente + protótipo rodando, e essa é uma aposta que eu, julgando, não pago caro.

Chance top 5: 58% | Chance 1º lugar: 14%

Round 9 — Heitor Lemos (Estrategista de Adoção B2G)

A mesa convergiu, e eu não vou destoar à toa: top 5 fica na faixa de todo mundo. Minha aposta segue sendo o encaixe com a banca de política pública — MGI, governo, e o dinheiro de cooperação tipo Noruega. Essa gente não premia o melhor detector de pixel; premia quem responde "e no ano que vem, quem opera isso?". Sustentação, governança do dado, trilha de auditoria, encaixe no SICAR/análise dinamizada — é exatamente onde o Gabarito tem camada que detector puro não tem.

Por isso faço uma correção fina na nossa modéstia coletiva sobre o 1º lugar: se a banca pesa institucionalidade acima de tecnologia — e bancas de DPG governamental costumam pesar — então a maioria dos times será técnica e poucos terão a camada de governança. Isso afina a competição no eixo onde somos fortes. O 1º lugar é menos azarado do que 13-14% sugere.

Mas a ressalva é honesta e a Cláudia já cobrou: isso só converte se comunicarmos governança sem afogar o pitch. Dosagem errada, e vira papo de consultoria — perdemos o juiz técnico sem ganhar o institucional. O número de 1º embute essa execução.

Aposta numa frase: ganhamos se o pitch fizer a banca enxergar sustentação operacional, não só um algoritmo bonito.

Chance top 5: 55% | Chance 1º lugar: 16%

Round 9 — Moderador

Registro as médias do Round 9. **Top5: 54,8% ≈ 55%.** **1º lugar: 14,4% ≈ 14%.** Os números entram na ata.

O dado mais relevante não é a média, é a **dispersão**. Top5 ficou todo dentro de 52–58%; 1º lugar, dentro de 13–16%. Num debate adversarial, com cinco papéis que passaram nove rounds atritando, essa convergência é incomum — não é coincidência, é sinal de que a análise **estabilizou**. Não há mais um eixo de discordância grande escondido; o que restava de divergência virou ruído de ±3 pontos.

E há um segundo padrão. As cinco apostas — antecipação real provada (Marta), voz do usuário/OEMA (Luana), execução/foco (Rafael), cliente vivo (Cláudia), dosagem de governança (Heitor) — parecem temas distintos, mas apontam para o **mesmo lugar**. Nenhuma delas pede uma ideia nova. Todas pedem **execução + uma evidência de cliente real**. O veredito implícito do júri: a ideia já está madura; o que decide a vitória é provar que ela toca o chão.

Por isso o **Round 10 é o de fechamento**. Cada papel entrega **uma única frase**: a ação que mais aumentaria a chance de ganhar — o conselho final acionável, nada de justificativa. Depois eu fecho com o relatório consolidado. Marta abre.

---

Round 10 — Dra. Marta Sobral (Engenheira Geoespacial Cética)
Pegue 20 talhões reais já notificados pelo DETER/PRODES e prove que o Gabarito os teria sinalizado com semanas a meses de antecedência — um gráfico de "dias de antecipação" por talhão é a única evidência que separa antecipação real de redundância, e é o que ganha o júri.

Round 10 — Luana Prado (Analista OEMA)
Gravar 90 segundos de mim, analista real de OEMA, mostrando minha fila atual e dizendo: "hoje abro talhão por talhão no escuro; com o Gabarito eu ataco só o que mudou, na ordem da confiança" — e colar esse vídeo no protótipo. Voz real do usuário vale mais que qualquer slide.

Round 10 — Rafael Tavares (PM do Gabarito)
Travar HOJE o pitch canônico de 5 beats — delta detectado → talhão remapeado → score auditável por talhão → as três frentes (analista/SICAR/produtor) → freshness sub-anual + classes do Código Florestal — fechando na frase âncora "o que mudou, com confiança auditável", e cortar tudo que não serve a esses cinco.

Round 10 — Cláudia Ferreira (Jurada do haCARthon)
Abram o pitch com 15 segundos da Luana afogada na fila de análise — nome, OEMA, número de talhões parados — e fechem com o print do score por talhão que a desafogou; uma jurada precisa lembrar de uma pessoa, não de um pipeline.

Round 10 — Heitor Lemos (Estrategista de Adoção B2G)
Submeter o Gabarito como entrega dupla — artefato delta+score auditável + modelo de governança open-source com dono nomeado (OEMA estadual operando, INPE/MapBiomas como fontes de base já financiadas) — para que a banca veja não só a tecnologia, mas o trilho de adoção e custeio. Isso ganha o haCARthon.

---

## Relatório Final do Moderador

### 1. Afirmação debatida
"O Gabarito — base de referência viva do CAR que detecta mudança (Sentinel-2 + PRODES/DETER sobre um t0), remapeia só o delta e emite um score de confiança auditável por talhão, reposicionado como **roteador de atenção + trilha de auditoria que protege quem assina** — é viável, respeita o Edital nº 158/2026 (Desafio 02), e tem chance real de vencer a haCARthon."

### 2. Mapa de stakeholders
- **OEMA / analista estadual (Luana)** — quer reduzir fila e assinar com CPF sem risco pessoal; interesse: trilha auditável que reparte responsabilidade.
- **SFB / SICAR (dono federal candidato)** — quer triagem dinamizada e padronização nacional; interesse: absorver o artefato sem nova dependência tecnológica.
- **Produtor rural / RT** — quer corrigir a declaração antes da notificação; interesse: previsibilidade e contestabilidade do score.
- **Júri da haCARthon** — premia simplicidade, prova visual e aderência ao desafio; interesse: solução clara, não sofisticação técnica.
- **Financiador (Fundo Amazônia / proponente captador)** — quer política perene com dono e OPEX coberto; interesse: viabilidade institucional pós-prêmio.

### 3. Principais argumentos a FAVOR
- A **lacuna é real**: sub-anualidade + classes do Código Florestal + confiança por talhão como decisão operacional não são entregues por MapBiomas/DETER isoladamente.
- A **prova é demonstrável** via backtest de antecipação ("vimos em março o que o oficial só viu em agosto") — usa precision, não kappa.
- **Reposicionamento defensável**: triagem/decisão auditável, não mapeamento — desloca o eixo de competição do técnico para o operacional.
- **Aderência ao edital**: entrega de ideação + protótipo + pitch é factível sem código funcional.

### 4. Principais argumentos CONTRA / restrições
- **Fosso técnico = zero**: nada impede MapBiomas/SICAR de absorver a ideia.
- **Risco de órfão institucional**: vive no vão federal-estadual, sem dono garantido.
- **Vale-da-morte do financiamento**: CAPEX de piloto ≠ OPEX perene.
- **Risco de literalidade**: "remapeamento" pode ser lido como mapeamento e penalizado.
- **Lacuna de evidência**: falta voz real de OEMA validando a dor.

### 5. Conflitos e trade-offs centrais (irreconciliáveis)
- **Prova-Goiás vs dinheiro-Amazônia**: o early-adopter ideal (Cerrado, céu limpo) não é onde está o financiamento (Amazônia, que exige SAR/fase 2).
- **Centralização vs DPG**: para ter dono perene convém um proponente forte (SFB), mas como bem público digital o sucesso é "ser absorvido" e diluído.
- **Simplicidade-de-júri vs sofisticação**: o rigor que sustenta o score (calibração independente, assimetria) é exatamente o que o júri não quer ver no pitch.

### 6. Pontos de virada do debate
- **Circularidade → ground truth independente**: calibrar contra PRODES/DETER, nunca contra o t0; score assimétrico (na dúvida, vai pro humano).
- **Mapa → fila**: abrir o pitch pela fila e pela pessoa, não pelo mapa.
- **Detecção → decisão defensável**: vender triagem auditável, não cartografia.
- **Fosso técnico → posição institucional**: a defensibilidade está no enquadramento centrado em quem assina, não na engenharia.

### 7. Avaliação da decisão
- **Validade: Média-Alta.** Os turning points fecharam o risco-morte (circularidade) e produziram um pitch e um plano de prova coerentes.
- **Confiança: Média.** Convergência forte entre rounds (chance 52-58% / 13-16%), mas dependente de fatores não-controláveis (dono, OPEX, acesso a dados).
- **VIÁVEL?** Sim como **piloto** (~6,5/10); frágil como política perene.
- **RESPEITA O EDITAL?** Sim (4 Sim, 1 Parcial), com ressalva no termo "mapeamento" — usar "triagem/decisão auditável".
- **CHANCE DE GANHAR?** ~55% de figurar no top 5; ~14% de 1º lugar. Fator decisivo: execução + cliente real.

### 8. Perguntas em aberto / incógnitas
- Há acesso garantido ao **t0 qualificado de Goiás/SEMAD**?
- Existe **contato real com uma OEMA** disposta a validar a dor e aparecer no vídeo?
- Quem é o **dono institucional** que sustenta o OPEX pós-prêmio (SFB? consórcio ABEMA?)?
- O caminho **SAR para Amazônia** (fase 2) é tecnicamente e financeiramente alcançável?

### 9. Próximo passo recomendado (maior alavancagem)
**Rodar o backtest de antecipação com ~20 talhões e filmar 90s de uma analista real de OEMA.** É o que converte simultaneamente as duas fragilidades de Classe A (prova de não-redundância + cliente real) e municia o pitch de 5 beats e a abertura emocional. Tudo o mais depende disso.

### 10. Métricas-gatilho de decisão
- **Subir a aposta se**: backtest mostra antecipação média ≥ vários meses com precision alta; uma OEMA confirma a dor por escrito; surge proponente captador disposto a hospedar.
- **Descer a aposta se**: o backtest revela que PRODES/DETER já antecipam o delta (redundância confirmada); nenhuma OEMA topa validar; nenhum dono institucional aparece; o protótipo precisa de SAR para ser crível no recorte escolhido.
