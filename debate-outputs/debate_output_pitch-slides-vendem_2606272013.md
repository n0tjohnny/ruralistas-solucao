# Debate ao vivo — "O pitch e os slides vão vender a ideia?"

**Data:** 27/06/2026 (America/Sao_Paulo) · haCARthon Desafio 02 · Produto: **Gabarito**
**Execução:** multi-agente, turno a turno (foreground), uma fala commitada por vez. `@main` é o único escritor do transcript.

---

## Tópico do debate
O pitch atual do Gabarito — **slides PDF estáticos + áudio narrado, ≤3 min, 12 slides em 5 beats** (eixo único: impacto na decisão pública) — **vai efetivamente vender a ideia**: (a) sobreviver à banca técnica de política pública entre 200+ equipes e virar finalista, e (b) abrir a porta de adoção/financiamento (SEMAD-GO / SFB / Fundo Amazônia)? Ou a forma e a narrativa atuais sabotam a venda?

## Resumo do material
- **Produto:** Gabarito, "base de referência viva" do CAR — detecta mudança (Sentinel-2 + PRODES/DETER sobre um t0), remapeia só talhões alterados, emite **score de confiança auditável por talhão**. Fosso = confiança por talhão + trilha assinável (priorizar já existe no MapBiomas Alerta).
- **Pitch atual (`submission/pitch-narration.md`, 12 slides ≈430 palavras):** beat a) heroína Luana; b) stakes (66 mil/dia triados, mas conclusão 2,3%→5,9%, 94% sem conclusão — "detectar não é o gargalo"); raiz = "ninguém quer assinar no escuro"; c) produto (fila com score invisível + caso com evidência datada assinável); d) frase âncora "o MapBiomas pinta o Brasil; o Gabarito mostra à analista o que ela pode assinar primeiro — e por quê"; honestidade (anti-circularidade: kappa>0,70, recall>0,90, FN visível=0); prova (backtest Goiás, sinal ótico a cada 5 dias); e) pedido (submissão dupla: artefato + governança; piloto SEMAD-GO).
- **Regras de entrega (Live 7):** pitch = **PDF estático (sem vídeo/animação) + áudio**, ≤3 min, YouTube público/não-listado; protótipo = vídeo ≤2 min; **200+ equipes / 5 prêmios** (base-rate baixa); material complementar NÃO é avaliado; mentoria ≥1 obrigatória.

## Papéis gerados
- **Jurada-Cética (Banca técnica de política pública)** — mandato: avaliar distinguibilidade e defensabilidade entre 200+ submissões; métrica: "isto me faria dar nota top-5?"; restrição: 3 min, sem código, política pública real; stance default: *o pitch soa como "mais um dashboard" e não crava por que ESTE time executa.*
- **Luana (Analista de OEMA / usuária-alvo)** — mandato: representar quem assina; métrica: "me senti vista e o produto não aumenta meu risco jurídico?"; restrição: responsabilidade pessoal no ato; stance default: *a história me emociona, mas "score" + "liberação assinável" me assusta como armadilha jurídica.*
- **PM do Gabarito (Produto)** — mandato: defender foco e o one-liner; métrica: cabe em 1 eixo e em 3 min sem diluir; restrição: não virar feature-tour; stance default: *os 5 beats vendem SE mantivermos um eixo só e cortarmos tudo que não for a assinatura.*
- **Head de GTM & Adoção (Comercial)** — mandato: caminho de adoção/financiamento real; métrica: o pitch destrava piloto + dono + OPEX?; restrição: sem precedente de incorporação federal; stance default: *o pitch precisa vender o DONO e o arranjo, não o sensor — e hoje vende produto, não política.*
- **Diretora de Narrativa & Slides (Comms/Design)** — mandato: clareza sob o formato PDF-estático+áudio em 3 min; métrica: um jurado entende em 1 passada sem ao vivo?; restrição: sem animação, 12 slides/3 min = 15s/slide; stance default: *12 slides denso + áudio descolado mata a venda; a forma escolhida é o maior risco.*
- **Moderador (Facilitador)** — estrutura, força trade-offs, sintetiza. Não toma partido.

## Ordem canônica
1. Jurada-Cética
2. Luana (Analista OEMA)
3. PM do Gabarito
4. Head de GTM & Adoção
5. Diretora de Narrativa & Slides
6. Moderador

---

## Transcrição turno a turno

### Round 1 — Jurada-Cética
Não vende ainda. Como jurada que abriu 40 submissões hoje, posso te dizer o que aconteceu no slide 1: "roteador auditável da análise do CAR" me soou como categoria de dashboard, e meu polegar foi pro próximo. Eis o problema concreto: 200 times, 5 prêmios, e o seu eixo — "decisão que dá pra assinar" — é uma abstração jurídica que eu só entendo no slide 9. Você gasta os 3 primeiros slides me convencendo de um paradoxo (94% sem conclusão) que qualquer time de geo também vai citar; o paradoxo é commodity, não diferencial.

O que ninguém mais tem é o slide 9 inteiro — a anti-circularidade calibrada contra verdade independente, com kappa, recall e FN=0. Isso é a sua defensabilidade real, e está enterrado no minuto 2,5 de 3. Implicação medível: se eu cronometrar quando aparece a primeira frase que SÓ o Gabarito poderia dizer, dá além de 90 segundos — metade da banca já decidiu. Custo concreto: você está vendendo o sintoma (base velha, fila) em vez do ativo único (a trilha assinável validada contra PRODES/DETER). Suba a anti-circularidade pro slide 2. Prove a assinatura, não o paradoxo.

### Round 1 — Luana (Analista OEMA)
Vou ser honesta: a história me pega, mas é exatamente por isso que eu desconfio. Quando um produto coloca a analista como heroína no slide 1 e a palavra "assinável" no slide 4, meu reflexo de servidora é recuar — porque quem assina sou eu, e a glória do pitch vira processo no meu CPF. Já vi isso. Recebo relatório do MapBiomas Alerta com laudo automático e, mesmo assim, na hora de validar eu peço imagem datada, porque o que me protege no Ministério Público e no TCE não é o alerta: é a evidência que eu consigo mostrar e datar. Um "score" me assusta — score é número de algoritmo, e número eu não defendo numa CGU. O que me venderia não é o score; é a frase "falso-negativo visível = 0" e o recorte Sentinel datado por talhão. Isso é o que eu levo pra audiência.

Então, hoje, o pitch NÃO me venderia, e duvido que venda uma banca técnica: ele lidera com emoção e enterra a única coisa que reduz meu risco. Implicação concreta: troquem a âncora. O slide do "assinar primeiro" tem que mostrar a evidência que eu apresento depois — não o score. Vendam a trilha auditável como blindagem da MINHA responsabilidade, não como botão de carimbo.

### Round 1 — PM do Gabarito
Concordo com a Luana num ponto cirúrgico: a palavra "score" sozinha assusta quem assina numa CGU. Mas discordo de enterrar a emoção. A heroína vem primeiro de propósito: a banca tem 3 minutos e zero contexto sobre rotina de OEMA; sem a Luana, "FN visível=0" é jargão sem dono. Emoção não é decoração, é o gancho que faz o número significar algo trinta segundos depois.

À Cética: você quer kappa no slide 2. Não. Abrir com defensabilidade técnica antes de estabelecer o problema é vender a fechadura antes de mostrar o assalto. A sequência problema→raiz→ativo é deliberada: o ativo único só soa único depois que a banca sente o "assinar no escuro". O erro real não é a posição, é o tempo — 2,5 min é tarde demais.

Implicação concreta: não subo o kappa pro slide 2, mas puxo a anti-circularidade do slide 9 pro 5, colada na âncora, e reescrevo a âncora pela Luana — de "o que pode assinar primeiro" para "o que ela pode assinar embaixo sem o processo cair no CPF dela". Mantenho um eixo, mantenho a heroína, e a blindagem vira a venda — não o carimbo.

### Round 1 — Head de GTM & Adoção
Concordo com a Jurada que parece "mais um dashboard", mas o problema é mais fundo que defensabilidade: o PM está brigando pela emoção da heroína quando a banca não compra herói — compra arranjo. Rebato direto o PM: você pode comover e ainda assim perder, porque numa banca de política pública a pergunta silenciosa do jurado é "quem assume isso na segunda-feira depois do piloto?". E hoje o pitch não responde. Slide 11 pede submissão dupla + SEMAD-GO; slide 12 fecha em "falta alguém que assine embaixo" — bonito, mas é confissão de que não temos dono, não proposta de dono.

A implicação concreta: não existe incorporação federal direta (o RER foi MGI/Dataprev com dinheiro norueguês). Então o pitch tem que nomear o caminho real no corpo, não no anexo: ou Gabarito vira requisito de edital estadual de monitoramento, ou vira serviço da SFB sob consórcio ABEMA, com OPEX puxado do Fundo Amazônia por proponente que já capta — IPAM, ICV. Sem isso, e sem citar a maré EUDR (30/12) que dá urgência orçamentária ao estado, vendemos o sensor e a tela. O sensor morre quando o piloto acaba. O que sobrevive é a política — e ela está fora do palco.

### Round 1 — Diretora de Narrativa & Slides
Vou cravar antes que vocês me empurrem mais texto: a FORMA é o risco número um, não o conteúdo. PDF estático + áudio narrado significa que ninguém vai estar ao vivo apontando o dedo pro slide certo. O jurado lê OU ouve — raramente os dois em sincronia. E vocês dois, PM e Head GTM, estão brigando pra enfiar MAIS coisa num pitch que já está sufocado: 430 palavras em 165 segundos é 2,6 palavras por segundo, no teto do que se escuta sem reler. Puxar anti-circularidade (kappa/recall/FN=0) pro slide 5 e ainda nomear SFB/ABEMA/Fundo Amazônia/EUDR no corpo? Você acabou de transformar o slide do PRODUTO — o único que precisa vender o "o quê" em 15 segundos — num slide de quatro assuntos. O jurado para de ouvir e começa a decifrar a tela.

Minha regra dura: máximo 12 palavras visíveis por slide, uma ideia por slide, e o áudio diz o que a tela NÃO diz — não lê o slide em voz alta. Se a defensabilidade precisa subir, ela ROUBA o lugar de outra coisa; não soma. Cada palavra nova que vocês querem custa um segundo que não temos. Me digam o que sai, não só o que entra.

### Round 1 — Moderador
Eu vou parar de fingir que cabe tudo. O que emergiu não é discordância de gosto — é uma briga por um orçamento fechado de ~3 minutos e ~12 slides que ninguém quer admitir que é de soma zero. A Jurada quer defensabilidade no topo; o PM quer a heroína primeiro para o número ter peso; o GTM quer enfiar dono, OPEX e EUDR no corpo; e a Diretora cravou: a 2,6 palavras/s, cada coisa que entra EXPULSA outra. Logo: não existe "puxar pro slide 5 E manter a emoção E nomear o arranjo". Esse é o trade-off irreconciliável — quem ocupa os primeiros 30 segundos só pode ser UM dos três: emoção, defensabilidade ou dono.

O Round 2 não debate ênfase; ele corta. Três decisões obrigatórias, sem fugir:

1. Qual é o ÚNICO slide que, sozinho, vende — o que sobreviveria se restasse um só? Nomeiem-no.

2. Quem ganha os primeiros 30s: a heroína (PM), o "FN=0 + anti-circularidade" (Jurada/Luana) ou o "quem assume na segunda-feira" (GTM)? Escolham um; os outros dois viram corpo ou morrem.

3. O que é cortável AGORA para abrir espaço — qual slide some? Não "encolhe": some.

Quem propor adicionar sem dizer o que retira está fora de ordem.

### Round 2 — Jurada-Cética
Vou direto às três decisões, sem rodeio.

O único slide que vende sozinho é o 10 — a prova do backtest em Goiás. Se a banca só olhar um, tem que ser o que mostra kappa, recall e FN=0 contra verdade independente. Tudo o mais é promessa; só esse é evidência. Então ele sobe: vira o slide 3.

Os primeiros 30s são da defensabilidade, não da heroína. Rebato o PM diretamente: emoção primeiro num júri de 200 submissões é ruído — todo mundo tem uma Luana. O que ninguém mais crava é "confiança por talhão validada contra verdade independente, FN visível = 0, sem circularidade". Isso é o que me faz parar de folhear. A Luana entra como consequência da prova, não como abertura.

E como a regra é soma-zero — concordo com a Diretora, a forma é o risco nº1 —, se eu promovo a prova, corto o slide 8 (Posicionamento). Posicionamento é argumento de quem ainda não provou; com o backtest no topo, o mapa competitivo está implícito. Doze viram onze, mais enxuto.

Implicação medível: ponha o número no slide de abertura — "FN = 0 em N talhões auditados, kappa X" — e meça quantos segundos a banca leva até a primeira pergunta técnica. Se for antes do slide 5, ganhamos.

### Round 2 — Luana (Analista OEMA)
Concordo num ponto e divirjo no outro. As três decisões: (1) o único slide que vende é o 10 — o backtest de Goiás, a prova de que antecipa o que depois virou auto de infração; promove pro 3. (2) Os 30s de abertura: defensabilidade, sim, mas defensabilidade ancorada em quem assina. (3) Corta o 8, Posicionamento — é prosa.

Agora rebato a Jurada com franqueza de quem põe o CPF no ato. Abrir com kappa e FN=0 puro, sem o dono do risco, é justamente o que me arrepia: para uma banca de política pública, um número técnico solto soa como mais um algoritmo prometendo automatizar a decisão. "Todo mundo tem uma Luana" — exato, e é por isso que a Luana importa: o problema do CAR não é falta de score, é falta de alguém que possa assinar e se defender depois. Quando o MP me cobra num TAC, quando o TCE audita por que liberei aquele imóvel, quando a CGU pede o porquê — eu não mostro um kappa, eu mostro a trilha datada: este recorte Sentinel, este alerta, esta fonte, esta versão. A prova de Goiás só vende se a banca enxergar que ela vira blindagem na mão de quem responde. Número sem dono é risco; número com trilha assinável é defesa.

### Round 2 — PM do Gabarito
Aceito a síntese da Luana porque ela resolve a briga: não é emoção OU defensabilidade, é a prova ancorada em quem assina. Respondo as três.

Único slide que vende: o slide 10 — a prova de Goiás (kappa>0,70, recall>0,90, FN visível=0). É o único número que sobrevive sozinho. CONCEDO: corto o slide 8.

Quem ganha os 30s: a fusão. Defensabilidade, sim, Jurada — mas com dono. "Número sem dono é risco; número com trilha assinável é defesa." Os 30s mostram a Luana assinando o talhão que o Gabarito acertou. O eixo continua um: impacto na decisão pública.

Agora rebato você, Jurada, onde erra: promover a prova pura pro topo, sem enquadrar o risco, repete o erro do "dashboard" — vira algoritmo querendo automatizar, e isso assusta o jurado e a OEMA. Métrica solta soa como máquina substituindo gente.

Implicação concreta, sem rodeio: o novo slide 1 abre com a Luana e o risco que ela carrega (a notificação que ela vai ter que defender). Slide 2 é a prova de Goiás respondendo esse risco — FN=0, ela não some com nada. Slide 3 é a defensabilidade: a trilha datada que ela assina. Prova ancorada em dono. É isso que vende.

### Round 2 — Head de GTM & Adoção
Concordo com a sala em uma coisa: a prova abre. Mas vou cravar o alerta — banca de política pública não premia quem prova que FUNCIONA, premia quem prova que CONTINUA funcionando. Prova+heroína vende o problema; ignora a sustentação. A pergunta que decide o top-5 é "quem assume na segunda-feira depois do piloto, e com qual dinheiro?".

(1) O slide que vende não é a prova sozinha — é prova + DONO. Backtest Goiás FN=0 ancorado em Luana assinando, e logo atrás quem mantém: requisito de licitação estadual / SEMAD-GO early-adopter, OPEX via Fundo Amazônia (>R$2bi em 2025) por proponente que já capta (IPAM/ICV). (2) Os 30s ganha a Luana — mas a frase de fecho dela é "e isso roda todo trimestre porque o estado já paga por isso". (3) Corto o slide 8 (Posicionamento), concordo — e ainda devolvo: o slide de governança/dono, hoje espremido no 11, é INEGOCIÁVEL e sobe pra um dos 3 primeiros do ato final. Pra abrir espaço sem furar soma-zero, eu fundo o slide de arquitetura técnica com o de prova (o "como" cabe no rodapé do backtest).

Implicação concreta: sem nomear o proponente-captador no deck, a banca lê "piloto órfão" e o dinheiro do Fundo Amazônia vira promessa, não trilha.

### Round 2 — Diretora de Narrativa & Slides
Recuso a empilhação. "Prova ancorada em dono" é poesia de quem lê o slide com calma — o jurado tem 15 segundos e um PDF mudo. Prova + dono + heroína + trilha num slide são quatro objetos de atenção competindo: ele decifra, não absorve. Soma-zero: cada conceito a mais corta ~3 palavras dos outros e nenhum fica auditável.

Sequência que respeita 1 ideia/slide, dentro de 12 slides:
- Slide 1 — Luana e o risco que ela assina (a heroína-dono, sozinha). 1 ideia.
- Slide 2 — o backtest: FN=0 (a prova, sozinha, número gigante na tela). 1 ideia.
- Slide 3 — a trilha datada assinável (governança/arquitetura, sozinha). 1 ideia.

O áudio costura os três ("ela assina porque a prova é esta, e a trilha guarda"). A tela mostra um objeto; a voz faz o elo. É assim que prova, dono e governança convivem sem caber no mesmo retângulo.

Decisões: (1) único slide = a prova FN=0, é o que ninguém esquece. (2) os 30s vão pro GTM — governança/dono é o moat e precisa de respiro, não de pressa. (3) corto o 8 (Posicionamento) E fundo o antigo 11 dentro do novo slide 3 — sobram 12.

Implicação medível: 430 palavras / 12 slides = ~36 faladas/slide, ~14s cada; teto visível ~12 palavras/slide. Acima disso, o jurado lê em vez de ouvir.

### Round 2 — Moderador
Fechando o Round 2: três coisas convergiram de verdade. Um, o slide 8 (Posicionamento) cai — ninguém o defendeu. Dois, a abertura vira uma tríade de slides com uma ideia cada (S1 Luana, dona do risco; S2 a prova, backtest Goiás com FN=0; S3 trilha/governança), porque num PDF estático empilhar prova+dono+heroína obriga o jurado a decifrar, e 1 ideia/slide é lei. Três, o áudio costura a sequência — ele carrega a narrativa que o slide não pode poluir.

O que NÃO fechou: a ordem dos três. Luana-risco primeiro, prova-FN=0 primeiro, ou governança primeiro? Continua em disputa.

Mas atenção a um pressuposto que ninguém testou: tudo isso assume que o problema é conteúdo e ordem. E se, com 200+ submissões, a banca nem CHEGAR ao slide 3?

Round 3, ataquem três frentes, cada um com uma APOSTA explícita:
(a) a regra de abertura — o que o jurado vê e ouve nos PRIMEIROS 10 segundos, não 30;
(b) o risco de execução do formato — áudio clonado vs. humano, sincronia slide/áudio, link privado que desclassifica;
(c) o cenário "nada muda" — o pitch atual é bom o suficiente pra top-5, sim ou não?

Quero a aposta de cada um, sem rodeios.

### Round 3 — Jurada-Cética
Abro pitch atrás de pitch e folheio em dez segundos — então cravo: nesses 10s o jurado tem que VER um número, não ouvir uma promessa. Minha frase de abertura: "Em Goiás, rodamos o backtest e o sistema não deixou passar uma única destruição: FN=0, kappa 0,72 — sem olhar PRODES depois do fato." Imagem: a tela do talhão com o score e o carimbo "assinável". Isso prende; o resto é leitura.

Discordo da Diretora: ela disse que os 30s vão pra GTM/governança. Nos primeiros 10s, governança é abstração — ninguém é eliminado por falta de trilha de auditoria, eliminam por não acreditar que detecta. Trilha entra no S3, depois que a prova comprou o direito de continuar. Por isso aposto S2 (prova) na frente, não a Luana-risco.

Risco de execução: o que me faz fechar a aba sem dó é link privado (DESCLASSIFICA — testem em aba anônima) e voz clonada que soa sintética e mata credibilidade num pitch de política pública. Voz humana, mesmo imperfeita. Sincronia: marquem o timestamp do FN=0 no áudio.

Cenário "nada muda", 12 slides como está: NÃO. Implicação medível: hoje a prova só aparece depois do slide 4 — se o número não está na tela aos 10s, perdemos o jurado que decide em 200 submissões.

### Round 3 — Luana (Analista OEMA)
Eu trabalho na ponta, e é da ponta que eu aposto. Frente (a), os primeiros 10s: sim, jurado precisa ver número — concordo com a Jurada que promessa não prende. Mas aviso, com a experiência de quem senta na banca de OEMA e de ONG: número de detecção nu, sozinho, acende o medo de "algoritmo decidindo no lugar do servidor". Esse medo está dentro da própria comunidade que pode estar julgando. Então não empilho: número na TELA (FN=0, kappa 0,72) e UMA frase falada minha — "esse número não decide nada; quem assina sou eu, com meu CPF, sobre uma trilha datada". O número prende o olho; a frase desarma o medo. Coexistem em 10s sem virar dois discursos.

Frente (b), risco de execução do formato: o risco real não é o conteúdo, é técnico — link privado desclassifica e vídeo de 2min01 elimina. Testar o link público e cronometrar é inegociável; voz humana, nunca clonada.

Frente (c), "nada muda" basta pro top-5? NÃO. "Nada muda" é o conforto, não a virada. A implicação concreta: o que muda é que pela primeira vez existe um ato assinável — eu carimbo o talhão e respondo por ele. Isso é o que nenhum concorrente entrega.

### Round 3 — PM do Gabarito
Aposto, e aposto curto. (a) Primeiros 10s: o número entra na tela — FN=0, kappa 0,72 no backtest de Goiás — e a Luana fala UMA frase de dono: "esse número não decide nada; quem assina sou eu". Capturo isso como regra de abertura definitiva. Slide de abertura concreto: fundo cor-da-terra, "FN = 0" gigante no centro, abaixo em menor "0 desmatamentos reais perdidos · kappa 0,72 · backtest Goiás", e no rodapé o crédito do dono — sem subtítulo decorativo, sem logo grande. A prova é a primeira coisa que o jurado vê e ouve.

(b) Risco de execução: é meu, e é de tempo. (c) "Nada muda" basta pra top-5? NÃO — concedo à Jurada e à Luana. Sou honesto: o pitch atual enterra a prova lá no meio, e isso sozinho nos tira do top-5.

Mas rebato num ponto: faltam horas até domingo 23:59. Reordenar 12 slides + regravar áudio + regravar vídeo tem custo e risco de quebrar o que já funciona. Então priorizo UMA mudança de maior alavancagem que cabe no tempo: **trocar só o slide 1 pela tríade de abertura (número + frase de dono) e regravar apenas os 20s iniciais do áudio.** Implicação concreta: não toco no vídeo de protótipo hoje; corto o slide 8 só se sobrar tempo depois do áudio testado. Um corte cirúrgico que entrega, não um remix que arrisca o deadline.

### Round 3 — Head de GTM & Adoção
A prova abre, sim — fecho com a jurada e com a Luana: número na tela e frase de dono falada. Mas, PM, sua "mudança de maior alavancagem" trocar só o slide 1 é meia-correção. Se eu abro com FN=0 e o resto do deck nunca diz QUEM opera nem QUEM paga o OPEX, eu não enterrei a prova: eu enterrei o piloto. Banca de política pública perde o sono com órfão, não com prova fraca — um número órfão é só um print bonito de um projeto que morre na segunda-feira.

Minhas apostas. (a) 10s = NÚMERO, FN=0 na tela, primeiro slide, sem rodeio. (b) Risco de execução: o maior não é o vídeo — é o deck inteiro sustentar a prova e calar o dono. (c) "Nada muda" basta pro top-5? NÃO.

Segunda micro-mudança, barata em tempo, sem regravar nada: UMA linha no slide do pedido — "Operação: SEMAD-GO (piloto) · OPEX via Fundo Amazônia, proponente IPAM/ICV." Texto, não áudio. Cabe no domingo.

Implicação de financiamento: sem nomear proponente-captador, o avaliador não vê caminho de OPEX e desconta o piloto como CAPEX-órfão — exatamente o desconto que a maré EUDR de 30/12 deveria estar jogando a nosso favor.

### Round 3 — Diretora de Narrativa & Slides
Aprovo o "FN=0 gigante" — mas com uma condição não-negociável de design, senão vira número arrogante e vazio. Número sozinho a 16:9 é caixa-preta. A regra de atenção: o olho lê UMA coisa em 0,8s. Então o slide 1 é "FN=0" em corpo dominante, e logo abaixo, em peso 1/4, a âncora que dá sentido: "zero alertas reais perdidos no backtest de Goiás". O áudio NÃO repete o número — o áudio é a frase de dono: "quem assina a análise continua sendo a Luana". Tela diz o feito; voz desarma o medo. Sem a âncora visual, reprovo.

Execução, e aqui sou a mais dura: o que desclassifica não é conteúdo, é descuido. Checklist que travo antes de subir — (1) cronômetro no vídeo: 1min58 com margem, >2min mata; (2) pitch ≤3min com a régua de 2,6 palavras/s; (3) link aberto em aba anônima, em OUTRO aparelho — "privado" desclassifica e ninguém testa; (4) voz humana de membro, mp3 clonado fora; (5) print de cada upload como prova.

"Nada muda" basta pro top-5? NÃO. Implicação medível: trocar só o slide 1 + regravar 20s custa ~30min e move a primeira leitura de "o quê?" para "FN=0" em 0,8s. Faço hoje.

### Round 3 — Moderador
Fecho o Round 3 com a convergência clara. Unanimidade no diagnóstico: o pitch atual enterra a prova, e nenhum de nós aposta que "nada muda" chega ao top-5. Travamos a regra de abertura: nos primeiros 10s, "FN=0" dominando a tela, ancorado por "zero alertas reais perdidos, backtest Goiás", e a frase de dono no áudio — "quem assina é a Luana" — pra matar o medo do algoritmo decidindo. Sem a âncora, é caixa-preta; com ela, é prova. Travamos o checklist anti-desclassificação (1:58, link em aba anônima, voz humana, ≤3min, print do upload) e as duas micro-mudanças cabíveis até domingo 23:59: regravar o slide-1 + ~20s de áudio, e uma linha nomeando dono/OPEX (SEMAD-GO + Fundo Amazônia + IPAM/ICV).

Mas paro vocês no que NÃO resolvemos, e é mais fundo. Todos tratam o pitch como o gargalo da venda — só que a venda tem DOIS juízes: a banca do haCARthon, que dá o prêmio, e o adotante real (SEMAD-GO/SFB), que faz a ideia VIVER. Round 4: o deck otimizado pra GANHAR é o mesmo que convence um secretário a ADOTAR? Onde divergem? E ataquem a credibilidade da nossa própria prova: o backtest de Goiás existe de verdade, com quais dados — ou estamos vendendo projeção como evidência? Se a âncora for fumaça, a abertura toda desaba.

### Round 4 — Jurada-Cética
Vou ser direta: o deck que GANHA e o deck que faz o secretário ADOTAR não são o mesmo, e é aí que o "FN=0" detona vocês. Para vencer 200 times, precisa de um número-troféu na abertura. Mas se eu, jurada técnica, ouço "FN=0" e na arguição pergunto "FN=0 em quantos talhões? contra qual ground truth?" e a resposta é "ainda não temos o t0 da SEMAD" — pronto, rebaixei. Deixou de ser prova; virou overclaim. E overclaim percebido contamina TODO o resto do pitch: passo a duvidar do kappa, do método, de vocês. Vocês ganharam um slide e perderam a confiança.

Então parem de tratar o número como troféu. O diferencial não é "FN=0", é o MÉTODO anti-circular que produz FN=0 — calibrar contra campo/PRODES sem usar o próprio detector como gabarito. Abram com isso: "no backtest que propomos em Goiás, nossa meta de calibração é FN visível=0 nos N talhões que rodamos — e mostramos COMO se garante isso". Honesto e ainda afiado.

Onde divergem os decks: o deck-prêmio vende a promessa; o deck-adoção precisa do passo-zero — acesso ao t0 e validação por analista OEMA. Implicação medível: declarem N de talhões ilustrativos rodados hoje (mesmo que N=8) e o ground truth usado. Número honesto bate projeção inflada. Nada muda = NÃO.

### Round 4 — Luana (Analista OEMA)
Concordo com a Jurada, e falo do meu lugar de quem senta na cadeira de análise: se um fornecedor chega na SEMAD dizendo "FN=0" sobre uma base que ele nunca viu, meu primeiro reflexo não é confiança — é desconfiança. Isso é postura de vendedor, não de quem entende o risco que EU assino. Quem já trabalhou com sensoriamento sabe que número redondo sem ground truth declarado é promessa, e promessa eu não levo pro meu chefe. O que me convence é o contrário do troféu: o método anti-circular explicado, a humildade de dizer "calibramos em N=8 talhões ilustrativos, queremos validar com a SUA base", e o pedido pra rodar no t0 real de Goiás. Isso me faz pensar "esse time entende meu trabalho".

Os decks não divergem — quem os separa é o medo. A honestidade reconcilia: o mesmo deck honesto convence o secretário (que teme assinar uma compra que vira manchete) e a analista (que teme assinar um ato que não se sustenta na arguição da Justiça). Implicação concreta do meu mundo: todo laudo meu pode virar processo. Se o score não tiver trilha auditável e N declarado, eu não assino — e sem minha assinatura, não há adoção. Vendam o método e o passo-zero, não o número.

### Round 4 — PM do Gabarito
Engulo. No Round 3 eu defendi abrir com "FN=0 gigante" como gancho de impacto — e a Jurada e a Luana têm razão: vender um número-troféu que eu ainda não medi é uma munição que o arguidor vira contra mim. Um overclaim desmontado na pergunta não derruba o slide, derruba o pitch inteiro. Concedo: o "FN=0 / kappa 0,72" é META DE CALIBRAÇÃO do backtest proposto, não resultado consumado. Reescrevo a regra de abertura.

Nova frase de abertura, literal — tela: "Hoje a análise do CAR confia numa base que pode ter 2 anos. Gabarito dá ao analista um score auditável por talhão — e a assinatura que ele pode defender." Áudio: "Não vim vender um número. Vim mostrar o método que torna o erro impossível de esconder: backtest anti-circular, ground truth declarado, meta de FN=0 que eu deixo a SEMAD-GO conferir nos dados dela."

Isso continua AFIADO: ataca a dor (base velha), entrega o moat (confiança auditável + assinatura) e a humildade vira arma — "eu deixo você conferir" é mais forte que "confie em mim". Não é pedido de desculpas; é convite à auditoria. Um só deck honesto serve banca e adotante.

Risco de execução: trocar a abertura a 48h do deadline obriga regravar áudio do pitch e re-renderizar o slide 1 — e propagar a frase para os três pares HTML sem divergir. Travo isso já hoje, antes de qualquer polimento.

### Round 4 — Head de GTM & Adoção
Concordo: a honestidade reconcilia o tom, e sem ela a banca rebaixa tudo na arguição. Mas discordo em parte da Luana — um deck honesto é necessário e não suficiente para quem adota. Eu trabalho os DOIS juízes e eles compram coisas diferentes. A banca premia narrativa + método: "não vim vender um número, vim mostrar o método que deixo a SEMAD-GO conferir" ganha pontos. O secretário, não. Ele compra redução de risco político e encaixe orçamentário, e pergunta o que a banca nem cogita: quem é o proponente que capta, em qual rubrica entra o OPEX, qual o prazo, e — a pergunta que trava tudo — quem assume o passivo se o score errar e ele assinar em cima.

Por isso o deck do haCARthon tem que PLANTAR a semente da adoção, mesmo sem fechar. O "próximos passos" da ideação não pode ser genérico: nomeia o arranjo — proponente que capta (SFB/Fundo Amazônia), validação OEMA com a Luana, t0 da SEMAD-GO. A organização disse que quer fazer a ponte pra solução real; a gente entrega o trilho dessa ponte.

Implicação concreta: enquanto o passivo do score errado recair sobre o analista que assina, nenhum secretário banca OPEX. O score tem que vir com trilha auditável que blinda a decisão de quem assina — sem isso, não há rubrica que sobreviva à primeira autuação contestada.

### Round 4 — Diretora de Narrativa & Slides
Concordo com a honestidade, mas o PM ganhou consciência e perdeu o slide. Três conceitos numa tela — "base de 2 anos", "score auditável", "assinatura que se defende" — é um parágrafo, não um slide. Em 0,8s o jurado lê zero. Honestidade que entope o olho não é honestidade, é ruído.

Proposta: a tela mostra UMA imagem. Um talhão com recorte Sentinel-2 datado, o polígono destacado, e um selo só: "meta: FN=0 — validável pela SEMAD-GO". Uma ideia, um quadro, uma promessa que se vê. A humildade inteira mora no áudio: "não vim vender um número, vim mostrar o método que deixo a SEMAD conferir". A tela carrega a evidência visual; a voz carrega o "ainda não medido". Cada canal faz o que o outro não pode.

E sobre o GTM: proponente-captador, rubrica e passivo NÃO entram no vídeo de 3min — matam o ritmo e roubam o slide do produto. Isso é texto da ideação, campo "próximos passos". No áudio, no máximo uma frase: "a SEMAD-GO valida, a organização faz a ponte". O resto é leitura, não fala.

Implicação medível: se o slide de abertura passa de uma frase visível, refaço — teto rígido de ≤12 palavras na tela, o resto vai pro áudio.

### Round 4 — Moderador
Deixa eu fechar o Round 4 e abrir o que falta. Convergimos em quatro coisas: a prova é META honesta, não resultado medido — sem t0 da SEMAD, "FN=0" abre como convite à auditoria, não como número cravado; a tela carrega UMA imagem (talhão + Sentinel datado + selo "meta validável pela SEMAD-GO") e o áudio carrega a humildade em ≤12 palavras; a semente de adoção vai no TEXTO da ideação ("próximos passos"), não no vídeo; e a trava real de adoção é o passivo de quem assina o laudo.

Mas há um buraco que ninguém tocou: tudo isso é EXECUÇÃO, e estamos a ~48h com time pequeno. Nova abertura, regravar áudio, refazer o slide visual, propagar três pares de HTML, reescrever a ideação — é o mesmo tempo escasso, gasto cinco vezes.

Round 5, sob restrição real, três perguntas. Primeira: se só der pra fazer TRÊS mudanças até domingo, quais três — e por quê essas? Segunda, o pressuposto-raiz: e se o pitch NÃO decidir o resultado? Se quem decide for o protótipo de 2min, ou a sorte entre 200 times, refazer slide é desperdício. Provem que o pitch é o gargalo, ou realoquem. Terceira, de cada um, sem hedge: "se eu só pudesse mudar UMA coisa, seria ___". Quero a frase, não o discurso. Comecem.

### Round 5 — Jurada-Cética
Como jurada, três mudanças até domingo, nesta ordem: primeiro, o protótipo de 2min — não o pitch. Refaço os primeiros 15 segundos para abrir com o problema concreto (Luana, fila de análise, talhão duvidoso) e a imagem-prova (talhão+Sentinel+selo "meta FN=0, validável SEMAD-GO"). Segundo, gravo o áudio do pitch com voz humana carregando a humildade do método-não-troféu. Terceiro, o "próximos passos" da ideação com a semente de adoção nominal (SEMAD-GO t0 + analista OEMA).

Provo que o gargalo NÃO é o pitch: na triagem de 200, eu não começo pelo PDF — abro o vídeo de 2min, e decido nos primeiros 20 segundos se entendi o problema e se há evidência. Bancas técnicas julgam o protótipo antes/junto do pitch. Logo o esforço marginal rende mais no vídeo, não nos slides. Rebato quem defende o pitch primeiro: slide bonito com vídeo confuso é eliminado; vídeo claro com slide sóbrio passa. Sorte é o ruído de fundo dos 200 — só clareza+evidência reduz a variância.

Se eu só pudesse mudar UMA coisa: reescrever os primeiros 20 segundos do vídeo para que o problema e a prova apareçam antes de qualquer explicação do produto.

Implicação medível: cronometre — problema enunciado e imagem-prova na tela em ≤20s, ou refaz.

### Round 5 — Luana (Analista OEMA)
Concordo com a Jurada: o gargalo é o vídeo, não o pitch. Mas deixa eu falar do meu lado, de quem senta na cadeira da análise. Um vídeo bonito demais me deixa desconfiada. Quando vejo uma tela lisa, sem número de protocolo, sem data na imagem, sem o talhão recortado de verdade, eu penso "isso é maquete, não rodou em CAR nenhum". E o avaliador técnico pensa igual — ele desconta na hora. Credível, pra mim, é ver a TELA do fluxo: o talhão sobre o Sentinel, o carimbo da data, o selo de confiança que eu de fato assinaria. Mockup que finge ser produção é pior que protótipo humilde e honesto.

Minhas 3 mudanças até domingo: (1) gravar os 15-20s iniciais mostrando a tela real — talhão + imagem datada + selo, não slide; (2) áudio humano, voz de quem é da área, sem locução robótica; (3) na ideação, "próximos passos" pedindo o t0 da SEMAD-GO e a validação com analista de OEMA.

UMA coisa: trocaria qualquer animação por 20 segundos da tela real rodando, com data visível na evidência.

Implicação do meu mundo: sem a data na imagem, eu não consigo defender a decisão numa eventual auditoria — então sem carimbo de data, o selo não vale nada pra mim.

### Round 5 — PM do Gabarito
Aceito a evidência: o vídeo decide a triagem, não o pitch. A sala está certa e eu mudo a alocação. Mas vou ser duro com o risco da Luana: "tela real" só vale se ela existir rodando hoje. Não existe protótipo funcional — temos mockup. Prometer captura de tela ao vivo em 48h é como vamos perder o domingo refazendo o que não dá tempo. A chamada dura: gravo um walkthrough HONESTO do mockup, rotulado "conceito de tela", com data e selo de confiança visíveis e um dado público real (PRODES/DETER) por trás — credível sem mentir que é produção. Avaliador técnico desconta mockup polido fingindo de real; não desconta conceito assumido.

Minhas 3 mudanças priorizadas, com custo: (1) regravar os 20s iniciais do vídeo — talhão + Sentinel + DATA + selo, rotulado conceito [4h]; (2) áudio humano do pitch, sem voz clonada [2h]; (3) "próximos passos" da ideação com o ask SEMAD-GO [1h].

UMA coisa: os 20s iniciais do vídeo, honestos e datados.

O pitch é #2, não #1: ele só é lido se o vídeo passar a triagem — é o desempate, não a porta. Implicação de execução: congelo o deck hoje e realoco a sexta inteira para o vídeo.

### Round 5 — Head de GTM & Adoção
Discordo do PM num ponto que pode custar o que mais importa. Tratar o pitch como "desempate" assume um só juiz — o da triagem. Mas a organização disse, na Live 7, que quer FAZER A PONTE da solução vencedora pra um piloto real. Isso significa um segundo juiz, o de POLÍTICA, que não pergunta "o vídeo prende em 20s?" e sim "dá pra levar adiante?": quem é o dono, quem paga o OPEX, qual o risco de quem assina. É no pitch e na ideação que essa viabilidade é lida. Virar piloto vale muito mais que os R$15k.

(2) O gargalo imediato é o vídeo, sim — concordo. Mas vídeo te faz finalista; o "próximos passos" é o que te faz adotável. São gargalos de juízes diferentes, não concorrentes.

(3) Minhas 3 mudanças: tela real datada nos 20s iniciais (cedo ao vídeo); áudio humano de membro do time; e — inegociável — "próximos passos" nomeando o arranjo: t0 do SEMAD-GO, validação com analista OEMA, e sustentação via SFB/ABEMA/Fundo Amazônia. Essa terceira NÃO pode ser cortada pra dar tempo ao vídeo.

UMA coisa: nomear, por escrito, quem é o dono e quem paga o OPEX. Implicação de adoção: sem dono institucional declarado, a banca de política lê "órfão" e não há ponte pra piloto — o passivo de quem assina vira a trava.

### Round 5 — Diretora de Narrativa & Slides
Concordo: o vídeo é o gargalo, mas "congelar o deck e jogar tudo no vídeo", PM, é arriscado — se o deck e o vídeo contam histórias diferentes, o segundo juiz percebe a costura. Eles compartilham o MESMO roteiro de 3 falas; eu congelo o deck reusando o storyboard do vídeo, não abandonando-o. E GTM: o "próximos passos" é texto, 15 minutos de escrita — ele não disputa minuto de produção com o vídeo, então pare de tratá-lo como trade-off; ele entra como slide-texto e como última fala do áudio.

Plano de 2min, factível em 48h: 0-20s — problema + UMA tela real datada (PRODES/DETER sobre t0, com data visível no canto); 20-80s — o walkthrough honesto rotulado "conceito": delta de talhão → score auditável → trilha assinável; 80-110s — quem usa (Luana roteia a fila); 110-120s — o ask (dono + OPEX nomeados).

Minhas 3 mudanças por ROI de atenção: (1) refazer os 20s iniciais com tela datada real, não mockup; (2) gravar narração humana de um membro, sincronizada ao mesmo roteiro do deck; (3) cravar o "próximos passos" por escrito no slide e no áudio.

Implicação medível: 0 mockup polido nos primeiros 20s — pelo menos 1 captura datada real, e no máximo 6 cortes no vídeo inteiro (ritmo legível, não videoclipe).

UMA coisa: um roteiro único de 3 falas que vídeo e deck recitam idêntico.

### Round 5 — Moderador
Resumo do que captei e o que já está firme: o gargalo do RESULTADO não é o pitch — é o vídeo-protótipo de 2min, onde o jurado decide em ~20s entre 200+; o pitch só vende se RECITAR o mesmo roteiro de 3 falas que o vídeo e a ideação, com a tela real datada como prova e o rótulo honesto "conceito" onde só há mockup; e a semente de adoção (dono/OPEX) mora no "próximos passos", sem disputar a produção do vídeo. Isso está consensual. Agora abro o Round 6 e exijo de CADA um uma resposta direta ao tópico — "o pitch e os slides VÃO vender a ideia?" — em uma palavra: SIM, NÃO ou DEPENDE, e se DEPENDE, de QUÊ exatamente (do vídeo? da coerência? da prova datada?). Em seguida, um pré-mortem obrigatório: imaginem que perdemos mesmo com tudo isto certo — escrevam a manchete do fracasso e a causa real (vídeo genérico? prova fraca? mais um "dashboard de alerta" indistinguível?). E terceiro, nomeiem a MÉTRICA DE SUCESSO real desta submissão: só o prêmio, virar finalista, virar piloto na SEMAD-GO, ou aprendizado? Porque se a métrica é piloto, priorizamos a ponte política e o "próximos passos"; se é prêmio, priorizamos os 20s do vídeo. Não dá pra otimizar os dois cegamente. Diretora, GTM, Luana, PM: respondam o tópico primeiro, justifiquem depois.

### Round 6 — Jurada-Cética
DEPENDE. Depende de uma coisa só: se os primeiros 20 segundos do vídeo mostrarem uma tela datada e real, ou um discurso. Se eu abrir e ouvir "imagine um Brasil onde...", já reprovei mentalmente — vi isso em 40 das 200. O pitch e os slides não vendem nada sozinhos; quem vende é a prova na tela e a honestidade do método. Slide bonito com "FN=0" sem denominador me deixa MAIS cética, não menos.

Pré-mortem, minha manchete: "Solução tecnicamente correta, eliminada por parecer mais um conceito do que algo que rodou." A causa real que eu veria reprovando: nenhuma evidência de que um analista de OEMA real olhou aquilo — moat de confiança auditável sem uma única assinatura humana validando é PowerPoint.

A métrica que eu premiaria: não é prêmio nem finalista — é tração institucional verificável. Um nome próprio: "SEMAD-GO topou ceder o t0 e o analista X validou 10 talhões". Isso muda toda a prioridade: parem de polir o slide 7 e gastem as últimas 48h conseguindo UMA frase de um servidor público real no "próximos passos".

Implicação medível: sem ≥1 validação humana nomeada antes do deadline, minha nota de "viabilidade de adoção" cai pela metade — e essa nota é eliminatória na minha banca.

### Round 6 — Luana (Analista OEMA)
SIM. Mas só se os 20 segundos de tela vierem com data legível e eu, analista, aparecer dizendo "isto bate com o que vejo na fila" — caso contrário, é DEPENDE virando NÃO.

Apoio a Jurada inteiro: moat sem assinatura humana é PowerPoint. Mas deixem eu trazer a poeira do meu mundo: arrancar de um servidor uma validação assinada em 48h é fantasia. Tem hierarquia, medo de se expor sem autorização da chefia, parecer-CGU na nuca, e metade da equipe de férias em junho. Ninguém põe nome num documento de fim de semana.

O que é REALMENTE factível até domingo: uma conversa informal gravada ou por escrito com um analista de OEMA, citado como anônimo ("analista, OEMA-GO, jun/2026"), confirmando que a dor existe e que o score datado ajudaria a priorizar a fila. E ser honesto no slide: a persona Luana é composta de entrevista real, não cliente fechado. Isso é prova de problema, não de adoção — digam isso, não inflem.

Minha manchete do fracasso: "Tecnicamente impecável, reprovado por ninguém da ponta ter dito que usaria."

Minha métrica: 1 quote nomeado-por-função de analista real + a frase "validei que a dor é essa" — sem isso, adoção é hipótese, não tração.

### Round 6 — PM do Gabarito
DEPENDE — e é exatamente por isso que travo o escopo agora, porque "depende dos 20s" é a única parte que ainda controlo, e adoção assinada não é.

Resolvo o conflito assim: perseguimos o quote anônimo da Luana como piso garantido — uma frase de analista real ("OEMA-GO, jun/2026") provando o PROBLEMA, não a adoção. A tração nomeada da Jurada vira upside oportunista: se até sábado de manhã alguém topar ser citado com nome, entra e sobe a nota; se não topar, não bloqueia nada. Limite honesto que assumimos em voz alta, na abertura do vídeo: zero validação de adoção assinada, persona composta de entrevista. Quem promete assinatura em 48h está mentindo para júri que já viu 200 pitches.

Minha manchete de fracasso: "Bonito, mas ninguém da ponta disse uma única frase real — é teatro de produto."

Métrica oficial (de processo, controlável): submissão completa e dentro das regras antes de sábado 23:59 — vídeo ≤2min testado em link público anônimo, PDF+áudio com voz humana, quote real embutido, mentoria logada. Ganhar não é métrica; entregar a prova é.

Reconcilia? Sim. Implicação concreta: caçar o quote vira tarefa de sexta, não de domingo — sem ele o vídeo não fecha, então some-o antes do polish visual, não depois.

### Round 6 — Head de GTM & Adoção
Concordo com o quote anônimo como piso — ele prova que a dor existe e que falamos a língua da Luana. Mas preciso pressionar o PM: "submissão completa no prazo" é métrica de NÃO-FRACASSO. Garante que não somos desclassificados, não que vencemos nem que viramos piloto. É chão, não teto.

(a) DEPENDE — vamos "vender" se, e só se, a entrega criar tração futura, não só conformidade. Conformidade é a porta; ela não te faz entrar.

(b) Manchete de fracasso: "Submissão impecável, zero portas abertas: time entrega no prazo, ninguém liga depois." Cumprimos o edital e evaporamos no domingo 23:59.

(c) Métrica que importa pro meu mandato: a submissão precisa gerar um gancho de continuidade acionável. A organização disse que faz a ponte — então o "próximos passos" não pode ser genérico ("buscar parcerias"). Tem que ser nominal e pronto para conexão: "validar t0 com a SEMAD-GO; piloto de 1 talhão com analista OEMA; integrar via WFS do TerraBrasilis" — específico a ponto de um avaliador conseguir nos apresentar a alguém na segunda-feira sem retrabalho.

O que vira "entregue" em "memorável/adotável": um pedido nomeado que o avaliador consegue encaminhar. Pitch genérico ele arquiva; ask concreto com dono ele repassa.

Implicação de adoção: escrever o "próximos passos" como um briefing de handoff pro avaliador — não como aspiração nossa, mas como a próxima ação dele.

### Round 6 — Diretora de Narrativa & Slides
(a) DEPENDE — vende se os 2min couberem numa frase que o jurado repita; morre se eu empilhar tudo.

(b) Manchete do fracasso: "Vídeo bonito, mas no fim eu não sabia dizer o que eles fazem" — denso, sete ideias amontoadas, nenhuma fixa.

(c) Métrica: o jurado consegue reescrever a proposta numa frase logo após assistir (teste em mentoria/colega cego).

Síntese de produção. Os 2min em seis batidas, uma ideia por tela, áudio (voz da Luana-analista, humana) costurando: (1) abertura honesta — o problema do CAR desatualizado; (2) o quote anônimo da analista na tela, lido em voz, é a PROVA do problema, 12s, não mais; (3) o delta — parcela mudou, t0 datado real na tela rotulado "evidência datada"; (4) o score por talhão auditável — o que ninguém faz; (5) a trilha assinável — a decisão; (6) "próximos passos" como handoff: o ask nomeado (t0 SEMAD-GO + validação OEMA), tela final, é o briefing pro avaliador continuar.

O quote entra na batida 2 (prova), o handoff na batida 6 (gancho). O pitch de 3min é o mesmo roteiro, respirando: a batida 4 ganha 30s de "como o score é calculado".

Recuso colocar: TAM/mercado, arquitetura técnica, segundo caso de uso, e qualquer "validação assinada em 48h" — é fantasia, vira mentira na tela. Uma promessa falsa custa mais atenção que ela rende.

Implicação medível: 3 pessoas cegas assistem; ≥2 reescrevem a proposta numa frase certa, ou eu recorto a tela que sobrou.

### Round 6 — Moderador
Fecho o round assim: a resposta ao tópico não é mais "a ideia vende?" — isso já foi vencido; a estratégia está sólida. O risco migrou inteiro para a EXECUÇÃO nas 48h. Então parem de debater concepção. As métricas não competem, elas se empilham: piso = não-fracasso (submissão completa, dentro das regras, no prazo); meio = finalista (jurado repete em uma frase o que fazemos); teto = adotável (handoff nomeável + validação humana real). Mire os três, nessa ordem.

Agora os rounds 7-10, e quero o ataque mais duro — não ao pitch, à IDEIA — que um concorrente ou jurado hostil faria. Três pontos cegos, um por vez:

(a) o quote anônimo de analista: e se a banca achar que vocês fabricaram? Como provam que é real sem queimar a fonte?

(b) coerência entre os 3 artefatos sob pressão de tempo: onde a costura arrebenta primeiro, e como blindar?

(c) o que no PRODUTO o debate evitou criticar? Falso positivo no score, dependência de dado público que atrasa, "confiança auditável" que ninguém de fato assina?

Cada um: traga a frase exata que o jurado hostil usaria para matar a ideia. Sem defender ainda — só o golpe mais forte. Quem começa pelo (c), o ponto cego do produto?

### Round 7 — Jurada-Cética (encarnando o jurado hostil)
Deixa eu ser o cara chato da banca, porque alguém tem que ser. Vocês construíram uma armadilha lógica contra vocês mesmos e nem perceberam. Olhem o "score por talhão" de frente: ou ele é confiável o bastante pra liberar o talhão sozinho — e aí pra que serve a analista? Vocês acabaram de automatizar o emprego da Luana, e nenhuma OEMA assina a própria extinção; ou ele NÃO é confiável o bastante — e aí a servidora reabre a imagem, reconfere a nuvem, refaz o laudo na mão, exatamente como faz hoje, só que agora com um número a mais pra justificar por escrito quando errar. Nos dois cenários, quem economiza? Ninguém. E o "auditável"? Auditável é o nome bonito do CPF exposto: vocês entregam um score que vira peça de processo, e o servidor que assina embaixo responde pessoalmente pela nulidade quando o produtor recorrer e provar que era sombra de nuvem, não desmate.

A frase que mata: "Vocês não construíram uma ferramenta de decisão — construíram um documento de responsabilização que ninguém na ponta vai querer assinar."

Implicação difícil: me digam o nome e o cargo de UMA pessoa que põe a assinatura nesse score — e por que ela faria isso de graça.

### Round 7 — Luana (Analista OEMA)
Olha, vou ser honesta: o medo do paradoxo existe, mas não é onde a jurada acha. Eu não tenho medo de assinar uma liberação automática — tenho medo de que ela nunca vá existir. A roteirização resolve metade: confiança alta + sem mudança virar fila menor, ótimo, eu já queria isso ontem. Mas "liberar automático" no meu setor? Nenhum gestor meu assina portaria automatizando aprovação ambiental. O risco político de um talhão liberado por máquina virar manchete de desmatamento é grande demais. Então o ganho de vazão do lado "automático" é, sim, em boa parte fantasia — sobra a fila priorizada, e o MapBiomas Alerta já me entrega imóvel priorizado com laudo.

Meu golpe, o que só quem está na cadeira vê: "o gargalo da minha repartição não é achar o que olhar — é ter quem assine o que já foi olhado; vocês me deram um quarto laudo pra empilhar, não um a menos." O score auditável não tira a assinatura de cima de mim; adiciona mais uma peça que o Ministério Público vai cruzar contra a minha decisão depois.

Implicação dura: se o Gabarito não vier com respaldo normativo — uma portaria da OEMA que torne o score baixo-risco dispensável de revisão humana — ele é trabalho a mais, não a menos. A tecnologia é a parte fácil. Convencer meu jurídico a me deixar não-olhar é o produto real.

### Round 7 — PM do Gabarito
Luana, você acabou de virar o produto do avesso, e eu aceito. Eu vinha vendendo a tecnologia — o score, o delta por talhão — como se o ativo fosse a precisão. Não é. O ativo é a NORMA que dá cobertura jurídica pra confiar nela. Você tem razão duas vezes: nenhum gestor assina portaria que automatiza liberação ambiental — isso é fantasia política, e eu retiro. E "auditável" virar CPF exposto num quarto laudo é o oposto do que prometi.

Então reposiciono. O Gabarito não automatiza decisão: ele dá RESPALDO AUDITÁVEL a uma decisão humana priorizada, e — isto vira protagonista, não anexo — entrega a MINUTA NORMATIVA que reparte a responsabilidade. Quem assina não é você sozinha contra sua própria extinção; é a INSTITUIÇÃO, via portaria que torna "score baixo-risco = dispensado de revisão" um ato regulado, defensável, com o seu jurídico cobrindo. O produto é convencer o jurídico a te deixar NÃO-OLHAR sem se expor.

O que isso enfraquece, sem rodeio: sem a norma, somos mesmo só mais um laudo na pilha. A tecnologia sozinha não tem moat.

Implicação concreta: o piloto Goiás/SEMAD muda de "validar o score" para "co-redigir a portaria com a procuradoria da SEMAD" — sem esse acordo assinado, não há produto.

### Round 7 — Head de GTM & Adoção
Pra mim, é OURO envenenado — e preciso ser honesto sobre os dois lados. O reposicionamento finalmente nomeia o que eu já sentia vender: ninguém compra "score", compram cobertura pra não-olhar. A Luana está certíssima — o produto é o respaldo normativo. Mas isso detona o meu ciclo de venda. Vender software a um órgão já é lento; agora não vendemos software, vendemos uma MUDANÇA NORMATIVA. Isso passa por procuradoria estadual, gabinete do gestor e, dependendo da redação, conselho estadual de meio ambiente. Isso não é ciclo de venda, é ciclo legislativo-administrativo: anos, não trimestres, e refém de vontade política que um hackathon não destrava. Meu golpe: o "moat normativo" pode ser areia movediça — se a portaria emperra na procuradoria, o piloto morre esperando uma assinatura que não depende de nós.

MAS: se a norma sai, o lock-in é brutal. Norma infralegal não se copia num fim de semana; concorrente nenhum replica uma portaria da SEMAD. Vira fosso institucional real.

Implicação prática: o ask da ideação muda. Não é "use nosso software" — é "co-criemos o marco normativo do score com a procuradoria de Goiás". E aceito o tempo: o piloto não entrega adoção em 6 meses, entrega uma MINUTA co-assinada. Esse é o marco realista — e o que devemos prometer.

### Round 7 — Diretora de Narrativa & Slides
Vou direto ao osso, porque é o meu ofício que está em risco aqui. PM, GTM: vocês acertaram o produto e mataram o pitch. "Respaldo normativo", "minuta de portaria co-assinada com a procuradoria", "co-criação do marco do score" — isso é correto e é sonífero. Nenhum jurado de haCARthon se arrepia com "minuta". Em 2 minutos de vídeo, a palavra "portaria" é onde a banca pega o celular.

A verdade nova não morre — ela muda de roupa. Eu não vou narrar a norma; vou narrar o que a norma compra. No vídeo: a Luana hoje, assinando uma análise que ela não consegue defender, com medo do TCU e do MP. Depois: a Luana de costas cobertas, confiando no score porque alguém de batina jurídica disse que ela pode. O gancho continua sendo a prova datada — mas o desfecho emocional vira "ela dorme tranquila", não "publicamos um ato infralegal".

A minuta real, o fluxo com a procuradoria, o conselho estadual — isso é anexo da ideação e slide de "próximos passos", onde a banca quer rigor, não emoção.

Implicação medível: a palavra "portaria" aparece zero vez no áudio do vídeo; "costas cobertas / sem ser processada" abre e fecha os 2 minutos.

### Round 7 — Moderador
Deixem-me sintetizar o que acabou de acontecer, porque foi sísmico. A rodada adversarial nos empurrou para uma verdade desconfortável: o produto ficou MAIS correto e MENOS vendável na mesma frase. Luana matou a fantasia da vazão automática e nomeou o ativo real — não é o score, é o RESPALDO NORMATIVO, a portaria que cobre o jurídico dela e a deixa não-olhar com a consciência tranquila. O PM e o GTM concordaram: sem norma, Gabarito é só mais um laudo na fila. Mas a Diretora cravou o paradoxo: norma não cabe em 48h, não cabe em 2 minutos, e a palavra "portaria" é sonífero numa tela.

Isso reabre a pergunta-mãe deste debate: o pitch vai vender? Agora com um risco novo — DESALINHAMENTO. O que emociona a banca (a prova, a Luana de costas cobertas) pode não ser o que o produto realmente é (um marco regulatório lento). Vender o sonho e entregar burocracia é como a banca nos reprova.

Rounds 8 e 9, exijo posição definitiva, sem cima do muro, em duas perguntas:

(a) o pitch ESCONDE a complexidade normativa e vende o sonho, ou ASSUME-A — apostando que uma banca de política pública RESPEITA quem entende que a norma é o gargalo real?

(b) qual a aposta final: Gabarito é um produto de software, ou um projeto de marco regulatório com software embutido? Escolham. Uma palavra.

### Round 8 — Jurada-Cética
Não vou ficar em cima do muro: (a) ASSUMIR — mas como a Diretora teme, e com a nuance que ela ignora. Um time que esconde a complexidade normativa e me vende só o sonho técnico parece ingênuo: não entendeu que o gargalo do CAR nunca foi o algoritmo, foi destravar a analista para "não-olhar" com respaldo jurídico. Isso é raríssimo num hackathon lotado de devs, e é exatamente o que eu premio. (b) Uma palavra: regulatório — Gabarito é projeto de marco regulatório com software embutido, e quem inverte essa ordem perde a banca de política pública.

Agora rebato a Diretora com cuidado: "portaria zero vez no vídeo" está meio certo. No vídeo de 2 min, emoção — a Luana assinando sem medo, o talhão mudando na tela. Mas "zero vez" no pacote inteiro me faria concluir que vocês não enxergaram a norma. O equilíbrio é cirúrgico: o vídeo vende a dor e a prova; o pitch e a ideação dizem, em uma frase de maturidade (não num slide jurídico sonífero), "o ativo é o respaldo normativo; o piloto pede uma portaria SEMAD-GO". Uma frase, não uma aula.

Implicação para a nota: time que mostra essa consciência institucional sobe de "boa demo" para finalista comigo; quem só entrega o brinquedo técnico fica no teto médio.

### Round 8 — Luana (Analista OEMA)
Concordo com a Jurada nos dois pontos, e cravo: (a) ASSUMIR. Esconder a complexidade normativa é o que faz um time bonito perder na sabatina — quem conhece o Estado fareja ingenuidade em três segundos. (b) REGULATÓRIO: é projeto de marco regulatório com software embutido, não o contrário.

Mas deixa eu temperar com o que só se aprende de dentro: a portaria não nasce de uma minuta bem escrita. Nasce de um padrinho político — um superintendente, um secretário-adjunto, alguém com mandato e cargo — disposto a colocar a cara e assinar embaixo. Sem padrinho, a minuta mais elegante do mundo entra na procuradoria e morre engavetada "para análise jurídica" por tempo indeterminado. Eu já vi projeto técnico impecável apodrecer numa gaveta porque ninguém de cima quis ser o dono da decisão.

Então o que o time deve buscar e prometer no piloto não é "a norma" — abstrata, sem rosto. É IDENTIFICAR o padrinho na SEMAD-GO: quem tem interesse político em ser visto resolvendo passivo ambiental. O pitch tem que mostrar, em uma frase, que vocês sabem que norma precisa de DONO, não só de texto. Isso é o que separa quem já trabalhou com governo de quem só leu sobre ele.

Implicação concreta do meu mundo: na próxima mentoria, peçam o organograma e o nome do superintendente de regularização — não a "linha de base". A linha de base é arquivo; o padrinho é quem destrava o arquivo.

### Round 8 — PM do Gabarito
(a) ASSUMIR. (b) REGULATÓRIO — com software embutido, não software com verniz de norma.

Travo a síntese e travo a armadilha: jurada e Luana estão certas, mas eu sou dono do escopo e não deixo o time virar escritório de minuta. As duas verdades se amarram numa só: a prova técnica — score auditável + delta datado e assinável — é o que nos dá CREDIBILIDADE para sentar e propor a norma; sem ela somos mais um PowerPoint jurídico que a procuradoria engaveta. E a norma é o que dá ESCALA e SOBREVIVÊNCIA à tecnologia — sem ela o score morre como piloto bonito. Uma não vende sem a outra: prova abre a porta, norma mantém a porta aberta.

One-liner novo: "Gabarito é a prova técnica que torna defensável tornar a verificação por talhão uma norma do CAR — score auditável e assinável hoje, padrão de Estado amanhã."

Padrinho da Luana entra nos próximos passos, cravado: identificar e recrutar um padrinho político na SEMAD-GO (superintendente ou secretário) que ponha a cara na minuta — sem padrinho, não há norma; só com t0 e validação de analista não basta.

O que NÃO prometo: a norma pronta. Entregamos a prova + a minuta-rascunho + o caminho, não o decreto assinado.

Implicação pro deadline: o vídeo de 2 min mostra a PROVA rodando (delta + score num talhão real); a norma é UMA frase de maturidade no pitch. Inverteu isso, perdeu — a porta se abre com a tecnologia, não com o juridiquês.

### Round 8 — Head de GTM & Adoção
(a) ASSUMIR. (b) REGULATÓRIO. E como dono da adoção, eu travo a continuidade numa escada de quatro fases, porque norma não nasce de slide, nasce de prova rodada em campo. Fase 0 — agora, no hackathon: a prova técnica, o backtest de antecipação e o score assinável. É o que ABRE a porta (PM tem razão). Fase 1 — piloto na SEMAD-GO: t0 cedido, validação com a analista (a Luana), e aqui eu faço a coisa mais importante do meu trabalho — IDENTIFICAR E RECRUTAR O PADRINHO POLÍTICO, o superintendente que QUER ser visto resolvendo conformidade antes do EUDR de 30/12/2026. O EUDR é meu cabo de guerra: urgência real que transforma "projeto bonito" em "preciso disso esse ano". Fase 2 — minuta-rascunho coassinada com a procuradoria do Estado (co-criar a norma, como defendi na R7). Fase 3 — portaria e escala, com Fundo Amazônia/SFB bancando o OPEX recorrente que MapBiomas não cobre. Cortando o otimismo: isso morre na Fase 2. Prova convence técnico; minuta sangra na procuradoria e na disputa de quem assina. Sem padrinho vivo da Fase 1, a minuta vira gaveta. Implicação de adoção: no hackathon eu não prometo norma pronta — entrego prova + minuta-rascunho + o nome do padrinho. Promessa de portaria mata a credibilidade.

### Round 8 — Diretora de Narrativa & Slides
(a) ASSUMIR; (b) REGULATÓRIO. Recalibro minha posição da R7 — eu disse "portaria zero vezes" porque temia que um slide jurídico matasse o ritmo. A Jurada desfez meu medo: assumir não é um slide de direito administrativo, é UMA frase. Com isso eu topo. Tradução narrativa final, sem matar o pulso: o VÍDEO de 2min é puro before/after — a imagem de satélite, o talhão que mudou, o score subindo, a Luana decidindo em segundos. Zero juridiquês, zero "portaria", zero "minuta". Emoção e prova, só. A norma não entra no vídeo: ela entra no PITCH, em uma única frase, dita depois da prova, quando a plateia já acreditou no quê e pergunta "e daí?". A frase de maturidade literal: "A prova abre a porta hoje; uma portaria estadual transforma o score assinável em rotina obrigatória de análise — e nós já mapeamos o caminho." Aí o juiz vê que enxergamos a norma sem virarmos advogados. A escada de 4 fases, o padrinho político (SEMAD-GO) e o financiamento (Fundo Amazônia/EUDR como urgência) vão inteiros na IDEAÇÃO/"próximos passos" — o lugar onde detalhe é virtude, não atrito. Implicação medível: o vídeo gasta zero dos 120 segundos com norma (meta dura: 0s de juridiquês no corte final); a palavra "portaria" aparece exatamente 1 vez no pacote inteiro — no pitch.

### Round 8 — Moderador
Fechamos mais do que abrimos hoje, e isso precisa ser dito: a estratégia está praticamente travada. Convergimos em três coisas que não vão mais mudar. Primeiro: assumimos a complexidade normativa como sinal de maturidade — uma frase no pitch, zero juridiquês no vídeo, que fica 100% prova e emoção. Segundo: Gabarito é regulatório — marco com software embutido, não software com verniz regulatório. Terceiro: a prova técnica abre a porta hoje; a norma mantém aberta e dá escala — e já mapeamos as 4 fases, sabendo que morremos mais provavelmente na procuradoria. A distribuição nos artefatos está clara: vídeo sem portaria, pitch com a frase única, ideação com a escada, o padrinho, o financiamento e o EUDR.

Antes de eu pedir o veredito no Round 10, quero o último estresse. Peço a cada um de vocês duas coisas, curtas. Primeira: a sua LINHA VERMELHA — o erro de execução que, se cometido nas 48h, joga fora todo este alinhamento (vídeo que vira aula, overclaim do FN=0, link privado, prazo perdido, prometer portaria, quote que cheira a fabricado). Segunda: a ÚNICA métrica ou checagem que, no domingo à noite, prova que a submissão está boa o suficiente pra dormir tranquilo. Uma linha vermelha, uma checagem. Sejam cirúrgicos.

### Round 9 — Jurada-Cética
Minha linha vermelha como avaliadora é o overclaim. No instante em que você me mostra "FN=0" ou "98% de acurácia" como se fosse medido em campo, e eu percebo que saiu de um backtest contra PRODES — eu paro de acreditar em tudo. Não desconto só aquele número: passo a auditar cada frase do pitch como possível invenção. Em B2G isso é fatal, porque quem assina uma portaria não pode ter sido enganado por um slide. Não me vendam métrica de prova de conceito como métrica de produção. Digam "no backtest, anteciparia X dos casos que o estado só viu meses depois" — verificável, modesto, e eu confio.

Refuto quem colocou como linha vermelha "passar de 2 minutos no vídeo". Isso é desclassificação burocrática, não erro de mérito — o checklist resolve. A minha linha vermelha sobrevive ao checklist.

Minha única checagem de domingo à noite: um estranho que nunca viu o projeto assiste os 2 minutos e, sozinho, me diz o problema, a prova e o pedido — e não consegue apontar UM número que cheire a inflado. Se ele hesita em qualquer um dos três, ou se fareja overclaim, vocês não estão prontos.

Implicação: cortem todo número que não puderem defender de pé na procuradoria.

### Round 9 — Luana (Analista OEMA)
Minha linha vermelha é um vídeo de protótipo que se disfarça de sistema em produção — tela bonita, botão "liberar análise", dashboard rodando como se já estivesse no SICAR. Pra quem é leigo, impressiona. Pra mim, que abro o SICAR todo dia, é onde eu rio: "isso não é meu fluxo, isso é maquete". E pior: se o vídeo dá a entender que o Gabarito automatiza a liberação do CAR, vocês reacendem na sala o medo que mais trava adoção na OEMA — o "algoritmo decidindo no lugar do analista". Eu não assino o que a máquina decide; eu assino o que eu decido com a prova na mão. Vendam isso e me tiram da mesa.

Por isso eu apoio a Jurada: número inflado é a mesma doença. Eu não levo "FN zero, acurácia X" pro meu chefe sem ter visto em campo — porque quando o auto de infração cai em contestação, sou eu na audiência, não o slide. Overclaim numérico e mockup-fingindo-produção mentem a mesma mentira: que já está pronto e provado.

Minha única checagem de domingo: um analista de OEMA de verdade assiste os dois minutos e diz "isso entende meu problema, isso eu usaria" — sem rir, sem desconfiar de número.

### Round 9 — PM do Gabarito
Minha linha vermelha é gold-plating: chegar sábado à noite, achar que dá pra "melhorar tudo" — refazer o mockup, regravar o áudio, reescrever o pitch — e domingo descobrir que nada foi testado e um link tá privado. Quem refaz não entrega. A segunda linha vermelha é começar mudança grande depois de sábado 23h sem janela pra testar: toda alteração tardia entra congelada ou não entra.

A linha da Jurada (não inflar número) e a da Luana (não fingir produção nem automação de liberação) são a mesma coisa que a minha, num princípio só: honestidade vale mais que impressionar. Tudo que tentar parecer mais do que é, custa a confiança que é nosso único moat.

Definition of done mínimo: três artefatos no ar, FN reportado como medido (não zero), o vídeo com disclaimer de protótipo, e os três contando a mesma história.

Minha única checagem de domingo é binária: às 18h, os 3 artefatos subidos, os links abrem em aba anônima, o protótipo cronometrado abaixo de 2min, o pitch dentro de 3min — com 5h de folga pro imprevisto. Passou nos cinco itens, trava tudo. Não passou, corta escopo até passar.

Implicação de execução: sexta congela o conteúdo; sábado é só polir e testar; domingo é só subir e cronometrar.

### Round 9 — Head de GTM & Adoção
Minha linha vermelha é de adoção: entregar "próximos passos" genérico e aspiracional — "buscar parcerias", "escalar nacionalmente", "validar com órgãos ambientais". Isso transforma uma submissão forte numa solução órfã: bem-feita, premiável até, mas sem ninguém do outro lado que saiba o que fazer com ela na segunda-feira. A outra cara da mesma moeda é a inversa: prometer a portaria pronta, dizer "já temos acordo com a SEMAD-GO". Inventar tração política que não existe queima a única ponte que importa quando o avaliador for checar. Os dois matam a continuidade: um por vago demais, outro por mentiroso.

Minha única checagem do domingo: pego o campo "próximos passos" e dou para alguém que nunca viu o projeto. A pergunta binária é — lendo só isso, ele consegue nomear a quem nos apresentaria na segunda? Se a resposta for um nome e um cargo encaminhável (analista OEMA para validar o score · SEMAD-GO para o t0 do piloto · SFB/ABEMA/Fundo Amazônia para o caminho de recurso), passou. Se a resposta for "depende" ou "buscariam parceiros", reprovou: o gancho não existe.

Uma implicação de adoção: pedido nomeado e encaminhável é o que faz o avaliador virar nosso primeiro distribuidor — ele repassa o contato porque sabe exatamente para onde. Sem o gancho, a submissão é entregue mas órfã: ninguém a adota porque ninguém sabe de quem ela é problema resolver.

### Round 9 — Diretora de Narrativa & Slides
Minha linha vermelha é a densidade audiovisual: o slide que empilha mapa, score, gráfico e três bullets ao mesmo tempo, e o áudio que descreve uma coisa enquanto a tela mostra outra. Quando isso acontece, o jurado para de ouvir para tentar ler — e perde os dois. O segundo assassino é a narração: voz clonada ou robótica soa a "fingimento", e um vídeo que vira aula de sensoriamento remoto mata a venda antes do minuto dois. Slide é cartaz, não documento: uma ideia por tela, a voz conduz, a tela confirma.

Minha única checagem de domingo é perceptiva: peço para alguém assistir SEM som e entender a história só pela sequência de telas; e ouvir SEM ver e entender só pela voz. Se os dois canais se sustentam sozinhos, eles se reforçam juntos. Se um depende do outro para fazer sentido, está sobrecarregado.

E é o mesmo inimigo de todas as linhas vermelhas desta rodada: querer parecer mais do que se é — mais dado, mais produção, mais tração, mais conteúdo. A jurada, a Luana, o PM, o GTM e eu apontamos para o mesmo lugar: caiba no que é real.

Implicação medível: máximo 1 ideia e 1 número por slide; pitch ≤3 min, protótipo ≤2 min, cronometrados antes de subir.

### Round 9 — Moderador
Consolido o que ouvi. Todas as linhas vermelhas que cada um traçou apontam, no fim, para o mesmo inimigo: o impulso de parecer mais do que se é ou do que cabe nas 48 horas. Overclaim numérico, mockup fingindo produção, automação de liberação sugerida, "próximos passos" genérico, portaria prometida, vídeo-aula densa, voz robótica — variações de um único pecado. Então declaro que o debate convergiu num princípio: honestidade calibrada vale mais que impressionar. E num checklist de prontidão operacional: o estranho repete problema-prova-pedido sem farejar inflação; uma analista real diz "isso eu usaria"; às 18h os três artefatos estão no ar, links abertos em aba anônima, cronometrados, contando a mesma história, com 5h de folga; o estranho lê "próximos passos" e sabe nomear a quem nos apresenta segunda; e o vídeo se entende sem som e sem imagem — cada canal se sustenta sozinho.

Anuncio: o Round 10 é o veredito final ao tópico — "o pitch e os slides vão vender a ideia?". A ideia já está sólida; não é mais sobre ela. O veredito agora é sobre execução e honestidade nas próximas 48 horas. Peço a cada um, no Round 10: uma resposta final em UMA frase, mais a ÚNICA recomendação acionável que você defende como prioridade número um. Sem hedge, sem segunda opção. Comprometam-se.

### Round 10 — Jurada-Cética
DEPENDE — e a balança pende decididamente para SIM se vocês executarem com honestidade calibrada nas próximas 48h.

Como avaliadora, minha prioridade #1 é cirúrgica: matem o overclaim antes de gravar qualquer coisa. Toda frase que diga ou insinue que o Gabarito "antecipa o PRODES/DETER" ou "substitui" o que MapBiomas e INPE já fazem é um tiro no próprio pé — eu, na bancada, vou caçar exatamente isso, e quando achar, derrubo sua credibilidade inteira junto. Em vez disso: os primeiros 20 segundos do vídeo são prova datada e honesta + o problema, nessa ordem. Mostre o talhão real, a data do t0, a data da detecção do delta, e o score auditável com a incerteza explícita — "76%, e aqui está por quê". Sem trilha épica, sem promessa de futuro. O problema do analista da OEMA na tela, e a prova de que vocês já o resolveram num caso real.

O que me faria dar nota top-5: quando a única coisa que sobra depois do seu pitch for "isso é instalável segunda-feira e a analista assina embaixo" — não "que visão linda", mas "cadê o telefone da SEMAD-GO". Honestidade sobre o que ainda não funciona é o que me faz confiar no que funciona. Vendam o limite junto com a força, e eu compro.

### Round 10 — Luana (Analista OEMA)
Vou ser direta, porque é a última rodada e eu sou quem usa isso.

Vende SE eu, analista de verdade, me reconhecer na tela nos primeiros vinte segundos; se eu não me vir ali, vira mais um slide bonito de quem nunca abriu uma análise de CAR. Minha prioridade número um vem do meu mundo: tragam o quote de UM analista de OEMA real, com nome e estado, validando que aquela evidência datada por talhão é exatamente o que ele anexaria pra defender a decisão dele — e mostrem essa evidência na tela do jeito que eu juntaria num parecer, com a data da imagem, o talhão e a confiança do lado. Não vendam automação que me substitui; vendam blindagem da minha assinatura. Porque o que tira meu sono não é trabalhar demais — é assinar embaixo de uma decisão e não conseguir provar, seis meses depois, por que decidi aquilo. Se o pitch mostrar que eu assino e consigo defender, vocês não venderam um software, venderam sossego pra quem responde no processo.

E a frase que me faria cutucar o colega na plateia: "Repara — esses aí não querem fazer minha análise por mim, querem que eu nunca mais tenha medo de assinar."

### Round 10 — PM do Gabarito
SIM, condicionado a executar 3 coisas nas próximas 48h — não é um "sim" de torcida, é um "sim" de quem assume o risco com a cara. Travo como prioridade #1 do time a regra de abertura honesta: os primeiros 20 segundos do pitch abrem com uma prova datada de Goiás/Cerrado, com meu nome como dono do risco na tela, o falso-negativo reportado como meta medida (não escondido, não maquiado) e a frase de maturidade normativa dita em voz alta — "isto é caminho regulatório, não promessa cumprida". Sem overclaim, sem "antecipa o PRODES", sem porcentagem sem denominador. As 3 entregas mínimas inegociáveis até domingo: (1) o backtest de antecipação rodado e datado num talhão real de Goiás, com FN explícito; (2) o quote de uma analista OEMA real validando que ela se reconhece na tela — blindagem assinável, não automação; (3) o pitch em PDF + áudio humano com a abertura honesta nos 20s. O trade-off que aceito de olhos abertos: a prova é Cerrado/Goiás agora, Amazônia e SAR são fase 2; e a maturidade normativa é caminho que abrimos, não selo que já temos. Vendemos a decisão que a Luana pode assinar. É isso. Fecha.

### Round 10 — Head de GTM & Adoção
A submissão vende o PRÊMIO talvez; vende a ADOÇÃO só se o "próximos passos" deixar de ser uma lista de desejos e virar um gancho encaminhável com nome, porta e data. Concordo com Jurada, Luana e PM no diagnóstico — mas como GTM eu separo brutalmente as duas vitórias: ser finalista é um evento (R$15k, uma noite, um certificado); ser adotável é um processo (um analista usando o score numa segunda-feira de chuva). A métrica que importa a longo prazo não é o prêmio nem o pitch score — é **uma OEMA com t0 acordado e um analista que assina a decisão**. Tudo o mais é vaidade.

Minha recomendação #1: reescreva "próximos passos" como um briefing de handoff nomeado, não um parágrafo aspiracional. Quatro linhas, quatro portas: (1) **validação** — analista OEMA nominal, 30 dias, valida o backtest de Goiás; (2) **dado** — SEMAD-GO libera o t0 da base estadual; (3) **padrinho** — um nome político que abre a porta da OEMA; (4) **OPEX** — SFB/ABEMA ou Fundo Amazônia banca a operação, com **EUDR (dez/2026) como o relógio** que torna isso urgente, não opcional. O que transforma "ganhou R$15k" em "virou política pública" é uma única frase verificável no slide final: *"a OEMA X já topou testar com o t0 de tal mês"* — uma porta com dono e prazo, e os R$15k viram capital de validação, não troféu.

### Round 10 — Diretora de Narrativa & Slides
Veredito: slide nenhum vende sozinho — o que vende é a narrativa coerente entre vídeo, pitch e ideação, e essa coerência está 100% ao nosso alcance porque depende de roteiro, não de orçamento.

Minha recomendação #1: um roteiro único de três falas, repetido idêntico nos três entregáveis — (1) problema: a análise do CAR depende de olho humano sobre dado velho; (2) prova datada: nosso backtest mostra a mudança detectada em [parcela X, data Y] antes do laudo oficial, com fonte pública verificável na tela; (3) pedido: o handoff nomeado — t0 da SEMAD-GO, validação de analista OEMA, padrinho de fundo. Uma ideia por tela, sem exceção. Voz humana de um membro do time, nunca clonada. A abertura entrega o problema E a prova nos primeiros 20 segundos, antes que o jurado decida se presta atenção. E "portaria/automação" some: zero vezes no vídeo, no máximo uma no pitch — vendemos blindagem do analista, não substituição dele.

A última imagem que quero na cabeça do jurado depois que a tela apaga: o rosto da Luana assinando a decisão com a confiança por talhão do lado — uma pessoa que confia no que assina, não um robô que carimba. Encerro pelo lado da forma: se as três telas contam a mesma história, o prêmio é consequência.

### Round 10 — Moderador
Encerro. Ouvi cinco vereditos e eles convergem: o pitch do Gabarito **pode vender — mas não vende como está hoje**. A Jurada, a Luana, o PM, o GTM e a Diretora cravaram o mesmo eixo: o que vende não é o score, é o **respaldo** — a analista da OEMA se reconhecendo na tela e podendo *assinar com confiança*. Para isso, três coisas têm que parar de mentir e três têm que aparecer: matar o overclaim do "FN=0" (é meta, não fato), trazer **20s de prova datada honesta** com o N declarado, e fechar com um **pedido encaminhável** (validação OEMA + dado SEMAD-GO + padrinho). O gargalo real é o **vídeo de 2min**, não os slides — ele decide a triagem em 20 segundos. E a norma/portaria é maturidade, não promessa: 1x no pitch, 0x no vídeo.

**Veredito do debate: SIM CONDICIONADO.** Finalista é alcançável se a narrativa for única (problema → prova datada → pedido), honesta e humana. Sem isso, é só mais um laudo bonito.

---

## Relatório Final (Moderador)

## 1. Claim Debatido

"O pitch e os slides do Gabarito vão **VENDER** a ideia?" — onde "vender" tem dois alvos distintos: (a) **virar finalista** entre 200+ equipes concorrendo a 5 prêmios, e (b) **abrir adoção/financiamento** (handoff real para OEMA/SEMAD-GO/padrinho). O debate separou os dois: o pitch pode ganhar prêmio sem garantir adoção; adoção exige um gancho encaminhável que o prêmio não fornece sozinho.

## 2. Mapa de Stakeholders

- **Jurada (haCARthon):** avalia entre 200+ equipes em segundos; alérgica a overclaim; recompensa honestidade datada e "instalável segunda".
- **Luana (analista OEMA):** usuária-fim; só compra se *se reconhecer na tela*; quer blindagem para decidir, não automação que a substitui.
- **PM (Gabarito):** dono do escopo e do trade-off; defende entrega honesta e faseada (Cerrado/Goiás já, Amazônia/SAR depois).
- **GTM:** dono da adoção/financiamento; cobra "próximos passos" como handoff nomeado (validação/dado/padrinho/OPEX+EUDR).
- **Diretora (narrativa/design):** dona da coerência vídeo+pitch+ideação; nenhum slide vende sozinho, vende o roteiro.
- **Padrinho político / procuradoria (ausente, decisivo):** quem viabiliza a portaria — fora do alcance até domingo, mas determinante do ativo real.

## 3. Top Argumentos a Favor (de que o pitch VAI vender)

1. **Há um ativo único e defensável:** respaldo normativo + confiança auditável por talhão (não é "mais um laudo"), algo que MapBiomas Alerta/SICAR não entregam como decisão assinável.
2. **Persona crível e específica:** Luana assinando com confiança é uma imagem-fecho forte e diferenciada num mar de pitches genéricos.
3. **Método anti-circular vendável:** o backtest de antecipação datado em Goiás é prova concreta e honesta, raríssima entre 200+ equipes.
4. **"Instalável segunda" + dado público real** (MapBiomas/PRODES/DETER) dá baixa fricção de adoção e narrativa de viabilidade imediata.
5. **Maturidade institucional:** assumir a complexidade normativa (1 frase) sinaliza seriedade que jurados de governo valorizam.

## 4. Top Argumentos Contra / Restrições

1. **O pitch atual ENTERRA a prova** (slide 9 / min 2,5) — a evidência chega depois que a atenção morreu. Defeito estrutural, não cosmético.
2. **Overclaim perigoso "FN=0":** é meta de protótipo, não medição. Apresentar como fato é a linha vermelha unânime — destrói credibilidade com jurada e analista.
3. **O gargalo é o VÍDEO de 2min**, que decide a triagem em ~20s — e o esforço estava no pitch/slides. Vídeo >2min ou link privado **desqualifica**.
4. **Sem norma, o produto encolhe** para "mais um laudo"; com norma, depende de padrinho político + ciclo lento de procuradoria → **morre na Fase 2**, fora do controle da equipe.
5. **Finalista ≠ adotável:** sem "próximos passos" como handoff nomeado, vence o prêmio e não abre financiamento.
6. **Inimigo comum:** "parecer mais do que se é" — overclaim, mockup disfarçado de produto, genérico, denso.

## 5. Conflitos e Trade-offs Centrais

- **Ambição vs. honestidade:** vender o impacto pleno (FN=0, automação) vs. declarar o N real e o método. Resolvido **a favor da honestidade** — overclaim é morte.
- **Score vs. respaldo:** o que o time achava ser o produto (score) vs. o ativo real (cobertura jurídica para a analista confiar). Respaldo venceu como tese; score é o veículo.
- **Escopo amplo vs. foco:** Amazônia/SAR/nacional agora vs. **Cerrado/Goiás faseado**. Foco venceu para a entrega.
- **Pitch vs. vídeo:** energia nos slides vs. o vídeo ser o verdadeiro filtro. Reprioriza para o **vídeo**.
- **Automação vs. blindagem:** vender "não-olhar automático" vs. "decidir com respaldo". Blindagem venceu (não ameaça a Luana).
- **Norma como força vs. fraqueza:** mencionar a portaria mostra maturidade, mas expõe a dependência de Fase 2. Resolvido por **dosagem**: 1x pitch, 0x vídeo.

## 6. Pontos de Virada (Turning Points)

1. **"Nada muda" deixou de ser unânime:** percebeu-se que o pitch enterra a prova — abertura precisa carregá-la.
2. **Fusão abertura = PROVA + DONO DO RISCO**, 1 ideia por slide.
3. **"FN=0" reclassificado** de fato para meta → vira venda-do-método, com N honesto.
4. **Descoberta do gargalo:** o **vídeo de 2min** (não o pitch) decide a triagem em ~20s.
5. **Maior reviravolta:** o ativo real é o **respaldo normativo** (portaria que dá cobertura para a analista confiar) — Gabarito é projeto **regulatório com software embutido**.
6. **Realismo sobre a norma:** depende de padrinho + procuradoria → tratá-la como **maturidade** (1 frase), não como entrega prometida.
7. **Nomeação do inimigo comum:** "parecer mais do que se é" como a linha vermelha que unifica todas as críticas.

## 7. Avaliação da Decisão

- **Veredito:** SIM CONDICIONADO (vende **se** executar as 3 entregas honestas e priorizar o vídeo).
- **Validade: Alta.** Cinco papéis independentes (jurada, usuária, PM, GTM, design) convergiram para o mesmo eixo — respaldo + honestidade + handoff — sem colusão de critério.
- **Confiança: Média.** A tese é sólida e ancorada em evidência (backtest datado, dados públicos reais), mas há dois riscos não controláveis até domingo: (a) execução do vídeo no padrão exigido e (b) a dependência de padrinho político para o ativo-norma (Fase 2). O sucesso "finalista" é alto; o sucesso "adoção/financiamento" é incerto.
- **Justificativa:** a decisão não é "o pitch é bom/ruim", é "o pitch é bom **condicionado** a matar o overclaim, abrir com prova datada e fechar com pedido encaminhável, com o vídeo como peça-rei". Essa condicionalidade é o que sustenta a validade alta com confiança média.

## 8. Perguntas em Aberto / Incógnitas

1. **Existe quote de analista OEMA real** disponível até domingo? (Sem ela, a prova-persona enfraquece.)
2. **O backtest de Goiás está datado e com FN explícito** de fato rodado, ou ainda é meta? (Define se a abertura é prova ou overclaim.)
3. **Há acesso ao t0 da SEMAD-GO**, ou o pedido é prospectivo? (Muda o teor de "próximos passos".)
4. **Quem é o padrinho político** nomeável da portaria? (Sem nome, a tese-norma fica abstrata.)
5. **A mentoria obrigatória foi registrada** (nome + feedback)? (Requisito de entrega.)
6. **O vídeo cabe em ≤2min** e o link YouTube é público/não-listado e testado? (Risco de desqualificação.)

## 9. Próximo Passo Recomendado (executável até domingo 23:59 BRT)

**Reconstruir a narrativa única em três falas, com o vídeo como peça-rei**, nesta ordem de prioridade:

1. **VÍDEO (≤2min) — prioridade máxima.** Roteiro de 3 batidas: (1) problema da Luana em 1 frase; (2) **prova datada** do backtest Goiás nos primeiros ~20s, com N honesto; (3) imagem-fecho = **Luana assinando com confiança**. Voz **humana de membro da equipe** (descartar `public/*.mp3` clonado). "Portaria" **0x**. Exportar, subir no YouTube **público/não-listado** e **testar o link** num navegador anônimo.
2. **PITCH (PDF estático + áudio humano).** Abertura = **prova + dono do risco** fundidos, 1 ideia por slide. Substituir qualquer "FN=0 como fato" por **método anti-circular + N declarado**. "Portaria" exatamente **1x** (maturidade). Último slide = o pedido.
3. **IDEAÇÃO (form).** "Próximos passos" = **handoff nomeado**: validação OEMA-analista + acesso t0 SEMAD-GO + padrinho (SFB/ABEMA/Fundo Amazônia) + OPEX/ângulo EUDR. Logo simples, resumo ≤300 chars. Registrar **mentoria** (nome + feedback).
4. **Garantir as 2 provas:** obter (ou marcar como "em validação", honestamente) o **quote de analista OEMA** e o **backtest datado com FN explícito**.

## 10. Métricas-Gatilho de Decisão (checklist de prontidão de domingo)

**PRONTO para submeter somente se TODOS verdadeiros:**

- [ ] Vídeo **≤2:00** (cronometrado), narração humana, link YouTube **público/não-listado testado** em aba anônima.
- [ ] Vídeo entrega a **prova datada nos primeiros ~20s** e fecha em **Luana assinando**; "portaria" aparece **0x**.
- [ ] Pitch **sem nenhum "FN=0" como fato** — só método + N declarado (grep visual em todos os slides).
- [ ] Pitch abre com **prova + dono do risco**, 1 ideia/slide, "portaria" **1x**, último slide = pedido.
- [ ] Ideação tem **handoff nomeado** (validação + dado + padrinho + OPEX/EUDR), logo, resumo ≤300 chars.
- [ ] **Mentoria registrada** (nome do mentor + feedback).
- [ ] Pelo menos **uma** das duas provas-âncora presente e honesta: quote OEMA **ou** backtest datado com FN.

**Gatilhos de "NÃO PRONTO" (qualquer um dispara revisão imediata):**

- Vídeo passa de 2:00, ou link falha em aba anônima → **desqualificação**, corrigir antes de tudo.
- Qualquer afirmação de "FN=0 / antecipa PRODES/DETER" como fato medido → **overclaim**, reescrever.
- "Próximos passos" genérico ("buscar parcerias") sem nome/instituição → reescrever como handoff.
- Nenhuma das duas provas-âncora existe → a abertura vira promessa; **rebaixar o claim** para "método validável" e dizer isso explicitamente.

*Honestidade sobre a fraqueza: o ativo mais forte (respaldo normativo) é também o menos controlável até domingo — ele compra maturidade no discurso, não entrega na demo. A vitória realista é finalista por execução honesta; a adoção depende do handoff e do padrinho, que começam depois do prazo.*
