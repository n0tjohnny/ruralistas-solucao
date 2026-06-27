# Documentos oficiais do haCARthon (fonte primária)

Baixados de **repositório institucional da ENAP** — `https://repositorio.enap.gov.br/handle/1/9909` (item tipo *Edital*, "Edital Nº 158/2026", Mai/2026) — em **28/06/2026**. São os 5 documentos listados na página oficial do desafio (appdesafios.enap.gov.br).

> **Por que isto existe:** até esta data o repo só tinha os **decks das Lives** (Canva), não os documentos normativos. A conformidade estava verificada apenas por leitura web (`reports/09`). Agora a fonte primária está versionada aqui e a checagem abaixo foi refeita **contra o texto do edital**, não contra fonte secundária.

| Arquivo local | Documento oficial | Tamanho | Bitstream ENAP |
|---|---|---|---|
| `Edital-158-2026-haCARthon-assinado.pdf` | Edital nº 158/2026 (assinado) | 99 kB | `/bitstream/1/9909/1/...SEI_0993344_Edital_158.pdf` |
| `Briefing-desafios-v1.pdf` | Briefing dos Desafios — V1 | 734 kB | `/bitstream/1/9909/2/...` |
| `Briefing-desafios-v2.pdf` | Briefing dos Desafios — V2 (vigente) | 603 kB | `/bitstream/1/9909/5/...vers%C3%A3o%202.pdf` |
| `Guia-do-Participante.pdf` | Guia do Participante | 506 kB | `/bitstream/1/9909/3/...` |
| `Cronograma-Edital-haCARthon.pdf` | Cronograma | 203 kB | `/bitstream/1/9909/4/...` |

(`.txt` ao lado de cada PDF = extração via `pdftotext -layout`, para grep/auditoria.)

---

## Checagem de conformidade — contra o texto primário

| # | Afirmação que usamos | Veredito | Citação primária (doc · linha) |
|---|---|---|---|
| 1 | Protótipo = vídeo **≤ 2 min** (acima desclassifica) | ✅ Confirmado | Guia 110: *"A entrega do protótipo deverá ser um vídeo de até 2 minutos."* · Guia 118: *"Os vídeos com mais de 2 minutos não serão aceitos e causarão a [desclassificação]."* |
| 2 | Pitch/apresentação = vídeo **≤ 3 min** | ✅ Confirmado | Edital 9.4: *"O vídeo de apresentação/demonstração da solução deverá ter, no máximo, 3 (três) minutos."* |
| 3 | **Código funcional não é obrigatório** | ✅ Confirmado | Briefing v2 209: *"Não é obrigatório apresentar software funcional ou código-fonte."* |
| 4 | Open source = modelo da solução | ⚠️ Confirmado **com nuance** | Briefing **v1** 202/269/332: *"Todas as soluções **devem** ser desenvolvidas em código aberto."* → Briefing **v2** 206: *"em modelo de código aberto"* + 209 (item 3). **v2 (vigente) suaviza de "devem" para "modelo".** Tratamos como **forte expectativa**; o Gabarito é aberto por design, então passamos nos dois textos. |
| 5 | Premiação **R$75.000 = 5 × R$15.000** | ✅ Confirmado | Edital 10.4: *"R$ 75.000,00 ... distribuídos igualmente aos 5 primeiros colocados ... cada equipe vencedora receba R$ 15.000,00."* |
| 6 | **Narração é recomendada, não obrigatória** (voz de IA não desclassifica) | ✅ Confirmado | Guia 114–115: *"grave um áudio explicando o que está sendo mostrado... a narração ajuda a fazer os jurados entenderem"* (linguagem de recomendação; sem cláusula de desclassificação). |
| 7 | **"Proibição de GEE/ArcGIS" NÃO consta** | ✅ Confirmado | **0 ocorrências** de "Earth Engine / ArcGIS / GEE" nos 5 documentos. |
| 8 | Evento **remoto** (não presencial) | ✅ Confirmado | "remoto" presente; **0** ocorrências de "presencial". |
| 9 | **Desafio 02 (verbatim)** | ✅ Confirmado | Briefing v1/v2 38–40: *"DESAFIO 2: Melhorar o acesso a dados geoespaciais do CAR — Como podemos atualizar anualmente com rapidez e acurácia o mapeamento de uso e cobertura do solo de todos os estados brasileiros, melhorando a..."* |

**Conclusão:** os 9 pontos de conformidade que sustentam o pitch do Gabarito **se confirmam contra a fonte primária**. A única ressalva é a item 4 (v1 "devem" × v2 "modelo") — sem risco para nós, porque o produto é open source de qualquer modo.

**Ainda não extraído do edital (a checar para a submissão):** rubrica de avaliação com pesos por critério e limite de tamanho de equipe — buscar no Edital (seções 8–9) e na plataforma appdesafios.
