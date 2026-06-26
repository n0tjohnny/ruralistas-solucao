# 09 — Monetização e Sustentação do Compadre (Bem Público Digital)

**Projeto:** Compadre — assistente de WhatsApp, open source, para o pequeno produtor regularizar o CAR.
**Risco central:** o produtor **não paga**. Quem banca a operação depois do prêmio do haCARthon?
**Data da pesquisa:** 2026-06-26.

---

## 1. Premissa: o produtor não é o pagador

Toda a evidência reforça que o pequeno produtor é exatamente quem **menos** consegue pagar:

> "O efeito mais perverso do EUDR é a possibilidade de que o regulamento, ao impor custos de compliance elevados, exclua justamente os produtores com menor capacidade financeira e técnica. (...) muitos não têm sequer acesso à internet, muito menos condições de implementar georreferenciamento e rastreabilidade."
> — MartinsZanchet / análise EUDR, ago. 2025. https://martinszanchet.com.br/blog/tudo-sobre-a-eudr-o-que-e-quem-sera-afetado-e-como-se-preparar-para-as-novas-regras-ambientais-da-uniao-europeia/

Conclusão: a sustentação tem de vir de **terceiros que capturam valor da regularização do produtor** — Estado, financiadores climáticos, ou a cadeia de valor (bancos/tradings/cooperativas). O Compadre é a infraestrutura barata que torna essa regularização viável em escala.

A boa notícia: o custo unitário é baixíssimo. Custo por interação de IA no WhatsApp no Brasil em 2026: **R$ 0,05 a R$ 0,38/interação** (modelo intermediário ~R$ 0,16); API WhatsApp para conversas iniciadas pelo cliente (service) é a faixa mais barata. Isso valida a referência de ~R$ 0,30/sessão.
- https://www.clint.digital/blog/custo-agente-ia-whatsapp-2026/
- https://www.socialhub.pro/blog/preco-whatsapp-api-2026-brasil/

A R$ 0,30/sessão, regularizar 100 mil produtores em uma campanha custa na ordem de **R$ 30 mil em IA + WhatsApp** (fora pessoal/manutenção) — ordem de grandeza que cabe num único convênio ou doação. O gargalo é institucional (quem assina o cheque recorrente), não tecnológico.

---

## 2. Quem financia Bem Público Digital (DPG)

### 2.1 Ecossistema DPG global
- **Digital Public Goods Alliance (DPGA)** realizou seu 4º Encontro Anual de Membros **em Brasília**, em parceria com o Governo do Brasil (CGU, MGI, DATAPREV). O Brasil **anunciou um módulo open source derivado do próprio CAR (Rural Environmental Registry)**. A pauta 2026 da DPGA é explicitamente "deepening DPG sustainability" — financiamento de manutenção upstream. Fonte alinha o Compadre a uma janela política aberta: o CAR já está na mesa da DPGA. https://amm25.digitalpublicgoods.net/ ; https://www.digitalpublicgoods.net/about-dpga
- **Co-Develop** (fundo global filantrópico) integrou compromissos no roadmap 2025–2026 da DPGA, incluindo **grants direcionados a DPGs que sustentam infraestrutura pública digital (DPI)**. https://www.codevelop.fund/insights-1/co-develop-joins-the-digital-public-goods-alliance...
- **UNICEF Office of Innovation / Venture Fund**: modelo reconhecido de que DPG "não é caminho rápido para retorno financeiro"; pilota o protocolo **Drips** para financiamento recorrente de open source, e mantém portfólio onde 70% das startups geram receita. Caminho: candidatar o Compadre a Venture Fund / acelerador DPG. https://www.unicef.org/innovation/stories/exploring-sustainable-funding-digital-public-goods ; https://www.drips.network/blog/posts/exploring-sustainable-funding-for-digital-public-goods-with-unicef
- Padrão DPG/DPI sob holofote regulatório em jan. 2026. https://news.fundsforngos.org/2026/01/14/charting-a-safe-and-inclusive-digital-future-with-the-dpg-standard-and-dpi-safeguards/

**Leitura:** financiamento DPG puro (DPGA/Co-Develop/UNICEF) cobre desenvolvimento e manutenção do código, mas é competitivo, em dólar e episódico (grant). Bom para a v1/manutenção do core; fraco para custear operação contínua em massa.

### 2.2 Fundo Amazônia / BNDES — o pagador mais concreto
Este é o achado mais forte. O Fundo Amazônia **já está pagando exatamente o serviço que o Compadre barateia**:
- Fev/2026: governo abriu inscrições para entidades executarem **regularização ambiental e fundiária + ATER**, beneficiando ~7 mil famílias em 48 municípios prioritários. Inclui **inscrição e regularização no CAR**, georreferenciamento e PRADAs. https://www.gov.br/mma/pt-br/noticias/governo-do-brasil-abre-inscricoes-de-projeto-para-regularizar-areas-e-apoiar-producao-de-30-mil-agricultores-familiares-na-amazonia
- É o **1º de 3 projetos em 5 anos**, meta de **30 mil famílias regularizadas, R$ 600 milhões** totais. https://agenciadenoticias.bndes.gov.br/cultura/Fundo-Amazonia-Governo-do-Brasil-promove-regularizacao-e-apoio-a-producao-de-ate-30-mil-agricultores-familiares/
- MMA+BNDES anunciaram R$ 210 mi adicionais; Restaura Amazônia (MMA/MDA/BNDES) R$ 150 mi. Pipeline de editais ativo. https://www.gov.br/mma/pt-br/noticias/mma-e-bndes-anunciam-r-210-milhoes-do-fundo-amazonia... ; https://agenciadenoticias.bndes.gov.br/socioambiental/Restaura-Amazonia-MMA-MDA-e-BNDES-lancam-edital-de-R$-150-mi...

**Encaixe do Compadre:** as entidades executoras (ANATER-credenciadas) precisam regularizar milhares de famílias com custo por família alto. R$ 600 mi / 30 mil famílias = **~R$ 20 mil/família** orçados. O Compadre como ferramenta dessas executoras derruba o custo marginal de triagem/CAR para centavos. Vender (ou doar com convênio de custeio) a executoras é o caminho de receita mais curto.

---

## 3. Estado como custeador (govtech)

- **MGI + MDA** já integraram o **CAF (Cadastro Nacional da Agricultura Familiar)** ao Conecta GOV.BR via 8 APIs, **sem custo e sem contrato** para órgãos públicos — infraestrutura de dados que o Compadre pode consumir. https://www.gov.br/gestao/.../mais-de-1-1-bilhao-de-transacoes-de-dados...
- ACT federal para inscrever **300 mil assentados no CAF** (MDA/INCRA). Volume gigante de produtores que precisam de onboarding digital. https://agenciagov.ebc.com.br/noticias/202502/acordo-preve-inscricao-de-300-mil-assentados...
- MGI estima **R$ 6,31 bi** de economia em 2025 com digitalização — argumento de ROI para convênio.

**Leitura:** o Estado custeia via **convênio/ACT/termo de cooperação** com estado, MDA ou órgão estadual de meio ambiente (que opera o SICAR estadual). Não há "compra de SaaS" simples; exige um ente público assumir o Compadre como ferramenta oficial. Lento, porém recorrente e alinhado a um DPG.

---

## 4. Cadeia de valor: bancos, cooperativas e tradings pagam?

Aqui há **disposição a pagar emergente e regulatoriamente forçada** — o ângulo mais subestimado.

### 4.1 Crédito rural (bancos e cooperativas)
- **A partir de 01/04/2026**, o acesso ao crédito rural segue **novos critérios socioambientais (Resoluções CMN)**: rastreabilidade territorial e responsabilidade socioambiental como **condição objetiva** para contratar, manter e renovar operações. https://conexaomt.com/agronegocio/novo-marco-do-credito-rural-exige-responsabilidade-socioambiental-e-rastreabilidade...
- Bancos (BB, Caixa), cooperativas e agentes **só liberam crédito com CAR regularizado**; valor pode subir **até 10%** com CAR apresentado. https://www.comprerural.com/credito-rural-muda-as-regras-bancos-exigem-comprovacao-ambiental/

**Disposição a pagar:** o banco/cooperativa tem incentivo direto — produtor regularizado = carteira elegível, mais crédito contratado, menos risco de conformidade. Cooperativas de crédito (Sicredi/Cresol) e cooperativas agrícolas têm relação direta com milhares de associados e orçamento de assistência técnica. **Cooperativa é o pagador B2B2C mais plausível e mais rápido** fora do edital.

### 4.2 Tradings / EUDR
- EUDR obriga (escalonado: médias/grandes dez/2025; pequenas jun/2026) **prova de origem livre de desmatamento + CAR + rastreabilidade georreferenciada** para soja, boi, café, cacau, borracha, palma, madeira. https://www.serasaexperian.com.br/conteudos/eudr... ; https://ecconsa.com.br/cna121/
- A trading/exportador é **legalmente responsável** pela conformidade do fornecedor — ou seja, tem incentivo financeiro direto (acesso ao mercado europeu) para custear a regularização de pequenos fornecedores que, sozinhos, não conseguem. Imaflora trata isso como risco de exclusão de cadeia. https://admin.imaflora.org/public/media/biblioteca/...EUDR...pdf

**Disposição a pagar:** alta para tradings de café/cacau/soja exportadoras, que perdem fornecedores se eles não se adequarem. O Compadre vira ferramenta de **due diligence de cadeia** white-label.

### 4.3 Filantropia climática (custeio-ponte)
- **iCS (Instituto Clima e Sociedade)** intermedia financiamento climático internacional→local; **Fundo JBS pela Amazônia** e signatários do **Compromisso Brasileiro da Filantropia sobre Mudanças Climáticas** (28 organizações, via GIFE). https://gife.org.br/gifenacop/compromisso-brasileiro-filantropia-sobre-mudancas-climaticas/ ; https://climaesociedade.org/wp-content/uploads/2025/11/Panorama_Financiamento_Climatico-Brasil.pdf
- Ressalva: há "restrições regulatórias que desincentivam a filantropia ambiental no Brasil" — doação ambiental direta é juridicamente sensível; melhor via fundo intermediário (iCS) ou OSC executora.

**Leitura:** filantropia climática serve de **capital-ponte** (1–2 anos) entre o prêmio e um pagador recorrente (edital/cooperativa), não como sustentação permanente.

---

## 5. Editais e fundos abertos / pipeline 2026

| Fonte | Status 2026 | Encaixe |
|---|---|---|
| Fundo Amazônia – regularização 7 mil famílias | Inscrições fev/2026, 1º de 3 projetos (R$600mi/5 anos) | Alto — financiar entidade executora que usa o Compadre |
| Restaura Amazônia (MMA/MDA/BNDES) | R$ 150 mi, ativo | Médio — PRADA/recuperação |
| Co-Develop / DPGA roadmap 25–26 | Grants DPG/DPI | Médio — custeia core/manutenção |
| UNICEF Venture Fund / Drips | Aberto, recorrente | Médio — manutenção open source |
| ACT MDA/INCRA – 300 mil assentados no CAF | Em execução | Alto — convênio de onboarding |

---

## 6. Hipóteses de pagador (rankeadas)

**H1 — Entidade executora de edital de regularização (Fundo Amazônia/BNDES), com filantropia climática como capital-ponte.** *(maior probabilidade)*
Por quê: o serviço já está orçado (~R$20 mil/família, R$600mi/30 mil famílias) e o Compadre derruba o custo marginal para centavos. Pagador institucional com cheque grande já liberado; iCS/Fundo JBS cobrem o intervalo até o próximo edital. Caminho mais curto para receita real.

**H2 — Cooperativa de crédito/agrícola (B2B2C), forçada pelo novo marco socioambiental do crédito rural (CMN, abr/2026).** *(média-alta)*
Por quê: incentivo financeiro direto e imediato — CAR regularizado = carteira elegível, +10% de crédito, menos risco. Relação direta com milhares de associados e orçamento de ATER. Venda B2B replicável; ciclo comercial mais rápido que o do Estado.

**H3 — Trading/exportador (café, cacau, soja) sob pressão da EUDR, white-label de due diligence de fornecedor.** *(média)*
Por quê: responsabilidade legal pela conformidade do fornecedor e risco de perder cadeia; alta disposição a pagar, mas escopo restrito às commodities/regiões exportadoras e dependente do cronograma final da EUDR.

*(Cauda longa: Estado via convênio MGI/MDA/órgão estadual — recorrente e ideal para um DPG, porém lento; e grants DPGA/UNICEF para o core, não para operação em massa.)*

---

**Arquivo:** `/home/pepperoni/Documents/ruralistas-solucao/reports/exploration/09-monetizacao-sustentacao.md`
