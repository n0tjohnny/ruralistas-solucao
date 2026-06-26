# Viabilidade Técnica — Compadre: Assistente CAR via WhatsApp

**Data:** Junho de 2026  
**Escopo:** Avaliação de viabilidade técnica para um assistente conversacional por voz/WhatsApp destinado a pequenos produtores rurais que precisam regularizar o CAR (Cadastro Ambiental Rural), com foco em usuários de baixa escolaridade e conectividade limitada.

---

## 1. WhatsApp Business Platform/API

### 1.1 Capacidades atuais

O WhatsApp Business API (Cloud API, hospedada pela Meta) oferece:

- **Mensagens de texto, imagem, áudio e documentos** em ambas as direções (negócio → usuário e usuário → negócio).
- **Mensagens de voz (voice notes):** usuários podem enviar áudios OGG/OPUS; o negócio pode enviar áudios pré-gravados via template ou fora da janela de serviço.
- **Calling API (desde julho de 2025):** chamadas VoIP via WebRTC integradas ao WhatsApp; ainda em acesso seletivo via parceria direta com a Meta. A Meta declarou explicitamente que essa API "pavimenta o caminho para suporte de voz com IA no futuro."
- **Janela de serviço de 24h:** quando o usuário inicia a conversa, a resposta é gratuita dentro desse período. Fora dela, requer template aprovado.
- **Templates (HSM):** necessários para mensagens de saída fora da janela de 24h; precisam de aprovação da Meta (tipicamente em horas).

### 1.2 Fluxo de mensagens de áudio recebido

A Cloud API entrega a mensagem de voz do usuário como um arquivo de mídia (URL temporária). O servidor da aplicação baixa o áudio, transcreve com STT e processa a resposta. **Não há transcrição automática nativa na API do lado do servidor** — isso precisa ser implementado pelo desenvolvedor. A transcrição automática existe no cliente WhatsApp (app do usuário), mas não é acessível programaticamente.

### 1.3 Custos (Brasil, 2026)

A partir de julho de 2025, o modelo de cobrança passou de por-conversa para por-mensagem:

| Categoria de mensagem | Custo estimado (Brasil) |
|---|---|
| Marketing (template de saída) | ~US$ 0,0625 por mensagem |
| Utility (confirmações, status) | ~US$ 0,0068 por mensagem |
| Authentication (OTP) | ~US$ 0,0068 por mensagem |
| Service (dentro da janela 24h) | Gratuito |
| Inbound (usuário iniciou) | Gratuito |

Para o perfil do Compadre (usuário inicia a conversa por voz, negócio responde em áudio dentro da janela de 24h), **a grande maioria das interações será gratuita**. Custo real dominante vem de BSP (Business Solution Provider) — tipicamente 15–35% acima da tarifa Meta.

**BSPs brasileiros relevantes:** Zenvia, Take Blip, Infobip, Twilio (com presença no Brasil). Existem também BSPs focados em pequenas empresas que operam em PT-BR (ex. WhatsAppNow com suporte LGPD/ANATEL).

### 1.4 Requisitos de aprovação e onboarding

- **CNPJ ativo ou MEI** (aceito pela Meta).
- **Facebook Business Manager verificado** com domínio de site (mesmo uma landing page simples serve).
- **Número de telefone dedicado** (não pode ser o número pessoal do WhatsApp atual do negócio — ao migrar, os dados do app são perdidos).
- **Prazo:** Via BSP gerenciado, 1–7 dias úteis. Sem BSP (direto via Meta), 2–6 semanas.
- **Templates:** aprovação em até 24h por template; templates de utilidade têm aprovação mais rápida que marketing.

### 1.5 Limitações críticas para o Compadre

1. A Calling API (chamadas de voz em tempo real) ainda não está em acesso geral — requer parceria com a Meta. **Para MVP, focar em voice notes assíncronas**, que funcionam bem hoje.
2. Limite de tamanho de arquivo de áudio de saída: **16 MB**. Respostas de áudio longas precisam ser quebradas.
3. O número de telefone não pode ser reutilizado simultâneamente no WhatsApp pessoal e Business API.
4. WhatsApp não permite automação sem consentimento explícito do usuário (opt-in documentado).

---

## 2. Speech-to-Text (STT) e Text-to-Speech (TTS) em Português Brasileiro

### 2.1 Opções de STT

| Provedor | Suporte PT-BR | Sotaque regional | Custo | Latência |
|---|---|---|---|---|
| **OpenAI Whisper** | Excelente | Razoável (treinado em 680k h, multi-sotaque) | US$ 0,006/min | ~2–5s por áudio |
| **Google Cloud STT (v2)** | Excelente | Bom (modelo chirp) | US$ 0,016/min (standard) | ~1–3s |
| **AssemblyAI** | Bom | Razoável | US$ 0,15/h (US$ 0,0025/min) | ~2–4s |
| **Deepgram Nova-3** | Suporte PT-BR | Moderado | US$ 0,0043/min | <1s (streaming) |
| **Soniox** | Foco em PT-BR | Boa compreensão de variantes regionais | Consultar | Baixa |

**Recomendação para MVP:** Whisper (via API da OpenAI ou hospedagem própria com `faster-whisper`) pelo custo-benefício e qualidade com sotaques brasileiros variados. Para produção com escala, comparar com Google Chirp.

**Dataset de sotaques regionais:** O projeto **SOTAQUE** (sotaque.ia.br) e o **FalaBrasil** (UFPA) disponibilizam datasets abertos de vozes em PT-BR regional — relevantes para fine-tuning ou avaliação de qualidade com sotaques rurais (nordestino, centro-oeste, caipira).

### 2.2 Opções de TTS

| Provedor | Naturalidade PT-BR | Sotaque regional | Custo |
|---|---|---|---|
| **ElevenLabs** | Alta | Adaptável a variantes regionais | US$ 0,0003/char (planos pagos) |
| **Google Cloud TTS** | Alta (WaveNet, Neural) | Padrão (PT-BR) | US$ 4/1M chars (Neural) |
| **OpenAI TTS** | Alta (nova, alloy) | Padrão (PT-BR) | US$ 0,015/1K chars |
| **Fish Audio** | Especializado em sotaques BR | Foco explícito em variantes regionais | Consultar |
| **AWS Polly** | Boa | Padrão | US$ 4/1M chars (Neural) |

**Para o Compadre:** a voz de saída deve soar amigável, com sotaque próximo ao regional do usuário. ElevenLabs ou Fish Audio permitem clonagem de voz de um "personagem" local. Para custo-benefício em MVP, Google Cloud TTS Neural (PT-BR) é pragmático.

### 2.3 Estimativa de custo de áudio por interação

Assumindo média de 30 segundos de áudio de entrada e 45 segundos de áudio de saída por turno:

- STT (Whisper): US$ 0,006/min × 0,5 min = **US$ 0,003**
- TTS (Google Neural): ~500 chars × US$ 0,000004 = **US$ 0,002**
- **Total áudio por turno: ~US$ 0,005** (menos de R$ 0,03)

Com 5 turnos por sessão: ~US$ 0,025 por sessão completa — viável mesmo para modelos gratuitos ao produtor.

---

## 3. LLMs para Domínio Jurídico/Regulatório em PT-BR

### 3.1 Estado da arte e riscos de alucinação

Estudos de 2025 (Stanford, preprints) mostram que **mesmo com RAG, LLMs jurídicos apresentam taxas de alucinação entre 17% (ferramentas especializadas) e 43% (GPT-4 sem RAG)**. No domínio de legislação ambiental e fundiária em PT-BR, os riscos são:

- **Citação de artigos incorretos** do Código Florestal (Lei 12.651/2012) ou normativas do SICAR.
- **Confusão entre normativas estaduais e federais** (cada estado tem órgão ambiental com variações no processo de análise do CAR).
- **Desatualização de prazos e programas** (PRA — Programa de Regularização Ambiental — tem datas e condições que mudam por estado).

### 3.2 Estratégia RAG para o Compadre

A arquitetura recomendada é RAG (Retrieval-Augmented Generation) sobre corpus curado:

**Corpus base:**
- Lei 12.651/2012 (Código Florestal) + atualizações
- Instrução Normativa MMA n.º 2/2014 (SICAR)
- Manuais de usuário do SICAR por estado
- Normativas do PRA por estado
- Resoluções do CONAMA relevantes
- FAQ do SICAR federal e estaduais

**Pipeline sugerido:**
```
Áudio do produtor
  → STT (Whisper)
  → Classificação de intenção (LLM leve)
  → Busca vetorial no corpus CAR/ambiental (pgvector ou Chroma)
  → LLM (Claude Sonnet ou GPT-4o) com contexto recuperado
  → Resposta em linguagem simples
  → TTS
  → Áudio no WhatsApp
```

**Controles críticos de qualidade:**
- **Delimitação de escopo:** o assistente só responde sobre CAR/regularização ambiental. Perguntas fora do escopo são redirecionadas a orientadores humanos.
- **Verificação de fontes:** toda afirmação sobre prazos, documentos ou etapas deve citar o trecho recuperado.
- **Escalonamento humano obrigatório** para:
  - Situações de imóvel "Pendente" ou "Cancelado" com sobreposição de áreas
  - Casos que envolvam posseiros sem documentação de propriedade
  - Qualquer orientação que implique decisão jurídica irreversível
- **Avisos legais claros:** "Sou um assistente de informação, não um advogado. Confirme os passos com o órgão ambiental do seu estado."

### 3.3 Modelos LLM recomendados

| Modelo | Qualidade PT-BR | Custo | Adequação |
|---|---|---|---|
| **Claude Sonnet (Anthropic)** | Alta | Moderado | Bom raciocínio jurídico, seguro |
| **GPT-4o (OpenAI)** | Alta | Moderado | Amplamente testado em legal |
| **Gemini 1.5 Pro (Google)** | Alta | Moderado | Forte em PT-BR |
| **Llama 3.3 70B (Meta, self-hosted)** | Boa | Baixo (infra própria) | Para volume alto sem custo por token |

Para o domínio CAR, o modelo não precisa ser o mais poderoso — um Sonnet ou GPT-4o mini com RAG bem curado supera um GPT-4o sem contexto.

---

## 4. Design para Baixa Escolaridade e Conectividade Fraca

### 4.1 Padrões de UX por voz

A pesquisa em contextos de baixa alfabetização (India, África, Brasil rural) mostra:

- **Voz como modo primário:** usuários de baixa escolaridade preferem voz a texto mesmo quando o texto está disponível. Voice-first não é apenas conveniência — é o canal natural.
- **Confirmação por repetição:** o assistente deve repetir o que entendeu antes de agir ("Entendi que você quer saber como fazer o CAR. Tá certo?").
- **Perguntas uma de cada vez:** nunca fazer múltiplas perguntas num mesmo turno.
- **Linguagem concreta:** "Você vai precisar do CPF, do documento da terra e do mapa do imóvel" — não "providencie a documentação cadastral".
- **Feedback de progresso:** "Você já fez o passo 1 de 4. Vamos pro passo 2?"
- **Recuperação de erros gentil:** nunca usar "inválido" ou "erro" — usar "não entendi bem, pode repetir?"
- **Opções numéricas como fallback:** usuários de baixa escolaridade são confortáveis com teclado numérico ("aperta 1 pra continuar, 2 pra ouvir de novo").

### 4.2 Baixo consumo de dados e conectividade fraca

O WhatsApp opera com compressão OGG/OPUS para áudios, o que é eficiente. Estimativas:

- **Mensagem de voz de 30s:** ~40–60 KB (OPUS a 16 kbps)
- **Sessão completa de 5 turnos (~3 min de áudio total):** ~300–500 KB

Isso é viável mesmo em conexões 2G/2.5G (EDGE) que ainda existem em zonas rurais brasileiras. Pontos de atenção:

- Evitar envio de imagens ou PDFs como resposta principal — usar texto simples ou áudio.
- Se for necessário enviar um documento (ex.: comprovante de cadastro), oferecer como opção, não como default.
- **Suporte offline parcial:** WhatsApp armazena mensagens localmente. O produtor pode ouvir as instruções recebidas sem conectividade. O assistente deve formatar respostas como checklists por áudio que o usuário pode ouvir repetidamente offline.

### 4.3 Considerações de hardware

Produtores rurais brasileiros usam predominantemente **smartphones Android de entrada** (4–8 GB RAM, Android 8–12). WhatsApp roda bem nesses dispositivos. Nenhum app adicional é necessário do lado do usuário — isso é uma vantagem competitiva crítica do canal WhatsApp.

---

## 5. Acesso Programático ao SICAR/CAR

### 5.1 APIs disponíveis no Conecta GOV.BR (2026)

Em maio de 2026, o governo federal integrou as APIs do CAR ao **Conecta GOV.BR**. As APIs disponíveis são:

| API | Função | Status |
|---|---|---|
| **Consulta SICAR CPF/CNPJ** | Lista imóveis rurais vinculados a um CPF ou CNPJ | Disponível |
| **SICAR Demonstrativo** | Informações ambientais declaradas para o imóvel | Disponível |
| **SICAR Tema** | Camadas geoespaciais para análise e monitoramento | Disponível |
| **SICAR Imóvel** | Dados do imóvel rural por código identificador | Disponível |
| **SICAR Documento Imóvel** | Documentos associados ao imóvel | Em desenvolvimento |

**Autenticação:** Via conta GOV.BR (nível bronze mínimo). Acesso para órgãos públicos via adesão ao Conecta GOV.BR. **Para empresas privadas**, o acesso direto às APIs requer parceria/convênio com órgão público habilitado — **não há acesso público irrestrito para desenvolvedores privados** atualmente.

### 5.2 CAR Pré-Preenchido (lançado novembro 2025)

O MGI lançou na COP30 (Belém, nov/2025) o **CAR Pré-Preenchido**, análogo à declaração de IR pré-preenchida. O sistema:

- Usa dados geoespaciais e de titularidade de bases oficiais para preencher automaticamente campos do cadastro.
- Disponível para DF e 15 estados (incluindo Minas Gerais, Paraná, Rio Grande do Sul, Mato Grosso).
- Acesso via GOV.BR.

**Implicação para o Compadre:** o fluxo de orientação pode guiar o produtor a usar o CAR Pré-Preenchido, que já reduz a barreira de entrada. O assistente não precisa fazer o cadastro pelo produtor — orienta o produtor a fazê-lo.

### 5.3 Base dos Dados e fontes alternativas

A **Base dos Dados** (basedosdados.org) disponibiliza datasets do CAR já processados no BigQuery, incluindo polígonos de imóveis e status de cadastro. É uma alternativa para análise em lote e pesquisa, mas não para consulta em tempo real individualizada.

### 5.4 Limitações e caminhos de parceria

| Necessidade | Viável hoje? | Caminho |
|---|---|---|
| Consultar status do CAR de um imóvel por CPF | Parcialmente (via Conecta, acesso restrito a órgãos) | Parceria com SEMA estadual ou MAPA |
| Verificar sobreposições geoespaciais | Sim, via SICAR Tema (mesmas restrições de acesso) | Idem |
| Submeter/atualizar cadastro programaticamente | Não (apenas via interface web SICAR) | Não existe API pública de escrita |
| Consultar situação de análise do imóvel | Não programaticamente (só via portal) | Requere integração direta com SICAR estadual |

**Conclusão prática:** para o MVP, o Compadre orienta o produtor a acessar o SICAR manualmente ou via CAR Pré-Preenchido, não substitui o portal. A consulta automatizada de status requer convênio com órgão público — viável via parceria com Emater, Incra ou SEMA estadual.

---

## 6. Riscos Técnicos e de Conformidade

### 6.1 LGPD

O Compadre processará dados pessoais e fundiários sensíveis:
- CPF do produtor
- Dados do imóvel (localização, tamanho, situação ambiental)
- Gravações de voz

**Obrigações LGPD:**
- **Base legal:** consentimento explícito (mais seguro para contexto de assistente) ou legítimo interesse (mais frágil).
- **Finalidade específica:** os dados coletados só podem ser usados para a finalidade declarada (orientação CAR).
- **Minimização:** coletar apenas o necessário.
- **Política de privacidade** em linguagem acessível (áudio e texto simples, dado o perfil do usuário).
- **DPO (Encarregado de Dados):** obrigatório se o processamento for em larga escala.
- **Prazo de retenção:** definir e implementar deleção automática após finalidade cumprida.
- **Gravações de voz:** são dados biométricos potencialmente sensíveis — exigem consentimento reforçado e política de retenção explícita.

**Sanções:** multa de até 2% do faturamento anual, limitada a R$ 50 milhões por infração (ANPD).

### 6.2 Responsabilidade por orientação

O PL 2.338/2023 (Lei de IA brasileira, aprovado no Senado em dez/2024) e a Recomendação OAB 001/2024 estabelecem que:

- **IA não substitui advogado.** O assistente deve ser posicionado como "serviço de informação e orientação", nunca como "assessoria jurídica".
- A responsabilidade civil por informações incorretas que causem dano ao produtor **recai sobre o operador** (empresa que oferece o assistente), não sobre a IA.
- Isso requer:
  - Disclaimers claros antes e durante o uso ("Sou um assistente de informação, não um advogado").
  - Escalonamento humano para casos complexos.
  - Seguro de responsabilidade civil para o operador.
  - Trilha de auditoria de todas as interações.

### 6.3 Dados fundiários e risco de terceiros

Imóveis rurais em áreas de conflito fundiário (ex.: sobreposição com territórios indígenas, quilombolas, UCs) representam risco adicional: orientação incorreta pode resultar em dano irreversível ao produtor ou a terceiros. O assistente deve identificar sinalizadores de risco e escalonar imediatamente.

### 6.4 Dependência de plataforma (WhatsApp/Meta)

- Meta pode alterar políticas de uso, preços ou encerrar acesso a qualquer momento.
- **Mitigação:** coletar e-mail ou outro canal secundário durante o onboarding para não depender 100% do WhatsApp.
- Desenvolver o core da aplicação de forma agnóstica ao canal (pode migrar para Telegram, SMS ou app próprio).

---

## 7. Síntese de Viabilidade

### O que é viável hoje (sem parceria especial)

| Componente | Viabilidade | Notas |
|---|---|---|
| WhatsApp Business API (voice notes assíncronas) | Alta | Via BSP, 1–7 dias para aprovação |
| STT PT-BR (Whisper/Google) | Alta | Qualidade boa para sotaques regionais |
| TTS PT-BR natural | Alta | ElevenLabs, Google Neural |
| LLM com RAG sobre legislação CAR | Alta | Corpus disponível publicamente |
| Orientação passo a passo sobre o processo CAR | Alta | Processo bem documentado e estável |
| Interface voice-first para baixa escolaridade | Alta | Padrões de design estabelecidos |
| LGPD compliance básica | Moderada | Requer DPO, políticas, contratos BSP |

### O que exige esforço/parceria

| Componente | Viabilidade | Requisito |
|---|---|---|
| Consulta automatizada de status do imóvel no SICAR | Moderada | Convênio com SEMA estadual ou MAPA |
| Calling API WhatsApp (chamadas em tempo real) | Baixa agora | Parceria direta com Meta; aguardar GA |
| Fine-tuning de STT para sotaques rurais específicos | Moderada | Coleta de dados de voz regional; dataset SOTAQUE ajuda |
| Escalonamento humano qualificado (extensionista rural) | Moderada | Parceria com Emater, SENAR ou cooperativas |
| Submissão automatizada do CAR | Baixa | Não existe API de escrita no SICAR; requer mudança governamental |
| Cobertura nacional (todos os estados têm SICAR estadual) | Alta | Processo varia por estado; corpus deve ser estadualizado |

### Riscos técnicos prioritários

1. **Alucinação em legislação:** mitigar com RAG curado + escalonamento humano + disclaimers.
2. **Variação do processo por estado:** o PRA e a análise do CAR variam significativamente. O corpus e as respostas precisam ser parametrizados por UF.
3. **Conectividade:** arquitetura assíncrona (voice notes) é naturalmente resiliente a quedas de conexão — vantagem do modelo WhatsApp.
4. **Dependência do fluxo GOV.BR:** produtores de baixa escolaridade podem ter dificuldade com autenticação GOV.BR — o assistente pode precisar guiar esse passo ou substituí-lo por suporte humano.

---

## 8. Recomendação de Arquitetura para MVP

```
[Produtor rural]
      |
      | WhatsApp (voice note OGG/OPUS)
      v
[BSP — ex. Zenvia ou Take Blip]
      |
      | Webhook (JSON + URL de mídia)
      v
[Backend Compadre]
      |
      |-- Download do áudio
      |-- STT: OpenAI Whisper (→ texto PT-BR)
      |-- Classificação de intenção (LLM leve)
      |-- RAG: busca em corpus CAR/Código Florestal (pgvector)
      |-- LLM: Claude Sonnet / GPT-4o mini com contexto recuperado
      |-- TTS: Google Neural PT-BR (→ áudio MP3/OGG)
      |-- Envio de resposta via BSP → WhatsApp
      |
      |-- [Se caso complexo] → Escalonamento para extensionista humano
```

**Stack sugerido (MVP lean):**
- Backend: Python (FastAPI) ou Node.js
- STT: OpenAI Whisper API
- LLM: Claude Sonnet via Anthropic API
- Vetorização/RAG: pgvector (PostgreSQL) ou Chroma
- TTS: Google Cloud TTS Neural
- WhatsApp: Take Blip ou Zenvia (BSPs brasileiros com suporte PT-BR e LGPD)
- Infra: Railway, Render ou AWS (região sa-east-1 para latência)

**Custo estimado por sessão completa (5 turnos de áudio):**
- STT: ~US$ 0,015
- LLM: ~US$ 0,01–0,03
- TTS: ~US$ 0,01
- WhatsApp (service, janela 24h): US$ 0,00
- **Total: ~US$ 0,035–0,055 por sessão** (menos de R$ 0,30)

---

## Referências

- [Meta — Audio messages Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages/)
- [Meta — Cloud API Calling](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling)
- [MEF — WhatsApp Opens New Front in Business Voice](https://mobileecosystemforum.com/2025/12/17/whatsapp-opens-a-new-front-in-business-voice-with-calling-api/)
- [Gov.BR — Integração CAR ao Conecta GOV.BR (maio 2026)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/maio/governo-do-brasil-integra-dados-do-cadastro-ambiental-rural-ao-conecta-gov.br)
- [Catálogo APIs Gov.BR — Consulta SICAR CPF/CNPJ](https://www.gov.br/conecta/catalogo/apis/consulta-sicar-cpf-cnpj)
- [MGI — CAR Pré-Preenchido (novembro 2025)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/mgi-lanca-cadastro-ambiental-rural-pre-preenchido-direcionado-a-produtores-e-proprietarios-de-imoveis-rurais)
- [SOTAQUE — Dataset de vozes PT-BR regional](https://sotaque.ia.br/)
- [FalaBrasil — Speech datasets PT-BR](https://github.com/falabrasil/speech-datasets)
- [Stanford — Legal RAG Hallucinations (2025)](https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf)
- [MessageCentral — WhatsApp API Pricing Brazil 2026](https://www.messagecentral.com/blog/whatsapp-business-api-pricing-in-brazil)
- [Gov.BR — CAR Pré-Preenchido (IRIB)](https://www.irib.org.br/noticias/detalhes/car-pre-preenchido-e-lancado-pelo-mgi-na-cop30)
- [LGPD e Agronegócio — AgroLei](https://agrolei.com/2020/11/20/lei-geral-de-protecao-de-dados-e-sua-aplicabilidade-no-agronegocio/)
- [IA em atendimentos — riscos legais](https://parceriajuridica.com.br/ia-em-atendimentos-onde-mora-o-risco-legal/)
- [Deepgram — Best STT APIs 2026](https://deepgram.com/learn/best-speech-to-text-apis-2026)
- [AssemblyAI — Benchmarks](https://www.assemblyai.com/benchmarks)
