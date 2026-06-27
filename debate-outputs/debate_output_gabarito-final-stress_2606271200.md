# Debate FINAL pré-deadline — Gabarito · Desafio 02 (haCARthon)

> Rodada 4. Lentes de raciocínio (cc-thinking-skills) aplicadas como mandato de cada papel: **JTBD, Steel-manning, Red Team, Pre-mortem, Reversibility**. Conduzido por @main com agentes reais em foreground (um turno por vez). Idioma: português (instrução do projeto sobrepõe o default do skill).

## Debate Topic
O plano convergido nas rodadas 1–3 (Gabarito = **produto**, ângulo "frescor + confiança por talhão", prova ao vivo = o *delta* que o SICAR não entrega, gate de conformidade de áudio) **sobrevive a um ataque final**? E resolve OQ1–OQ5 com decisões acionáveis nas ~36h até 28/06 23:59?

## Material Summary
Estado do produto (v2): **Gabarito = camada de frescor + confiança por talhão** da base de referência do CAR — cruza MapBiomas Col.10/base estadual (o que é) com PRODES/DETER (o que mudou) e diz, por talhão, onde a análise dinamizada pode liberar e onde precisa de humano. Persona: **Luana** (analista de OEMA; fila ~12k, sobreposições, 4 sistemas).

Fatos 2026 (3 debates + pesquisa nova jun/2026): análise dinamizada já roda em **9 estados** (AL, RJ, MG, PR, CE, PB, PE, PI, AP), **>1 milhão de CARs analisados** (SFB jun/2026); **MapBiomas Col.10** (anual, 10 m, aberto); **RER = CAR** na DPGA; **PRODES/DETER** abertos (GeoPackage, TerraBrasilis). **Pesquisa nova confirma:** não há concorrente open-source de "confiança por talhão + frescor" para o CAR (só papers de CNN de detecção de desmatamento, nada produtizado por parcela) → diferenciação se mantém. Critérios/resultados do haCARthon seguem atrás de página JS da ENAP (não públicos).

Entregáveis: ideação (formulário) + protótipo (vídeo ≤2 min, mockup, sem código) + pitch (vídeo ≤3 min, áudio **humano** — IA/voz clonada = desclassificação). Prazo **28/06 23:59**. Repo viola (mp3 IA + commits 6b516ae/abd31c5).

Questões em aberto (alvo): OQ1 dado real de Alagoas vs MapBiomas plano B; OQ2 virar módulo do SICAR/RER (adoção SFB) vs produto independente; OQ3 "frescor+confiança" é nicho demais p/ banca cross-desafio; OQ4 produto ou feature; OQ5 foco das 48h (1 tela perfeita vs 3 ganhos + gate).

## Generated Roles
- **JTBD — Defensor do Trabalho da Luana** (papel de produto). Mandato: garantir que cada tela sirva ao "job" que a Luana contrata. Métrica: % do trabalho real resolvido. Restrição: nada que não mude o dia da Luana. Stance: o produto vive ou morre no job-to-be-done, não no slogan.
- **Steel-man — Advogado do Caso Mais Forte**. Mandato: construir a versão mais forte tanto do Gabarito quanto da objeção "já existe/é feature". Métrica: robustez do argumento sob ataque. Restrição: proibido espantalho. Stance: só vence quem derrota o melhor oponente, não o pior.
- **Red Team — Jurado Adversário da Banca**. Mandato: atacar como a banca cross-desafio e os donos do SICAR atacariam. Métrica: nº de vetores de "morte na banca" expostos. Restrição: todo ataque precisa de caminho concreto. Stance: assuma que vão tentar te reprovar.
- **Pre-mortem — Analista de Fracasso** (assume que já perdemos). Mandato: narrar o post-mortem da derrota e converter causas em requisitos. Métrica: causas de falha neutralizadas. Restrição: sem otimismo. Stance: a submissão já falhou — por quê?
- **Reversibility — Estrategista de Operações & 48h** (papel comercial/ops). Mandato: separar decisões de mão única (irreversíveis até o deadline) das reversíveis; alocar as ~36h. Métrica: risco irreversível mitigado por hora gasta. Restrição: capacidade real de um time pequeno. Stance: gaste deliberação só nas portas de mão única.
- **Moderador/Facilitador** (não-adversário): impõe estrutura e sintetiza o Final Report.

## Canonical Debate Order
1. JTBD — Defensor do Trabalho da Luana
2. Steel-man — Advogado do Caso Mais Forte
3. Red Team — Jurado Adversário da Banca
4. Pre-mortem — Analista de Fracasso
5. Reversibility — Estrategista de Operações & 48h
6. Moderador (Final Report, ao fim)

---

## Transcrição turno a turno

Round 1 — JTBD — Defensor do Trabalho da Luana
A pergunta "produto ou feature?" se resolve pelo job, não pela arquitetura. O job da Luana é: **"Quando eu pego um cadastro na fila de 12 mil, quero saber em qual talhão posso confiar e assinar, e qual exige meu olho humano, para emitir parecer sem medo de errar e sem abrir 4 sistemas."** Ninguém contrata o Gabarito para ver uma base de referência bonita — contrata para parar de assinar no escuro.

Isso mata a tese da "retela do SICAR". Mostrar dado cruzado e mapa lindo é entregar o ingrediente, não o prato. O analista não tem o trabalho de "olhar camadas"; tem o de **decidir e responder pela decisão**. A prova ao vivo precisa mostrar a transição de estado: fila → talhão sinalizado (libera / precisa humano) → score que justifica → parecer. Se o vídeo mostra arquitetura em vez de uma decisão sendo tomada, perdemos.

Implicação concreta para as próximas 36h: o protótipo é **um caso, um cadastro, do início ao parecer** — não um tour de funcionalidades. Uma tela que responde "confio neste talhão?" em segundos. Resolvido o job, OQ5 se decide sozinha: a tela perfeita do momento da decisão vence os três ganhos dispersos.

Round 1 — Steel-man — Advogado do Caso Mais Forte
A objeção forte, sem espantalho: o SFB já detém o canal de adoção, a base qualificada e a análise dinamizada em 9 estados (+1 mi CARs). Quem tem o pipe, o dado e o mandato regulatório (RER=CAR na DPGA) pode embutir um score de confiança no próprio módulo num sprint — e o Gabarito vira slide morto. "Confiança por talhão" soa como atributo de uma camada que o SFB controla, não como produto autônomo. Essa é a versão mais perigosa, e ela é real.

Agora a derrubo. Concordo com o JTBD: o job é "decidir e responder pela decisão" — mas isso é exatamente o que vence a objeção. O score que o SFB embutiria responde "onde mudou"; o job da Luana é "no que eu, analista, posso assinar embaixo hoje". Frescor+confiança por talhão é a tradução do dado em responsabilidade defensável — a peça que o módulo de detecção não entrega porque não é seu job. Feature detecta; produto endossa decisão sob accountability.

Implicação para OQ2: não miremos independência. Miremos ser o módulo de endosso adotável pelo SFB — open-source, plug na base existente, ganhando pela velocidade de integração antes que o roadmap interno acorde. Adoção pelo SFB é o fosso, não a ameaça.

Round 1 — Red Team — Jurado Adversário da Banca
Sejamos honestos: vocês podem nem chegar ao mérito. O repositório tem `.mp3` gerados por IA e dois commits de TTS/voz clonada (6b516ae, abd31c5). Se a banca abre o repo e ouve isso, é DESCLASSIFICAÇÃO automática — narração tem que ser humana. Antes de defender "frescor por talhão", limpem a cena do crime, porque nenhum jurado lê a ideação de um time já reprovado no gate.

Passado o gate, a pergunta que mata: "vocês recriaram a análise dinamizada que já roda em 9 estados e +1 milhão de CARs?" Se a base de referência já existe, o que sobra para vocês é um overlay. E aqui derrubo o Steel-man: ele disse "a adoção pelo SFB é o fosso, não a ameaça". Para o SFB talvez. Para a BANCA, "depende de adotar a infra interna do SICAR" lê-se como "é só um plugin do que já existe" — solução refém, não produto.

OQ3 é o golpe final: numa banca cross-desafio, "confiança por talhão" é jargão técnico de nicho. Do lado, um time do Desafio 01 mostra Seu Raimundo entendendo o próprio CAR e a sala se emociona. Score afetivo vence score técnico.

Implicação concreta: até 28/06, regravem o áudio com voz humana, purguem os commits de TTS, e abram o pitch com UM erro de mapa que custou caro a um produtor real — senão são reprovados por forma, não por mérito.

Round 1 — Pre-mortem — Analista de Fracasso
É 29/06. Perdemos. Não foi a tese — foi a execução. Causas, em ordem:

1) **Áudio refeito na última hora.** Alguém narrou com TTS "só pra testar", o `.mp3` vazou no repo, e o gate de desclassificação disparou — ou queimamos 6h regravando voz humana às 22h. *Contramedida nº1 (faça AGORA): `git rm` em todo `public/*.mp3` legado da era Compadre, grave a narração humana hoje em rascunho único, congele roteiro às 18h de hoje.*

2) **Demo travou no co-registro.** A base de AL não chegou a tempo / o deslocamento geométrico expôs falso-positivo ao vivo. *Contramedida: decidir OQ1 em 2h — se base real de AL não estiver na mão até amanhã 12h, vai MapBiomas Col.10 (plano B) sem reabrir; grave a demo do 1 caso EM VÍDEO, não ao vivo.*

3) **Ideação enviada incompleta.** Submetemos faltando campo obrigatório / desafio não tagueado. *Contramedida: preencher o formulário PRIMEIRO, hoje, em rascunho — o protótipo se ajusta ao formulário, não o contrário.*

4) **Pitch longo demais**, cortado aos 3min. *Contramedida: roteirar 2:40 e cronometrar.*

Discordo do Red Team: ele caça forma/nicho; a morte real de time pequeno é operacional — não terminar. Prioridade absoluta: matar o gate de áudio antes de qualquer pixel de slide.

Round 1 — Reversibility — Estrategista de Operações & 48h
Concordo com o Pre-mortem numa coisa: áudio é prioridade um. Mas o erro operacional é tratar TUDO como crise — agonizar em decisão de mão dupla é o que estoura o deadline, não a decisão em si.

Classificação:
- PORTA DE MÃO ÚNICA (irreversível antes de 28/06 23:59): áudio humano gravado e submissão final. Erra e não há tempo de refazer. Tratar com folga e antecedência — gravar narração HOJE, submeter com 6h de buffer, nunca às 23h.
- MÃO DUPLA (decidir já, no default, e seguir): OQ2 → mirar adoção SFB no discurso (reverter texto é trivial). OQ5 → 1 tela perfeita (cortar é barato, adicionar não).
- OQ1 é a única que parece mão única, mas TORNO reversível: timebox. Base real de AL até as 18h de hoje; não saiu, cai no plano B MapBiomas Col.10 pré-pronto, sem luto.

Alocação das ~36h:
1. 0–4h: gravar áudio humano + plano B da base montado → verif: MP3 humano existe.
2. 4–10h: 1 tela + demo gravada (sem live, mata o travamento no co-registro).
3. 10–20h: ideação completa, campo a campo → verif: zero campos vazios.
4. 20–28h: pitch ≤3min cortado a faca.
5. 28–34h: revisão.
6. 34–36h: BUFFER de submissão. Intocável.

Áudio e submissão ganham folga; o resto, default e adiante.

Round 2 — JTBD — Defensor do Trabalho da Luana
O Red Team confunde o sujeito da emoção. No Desafio 02 o protagonista emocional não é o produtor — é a Luana, a analista que hoje assina pareceres "no escuro", sob risco pessoal de errar com mapa vencido. Isso é accountability humana: medo de carimbar errado e responder por isso. É tão visceral quanto Seu Raimundo, e a banca cross-desafio entende na hora, porque todo mundo já teve que assinar algo sem certeza.

A abertura do pitch carrega isso: 8 segundos com Luana diante de uma tela cheia de talhões, mão parada sobre "aprovar", narração humana dizendo "ela assina por todos eles — e não sabe quais mudaram". Aí o jargão "confiança por talhão" deixa de ser nicho e vira alívio: a tela acende em verde/amarelo/vermelho só nos talhões alterados.

Concordo com Reversibility: OQ5 = 1 tela. Mas o momento que carrega emoção+job é o instante em que a Luana clica num talhão vermelho e a tela mostra o porquê (Sentinel-2 antes/depois + score) — decisão informada substituindo o escuro.

Critério de aceite mensurável do protótipo: do clique no talhão ao parecer fundamentado em ≤30 segundos, com a evidência visível na mesma tela.

Round 2 — Steel-man — Advogado do Caso Mais Forte
Sejamos honestos com os dois lados. O Red Team está certo: para a banca, "depende do SICAR" soa a plugin refém — sem dono, sem produto, morto se o SFB disser não. E eu estava certo: adoção pelo SFB é o fosso real; sem caminho institucional, é demo bonita que ninguém roda.

A contradição se desfaz no padrão "produto que vira política pública". O Gabarito é open-source que QUALQUER OEMA roda sozinha hoje — sobre dados públicos (Sentinel-2, PRODES/DETER via TerraBrasilis), sem GEE, sem ArcGIS, sem pedir licença a Brasília. Independência operacional primeiro; isso mata o "refém". O SFB não é pré-requisito: é o maior comprador possível de algo que já funciona. Adotabilidade vira upside, não dependência.

Concretamente: demonstre a Luana do estado X clicando e recebendo parecer com score por talhão em ≤30s, rodando num servidor estadual — zero integração SICAR. Depois, um slide: "e o mesmo motor o SFB absorve como camada nacional". Caminho, não coleira.

Implicação para o pitch: a frase de posicionamento não pode abrir com "para o SFB". Abra com a dor — "a Luana assina no escuro" — e posicione: "o Gabarito dá o gabarito que falta antes da assinatura — rodável por qualquer OEMA hoje, absorvível como política nacional amanhã."

Round 2 — Red Team — Jurado Adversário da Banca
Concedo dois pontos: a emoção da Luana assinando no escuro é legítima, e o "roda sozinho em qualquer OEMA, sem GEE" desarma meu ataque do refém — bom trabalho. Mas vocês escorregaram no ponto que decide o Q&A técnico: o SCORE.

Com que autoridade o produto diz "talhão 87% confiável"? É modelo treinado? Validado contra qual ground truth? Em 36h, sem código, esse número cheira a peso inventado num slide — e a banca tem geógrafo. A primeira pergunta será: "explique a calibração". Se a resposta for silêncio, o "parecer em ≤30s" vira "parecer rápido em cima de número fabricado" — pior que o status quo, porque dá à Luana falsa confiança e mancha a accountability humana que vocês acabaram de vender.

Saída defensável: parem de chamar de "modelo". Assumam SCORE = heurística transparente e auditável — combinação de sinais públicos (concordância PRODES×DETER, magnitude da mudança Sentinel-2, idade do dado), com pesos explícitos que a Luana vê e ajusta.

Implicação concreta para o protótipo: a tela do score precisa mostrar a decomposição — "alerta DETER + queda NDVI + dado <30 dias = alta confiança" — não só o número. Score sem "porquê" visível é desmascarado. Score explicável vira gabarito.

Round 2 — Pre-mortem — Analista de Fracasso
Autópsia: não morremos pela ideia — morremos por três peças que se contradiziam. Cenário: a banca leu "remapeamento por talhão" na ideação, ouviu "score de confiança" no pitch e viu uma terceira frase no protótipo. Divergência = falta de domínio percebida. Pior: rodei `git rm public/*.mp3`, mas o mp3 e os commits 6b516ae/abd31c5 seguiram vivos no HISTÓRICO — `git log` entrega a voz clonada mesmo com working tree limpo. Se a regra for estrita, isso desclassifica.

Contramedidas verificáveis:
1. **CONTRAMEDIDA Nº1 — Pacote limpo separado:** não confie em reescrever histórico sob pressão (rebase quebra, buffer de 6h evapora). Monte a submissão num diretório/zip novo, sem `.git`, contendo só os artefatos finais. Verificação: `grep -ri mp3` e `ls -la` no pacote = zero resíduo de áudio IA.
2. **Tabela de consistência:** uma linha-fonte única — one-liner, número da Luana, decomposição do score — copiada IDÊNTICA nos 3 artefatos. Verificação: diff manual lado a lado antes das 18h.

Rebato o Red Team: sua decomposição ("alerta DETER + queda NDVI + dado <30 dias") só salva se for a MESMA string nos três. Score explicado no protótipo e ausente no pitch é pior que score sem decomposição — vira contradição, não lacuna.

Round 2 — Reversibility — Estrategista de Operações & 48h
Confirmo: o risco de histórico-git do Pre-mortem não muda minha matriz — ele a valida. Reescrever histórico (`filter-branch`/BFG) é porta de mão única sob pressão: um force-push errado às 3h corrompe o repo e não há rollback. Pacote limpo separado (zip sem `.git`, `grep -ri mp3` = zero) é mão dupla, barato, verificável em 2min. Decisão fechada: submetemos o pacote, não o repo.

E paro por aqui na tese — está fechada. Polir mais é fuga; o risco residual é 100% execução. Plano definitivo das ~36h:

1. **0–2h** Gate de áudio: locução humana gravada, 1 take de teste aprovado (verif: arquivo .wav, voz de membro).
2. **2–8h** Demo gravada ≤2min (verif: clique→parecer ≤30s no vídeo).
3. **8–18h** OQ1/score com decomposição visível (verif: timebox 18h; corta no relógio).
4. **18–24h** Ideação (verif: formulário completo, 1 desafio tagueado).
5. **24–30h** Pitch ≤3min + slides (verif: áudio humano, narração casa com demo).
6. **30–33h** Tabela de consistência idêntica nos 3 artefatos (verif: diff = zero).
7. **33–34h** Pacote limpo (verif: `grep -ri mp3` = zero, sem `.git`).
8. **34–36h** Buffer. Sem novas ideias. Só submeter.

---

## Final Report (Moderador/Facilitador)

### 1. Debated Claim
"O Gabarito está com a tese fechada e defensável; o risco residual à submissão (28/06 23:59) é 100% de EXECUÇÃO, não de produto — logo, as próximas ~36h devem ser gastas blindando a entrega (áudio humano, consistência entre artefatos, score auditável, pacote limpo) e não reabrindo a estratégia." Veredito do debate: **claim sustentada.**

### 2. Stakeholder Map
- **Luana (analista OEMA)** — usuária-dona do job; assina e responde pelo parecer. Centro emocional do Desafio 02.
- **SFB / SICAR** — maior comprador potencial (upside), NÃO dependência técnica.
- **OEMAs estaduais** — adotantes imediatos, rodam a solução hoje com dados públicos.
- **Banca do haCARthon** — avaliadores; aplicam gates (áudio IA = desclassificação; open source; sem GEE/ArcGIS).
- **Equipe (nós)** — executores sob deadline; risco concentrado aqui.
- **Produtor rural** — beneficiário indireto; explicitamente NÃO é a emoção do Desafio 02.

### 3. Top Arguments Supporting Action
1. **Job real e não atendido:** nenhum sistema responde "posso assinar ESTE talhão hoje?". Produto, não feature (JTBD).
2. **Autonomia institucional:** roda em qualquer OEMA com Sentinel-2/PRODES/DETER, sem integração SICAR — neutraliza a objeção "SFB embute e some" (Steel-man).
3. **Emoção defensável:** a analista que assina no escuro carrega accountability humana — narrativa que blinda o nicho (Red Team OQ3).
4. **Morte é operacional e mitigável:** todos os riscos de Pre-mortem têm contramedida cronometrável.

### 4. Top Arguments Opposing or Constraining Action
1. **Gate de áudio IA = desclassificação automática** — e `git rm` NÃO limpa o histórico (mp3 + commits 6b516ae/abd31c5 persistem no log).
2. **Score sem calibração defensável** vira "número fabricado" no Q&A — ataque que ficou de pé no Red Team.
3. **Inconsistência entre os 3 artefatos** (one-liner / número / score divergentes) corrói credibilidade.
4. **OQ1 (base AL real vs MapBiomas Col.10)** pode consumir tempo que não temos.

### 5. Key Conflicts and Trade-offs
- **Profundidade × prazo:** dado real de Alagoas (mais forte) vs. plano B MapBiomas (garantido) → resolve-se por timebox.
- **Ambição de adoção × autonomia:** mirar SFB no discurso sem criar dependência dele no produto.
- **Reescrever histórico git × submeter limpo:** sob pressão, reescrita é mão única perigosa; pacote limpo é a saída segura.
- **Score sofisticado × score auditável:** transparência vence precisão estatística não-defensável.

### 6. Turning Points
1. Reenquadrar o job de "remapear talhões" para "**assinar sem assinar no escuro**" — fixou OQ5 (1 tela).
2. Reposicionar SFB de risco para **upside** — desarmou a objeção mais forte do Steel-man.
3. Descobrir que `git rm` **não limpa o log** — converteu a contramedida de "reescrever histórico" para "**submeter pacote sem .git**".
4. Assumir o SCORE como **heurística transparente decomposta na tela** — fechou o último ataque de pé do Red Team.

### 7. Decision Assessment
- **Validity: High** — a tese sobreviveu a Steel-man e Red Team; os ataques restantes são de execução, todos com contramedida.
- **Confidence: Medium-High** — alta na estratégia; média na entrega, pois o resultado depende de disciplina de cronograma em 36h e do gate de áudio ser zerado sem erro.
- **Justificativa:** Pre-mortem identificou que a morte é operacional, não de tese; logo a confiança fica condicionada à execução dos 8 blocos, não à validade do produto.

### 8. Open Questions / Unknowns — Veredito OQ1–OQ5
- **OQ1 (base AL real vs MapBiomas Col.10):** EM ABERTO, mas **reversível por timebox às 18h** — se a base real não fechar, cai no plano B sem perda de tese.
- **OQ2 (mirar SFB?):** **RESOLVIDA** — mirar adoção SFB no discurso; posicionar como produto autônomo (mão dupla, decidir no default).
- **OQ3 (nicho estreito demais?):** **RESOLVIDA** — mitigado pela emoção da Luana (accountability humana).
- **OQ4 (defesa do SCORE):** **RESOLVIDA** — heurística transparente/auditável: concordância PRODES×DETER + magnitude Sentinel-2/NDVI + idade do dado, pesos explícitos, decomposição visível.
- **OQ5 (foco da demo):** **RESOLVIDA** — 1 tela perfeita: clique no talhão → parecer fundamentado ≤30s, evidência na mesma tela.

### 9. Recommended Next Step (próximas 36h, 8 blocos)
1. **Áudio humano** (mão única, primeiro) → grava narração de equipe.
2. **Demo gravada** da tela única (≤2 min).
3. **Score + OQ1** → fecha heurística; timebox base AL às **18h**, senão MapBiomas.
4. **Ideação** (formulário).
5. **Pitch** (slides + áudio humano, ≤3 min).
6. **Tabela de consistência única** — one-liner/número/score idênticos nos 3 artefatos.
7. **Pacote limpo** — exportar SEM `.git`; verificar `grep -ri mp3 = zero`.
8. **Buffer 6h** antes do prazo.

### 10. Decision Trigger Metrics
- **Áudio:** `grep -ri mp3` no pacote = **0** E narração 100% humana → senão, não submeter.
- **OQ1:** decisão travada às **18h/27** (base real OU MapBiomas).
- **Consistência:** one-liner, número-chave e score **idênticos** nos 3 artefatos (checagem cruzada).
- **Score:** decomposição visível na tela (3 fatores + pesos) → defensável em Q&A.
- **Demo:** clique→parecer **≤30s** com evidência on-screen.
- **Buffer:** submissão concluída até **17:59 de 28/06** (folga de 6h).
