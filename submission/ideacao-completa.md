# ENTREGA 1 — IDEAÇÃO

**Solução:** Gabarito · **Desafio 02** — Melhorar o acesso aos dados geoespaciais do CAR · haCARthon (Edital nº 158/2026)

> As respostas abaixo refletem o entendimento da equipe sobre o problema, a solução e as decisões tomadas ao longo da maratona. Ferramentas de IA foram usadas como apoio à redação e à pesquisa; o raciocínio, as escolhas de produto e os cortes de escopo são da equipe.

---

## 1. BRAINSTORM — como escolhemos a ideia

Começamos pelo **Desafio 03** (ajudar o produtor a entender a legislação do CAR) com um guia por WhatsApp, o *Compadre*. Ao estudar o domínio, percebemos que estávamos tratando um sintoma: o produtor declara errado, sim, mas isso é secundário diante de um problema mais a montante. Pivotamos, no meio da maratona, para o **Desafio 02**.

Ideias que circularam na equipe antes de travar a escolha:

- **Compadre (descartada):** guia de legislação para o produtor. Educar a entrada não resolve quem julga a entrada.
- **Detector de desmatamento (descartada):** "mais um alerta". O Brasil já tem PRODES/DETER (INPE) e o MapBiomas Alerta. Competir com isso é redundante.
- **Priorizador da fila de análise (descartada como núcleo):** durante a maratona verificamos na fonte que o **MapBiomas Alerta já prioriza por imóvel** (laudo automático, RAD-2024). Priorizar a análise *já existe* — não pode ser o nosso diferencial.
- **Gabarito (escolhida):** manter **viva** a *base de referência* — o "mapa-resposta" que o estado usa para conferir cada CAR — e entregar, junto, uma **confiança por talhão que torna a decisão assinável**.

**Por que o Gabarito venceu:** foi a única ideia que sobreviveu à pergunta "isso já existe de graça?". A camada de mudança contínua já existe (PRODES/DETER, MapBiomas, gratuitos). O que **não** existe é frescor sub-anual + tradução para as classes do Código Florestal + **confiança por talhão usada como decisão operacional, com trilha de auditoria que protege quem assina**. Aprofundando a dor, chegamos à raiz: o limitante não é detectar mudança — é produzir uma **decisão que o servidor aceite assinar**. Essa foi a virada que travou a escolha.

## 2. PROBLEMA

**O quê:** a base de referência que o estado usa para conferir cada CAR é um **snapshot pontual** — contratada por licitação não continuada, anual e em classes genéricas. Quando entra em uso, o território já mudou; e ela não distingue APP, Reserva Legal ou área consolidada do Código Florestal.

**Quem enfrenta:** a **analista ambiental do órgão estadual (OEMA)** — ela é quem assina a validação/notificação, um ato administrativo com peso jurídico. Também o **produtor rural honesto**, preso numa fila que não anda, sem regularizar (e sem o crédito que depende disso); e o **próprio CAR/SICAR**, cuja automação não escala porque a base não é confiável.

**O que acontece hoje:** a máquina já tria muito — a Análise Dinamizada do SICAR roda **até 66 mil/dia**. Mesmo assim, a conclusão nacional foi de **2,3% (2024) → 5,9% (2025)** e **~94% dos 8,1 milhões de cadastros** seguem sem conclusão. Ou seja: o gargalo **não é detecção de mudança** (isso já roda em escala) — é **uma decisão validada e defensável que alguém aceite assinar**. Sem confiar na base, a analista abandona a automação e abre imóveis à mão.

**Por que importa:** uma base de anos atrás não pode julgar um território que mudou mês passado. Enquanto a fila trava, o produtor honesto não regulariza e o desmatamento real se esconde no meio do volume. E o relógio é externo: a **EUDR** (UE) passa a exigir, a partir de **30/12/2026**, geolocalização por lote e prova de produção livre de desmatamento — o CAR é a base natural disso, mas só serve se for fresca e auditável.

## 3. SOLUÇÃO

O Gabarito é uma **base de referência viva** — um roteador auditável da análise do CAR. Três passos:

1. **Detecta o que mudou.** Cruza imagem **Sentinel-2 gratuita** (NDVI antes/depois, com co-registro e máscara de nuvem) e alertas oficiais **PRODES/DETER** sobre um **t0** aberto (base estadual ou MapBiomas Coleção 10). Aponta só o *delta* — os talhões que mudaram.
2. **Remapeia só o que mudou.** A classificação roda apenas nos talhões sinalizados, com revisão humana embutida. O vai-e-volta de meses entre estado e empresa de mapeamento vira um fluxo só.
3. **Entrega base + confiança auditável.** Sai uma base fresca em **formato aberto**, com um **score de confiança por talhão**. O score é **invisível na fila** (apenas ordena por risco) e **assinável sob demanda**: ao abrir um caso, a analista vê a **evidência datada** que o sustenta — recorte Sentinel com data, alerta, base t0, limiar e versão do score.

O score **roteia**: confiança alta e sem mudança → liberação automática com trilha de auditoria; delta ou confiança baixa → fila humana. O score é uma **heurística transparente e versionada** (concordância PRODES×DETER × magnitude da mudança × idade do dado, pesos explícitos), calibrada contra **verdade independente** (PRODES/DETER/amostra de campo) — **nunca contra a base velha** (senão mediria a própria ignorância). **Não substitui o SICAR nem tira a decisão legal da analista** — devolve a ela o direito de confiar no mapa e a prova para assinar.

## 4. PÚBLICO-ALVO

**Primário: a analista ambiental da OEMA** (persona *Luana*). É ela quem assina, quem sofre com a fila e quem hoje confere no escuro. Escolhemos esse público porque a dor-raiz não é técnica, é de **decisão**: "ninguém quer assinar no escuro". Resolver para ela destrava todo o resto.

O **mesmo artefato** (delta + score por talhão) serve, com saídas diferentes, a outros dois públicos:

- **Análise Dinamizada / SICAR (SFB):** o score roteia o cruzamento automático — eleva a vazão sem relaxar conformidade.
- **Produtor rural / Responsável Técnico:** a evidência do delta, legível e **antes da notificação**, deixa o produtor corrigir a geometria (ou contestar uma notificação que é da base velha, não dele) — destravando o crédito.

A analista e o produtor **nunca pagam**: é um Bem Público Digital; o ente público sustenta.

## 5. IMPACTO

- **Para a analista:** para de conferir tudo na mão; gasta o olho só onde há risco real e **assina com segurança**, porque cada liberação carrega a prova datada do porquê.
- **Para o CAR/SICAR:** mais cadastros concluídos por liberação automática **com trilha de auditoria** — atacando diretamente os ~94% sem conclusão, sem afrouxar a conformidade.
- **Para o produtor honesto:** liberação mais rápida → regularização e crédito destravados; e o direito de contestar erro de base velha antes de ser notificado.
- **Para o órgão e o país:** o olho humano vai para onde o desmatamento realmente está; e o CAR ganha lastro fresco e auditável para a EUDR e as metas de desmatamento zero.

**Métricas que vamos medir no piloto (metas, não resultados já obtidos):** vazão da análise sobe sem aumentar o erro; **recall do delta vs DETER** (meta ≥80%); **falso-negativo visível = 0**; **kappa vs PRODES ≥0,7**; custo por cadastro atualizado (delta vs remapeamento total) cai; taxa de aprovação do produtor na 1ª/2ª tentativa sobe.

## 6. DIFERENCIAL

**Como é resolvido hoje:** o estado licita um remapeamento inteiro a cada poucos anos (caro, e já nasce velho), ou aceita a base defasada e assume o risco, ou cai na análise manual. As camadas gratuitas existentes — **MapBiomas** (anual) e **PRODES/DETER** (contínuo) — entregam mudança, e o **MapBiomas Alerta** já prioriza por imóvel.

**O que fazemos de diferente (o delta sobre o que já existe):**
- **Confiança por talhão como decisão** (liberar automático × humano), não triagem por imóvel;
- **Trilha de auditoria assinável** — a evidência datada que protege quem assina;
- **Frescor sub-anual** e **tradução para classes do Código Florestal** (roadmap);
- **Score auditável e versionado**, calibrado contra verdade **independente**, com revisão humana onde cai.

Honestidade que sustenta o diferencial: priorizar a análise *não* é o fosso (já existe). O fosso é a **decisão assinável por talhão**. Não nos posicionamos como "mais uma plataforma de geoprocessamento" — somos **a base de referência viva do CAR**.

## 7. VIABILIDADE

- **Legal:** a decisão permanece da analista (informamos, não decidimos), o que evita nulidade por "caixa-preta". O score é transparente e rastreável — defensável em um ato administrativo.
- **Tecnológica:** todas as peças já existem e são abertas. Imagem **Sentinel-2 gratuita** (Copernicus), alertas **PRODES/DETER** em Shapefile/WFS (TerraBrasilis), *change detection* em bibliotecas abertas (GDAL/rasterio/scikit-image, openEO/STAC). Roda em **QGIS/PostGIS** (sem licença cara); o processamento pesado é cloud-assistido via openEO no Copernicus (CDSE). Saída em **shapefile/KML em SIRGAS 2000**, que o SICAR ingere. Risco técnico conhecido (co-registro/deslocamento gerando falso-positivo) é tratado penalizando borda no score.
- **Operacional:** o piloto é um recorte de município, não o país. Plano B para o dado: se a base estadual não estiver acessível a tempo, usamos MapBiomas Coleção 10 + consulta.car. O risco real não é construir — é **sustentação**: precisa de um dono do processo contínuo (ver §9 e Próximos Passos).

## 8. IMPLEMENTAÇÃO

Com recursos disponíveis, estimamos **~6 a 9 meses** até um piloto operacional defensável:

1. **Mês 1 — Acesso e t0.** Recorte da base de referência de uma OEMA (piloto = **SEMAD-GO**, Cerrado/céu limpo) + ingestão PRODES/DETER. → *verificação: t0 carregado e alertas cruzando.*
2. **Meses 2–3 — Detecção de mudança.** Pipeline Sentinel-2 (co-registro + máscara de nuvem + NDVI) sobre o t0, gerando os talhões-delta. → *verificação: delta vs DETER num recorte conhecido.*
3. **Meses 3–4 — Score auditável.** Heurística versionada + painel de evidência por talhão; **backtest de antecipação** calibrado contra verdade independente. → *verificação: kappa ≥0,7, falso-negativo visível = 0.*
4. **Meses 4–6 — Fila + handoff.** Fila por risco para a analista e ponto de corte automático × humano validado com uma OEMA real. → *verificação: vazão sobe sem aumentar erro.*
5. **Meses 6–9 — Sustentação e escala.** Classes do Código Florestal (roadmap), arranjo de dono + custeio, e preparação para Amazônia com Sentinel-1 (SAR) na Fase 2.

> Não há protótipo executado nem backtest rodado ainda — os números acima são **metas a medir no piloto**, não resultados já obtidos.

## 9. CÓDIGO ABERTO (Bem Público Digital)

O Gabarito nasce como **open source e agnóstico de plataforma** (sem dependência de Google Earth Engine ou ArcGIS), em linha com o CAR como DPG. Como se compartilha, adapta e reutiliza:

- **Repositório aberto** com o pipeline (libs abertas) + a heurística do score **versionada e documentada** — qualquer estado, organização ou país roda no próprio QGIS/PostGIS.
- **Fontes de dados abertas e universais:** Sentinel-2 (Copernicus, global) e o padrão PRODES/DETER — substituíveis por equivalentes locais em outros países.
- **Adaptável por bioma/jurisdição:** os limiares de mudança e o dicionário de classes (Código Florestal → classes locais) são parametrizáveis; outro estado troca o t0 e os pesos, não o motor.
- **Sustentação institucional:** desenho proposto = **SFB fornece o score como serviço + consórcio ABEMA** (central na infra, federado na decisão), com **OPEX via Fundo Amazônia/BNDES** e editais climáticos. Acompanha uma **minuta de Nota Técnica** que reparte a responsabilidade ("score acima de X dispensa, abaixo vai ao humano") — para a governança ser demonstrável, não promessa.

A submissão é **dupla: artefato técnico + modelo de governança** (com o dono nomeado), porque um DPG sem dono do processo contínuo morre no fim do piloto.

## 10. MENTORIA E FEEDBACK DA SOLUÇÃO

**Nome do(a) mentor(a):** Eloi Chad

**Resumo do feedback recebido:** o mentor avaliou a solução como **criativa e autêntica** e levantou cinco questionamentos:
1. A solução não corre o risco de **engessar ainda mais** o processo de aprovação da analista?
2. Qual a **previsibilidade legal** para a adoção — é possível e viável juridicamente?
3. Falta um **comparativo de tempo** ganho com a solução.
4. **Como seria o piloto** na prática?
5. A **comparação das imagens** de satélite não seria custosa demais?

**O que a equipe decidiu ajustar/melhorar/repensar:** revisar e validar cada ponto, refletindo as respostas nos campos da ideação:
1. **Engessamento:** reforçamos que o score é **invisível na fila** (apenas ordena por risco) e que a decisão legal **continua da analista** — o Gabarito remove trabalho manual nos casos fáceis em vez de adicionar etapa (§3 e §4); deixamos esse ponto explícito.
2. **Previsibilidade legal:** tratada em §7 (Viabilidade legal) — score transparente, versionado e rastreável evita nulidade por "caixa-preta"; e na sustentação (§9) propomos uma **minuta de Nota Técnica** que reparte a responsabilidade e dá previsibilidade ao ato administrativo.
3. **Comparativo de tempo:** assumido como métrica-alvo a medir no piloto (§5/§8) — vazão da análise sobe sem aumentar o erro; o **backtest de antecipação** mede os "dias de antecipação" por talhão. Reforçamos que são metas, não resultados já obtidos.
4. **Piloto:** detalhamos em §8 — recorte de município na **SEMAD-GO** (Cerrado/céu limpo), com t0 estadual + backtest calibrado contra verdade independente (PRODES/DETER), e plano B de dado (MapBiomas Col.10 + consulta.car).
5. **Custo das imagens:** esclarecemos que a imagem **Sentinel-2 é gratuita** (Copernicus) e que **só remapeamos os talhões que mudaram** (não o estado inteiro) — exatamente o que torna o custo viável (§3 e §7); o processamento pesado é cloud-assistido via openEO/CDSE, fora do desktop da OEMA.

> Respaldo com dados concretos e fontes para cada uma das 5 perguntas do mentor: ver `respostas-mentoria-eloi.md`.
