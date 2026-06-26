# IA: Precisão e Custo — Compadre (aprofundamento)

> Aprofundamento técnico de `reports/05-viabilidade-tecnica.md`, seções 2 e 3.
> Foco: **precisão real** (números, não impressões) e **custo por sessão**. Não repete o que o relatório 05 já cobre — apenas corrige, quantifica e estende.

---

## 1. STT (transcrição) — quanto erra de verdade com fala rural

O relatório 05 trata Whisper como "razoável" para sotaques. O dado real é mais duro: **WER (Word Error Rate) em PT-BR espontâneo é alto**, e fala rural é o pior caso (espontânea, ruidosa, vocabulário regional).

| Benchmark / cenário | WER de referência |
|---|---|
| Whisper PT-BR — Common Voice (fala lida, limpa) | ~10–20% |
| Modelo treinado em **CORAA ASR** (fala espontânea BR) — test set CORAA | **24,2% WER** |
| Mesmo modelo em Common Voice | 20,1% WER |
| Estudo 2025 (CORAA v1.1 + Common Voice, ~14k áudios): ranking | **Phi-4 Multimodal > Whisper > Qwen 2.5 Omni** (Qwen pior em enunciados curtos) |

Leitura: em fala espontânea (que é o caso do produtor mandando áudio no WhatsApp), **espere ~1 em cada 4–5 palavras erradas** sem adaptação. Isso é tolerável para captar *intenção* ("quero saber do meu CAR pendente"), mas **perigoso para entidades críticas** — número do CAR, nome de município, área em hectares, prazo. Um "12.651" virar "12.651" ou "126,51" muda tudo.

**Mitigações concretas (precisão > custo):**
- **`faster-whisper` large-v3** self-hosted (CTranslate2): mesma qualidade do Whisper API, 4× mais rápido, custo marginal ~zero em GPU própria. Permite `initial_prompt`/vocabulary biasing com termos do domínio (CAR, SICAR, APP, Reserva Legal, hectare, PRA, CONAMA) — reduz erro nas entidades que mais importam.
- **Confirmação ativa de entidades críticas**: nunca agir sobre número de CAR/área transcritos sem repetir de volta ("Entendi CAR número X, confirma?"). Barato e elimina a maior fonte de erro.
- **Fine-tuning/avaliação** com **CORAA ASR** (290 h, validado), **FalaBrasil** (UFPA) e **SOTAQUE** — usar primeiro como *eval set* para medir WER no público-alvo antes de decidir se fine-tuning vale o esforço. Provavelmente não vale no MVP; vale como métrica de aceitação.
- **Alternativa a observar**: Phi-4 Multimodal superou Whisper no estudo BR de 2025 — candidato a A/B test, não a default.

---

## 2. TTS — natural e barato, com uma armadilha de licença

O relatório 05 sugere ElevenLabs/Fish Audio. Para um produto **gratuito ao produtor e de baixa margem**, o caminho é open-source self-hosted:

| Opção | Qualidade | Licença | Custo | Veredito p/ Compadre |
|---|---|---|---|---|
| **Piper** | Boa, robótica leve | **MIT (uso comercial livre)** | $0 — roda em **CPU** em tempo real | **Default MVP.** Sem voice cloning, mas suficiente para respostas claras |
| **XTTS-v2 (Coqui)** | ~94% do ElevenLabs, PT-BR + clonagem | **CPML — NÃO comercial** ⚠️ | $0 infra | **Bloqueado p/ produto comercial** sem acordo separado. Útil só p/ protótipo |
| **Google Cloud TTS Neural** | Alta | Comercial OK | ~$0,002/turno | Fallback pago pragmático |
| ElevenLabs / Fish | Altíssima | Comercial OK | Caro por char | Só se voz "personagem" virar diferencial |

Recomendação: **Piper (MIT) no MVP** — TTS deixa de ser linha de custo. Subir para Google Neural ou ElevenLabs só se testes com produtores mostrarem que a naturalidade da voz afeta confiança/retenção.

---

## 3. RAG jurídico e alucinação — o risco central do produto

Este é o ponto que decide se o Compadre pode dar orientação. Os números são desconfortáveis e **precisam estar no design, não na nota de rodapé**.

**Estudo Stanford (Magesh et al., *Journal of Empirical Legal Studies* 2025; preprint mai/2024)** — ferramentas jurídicas comerciais **com RAG**:
- **Lexis+ AI**: ~65% de respostas corretas, **>17% alucinação**.
- **Westlaw AI-Assisted Research**: **apenas 42% corretas, ~33% alucinação** (≈1 em 3).
- Conclusão central: **RAG reduz, mas não elimina** alucinação. Sistemas vendidos como "hallucination-free" alucinam — inclusive citando fontes que não sustentam a afirmação (*misgrounding*).

Implicação direta para o Compadre: mesmo com RAG bem feito sobre o Código Florestal/SICAR, **uma fração não-trivial das respostas estará errada ou mal-fundamentada**. Em domínio fundiário, uma orientação errada sobre prazo do PRA ou status "Cancelado" tem custo real para o produtor. **Logo: o Compadre não pode ser autoridade — tem que ser um guia que cita e sabe se calar.**

**Stack de mitigação (com limiares concretos):**
1. **Citação obrigatória ou recusa** ("cite-or-abstain"): toda afirmação factual (prazo, documento, etapa, artigo) só sai se ancorada num trecho recuperado; sem trecho de suporte → não responde, encaminha a humano. Elimina a classe *misgrounding*.
2. **Guardrail de faithfulness/groundedness**: avaliar cada resposta contra o contexto recuperado (RAGAS *faithfulness*, ou avaliador LLM-as-judge). Limiar de mercado: **0,7–0,8** mínimo; sistemas críticos (saúde/finanças) usam **0,9+**. Para orientação fundiária, mirar **≥0,85** e abster abaixo disso.
3. **Robustez out-of-knowledge-base** (abstenção): testar com *Know-Or-Not* / FaithBench — o modelo precisa dizer "não sei / isso varia por estado" em vez de inventar. Pergunta fora do corpus = resposta padrão de encaminhamento.
4. **Calibração de confiança**: scores de confiança de LLM são mal-calibrados por padrão; usar verbal confidence calibration e, na dúvida, errar para o lado de escalar ao humano.
5. **Eval contínuo como gate de release**: dataset de referência de ~100–200 perguntas reais de CAR com respostas-ouro validadas por extensionista. Métricas: % correto, % alucinação, % abstenção apropriada. Nenhuma mudança de prompt/modelo vai a produção sem rodar esse eval. É o item de engenharia mais importante do projeto.

---

## 4. LLM — open-source PT-BR jurídico vs. proprietário

**Modelos PT-BR jurídicos open-source existem, mas não são autoridade sozinhos:**

| Modelo | O que é | Precisão medida | Viabilidade |
|---|---|---|---|
| **Juru** (USP + Maritaca) | Continued-pretraining de Sabiá-2 Small em **3,7B tokens** jurídicos de fontes confiáveis | **OAB-2023: 62,5%**, ENADE-2022-Direito: 81,5% (média 72%, +6–11 pts vs. base) | Prova que especialização barata funciona; **degrada outros domínios** |
| **Jurema 7B** (NeuralMind + Escavador) | LLM jurídico BR open-source, R$10M FINEP, **grátis no Hugging Face** | "Melhor open-source jurídico BR" (claim do lançamento) | Self-hostável; candidato a gerador RAG |
| **Sabiá-3 / Maritaca** (proprietário) | LLM PT-BR de ponta, API | Forte em tarefas PT-BR | Alternativa proprietária nacional (LGPD/soberania) |

Ponto crítico de precisão: **62–72% de acerto em múltipla-escolha (livro aberto) NÃO é precisão suficiente para orientação não-supervisionada.** Esses modelos servem bem como **gerador dentro do RAG** (reescrever o trecho recuperado em linguagem simples) — não como **fonte de conhecimento** (responder de memória). No RAG, a fonte é o corpus; o LLM só sintetiza e cita. Isso reduz a exigência sobre o modelo: um modelo menor com RAG bom > modelo grande sem contexto (já dito no relatório 05, aqui quantificado).

**Custo por token (jun/2026) e custo de LLM por sessão (5 turnos, ~2,5k tokens in + ~300 out por turno):**

| Modelo | Preço (in/out por 1M tok) | **LLM/sessão** |
|---|---|---|
| Claude Sonnet | $3 / $15 | **$0,060** |
| Sabiá-3 (~estimado) | ~$1 / $3 | ~$0,017 |
| Gemini 2.5 Flash | $0,30 / $2,50 | **$0,0075** |
| GPT-4o mini | $0,15 / $0,60 | $0,0028 |
| Gemini 3.1 Flash-Lite | $0,10 / $0,40 | $0,0019 |
| Jurema/Llama self-host | $0 por token (paga GPU) | ~$0 marginal; só vale em volume alto |

Conclusão de custo: **o LLM não é o gargalo de custo** — mesmo Sonnet sai a ~6 centavos de dólar por sessão; Flash a menos de 1 centavo. A escolha do modelo deve ser por **precisão e segurança jurídica**, não por preço. Self-hosting (Jurema/Llama) só compensa em escala alta ou por exigência de soberania de dado (LGPD), não no MVP.

---

## 5. Boas práticas govtech/jurídico (para não orientar errado)

- **AI-in-the-loop, não human-in-the-loop**: o extensionista/órgão é o ator principal; o Compadre é ferramenta de apoio. Mantém **responsabilidade humana** e evita exercício não-autorizado de orientação jurídica.
- **Abster > adivinhar**: em domínio de alto risco, "não sei, fale com o órgão do seu estado" é resposta *correta*, não falha.
- **Escopo fechado + disclaimer explícito** em toda sessão ("informação, não aconselhamento jurídico").
- **Escalonamento obrigatório** para casos irreversíveis (já listado no relatório 05: sobreposição, posse sem documento, status Cancelado).
- **Auditoria e re-validação periódica**: legislação ambiental e prazos de PRA mudam por estado; corpus e eval precisam de revisão agendada, senão o sistema "alucina por desatualização".

---

## 6. Arquitetura de IA recomendada (precisão-primeiro, custo baixo)

```
Áudio WhatsApp (OGG/OPUS)
  → STT: faster-whisper large-v3 (self-host, vocabulary biasing CAR/SICAR)
       └─ confirmação ativa de entidades críticas (nº CAR, área, município)
  → Classificação de intenção + detecção fora-de-escopo (LLM leve)
  → RAG: pgvector sobre corpus curado (Cód. Florestal, IN SICAR, PRA/estado, FAQ)
  → Geração: Gemini 2.5 Flash (default) | Claude Sonnet (casos sensíveis)
       └─ regra cite-or-abstain
  → Guardrail faithfulness (RAGAS ≥0,85) → abaixo disso, escala a humano
  → TTS: Piper (MIT, CPU, $0)
  → Áudio de volta + log para auditoria
Gate de release: eval set ~150 perguntas reais (correto / alucinação / abstenção)
```

**Custo de IA por sessão completa (5 turnos):**
- STT: faster-whisper self-host ~$0 (ou Whisper API $0,015)
- LLM: **$0,0075** (Gemini Flash) a **$0,06** (Sonnet)
- TTS: Piper **$0**
- **Total IA: ~$0,01–0,08 por sessão** (≈ R$ 0,05–0,45). Custo não é a restrição; **precisão e abstenção são.**

---

## Fontes (URL — acesso jun/2026)

- Stanford / Magesh et al. — *Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools*, J. Empirical Legal Studies 2025: https://onlinelibrary.wiley.com/doi/full/10.1111/jels.12413 e PDF https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf
- LawSites — Stanford: 17% (Lexis) / 33% (Westlaw): https://www.lawnext.com/2024/05/stanford-will-augment-its-study-finding-that-ai-legal-research-tools-hallucinate-in-17-of-queries-as-some-raise-questions-about-the-results.html
- CORAA ASR (290 h, WER 24,18%): https://link.springer.com/article/10.1007/s10579-022-09621-4
- Comparação ASR PT-BR (Whisper vs Phi-4 vs Qwen, CORAA+CommonVoice, 2025): https://www.scitepress.org/Papers/2026/146373/146373.pdf
- Juru — Legal Brazilian LLM (3,7B tok; OAB 62,5% / ENADE 81,5%): https://arxiv.org/html/2403.18140v1
- Jurema 7B (NeuralMind + Escavador, R$10M FINEP, open-source HF): https://fundepar.com.br/neuralmind-lanca-o-melhor-modelo-de-ia-open-source-especializado-no-ambiente-juridico-brasileiro/
- Sabiá / Maritaca AI: https://www.maritaca.ai/en/pesquisa | https://huggingface.co/maritaca-ai/sabia-7b
- Piper / XTTS-v2 licenças e qualidade: https://www.promptquorum.com/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts | https://huggingface.co/coqui/XTTS-v2
- RAG eval / faithfulness guardrails 0,7–0,9 (RAGAS): https://www.getmaxim.ai/articles/rag-evaluation-a-complete-guide-for-2025/ | https://arxiv.org/pdf/2505.04847
- Out-of-KB robustness (Know-Or-Not): https://arxiv.org/pdf/2505.13545
- Confidence calibration em RAG: https://arxiv.org/pdf/2601.11004
- LLM API pricing 2026: https://www.tldl.io/resources/llm-api-pricing-2026 | https://ai.google.dev/gemini-api/docs/pricing
- Govtech/legal AI best practices (AI-in-the-loop, UPL, auditoria): https://www.ncsc.org/resources-courts/legal-practitioners-guide-ai-hallucinations | https://www.wolterskluwer.com/en/expert-insights/harnessing-ai-in-legal-teams-practical-strategies-for-responsible-adoption
