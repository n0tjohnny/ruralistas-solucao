# Debate de QUALIDADE — A DOR do Desafio 02 (haCARthon · CAR)

> Rodada dedicada a **encontrar e estressar a DOR-RAIZ** do Desafio 02 (atualização do mapeamento de uso/cobertura do solo p/ as análises do CAR). **Sem logística de submissão, sem mp3, sem resíduo do desafio de que pivotamos.** Lentes de raciocínio: **Five-Whys / Root-Cause, Theory of Constraints, Feedback Loops, Map-Territory, JTBD**. Conduzido por @main com agentes reais em foreground (um turno por vez). Idioma: português.

## Debate Topic
**Qual é a DOR-RAIZ do Desafio 02 — e o vai-e-volta ruralista↔estado, a fila e a lentidão são sintomas de quê?** Sub-perguntas obrigatórias a responder: (a) de onde vêm os dados e por que a base nasce velha; (b) o que dói no dia do técnico; (c) por que existe o vai-e-volta ruralista↔estado; (d) por que demora tanto; (e) como isso deve ser resolvido.

## Material Summary (fontes oficiais — Lives haCARthon + reports)
- **Base de referência = "gabarito":** mapa de satélite vetorizado, confrontado contra a declaração. Produzido por licitação (município/estado), leva **~2–2,5 anos** → **nasce defasado**. A base é *dinâmica*; sua produção é lenta e cara.
- **Dor do técnico (OEMA):** sem confiar na base velha, abandona a automação e analisa à mão → de **20–30 mil/dia (auto) para ~6/dia (manual)**. Fila ~12 mil; sobreposições (UC/TI/outro CAR); 4 sistemas; assina parecer "no escuro".
- **Vai-e-volta:** ruralista **auto-declara** o polígono → análise dinamizada **cruza** declarado (veg. nativa, hidrografia, área consolidada) contra a base → divergência gera **notificação/pendência** (Central do Proprietário + e-mail) → **retificação** → re-análise. Loop alimentado por (1) declaração auto-feita e (2) base velha que gera **falso-positivo até em declaração correta**.
- **Direção do governo:** **CAR Pré-Preenchido** usa a base p/ propor a geometria ao ruralista (ele confirma) → corta o vai-e-volta na origem. A base de referência é o eixo da conferência E do pré-preenchimento. Análise dinamizada já roda em 9 estados, +1 mi CARs (SFB jun/2026). Dados abertos: Sentinel-2, PRODES/DETER (GeoPackage, TerraBrasilis), MapBiomas Col.10 (anual, 10 m). Regras: open source, sem GEE/ArcGIS.

## Generated Roles
- **Analista da OEMA ("Luana")** — domínio/usuária. Lente JTBD. Métrica: pareceres confiáveis/dia. Restrição: responde juridicamente pela assinatura. Stance: a dor é "não posso confiar na base, então julgo à mão e a fila não anda".
- **Geógrafa da Base de Referência** — domínio/dados. Lente Map-Territory. Métrica: acurácia/atualidade da base. Restrição: licitação + custo + erro máximo contratado. Stance: a dor nasce a montante — produzir a base é lento/caro, por isso vive velha.
- **Engenheiro da Análise Dinamizada (SICAR/SFB)** — domínio/sistemas. Lente Theory of Constraints. Métrica: % de cruzamentos automáticos sem revisão. Restrição: não pode decidir o que é legal (Código Florestal). Stance: o gargalo não é a base, é a **qualidade da auto-declaração**; pré-preenchimento resolve mais.
- **Responsável Técnico do Ruralista** — domínio/o outro lado do loop. Lente Feedback Loops. Métrica: cadastro aprovado sem retrabalho. Restrição: cliente não entende juridiquês geométrico. Stance: a dor é o vai-e-volta — notificação por divergência que eu não causei (base errada).
- **PM do Gabarito** — papel de PRODUTO. Lente: traduzir dor→solução, mas **proibido propor solução antes da dor-raiz estar cravada**. Métrica: a solução ataca a causa, não o sintoma. Stance: a raiz é a base que envelhece sozinha; tudo a jusante é sintoma.
- **Gestor de OEMA / Financiador de Política Pública** — papel COMERCIAL/ops. Lente: economia política / incentivos. Métrica: custo por cadastro regularizado; orçamento. Restrição: dinheiro público, edital, prazo eleitoral. Stance: o status quo persiste porque ninguém paga pela atualização contínua — só por remapeamento pontual.
- **Moderador/Facilitador** (não-adversário): impõe estrutura, força o Five-Whys e sintetiza o Final Report respondendo (a)–(e).

## Canonical Debate Order
1. Analista da OEMA ("Luana")
2. Geógrafa da Base de Referência
3. Engenheiro da Análise Dinamizada (SICAR/SFB)
4. Responsável Técnico do Ruralista
5. PM do Gabarito
6. Gestor de OEMA / Financiador de Política Pública
7. Moderador (Final Report, ao fim)

---

## Transcrição turno a turno

Round 1 — Analista da OEMA ("Luana")
Quando eu abro a fila de manhã e vejo doze mil imóveis parados, eu preciso confiar na análise dinamizada pra liberar 20, 30 mil por dia — mas a base de referência tem três anos de idade, nasceu velha da licitação, e eu sei que aquele desmatamento que o satélite mostra hoje não está no gabarito que o sistema cruza. Aí trava tudo.

Quando o sistema aponta divergência, eu preciso saber se é real ou se é a base que está defasada — mas como não tenho como saber, eu não confio, abro o imóvel à mão, alterno entre quatro sistemas, confiro UC, Terra Indígena, sobreposição com outro CAR, e caio de milhares de análises pra umas seis no dia.

E quando eu assino o parecer, eu preciso ter certeza, porque respondo juridicamente por aquilo — mas estou certificando uma realidade que pode ter mudado desde que a base foi feita. Esse é o medo que me paralisa: assinar errado sobre um mapa que já morreu.

O sintoma é a fila. A causa não é falta de gente nem de sistema. Para mim, a raiz é que a base de referência envelhece mais rápido do que consigo confiar nela.

Round 1 — Geógrafa da Base de Referência
Luana, eu produzo essa base, então deixa eu mostrar de onde nasce o problema. O caminho é: imagem de satélite → vetorização em mapas de uso e cobertura → confronto com os cadastros. Para chegar a você, ele passa por uma licitação com "erro máximo aceito", classificação e o vai-e-vem com a empresa contratada — dois a dois anos e meio. Quando a base entra em produção, ela já descreve um território que existiu no início do contrato.

Por isso eu refino o seu diagnóstico: não é só que a base "envelhece". É que o MODO de produzir é incompatível com o objeto. Eu entrego um retrato anual — às vezes do estado inteiro de uma vez — de um filme que muda todo mês. E o pior é o desperdício: remapeio 100% do território quando talvez 3% dos talhões mudaram. Gasto licitação, dinheiro e dois anos refazendo polígono que continua idêntico, enquanto o desmatamento de ontem, que o PRODES/DETER já viu, não entra na sua tela.

Tenho o insumo diário aberto — Sentinel-2, DETER — mas o processo só sabe trabalhar em lotes gigantes e raros. Para mim, a raiz é o descompasso entre um modo de produção em lote, total e bienal e um território que muda de forma contínua e localizada.

Round 1 — Engenheiro da Análise Dinamizada (SICAR/SFB)
Luana, Geógrafa: com respeito, vocês estão polindo o insumo errado. Pela Theory of Constraints, otimizar qualquer estágio que não seja o gargalo não move a vazão — e o gargalo do meu módulo não é a base, é o que entra nele. Eu cruzo o DECLARADO contra a referência. Se a declaração vem torta — e vem, porque o ruralista desenha o próprio polígono a olho —, a divergência explode, vira notificação, pendência, retificação, re-análise. O vai-e-volta. Imaginem a base perfeita, fresca, diária: o polígono auto-declarado continua errado, e o ciclo continua girando. Frescor de base sem corrigir a entrada é otimizar o estágio errado.

Não é teoria: é por isso que o SFB aposta no CAR PRÉ-PREENCHIDO — propor a geometria certa na origem, o ruralista só confirma. Atacamos o gargalo, não o sintoma. Já são +1 milhão de CARs em 9 estados; o que represa não é base velha, é entrada ruim.

Reconheço o limite: o pré-preenchido TAMBÉM bebe de uma base boa — sem ela, proponho geometria errada com cara de oficial, o que é pior. Logo, base importa; só não é O gargalo.

Para mim, a raiz é a qualidade da auto-declaração na origem — corrigida pelo pré-preenchimento, não por refazer a base.

Round 1 — Responsável Técnico do Ruralista
Engenheiro, eu sou quem aperta o "enviar" no SICAR — então deixa eu te corrigir de dentro. Você diz que a raiz é a auto-declaração torta. Concordo que ela vem torta. Mas POR QUÊ? Porque o produtor não é geógrafo: ele desenha a área no olho, pela cerca e pela memória, e ninguém — nem o sistema — me diz O QUE a base de referência "espera" antes de eu enviar. Eu declaro no escuro.

Aí começa o loop que se alimenta sozinho: declaro → cai notificação por divergência → mas metade das vezes a divergência é da BASE velha, não minha (área consolidada de 2010 marcada como desmatamento novo) → eu retifico ainda no escuro, chutando o que o sistema quer ouvir → cai de novo → e o crédito rural fica travado, a janela de plantio fecha. Cada volta gasta safra.

E seu "pré-preenchido resolve a entrada"? Pior: pré-preenchido com base defasada me entrega geometria errada com cara de oficial, e eu ASSINO o erro do governo. Aí a responsabilidade técnica vira minha. Não quero entrada bonita, quero entrada confiável.

Para mim, a raiz é: o produtor declara sem saber contra o quê está sendo conferido — e a base que o julga não responde por estar velha.

Round 1 — PM do Gabarito
Vou parar de propor e escutar o que os quatro acabaram de dizer, porque é a mesma coisa dita de quatro ângulos. Luana não confia e confere à mão porque a base envelhece mais rápido que a confiança. A Geógrafa remapeia 100% quando 3% mudou porque a base é produzida em lote, total e bienal. O Engenheiro quer pré-preenchido — mas o pré-preenchido propõe geometria CONTRA o quê? Contra a base. E o ruralista é notificado, julgado e travado no crédito CONTRA o quê? Contra a base.

Engenheiro, com precisão: o pré-preenchido não é alternativa à base, ele é REFÉM dela. Corrigir a entrada do produtor usando referência velha não conserta nada — espalha o erro mais rápido e com cara de oficial. Por isso a auto-declaração é gargalo secundário: é sintoma de uma referência em que ninguém confia, não a causa. Quem produz, quem confere, quem propõe e quem é julgado dependem todos do MESMO objeto — e esse objeto é velho, atualizado em bloco e opaco sobre o que mudou.

Então a dor-raiz é a base de referência defasada, atualizada em lote e sem rastro do que mudou — todos os sintomas nascem dela.

Round 1 — Gestor de OEMA / Financiador de Política Pública
Colegas, todos acertaram o sintoma e ninguém tocou na causa: por que a dor persiste se todo mundo a conhece há anos? A resposta é INCENTIVO, não técnica. Eu controlo o orçamento e te digo como ele funciona: o erário sabe pagar CAPEX de projeto — uma licitação pontual de remapeamento a cada 2 ou 2,5 anos — mas não sabe pagar OPEX de "manter a base viva" mês a mês. Não existe rubrica pra atualização contínua. Então licito uma base nova periodicamente não porque é o certo, mas porque é o único formato que o orçamento e a Lei de Licitações enxergam. A defasagem é estrutural-orçamentária antes de ser geográfica.

Engenheiro do SICAR: o pré-preenchido te seduz porque é "projeto novo", financiável, com começo-meio-fim — exatamente o vício que estou denunciando. Resolve a porta de entrada e deixa o motor de fundo intacto.

Concordo com a Luana e a Geógrafa: a base defasada é a raiz TÉCNICA. Mas atrás dela há uma raiz ECONÔMICA que a sustenta e a renova a cada ciclo. Para mim, a raiz é o financiamento que paga remapeamento pontual e nunca atualização contínua.

---

### Rodada 2 — Five-Whys até a causa-raiz única + o que a SOLUÇÃO precisa fazer

Round 2 — Analista da OEMA ("Luana")
Meu Five-Whys, do meu sintoma até o fundo: analiso 6 imóveis por dia → porque não confio na base → porque ela está velha → porque é refeita em lote a cada 2 anos → porque só há verba pra remapeamento pontual, nunca pra manutenção contínua. O Gestor tem razão: a raiz é econômica. Mas ela aterrissa no MEU teclado como desconfiança.

O que eu, como usuária, preciso pra liberar a fila não é um mapa novo — eu não tenho tempo nem mandato pra refazer mapeamento. Eu preciso saber, POR TALHÃO: o que mudou desde a base que eu tenho em mãos, e o quanto posso confiar nisso. Quero a fila já ordenada por risco real, cada talhão dizendo "mudou / não mudou + nível de confiança", com a evidência do satélite anexada (recorte Sentinel-2, data, índice). Aí libero o que é seguro e gasto meu olho só no duvidoso.

Engenheiro: pré-preenchido não me socorre na PONTA. Receber o cadastro bonitinho não me diz ONDE a base mentiu — eu continuo cega sobre a mudança. O pré-preenchido enche o formulário; eu preciso saber em quê não acreditar.

Critério de aceite mensurável: triplicar minha vazão — de 6 para 18 análises/dia — sem aumentar minha taxa de erro de liberação.

Round 2 — Geógrafa da Base de Referência
Do lado de quem produz o dado, refazer o estado inteiro é desperdício: gasto 90% do esforço redesenhando talhão que não mudou. Inverto a lógica — detecto o delta e só remapeio o que mudou. t0 = base estadual qualificada ou MapBiomas Col.10 (o "o que é hoje"). Sinal de mudança = PRODES/DETER em GeoPackage do TerraBrasilis cruzado com Sentinel-2 (NDVI antes/depois). Tudo roda em QGIS/PostGIS, aberto, sem GEE nem ArcGIS.

Isso resolve as duas dores juntas: corta meu desperdício e entrega à Luana exatamente o que ela pediu — não um mapa novo, mas "o que mudou + confiança" por talhão, com o recorte Sentinel como evidência clicável.

Sou honesta nos riscos. Co-registro: se as fontes não alinham geometricamente, o deslocamento vira falso-positivo — então a confiança precisa penalizar borda e desalinhamento. E traduzir o delta para classes do Código Florestal (APP/RL/consolidada) é caro: fica no roadmap, não no MVP.

Por isso rebato "refazer a base inteira melhor": é o caminho que mantém Luana em 6/dia.

Prova mínima viável: pegar um município, rodar o delta de um trimestre e mostrar que os talhões sinalizados batem com o DETER validado — recall do alerta antes de prometer escala.

Round 2 — Engenheiro da Análise Dinamizada (SICAR/SFB)
Concedo: na R1 eu tratava a auto-declaração como gargalo primário, mas vocês me convenceram — o pré-preenchido é refém da base. Se o t0 está defasado, eu só automatizo erro mais rápido. Aceito a inversão.

E vejo o ganho pro meu mundo, que eu não enxergava: o MESMO delta+confiança por talhão que faz a Luana confiar é exatamente o sinal que falta na minha análise dinamizada. Hoje eu cruzo tudo no mesmo balde. Com confiança por talhão eu roteio: alta confiança e sem mudança → libero automático; delta detectado ou confiança baixa → fila humana. Isso aumenta a vazão automática sem relaxar conformidade — pela Theory of Constraints, é elevar o gargalo certo, não correr no lugar errado. E fecha o ciclo: base viva alimenta pré-preenchido mais fresco, que entra menos sujo, que reduz minha fila. Os dois gargalos caem com um artefato só.

Minha exigência, inegociável: o score precisa ser auditável e explicável — qual cena, qual data, qual fonte (PRODES/DETER/Sentinel), qual limiar. Caixa-preta não entra em parecer com peso jurídico; vira nulidade.

Mudo de lado quando vocês me mostrarem o score rastreável até o pixel e a regra de corte versionada.

Round 2 — Responsável Técnico do Ruralista
Fecho meu lado: hoje eu declaro no escuro. A base que o estado usa como verdade está defasada, mas a notificação chega como se o erro fosse meu — e o produtor retifica às cegas, perde safra e trava crédito. O delta+confiança por talhão só quebra esse vai-e-volta se chegar ANTES: se eu vejo, antes de declarar ou ao cair a notificação, ONDE a base detectou mudança e com que confiança, eu paro de chutar geometria. Ou corrijo o talhão com evidência na mão, ou contesto a notificação que é da base velha — não minha.

Mas concordo só com uma condição inegociável: a evidência tem que ser legível pra mim e pro produtor, não só pro geógrafo. "Confiança 0,72" não defende ninguém. Quero recorte de imagem datado (PRODES/DETER+Sentinel sobre t0), em linguagem clara, anexável ao processo — base pra contestar OU corrigir com segurança jurídica. Rejeito qualquer painel que ilumine a Luana e deixe o produtor no escuro: isso só desloca o vai-e-volta, não o elimina.

Meu critério de sucesso: cadastro aprovado na 1ª ou 2ª tentativa, com evidência rastreável — não na 5ª retificação cega. Se o delta não couber no recibo do produtor, não resolveu a dor-raiz.

Round 2 — PM do Gabarito
Cravada a raiz, batizo a solução: **Gabarito — a base de referência VIVA do CAR**. Em uma frase: ele detecta o delta (não refaz tudo), remapeia só o talhão que mudou, e emite por talhão um score de confiança auditável com evidência legível. Isso ataca a raiz, não o sintoma: troca a base defasada/em-lote/opaca por atualização contínua e rastreável.

Um único artefato serve os três públicos. Luana recebe fila ordenada por risco com "mudou/não mudou + confiança" e recorte Sentinel — libera o que é claro, roteia o duvidoso, e sobe de 6 para 18/dia sem subir erro. O engenheiro SICAR automatiza porque o score carrega o rastro (cena, data, fonte, limiar, regra versionada) — não é caixa-preta. O produtor/RT recebe evidência datada e legível, anexável, e corrige *antes* de declarar — aprovando na 1ª/2ª tentativa.

E a raiz econômica do Gestor: por ser leve, aberto e incremental (PRODES/DETER+Sentinel, sem GEE/ArcGIS), Gabarito vira OPEX barato de atualização contínua, não CAPEX de remapeamento bienal. Paga-se o delta, não a refação.

**Pronto do MVP:** num recorte-piloto, provar que o ranking por risco antecipa os talhões realmente alterados (recall do delta), que o score é reproduzível pela regra versionada, e que Luana fecha mais análises/dia sem perder acurácia.

Round 2 — Gestor de OEMA / Financiador de Política Pública
Sou eu quem assina o cheque, então vou ser direto: a tese do PM fecha — mas só na conta de custeio. "Pagar o delta, não a refação" é exatamente o argumento que eu levo ao secretário: o custo por cadastro despenca, a fila de análise anda, e cada talhão destravado vira crédito rural liberado e safra regularizada. Isso é ganho econômico e eleitoral — vendável em qualquer mesa.

Mas atenção: orçamento estadual não tem rubrica para OPEX contínuo de geomonitoramento. Hoje a base viva sobreviveria de edital, Fundo Amazônia, BNDES ou cooperação internacional — todos viáveis, desde que a solução seja open source e platform-agnostic, como as Lives exigiram. O problema não é achar dinheiro de partida; é o que acontece quando o piloto acaba.

E aqui está meu veto condicional: sem um DONO institucional do processo contínuo — OEMA, SFB ou um consórcio interestadual com mandato e equipe — a base viva morre no fim do projeto e a gente recai no vício do CAPEX que viemos combater. Pipeline sem governança é desperdício.

Logo, a solução vencedora do Desafio 02 precisa entregar um modelo de sustentação, não só código. Minha condição de financiamento: libero o cheque quando houver dono nomeado e contrapartida de custeio plurianual amarrada.

---

## Final Report (Moderador/Facilitador)

### 1. A DOR-RAIZ (veredito)
A dor-raiz **não é apenas técnica, é econômica**: a base de referência geoespacial do CAR é financiada como **CAPEX pontual** (remapeamento total por licitação), nunca como **OPEX contínuo de atualização** — então ela nasce e permanece velha por desenho de financiamento, não por incapacidade técnica.
**Cadeia (Five-Whys):** analista confere 6/dia → porque não confia na base → porque a base está desatualizada → porque foi produzida em lote total/bienal via licitação de ~2 anos → porque só há verba para refazer tudo de uma vez, não para atualizar o delta de forma contínua → **porque inexiste dono institucional + custeio plurianual da atualização.**

### 2. Respostas às 5 perguntas
**(a) De onde vêm os dados / por que nasce velha?** Satélite → vetorização → confronto, contratado por licitação pontual (~2–2,5 anos) e em modo lote/total/bienal — incompatível com território que muda continuamente; remapeia-se 100% quando só ~3% mudou.
**(b) Dor do técnico hoje?** Luana não confia na base, analisa 6/dia e teme assinar errado (responsabilidade jurídica). Falta "mudou/não mudou + confiança" por talhão com evidência.
**(c) Por que o vai-e-volta?** Ruralista auto-declara no escuro → recebe notificação por divergência que metade das vezes é da BASE velha, não do erro dele → retifica cego → trava crédito/safra.
**(d) Por que demora?** Modo de produção em lote total e ciclo de licitação longo; refaz o todo em vez do delta.
**(e) Como resolver?** Base de referência **viva**: detectar DELTA (PRODES/DETER + Sentinel-2 sobre t0 estadual/MapBiomas), remapear só o talhão que mudou, emitir **score auditável por talhão** + evidência legível — sem GEE, em QGIS/PostGIS.

### 3. Stakeholders × exigência
- **Luana (OEMA):** "mudou/não mudou + confiança" por talhão, evidência Sentinel, fila por risco. Meta 6→18/dia sem subir erro.
- **Geógrafa:** detecção de delta sobre t0, tratar co-registro/deslocamento, classes CF no roadmap; PMV = recorte de município, recall vs DETER.
- **SICAR/Eng.:** score **auditável/explicável** (cena, data, fonte, limiar, regra versionada) p/ rotear auto vs humano — nunca caixa-preta.
- **RT/Produtor:** evidência **ANTES** da notificação, legível e anexável; sucesso = aprovado na 1ª/2ª tentativa.
- **Gestor:** **dono institucional** + custeio plurianual; modelo de sustentação (delta barato como OPEX).

### 4. Convergência
Todos dependem do **mesmo objeto** (a base): analista confere, geógrafa produz, pré-preenchido propõe, ruralista é julgado. Consenso: **delta + confiança por talhão + evidência** serve aos três públicos com um único artefato; o pré-preenchido é refém da base; remapear o delta é mais barato que o todo.

### 5. Tensões/trade-offs remanescentes
- **Auditabilidade vs simplicidade** (score rico p/ SICAR vs recorte legível p/ produtor).
- **Quem é o dono institucional?** (OEMA / SFB / consórcio) — não resolvido.
- **Co-registro/deslocamento** Sentinel × base vetorial.
- **Classes CF** (cobertura/uso) ficaram no roadmap, fora do MVP.
- **Timing**: a evidência precisa chegar antes da notificação — exige integração de fluxo, não só algoritmo.

### 6. Raiz × sintoma (exigência → recurso)
Confiança do analista → score por talhão; medo jurídico → regra versionada auditável; vai-e-volta → evidência datada antecipada ao produtor; base velha → atualização por delta (OPEX barato); roteamento SICAR → score explicável (alta→auto, baixa→humano); custo → remapear ~3% em vez de 100%.

### 7. Decision Assessment
**Validade: Alta** (dor convergente e triangulada por 6 papéis, incluindo cético que moveu). **Confiança: Média** — a técnica é viável, mas o sucesso depende de variável não controlada pelo time (dono + custeio) e de acesso ao dado estadual real.

### 8. Riscos/Open Questions
Co-registro/deslocamento; calibração e validação do score (limiares, falsos positivos); **dono institucional e sustentação plurianual** (veto condicional do Gestor); acesso real ao t0 estadual; classes CF adiadas.

### 9. Recommended Next Step
**Piloto de 1 município:** rodar delta (DETER/PRODES + Sentinel sobre t0/MapBiomas) em QGIS/PostGIS, emitir score auditável por talhão com recorte datado. **Métrica primária = recall do delta vs DETER.** Em paralelo, esboçar o **modelo de sustentação** (dono institucional + custeio OPEX) — sem ele, o protótipo não vira política.

### 10. Decision Trigger Metrics
- Vazão de análise: **6 → 18/dia** sem aumento de erro.
- **Recall do delta** vs DETER (limiar a definir, ex. ≥80%).
- Taxa de aprovação ruralista na **1ª/2ª tentativa** (sobe).
- **Custo por cadastro atualizado** (delta vs remapeamento total) cai.
