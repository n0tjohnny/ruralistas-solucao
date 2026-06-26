---
idea_slug: "compadre"
verdict: "test"
final_score: 62
score_confidence: "medium"
created_at: "2026-06-26"
---

# Decision Memo: Compadre

## Verdict: TEST

**Score: 62/100** | Confiança: média

> Score baseado em dados parciais (sintetizados dos reports 01–06, não do pipeline). Faltam: pricing/CAC validados (monetização) e dados reais de uso (retenção). **Ressalva de enquadramento:** o Compadre é um bem público open-source pra um hackathon de governo — a nota baixa de monetização quase não conta pro objetivo imediato (ganhar + entregar MVP open source). Conta só pra sustentação pós-prêmio.

---

## Por que esse score

A ideia acerta no que é mais difícil: **um problema real e forçado por lei, num público enorme e mal atendido, alcançável por um canal de confiança que já existe.** O que ainda não está provado é o que importa pra durar — que o produtor confie e *aja* sobre a orientação, e que ela seja segura. "Test" significa: pare de planejar e teste a aposta central antes de construir muito.

## Top 3 Forças

1. **Competição (82/100):** nicho vazio — RAImundo (Embrapa) não cobre CAR e a Agrotools/ScoreCAR serve corporações; ninguém atende o pequeno produtor em CAR via WhatsApp (report 04).
2. **Distribuição (80/100):** 96% dos produtores usam WhatsApp pra negócios (report 03); cooperativas/ATER são confiança pronta e o time já tem contato (Mario).
3. **Demanda (78/100):** dor obrigatória — R$6,2bi de crédito travado por CAR irregular (1º sem/2024) e só ~3,3% dos CARs analisados (report 02).

## Top 3 Riscos

1. **Monetização (35/100):** não há pagador validado — o produtor não paga ("sem pagar caro" é a promessa). Se ninguém (cooperativa/governo/banco) bancar, o projeto morre depois do prêmio, por mais útil que seja.
2. **Retenção (40/100):** fazer o CAR é tarefa episódica, quase única. Sem expandir pra outras burocracias rurais ou updates recorrentes, o usuário some depois de resolver — não vira hábito nem base instalada.
3. **Precisão/confiança (risco transversal):** RAG jurídico alucina 17–43% (report 05). Uma orientação errada de CAR pode gerar multa ou risco de perda de terra — pior que não existir, e destrói a marca "compadre" de uma vez.

## A Aposta Mais Arriscada

A suposição com maior chance de matar a ideia:

> "O pequeno produtor confia e usa um 'compadre' no WhatsApp pro CAR — e a orientação em linguagem simples é correta e segura o bastante pra ele agir."

**Teste isso antes de construir.** *Concierge MVP:* por 1 cooperativa, abram um número de WhatsApp "Compadre" operado **por vocês, com um conhecedor de CAR/EMATER validando cada resposta**. 5–10 produtores em 48–72h mandam dúvida por áudio; vocês guiam o próximo passo. Custo ~R$0. **Passa se:** ≥60% dão o próximo passo concreto do CAR **E** 100% das respostas validadas como corretas por especialista.

## Pré-mortem: se falhar em 12 meses

1. **Confiança/precisão:** o bot deu uma orientação errada (ou genérica demais), um produtor se queimou, a notícia correu na cooperativa e ninguém mais usou.
2. **Sustentação:** acabou o dinheiro do prêmio e nenhum pagador (coop/governo/banco) assumiu o custo de operação — o projeto parou.
3. **Retenção/distribuição:** sem a cooperativa empurrando ativamente, o uso ficou em poucos curiosos; tarefa única, sem retorno, sem boca a boca.

---

## O que fazer agora

**Esta semana / durante a maratona:** rodar o Concierge MVP acima com a cooperativa do contato do Mario. Troquem o "form de opinião" por **sinal de comportamento** — é isso que vira prova no pitch. Em paralelo, montem a base de conhecimento do CAR (Código Florestal + manuais SICAR) pra o RAG, já com **revisão humana obrigatória** e disclaimer "não sou advogado". Não construam autoatendimento completo antes do teste passar.

**Kill criteria:** se <60% dos produtores derem o próximo passo após a orientação, OU se aparecer qualquer resposta materialmente errada não pega pela revisão, pare o autoatendimento.

## Se não funcionar

Pivotar de "produtor se autoatende" para **"agente da cooperativa usa o Compadre lado a lado com o produtor"** (canal C do pm-role) — preserva distribuição e confiança, e tira o risco de precisão das mãos do produtor.

---

## Adendo — pesquisa aprofundada (report 07, jun/2026)

Quatro achados que afetam o veredito (não mudam o "TEST", mas afiam o pitch e o escopo):

1. **Janela datada eleva a urgência da demanda.** A **Res. CMN 5.303/2026** (reescalonou a 5.268) dá ao pequeno produtor prazo até **03/01/2028** para o rigor de auditoria de crédito (PRODES). Reforça Demanda; gatilho temporal que atenua parcialmente a retenção episódica. Atenção: ADPF 1.228/DF (rel. Gilmar Mendes) pode mexer na regra → não amarrar o valor só ao prazo.
2. **Risco de monetização/sustentação ganha aliado.** O tema "ATER digital + IA no WhatsApp" virou política ativa (Tecnofam 2026/Anater; Empaer-PB; CAR Pré-Preenchido/MGI) — há mais portas institucionais de pagador que em jun/2026 parecia.
3. **Novo risco: obsolescência pelo CAR Pré-Preenchido.** Mitigação: posicionar como tradução + "entender a recusa de crédito", não data-entry.
4. **Escopo de maior valor identificado:** diagnóstico de recusa de crédito (área CAR×contrato, alerta PRODES, ASV/TAC/PRAD) — alto valor, alto risco → revisão humana obrigatória. Mapeado no PRD como US-007/FR-017 (Fase 2).

**Kill criteria inalterados.** PRD atualizado para v1.1 com esses pontos.
