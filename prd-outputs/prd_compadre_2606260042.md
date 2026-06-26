# Compadre — Documento de Requisitos de Produto (PRD)

| Campo | Valor |
|-------|-------|
| Versão | 1.2 |
| Data | 2026-06-26 |
| Autor | AI Product Manager (Compadre) |
| Status | Draft |
| Fontes | `pm-role.md`; `debate-materials/compadre-visao-do-produto.md`; `memory/ideas/compadre/{idea.md, decision_memo.md, scores.json}`; `reports/01–07` + `reports/exploration/00–10`; `index.html` (landing) |
| Changelog | v1.1 — janela CMN 5.268/2025, recusa automática (PRODES), reposicionamento sobre o Pré-Preenchido. · v1.2 — 10 explorações: norma vigente CMN 5.303/2026 + risco ADPF/STF; API SICAR fechada a privado; offline-first; guardrail medível (cite-or-abstain/RAGAS); 3 hipóteses de pagador; licença Apache-2.0 + CC-BY/CC0. · v1.3 — validação dos 4 itens ⚠️: **5.303/2026 reescalonou os prazos — pequeno (até 4 MF) só em 03/01/2028**, médio jul/2027, grande jan/2027; cobertura CAR <60% em Amazônia/Caatinga **confirmada** (Embrapa CAR-2021); ADPF 1.228/DF com relator Min. Gilmar Mendes (sem liminar); Plano Safra AF 26/27 ainda sem números finais. |
| Contexto de entrega | haCARthon — Maratona de Soluções para o CAR (ENAP/MGI/FBDS/Impact Hub/Gov. Noruega), 26–28/06/2026. Open source obrigatório (CAR como Bem Público Digital). Premiação R$ 75.000. |

---

## 1. Resumo Executivo

O **Compadre** é um assistente de confiança no WhatsApp que traduz a lei do CAR (Cadastro Ambiental Rural) em linguagem de gente — por áudio, no canal que o produtor já usa — para que o pequeno produtor rural brasileiro regularize sua terra sozinho, sem medo e sem pagar caro. Serve **deliberadamente quem mais sofre**: o produtor de ~58 anos, baixa escolaridade (73% têm só fundamental, 23% analfabetos), internet fraca, que hoje é ignorado pelos sistemas existentes. O problema é forçado por lei e urgente: há **R$ 6,2 bilhões** em crédito rural travado por CAR irregular e só **~3,3%** dos CARs foram analisados. **Por que agora:** o CAR virou Bem Público Digital do Brasil (COP30, nov/2025), o governo abriu APIs do CAR no Conecta GOV.BR (mai/2026), o haCARthon pede exatamente soluções open source de acessibilidade — e a **Resolução CMN 5.303/2026** criou um prazo datado: o pequeno produtor (até 4 módulos fiscais) tem **até 03/01/2028** para se adequar ao rigor de auditoria de crédito já aplicado aos grandes (jan/2027). Janela de ~18 meses e ninguém está preparando o pequeno produtor. **Diferencial:** não é "mais um sistema de CAR" — é o *compadre que entende de lei*, que vence pela confiança (canal WhatsApp + cooperativa) e não pela tecnologia, com precisão jurídica garantida por revisão humana obrigatória.

---

## 2. Problema (Problem Statement)

### Dores do usuário (observáveis, com evidência)
- **O CAR não está feito e sem ele não há crédito.** R$ 6,2 bi de crédito travado (1º sem/2024); audiências na Câmara apontam burocracia e entraves técnicos (report 02, 03).
- **A lei é cheia de termo técnico nunca traduzido.** APP, Reserva Legal e Módulo Fiscal confundem o produtor; o georreferenciamento (Passo 3 do SICAR) é a etapa que mais trava (report 02).
- **Medo e vergonha paralisam.** Medo de errar a declaração e perder a terra da família; vergonha de não entender o papel. Diante disso, "não fazer nada parece mais seguro" (pm-role, report 03).
- **Desconfiança do canal oficial.** Barreiras no gov.br, linguagem técnica e medo de punição retroativa afastam o produtor do autosserviço estatal (report 03).
- **Prazo datado (urgência).** A **Res. CMN 5.303/2026** (norma vigente; reescalonou a 5.268/2025) vincula o crédito ao **PRODES** com cronograma por porte: grandes (>15 MF) **04/01/2027**, médios (4–15 MF) **01/07/2027**, **pequenos e agricultura familiar (até 4 MF) 03/01/2028** (assentamentos/comunidades tradicionais também 2028). Documentos aceitos para destravar: **ASV, ato estadual equivalente, TCA**. Produtores recusados em abr–mai/2026 podem reapresentar (reports 01/validação). ~18 meses de janela para o público-alvo e ninguém o está preparando.
- **A recusa não é só "não ter CAR" — é a recusa automática.** Qualquer divergência mínima entre a **área no CAR** e a do **contrato** gera recusa automática; um **alerta de desmatamento pós-jul/2019** (mesmo falso-positivo de satélite) nega o crédito na hora, ainda que o produtor esteja regularizado no campo. Destravar exige documentos que ele não conhece (**ASV, TAC, PRAD**) (report 07).

### Lacuna de mercado (o que ninguém cobre)
- **RAImundo (Embrapa/MAPA/MDA/AZap.AI):** assistente via WhatsApp, mas **não cobre CAR nem regularização** — foca em produção/comercialização (report 04).
- **Agrotools / ScoreCAR:** 100% B2B corporativo; o produtor é o *objeto* da análise, não o cliente (report 04).
- **Despachante:** caro; **gov.br:** complexo e intimidador; **parente que "mexe com computador":** indisponível e não confiável.
- **Ninguém atende o pequeno produtor em CAR, via WhatsApp, em linguagem de gente.** Nicho vazio (Competição = 82/100 no scoring).

### Custo da inação
Produtor sem crédito, exposto a multa e, no limite, sob risco de perder a terra da família por um papel mal explicado. No nível-país: trava-se a regularização ambiental de quem produz a maior parte do alimento (agricultura familiar = 77% dos produtores). **Injustiça estrutural (camada filosófica):** 85% das propriedades potencialmente afetadas estão abaixo de 4 módulos fiscais mas respondem por só **33%** do desmatamento, enquanto **2/3** se concentra em 15% (as grandes) — o sistema automático pune desproporcionalmente o pequeno (report 07).

---

## 3. Visão & Objetivos do Produto

**Visão:** Que nenhum produtor rural perca a terra por não entender um papel — o Compadre segura a mão dele, do "oi" no WhatsApp até o recibo do CAR emitido.

### Objetivos (mensuráveis)
| # | Objetivo | Critério de sucesso |
|---|----------|---------------------|
| O1 | Provar que o produtor confia e **age** sobre a orientação | ≥ 60% dos produtores dão o próximo passo concreto do CAR após a orientação (Concierge MVP / RAT) |
| O2 | Garantir precisão jurídica segura | 100% das respostas sobre etapas/conceitos do CAR validadas como corretas por especialista no MVP; 0 orientação materialmente errada não pega pela revisão |
| O3 | Entregar MVP open source funcional na maratona | Repositório público com licença OSI-aprovada + demo ao vivo no WhatsApp até 28/06/2026 |
| O4 | Tradução compreensível | ≥ 80% das respostas avaliadas como "entendi de primeira" por produtores em teste de compreensão |
| O5 | Acessibilidade por áudio de ponta a ponta | Fluxo completo (pergunta→resposta) operável só por voz, sem digitar texto |

### Não-objetivos (exclusões explícitas)
- **NÃO** fazer o georreferenciamento/desenho do mapa automaticamente no MVP (etapa técnica que exige shapefile; o Compadre orienta e encaminha, não desenha).
- **NÃO** dar assessoria jurídica nem substituir advogado/extensionista — é serviço de *informação e orientação*.
- **NÃO** submeter o CAR pelo produtor no SICAR no MVP (sem integração de escrita; só orientação + consulta).
- **NÃO** recriar a entrada de dados do CAR. O MGI já lançou o **CAR Pré-Preenchido** (formulário inteligente tipo IR, via Dataprev, integrando SNCR/Sigef/Cadastro Agricultura Familiar). O Compadre **surfa por cima**: é a camada de *tradução e explicação* do que já vem preenchido — refazer o formulário seria redundante e obsolescente (report 07).
- **NÃO** construir app nativo, dashboard web ou "plataforma" de telas/botões — isso transformaria o Compadre em protagonista.
- **NÃO** servir grande produtor, agtech corporativa ou cadeia de suprimentos (público da Agrotools, não nosso).

---

## 4. Usuários-Alvo & Personas

| Campo | Seu Raimundo (primária) | Dona Lúcia, agente de cooperativa (secundária) | Especialista de CAR / EMATER (operador) |
|-------|--------------------------|-----------------------------------------------|------------------------------------------|
| Papel | Pequeno produtor, ~58 anos, agricultura familiar | Técnica/extensionista da cooperativa | Engenheiro agrônomo/florestal ou técnico de ATER |
| Necessidade #1 | Regularizar o CAR e destravar crédito sem virar especialista | Atender mais produtores com menos esforço e informação confiável | Garantir que nenhuma orientação errada chegue ao produtor |
| Workaround atual | Despachante caro, parente, ou não fazer nada | Explica caso a caso de cabeça; recorre ao gov.br | Responde por telefone/presencialmente, sem escala |
| Sucesso é | Recibo do CAR na mão, crédito liberado, cabeça tranquila | Produtor encaminhado e resolvido, confiança preservada | Fila de revisão limpa; respostas padronizadas e corretas |
| Frequência | Episódica/quase única (1 CAR) + retificações pontuais | Diária/semanal (vários produtores) | Diária durante campanhas de regularização |
| Restrições | Baixa escolaridade (73% fundamental, 23% analfabetos), internet fraca, prefere áudio | Tablet/celular, internet intermitente no campo | Tempo escasso; precisa de fila e contexto da conversa |

**Foco de design:** otimizar para Seu Raimundo. Se uma decisão melhora a experiência de um usuário digital "early adopter" mas piora a de Seu Raimundo, ela está errada.

---

## 5. Histórias de Usuário & Cenários

#### US-001: Perguntar por áudio e receber resposta de gente
**Como** Seu Raimundo, **quero** mandar minha dúvida sobre o CAR por áudio no WhatsApp, **para que** eu entenda o que fazer sem precisar ler nem digitar.
**Critérios de aceitação:**
- [ ] Mensagem de voz (OGG/OPUS) é transcrita em PT-BR e o sistema responde em ≤ 30s (p95) com texto **e** opção de áudio.
- [ ] A resposta não usa juridiquês: termos técnicos só aparecem traduzidos (ex.: "Reserva Legal = um pedaço da sua terra que a lei pede pra deixar de mato").
- [ ] Toda resposta jurídica/normativa traz disclaimer "Sou um assistente de informação, não sou advogado".
**Casos de borda:**
- Áudio inaudível/ruído de campo → pede para repetir, sem culpar o produtor.
- Pergunta fora do escopo do CAR → responde que não sabe e oferece encaminhar a um humano (nunca inventa).
**Prioridade:** P0 · **Complexidade:** Alta

#### US-002: Traduzir um conceito que confunde (APP, Reserva Legal, Módulo Fiscal)
**Como** Seu Raimundo, **quero** entender o que é "APP" ou "Reserva Legal" na minha situação, **para que** eu pare de ter medo de errar.
**Critérios de aceitação:**
- [ ] A explicação é curta (≤ 4 frases na primeira resposta), correta e ancorada na Lei 12.651/2012.
- [ ] O sistema diz claramente quando algo *depende do caso* (ex.: "nem todo imóvel tem APP").
- [ ] Resposta passa no teste "a vó do Seu Raimundo entende?".
**Casos de borda:**
- Produtor pede aconselhamento sobre quanto de mato precisa derrubar/manter → não dá número definitivo sem dados do imóvel; encaminha a humano.
- Conceito com regra que varia por município (módulo fiscal 5–110 ha) → pede o município antes de responder.
**Prioridade:** P0 · **Complexidade:** Média

#### US-003: Guiar o CAR em passos pequenos
**Como** Seu Raimundo, **quero** fazer o CAR um passo de cada vez, **para que** eu não me perca nem desista.
**Critérios de aceitação:**
- [ ] O sistema apresenta **um** passo por vez (estado → cadastro de usuário → georreferenciamento → formulário → recibo) e só avança quando o produtor confirma.
- [ ] Cada passo lista o que ter em mãos (CPF, documento do imóvel, e-mail).
- [ ] Em qualquer ponto o produtor pode pedir "explica de novo" ou "fala por áudio".
**Casos de borda:**
- Produtor para no meio e volta dias depois → conversa retoma do último passo (estado persistido).
- Passo de georreferenciamento (técnico) → Compadre explica as opções e **encaminha** a técnico/cooperativa em vez de tentar desenhar o mapa.
**Prioridade:** P0 · **Complexidade:** Alta

#### US-004: Escalar para um humano quando o caso é complexo ou arriscado
**Como** o Compadre (e o especialista de CAR), **quero** que respostas de baixa confiança ou alto risco sejam revisadas/encaminhadas a um humano, **para que** nenhuma orientação errada chegue ao produtor.
**Critérios de aceitação:**
- [ ] Toda resposta com confiança do RAG abaixo do limiar OU classificada como "alto risco" (interpretação de obrigação legal específica, área consolidada, multa, prazo) entra em fila de revisão humana antes do envio.
- [ ] O especialista vê a transcrição, o trecho-fonte recuperado e a resposta proposta; aprova, edita ou rejeita.
- [ ] Toda interação fica registrada em trilha de auditoria (LGPD).
**Casos de borda:**
- Nenhum revisor disponível → produtor recebe "vou confirmar com um especialista e te respondo" (não recebe resposta não revisada de alto risco).
- Revisor edita a resposta → versão final é a enviada e é gravada como correção (insumo de melhoria do corpus).
**Prioridade:** P0 · **Complexidade:** Alta

#### US-005: Agente da cooperativa usa o Compadre lado a lado (Canal C)
**Como** Dona Lúcia, **quero** usar o Compadre num tablet ao lado do produtor, **para que** eu atenda mais gente com informação padronizada e confiável.
**Critérios de aceitação:**
- [ ] O mesmo backend do WhatsApp atende a interface assistida (sem produto separado).
- [ ] A agente pode marcar a conversa como "atendimento assistido" para fins de relatório à cooperativa.
**Casos de borda:**
- Internet cai no meio → entrada por texto curto funciona como fallback ao áudio.
**Prioridade:** P1 · **Complexidade:** Média

#### US-006: Consultar situação do CAR pelo CPF (quando disponível)
**Como** Seu Raimundo, **quero** saber se já existe CAR no meu CPF/imóvel, **para que** eu não comece do zero à toa.
**Critérios de aceitação:**
- [ ] **Restrição confirmada (report 02):** a API Consulta SICAR CPF/CNPJ no Conecta GOV.BR **não é aberta à iniciativa privada** — só órgão público via adesão. Logo, consulta automatizada **só** com convênio institucional (EMATER/órgão estadual/MDA).
- [ ] **Sem convênio (default do MVP):** o produtor é portador do próprio dado — o Compadre o orienta a consultar em `car.gov.br`/`consulta.car.gov.br` e a colar/ler o status; nada de scraping.
**Casos de borda:**
- Consentimento negado → segue só com orientação genérica, sem consulta.
- API indisponível mesmo com convênio → fallback para consulta manual guiada.
**Prioridade:** P2 (bloqueado por convênio) · **Complexidade:** Média

#### US-007: Entender por que o crédito foi negado e o próximo passo
**Como** Seu Raimundo, **quero** entender por que o banco negou meu crédito mesmo com o CAR feito, **para que** eu saiba o que corrigir antes do prazo (jan/2028 para o pequeno produtor).
**Critérios de aceitação:**
- [ ] O Compadre traduz, em linguagem de gente, as causas comuns de recusa automática e **roteia entre dois caminhos concretos** (report 01): (a) supressão autorizada/regularizável → reunir **ASV/TAC/PRAD/laudo** para o banco; (b) **falso-positivo** (limpeza de pasto, pousio, colheita de eucalipto) → contestar no **Canal BiomasBR do INPE** (cadastro no Portal INPE + laudo de profissional habilitado). Sempre como informação, não parecer jurídico.
- [ ] **Tom anti-vergonha:** enquadrar como "você pode estar certo e mesmo assim ser barrado — veja como provar", nunca "você fez algo errado". O bot não toma lado político sobre a regra (ADPF 1.228/DF em curso no STF).
- [ ] Toda resposta deste fluxo é classificada **alto risco** e passa por **revisão humana obrigatória** antes do envio (FR-006/007).
- [ ] Quando o caso exige análise documental, encaminha a cooperativa/técnico em vez de afirmar o que fazer.
**Casos de borda:**
- Produtor pede que o Compadre "resolva" a recusa → deixa claro que orienta e encaminha, não atua junto ao banco.
- Recusa por motivo fora do escopo (cadastral/bancário) → recusa honesta + encaminhamento.
**Prioridade:** P1 · **Complexidade:** Alta

---

## 6. Requisitos Funcionais

| FR-ID | Área | Descrição | Input | Output | Prioridade | Dependências |
|-------|------|-----------|-------|--------|------------|--------------|
| FR-001 | Canal WhatsApp | Receber mensagem de voz/texto via webhook do BSP | Webhook JSON + URL de mídia | Mensagem normalizada na fila de processamento | P0 | BSP aprovado |
| FR-002 | STT | Transcrever áudio OGG/OPUS para texto PT-BR | Arquivo de áudio | Texto transcrito + score de confiança | P0 | FR-001 |
| FR-003 | NLU | Classificar intenção (dúvida de conceito / passo do processo / consulta de status / fora de escopo) | Texto transcrito | Rótulo de intenção + nível de risco | P0 | FR-002 |
| FR-004 | RAG | Recuperar trechos do corpus CAR/Código Florestal por similaridade | Texto da pergunta | Top-k trechos + fontes + score | P0 | FR-003; corpus indexado |
| FR-005 | Geração | Gerar resposta em linguagem de gente, ancorada nos trechos recuperados, com disclaimer | Pergunta + trechos | Resposta proposta + citação de fonte + confiança | P0 | FR-004 |
| FR-006 | Guardrail de precisão | Rotear para revisão humana se confiança < limiar OU risco = alto | Resposta proposta + scores | "enviar" ou "fila de revisão" | P0 | FR-005 |
| FR-007 | Revisão humana | Painel para especialista aprovar/editar/rejeitar resposta | Item de fila | Resposta final aprovada | P0 | FR-006 |
| FR-008 | TTS | Converter resposta final em áudio PT-BR | Texto da resposta | Áudio MP3/OGG | P0 | FR-007 |
| FR-009 | Envio | Enviar texto + áudio ao produtor via BSP | Resposta final | Mensagem entregue no WhatsApp | P0 | FR-008 |
| FR-010 | Orquestração de passos | Manter o produtor em **um** passo do CAR por vez, com estado | Confirmação do produtor | Próximo passo + checklist do que ter em mãos | P0 | FR-005 |
| FR-011 | Persistência de conversa | Retomar do último passo após interrupção | ID do produtor | Contexto da sessão restaurado | P0 | FR-010 |
| FR-012 | Trilha de auditoria | Registrar toda interação (pergunta, fonte, resposta, revisor) | Eventos da sessão | Log auditável (LGPD) | P0 | FR-001..009 |
| FR-013 | Disclaimer & escopo | Inserir disclaimer "não sou advogado" e recusar fora de escopo sem inventar | Intenção/risco | Resposta com disclaimer ou recusa honesta | P0 | FR-003 |
| FR-014 | Interface assistida (cooperativa) | Mesmo backend acessível por agente em tablet | Sessão marcada como assistida | Atendimento + flag de relatório | P1 | FR-001..010 |
| FR-015 | Consulta SICAR por CPF | Consultar status do CAR via Conecta GOV.BR — **requer convênio institucional** (API fechada a privado); sem convênio, orientação de consulta manual | CPF/CNPJ + consentimento + convênio | Resumo do status em linguagem simples | P2 (bloqueado) | Convênio EMATER/órgão público |
| FR-018 | Confirmação ativa de entidades críticas | Confirmar com o produtor dados que o STT pode errar (nº do CAR, área, município) antes de usá-los | Transcrição + entidade extraída | Entidade confirmada ou corrigida | P0 | FR-002 |
| FR-016 | Métrica de "próximo passo" | Registrar se o produtor avançou o passo concreto após orientação | Eventos da conversa | Evento de comportamento (sinal do RAT) | P0 | FR-010, FR-012 |
| FR-017 | Diagnóstico de recusa de crédito | Traduzir causas comuns de recusa (área CAR×contrato, alerta PRODES, falso-positivo) e apontar documento (ASV/TAC/PRAD); sempre rotular alto risco | Pergunta sobre crédito negado | Explicação + próximo passo + encaminhamento; rota = revisão humana | P1 | FR-006, FR-007 |

---

## 7. Requisitos Não-Funcionais

| Categoria | Requisito | Alvo |
|-----------|-----------|------|
| Desempenho | Tempo de resposta ponta a ponta (áudio→resposta) | < 30s p95 (rota automática) |
| Desempenho | Custo por sessão completa (5 turnos) | ≤ R$ 0,30 (~US$ 0,035–0,055) |
| Robustez de rede | Operável em internet fraca | Áudio curto, fallback para texto, tolerância a reconexão sem perder o passo |
| Disponibilidade | Uptime do webhook/serviço | 99,5% (MVP); 99,9% (pós-prêmio) |
| Escalabilidade | Sessões simultâneas | 200 simultâneas no MVP; arquitetura horizontalmente escalável para 100k usuários/ano (referência RAImundo) |
| Precisão (crítico) | Respostas de alto risco sem revisão humana | 0 (zero) — guardrail obrigatório |
| Segurança | Trilha de auditoria de interações | 100% das interações logadas e rastreáveis |
| Privacidade | Conformidade LGPD | Consentimento explícito; dados pessoais (CPF, localização) minimizados, criptografados em repouso e em trânsito |
| Conformidade legal | Posicionamento | "Serviço de informação", disclaimer persistente, escalonamento humano (PL 2.338/2023; Rec. OAB 001/2024) |
| Acessibilidade | Voz primeiro (não "só voz") | Fluxo completo operável por áudio (ICP 55+, baixa escolaridade); **mas aceitar e responder também em texto** — parte do público (filhos, técnicos) prefere texto/chamada (report 05). Linguagem nível fundamental |
| i18n | Idioma | PT-BR (com tolerância a sotaque regional); arquitetura de corpus preparada para reuso internacional (DPG) |
| Open source | Licença | **Apache-2.0** para o código (permissiva + grant de patente, maximiza adoção governamental) + **CC-BY ou CC0** para o corpus; repositório público; "Do No Harm by design" (CPF/geo) conforme DPG Standard |
| Robustez de rede | Offline-first | Captura no talhão (foto/geolocalização) funciona **sem sinal** e sincroniza na sede; só 33,9% da área agrícola tem 4G/5G — assumir conectividade contínua exclui o público-alvo |
| Precisão (medível) | Qualidade do RAG | **cite-or-abstain** obrigatório; faithfulness (RAGAS) **≥ 0,85**; eval set de ~150 perguntas como **gate de release** |
| Compatibilidade | Cliente | WhatsApp (qualquer versão que suporte mensagens de voz); sem app próprio |

---

## 8. Modelo de Dados

**Entidades principais:**
- **Produtor** — id, telefone (hash), nome, CPF (criptografado, opcional), município, consentimento_LGPD (bool, timestamp), idioma. *Ciclo:* criado no 1º contato; excluível a pedido (LGPD).
- **Imovel** — id, produtor_id (N:1), município, área_total (opcional), módulo_fiscal_municipio, status_CAR (não iniciado/em andamento/recibo emitido). *Borda:* um produtor pode ter vários imóveis.
- **Sessao** — id, produtor_id (N:1), canal (whatsapp/assistido), passo_atual (enum: estado, cadastro_usuario, georreferenciamento, formulario, recibo), status, criada_em, atualizada_em. *Ciclo:* retomável; arquivada após conclusão.
- **Mensagem** — id, sessao_id (N:1), direção (entrada/saída), tipo (audio/texto), transcricao, intencao, nivel_risco, criada_em.
- **RespostaProposta** — id, mensagem_id (1:1), texto, fontes[] (refs do corpus), confianca, rota (auto/revisao), status (proposta/aprovada/editada/rejeitada), revisor_id (opcional), texto_final.
- **DocumentoCorpus** — id, fonte (Lei 12.651/2012, Decreto 7.830/2012, manual SICAR, FAQ SFB), trecho, embedding (pgvector), versao, url_oficial. *Constraint:* todo trecho tem fonte oficial rastreável.
- **Revisor** — id, nome, papel (especialista_CAR/EMATER), cooperativa_id (opcional).
- **EventoAuditoria** — id, sessao_id, tipo, payload, timestamp. *Política:* retenção conforme LGPD; nunca deletado silenciosamente.

**Relacionamentos:** Produtor 1:N Imovel; Produtor 1:N Sessao; Sessao 1:N Mensagem; Mensagem 1:1 RespostaProposta; DocumentoCorpus N:M Mensagem (via fontes recuperadas); Revisor 1:N RespostaProposta.

**Constraints-chave:** telefone único por produtor; consentimento obrigatório antes de qualquer consulta a CPF/SICAR; `nivel_risco` ∈ {baixo, médio, alto}; `passo_atual` segue a ordem do SICAR.

---

## 9. API Design

> Superfície mínima do backend Compadre. Autenticação dos endpoints internos via token de serviço; webhook validado por assinatura do BSP.

```
POST /webhook/whatsapp
Propósito: receber mensagens de entrada do BSP (áudio/texto)
Auth: assinatura do BSP (HMAC)
Request: { from, type, media_url | text, timestamp }
Response: 200 (ack imediato; processamento assíncrono)
Erros: 401 assinatura inválida, 422 payload malformado
```
```
POST /internal/process-message
Propósito: pipeline STT→NLU→RAG→geração→guardrail
Auth: token de serviço
Request: { sessao_id, mensagem_id }
Response: { resposta_id, rota: "auto"|"revisao", confianca }
Erros: 503 dependência (STT/LLM) indisponível
```
```
GET /review/queue   |   POST /review/{resposta_id}/decision
Propósito: fila e decisão do revisor humano
Auth: token de revisor
Request (decision): { acao: "aprovar"|"editar"|"rejeitar", texto_final? }
Response: { status, enviado: bool }
Erros: 409 já decidido, 404 item inexistente
```
```
POST /internal/send-reply
Propósito: TTS + envio via BSP
Auth: token de serviço
Request: { resposta_id }
Response: { message_id_bsp, entregue: bool }
Erros: 502 falha no BSP (com retry/backoff)
```
```
GET /integrations/sicar?cpf=...   (P2)
Propósito: consultar status CAR via Conecta GOV.BR
Auth: token de serviço + consentimento registrado do produtor
Request: { cpf, sessao_id }
Response: { status_car, resumo_simplificado }
Erros: 403 sem consentimento, 503 API gov indisponível → fallback manual
```

---

## 10. Requisitos de UI/UX

- **Telas/superfícies principais:** (1) **Conversa no WhatsApp** — única superfície do produtor; sem menus, sem botões fora os botões nativos do WhatsApp (quick replies opcionais para "Sim/Não/Explica de novo"). (2) **Painel de revisão** (interno, especialista) — fila, transcrição, fonte recuperada, resposta proposta, ações aprovar/editar/rejeitar. (3) **Interface assistida** (P1) — mesma conversa em tablet para o agente da cooperativa.
- **Fluxo crítico (entrada→valor):** "oi" → boas-vindas + disclaimer → produtor manda áudio com a dúvida → resposta de gente (texto+áudio) em ≤30s → próximo passo do CAR → repete até recibo. **Sem instalar nada, sem cadastro prévio.**
- **Padrões de interação:** áudio-primeiro; **um passo por vez**; sempre opção "fala por áudio" e "explica de novo"; tom caloroso, nunca de cima, nunca com pena ("Você não é burro. A lei é que foi feita complicada.").
- **Responsivo:** painel de revisão e interface assistida funcionam em tablet/desktop; quebra mobile-first para o tablet da cooperativa.
- **Acessibilidade:** operável 100% por voz; respostas curtas; sem jargão; identidade visual cor-da-terra (Mata #25382A, Folha #2F4A33, Trigo #D6A23E, Terracota #C0573B, Creme #F6EFE0), tipografia Spectral/Hanken Grotesk nas superfícies visuais (landing, painel). **Proibido:** azul corporativo frio de banco; "cara de governo".

---

## 11. Dependências & Integrações

| Dependência | Tipo | Propósito | Fallback |
|-------------|------|-----------|----------|
| BSP WhatsApp (Take Blip / Zenvia) | Serviço externo | Entrada/saída no WhatsApp, LGPD/PT-BR | Trocar de BSP; cloud API Meta direta (onboarding mais lento) |
| STT — **faster-whisper large-v3** (self-host) + vocabulary biasing (CAR/SICAR) | Modelo | Transcrição PT-BR de fala rural espontânea (WER alto ~24% → confirmação ativa de entidades, FR-018) | Whisper API; pedir ao produtor para escrever |
| LLM de geração — **Gemini 2.5 Flash (default), Claude Sonnet (casos sensíveis)** | API externa | Gerador **dentro** do RAG (cite-or-abstain), nunca como fonte | Modelo alternativo; Jurema-7B/Juru (open source, ⚠️ 62–72% sozinho não basta); degradar para template + revisão humana |
| pgvector (PostgreSQL) | Biblioteca/DB | Armazenar e buscar embeddings do corpus | Chroma como alternativa |
| TTS — **Piper (MIT, roda em CPU, custo ~$0)** | Biblioteca | Áudio de resposta PT-BR | Enviar só texto. ⚠️ **Não usar XTTS-v2 (licença não-comercial)** — corrige report 05 |
| Canal BiomasBR / Portal INPE | Referência externa | Destino para contestar falso-positivo do PRODES (US-007) | Orientar caminho manual; encaminhar a ATER/sindicato |
| Corpus CAR (Lei 12.651/2012, Decreto 7.830/2012, manuais SICAR, FAQ SFB, **Res. CMN 5.303/2026 — norma vigente**, 5.268/2025, 5.193/2024, **cartilha IBAM/Fundo Amazônia**) | Conteúdo | Base factual do RAG. **Cada conteúdo regulatório tem data e dono de atualização** — a regra mudou 3× em 18 meses (report 01) | — (é insumo central; sem ele não há produto) |
| API Consulta SICAR CPF/CNPJ (Conecta GOV.BR) | API gov | Status do CAR (P2) | Orientar consulta manual em car.gov.br |
| Jurema 7B (NeuralMind, LLM jurídico open source PT-BR) | Oportunidade de infra | Possível motor jurídico open source (alinhado a DPG) | LLM proprietário no MVP |
| Especialista CAR / EMATER | Recurso humano | Revisão obrigatória de respostas de risco | Sem revisor → não envia resposta de alto risco |

---

## 12. Estratégia de Release

- **MVP (durante a maratona, 26–28/06):** Canal WhatsApp (FR-001..013, FR-016) com **Concierge MVP primeiro** — especialista validando 100% das respostas — evoluindo para automação com guardrail. Corpus CAR carregado (Código Florestal + manuais SICAR) com revisão humana obrigatória e disclaimer. Repositório open source público. Demo ao vivo. *Escopo mínimo que entrega valor e prova a aposta central.*
- **Fase 2 (pós-prêmio):** Interface assistida para cooperativas (FR-014, Canal C); **diagnóstico de recusa de crédito (US-007/FR-017)** — alto valor dada a janela até jan/2028, sempre com revisão humana; automação com limiar de confiança ajustado por dados reais; expansão do corpus (PRA, retificações).
- **Fase 3 (futuro):** Consulta SICAR por CPF (FR-015); CAR Pré-Preenchido; app por voz (botões grandes) para offline parcial; reuso internacional do corpus (DPG); outras burocracias rurais (Pronaf, ITR) para resolver a retenção episódica.
- **Feature flags:** `auto_send_enabled` (automação vs. 100% revisão), `sicar_lookup`, `assisted_channel`, `tts_enabled`.
- **Rollout:** canário por **1 cooperativa** (contato do Mario), 5–10 produtores em 48–72h. **Go-to-market regionalizado (report 05/08):** no **Norte/Nordeste** (ATER cobre só 7–9%) o canal é o **STR/CONTAG (~4.000 sindicatos, adjacência ao CAF)** e o Compadre substitui o técnico ausente; no **Sul** (ATER ~49%) é parceria com cooperativa/EMATER existente. Entrada por **acordo de cooperação técnica (sem licitação)**. **Confirmado (Embrapa CAR-2021):** Amazônia e Caatinga têm <60% da área cadastrável no CAR (vs. >80% em Pampa/Pantanal), e o Nordeste reúne 37% dos titulares (sobretudo pequenos) — priorizar piloto nesses biomas. Expandir conforme a taxa de "próximo passo" e a de revisão se mantêm.

---

## 13. Métricas de Sucesso

| Métrica | Definição | Alvo | Como medir |
|---------|-----------|------|------------|
| Aquisição | Produtores que iniciam conversa ("oi") por cooperativa | ≥ 5–10 no canário; crescente | Logs de sessão (FR-012) |
| Ativação/Comportamento (RAT) | % que dá o próximo passo concreto do CAR após orientação | ≥ 60% | EventoAuditoria de "próximo passo" (FR-016) |
| Precisão (crítico) | % de respostas validadas como corretas por especialista | 100% no MVP; ≥ 99% com amostragem na automação | Painel de revisão + auditoria |
| Engajamento | Turnos por sessão / sessões que avançam ≥ 1 passo | ≥ 60% das sessões avançam ≥ 1 passo | Logs de sessão |
| Retenção | Produtores que voltam para o próximo passo após interrupção | ≥ 50% retomam | Sessões retomadas (FR-011) |
| Compreensão | % de respostas avaliadas "entendi de primeira" | ≥ 80% | Microssondagem por áudio/quick reply |
| Resultado de negócio/impacto | CARs com recibo emitido atribuíveis ao Compadre | ≥ 1 no MVP; crescente | Confirmação produtor/cooperativa |
| Impacto/prazo (janela jan/2028) | Pequenos produtores preparados para o rigor de auditoria eletrônica antes de 03/01/2028 (CAR em ordem / recusa entendida) | Crescente até jan/2028 | Cohort por cooperativa + confirmação |

---

## 14. Riscos & Mitigações

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| **Precisão jurídica** — RAG jurídico alucina 17–43% (Stanford); orientação errada gera multa/risco de perda de terra e destrói a marca | Alta | Alta | Revisão humana obrigatória em alto risco (FR-006/007); citação de fonte oficial; disclaimer; recusa honesta fora de escopo; kill switch da automação |
| **Monetização** — produtor não paga; sem pagador o projeto morre pós-prêmio | Média | Alta | Deixou de ser "indefinida" (report 09). 3 hipóteses rankeadas: **H1** entidade executora de edital **Fundo Amazônia/BNDES** (R$600mi/30 mil famílias, ~R$20k/família — Compadre derruba o custo marginal); **H2** **cooperativa de crédito** forçada pelo marco CMN (CAR regular = +10% crédito); **H3** **trading/EUDR** white-label de due diligence. Custo ~R$0,30/sessão facilita patrocínio. Filantropia climática (iCS/Fundo JBS) como capital-ponte |
| **Volatilidade regulatória + STF** — a regra mudou 3× em 18 meses (5.193→5.268→5.303) e a **ADPF 1.228/DF** (relator Min. Gilmar Mendes; cautelar pedida, sem liminar até jun/2026) pode suspendê-la | Alta | Média | Não amarrar o pitch ao prazo jan/2028; vender "CAR consistente + destravar a recusa", dor que persiste qualquer que seja a norma. Conteúdo regulatório com data de validade e revisão trimestral |
| **Retenção** (40/100) — fazer o CAR é tarefa episódica/única | Alta | Média | Distribuição empurrada pela cooperativa; roadmap para outras burocracias rurais recorrentes (Fase 3) |
| **Adoção/distribuição** — sem a cooperativa empurrando, fica em poucos curiosos | Média | Alta | Canal cooperativa como motor (Canal C); confiança pré-existente; agente lado a lado |
| **Dependência de plataforma (WhatsApp/Meta/BSP)** — mudança de política, custo ou onboarding (2–6 semanas direto na Meta) | Média | Alta | Usar BSP gerenciado (1–7 dias); abstrair camada de canal; preparar app por voz como rota B |
| **LGPD / responsabilidade civil** — dado pessoal e responsabilidade do operador por orientação errada | Média | Alta | Consentimento explícito, trilha de auditoria, minimização de dados, disclaimer, escalonamento; avaliar seguro de RC pós-prêmio |
| **Prazo de maratona (3 dias)** — escopo grande demais para o MVP | Média | Média | Concierge MVP primeiro (humano valida), automação incremental; não construir autoatendimento completo antes do RAT passar |
| **Obsolescência pelo CAR Pré-Preenchido** — o próprio governo reduz a fricção de cadastro; se o Compadre vender só "preencher formulário", vira redundante | Média | Alta | Posicionar como camada de **tradução/explicação + entender a recusa de crédito** por cima do pré-preenchido, não como data-entry (ver Não-objetivos) |

---

## 15. Perguntas em Aberto

| Pergunta | Dono | Prazo | Status |
|----------|------|-------|--------|
| Qual licença open source exigida pelo haCARthon? | Time / regulamento ENAP | Início da maratona | **Recomendado (report 10): Apache-2.0 código + CC-BY/CC0 corpus.** Confirmar se o edital impõe outra |
| Critérios e pesos de avaliação do hackathon? | Organização ENAP | Maratona | Aberta (não confirmado) |
| Qual BSP (Take Blip vs. Zenvia) e há CNPJ/Business Manager pronto para onboarding em 1–7 dias? | Time | 26/06 | Aberta |
| Limiar de confiança do RAG para acionar revisão humana | Eng. + especialista CAR | Antes da automação | Aberta |
| Quem é o pagador de sustentação pós-prêmio (cooperativa/MGI/banco)? | PM | Pós-prêmio | Aberta |
| Usar Jurema 7B (open source) como motor para reforçar o pitch de DPG? | Eng. | Fase 2 | Aberta |
| Há cooperativa confirmada (contato do Mario) para o Concierge MVP? | Mario | 26/06 | Aberta |
| Como integrar/explicar o CAR Pré-Preenchido (há API ou só orientação por cima)? | Eng. + PM | Fase 2 | Aberta |
| Qual cooperativa/STR-piloto em Amazônia ou Caatinga (gap de cobertura <60% confirmado)? | PM / Mario | Pós-MVP | Aberta |

---

## 16. Apêndice

**Glossário:**
- **CAR** — Cadastro Ambiental Rural; registro obrigatório dos imóveis rurais (Lei 12.651/2012).
- **SICAR** — Sistema Nacional de Cadastro Ambiental Rural (inscrição pelo módulo estadual).
- **APP** — Área de Preservação Permanente; protegida pela localização (rio, nascente, morro), não precisa ter floresta.
- **Reserva Legal** — percentual do imóvel que a lei exige manter com vegetação nativa.
- **Módulo Fiscal** — unidade do INCRA por município (5–110 ha) que define se o imóvel é pequeno/médio/grande e que regras de APP/RL se aplicam.
- **Georreferenciamento** — desenho do perímetro e áreas do imóvel em shapefile sobre imagem de satélite (etapa mais técnica do CAR).
- **PRA** — Programa de Regularização Ambiental.
- **DPG** — Digital Public Good; o CAR foi lançado como Bem Público Digital do Brasil (COP30, nov/2025).
- **BSP** — Business Solution Provider do WhatsApp.
- **RAG** — Retrieval-Augmented Generation (geração ancorada em trechos recuperados).
- **STT/TTS** — Speech-to-Text / Text-to-Speech.
- **CAR Pré-Preenchido** — módulo do MGI (lançado na COP30, via Dataprev) que entrega um formulário inteligente já preenchido com dados de SNCR/Sigef/Cadastro da Agricultura Familiar; o Compadre é a camada de tradução por cima dele.
- **PRODES** — programa de monitoramento de desmatamento por satélite (INPE); virou critério de acesso ao crédito rural pelas Resoluções CMN 5.268/2025 e 5.303/2026. Detecta mudança de uso do solo, não legalidade → gera falsos-positivos (limpeza de pasto, pousio, colheita). Contestação pelo Canal BiomasBR/INPE.
- **CMN 5.303/2026** — Resolução vigente (12/05/2026) que reescalonou a 5.268/2025; vincula crédito ao PRODES com prazos por porte: grande (>15 MF) 04/01/2027, médio (4–15 MF) 01/07/2027, **pequeno (até 4 MF) e agricultura familiar 03/01/2028**. Aceita ASV, ato estadual equivalente e TCA. Antecessoras: 5.268/2025 e 5.193/2024 (esta tornou CAR ativo obrigatório p/ crédito desde jan/2026).
- **ASV / TAC / PRAD** — Autorização de Supressão de Vegetação / Termo de Ajustamento de Conduta / Plano de Recuperação de Área Degradada: documentos que costumam destravar crédito barrado por questão ambiental.

**Fontes/materiais:** `pm-role.md`; `debate-materials/compadre-visao-do-produto.md`; `reports/01–06`; `memory/ideas/compadre/decision_memo.md` (veredito TEST, 62/100); landing `index.html`.

**Resumo da decisão de produto (decision memo):** Veredito **TEST** (62/100). Acerta no mais difícil (problema real forçado por lei, público enorme mal atendido, canal de confiança pronto). Antes de construir muito, validar a aposta: *"o produtor confia e **age** sobre a orientação, e ela é correta e segura"*, via **Concierge MVP** (WhatsApp operado pelo time + especialista validando cada resposta; passa se ≥60% dão o próximo passo E 100% das respostas corretas). **Kill criteria:** <60% de próximo passo OU qualquer resposta materialmente errada não pega pela revisão → parar o autoatendimento. **Pivô:** de "produtor se autoatende" para "agente da cooperativa usa o Compadre lado a lado" (Canal C).

**Resumo competitivo:** RAImundo (Embrapa, WhatsApp) **não cobre CAR**; Agrotools/ScoreCAR é **B2B corporativo**; Jurema 7B é **infra possível**, não concorrente. Nicho de "pequeno produtor + CAR + WhatsApp + linguagem de gente" está **vazio**.

**Arquitetura (texto):** `Produtor → WhatsApp(áudio) → BSP → Webhook → Backend(Download → Whisper STT → classificação de intenção/risco → RAG pgvector sobre corpus CAR → LLM com contexto → guardrail de confiança → [revisão humana se alto risco] → Google TTS → BSP → WhatsApp)`. Custo ~R$0,30/sessão. Stack lean: Python/FastAPI (ou Node), pgvector, infra sa-east-1.
