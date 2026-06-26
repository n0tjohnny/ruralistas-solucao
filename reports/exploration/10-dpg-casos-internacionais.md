# Compadre — DPG e casos análogos internacionais

Pesquisa para o haCARthon. Objetivo: posicionar o Compadre (assistente de WhatsApp para o pequeno produtor regularizar o CAR) como **Bem Público Digital (DPG)** reaproveitável fora do Brasil.
Data da pesquisa: 2026-06-26. Fontes com URL ao final de cada seção.

---

## 0. Achado-âncora: o CAR já é (ou está a caminho de) DPG

O **módulo de cadastro do CAR brasileiro** foi reconhecido/anunciado como Bem Público Digital pela DPG Alliance, descrito como "solução para gestão de informação geoespacial ambiental declarada de propriedades rurais, servindo de base para controle, monitoramento e planejamento ambiental e econômico". Isso é decisivo para o ângulo do haCARthon: **o registro em si já é tratado como DPG**, então o Compadre se posiciona naturalmente como a *camada de acesso/assistência* (front-end conversacional) sobre uma infraestrutura digital pública já legitimada. Não estamos inventando a categoria — estamos completando uma peça que falta (o "last mile" para o pequeno produtor de baixo letramento).

> Cautela de fonte: a recognição aparece na síntese da DPGA/registry e no 2025 DPG Ecosystem Report; confirmar o profile exato no registry antes de citar em pitch oficial.

Fontes: [DPG Registry](https://www.digitalpublicgoods.net/registry) · [Brazil Member Profile — DPGA](https://www.digitalpublicgoods.net/roadmap/9d7bfb94-7d5f-43e8-b5ed-af68f5b62784) · [2025 DPG Ecosystem Report](https://www.digitalpublicgoods.net/2025-DPG-Ecosystem-Report) (acesso 2026-06-26)

---

## 1. O que é um DPG e como qualificar o Compadre

O **DPG Standard** tem **9 indicadores**. Os que mais importam para o Compadre:
- **Relevância a um ODS** (CAR → ODS 13 Clima, 15 Vida Terrestre, 1 Pobreza/inclusão do pequeno produtor).
- **Licença open source aprovada** (OSI/Creative Commons) — pré-requisito duro.
- **Documentação clara** e propriedade/uso dos dados transparentes.
- **"Do No Harm by design"**: privacidade, segurança, conteúdo ilegal/inadequado e proteção contra assédio — crítico porque lidamos com dados georreferenciados de propriedade e CPF de população vulnerável.
- Plataforma independente, padrões abertos, sem lock-in.

O registry tem ~222 entradas (out/2025). Software, dados, IA e conteúdo podem todos qualificar — relevante porque o Compadre é **software + corpus de conhecimento + (potencialmente) modelo/prompt** = pode qualificar em mais de uma categoria.

Fontes: [DPG Standard](https://www.digitalpublicgoods.net/standard) · [DPG Standard repo](https://github.com/DPGAlliance/DPG-Standard) · [What is a DPG? (UNICEF guide)](https://unicef.github.io/publicgoods-accelerator-guide/about-dpgs/what-is-a-dpg/) (acesso 2026-06-26)

---

## 2. Casos análogos de DPG de governo (o que os tornou escaláveis)

**MOSIP** (identidade fundacional open source) — >100M de IDs emitidos em ~5 anos; adotado por Filipinas, Marrocos, Etiópia. Lições diretas para o Compadre:
- **Modularidade e baixo acoplamento**: componentes compostos conforme requisitos de cada país. "MOSIP should work with different locales" — i18n e localização desde o design, não como retrofit.
- **Deploy on-premise** habilita data localization / requisitos regulatórios locais.
- Gargalos reais ao escalar: **capacitação interna** e **migração de dados legados** — não o código, mas a adoção institucional.

**OpenG2P** (entrega de benefícios G2P) — co-fundado pelo Governo de Serra Leoa + Mifos + voluntários, catalisado pelo UNDP. Mostra o **modelo de governança multi-stakeholder** (governo + ONG + comunidade open source) que dá credibilidade e sustentabilidade a um DPG.

**Bahmni** (prontuário/EMR open source) — construído sobre OpenMRS/OpenELIS, "para ambientes de baixos recursos, baixa largura de banda"; adoção em 50+ países. Governança via **Bahmni Coalition** (parceiros implementadores decidem roadmap junto com a comunidade). Modelo de coalizão é replicável para o Compadre.

**QGIS** e **CC Legal Tools** também são DPGs — útil porque o Compadre pode *reusar* DPGs geoespaciais existentes (QGIS) em vez de reconstruir.

Fontes: [MOSIP — Lessons Learned (DIAL)](https://dial.global/research/lessons-learned-reflecting-mosips-journey-scale/) · [MOSIP Principles](https://docs.mosip.io/1.2.0/readme/principles) · [OpenG2P DPG profile](https://www.digitalpublicgoods.net/r/openg2p) · [Bahmni recognized as DPG (Thoughtworks)](https://www.thoughtworks.com/en-in/about-us/news/2021/bahmni-dpg) · [QGIS DPG](https://blog.qgis.org/2025/02/08/qgis-recognized-as-digital-public-good/) (acesso 2026-06-26)

---

## 3. Assistentes de IA gov para baixa renda/letramento (lições diretas)

**Kisan e-Mitra (Índia, PM-KISAN)** — análogo mais próximo do Compadre: chatbot de IA por **voz e texto** para agricultores sobre esquemas de governo. Lições aplicáveis:
- **Multilíngue via corpus/serviço desacoplado**: integra o **Bhashini** (missão nacional de tradução, modelo IndicTrans2) → suporta 11 idiomas. Padrão arquitetural: tradução/voz como serviço externo plugável, não hard-coded. Para o Compadre: desacoplar o **corpus de conhecimento do CAR** da camada de linguagem permite i18n e troca de país.
- **Voz importa** para baixo letramento — aceita áudio de entrada e responde em áudio.
- **Upgrade incremental para LLM** (fev/2024, Wadhwani AI): começaram com NLP/intents, migraram para LLM depois. Resolveu 3M+ de queixas para 290k+ agricultores.

**Singapore OneService** (WhatsApp/Telegram) — cidadão reporta problema, bot roteia automaticamente para a agência certa. Lição: **WhatsApp/canal familiar reduz fricção** e volume de call center; serviço 24/7 atinge quem não pode ligar em horário comercial.

Insight transversal (World Bank): **>35% dos elegíveis desconhecem programas a que têm direito** por falta de comunicação clara — exatamente a lacuna que o Compadre ataca no CAR. WhatsApp roda em smartphone barato, conexão lenta, sem exigir letramento técnico.

Fontes: [Kisan e-Mitra (AI Hub)](https://socialprotectionai.org/use-case/IND-001) · [Kisan e-Mitra (Wadhwani AI)](https://www.wadhwaniai.org/impact/agriculture-solutions/kisan-e-mitra/) · [WhatsApp for government (Infobip)](https://www.infobip.com/blog/whatsapp-for-government-services) (acesso 2026-06-26)

---

## 4. Registros de terra / cadastro rural em outros países

- **Open source é a alternativa viável** para cadastro/registro de terra: o custo de licença proprietária trava países em desenvolvimento; OSS em GIS+DB é "mais flexível e adaptável a condições e idiomas locais", e melhorias revertem para outros cadastros (efeito DPG). FAO e Banco Mundial promovem ativamente OSS para cadastro.
- **FRUITS (Karnataka, Índia)**: registro de pequenos agricultores integrado ao sistema de registro de terras **Bhoomi** (direitos, posse, culturas) — modelo de **registro de produtor acoplado ao cadastro de terra**, análogo ao par CAR ↔ produtor.
- **OpenSPP / Farmer Registry**: DPG para registro de agricultores e gestão de benefícios — building block reusável.
- **Cadasta**: foco em open land data, transparência e *tenure security* para os "poor peasants" que os cadastros tradicionais ignoram — mesma população-alvo do Compadre.

Lição: existe um ecossistema de DPGs de terra/produtor para **interoperar** (não recriar). O diferencial do Compadre é a **camada conversacional de regularização**, que esses sistemas não têm.

Fontes: [OSS for cadastre (OICRF)](https://www.oicrf.org/-/open-source-software-for-cadastre-and-land-registration-a-viable-alternative-) · [FRUITS/Bhoomi via OpenSPP Farmer Registry](https://docs.openspp.org/explanation/farmer_registry) · [Cadasta — Open Land Data](https://cadasta.org/resources/white-papers/accountability-transparency-open-land-data/) (acesso 2026-06-26)

---

## 5. O que faria o Compadre reaproveitável fora do Brasil

| Eixo | Decisão recomendada | Evidência |
|---|---|---|
| **i18n** | Linguagem/voz como serviço plugável (padrão Bhashini); strings e prompts externalizados | Kisan e-Mitra, MOSIP "work with different locales" |
| **Corpus desacoplado** | Separar **regras do CAR/legislação** (corpus por país) do **motor conversacional** — trocar o corpus = trocar de país/cadastro | MOSIP modular, OpenG2P building blocks |
| **Interoperabilidade** | Padrões abertos + APIs; reusar DPGs existentes (QGIS, OpenSPP) em vez de reconstruir | DPG Standard; ecossistema de terra |
| **Deploy** | On-premise/self-host opcional para data localization | MOSIP |
| **Do No Harm** | Privacidade de CPF/geo desde o design; consentimento; sem reter conteúdo sensível | DPG indicador 8 |

---

## 6. Licença e governança (requisitos de DPG / projeto de governo)

- **Licença OSI aprovada é obrigatória** para DPG. ~80% dos projetos usam 4 licenças: MIT, Apache-2.0, GPL-3.0, BSD-2; ~70% dos repos no GitHub usam **permissivas**.
- **Recomendação para o Compadre: Apache-2.0.** É permissiva (maximiza adoção por governos e implementadores, como MOSIP/Bahmni), e — diferente da MIT — inclui **grant explícito de patente**, importante quando há risco de reivindicação de patente sobre fluxos/IA. GPL/AGPL só se houver intenção deliberada de forçar abertura de derivados (pode afastar adoção governamental).
- Conteúdo/corpus: licenciar sob **Creative Commons** (CC-BY ou CC0) separadamente do código.
- **Governança multi-stakeholder** é o que sustenta DPGs no longo prazo: modelo **Coalition** (Bahmni) ou **co-fundação governo+ONG+comunidade** (OpenG2P). Roadmap, design e features decididos com a comunidade implementadora.

Fontes: [DPG Standard — open licensing](https://www.digitalpublicgoods.net/standard) · [GPL vs MIT vs Apache (credativ)](https://www.credativ.de/en/blog/credativ-inside/understanding-open-source-licenses-gpl-mit-apache-compared/) · [Open source license guide 2026 (dev.to)](https://dev.to/juanisidoro/open-source-licenses-which-one-should-you-pick-mit-gpl-apache-agpl-and-more-2026-guide-p90) · [Bahmni Coalition governance (Thoughtworks)](https://www.thoughtworks.com/en-us/insights/podcasts/technology-podcasts/inside-bahmni-open-source-digital-public-good) (acesso 2026-06-26)

---

## 7. Pitch DPG do Compadre (uma frase)

> O CAR já é um DPG; o Compadre é a **camada conversacional de acesso** que o torna utilizável pelo pequeno produtor de baixo letramento via WhatsApp — com corpus de regras desacoplado e i18n plugável, replicável para qualquer cadastro rural/ambiental do Sul Global, sob licença Apache-2.0 e governança em coalizão.
