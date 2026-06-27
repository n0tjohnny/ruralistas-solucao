# Gabarito — workspace de estratégia de produto (haCARthon)

Repositório de **estratégia de produto** para o **haCARthon** (maratona de inovação aberta do governo para o **CAR — Cadastro Ambiental Rural**). Não é um repositório de aplicação: não há código de app, build ou testes. O "produto" hoje é **uma página estática de visão** (`index.html`) + os documentos de estratégia.

> ⚠️ **Houve um pivô.** O projeto começou como **Compadre** (Desafio 01 — guia do CAR no WhatsApp, persona *Seu Raimundo*) e migrou para **Gabarito** (Desafio 02 — dados geoespaciais). Tudo que menciona Compadre/Seu Raimundo está **superado**. O índice da virada e o status de cada arquivo estão em **[`PIVOT-DESAFIO-02.md`](PIVOT-DESAFIO-02.md)**.

## O produto, em uma frase

**Gabarito** é o **roteador auditável da análise do CAR**: detecta o que mudou no território (Sentinel-2 + PRODES/DETER sobre um t0), remapeia só os talhões alterados, ordena a fila da analista por risco (score invisível) e, quando ela abre o caso, mostra a **evidência datada que torna a decisão assinável** (trilha de auditoria). Um único artefato serve **três públicos**: analista da OEMA (persona **Luana**), análise dinamizada do SICAR e produtor/RT. É **bem público digital (DPG)** — sem monetização, voltado a adoção institucional.

## Por onde começar (ordem de leitura)

1. **[`PIVOT-DESAFIO-02.md`](PIVOT-DESAFIO-02.md)** — o pivô + status de cada artefato (atual / válido / superado).
2. **[`pm-role.md`](pm-role.md)** — **fonte canônica** da estratégia e persona de produto.
3. **[`prd-outputs/`](prd-outputs/)** — o PRD mais recente é o **`prd_gabarito_2606280400.md` (v4.0)**.
4. **[`reports/09-verificacao-dados-2026.md`](reports/09-verificacao-dados-2026.md)** — verificação adversarial dos dados; **prevalece** em caso de conflito.

## Mapa do repositório

| Pasta / arquivo | O que é |
|---|---|
| `index.html` · `public/index.html` | Página de visão do Gabarito (entregável; cópias idênticas — editar as duas). Deploy via Cloudflare Wrangler. |
| `pm-role.md` | Persona/estratégia de PM do Gabarito — **fonte da verdade**. |
| `PIVOT-DESAFIO-02.md` | Índice do pivô Compadre→Gabarito e status dos artefatos. |
| `prd-outputs/` | PRDs versionados (mais recente = v4.0). |
| `debate-outputs/` | Transcrições de debates multi-agente (o decisivo é o `council-dor-real-*`). |
| `debate-materials/` | Insumos de debate. |
| `reports/` | Pesquisa numerada (`01`–`09`) + `reports/exploration/`. `09` prevalece sobre dados. |
| `memory/ideas/gabarito/` | `idea.md` + `scores.json` (score atual **73/100 — "test"**). |
| `source-material/` | Material-fonte bruto do haCARthon: `transcricoes-lives/` (Lives) + `documentos/` (PDFs, links, edital). |
| `CLAUDE.md` / `AGENTS.md` | Instruções para os agentes de IA (PM ativo / framework legado). |
| `skills/` · `workflows/` · `.claude/` | Toolchain de IA (PM + validação de ideias). |
| `claude-pm.sh` · `wrangler.toml` | Lançar o PM de IA · config de deploy da página. |

## Rodar a página

```bash
npx wrangler pages dev ./public     # local
npx wrangler pages deploy ./public  # deploy
```

## Idioma

Artefatos de produto e a página estão em **português (pt-BR)**.
