# 00 — Índice Consolidado: 10 Explorações (jun/2026)

Síntese dos 10 agentes de exploração do projeto Compadre. Cada linha aponta o arquivo e o achado de maior impacto. **Itens marcados 🔴 contradizem ou corrigem o PRD/pm-role atuais e foram aplicados na v1.2.**

| # | Arquivo | Achado de maior impacto |
|---|---------|--------------------------|
| 01 | `01-regulacao-credito.md` | 🔴 Norma vigente é a **Res. CMN 5.303/2026** (12/05/2026), não a 5.268. Regra mudou 3× em 18 meses + **ADPF 1.228/DF no STF** → não amarrar o pitch ao prazo 2027. Fluxo concreto de destrave: falso-positivo → **canal BiomasBR/INPE**; supressão autorizada → ASV/TAC/PRAD. |
| 02 | `02-car-prepreenchido-apis.md` | 🔴 **API Consulta SICAR no Conecta GOV.BR NÃO é aberta à iniciativa privada** (só órgão público via adesão). FR-015/US-006 precisam de convênio. "Surfar por cima" é em UX/confiança, não via API. |
| 03 | `03-concorrentes-2026.md` | 🔴 **Ameaça nova: SICAR-SP** lançou app oficial de gestão do CAR no celular (jun/2026). RAImundo ainda só ~2.900 interações (sem CAR). Despachante R$750/ha. Jurema-7B viável como motor. |
| 04 | `04-videos-entrevistas.md` | Vídeos RAImundo, dor do crédito (CompreRural/Canal Rural), tutoriais que provam o gap (CAR exige desktop+GIS), legitimidade COP30/DPG. |
| 05 | `05-publico-regional.md` | 🔴 **Offline-first obrigatório** (lavoura sem sinal: só 33,9% da área com 4G/5G). ATER cobre só **7,3% NE / 8,8% N**. **"Voz primeiro, não só voz."** ⚠️ Cobertura CAR <60% em Amazônia/Caatinga **NÃO confirmada** — rebaixar a hipótese. |
| 06 | `06-ia-precisao-custo.md` | 🔴 Gargalo é precisão, não custo. **cite-or-abstain + faithfulness RAGAS ≥0,85 + eval set ~150 perguntas como gate de release.** STT faster-whisper large-v3 + confirmação ativa de entidades. TTS **Piper (MIT, $0)**; XTTS-v2 é não-comercial (corrige report 05). Gemini 2.5 Flash default. |
| 07 | `07-whatsapp-api.md` | Confirma PRD: janela 24h grátis (service), utility ~R$0,04; áudio opus ≤512KB nativo; Calling API dispensável no MVP. |
| 08 | `08-canal-cooperativa-ater.md` | 🔴 Distribuição regionalizada: N/NE via **STRs/CONTAG (~4.000 sindicatos, adjacência ao CAF)**; entrada por acordo de cooperação técnica (sem licitação); escala via editais (Anater Amazônia Legal, Pró-Semiárido). |
| 09 | `09-monetizacao-sustentacao.md` | 🔴 **Pagador destravado:** H1 = entidade executora de edital **Fundo Amazônia/BNDES** (R$600mi/30 mil famílias, ~R$20k/família — Compadre derruba o custo marginal); H2 = **cooperativa de crédito** (marco CMN, +10% crédito); H3 = **trading/EUDR** white-label. Custo ~R$0,30/sessão confirmado. |
| 10 | `10-dpg-casos-internacionais.md` | 🔴 Licença: **Apache-2.0 (código) + CC-BY/CC0 (corpus)**; "Do No Harm by design" obrigatório no DPG Standard. Análogo: **Kisan e-Mitra (Índia)** voz+texto multilíngue desacoplado. Escala vem de governança, não de código. |

---

## As 8 correções materiais aplicadas na v1.2

1. **Âncora normativa:** corpus cita **CMN 5.303/2026** (vigente) + 5.268/2025 + 5.193/2024 + Lei 12.651/2012; cada conteúdo regulatório tem data e dono de atualização.
2. **Não amarrar ao prazo 2027:** valor = "CAR consistente + destravar a recusa", que sobrevive à ADPF 1.228/DF no STF.
3. **FR-015/US-006 recondicionados:** sem API SICAR para privado → exige convênio institucional; alternativa = produtor portador do próprio dado.
4. **Offline-first** vira NFR obrigatório (não "tolerância a reconexão").
5. **Guardrail de precisão medível:** cite-or-abstain + RAGAS faithfulness ≥0,85 + eval set ~150 perguntas como gate de release.
6. **Stack de IA atualizada:** STT com confirmação ativa de entidades; TTS Piper (MIT); correção do XTTS-v2 (não-comercial).
7. **Monetização deixa de ser "indefinida":** 3 hipóteses de pagador rankeadas (Fundo Amazônia/BNDES, cooperativa de crédito, trading/EUDR).
8. **Licença resolvida:** Apache-2.0 (código) + CC-BY/CC0 (corpus).

## Lacunas validadas (jun/2026)
- ✅ **Res. CMN 5.303/2026 reescalonou os prazos:** grande (>15 MF) 04/01/2027; médio (4–15 MF) 01/07/2027; **pequeno/AF (≤4 MF) 03/01/2028** (não 2027). Aceita ASV, ato estadual equivalente, TCA; recusados em abr–mai/2026 podem reapresentar. → corrigido em todo o PRD/pm-role (v1.3).
- ✅ **ADPF 1.228/DF:** relator **Min. Gilmar Mendes**; CNA pediu cautelar de suspensão; **sem liminar** confirmada até jun/2026. A 5.303 foi, em parte, resposta à ação.
- ✅ **Cobertura CAR <60% em Amazônia/Caatinga: CONFIRMADO** (Embrapa CAR-2021): Pampa/Pantanal >80%, Cerrado/Mata Atlântica ~80%, Amazônia/Caatinga <60%. NE = 37% dos titulares (sobretudo pequenos). → deixou de ser hipótese.
- ⚠️ **Plano Safra AF 2026/2027:** ainda **sem números finais** (lançamento ~fim de jun/2026). Baseline 2025/2026 = R$89 bi total / Pronaf R$78,2 bi / ATER R$240 mi. Manter como pendente.
