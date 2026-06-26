# Integração WhatsApp — Projeto Compadre (assistente CAR no WhatsApp)

Pesquisa: 2026-06-26. Foco: canal para o pequeno produtor regularizar o CAR via WhatsApp.
Convenção: ⚠️ = não confirmado em fonte primária / precisa validação antes de decidir.

---

## 1. Modelo de cobrança (WhatsApp Business Platform / Cloud API)

A Meta migrou de "conversation-based" para **cobrança por mensagem (per-message)** em **1º de julho de 2025**. Cada *template* entregue é cobrado individualmente conforme **categoria** e **código de país do destinatário**.

Quatro categorias: **marketing, utility (utilidade), authentication, service**.

Regras de gratuidade que importam para o Compadre:
- **Service messages: gratuitas** para todos desde 1º nov 2024. "Service" = qualquer mensagem livre (não-template) dentro da janela de atendimento de 24h.
- **Janela de atendimento (service window) de 24h**: abre quando o usuário manda mensagem; fica aberta por 24h após a última mensagem do usuário. Dentro dela, **todas as mensagens não-template são gratuitas**.
- **Utility templates dentro da janela de 24h: gratuitos** desde 1º jul 2025. Só paga utility se enviar **fora** da janela (reengajamento proativo).
- **Free entry point**: se o usuário inicia via anúncio click-to-WhatsApp ou botão de página, há janela de 72h com templates grátis. ⚠️ menos relevante aqui.

Preço (utility, destinatário Brasil): **~US$ 0,008 por mensagem** fora da janela (≈ R$ 0,04–0,05). Marketing é ~8x mais caro. Tiers de volume reduzem utility/authentication conforme escala. ⚠️ valores variam com câmbio e tier; confirmar no rate card vigente.
- A partir de **1º jul 2026**, contas com Sold-To Brasil podem ser criadas/cobradas em **BRL** no Billing Hub (some o risco cambial direto).

**Implicação para o Compadre**: como serviço de informação pública orientado a respostas (o produtor pergunta, o bot responde), a maior parte do tráfego cai em **service window = custo ~zero de Meta**. Só há custo quando enviarmos lembretes/atualizações proativas fora das 24h (utility template, centavos cada).

---

## 2. BSPs brasileiros (Take Blip, Zenvia, etc.) vs. Cloud API direta

- **Take Blip**: BSP desde 2018, foco em chatbot/atendimento, robusto, voltado a média/grande empresa. Onboarding inclui verificação legal+financeira e contrato.
- **Zenvia**: parceiro oficial Meta / BSP, foco médio-grande, atendimento + automação.
- Há ~20 provedores no BR (360dialog, Message Central, AiSensy, etc.) — muitos com pricing mais enxuto para começar.

Requisitos comuns de onboarding:
- **CNPJ ativo** com comprovação fiscal (uso comercial do WhatsApp **exige CNPJ**; CPF não é elegível). ⚠️ **MEI possui CNPJ, portanto qualifica** — o ponto crítico não é "MEI vs CNPJ", é ter CNPJ ativo + site/marca consistentes. Confirmar com o BSP escolhido se MEI passa na verificação de negócio da Meta.
- **Meta Business Manager** + verificação de negócio (Business Verification).
- Documentos: cartão CNPJ ativo, comprovante de endereço batendo com CNPJ, site público com marca correspondente, telefone alcançável para verificação.
- **Prazos**: kickoff típico em 24h; verificação Meta 24–72h com documentação completa; aprovação total ~1–7 dias.

LGPD: BSPs maduros (Blip/Zenvia) oferecem hospedagem/CRM com criptografia e gestão de acesso — relevante para conformidade (ver §5).

**Recomendação**: começar com **Cloud API via BSP enxuto/360dialog-like** (ou direto Cloud API se houver capacidade técnica) para baixar custo e fricção; Blip/Zenvia só se precisar de suporte enterprise. Decisão depende de quem opera o número (ONG/empresa com CNPJ).

---

## 3. Mensagens de voz / áudio (crítico para público de baixa alfabetização)

A **Cloud API recebe e envia áudio** nativamente. Para o Compadre isso é central: o produtor manda áudio, o bot transcreve (STT) e pode responder em áudio (TTS).

Receber/enviar — MIME types suportados:
`audio/ogg; codecs=opus`, `audio/mpeg`, `audio/amr`, `audio/mp4`, `audio/aac`.

Pontos de atenção:
- **Voice message "de verdade" (forma de onda, ícone play)** exige **.ogg com codec OPUS**. Outro codec → vira anexo genérico / falha transcrição.
- Erro comum: enviar com MIME `audio/opus` (errado) em vez de `audio/ogg; codecs=opus` (correto) → Erro 131053.
- Para o ícone play aparecer, arquivo **≤ 512KB** ⚠️ (acima vira ícone de download). Mensagens de voz curtas cabem; respostas TTS longas precisam caber nesse limite ou irão como download.
- Recebimento: o webhook entrega um media ID; baixa-se o áudio via endpoint de mídia (fluxo padrão Cloud API). Sem custo de mensagem se dentro da janela de 24h.

**Calling API (voz/chamada, diferente de áudio gravado)**: entrou em **General Access em ~15 jul 2025**. Inbound (usuário liga) **grátis**; outbound ~US$ 0,01/min com desconto por volume. ⚠️ Disponível na maioria dos países Cloud API; exige número em tier de 1K+ msgs business-initiated para habilitar. **Provavelmente desnecessária** para o Compadre no MVP — áudio assíncrono (gravado) resolve; Calling fica como futuro para suporte humano ao vivo.

---

## 4. Templates de utilidade — o que é permitido p/ serviço de informação pública

Utility templates devem ser **estritamente não-promocionais** (sem oferta, upsell ou persuasão) e:
- solicitados pelo usuário (atualização de pedido/conta/processo), **ou**
- essenciais/críticos ao usuário (alerta de segurança, prazo, ação urgente).

Mudanças 2025:
- Desde **9 abr 2025** a Meta **recategoriza automaticamente** (ex.: utility → marketing) se o conteúdo parecer promocional; pode-se pedir revisão em até 60 dias.
- Risco real: lembretes do tipo "regularize seu CAR antes do prazo X" precisam ser redigidos como **alerta/atualização factual**, não como chamada de marketing, ou serão recategorizados (e cobrados como marketing).

⚠️ As fontes encontradas tratam de regras comerciais; **não há regra especial documentada para "serviço de informação pública/governo"**. O Compadre seria tratado como qualquer utility — então o caminho é redação não-promocional + opt-in. Validar com o BSP se há programa específico (alguns têm trilhas para utilidade pública / ONG). 

**Implicação**: o grosso da interação (produtor pergunta → bot responde dentro de 24h) **não usa template e é grátis**. Templates só para **reengajar fora da janela** (ex.: "atualização sobre seu cadastro CAR") — desenhar 2–3 utility templates enxutos e não-promocionais.

---

## 5. LGPD para dados de produtor no WhatsApp

- Dados do produtor (nome, telefone, CAR, área, cultura, georreferenciamento) são **dados pessoais** sob LGPD. Georreferenciamento + dados de propriedade podem ser sensíveis na prática — tratar com cuidado. ⚠️ classificação de sensibilidade a validar juridicamente.
- **Base legal**: para mensagens proativas, **consentimento** (opt-in claro, específico, informado e **documentado**) é a base mais segura. Sem opt-in registrado, não há base para comunicação proativa (templates fora da janela). Para responder a quem nos procurou, há base em execução/legítimo interesse, mas registrar consentimento é o caminho limpo.
- **Armazenamento**: conversas/dados em ambiente seguro com criptografia e gestão de acesso (CRM/BSP) — **nunca no celular pessoal de operador** (não-conformidade grave).
- Direitos do titular (acesso, correção, exclusão) e finalidade explícita devem ser suportados.
- Definir papéis Controlador/Operador no contrato com o BSP.

---

## Decisões de canal recomendadas

1. **Canal: Cloud API** (via BSP enxuto, ex. 360dialog-like; Blip/Zenvia só se precisar de enterprise). Operar sob **CNPJ ativo** — MEI serve se passar na verificação de negócio Meta. ⚠️ confirmar MEI com o BSP.
2. **Custo near-zero no core**: arquitetar o fluxo para viver dentro da **janela de 24h** (perguntas→respostas = service, grátis). Pagar só utility template (~R$ 0,04) para reengajamento proativo fora das 24h.
3. **Áudio assíncrono nativo** (receber + responder em `audio/ogg;codecs=opus`, ≤512KB p/ voice message). É a feature-chave para o público; **Calling API não é necessária no MVP**.
4. **Templates**: criar 2–3 utility não-promocionais com opt-in; redigir como alerta/atualização (evitar recategorização para marketing).
5. **LGPD**: opt-in documentado como base legal, dados em CRM/BSP criptografado, papéis Controlador/Operador no contrato. Validar sensibilidade de dados de georreferenciamento juridicamente.

---

## Fontes
- Meta — Pricing on the WhatsApp Business Platform: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing (acesso 2026-06-26)
- Meta — Conversation-based pricing (Deprecated): https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing/ (2026-06-26)
- Meta — Audio messages: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages/ (2026-06-26)
- Meta — Calling (Cloud API) e Calling Pricing: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/pricing (2026-06-26)
- respond.io — WhatsApp Business Calling API (GA em 15/jul, inbound grátis, outbound ~US$0,01/min): https://respond.io/whatsapp-business-calling-api (2026-06-26)
- Message Central — WhatsApp Business API Pricing in Brazil 2026: https://www.messagecentral.com/blog/whatsapp-business-api-pricing-in-brazil (2026-06-26)
- Message Central — Setup in Brazil (CNPJ, docs, prazos 24–72h): https://www.messagecentral.com/blog/whatsapp-business-api-setup-brazil (2026-06-26)
- SocialHub — Preço WhatsApp API 2026 Brasil: https://www.socialhub.pro/blog/preco-whatsapp-api-2026-brasil/ (2026-06-26)
- SocialHub — BSPs homologados Meta Brasil 2026: https://www.socialhub.pro/blog/bsp-whatsapp-brasil-empresas-homologadas-meta-2026/ (2026-06-26)
- SocialHub — LGPD e WhatsApp Business 2026: https://www.socialhub.pro/blog/lgpd-whatsapp-business-guia-conformidade-2026/ (2026-06-26)
- SocialHub — Opt-In WhatsApp + LGPD: https://www.socialhub.pro/blog/opt-in-whatsapp-business-consentimento-lgpd/ (2026-06-26)
- Blip — Chatbot WhatsApp: https://www.blip.ai/en/whatsapp/ (2026-06-26)
- Zenvia — WhatsApp Business API guia: https://zenvia.com/blog/whatsapp-business-api-o-que-e-como-funciona-e-vantagens-fundamentais-para-empresas/ (2026-06-26)
- ycloud — Template category update 1º jul 2025: https://www.ycloud.com/blog/whatsapp-api-message-template-category-guidelines-update (2026-06-26)
- Sanuker — Template categories guideline: https://sanuker.com/guideline-to-whatsapp-template-message-categories/ (2026-06-26)
- chatwoot issue #12713 — MIME audio/opus erro 131053: https://github.com/chatwoot/chatwoot/issues/12713 (2026-06-26)
- 360dialog — Voice Message Beta: https://docs.360dialog.com/partner/messaging-and-calling/media-messages/voice-message-beta-program (2026-06-26)
