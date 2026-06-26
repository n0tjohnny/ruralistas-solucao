# 02 — CAR Pré-Preenchido e APIs/Infra de Governo (exploração para o Compadre)

**Data:** 2026-06-26 · **Método:** WebSearch + fetch das páginas oficiais (gov.br/MGI, Conecta, consulta.car.gov.br) · **Escopo:** o que o Compadre pode *usar* e por cima de que deve *surfar*. Complementa o report 05 (viabilidade técnica) e o 07 (pesquisa aprofundada).

> ⚠️ = não confirmado / fonte secundária ou indireta.

---

## TL;DR — os 3 achados que mudam a estratégia técnica

1. **As APIs do CAR no Conecta GOV.BR existem, são gratuitas e bem documentadas — mas são fechadas para a iniciativa privada.** A ficha oficial da *Consulta SICAR CPF/CNPJ* diz literalmente em "Oferta para a Iniciativa Privada: **Não possui**". O acesso é só para órgãos públicos federais/estaduais/municipais via adesão ao Conecta. **Logo, o Compadre NÃO pode puxar o CAR do produtor por API direta** — só via parceria/convênio com um órgão público habilitado (ex.: a cooperativa/EMATER estadual como ponte, ou adesão institucional).
2. **O CAR Pré-Preenchido (MGI/Dataprev, COP30/nov-2025) reduz drasticamente a fricção de *entrada de dados*** — o governo já preenche polígono, titularidade e endereço puxando SNCR/Sigef/Incra/Agri Familiar. Isso **confirma** a tese de "não recriar data-entry": esse terreno está sendo comoditizado pelo próprio governo.
3. **O valor defensável do Compadre migra para a camada que o governo NÃO entrega: tradução em linguagem de gente, confiança no canal (WhatsApp), e entender a recusa de crédito.** O pré-preenchido entrega o *dado certo*; ele não explica o que o dado significa nem o que fazer quando há pendência. Esse é o fosso.

---

## 1. CAR Pré-Preenchido (MGI + Dataprev, lançado na COP30, nov/2025)

**O que é:** módulo do SICAR no modelo da *declaração pré-preenchida do IR* — um "formulário inteligente" que já chega preenchido com dados geoespaciais, de localização e de titularidade vindos de bases oficiais. Acesso pelo **GOV.BR**.

**O que pré-preenche / de onde puxa:**
- **SNCR** (Sistema Nacional de Cadastro Rural) — dados cadastrais e de endereço.
- **Sigef** (Sistema de Gestão Fundiária) — quando há georreferenciamento, **sugere o polígono** do imóvel.
- **Incra** — documentação e parcelas.
- **Cadastro da Agricultura Familiar** — agregado na carteira "Meu Imóvel Rural".
- Faz **validação automática** e tem interface redesenhada.

**"Meu Imóvel Rural":** carteira digital que reúne CAR + SNCR + Sigef + Cadastro da Agricultura Familiar num só lugar.

**Cobertura/disponibilidade:** disponível para o **Distrito Federal + 15 estados** que usam o SICAR (federal). ⚠️ os estados com SICAR próprio (ex.: SP, alguns outros) ficam fora desse módulo inicial. Objetivo declarado: reduzir o tempo de registro e retificação (hoje centenas de milhares de solicitações/ano) e diminuir erro de preenchimento.

**Leitura para o Compadre:** isto **esvazia o pitch de "te ajudo a preencher o formulário"**. O produtor que chega no GOV.BR já encontra os campos preenchidos. O que ele NÃO tem é: alguém que (a) explique o que cada campo quer dizer, (b) diga se o polígono sugerido está certo, (c) o leve até lá pelo WhatsApp sem ele ter que navegar no gov.br sozinho.

Fontes: [MGI — CAR Pré-Preenchido (nov/2025)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/mgi-lanca-cadastro-ambiental-rural-pre-preenchido-direcionado-a-produtores-e-proprietarios-de-imoveis-rurais) · [IRIB — lançado na COP30](https://www.irib.org.br/noticias/detalhes/car-pre-preenchido-e-lancado-pelo-mgi-na-cop30) · [Geocracia — CAR como Bem Público Digital](https://geocracia.com/na-cop30-governo-apresenta-car-como-bem-publico-digital-e-cadastro-pre-preenchido/)

---

## 2. Conecta GOV.BR — APIs do CAR (integração mai/2026)

Em **maio/2026** o MGI integrou as APIs do SICAR ao **Conecta GOV.BR**. APIs do catálogo:

| API | Função | Status |
|---|---|---|
| **Consulta SICAR CPF/CNPJ** | Lista imóveis rurais vinculados a um CPF/CNPJ | Disponível |
| **SICAR Demonstrativo** | Informações ambientais declaradas do imóvel | Disponível |
| **SICAR Tema** | Camadas geoespaciais (análise/monitoramento) | Disponível |
| **SICAR Imóvel** | Dados do imóvel por código identificador | Disponível |
| **SICAR Documento Imóvel** | Documentos associados ao imóvel | ⚠️ Em desenvolvimento |

**Consulta SICAR CPF/CNPJ — contrato (oficial):**
- Entrada: `cpfCnpj`.
- Saída: `identificadorImovel`, `codigoImovel`, `indicadorAtivo` (TRUE=ativa / FALSE=inativa).
- Documentação técnica/metadados: [Catálogo Nacional de Dados — metadados CAR](https://dados.gov.br/dados/conjuntos-dados/metadados-dados-car).
- **API de teste com dados fictícios (Dataprev):** https://docs.dataprev.gov.br/docs/api/api-sicar-cpfcnpj/dados-ficticios-api-de-teste/ — útil para um protótipo/spike sem credencial de produção.

**Autenticação / quem pode acessar:**
- Apenas **órgãos públicos** (federais/estaduais/municipais) via adesão ao Conecta ("Quero acessar as APIs do Conecta").
- **Iniciativa privada: "Não possui"** (campo explícito na ficha). Não há acesso público irrestrito para devs privados.
- A finalidade declarada é interoperabilidade entre sistemas de governo: "órgãos públicos podem consultar dados do SICAR automaticamente, sem que o cidadão reenvie documentos".

**Implicação dura para o Compadre (privado):**
- **Não dá para integrar essas APIs diretamente hoje.** Três saídas possíveis, em ordem de viabilidade indie:
  1. **Não integrar — o produtor traz o dado.** O Compadre orienta o produtor a abrir o pré-preenchido/Consulta Pública e *ler de volta* o que aparece (o produtor é o "portador" do próprio dado, sem barreira de API). Mais lazy, zero burocracia, alinhado a LGPD.
  2. **Parceria institucional** (cooperativa/EMATER/prefeitura como órgão aderente) — habilita consumo via Conecta, mas é um convênio pesado para um MVP. Guardar para fase de escala.
  3. **Dados públicos abertos** (§4) para enriquecer/validar sem precisar do CPF.

Fontes: [MGI — Integração CAR ao Conecta (mai/2026)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/maio/governo-do-brasil-integra-dados-do-cadastro-ambiental-rural-ao-conecta-gov.br) · [Conecta — ficha Consulta SICAR CPF/CNPJ](https://www.gov.br/conecta/catalogo/apis/consulta-sicar-cpf-cnpj) · [Catálogo de APIs do Conecta](https://www.gov.br/conecta/catalogo/)

---

## 3. consulta.car.gov.br — Consulta de Dados Públicos do CAR (nova plataforma, mai/2026)

Lançada em **07/05/2026** pelo MGI; substitui/moderniza a consulta pública. O que expõe (sem login, transparência ativa):
- **Dashboard de Dados do CAR (BI):** estatísticas consolidadas — filtros por **UF, município, perfil do imóvel, categoria ambiental** etc.
- **Download de dados filtrados:** arquivos **geoespaciais** com as informações ambientais declaradas, com filtro até **nível municipal** (e a consulta pública clássica permite até o imóvel individual por nº de CAR).
- Roadmap 2026: mais filtros, cruzamento geoespacial, metadados.

**Para o Compadre:** fonte pública e legítima para (a) **validar status/números** por município, (b) escolher município-piloto, (c) ⚠️ *eventualmente* localizar um imóvel por nº de CAR para conferência — mas **isto é dado agregado/declarado, não substitui o "meus imóveis por CPF"** que só a API fechada entrega. Bom para inteligência de mercado e validação; ruim como fonte de fluxo individual automatizado.

Fontes: [MGI — Nova plataforma de consulta pública (mai/2026)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/maio/mgi-lanca-nova-plataforma-de-consulta-a-dados-publicos-do-car) · [consulta.car.gov.br](https://consulta.car.gov.br/) · [Consulta Pública clássica (mapa)](https://consultapublica.car.gov.br/publico/imoveis/index)

---

## 4. Datasets/serviços abertos do SICAR úteis a um assistente

| Recurso | O que serve | URL |
|---|---|---|
| **Download público de shapefiles por município** | Polígonos de imóveis, APP, Reserva Legal, hidrografia, uso do solo | https://www.car.gov.br/publico/municipios/downloads |
| **GeoServer WMS do SICAR** | Camadas geoespaciais para mapa/visualização | https://geoserver.car.gov.br/geoserver/sicar/wms |
| **Web service por nº de CAR** ⚠️ | Baixa .zip com shapefile do imóvel a partir do código CAR | (via módulo de consulta pública) |
| **Portal Dados Abertos — dataset CAR** | Metadados, base para validar números | https://dados.gov.br/dataset/cadastro-ambiental-rural1 |
| **Base dos Dados — CAR** | Dataset tratado para query (BigQuery/SQL) | https://basedosdados.org/dataset/6b687e32-32bb-4dd6-ac8b-7dfa011ac619 |
| **Automação download SICAR (GitHub)** ⚠️ | Lib Python p/ baixar shapefiles (referência de eng., não oficial) | https://github.com/joaokeller/Automacao_Download_SICAR |

Esses são **públicos e abertos** — utilizáveis sem convênio. Servem para corpus/validação e mapa, não para identificar "os imóveis do CPF do produtor".

---

## 5. Implicação estratégica: surfar por cima do pré-preenchido — validado, com ressalva

**A tese do report 07 ("não recriar entrada de dados, ser a camada de tradução por cima do pré-preenchido") está CORRETA e agora tem evidência mais forte** — mas precisa de uma correção factual importante:

- ✅ **Confirmado:** o governo comoditizou o data-entry (pré-preenchido) e a interoperabilidade (Conecta). Construir um formulário concorrente seria reinventar o que o Estado já dá de graça → desperdício e obsolescência garantida.
- ⚠️ **Ressalva que muda o desenho do MVP:** "surfar por cima" **não significa integração técnica via API** — esse caminho está *bloqueado para privados*. Significa **surfar por cima em UX/linguagem**: o Compadre é o intérprete humano-no-WhatsApp que pega o produtor, o leva até o pré-preenchido/consulta pública, **lê com ele** o que apareceu, traduz cada campo, sinaliza o que conferir e o que fazer com pendência (incl. recusa de crédito — report 07 §1.2). O **dado continua passando pela mão do produtor** (ele é o portador), o que é mais barato, mais defensável e *limpo de LGPD*.
- **Onde isso aperta o PRD:** o não-objetivo "não recriar data-entry" deve vir acompanhado de um **não-objetivo técnico explícito**: "não depender de integração com APIs do Conecta no MVP (acesso é público-only); o produtor traz/lê o próprio dado". Integração via convênio institucional fica como item de fase de escala, não de MVP.

**Contestação honesta da tese:** se o pré-preenchido + GOV.BR ficarem *tão* bons e acessíveis que o produtor pequeno consiga sozinho, o Compadre perde razão de existir. O contra-argumento (sólido): o gargalo do pequeno produtor nunca foi o formulário — é **letramento digital, confiança e medo de errar** (reports 05/07: Amazônia/Caatinga, baixa escolaridade, ATER frágil). O pré-preenchido não resolve isso; resolve o problema de quem *já sabia* mexer no sistema. O fosso do Compadre é exatamente a população que o pré-preenchido não alcança.

---

## Fontes
- [MGI — CAR Pré-Preenchido (nov/2025)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/novembro/mgi-lanca-cadastro-ambiental-rural-pre-preenchido-direcionado-a-produtores-e-proprietarios-de-imoveis-rurais)
- [IRIB — CAR Pré-Preenchido na COP30](https://www.irib.org.br/noticias/detalhes/car-pre-preenchido-e-lancado-pelo-mgi-na-cop30)
- [Geocracia — CAR como Bem Público Digital](https://geocracia.com/na-cop30-governo-apresenta-car-como-bem-publico-digital-e-cadastro-pre-preenchido/)
- [MGI — Integração CAR ao Conecta GOV.BR (mai/2026)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/maio/governo-do-brasil-integra-dados-do-cadastro-ambiental-rural-ao-conecta-gov.br)
- [Conecta — ficha Consulta SICAR CPF/CNPJ](https://www.gov.br/conecta/catalogo/apis/consulta-sicar-cpf-cnpj)
- [Catálogo de APIs do Conecta GOV.BR](https://www.gov.br/conecta/catalogo/)
- [Dataprev — API de teste (dados fictícios) Consulta SICAR CPF/CNPJ](https://docs.dataprev.gov.br/docs/api/api-sicar-cpfcnpj/dados-ficticios-api-de-teste/)
- [Catálogo Nacional de Dados — metadados CAR](https://dados.gov.br/dados/conjuntos-dados/metadados-dados-car)
- [MGI — Nova plataforma consulta pública do CAR (mai/2026)](https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/maio/mgi-lanca-nova-plataforma-de-consulta-a-dados-publicos-do-car)
- [consulta.car.gov.br](https://consulta.car.gov.br/)
- [Consulta Pública clássica (mapa) — SICAR](https://consultapublica.car.gov.br/publico/imoveis/index)
- [Portal Dados Abertos — Dataset CAR](https://dados.gov.br/dataset/cadastro-ambiental-rural1)
- [Base dos Dados — CAR](https://basedosdados.org/dataset/6b687e32-32bb-4dd6-ac8b-7dfa011ac619)
- [Download público de shapefiles por município — SICAR](https://www.car.gov.br/publico/municipios/downloads)
