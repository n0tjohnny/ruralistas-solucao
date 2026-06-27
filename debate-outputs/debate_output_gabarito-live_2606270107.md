# Debate AO VIVO (Rodada 3) — Gabarito · Desafio 02

**Data:** 2026-06-27 (America/Sao_Paulo) · Debate ao vivo com equipe de agentes. Continuação de `debate_output_gabarito-2026-update_2606270102.md`.

## Debate Topic
Com o produto já reposicionado (v2: "frescor + confiança por talhão" sobre a análise dinamizada que já roda em 9 estados), **as questões em aberto que ainda podem decidir vitória ou derrota no haCARthon** — somos produto ou feature? mirar adoção pelo SFB? o ângulo é nicho demais para a banca cross-desafio? e o foco das próximas 48h.

## Material Summary
Estado do produto (v2, pós-pesquisa 2026): **Gabarito = camada de frescor + confiança por talhão** da base de referência do CAR — cruza MapBiomas Col.10/base estadual (o que é) com PRODES/DETER (o que mudou) e diz, por talhão, onde a análise dinamizada pode confiar/liberar e onde precisa de humano.
Fatos 2026: análise dinamizada já roda em **9 estados** (AL, RJ, MG, PR, CE, PB, PE, PI, AP), **>1 milhão de CARs analisados** (SFB, jun/2026); **MapBiomas Coleção 10** (anual, 10 m, aberto); **RER = CAR** na DPGA; **PRODES/DETER** abertos (GeoPackage, TerraBrasilis). Entregáveis: ideação + protótipo (≤2 min, mockup, sem código) + pitch (≤3 min, áudio humano). Prazo 28/06 23:59. **Narração IA proibida** (repo viola). Persona Luana (OEMA): fila 12k, sobreposições, 4 sistemas; ganhos: pré-validação, painel único, parecer.

Questões em aberto a debater: (OQ1) acesso ao dado real de Alagoas vs MapBiomas como plano B — enfraquece a prova? (OQ2) mirar virar módulo do SICAR/RER (adoção SFB) vs produto independente? (OQ3) "frescor+confiança" é nicho demais para a banca cross-desafio? (OQ4) somos produto ou só feature do que já existe? (OQ5) foco das 48h: 1 tela perfeita vs 3 ganhos da Luana + gate de conformidade.

## Generated Roles
1. **PM do Gabarito** — foco/escopo; produto, não feature. · 2. **Engenheira de Geoprocessamento** — viabilidade aberta, prova honesta. · 3. **Luana — Analista de OEMA** — dor real, adoção. · 4. **Estrategista de Pitch & Adoção** — vencer a banca cross-desafio. · 5. **Guardião do Edital & da Banca** — conformidade, diferenciação, ceticismo. · 6. Facilitador/Moderador (@main).

## Canonical Debate Order
1. PM do Gabarito → 2. Engenheira de Geoprocessamento → 3. Luana — Analista de OEMA → 4. Estrategista de Pitch & Adoção → 5. Guardião do Edital & da Banca → 6. Facilitador/Moderador

---

## Transcrição turno a turno

Round 1 — PM do Gabarito
Antecipo o Guardião: "vocês são só uma feature do MapBiomas + análise dinamizada." Falso. MapBiomas diz o que existe; PRODES/DETER dizem o que mudou; a análise dinamizada classifica. Nenhum deles responde a pergunta que trava a Luana: "neste talhão, posso confiar na liberação automática hoje, ou preciso de humano?" Frescor+confiança por talhão é uma DECISÃO operacional, não uma camada de dado. Isso é produto (OQ4): tem usuário (analista OEMA), job-to-be-done (priorizar fila de 12k), e métrica de valor (% de talhões liberados sem revisão sem erro). Feature não tem fila própria nem dono. OQ3 — nicho demais para a final cross-desafio? Ao contrário: é o que nos diferencia de simplificação e educação, que melhoram a entrada do CAR. Nós melhoramos a DECISÃO sobre 1 milhão de CARs já analisados. Banca premia impacto mensurável: cada 10% da fila pré-validada = milhares de pareceres economizados. Rebato quem quer empilhar features: em 48h, escopo enxuto vence. Um talhão, um veredito de confiança, um número de fila reduzida. Implicação: protótipo foca um painel, não quatro.

Round 1 — Engenheira de Geoprocessamento
Concordo: somos PRODUTO, porque a pergunta "neste talhão libero automático ou chamo humano?" é uma decisão operacional, não um overlay. Mas, PM, "um painel em 48h" não basta — sem prova, é vaporware. Imponho quatro critérios técnicos inegociáveis. Primeiro: recorte REAL de Alagoas (já dinamizado, jun/2026), não mockup. Segundo: co-registro honesto — MapBiomas Col.10 10m e PRODES/DETER têm deslocamento; mostro o erro de alinhamento, não escondo. Terceiro, e onde te corrijo: o score NÃO pode ser "modelo de acurácia" que não consigo demonstrar em ≤2min. Tem que ser HEURÍSTICA transparente e auditável — frescor (idade do t0) × concordância PRODES/DETER × classe — que o analista do SFB reproduz na mão. Acurácia prometida sem validação é exatamente o que mata credibilidade na DPGA. Quarto: confiança baixa ROTEIA para humano, explícito no painel. Implicação concreta de hoje: preciso da geometria do imóvel (polígono CAR/SICAR) para recortar APP/RL; sem ela, traduzir MapBiomas→Código Florestal é chute. Risco técnico: se eu não tiver os GeoPackages PRODES/DETER de AL baixados e co-registrados até hoje à noite, não há protótipo crível no 28/06 — só slide. Entrego score auditável, não caixa-preta.

Round 1 — Luana — Analista de OEMA
Concordo com a Eng-Geo no ponto que mais me protege: confiança baixa roteia pro humano. É isso que blinda minha assinatura — um "validado" errado vira meu problema jurídico, não do produto. Mas heurística transparente só me serve se a evidência for clicável no talhão: quero ver a imagem (MapBiomas/PRODES) e o alerta DETER que sustentam o score, ali, na hora. Score sem evidência abrível é mais um número que eu vou ter que conferir nos 4 sistemas — ou seja, não reduz nada. PM, teu "um painel, não quatro" é bonito, mas escopo enxuto demais me deixa a ver navios. Minhas três dores são fila de 12k, sobreposições e os 4 sistemas. Se o painel só me dá frescor por talhão e não trata sobreposição nem cospe parecer-rascunho, ele responde uma dor e ignora duas. Aí eu ganhei um quinto sistema pra abrir, não um a menos. O que adoto: painel único que entrega pré-validação por talhão + camada de sobreposição + template de parecer já preenchido com a evidência citada. Na prática, isso transforma meu dia: triajo a fila pelo verde-confiável, mando o vermelho pro olho humano, e fecho parecer sem trocar de tela. Sem os três juntos, fico no que já tenho.

Round 1 — Estrategista de Pitch & Adoção
A banca cross-desafio não premia arquitetura: premia uma história que ela repete depois. Por isso, PM e Luana estão os dois meio certos. PM acerta no foco; Luana acerta que cortar 2 das 3 dores mata a narrativa. A solução de pitch resolve a tensão sem trair nenhum: no slide, mostramos o painel único com as 3 camadas como MOCKUP — Luana vê as três dores endereçadas em 8 segundos. Mas a PROVA ao vivo é UMA só: um talhão real de Alagoas onde o Gabarito acende "confie aqui / não confie ali". Demonstrar três é demo; demonstrar um com profundidade é convicção. Abrimos pela Luana, não pelo dado. "Luana abre 4 sistemas e ainda assina no escuro." Aí entra o número que nos separa de toda mesa: a análise dinamizada já varreu +1 milhão de CARs em 9 estados (SFB, jun/2026). Não pedimos fé num protótipo — apontamos para mercado real já em movimento e dizemos onde ele ainda confia errado. Slogan defensável, sem jargão: "MapBiomas diz o que é, PRODES o que mudou, Gabarito onde confiar." Rebato o PM: "um painel" como produto, sim — mas o pitch precisa do mockup das 3 camadas, senão a banca acha que resolvemos um terço do problema. Implicação: prova única eleva clareza e credibilidade; mockup das 3 protege a nota de completude. As duas bancas, cobertas.

Round 1 — Guardião do Edital & da Banca
Aceito que "produto" se sustenta — MAS só se a diferenciação for cravada, e ainda não está. Pitch e Luana querem abrir com o painel das 3 camadas (frescor+sobreposição+parecer) usando "1mi CARs/9 estados". Cuidado: esse número é da SFB. Mostrar três camadas sobre base qualificada é o convite perfeito para a banca perguntar "vocês recriaram a análise dinamizada do SICAR?". Rebato o Pitch: a prova ao vivo não pode ser o painel inteiro — tem que ser o delta que o SICAR NÃO entrega (confiança por talhão + frescor datado contra MapBiomas Col.10), senão viramos retela do oficial. Agora o gate que desclassifica antes de qualquer mérito: o repo tem voz clonada/TTS (commits 6b516ae, abd31c5). O edital exige NARRAÇÃO HUMANA. Áudio sintético nos protótipos ≤2min e pitch ≤3min = desclassificação imediata, não importa o score. Implicação concreta: até 28/06 23:59 (Desafio 02 marcado), (1) purgar todo áudio IA e regravar com voz humana; (2) reescopar a demo para o delta, não o painel; (3) registrar mentoria. Sem isso, conformidade reprova antes da banca avaliar diferenciação.

---

## Final Report (Facilitador/Moderador) — Rodada 3 (debate ao vivo)

**1. Debated Claim**
O Gabarito é **produto** (não feature) e o ângulo "frescor + confiança por talhão" é vencedor — desde que a prova ao vivo seja o *delta que o SICAR não entrega* e a conformidade de entrega seja sanada.

**2. Stakeholder Map**
PM (foco/escopo) × Luana (3 dores, adoção) × Eng-Geo (prova técnica honesta) × Pitch (narrativa cross-desafio) × Guardião (conformidade/diferenciação). Externos: SFB/MGI (donos da dinamizada/CAR-DPG, cliente-alvo), MapBiomas/INPE (insumos), banca (técnica + inovação).

**3. Top Arguments Supporting Action**
- "Produto, não feature": tem usuário, job-to-be-done (fila 12k) e métrica (% talhões liberados sem erro) — nenhum sistema existente responde "posso liberar este talhão automático hoje?".
- Diferenciação cross-desafio: melhoramos a *decisão* sobre 1 milhão de CARs já analisados, não a *entrada* (como simplificação/educação).
- Insumos abertos prontos (MapBiomas Col.10; PRODES/DETER GeoPackage) → exequível e "sem GEE".

**4. Top Arguments Opposing / Constraining**
- Risco "retela do SICAR" se a demo mostrar o painel inteiro sobre base já qualificada.
- Escopo enxuto (1 camada) deixa 2 das 3 dores da Luana sem resposta → fraqueza de adoção e de narrativa.
- **Conformidade:** áudio IA no repo (commits 6b516ae, abd31c5) = desclassificação.
- Prova de score sem código + co-registro/deslocamento = risco técnico.

**5. Key Conflicts and Trade-offs**
- **Enxuto (PM) × completo (Luana):** resolvido pelo Pitch — **mockup das 3 camadas (completude) + prova ao vivo de UMA (convicção)**.
- **Diferenciação (Guardião):** a prova única deve ser o *delta* (confiança+frescor por talhão), não o painel — para não parecer cópia da dinamizada.
- **Score:** heurística transparente/auditável (frescor × concordância PRODES/DETER × classe), nunca caixa-preta; baixa confiança → humano.

**6. Turning Points**
- Pitch reconcilia PM×Luana com "mockup 3 / prova 1".
- Guardião redefine a prova ao vivo como "o delta que o SICAR não entrega" + crava o gate de conformidade com os commits.

**7. Decision Assessment**
- **Validade:** Alta. **Confiança:** Média-Alta — depende de recorte real de AL (+ geometria do imóvel) e de sanar a conformidade.
- **Justificativa:** convergência entre todos os papéis; objeções endereçadas por escopo de prova e gate de conformidade, não ignoradas.

**8. Open Questions / Unknowns**
- Acesso à base qualificada de AL e ao polígono CAR do recorte (plano B: MapBiomas Col.10 + consulta.car).
- GeoPackages PRODES/DETER de AL co-registrados a tempo?
- A banca lê "delta sobre o oficial" como complemento (bom) ou cópia (ruim)? — mitigar na narrativa.

**9. Recommended Next Step**
1) **Sanar conformidade hoje:** remover áudio IA (mp3 + commits 6b516ae/abd31c5) e planejar narração humana. 2) Definir recorte de **Alagoas** + baixar/co-registrar PRODES/DETER + polígono CAR. 3) Produzir: protótipo (prova única do *delta* + mockup das 3 camadas), pitch pessoa-first, ideação — até 28/06 23:59; mentoria registrada.

**10. Decision Trigger Metrics**
- **Diferenciação:** demo mostra ≥1 talhão real de AL com "confie/ não confie" que a dinamizada+MapBiomas sozinhos não dão.
- **Adoção (Luana):** as 3 camadas visíveis no painel (frescor+sobreposição+parecer).
- **Conformidade (gate):** zero áudio IA; 3 artefatos no prazo; mentoria registrada.
- **Impacto (pitch):** % da fila pré-validável com segurança a partir do score.

*Nota: Rodada 3 conduzida ao vivo — cada turno foi autorado por um agente dedicado e relatado/gravado pelo @main antes do próximo. Turno de abertura do PM via mailbox; demais via chamadas síncronas de agente após instabilidade do relay em background.*
