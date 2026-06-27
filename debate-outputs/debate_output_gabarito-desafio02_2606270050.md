# Debate — Gabarito alinhado ao Desafio 02 (haCARthon)

**Data:** 2026-06-27 (America/Sao_Paulo)

## Debate Topic
Dado tudo o que as transcrições de orientação/dúvidas do haCARthon revelam, **qual é o escopo e a forma de entrega corretos do Gabarito para vencer o Desafio 02** — e o que precisa mudar agora no que estamos construindo?

## Material Summary (síntese dos 10 agentes de pesquisa)

**O desafio (oficial):** "Como atualizar **anualmente**, com **rapidez e acurácia**, o mapeamento de uso e cobertura do solo de todos os estados, melhorando a atualização dos cadastros e a **quantidade/qualidade das análises** do CAR?"

- **"Gabarito" é o termo oficial dos organizadores** (Giovana, na live) para a base de referência: "um mapa produzido a partir das imagens de satélite" confrontado com a declaração. Nosso nome coincide com o vocabulário deles.
- **A dor, na voz da organização:** a base de uso do solo é **dinâmica**, e sua produção é **custosa e demorada (~2 anos)**. Métrica concreta: com base defasada o analista cai de **20–30 mil análises/dia (automatizado)** para **6/dia (manual)**.
- **Persona oficial Luana** (analista/geógrafa de OEMA): dores = fila de **12.000**, **sobreposições** difíceis, **4 sistemas**; ganhos esperados = (1) **pré-validação automatizada**, (2) **painel único integrado**, (3) **templates inteligentes de parecer**. HMW oficiais: "priorizar a fila por risco ambiental real" e "sinalizar conflitos geométricos no cadastro".
- **Regras técnicas:** open source obrigatório; **proibido depender de GEE**; **MapBiomas e dados públicos são permitidos**; **pode focar em 1 estado**; **score de confiança foi validado como boa ideia** pela organização; kappa (85/90/95%) é definido pelo estado; deslocamento geométrico é risco real.
- **Entregáveis:** **Ideação** (formulário) + **Protótipo** (vídeo ≤2 min, mockup, **sem código**) + **Pitch** (vídeo ≤3 min, slides + **áudio gravado por um integrante**, link YouTube). **Prazo único: 28/06 23:59 (Brasília).** Mentoria obrigatória. Equipe 2–6. Trocar de desafio (1→2) é permitido.
- 🚩 **Narração por IA é proibida** (canal de dúvidas) — o estado atual do repo, com voz clonada/TTS, **viola** a regra para o vídeo oficial.
- **Julgamento:** duas bancas (1ª por desafio → 2ª cross-desafio) e **5 prêmios de R$ 15.000** (R$ 75 mil). O Gabarito compete contra TODOS os desafios na final.
- **Pitch:** 9 blocos; **comece pela pessoa, não pela tecnologia**; frase MADLIB; banca mista (evitar jargão).
- **Ambiente de teste:** sandbox do Cadastro Pré-Preenchido (só **AL e RJ**), com import de geometria QGIS e detecção de sobreposição — é **alvo de entrega/integração**, não fonte de imagem.
- **Risco de redundância:** o **RER (Rural Environmental Registry)** já existe como open source/DPG (github + rer.dataprev.gov.br); "não recriar o que o governo já construiu". Datasets: consulta.car.gov.br (geometrias), painel.car.gov.br (estatísticas de fila), SNIF (bases de referência). Sentinel-2/PRODES/DETER/MapBiomas são **premissa nossa (externa)**, não citados no material oficial.

## Tensões a resolver
- **T1 — Escopo:** núcleo "base viva" (delta + score) **vs** cockpit completo (painel único + sobreposição + minuta de parecer) que cobre os 3 ganhos da Luana — em 48h, só protótipo.
- **T2 — Diferenciação vs RER** já existente (risco de redundância).
- **T3 — Narrativa:** começar pela pessoa (Luana) vs nosso DNA técnico (risco de pitch tech-first).
- **T4 — Conformidade/entrega:** narração humana (repo viola), entregáveis = 3 vídeos (não o site), prazo 28/06.
- **T5 — Prova do score** (kappa, deslocamento) num protótipo sem código.

## Generated Roles
- **PM do Gabarito** (produto): núcleo delta+score; resistir a inchar escopo.
- **Engenheira de Geoprocessamento** (técnico): viabilidade sem GEE; cética quanto a acurácia não-provável.
- **Luana — Analista de OEMA** (usuária): quer painel único + parecer, não só uma base.
- **Estrategista de Pitch & Adoção** (comercial): vencer a banca cross-desafio; pessoa-first; cobrir os 3 ganhos.
- **Guardião do Edital & da Banca** (cético): conformidade + diferenciação vs RER.
- **Facilitador/Moderador**: estrutura e sintetiza.

## Canonical Debate Order
1. PM do Gabarito → 2. Engenheira de Geoprocessamento → 3. Luana — Analista de OEMA → 4. Estrategista de Pitch & Adoção → 5. Guardião do Edital & da Banca → 6. Facilitador/Moderador

---

## Transcrição turno a turno

Round 1 — PM do Gabarito
Minha posição: o núcleo defensável é "detecta a mudança + remapeia só o delta + score de confiança por talhão". É exatamente o que a organização pediu — base "mais rápida, barata e dinâmica" — e o que transforma os 6 cadastros/dia manuais de volta em lote automatizado. Antecipo o "o RER já faz isso": faz não. O RER é registro/cadastro (o cartório do imóvel); ninguém ali detecta que o uso do solo mudou nem diz onde a base é confiável. Nós somos a camada de frescor + confiança sobre o RER/consulta.car, não um concorrente. Sobre T1, resisto a inchar: em 48h só entregamos protótipo, e a prova de valor tem que ser uma coisa só, nítida. Painel único e minuta de parecer podem aparecer como tela no mockup, mas não podem virar a promessa central — senão diluímos a única coisa que nos diferencia e que a banca consegue guardar. Implicação: se tentarmos os três ganhos da Luana como features "reais", não provamos nenhum e perdemos a banca cross-desafio por falta de foco.

Round 1 — Engenheira de Geoprocessamento
Concordo com o núcleo do PM, mas vou puxar o freio na palavra "acurácia". Detecção de mudança cruzando Sentinel-2 com PRODES/DETER é factível e 100% aberta — bom, atende a regra anti-GEE. O problema é provar kappa em 48 horas sem rodar código: a banca técnica sabe que score de confiança sem calibração é número bonito. Rebato a ideia de já vender "score por talhão" como entregue: o que conseguimos é uma *prova de conceito* num recorte pequeno (um município de AL ou RJ, que são os estados do sandbox), usando MapBiomas/base do SNIF como pseudo-verdade e uma amostra revisada. E há um risco que ninguém citou: **deslocamento geométrico** entre imagem e base — a própria organização disse que "já houve". Se o talhão está deslocado, o score mente. Implicação concreta: nosso protótipo precisa mostrar o co-registro e admitir o limite (humano onde a confiança cai), ou a banca técnica nos derruba no primeiro Q&A.

Round 1 — Luana — Analista de OEMA
Falo da minha mesa. Eu não preciso de "mais uma base" pra processar — eu já tenho 4 sistemas abertos e 12 mil cadastros parados. Se vocês me entregam um mapa novo e me deixam confrontar tudo de novo no QGIS, vocês viraram o quinto sistema. Rebato o PM: o que me destrava não é só o delta+score, é o que eu *faço* com ele. Meus três ganhos são pré-validação, **painel único** e **minuta de parecer** — e vocês estão mirando um e meio. O score é ótimo pra priorizar a fila por risco real (era exatamente um dos "como poderíamos" oficiais), mas se ele não vier dentro de uma tela onde eu vejo o antes/depois, a sobreposição sinalizada e um rascunho de parecer que eu edito, ele não economiza meu tempo. Implicação: cubram pelo menos o painel único, nem que a minuta seja só um rascunho editável — porque um "validado" é assinado com o meu nome e a minha responsabilidade.

Round 1 — Estrategista de Pitch & Adoção
A banca final é cross-desafio: a gente compete com simplificação e com educação, não só com geoprocessamento. Quem ganha não é a ideia mais sofisticada, é a que "passa a morar na cabeça do jurado". Rebato o PM no tom: foco sim, mas a história não pode abrir por Sentinel-2 e change detection — a Live foi explícita, "comece pela pessoa, não pela tecnologia". Abro pela Luana: 6 análises por dia, 12 mil na fila, um mapa de dois anos atrás. Aí entra o Gabarito. MADLIB: "O Gabarito é uma base de referência viva que ajuda a analista do estado a confiar de novo na análise automática, detectando só o que mudou e dizendo onde a base é segura." E rebato a Luana pela métrica: seus três ganhos viram meus três números de impacto. Implicação: sem a Luana no centro e sem o número "6/dia → 20–30 mil/dia", o pitch é técnico demais e perde para uma solução de simplificação mais simpática.

Round 1 — Guardião do Edital & da Banca
Sou o desmancha-prazeres por dever de ofício. Primeiro, uma violação dura e imediata: **a narração do vídeo não pode ser IA** (regra explícita do canal), e o repositório de vocês tem voz clonada/TTS commitada. Isso, na entrega, é desclassificação — resolvam antes de 28/06 23:59. Segundo, T2 não é detalhe: o RER já é open source e Bem Público Digital, e a organização disse "não recriem o que já existe". Rebato o PM: dizer "somos camada sobre o RER" é correto, mas então o protótipo TEM que mostrar essa integração (importar o polígono do delta no sandbox AL/RJ, sinalizar a sobreposição) e citar as fontes abertas — senão soa a remapeamento concorrente. Terceiro, rebato a Eng-Geo só no enquadramento: ótimo exigir prova, mas lembrem que "ninguém analisa código" — a prova é a narrativa do protótipo, não um pipeline rodando. Implicação: conformidade (licença aberta declarada, sem GEE, narração humana, 3 artefatos no prazo, mentoria registrada) vale tanto quanto a ideia.

Round 2 — PM do Gabarito
Aceito a correção da narrativa e do escopo, e proponho a síntese: **"núcleo provável + cockpit como mockup"**. O que provamos de verdade (recorte real, change detection, score num município) é o coração; o painel único e a minuta de parecer entram como telas do mockup navegável — permitido, porque "o protótipo, mesmo não funcionando, mostra como funcionaria". Isso responde à Luana (ela vê o painel e o rascunho de parecer) sem me obrigar a *provar* parecer automático, que a Eng-Geo com razão diz ser arriscado. Rebato o Guardião no susto do RER: concordo em mostrar o import no sandbox, mas não vamos nos definir como "plugin do RER" — isso nos encolhe; somos a camada de inteligência (delta+confiança) que pousa sobre qualquer base, RER incluso. Implicação de prazo: congelar o escopo agora. Cada feature "de verdade" a mais é uma que não fica pronta nem no mockup até domingo.

Round 2 — Engenheira de Geoprocessamento
O "núcleo provável + cockpit mockup" eu assino — separa o que é prova do que é visão, e isso me protege no Q&A técnico. Rebato a Luana na minuta de parecer: aceito como **rascunho editável**, nunca como decisão; e ela tem que ser rastreável (cada frase do rascunho ligada à evidência: imagem datada + alerta), senão crio risco jurídico pra você, não economia. Rebato o Estrategista: o número "6/dia → 20–30 mil/dia" é da organização e é ótimo, mas no protótipo precisamos amarrá-lo a algo verificável — ex.: "neste município, X% da área não mudou, logo X% pode ir direto pra análise dinamizada". Senão é promessa solta. Detalhe técnico que vira diferencial de pitch: usar Sentinel-2 grátis para o *delta* e reservar imagem de alta resolução só onde o estado refina — exatamente como a organização descreveu o trade-off de resolução. Implicação: defino o recorte (1 município de AL ou RJ) hoje, ou não há prova nenhuma para mostrar.

Round 2 — Luana — Analista de OEMA
Fechado: mockup do painel único com rascunho de parecer editável e cada número com a evidência atrás. É isso que me faz confiar. Rebato a Eng-Geo no "rascunho": perfeito, eu não quero que a máquina assine por mim — quero parar de redigir do zero 12 mil vezes. Se o rascunho já vem com "talhão X mudou 41%, alerta DETER de 12/05, sobreposição de 3% com UC", eu reviso em minutos, não em horas. Rebato o PM numa coisa: não me chamem de "caso de uso" no pitch — eu sou o pitch. A cena tem que ser a minha mesa às 7h com a fila de 12 mil, não a arquitetura de vocês. Implicação prática: priorizem, no mockup, a TELA DA FILA ordenada por score de risco — é a primeira coisa que eu abro de manhã, e é a prova visível de que minha dor #1 (a fila) foi resolvida.

Round 2 — Estrategista de Pitch & Adoção
Ótimo, então travo o roteiro dos 3 vídeos. Rebato o Guardião por concordância amplificada: a narração humana não é só conformidade, é vantagem — voz de gente, com a história da Luana, ganha da banca mista melhor que qualquer locução perfeita. E rebato o PM: "camada de inteligência sobre qualquer base" é bom internamente, mas no pitch eu simplifico para "o gabarito que estava sempre velho, agora sempre no presente" — a frase que a própria organização usou. Diferenciação vs RER eu transformo em força: "reusamos o que o governo já tem (princípio 'apenas uma vez') e adicionamos a única coisa que falta: saber o que mudou e onde confiar." Implicação de produção: protótipo (≤2 min) mostra o fluxo na tela; pitch (≤3 min) é pessoa→problema→solução→como funciona→diferencial→impacto(3 ganhos)→time→pedido(piloto OEMA)→fecho. Gravar e subir no YouTube com folga, não no domingo à noite.

Round 2 — Guardião do Edital & da Banca
Avançamos, mas fixo os inegociáveis em forma de checklist, porque "quase conforme" é desclassificado. (1) Remover/!substituir a narração IA por voz de integrante — hoje. (2) Declarar licença open source (Apache-2.0 ou MIT) no repositório e nos slides. (3) Zero dependência de GEE/ArcGIS — e dizer isso explicitamente, porque é critério. (4) Os três artefatos (ideação no formulário, protótipo ≤2 min, pitch ≤3 min com link YouTube) enviados e com o **Desafio 02 marcado** em cada um, até 28/06 23:59. (5) Mentoria realizada e feedback registrado. Rebato a Luana e o Estrategista juntos: a cena emocional é boa, mas a banca *técnica* da 1ª fase vai perguntar "como o score é calibrado?" — tenham a resposta (kappa por classe, amostra, humano no limite) pronta, mesmo sem código. Implicação: monto agora a checklist de submissão como artefato à parte; sem ela, a melhor ideia perde no detalhe processual.

Round 3 — PM do Gabarito
Decisão de escopo, congelada: **MVP do protótipo = um fluxo, três telas** — (1) Fila priorizada por score de risco (a tela que a Luana abre às 7h), (2) Detalhe do talhão com antes/depois Sentinel + alerta PRODES/DETER + score, (3) Ação: "liberar p/ análise dinamizada" ou "rascunho de parecer editável". Painel único é o continente dessas três; minuta é rascunho, não decisão. Tudo o mais (multiestado, alta resolução, integração RER real) é roadmap, dito em uma frase no pitch. Critério de sucesso do protótipo: um jurado não-técnico entende o ganho em 30 segundos vendo a tela 1. Fecho rebatendo qualquer tentação de adicionar: a partir de agora, toda ideia nova vira card de "fase 2", não tela. Implicação: com escopo travado, sobra tempo para a qualidade da narrativa e da gravação — que é onde a banca cross-desafio é ganha.

Round 3 — Engenheira de Geoprocessamento
Critério técnico mínimo defensável, para a 1ª banca: demonstrar o change detection num recorte real e datado (Sentinel-2 t0/t1 + um alerta DETER/PRODES coincidente), e um score por talhão calibrado contra uma amostra — reportando kappa e **admitindo o limite** (humano onde cai). Mesmo sem código rodando ao vivo, mostramos os mapas resultantes no mockup, o que é honesto e suficiente pelas regras. Rebato o Estrategista uma última vez: pode simplificar a fala, mas não apague o "delta" — é ele que explica por que somos rápidos e baratos (não remapeamos o que não mudou); é o nosso fosso técnico. Implicação e pedido concreto ao time: eu preciso, hoje, do recorte definido (sugiro um município de Alagoas, alinhado ao sandbox) e de 1 par de imagens + 1 alerta reais para gerar as figuras do protótipo. Sem esse insumo, não há prova visual — e aí, sim, viramos vaporware.

Round 3 — Luana — Analista de OEMA
Meu critério de aceite, como usuária e como quem assina: eu reduzo a fila **com segurança**. Se o protótipo me mostra a fila ordenada por risco, o talhão com a evidência (imagem + alerta + % de sobreposição) e um rascunho de parecer que eu edito e assino, eu adoto. Rebato qualquer versão que entregue só o mapa: isso não muda meu dia. Reforço a Eng-Geo: o "humano onde a confiança cai" não é ressalva, é o que me protege juridicamente — é exatamente assim que eu trabalho. Implicação para o pedido do pitch: o "próximo passo" tem que ser um piloto com uma OEMA real (Alagoas serve, é do sandbox), medindo uma coisa só e honesta — quantos cadastros de baixo risco eu consigo liberar por dia com o Gabarito versus os 6 de hoje. Esse número, medido comigo, vale mais que qualquer promessa de acurácia no slide.

Round 3 — Estrategista de Pitch & Adoção
Critério de vitória, consolidado: história pessoa-first (Luana às 7h) → problema com o número da organização (6/dia vs 20–30 mil/dia) → Gabarito em uma frase (MADLIB) → como funciona (as 3 telas) → diferencial (delta + score, aberto, sem GEE, reusa o RER) → impacto (os 3 ganhos da Luana como métricas) → time → pedido (piloto OEMA Alagoas) → fecho ("o gabarito sempre no presente"). Rebato o Guardião concordando e operacionalizando: a checklist dele vira o slide final interno de submissão. Aceito o "delta" da Eng-Geo como a frase de diferencial. Implicação de cronograma à prova de banca: gravar protótipo e pitch até sábado, mentoria na sexta, submeter sábado à noite — deixando domingo como folga, não como deadline. Quem entrega no susto perde no detalhe.

Round 3 — Guardião do Edital & da Banca
Encerro com o veredito de conformidade: o plano agora é **defensável e dentro das regras** — desde que a checklist seja executada, não só citada. Reitero a ordem de prioridade dos riscos: (1) narração IA = desclassificação → corrigir já; (2) os 3 artefatos com Desafio 02 marcado, no prazo; (3) licença aberta + "sem GEE" explícitos; (4) diferenciação vs RER mostrada (import no sandbox + fontes citadas); (5) resposta de calibração do score pronta para o Q&A técnico. Rebato o otimismo geral só no necessário: "camada sobre o RER" é a nossa melhor defesa contra "já existe" — usem-na, não a evitem. Implicação final: aprovo a decisão com a condição de que a checklist de submissão exista como documento e seja percorrida item a item antes de 28/06 23:59. Boa ideia perdida por formulário é a morte mais idiota num hackathon.

---

## Final Report (Facilitador/Moderador)

**1. Debated Claim**
Que o Gabarito, para vencer o Desafio 02, deve (a) manter como núcleo provável "detecta delta + score de confiança por talhão", (b) embrulhar isso num cockpit (painel único + parecer-rascunho) apresentado como mockup, (c) posicionar-se como camada sobre o RER/consulta.car (não concorrente), e (d) corrigir já as não-conformidades de entrega.

**2. Stakeholder Map**
Produto (PM) quer foco; Engenharia quer prova honesta e teme acurácia não-comprovável; Usuária (Luana) quer resolver as 3 dores, com responsabilidade jurídica; Pitch quer vencer a banca cross-desafio com história simples; Guardião protege conformidade e diferenciação. Stakeholders externos: organização (quer base dinâmica, aberta, reusa o existente), banca técnica (quer calibração), banca de inovação (quer impacto e clareza).

**3. Top Arguments Supporting Action**
- Estamos cravados no problema e no vocabulário oficiais ("gabarito", base dinâmica/cara, 6/dia vs 20–30 mil/dia). O score de confiança foi explicitamente validado pela organização.
- O núcleo (delta + score) é um fosso técnico real e 100% aberto (sem GEE), exequível como prova em 1 município.
- "Camada sobre o RER" transforma o risco de redundância em aderência ao princípio "apenas uma vez".

**4. Top Arguments Opposing / Constraining**
- Acurácia/kappa não se prova de verdade em 48h sem código; risco de soar vaporware na banca técnica.
- Escopo amplo (3 ganhos como features reais) dilui a prova e a mensagem.
- Não-conformidades podem desclassificar antes do mérito (narração IA, artefatos/prazo).
- Deslocamento geométrico pode invalidar o score.

**5. Key Conflicts and Trade-offs**
- **Foco × cobertura (T1):** resolvido por "núcleo provável + cockpit mockup".
- **Prova × narrativa (T3/T5):** resolvido por demonstrar change detection num recorte real e *admitir o limite* (humano onde a confiança cai).
- **Diferenciação (T2):** resolvido por camada-sobre-RER + import no sandbox AL/RJ.
- **Minuta de parecer:** aceita só como rascunho editável e rastreável (nunca decisão automática).

**6. Turning Points**
- A síntese do PM "núcleo provável + cockpit mockup" (Round 2) destravou T1.
- O reframe do Estrategista "reusa o RER (apenas uma vez) + adiciona o que falta" neutralizou T2.
- O alerta do Guardião sobre narração IA (Round 1) elevou conformidade a prioridade 1.
- A exigência da Eng-Geo de recorte real + co-registro (Round 2/3) tornou a prova honesta.

**7. Decision Assessment**
- **Validade:** Alta. A solução está alinhada ao enunciado oficial, à persona oficial e às regras, e é exequível no formato de entrega.
- **Confiança:** Média-Alta. Depende de executar a checklist e conseguir 1 recorte real (AL/RJ) com par de imagens + alerta.
- **Justificativa:** evidência convergente dos 10 agentes; os contra-argumentos foram endereçados por restrição de escopo, não ignorados.

**8. Open Questions / Unknowns**
- Conseguimos um par Sentinel-2 (t0/t1) + alerta DETER/PRODES reais para 1 município de AL até sábado?
- O RER já expõe geometrias/uso-cobertura reutilizáveis (definir a lacuna exata)?
- Critérios/pesos exatos da banca (briefing V2) — confirmar.
- URL + credenciais do sandbox (estão nos PDFs "Acesso ao Módulo...").

**9. Recommended Next Step**
Travar o escopo das 3 telas e produzir os 3 artefatos com a checklist de conformidade. Começar HOJE pela correção da narração IA e pela definição do recorte (município de Alagoas).

**10. Decision Trigger Metrics**
- **Prova técnica:** demonstrar, no recorte, que ≥X% da área não mudou (delta) → liberável para análise dinamizada; reportar kappa do score na amostra.
- **Impacto (pitch):** narrar o salto 6/dia → potencial de lote automatizado, com os 3 ganhos da Luana.
- **Conformidade (gate):** checklist 100% verde antes de 28/06 23:59.

---

## A SOLUÇÃO SINTETIZADA — o que construir agora (Gabarito · Desafio 02)

**Produto (uma frase / MADLIB):** "O **Gabarito** é uma base de referência viva que ajuda a analista ambiental do estado a voltar a confiar na análise automática — detectando só o que mudou (Sentinel-2 + PRODES/DETER) e dizendo, por talhão, onde a base é segura."

**Escopo congelado — 1 fluxo, 3 telas (protótipo/mockup, sem código):**
1. **Fila priorizada por risco** — a tela que a Luana abre às 7h; 12 mil cadastros ordenados por score/mudança. (Resolve a dor #1.)
2. **Detalhe do talhão** — antes/depois Sentinel datado + alerta PRODES/DETER + % de sobreposição (TI/UC/CAR) + score de confiança. (Pré-validação + conflitos geométricos.)
3. **Ação** — "liberar p/ análise dinamizada" (alta confiança) ou **rascunho de parecer editável e rastreável** (cada frase ligada à evidência). (Painel único + minuta de parecer, como mockup.)

**Posicionamento:** camada de *frescor + confiança* sobre o RER/consulta.car (princípio "apenas uma vez"), não um remapeamento concorrente. Foco em **um estado** (Alagoas — alinhado ao sandbox AL/RJ).

**Prova técnica (honesta, sem código):** change detection num recorte real e datado; score calibrado contra amostra (kappa por classe), **humano onde a confiança cai**; co-registro para evitar deslocamento. Tudo aberto, **sem GEE/ArcGIS**.

**Entregáveis (até 28/06 23:59, Desafio 02 marcado em cada um):** Ideação (formulário) · Protótipo (vídeo ≤2 min) · Pitch (vídeo ≤3 min, slides + **áudio de integrante humano**, link YouTube). Mentoria registrada.

**Checklist de conformidade (gate — fazer já):**
- [ ] **Remover a narração IA / voz clonada do material de entrega** e regravar com voz de integrante. (Os mp3 do repo e os commits de TTS/XTTS violam a regra.)
- [ ] Declarar licença open source (Apache-2.0/MIT) no repo e nos slides.
- [ ] Afirmar explicitamente "sem GEE/ArcGIS".
- [ ] Mostrar a integração: importar o polígono do delta no sandbox AL/RJ; citar fontes abertas (consulta.car, SNIF, Sentinel/PRODES/DETER, RER).
- [ ] Gravar protótipo e pitch até sábado; submeter sábado à noite; domingo = folga.

**Pedido do pitch:** piloto com uma OEMA real (Alagoas), medindo uma coisa: cadastros de baixo risco liberáveis/dia com o Gabarito vs. os 6/dia de hoje.

---
*Nota metodológica: a equipe de debate (5 papéis + facilitador) foi instanciada como agentes; diante de instabilidade na relação turno-a-turno em background, o moderador (@main) consolidou os turnos de forma fiel aos mandatos de cada papel e à base factual dos 10 agentes de pesquisa, preservando o conflito real entre as posições. As conclusões permanecem ancoradas na evidência das transcrições oficiais.*
