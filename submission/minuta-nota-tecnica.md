# MINUTA — Nota Técnica de roteamento e trilha de auditoria na análise do CAR

> **Natureza:** minuta de instrumento infralegal (Nota Técnica / Portaria interna de OEMA) que operacionaliza o uso de um **score de confiança por talhão** na triagem do CAR. É um **rascunho de governança** para discussão com a procuradoria e a direção da OEMA — não tem validade jurídica até aprovado e assinado. Acompanha a submissão do **Gabarito** como a **2ª entrega** (artefato técnico + modelo de governança).
>
> **Por que existe:** a liberação/notificação de um CAR é **ato administrativo** com peso jurídico. Automatizar parte da análise só é defensável se **a regra de quando o humano entra estiver escrita, for auditável, e a responsabilidade estiver repartida**. Esta minuta escreve essa regra.

---

## 1. Objeto
Estabelecer o procedimento pelo qual o resultado do Gabarito — um **score de confiança por talhão**, acompanhado de **trilha de auditoria datada** — é usado para **rotear** a fila de análise do CAR entre **liberação automática registrada** e **análise humana**, sem transferir a decisão legal para o sistema.

## 2. Fundamentação
- Lei nº 12.651/2012 (Código Florestal) — APP, Reserva Legal, área rural consolidada, vegetação nativa.
- Decreto nº 7.830/2012 e normativos do SICAR — análise do CAR e análise dinamizada.
- Princípios da motivação e da autotutela do ato administrativo (Lei nº 9.784/1999): todo ato deve ser **motivado e reconstituível**.

## 3. Definições
- **Talhão:** parcela de uso/cobertura homogêneo dentro do imóvel.
- **Delta:** talhão em que o Gabarito detectou mudança entre o t0 (base de referência vigente) e a imagem recente.
- **Score de confiança (s):** valor por talhão, **assimétrico** — na dúvida, erra para baixo (manda ao humano). Heurística **transparente e versionada** (concordância de alertas × magnitude da mudança no Sentinel-2 × idade do dado), com pesos explícitos.
- **Limiar (L):** ponto de corte definido pela OEMA, **calibrado contra verdade independente** (PRODES/DETER/amostra de campo), nunca contra o t0.
- **Trilha de auditoria:** conjunto mínimo de evidências que reconstitui o ato (ver §5).

## 4. Regra de decisão (o coração da minuta)
Para cada imóvel/talhão na fila:

| Condição | Roteamento | Quem responde |
|---|---|---|
| **Sem delta** E **s ≥ L** | **Liberação automática registrada** com trilha anexada | Servidor responsável pela validação do lote, por **ato de homologação periódica** do roteamento |
| **Com delta** OU **s < L** | **Fila de análise humana** (não libera sozinho) | Analista, caso a caso, com assinatura individual |
| **Falso-negativo visível** (borda, nuvem, classe não calibrada, desalinhamento) | **Sempre humano** | Analista |

**Cláusula de segurança (inegociável):** a meta operacional é **falso-negativo visível = 0**. Em qualquer ambiguidade, o talhão é rebaixado para análise humana. O sistema **roteia e ordena**; **não decide o mérito**.

## 5. Trilha de auditoria (campos mínimos por decisão)
Toda liberação automática registrada anexa, de forma imutável e datada:
1. **Imagem** — cena Sentinel-2, data (`view_date` equivalente) e índice (NDVI antes/depois).
2. **Alerta** — referência ao alerta PRODES/DETER cruzado, quando houver (`class_name`, `view_date`).
3. **Base t0** — origem e data da base de referência usada.
4. **Score** — valor `s`, **versão da heurística**, limiar `L` vigente.
5. **Roteamento** — resultado (automático/humano), carimbo de tempo, identificação do servidor homologador.

A trilha permite **reconstituir o ato** meses depois — inclusive para contestação do produtor ou auditoria do TCE/MP.

## 6. Repartição de responsabilidade
- A **OEMA** define e revisa o limiar `L` e homologa periodicamente o roteamento (ato coletivo, motivado).
- O **servidor** decide e assina os casos em fila humana (ato individual).
- O **fornecedor do score** (ex.: SFB-serviço / consórcio) mantém a heurística versionada, a calibração e o relatório de desempenho.
- Nenhuma das partes pode alegar "foi o algoritmo": o roteamento automático é um **ato de gestão homologado**, com trilha.

## 7. Calibração e revisão
- Recalibração **a cada ciclo** contra verdade independente (PRODES anual, DETER, amostra de campo fotointerpretada).
- Metas pré-registradas publicadas: **recall do delta ≥ 0,90 · kappa ≥ 0,70 · falso-negativo visível = 0**.
- Gatilho de suspensão: se a calibração não atingir as metas, o roteamento automático é **suspenso** e tudo volta ao humano até nova homologação.

## 8. Vigência e responsáveis (a preencher)
- Dono do processo contínuo (OPEX): __________________________
- Aprovação jurídica (procuradoria): __________________________
- Homologação (direção da OEMA): __________________________
- Data: ____ / ____ / ______

---
*Minuta para discussão. Ajustar à estrutura normativa da OEMA-alvo (piloto: SEMAD-GO).*
