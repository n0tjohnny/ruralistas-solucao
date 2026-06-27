# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **product-strategy workspace for the haCARthon** (a Brazilian government open-innovation marathon for the CAR — Cadastro Ambiental Rural). It holds research, an AI Product-Manager toolchain, debate transcripts, a PRD, and one deployable **product-vision web page**. There is no application source code, build step, or test suite — the "product" is currently a single static HTML page plus strategy documents.

**Active product: `Gabarito`** — a "living reference base" for the CAR that detects land-cover change (Sentinel-2 + PRODES/DETER over a t0 = state base or MapBiomas Col.10), remaps only changed parcels (talhões), and emits an **auditable** per-talhão confidence score. It targets **Desafio 02** (geospatial data) of the haCARthon. Persona **Luana** (state OEMA analyst), but the same delta+score artifact serves **three publics** (analyst routes the queue · SICAR/análise-dinamizada automates with an audit trail · producer/RT fixes the declaration before the notification). The moat is **technical-operational, not economic**: MapBiomas (annual, free) + INPE PRODES/DETER (continuous, free) already provide continuously-funded base/change layers — so the "only-CAPEX/no-OPEX" economic thesis was **refuted** (see `reports/09-verificacao-dados-2026.md`). What's missing, and what Gabarito adds: **sub-annual freshness + Código Florestal classes + per-talhão confidence as an operational decision** (adjacent competitors: MapBiomas Alerta, SICAR's per-imóvel triagem). Deep rationale: `pm-role.md`, `debate-outputs/`, and the data-verification log `reports/09`.

**Read these first — there was a hard pivot:** the project began as **Compadre** (Desafio 01: a WhatsApp guide for small farmers / persona Seu Raimundo) and pivoted to **Gabarito** (Desafio 02). Anything mentioning Compadre/Seu Raimundo is superseded.
- `PIVOT-DESAFIO-02.md` — the pivot index + status of every artifact (current / still-valid / superseded).
- `pm-role.md` — canonical product persona & strategy (source of truth for the product).

## Commands

No build/lint/test. The deliverable is static and deployed with Cloudflare Wrangler.

```bash
npx wrangler pages dev ./public     # serve the page locally
npx wrangler pages deploy ./public  # deploy (project: compadre-apresentacao)
./claude-pm.sh                      # launch the AI Product Manager (loads pm-role.md as system prompt)
```

`wrangler.toml` serves `./public`. **`index.html` (repo root) and `public/index.html` are kept identical** — edit/regenerate both together. The page is self-contained (inline CSS/SVG, Google Fonts; no JS, no external assets).

## How `index.html` is produced (non-obvious)

`index.html` is **compiled from a Claude Design bundle**, not hand-written from scratch. Source bundles live in the user's Claude Design project (`Gabarito - Visao do Produto.dc.html`), accessed via the `DesignSync` MCP tool. "Compiling" = strip the bundle wrapper (`<x-dc>`, `<helmet>`, `support.js`, thumbnail template), merge `<helmet>` into `<head>`, and bake the bundle's CSS vars (`--ga-accent`, `--ga-anno`) into `:root`. When editing the page, prefer regenerating from the bundle over diverging hand-edits, then re-sync root ↔ `public/`.

## Two coexisting agent frameworks

This workspace carries **two** instruction sets. Know which one applies to the request.

1. **AI Product Manager (active).** Drives the actual product work.
   - `pm-role.md` — the PM persona (currently Gabarito/Desafio 02). Canonical product context.
   - Project-local skills: `.claude/skills/debate/` and `.claude/skills/gen-prd/` (invoked as `/debate`, `/gen-prd`). `init-pm` (a global skill) scaffolds this layer.
   - Outputs: `debate-outputs/` (one `debate_output_<theme>_<YYMMDDhhmm>.md` per debate), `prd-outputs/` (`prd_<product>_<YYMMDDhhmm>.md`), `debate-materials/` (debate inputs).
   - `/debate` is specified to run a live multi-agent team; in practice the background mailbox relay has been unreliable here — synchronous foreground `Agent` calls (each agent returns one turn) are the dependable fallback for producing real, saved turns.

2. **App Idea Validation Agent (legacy).** Documented in `AGENTS.md` (Codex) and historically in this file. An intent router → `workflows/*.md` → narrow `skills/*` → `memory/`.
   - **Skills are defined twice:** canonical full definitions in `skills/<name>/SKILL.md`; thin adapters in `.claude/skills/<name>/` and `.codex/skills/`. **Always edit/read the canonical `skills/` version.**
   - State lives in `memory/` (`user_profile.md`, `market_insights/`, `ideas/<slug>/`); skills communicate via files in `memory/`, never via conversation history. Idea dirs are never deleted — mark `status: dropped`.

## Research & evidence

`reports/` holds numbered research (`01`–`08`, plus `reports/exploration/`) on the CAR domain, competitors, and the haCARthon. Per `PIVOT-DESAFIO-02.md`, the CAR-domain reports (e.g. `02-dominio-car.md`, `06-edital-completo.md`) remain valid; product-framing reports written for Compadre are superseded. Raw source material (haCARthon Live transcripts, PDFs, the official Luana persona) sits at the repo root.

## haCARthon delivery constraints (when producing a submission)

These come from the **Edital nº 158/2026 + anexos** (verified in `reports/09`; supersedes earlier transcript-based assumptions):
- Deliverables = **ideação** (form) + **protótipo** (video ≤2 min) + **pitch** (slides + audio, video ≤3 min). **Functional code is NOT required.** Event is **remote/online**. Prize R$75k = 5×R$15k.
- **Open source is the *expected model* (CAR as a DPG), not a mandatory deliverable.** ⚠️ Two rules previously treated as decisive are **NOT in the edital**: (a) "narration must be human / AI voice disqualifies" — narration is only *recommended*; (b) "no Google Earth Engine / ArcGIS" — not written anywhere. Both are prudent **best practices**, not requirements. (Dropping the repo's cloned-voice `public/*.mp3` is still sensible hygiene; avoiding GEE still aids portability — but neither is an edital gate.)
- Allowed/useful open data: MapBiomas (Col.10 = **Landsat 30 m**; the 10 m product is GEE-bound), PRODES/DETER via TerraBrasilis (**Shapefile/WFS**, not GeoPackage). SICAR ingests **shapefile/KML/GPX in SIRGAS 2000** (not GeoPackage/COG).

## Language

Product/strategy artifacts and the page are in **Brazilian Portuguese**. Match the language of the file you are editing.
