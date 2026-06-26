# 01 — Regulação de Crédito Rural e CAR (2025–2026) — Pesquisa aprofundada

> Projeto **Compadre** — assistente de WhatsApp para regularização do CAR do pequeno produtor.
> Foco: política e regulação do CAR + crédito rural. Pesquisa de campo via WebSearch em 2026-06-26.
> Continuação dos relatórios `02-dominio-car.md`, `06-edital-completo.md`, `07-pesquisa-aprofundada-2026.md` — aqui só o que é **novo ou mais preciso** que aqueles.

---

## TL;DR — o que mudou desde o relatório 07

1. **Surgiu uma terceira resolução: CMN 5.303, de 12/05/2026.** Os relatórios anteriores param na 5.193/2024 e na 5.268/2025. A 5.303/2026 reescreveu de novo a **Seção 9 (Impedimentos Sociais, Ambientais e Climáticos) do Capítulo 2 do MCR** para "equilibrar" o rigor — é a norma mais recente e a que vale hoje. Precisa entrar no corpus RAG no lugar/junto da 5.268.
2. **O caso virou disputa no STF: ADPF 1.228/DF**, ajuizada pela CNA em 15/04/2026, pedindo suspensão da 5.268/2025 e da 5.193/2024. Argumento central: a regra **presume a culpa e inverte o ônus da prova** contra o produtor. Há risco real de a regra ser suspensa/alterada — o produto não pode tratar os prazos como imutáveis.
3. **Existe um canal oficial e gratuito para o falso-positivo: o "Canal de Atendimento BiomasBR" do INPE** (cadastro no Portal INPE, resposta em até ~60 dias, exige laudo técnico assinado por profissional habilitado). Isso transforma "explicar a recusa" de conselho vago em um **fluxo concreto e encaminhável** — exatamente o tipo de passo-a-passo que o Compadre entrega.

---

## 1. Linha do tempo regulatória consolidada (corrigida)

| Data | Norma / evento | O que estabelece |
|---|---|---|
| 2024 | **Res. CMN 5.193/2024** | Inseriu no MCR a exigência de CAR ativo e impedimentos socioambientais para crédito com recursos controlados/direcionados. |
| 02/01/2025 | Vigência prática | CAR ativo (sem pendências do produtor) passa a ser exigência para crédito rural com recursos controlados (Pronaf, Pronamp, Plano Safra). |
| **18/12/2025** | **Res. CMN 5.268/2025** | Alterou a **Seção 9 do MCR**; tornou o **PRODES (INPE)** critério de elegibilidade. Banco passa a consultar PRODES p/ supressão de vegetação nativa **após 31/07/2019**. Regime **escalonado por módulo fiscal**. ⚠️ Note a data de publicação: **dezembro/2025**, não antes. |
| **01/04/2026** | Vigência — grandes/médios | Verificação PRODES obrigatória para imóveis **> 4 módulos fiscais**. |
| **15/04/2026** | **ADPF 1.228/DF (STF)** | CNA aciona o Supremo pedindo suspensão das resoluções. |
| **12/05/2026** | **Res. CMN 5.303/2026** | Ajusta de novo a Seção 9 ("impedimentos sociais, ambientais e climáticos") para equilibrar direitos. **Norma vigente mais recente.** ⚠️ Confirmar texto integral e se reescalona prazos. |
| **04/01/2027** | Vigência — pequenos | Verificação PRODES para imóveis **até 4 módulos fiscais** (agricultura familiar). É a **janela do público-alvo do Compadre**. |

**Prazos de CAR ligados ao PRA** (Código Florestal, base p/ adesão ao Programa de Regularização Ambiental):
- CAR feito até **31/12/2023** → imóveis **acima de 4 MF**.
- CAR feito até **31/12/2025** → imóveis **até 4 MF** (agricultura familiar). ⚠️ Esse prazo de 31/12/2025 acabou de passar — relevante: quem não inscreveu pode ter perdido a porta de entrada do PRA. Confirmar se houve nova MP prorrogando.
- Adesão ao PRA: **até 1 ano** contado da notificação do órgão estadual (que valida o cadastro e identifica passivos antes).

---

## 2. Resolução CMN 5.303/2026 — a norma que faltava nos relatórios

Fonte: Nota do CMN (Min. Fazenda e Min. Agricultura), 05/2026. A 5.303/2026 alterou a **Seção 9, Capítulo 2 do MCR**. Pontos confirmados:
- **Sem CAR, sem crédito:** não se concede crédito rural a empreendimento em imóvel **não inscrito, cancelado ou suspenso** no CAR.
- **Cruzamento obrigatório com INPE/PRODES:** instituições financeiras devem cruzar os dados do imóvel com o PRODES para identificar supressão pós-31/07/2019. **Identificada irregularidade no período → crédito deve ser negado.**
- **Alternativas de regularização aceitas** (saídas para destravar): **TAC** firmado com o Ministério Público, ou **laudo técnico de sensoriamento remoto** (sob responsabilidade da instituição financeira) comprovando ausência de desmatamento após 31/07/2019. (ASV e PRAD também são aceitos pelos bancos na prática — ver §4.)
- Implementação **escalonada** mantida: abril/2026 para > 4 MF; janeiro/2027 para ≤ 4 MF.

> ⚠️ **Não consegui confirmar** se a 5.303/2026 prorrogou, suavizou ou apenas detalhou os prazos da 5.268. A nota oficial fala em "equilibrar direitos fundamentais", o que sugere flexibilização em resposta à ADPF, mas o texto integral precisa ser lido. **Ação:** baixar a 5.303/2026 do site do BCB antes de fechar o corpus.

**Implicação Compadre:** o corpus RAG e o roteiro do bot devem citar a **5.303/2026** como norma vigente, não a 5.268. Regra que muda a cada ~5 meses é argumento forte para um assistente que "traduz a regra atual" — mas também é risco: o conteúdo do bot precisa de data de validade e processo de atualização.

---

## 3. O litígio no STF (ADPF 1.228/DF) — risco regulatório datado

- **Quem:** CNA (Confederação da Agricultura e Pecuária do Brasil). **Quando:** 15/04/2026. **O quê:** ADPF 1.228/DF pedindo suspensão das Res. 5.268/2025 e 5.193/2024.
- **Argumento:** a regra "**proíbe o crédito como medida presumida e antecipada de culpa**", permitindo ao produtor provar regularidade só **depois** de penalizado → viola presunção de inocência, devido processo, contraditório, ampla defesa e direito de propriedade. O PRODES **não distingue desmatamento legal de ilegal** e há **sobreposição de polígonos** (imóvel × polígono de desmate).
- **Reação do Estado:** o BCB editou a **Res. CMN 5.303/2026** "para equilibrar os direitos fundamentais em jogo" — ou seja, a 5.303 é, em parte, resposta à ADPF.

**Implicação Compadre:**
- **Risco de produto:** se o STF suspender ou o CMN recuar, o "gatilho temporal 2027" do pitch enfraquece. **Mitigação:** posicionar o valor do Compadre como "manter o CAR consistente e saber destravar a recusa" — útil **independente** de qual resolução vigora. A dor (recusa por inconsistência) persiste mesmo se a trava PRODES cair.
- **Tom:** o bot **não** deve tomar lado político nem afirmar que a regra é injusta/ilegal; deve explicar o estado atual e o caminho prático. Terreno jurídico sensível → revisão humana.

---

## 4. Como o produtor destrava a recusa — fluxo concreto (novo)

Dois casos, dois caminhos. O Compadre pode **rotear** o produtor entre eles:

**A) Polígono tecnicamente correto (houve supressão, mas autorizada/regularizável):**
apresentar ao banco a documentação comprobatória:
- **ASV** — Autorização de Supressão de Vegetação;
- **TAC** — Termo de Ajustamento de Conduta (com o MP);
- **PRAD** — Plano de Recuperação de Área Degradada;
- ou **laudo técnico** apontando inconsistência.

**B) Falso-positivo (desmate que nunca existiu — limpeza de pasto, pousio, troca de cultura, colheita de eucalipto, retirada de pomar):**
- Protocolar **contestação no Canal de Atendimento BiomasBR do INPE** (gratuito, pelo celular, resposta em até ~60 dias).
- Passo 1: criar cadastro único no **Portal INPE** (e-mail + senha, confirmar por link de ativação).
- Passo 2: anexar **laudo técnico assinado por profissional habilitado** (engenheiro agrônomo/florestal).
- **Em paralelo:** entregar ao banco/comprador a documentação que já tiver (ASV/PRAD/TAC/laudo) — muitos aceitam antes da resposta formal do INPE.

**Implicação Compadre — alto valor:** isto é um **roteiro de passos com documentos nomeados e um canal oficial** — exatamente o formato que o assistente entrega bem. Mas:
- É **alto risco jurídico** (encaminhar errado pode custar a safra) → revisão humana obrigatória + disclaimers + encaminhar para ATER/sindicato/contador.
- O bot **não emite laudo** nem assina nada; ele **explica o que é cada documento, quem emite, e para onde ir**. Escopo de tradução e encaminhamento, não de execução.

---

## 5. Inversão do ônus da prova e falsos-positivos (aprofundamento)

- **Inversão do ônus da prova:** com a regra, o produtor **regular** precisa provar que não infringiu para não perder o financiamento — antes, o banco/Estado é que precisaria provar a irregularidade. Esse é o nó jurídico da ADPF e a dor emocional real do público.
- **Falsos-positivos do PRODES** são frequentes e mundanos: limpeza de pasto, pousio, rotação de cultura, colheita de eucalipto, retirada de pomar — tudo pode ser lido como "desmatamento". O PRODES detecta **mudança de uso do solo**, não legalidade.
- **Sobreposição de polígonos:** o polígono de desmate do INPE pode encostar/sobrepor o perímetro do imóvel sem que o desmate seja daquele produtor.

**Implicação Compadre:** boa parte do público que será barrado **está em dia**. O enquadramento do bot deve ser "você pode estar certo e mesmo assim ser barrado — veja como provar", não "você fez algo errado". Isso muda o tom e reduz a vergonha/abandono.

---

## 6. Plano Safra 2026/2027 e agricultura familiar (contexto de distribuição)

- O **Plano Safra da Agricultura Familiar 2026/2027** ainda estava em consulta pública (encerrada 31/03/2026) na data da pesquisa. ⚠️ Números finais não confirmados.
- **Pronaf Regularização Fundiária** (até **R$ 30 mil/família**) financia cartório, ITBI, inventário, usucapião, **georreferenciamento, SIGEF e CAR** — MDA projeta **expansão** dessa linha em 2026/2027, integrada ao programa Terras do Brasil. → Há **dinheiro público para pagar o CAR/georreferenciamento** do pequeno; o Compadre pode informar o produtor dessa linha (parceria potencial / conteúdo de alto valor).
- **Gargalo documental:** estimativa de que **~40% dos agricultores familiares** atendidos pela Rede de Ativadores de Crédito Socioambiental **não conseguem reunir a documentação exigida**. → Confirma a dor de fundo do Compadre: o problema não é só o CAR, é o **papelório** em volta.
- **CAF (Cadastro da Agricultura Familiar)** — sua expansão/descentralização é apontada como essencial para ampliar acesso ao crédito. Possível ponto de integração/encaminhamento.

---

## 7. Implicações para o produto (síntese acionável)

1. **Trocar a âncora normativa:** corpus e roteiro citam **Res. CMN 5.303/2026** (vigente) + 5.268/2025 + 5.193/2024 + Lei 12.651/2012. Cada conteúdo regulatório do bot precisa de **data e dono de atualização** — a regra mudou 3x em 18 meses.
2. **Vender o que sobrevive ao STF:** posicionar o valor em "CAR consistente + destravar recusa", dor que persiste mesmo se a ADPF derrubar a trava PRODES. Não amarrar todo o pitch ao prazo 2027.
3. **Implementar o roteiro de destrave** (§4) como escopo Fase 2/P1: rotear falso-positivo (→ BiomasBR/INPE) vs. supressão autorizada (→ ASV/TAC/PRAD), com **revisão humana obrigatória** e encaminhamento a ATER/sindicato.
4. **Tom anti-vergonha:** "você pode estar certo e ser barrado" — reduz abandono do público que está em dia mas foi pego por falso-positivo.
5. **Conteúdo de financiamento do próprio CAR:** informar sobre **Pronaf Regularização Fundiária (R$ 30 mil)** que paga georreferenciamento/CAR — alto valor percebido, gancho de aquisição.
6. **Métrica de impacto:** ancorar em "produtores com CAR consistente e prontos para o rigor de jan/2027" — mas com plano B caso o prazo mude.
7. **Risco a monitorar:** decisão liminar na ADPF 1.228/DF e qualquer Res. CMN posterior à 5.303. Conteúdo regulatório do bot deve ter revisão trimestral.

---

## 8. Lacunas e o que confirmar (⚠️)

- ⚠️ **Texto integral da Res. CMN 5.303/2026** — confirmar se reescalona/suaviza os prazos da 5.268 e o que muda na prática para ≤ 4 MF.
- ⚠️ **Status atual da ADPF 1.228/DF** — houve liminar? Relator? (pesquisa não retornou andamento.)
- ⚠️ **Prazo de CAR ≤ 4 MF (31/12/2025)** para fins de PRA — verificar se houve MP de prorrogação após o vencimento.
- ⚠️ **Plano Safra 2026/2027** — números e condicionantes finais (estava em consulta).
- ⚠️ **Mapa estado-a-estado do PRA** — só confirmados pontualmente: AL (opera desde 2023), SP (2 TCs em 2023), MG (118 TCs até dez/2023), **RS (Decreto 58.804/2026 — regulamentou só em 2026)**. Maioria dos estados sem dado consolidado aqui.
- ⚠️ Confirmar se há **isenção/regime mais brando de PRODES** específico para agricultura familiar além do escalonamento de data (a anistia do Código Florestal para ≤ 4 MF é sobre RL, não sobre a trava PRODES).

---

## Fontes

- Aprosoja MT — PRODES como critério de crédito (Res. 5.268/2025): https://aprosoja.com.br/comunicacao/release/prodes-passa-a-ser-criterio-para-acesso-ao-credito-rural-apos-a-resolucao-do-cmn-no-52682025
- Enebelo Advogados — análise da Res. 5.268/2025: https://www.enebeloadvogados.com.br/credito-rural-monitoramento-satelite-resolucao-5268-2025/
- Sistema FAEP — PDF da Resolução CMN 5.268 de 18/12/2025: https://www.sistemafaep.org.br/wp-content/uploads/2025/12/Resolucao-CMN-1-1.pdf
- Min. Fazenda — Nota do CMN sobre ajuste de impedimentos socioambientais (Res. 5.303/2026), maio/2026: https://www.gov.br/fazenda/pt-br/canais_atendimento/imprensa/notas-do-cmn/2026/maio/cmn-ajusta-normas-referentes-a-impedimentos-sociais-ambientais-e-climaticos-para-a-concessao-de-credito-rural
- Min. Agricultura — mesma nota (Res. 5.303/2026): https://www.gov.br/agricultura/pt-br/assuntos/noticias/cmn-ajusta-normas-referentes-a-impedimentos-sociais-ambientais-e-climaticos-para-a-concessao-de-credito-rural
- Pinheiro Guimarães — BC altera regras de embargos ambientais no crédito rural: https://www.pinheiroguimaraes.com.br/banco-central-do-brasil-altera-as-exigencias-socioambientais-para-a-concessao-de-credito-rural/
- CNA Brasil — CNA vai ao Supremo (ADPF 1.228/DF): https://cnabrasil.org.br/noticias/cna-vai-ao-supremo-contra-resolucoes-que-tiram-direitos-dos-produtores
- CNN Brasil — CNA aciona STF contra uso de dados de desmatamento em crédito: https://www.cnnbrasil.com.br/agro/cna-aciona-stf-contra-uso-de-dados-de-desmatamento-em-credito-rural/
- Conjur — Regulação ESG, crédito rural e desdobramentos no STF e Legislativo (23/05/2026): https://www.conjur.com.br/2026-mai-23/regulacao-esg-credito-rural-e-os-novos-desdobramentos-stf-e-no-legislativo/
- Conjur — Regra do CMN acende alerta no campo (04/05/2026): https://www.conjur.com.br/2026-mai-04/credito-rural-nova-regra-acende-alerta-no-campo/
- CNA Brasil — Acesso ao crédito rural por restrição PRODES (passo a passo): https://cnabrasil.org.br/publicacoes/acesso-ao-credito-rural-por-restricao-prodes
- Sistema FAEB — Crédito rural e PRODES: como se prevenir contra bloqueios indevidos: https://sistemafaeb.org.br/credito-rural-e-prodes-como-se-prevenir-contra-bloqueios-indevidos/
- Agência FPA — O que são os falsos-positivos do PRODES (07/05/2026): https://agencia.fpagropecuaria.org.br/2026/05/07/o-que-sao-os-falsos-positivos-do-prodes-e-como-eles-impactam-o-produtor-rural/
- CompreRural — Alerta de satélite passa a bloquear crédito e inverte ônus da prova: https://www.comprerural.com/alerta-de-satelite-passa-a-bloquear-credito-rural-e-inverte-onus-da-prova-no-campo/
- Comunidade Ambiental — Como resolver e tirar um alerta do PRODES: https://comunidadeambiental.com.br/artigo/como-resolver-e-tirar-um-alerta-do-prodes/
- Observatório do Código Florestal — status de adesão ao PRA nos estados: https://observatorioflorestal.org.br/bvrio-atualiza-status-de-adesao-ao-programa-de-regularizacao-ambiental-pra-nos-estados/
- Câmara dos Deputados — MP que muda prazo de adesão ao PRA: https://www.camara.leg.br/noticias/949847-camara-aprova-mp-que-muda-prazo-de-adesao-ao-programa-de-regularizacao-ambiental
- Leiagora — RS regulamenta PRA (Decreto 58.804/2026): https://leiagora.com.br/rio-grande-do-sul-regulamenta-programa-de-regularizacao-ambiental-e-cria-novas-oportunidades-para-produtores-rurais/
- Broto Notícias — MDA prevê expansão do Pronaf Regularização Fundiária (paga CAR/cartório) no Plano Safra 2026/2027: https://noticias.broto.com.br/gestao/pronaf-regularizacao-fundiaria-plano-safra-2026-2027
- Blog do Pedlowski — entraves de comunidades tradicionais no Plano Safra 2026/2027: https://blogdopedlowski.com/2026/04/22/plano-safra-2026-2027-entraves-dificultam-o-acesso-de-povos-e-comunidades-tradicionais-ao-credito-rural/
- Portal do Cooperativismo Financeiro — o que muda na fiscalização/impedimentos do crédito rural em 2026: https://cooperativismodecredito.coop.br/2026/03/o-que-muda-na-fiscalizacao-e-nos-impedimentos-do-credito-rural-em-2026/
- Jusbrasil — Resoluções CMN 5.193 e 5.268 e o impacto da regularização ambiental no crédito: https://www.jusbrasil.com.br/artigos/resolucoes-cmn-5193-e-5268-o-impacto-da-regularizacao-ambiental-no-acesso-ao-credito-rural/5624018143
