# 08 — Revisão PFD: linguagem, tonalidade e público-alvo

**Método:** Perception-First Design (PFD v0.7.0), Mode 1 — Avaliação. Stack de 5 camadas (L0→L4), corrigido por audiência.
**Artefatos avaliados:** `index.html` (documento de posicionamento/narrativa) + a voz de marca definida em `pm-role.md`.
**Data:** 2026-06-26.

---

## O reenquadramento que decide tudo: este documento tem DOIS públicos, e nenhum deles é o Seu Raimundo

O cabeçalho diz **"Posicionamento & Narrativa · Interno"** e a seção final ("A chamada — pro time: Leiam, discordem, melhorem") é endereçada à **equipe**. Mas a peça também funciona como material de **pitch para jurados do haCARthon, cooperativas e financiadores**. São dois públicos letrados e fluentes em design.

O **Seu Raimundo — 58 anos, baixa escolaridade, voz-primeiro, internet fraca, "não confia em gente de terno"** — nunca veria esta página, nem conseguiria lê-la. E está tudo bem: a superfície real do produto para ele é a **conversa no WhatsApp por áudio**, que **não existe em nenhum artefato do projeto**.

> **A maior falha de percepção do projeto não está nesta página — está na sua ausência:** não há um único artefato que *demonstre* a experiência do Seu Raimundo (uma conversa real do Compadre por áudio). O projeto inteiro *descreve* essa experiência; nunca a *mostra*.

Por isso a avaliação abaixo roda em **duas calibrações**: (A) o documento para o público letrado (equipe/jurados/coops) e (B) o que ele revela sobre o produto para o público-fim.

---

## Camada 0 — Carga Cognitiva · ✅ valida (público A) / não se aplica (público B)

**Constraint:** memória de trabalho ~3–5 chunks; ruído visual consome banda mesmo não percebido (Cowan, 2001/2010; Hassin et al., 2009).

**Achado:** para o leitor letrado, a carga é bem gerida — seções curtas, cartões numerados, um conceito por bloco, hierarquia clara (rótulo → título → corpo). O SB7 em 7 linhas e o problema em 3 camadas são *chunking* exemplar. Risco leve: são ~10 seções de scroll; jurado skima — mas a tese de capa ("O Compadre não é o herói. O Seu Raimundo é.") carrega o essencial sozinha, então a perda é baixa.

**Citação:** Cowan (2010) para o teto de 3–5 chunks; Hassin et al. (2009) para banda gasta em processamento não consciente.

---

## Camada 1 — Primeira Impressão · ✅ valida (forte)

**Constraint:** juízo estético em 50ms; bonito é percebido como mais funcional; valência pré-verbal decide antes da análise (Lindgaard et al., 2006; Kurosu & Kashimura, 1995).

**Achado:** capa #25382A (mata) + Spectral serifada + dourado-trigo = impacto imediato e coerente com a intenção "parece do campo, não de Brasília". A tese em itálico dourado é um *thesis statement* visual perfeito (a primeira impressão É o ponto de ativação). Sem uncanny valley, sem foto de IA esquisita, sem timing estranho. Para jurado/cooperativa, o efeito estético-usabilidade joga a favor: a peça *parece* rigorosa, então o argumento entra com prior alto.

**Citação:** Lindgaard et al. (2006) para o juízo em 50ms; Kurosu & Kashimura (1995) para o efeito estético-usabilidade.

---

## Camada 2 — Fluência de Processamento · ✅ valida, com 1 ressalva

**Constraint:** o que é fácil de processar é sentido como verdadeiro; fluência sentida ≠ métrica (Reber & Schwarz, 1999; Forster, Leder & Ansorge, 2013).

**Achado:** 2 fontes, ~5 cores da terra, espaçamento e voz consistentes ponta a ponta → alta fluência sentida, que vira confiança e percepção de verdade. Coerência sensorial cruzada (cor + serifa calorosa + léxico do campo contam a mesma história). **Ressalva:** o uso pesado de rótulos em CAIXA ALTA com `letter-spacing: 3px` (13px) reduz fluência de leitura — caixa alta é mais lenta de processar. Como são rótulos, não corpo, o custo é tolerável; não escalar esse padrão para blocos de texto.

**Citação:** Reber & Schwarz (1999) para fluência→verdade; Forster, Leder & Ansorge (2013) para fluência sentida vs. métrica.

---

## Camada 3 — Viés de Percepção · 🔴 FLAG (a camada onde mora o problema)

**Constraint:** o usuário decide no piloto automático e racionaliza depois; o que ele diz ≠ o que responde; confiança é saída perceptual, não argumentativa (Nisbett & Wilson, 1977; Kahneman, 2011; Seckler et al., 2015). **Meta-regra de Calibração Cultural:** a arquitetura é universal, a calibração é cultural — validar L1 e L3 com usuários do mercado-alvo antes de rodar.

**Achado 1 — o artefato encena o gap que ele mesmo denuncia.** O documento é construído para um leitor System-2, letrado e fluente em design, *sobre* um usuário System-1, de baixa escolaridade, que jamais o leria. Para o público A (equipe/jurados) isso constrói confiança. O risco é a equipe **confundir "o documento convence pessoas como nós" com "o produto convence o Seu Raimundo"** — são priors perceptuais opostos.

**Achado 2 — a voz do Compadre está ASSERIDA, nunca validada.** Frases como *"Senhor ruralista, eu vim pra lhe ajudar, meu amigo"* e *"O senhor sim que é o herói do Brasil"* são calorosas no papel, mas para um produtor que **"não confia em gente de terno que nunca viu"**, excesso de bajulação pode disparar exatamente o prior de desconfiança — soar como o lábia do vendedor, não como o compadre. Isso é uma hipótese de L3/L1 que **só se resolve testando com produtores reais** (Calibração Cultural), não com a intuição de um time urbano/letrado. *"Você não é burro. A lei é que foi feita complicada"* é mais forte porque remove vergonha sem bajular — é o registro certo a perseguir.

**Citação:** Seckler et al. (2015) para confiança como saída perceptual; Nisbett & Wilson (1977) para a lacuna dizer-vs-fazer (a voz precisa de teste comportamental, não de aprovação em sala).

---

## Camada 4 — Arquitetura de Decisão · ⚠️ FLAG

**Constraint:** estruture o ambiente para que a escolha certa seja a mais fácil; **demonstre, não descreva** — decisões a partir de descrição subponderam o que não foi experimentado (Hertwig & Erev, 2009); registre linguístico casado à distância de compromisso (Trope & Liberman, 2010).

**Achado 1 — falta a demonstração (o maior buraco).** O produto cujo núcleo é "manda um áudio → recebe resposta de gente" **nunca é demonstrado**: não há mockup de uma conversa de WhatsApp, nenhuma amostra de áudio, nenhum print do Compadre respondendo. Para jurado e cooperativa, isso é decisivo — *demonstrar* a troca por áudio moveria a decisão de "descrição" (subvalorizada) para "experiência" (vívida). É o item de maior alavancagem do projeto inteiro.

**Achado 2 — o CTA serve o público errado para um uso externo.** A chamada final é "pro time". Como documento interno, ok. Mas quando esta peça vira pitch, não há *ask* para o leitor externo (financiar / fazer piloto / abrir a cooperativa). Para o público B, falta a resolução natural da experiência: um próximo passo concreto.

**Achado 3 — registro casado, isso está certo.** A voz meta ("Posicionamento começa pelas alternativas...", "É o nosso teste de foco") é corretamente high-construal para um documento abstrato/interno; a voz em-personagem é concreta. O documento mantém os dois registros separados — bom. Não misturar.

**Citação:** Hertwig & Erev (2009) para demonstrar>descrever; Trope & Liberman (2010) para casamento de registro/construal.

---

## Resposta direta às 3 perguntas do pedido

**Linguagem.** Excelente para o público letrado (rigorosa, calorosa, coerente). Dois registros bem separados (meta-estratégico vs. Compadre em-personagem). Único ajuste de L2: não escalar rótulos em CAIXA ALTA para texto corrido.

**Tonalidade.** O eixo "empatia + autoridade" é o certo. Mas a voz em-personagem tende à **bajulação** ("meu amigo", "o senhor é o herói do Brasil") que pode acionar a desconfiança do público-fim. Mire o registro de *"você não é burro; a lei é que é complicada"* — remove vergonha sem adular. **Status: hipótese a testar com produtores reais, não a decidir em sala.**

**Público-alvo.** Aqui está a contradição central: a peça é **sobre** o Seu Raimundo mas **para** a equipe/jurados. Não é erro — é um documento interno. O erro seria **tratar a aprovação deste documento como prova de que o produto conecta com o produtor**. Faltam dois artefatos calibrados para o público-fim: (1) uma **conversa demonstrada** no WhatsApp; (2) um **teste de voz** com 5–10 produtores reais (o próprio Concierge MVP do decision memo serve para isso).

---

## Correções priorizadas

1. **🔴 Criar o artefato que falta:** uma demonstração de conversa do Compadre por áudio/WhatsApp (mockup + 1 amostra de áudio real). Maior alavancagem para L4 com jurados e cooperativas. *Demonstrar, não descrever.*
2. **🔴 Testar a voz em campo:** rodar as frases-marca com 5–10 produtores no Concierge MVP e medir reação (vergonha removida? soou sincero ou bajulador?). Calibração Cultural antes de fixar o tom.
3. **⚠️ Se a peça virar pitch externo:** trocar a chamada "pro time" por um *ask* concreto (piloto/parceria/financiamento) com próximo passo.
4. **L2 (menor):** conter os rótulos em CAIXA ALTA aos rótulos; nunca em texto corrido.
5. **Preservar o que funciona:** capa-tese, paleta da terra, 2 fontes, separação dos registros, e a frase âncora "Você não é burro. A lei é que foi feita complicada."

*Achados iniciais. Faça Ralph Loop em qualquer camada, peça mais citações, troque para solve/analyze, ou aprofunde qualquer ponto.*
