# Respostas aos questionamentos da mentoria, Eloi Chad

> As cinco perguntas que o Eloi levantou, com a resposta da equipe e as fontes que a sustentam. Complementa o §10 de `ideacao-completa.md`.

---

## 1. "Não vai engessar ainda mais a aprovação da analista?"

É o contrário. O Gabarito tira da mesa os casos fáceis (a maioria, que não mudou) e entrega os que mudaram já com a prova montada. Engessar seria mandar a analista olhar 8,1 milhões de CARs na ordem de chegada. Priorização por risco com laudo automático já é o padrão do próprio governo, e multiplica a vazão.

- O gargalo é a análise, não o cadastro: *"a etapa de análise de dados continua sendo o principal gargalo de implementação da lei"* (Cristina Leme Lopes, CPI/PUC-Rio, Radiografia do CAR). https://www.climatepolicyinitiative.org/pt-br/
- A escala torna "olhar tudo" inviável: dos ~8,1 milhões de CARs, só 5,9% têm análise concluída (era 2,3% em 2024), ou seja ~94% seguem sem conclusão (boletim SFB).
- Automação como aceleradora: a Análise Dinamizada do SICAR roda até 66 mil cadastros/dia e já passou de 1 milhão de CARs analisados em 9 estados. https://www.gov.br/florestal/pt-br/assuntos/noticias/2026/junho/sfb-apoia-estados-na-analise-de-mais-de-um-milhao-de-cadastros-rurais
- Onde a triagem automática foi adotada, ela aumentou a produtividade da equipe: Alagoas multiplicou as análises por mais de treze vezes e o Rio de Janeiro dobrou (CPI/PUC-Rio).
- O MapBiomas Alerta já gera laudo automático por imóvel, "com efeito semelhante à foto da placa do veículo em auto de infração": a máquina entrega a evidência pronta, e o humano decide. https://alerta.mapbiomas.org/perguntas-frequentes

Quanto exatamente o Gabarito encurta o tempo da analista é algo que vamos medir no piloto, não temos esse número fechado.

## 2. "Qual a previsibilidade legal para adoção? É viável juridicamente?"

Não pedimos lei nova; a base já está montada. O Gabarito não decide: informa um score rastreável que a analista lê, pondera e assina.

- O Código Florestal (Lei 12.651/2012, art. 29) cria o CAR como registro público obrigatório e remete a análise ao regulamento. O dever e o procedimento de análise estão no Decreto 7.830/2012 (arts. 6º a 8º) e na IN MMA nº 2/2014, que atribuem a análise dos dados declarados ao órgão estadual, que pode pedir retificação e fazer vistoria. É o ponto onde o score por talhão entra, como insumo, não como decisão. https://www.car.gov.br/leis/IN_CAR.pdf
- A motivação de um ato administrativo pode consistir em declaração de concordância com pareceres, laudos e relatórios técnicos, que passam a integrar o ato (Lei 9.784/1999, art. 50, §1º). É aqui que o score auditável tem assento: um laudo técnico que a analista incorpora à decisão dela. https://www.planalto.gov.br/ccivil_03/leis/l9784.htm
- Imagem de satélite com laudo técnico assinado é documento público com presunção relativa de veracidade, que inverte o ônus da prova (CPC, art. 405). O uso já é consolidado: o IBAMA pratica "embargo remoto" por satélite, o STJ admite a prova (2ª Turma, Rel. Min. Herman Benjamin, 2019) e o CNMP orienta o uso de sensoriamento remoto (Recomendação 104/2023). A imagem sozinha vale menos; o par imagem mais laudo é o que sustenta. https://www.cnmp.mp.br/portal/todas-as-noticias/16829
- O score não cai no gatilho de "decisão unicamente automatizada" da LGPD (art. 20), porque a decisão final é humana e substantiva. A revisão por uma pessoa é, inclusive, escolha de design nossa, a lei nem a exige. A explicabilidade que entregamos atende também à transparência (art. 6º, VI) e ao regime de tratamento de dados pelo poder público (art. 23).
- O próprio SFB já opera no modelo "automatiza, humano valida, com trilha" na Análise Dinamizada. O Gabarito segue esse desenho e acrescenta frescor sub-anual e confiança por talhão. O CAR foi declarado o primeiro Bem Público Digital do Brasil na COP30 (nov/2025), o que reforça o caminho aberto.

A viabilidade vem da convergência dessas normas, não de um dispositivo que diga "use score no CAR". A presunção é relativa (o produtor pode contestar), e é por isso que a trilha auditável importa. O cuidado a tomar: se a analista virar carimbo, homologando em massa sem examinar, aí sim a decisão pode ser tratada como automatizada.

## 3. "Um comparativo de tempo que seria ganho."

| Métrica | Hoje | Com o Gabarito |
|---|---|---|
| Triagem automatizada | até 66 mil/dia | não competimos, entramos no que mudou |
| Análise concluída (nacional) | 5,9% (era 2,3% em 2024) | atacar os ~94% que faltam |
| Frescor da imagem | base licitada envelhece (snapshot) | Sentinel-2 revisita a cada 5 dias |
| Alerta de mudança | PRODES anual / DETER diário | leva à analista só o que mudou |
| Passivo histórico (manual) | 0,4% regularizado em 10 anos | mostra a profundidade do problema |

- Sentinel-2 revisita o mesmo ponto a cada 5 dias (dois satélites). https://sentinels.copernicus.eu/web/success-stories/-/sentinel-2-images-the-globe-every-5-days
- DETER traz alertas quase diários; o PRODES é a taxa anual consolidada. http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/deter/deter

Não existe um número público de "quanto se ganha em tempo priorizando por risco", então preferimos não cravar; é justamente o que o backtest do piloto vai medir. E como o MapBiomas Alerta já prioriza por imóvel, o que vendemos é frescor sub-anual, classes do Código Florestal e decisão assinável, não "priorizamos melhor".

## 4. "Como seria o piloto na prática?"

Seria um backtest sobre 1 a 3 municípios do sudoeste goiano (Rio Verde, Jataí, Mineiros, Cristalina), em Goiás, porque a dor é documentada e a SEMAD tem autonomia para integrar o artefato.

- Goiás chegou a 100% dos imóveis cadastrados (150.592 CARs), mas o cadastro é a parte fácil; a análise é o funil. No anúncio desse marco, só cerca de 27.496 estavam analisados. Esse número é de alguns anos atrás e já cresceu; usamos como ilustração do funil, não como percentual atual, e vamos confirmar com a SEMAD no acesso ao t0. https://goias.gov.br/meioambiente/goias-atinge-100-de-imoveis-rurais-cadastrados-no-car/
- A SEMAD lançou sistema próprio (SIGCAR, 2025), o que dá autonomia para integrar o Gabarito sem depender do federal. https://goias.gov.br/meioambiente/semad-deixa-sistema-nacional-do-car-e-lanca-plataforma-propria-mais-funcional/
- Cerrado tem estação seca de céu limpo, então o Sentinel-2 óptico funciona sem precisar de radar (que na Amazônia é necessário pela nuvem).

O fluxo: t0 (base da SEMAD ou MapBiomas Coleção 10) → mudança via Sentinel-2 e PRODES/DETER → delta com score por talhão → validação contra os polígonos PRODES/DETER já publicados, medindo recall, kappa e falso-negativo. Essas métricas são as metas do backtest, ainda a medir.

## 5. "Não seria custoso demais a comparação das imagens?"

A imagem é gratuita, o processamento de um piloto cabe no nível gratuito, e a gente não reprocessa o estado inteiro, só os cerca de 0,4% que mudam por ano. O caro seria licitar o remapeamento inteiro, e é exatamente isso que o Gabarito evita.

- Sentinel-2 é gratuito e aberto (política do Copernicus/ESA); 10 m nas bandas que importam para o NDVI, revisita de 5 dias. https://www.esa.int/Applications/Observing_the_Earth/Copernicus
- O Copernicus Data Space Ecosystem dá um nível gratuito de 40 mil unidades de processamento e 10 mil créditos openEO por mês, suficiente para um piloto. https://documentation.dataspace.copernicus.eu/Quotas.html
- A base de referência também já é processada de graça (MapBiomas mapeia o Brasil inteiro, anual). https://brasil.mapbiomas.org/
- O delta é pequeno: o desmatamento do Cerrado em 2024 foi de 8.174 km² (INPE/PRODES) sobre um bioma de ~2 milhões de km², cerca de 0,4% por ano. Remapear só o delta é processar 0,4% da área, não 100%.

---

### O que a equipe ajustou depois da conversa
1. Deixamos explícito, no §10 da ideação, que a decisão legal continua da analista (responde à dúvida do engessamento).
2. Acertamos a base jurídica: a motivação se apoia no art. 50, §1º da Lei 9.784/1999 (laudo técnico incorporado à decisão), e o Código Florestal remete a análise ao Decreto 7.830/2012 e à IN MMA 2/2014.
3. Tratamos o ganho de tempo como meta a medir no piloto, não como resultado já obtido.
