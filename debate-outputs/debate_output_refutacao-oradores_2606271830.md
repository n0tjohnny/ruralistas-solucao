# Refutação Adversarial — as opiniões do debate são sustentáveis?

**Data:** 27/06/2026 (America/Sao_Paulo)
**Modo:** painel de verificação ao vivo, turno a turno. Cada orador do debate `debate_output_viabilidade-edital-chance_2606271700.md` recebe um **Refutador** que pesquisa online (2025–2026) tentando FALSIFICAR suas afirmações empíricas, com fontes. Postura: refutação (igual a `reports/09`). PT-BR.
**Pergunta:** as opiniões apresentadas no debate são sustentáveis à luz das informações mais recentes?

## Oradores sob verificação
1. **Dra. Marta Sobral** (engenheira) — afirmações técnicas (change detection, circularidade, limiares PRODES/DETER, Sentinel-2 10m, nuvem/SAR, MapBiomas 10m via GEE).
2. **Luana Prado** (analista OEMA) — números operacionais (fila, ~6/dia manual, 66 mil/dia, 94% sem conclusão, 8,1 mi CARs, responsabilidade do ato).
3. **Rafael Tavares** (PM) — afirmações de produto/posicionamento (MapBiomas×Gabarito, 3 públicos, CAR pré-preenchido).
4. **Cláudia Ferreira** (jurada) — fatos do edital (R$75k, ≤2/≤3 min, código não obrigatório, remoto, top 5) e dinâmica de banca.
5. **Heitor Lemos** (B2G) — EUDR (30/dez/2026, US$46,3 bi), Fundo Amazônia (>R$2 bi/2025), SFB dono do SICAR, RER MGI/Dataprev, ABEMA, prêmio não financia OPEX.

---

## Verificação turno a turno

Refutador → Dra. Marta Sobral (afirmações técnicas)

**1. Coleção 10 = Landsat 30 m; produto 10 m depende de GEE.** SUSTENTÁVEL. Col.10 (ago/2025) é Landsat 30 m; o produto 10 m é Coleção 2 beta (Sentinel-2), distribuída como asset GEE, ainda "beta". Confirma os dois pontos. (brasil.mapbiomas.org, ago/2025)

**2. PRODES ~6,25 ha, DETER ~3 ha; "só veem supressão".** PARCIAL. Limiares corretos. Mas "só supressão" é REFUTADO: DETER já mapeia degradação, cicatriz de queimada e mineração, e em set/2025 saiu o DETER Não Floresta (diário). Regeneração/rotação de cultura realmente não são alvo — esse subponto fica de pé. (gov.br/mma, set/2025; obt.inpe.br)

**3. Sentinel-2 não enxerga talhão <6,25 ha.** REFUTADA (no limiar citado). Literatura 2025 mostra S2 10 m detectando distúrbios até ~0,1 ha com deep learning. O "<6,25 ha escapa" é limiar do PRODES, não do sensor. (tandfonline 2025; arXiv 2512.17021)

**4. Sob nuvem o óptico fica cego; sem SAR não há frescor sub-anual.** SUSTENTÁVEL. Consenso: óptico limita-se à seca; fusão S1+S2 (F1≈0,92) e S1 sozinho dão revisita ~2 semanas. Reforça a tese do SAR. (IEEE 10046410; ISPRS 2023)

**5. Validar contra PRODES/DETER cria circularidade; precisa de amostra independente.** SUSTENTÁVEL. As "Good Practices" de Olofsson et al. (2014, RSE 148) exigem referência independente sob amostragem estratificada. Metodologicamente correto.

**Conclusão: parcial-a-sustentável.** Afirmações 1, 4, 5 sustentadas; 2 majoritariamente. Refutação mais forte: a #3 — a Marta importou o limiar institucional do PRODES (6,25 ha) como se fosse limite físico do Sentinel-2; o estado da arte detecta distúrbios uma ordem de grandeza menores. E o "só supressão" precisa atualizar para o DETER Não Floresta (2025).

Refutador → Luana Prado (números operacionais)

**1. "8,1 milhões de CARs"** — SUSTENTÁVEL. SICAR fechou 2025 com 8.154.567 cadastros (gov.br/agricultura, SFB 2025-26). Correto.

**2. "~94% sem análise; 2,3% (2024) → 5,9% (2025)"** — SUSTENTÁVEL. SFB: 480.700 concluídos / 8,15 mi = 5,9%, ante 2,3% até 2024. Logo ~94,1% sem conclusão. Bate exatamente.

**3. "Dinamizada até ~66 mil/dia"** — SUSTENTÁVEL. Oficial SFB/UFLA (Canal Rural). Ressalva: é capacidade de triagem/cruzamento, não de homologação final.

**4. "Manual ~6 imóveis/dia; ~3% em ~12 anos"** — PARCIAL. A lentidão é factual (só 28,6 mil totalmente validados; historicamente 0,4% com análise total). Mas o número específico "6/dia" não tem fonte oficial (estimativa). (Valor/Obs. Código Florestal)

**5. "Dinamizada em ~9 estados / +1 mi analisados (SFB jun/2026)"** — SUSTENTÁVEL (exato). SFB jun/2026: +1 milhão analisados, 9 estados (AL,AP,CE,MG,PB,PE,PI,PR,RJ), 3 mi ha, 309 mil processos concluídos. (gov.br/florestal jun/2026)

**6. "Assina com CPF/responde pessoalmente; procuradoria trava automação"** — PARCIAL/SUSTENTÁVEL no núcleo. Confirmado que a automação não substitui análise individual: exige aceite do proprietário; discordância volta à análise manual do técnico estadual (CNA; IMASUL/MS). A formulação literal "CPF/procuradoria trava" não tem fonte (inferência juridicamente plausível).

**Conclusão: majoritariamente sustentável.** Itens 1, 2, 3 e 5 confirmados por dados oficiais SFB 2025-2026 (inclusive a notícia exata de jun/2026). Discrepância maior: o "6/dia" manual sem fonte — substituir pela métrica verificável (0,4% histórico / 5,9% acumulado).

Refutador → Rafael Tavares (produto/posicionamento)

**1. "MapBiomas pinta o Brasil; o Gabarito decide o que abrir primeiro."** — PARCIAL (ameaça real). O MapBiomas Alerta já cruza cada alerta com CAR/SIGEF/SNCI e emite laudo automático por imóvel que "agiliza a tomada de decisão" da OEMA, afirmando que a irregularidade se concentra em <4% dos imóveis — ou seja, já faz priorização. O diferencial "por talhão + score auditável" sobrevive, mas "decidir o que abrir primeiro" já tem concorrente operando. (alerta.mapbiomas.org, RAD-2024 mai/2025)

**2. "Dinamizada faz triagem por imóvel, não por talhão."** — SUSTENTÁVEL. Opera por cadastro/imóvel (cruza declaração × base, propõe retificação ao titular). Nenhuma fonte indica unidade-talhão. (gov.br/florestal jun/2026)

**3. "CAR Pré-Preenchido: hoje fundiário; feição ambiental é futuro."** — SUSTENTÁVEL/PARCIAL. Lançado na COP30 (nov/2025), auto-preenche dados geoespaciais/titularidade (SNCR/Sigef); feições ambientais ainda indicadas pelo produtor. Risco: é exatamente para onde o MGI caminha. (gov.br/gestao nov/2025)

**4. "Existe score de confiança por talhão para roteamento?"** — NÃO-VERIFICÁVEL (favorável). Nenhuma solução governo/mercado com "score por talhão para roteamento". Concorrente mais próximo segue sendo o laudo por imóvel do MapBiomas Alerta. Diferencial provavelmente real.

**5. "Reordenar fila por risco aumenta qualidade/quantidade."** — SUSTENTÁVEL. Priorização por risco é prática consolidada (TCU/CGU) e o próprio MapBiomas valida (<4% dos imóveis).

**Conclusão: PARCIAL.** Sustenta-se no eixo técnico (talhão + score auditável + classes CF sub-anual), mas NÃO no "decidir o que abrir primeiro" como ineditismo — o MapBiomas Alerta (laudo automático por imóvel, mai/2025) é concorrente direto de priorização e a ameaça mais forte. O moat tem que ser cravado no talhão + score assinável, não na priorização em si.

Refutador → Cláudia Ferreira (edital + banca)
Fonte primária: Edital nº 158/2026 (SEI 0993344), Briefing v2 e Guia do Participante (repositório ENAP), acessados 27/06/2026.

**1. Prêmio R$75k = 5×R$15k.** SUSTENTÁVEL. §10.4: "distribuídos igualmente aos 5 primeiros colocados... cada equipe R$15.000,00." Verbatim.

**2. Entregáveis; código não obrigatório.** SUSTENTÁVEL. Ideação + Protótipo (vídeo ≤2 min; >2 min desclassifica) + Pitch (slides PDF + áudio; §9.4 "máximo 3 minutos"). Briefing: "Não é obrigatório apresentar software funcional ou código-fonte."

**3. Evento remoto.** SUSTENTÁVEL. §7.1 "de modo remoto".

**4. Open source esperado, sem veto a GEE/ArcGIS nem narração humana.** SUSTENTÁVEL. §6.3 permite "qualquer licença ou ferramenta" — refuta veto a GEE/ArcGIS. Narração apenas "ajuda os jurados" (recomendada).

**5. Texto do Desafio 02.** SUSTENTÁVEL (verbatim).

**6. ~20–30 submissões no Desafio 02.** NÃO-VERIFICÁVEL (especulativo). Nenhum dado público de inscritos. Único número: §5.7 cancela se não houver ≥15 equipes no total do evento (não por desafio) — logo 20–30 num só desafio é palpite sem base.

**7. Acontecendo em jun/2026.** SUSTENTÁVEL. Evento 26–28/06/2026; inscrições 15/05–25/06. Hoje (27/06) está em curso.

**Conclusão: SIM, sustentam-se.** Itens 1–5 e 7 confirmados na fonte primária; nenhum erro factual. Única fragilidade: o item 6 (20–30 submissões) é estimativa sem evidência e contraria o piso de 15 equipes/evento — isso ENFRAQUECE a base de cálculo da "chance de ~55% top 5" do debate anterior (a base real de competidores é desconhecida).

Refutador → Heitor Lemos (EUDR, financiamento, instituições)

**1. Data do EUDR.** PARCIAL (data confere; mas é 2º adiamento). "30/12/2026 grandes/médios, 30/06/2027 micro/pequenos" está correto e vigente HOJE — Regulamento (UE) 2025/2650 (dez/2025). Geolocalização permanece exigida (micro/pequenos podem usar código postal). Ressalva: já é a segunda prorrogação (dez/2024 → dez/2025 → dez/2026), então "a UE pode adiar de novo" é contra-argumento legítimo. (EC Access2Markets, dez/2025)

**2. US$46,3 bi / US$17,5 bi/ano.** SUSTENTÁVEL (ressalva de fonte). Exportações e exposição conferem (MDIC); o US$17,5 bi/ano é estimativa da consultoria BIP, não oficial. (CNN Brasil)

**3. Fundo Amazônia >R$2 bi (2025) / R$3,7 bi (2023–25).** SUSTENTÁVEL. BNDES/MMA confirmam recorde anual. (BNDES, 2025)

**4. SFB gestor do SICAR/CAR.** SUSTENTÁVEL. (gov.br/florestal jun/2026)

**5. RER / MGI-Dataprev / Noruega / 1º DPG.** SUSTENTÁVEL. CAR como 1º Bem Público Digital (COP30); RER open source MGI+Dataprev com a Noruega, base DHIS2. (gov.br/governodigital)

**6. ABEMA.** SUSTENTÁVEL. Reúne as 26 secretarias estaduais/OEMAs. (abema.org.br)

**7. R$75k simbólico / Fundo ciclo 12–24 meses.** SUSTENTÁVEL (plausível).

**Conclusão: sustentam-se (parcial-a-sim).** Nenhum dado central refutado — inclusive a data do EUDR, que muitos errariam, está correta. Pontos a calibrar: sinalizar que 30/12/2026 já é a 2ª prorrogação (risco de novo adiamento) e que o US$17,5 bi/ano é estimativa privada. Erro factual grave: nenhum.

---

## Veredito de síntese — as opiniões do debate são sustentáveis?

**Resposta curta: SIM, no conjunto — o debate é factualmente sólido.** De ~30 afirmações empíricas testadas contra fontes de 2025–2026, a maioria é SUSTENTÁVEL; nenhuma tese central caiu. Mas há **5 correções e 3 calibrações** a fazer. Notável: a data do EUDR (30/12/2026), que era o maior risco factual, está **correta e vigente** (Reg. UE 2025/2650).

### Refutações que pegam (corrigir antes de usar em pitch)
1. **Marta — "Sentinel-2 não enxerga <6,25 ha":** REFUTADA. Ela importou o limiar institucional do PRODES como limite físico do sensor. O estado da arte 2025 detecta distúrbios ~0,1 ha com deep learning. → No pitch, NÃO dizer que o sensor é cego abaixo de 6,25 ha; dizer que o PRODES é que não reporta abaixo disso (e que esse é justamente o gap que o Gabarito cobre).
2. **Marta — "PRODES/DETER só veem supressão":** desatualizado. Em set/2025 saiu o **DETER Não Floresta** (diário) e o DETER já mapeia degradação/queimada/mineração. → Atualizar a frase; regeneração e rotação de cultura, essas sim, seguem fora do escopo deles (subponto válido).
3. **Rafael — "decidir o que abrir primeiro" como ineditismo:** PARCIAL. O **MapBiomas Alerta** já emite laudo automático **por imóvel** cruzado com o CAR e prioriza (irregularidade em <4% dos imóveis, RAD-2024). → O moat tem que ser cravado em **talhão + score auditável assinável**, não em "priorização" genérica, que já tem concorrente operando.
4. **Luana — "~6 imóveis/dia manual":** sem fonte oficial. A lentidão é real (0,4% historicamente com análise total; 5,9% acumulado), mas o número específico é estimativa. → Usar a métrica verificável.
5. **Cláudia — "~20–30 submissões no Desafio 02":** NÃO-VERIFICÁVEL. Não há dado público; o edital só exige piso de 15 equipes no evento TODO. → **Isso enfraquece a base de cálculo da "chance ~55% top 5"** do debate anterior: a probabilidade foi ancorada num denominador inventado. A conclusão "candidato a top 5" continua qualitativamente plausível, mas o número não tem lastro estatístico.

### Calibrações (verdadeiro, mas precisa de ressalva)
- **EUDR 30/12/2026:** correto, mas é a 2ª prorrogação — um adversário dirá "a UE pode adiar de novo". Usar como urgência, reconhecendo o risco.
- **Custo EUDR US$17,5 bi/ano:** estimativa da consultoria BIP, não oficial. Citar como tal.
- **"66 mil/dia" e "score protege quem assina/procuradoria trava":** os números agregados são oficiais; a formulação jurídica fina (CPF/responsabilização pessoal) é inferência plausível, não documento — não cravar como fato citável.

### O que saiu MAIS forte após a verificação
- Toda a estrutura de dados da Luana (8,1 mi CARs, 94% sem conclusão, 2,3%→5,9%, 9 estados, +1 mi analisados jun/2026) bate **exatamente** com fontes SFB de 2025–2026.
- Todo o bloco do edital da Cláudia (R$75k/5×15k, ≤2min/≤3min, código não obrigatório, remoto, sem veto a GEE, evento 26–28/06/2026) confere com a fonte primária — e o evento está **acontecendo agora**.
- As teses metodológicas da Marta (circularidade exige ground truth independente; SAR para frescor sob nuvem) são consenso técnico (Olofsson et al. 2014; fusão S1+S2 2023–2025).
- Os fatos institucionais do Heitor (Fundo Amazônia >R$2 bi/2025, SFB dono do SICAR, RER MGI/Dataprev/Noruega, CAR=1º DPG, ABEMA) estão todos confirmados.

### Conclusão final
O debate **não se apoiou em ar** — sua espinha factual resiste à verificação adversarial de 2026. As fragilidades são de **precisão**, não de **fundamento**: um número anedótico (6/dia), um limiar mal-atribuído (Sentinel vs PRODES), um concorrente subestimado (MapBiomas Alerta já prioriza por imóvel) e uma probabilidade sem denominador (20–30 submissões). Corrigidos esses pontos, as opiniões dos cinco oradores são **sustentáveis**. A maior implicação estratégica: o diferencial do Gabarito **não** é "priorizar a análise" (já existe) — é **confiança auditável por talhão que torna a decisão assinável**. É nisso que o pitch tem que morrer ou viver.
