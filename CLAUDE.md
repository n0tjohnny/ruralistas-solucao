 # CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **product-strategy workspace for the haCARthon** (a Brazilian government open-innovation marathon for the CAR — Cadastro Ambiental Rural). It holds research, an AI Product-Manager toolchain, debate transcripts, a PRD, and several deployable **static pages**. There is no application source/test suite, but there IS one build step now (`tools/build-pitch.cjs` compiles the pitch deck). Published pages on `gabarito.pages.dev`: `/` (vision), `/pitch` (deck), `/entenda` (no-jargon team explainer), `/fluxos` (technical flows), plus `/apresentacao*`.

**Active product: `Gabarito`** — a "living reference base" for the CAR that detects land-cover change (Sentinel-2 + PRODES/DETER over a t0 = state base or MapBiomas Col.10), remaps only changed parcels (talhões), and emits an **auditable** per-talhão confidence score. It targets **Desafio 02** (geospatial data) of the haCARthon. Persona **Luana** (state OEMA analyst), but the same delta+score artifact serves **three publics** (analyst routes the queue · SICAR/análise-dinamizada automates with an audit trail · producer/RT fixes the declaration before the notification). The moat is **technical-operational, not economic**: MapBiomas (annual, free) + INPE PRODES/DETER (continuous, free) already provide continuously-funded base/change layers — so the "only-CAPEX/no-OPEX" economic thesis was **refuted** (see `reports/09-verificacao-dados-2026.md`). What's missing, and what Gabarito adds: **sub-annual freshness + Código Florestal classes + per-talhão confidence as an operational decision**. **Moat correction (web-verified jun/2026, `reports/10`):** MapBiomas Alerta **already prioritizes by imóvel** (automatic laudo, RAD-2024) — so *prioritizing the analysis is NOT the moat*. The surviving moat is **per-talhão auditable confidence + a signable audit trail** (decision the analyst can sign). Other adjacent competitors: SICAR's per-imóvel triagem. **Locked direction** lives in `pm-role.md` → section **DIREÇÃO DECIDIDA (27/06/2026)** (positioning, pilot = Goiás/SEMAD, prototype = antecipation backtest, 5-beat pitch, dual submission). Deep rationale & current artifacts: `pm-role.md`, latest PRD **`prd-outputs/prd_gabarito_2606280600.md` (v5.0)**, `debate-outputs/` (esp. `viabilidade-edital-chance` + `refutacao-oradores`), and the data-verification logs **`reports/09` + `reports/10`** (web-verified; prevail on data).

**Read these first — there was a hard pivot:** the project began as **Compadre** (Desafio 03: a WhatsApp guide helping farmers understand CAR legislation / persona Seu Raimundo) and pivoted to **Gabarito** (Desafio 02). Anything mentioning Compadre/Seu Raimundo is superseded.
- `PIVOT-DESAFIO-02.md` — the pivot index + status of every artifact (current / still-valid / superseded).
- `pm-role.md` — canonical product persona & strategy (source of truth for the product).

## Commands

No build/lint/test. The deliverable is static and deployed with Cloudflare Wrangler.

```bash
npx wrangler pages dev ./public     # serve the page locally
npx wrangler pages deploy ./public --project-name compadre-apresentacao  # deploy
./claude-pm.sh                      # launch the AI Product Manager (loads pm-role.md as system prompt)
node tools/build-pitch.cjs          # (re)compile pitch.html + public/pitch.html from the Claude Design bundle
# re-render a flow diagram after editing its .mmd:
npx @mermaid-js/mermaid-cli -i diagrams/<name>.mmd -o diagrams/<name>.png -b white   # then cp to public/diagrams/
```

`wrangler.toml` serves `./public`. **`index.html` (repo root) and `public/index.html` are kept identical** — edit/regenerate both together. Self-contained (inline CSS/SVG, Google Fonts; no JS, no external assets).

### How `pitch.html` is produced (do NOT hand-edit it)

`pitch.html` / `public/pitch.html` (`/pitch`, the deck) are **compiled by `tools/build-pitch.cjs`** from the Claude Design bundle `Gabarito - Pitch (haCARthon).dc.html` (saved as `tools/pitch-bundle.dc.json`, fetched via DesignSync). The script: reuses the standalone scaffolding, strips the `x-dc`/`x-import`/`support.js` wrapper, replaces the external satellite PNG with an inline mock (keeps the deck asset-free), injects the GPS-analogy slide, and runs a **sanitize map + forbidden-string trap** (see the anti-fabrication guardrail below). It writes both copies and is **idempotent** (verify with a double-run `md5sum`). Editing `pitch.html` directly is wrong — the next `node tools/build-pitch.cjs` silently reverts it; change the script's transforms instead. `tools/` is gitignored but force-committed because the build + guardrail must persist.

## Git workflow (owner's standing rule)

**ALWAYS `git commit` AND `git push` at the end of any task that changes files — without being asked.** The owner has made this explicit ("sempre faça o git push no final"). For this repo, `git push` *is* the publish step. Do not leave work committed-but-unpushed, and do not end a turn with a dirty tree. (This overrides the default "push only when asked" guidance.) End commit messages with the `Co-Authored-By: Claude Opus 4.8` trailer.

## How `index.html` is produced (non-obvious)

`index.html` is **compiled from a Claude Design bundle**, not hand-written from scratch. Source bundles live in the user's Claude Design project (`Gabarito - Visao do Produto.dc.html`), accessed via the `DesignSync` MCP tool. "Compiling" = strip the bundle wrapper (`<x-dc>`, `<helmet>`, `support.js`, thumbnail template), merge `<helmet>` into `<head>`, and bake the bundle's CSS vars (`--ga-accent`, `--ga-anno`) into `:root`. When editing the page, prefer regenerating from the bundle over diverging hand-edits, then re-sync root ↔ `public/`.

## Design system & recurring-defect guardrails (read before any UI work)

**`design.md` is the design source of truth.** Fonts (Spectral + Hanken only), the type-size ramp, the cor-da-terra palette, components, and mobile rules live there. Consult it before adding ANY CSS; new/compiled pages must conform and be reconciled against it.

Hard lessons already paid for (do NOT repeat them):
- **Compiling a bundle leaves dead `onClick="{{ handler }}"` template placeholders** — `support.js` would have wired them; in the static page they are inert (nav/buttons do nothing). After every compile, grep for `{{` and `on[Cc]lick="{{` and re-bind with your own vanilla JS (or remove). Verify zero `{{` remain.
- **Glossary/term auto-linking must derive terms AND definitions from the glossary itself** (cards carry `data-terms="form|form2"`; the linker reads them). NEVER hand-curate a term subset — it silently leaves things out (the "CAR wasn't underlined" bug). Completeness must be enforced by a runtime self-check (`console.warn` on any card missing `data-terms`), not by hope.
- **Never decorate/underline inside display headings (H1–H4).** The term-linker and similar passes must skip headings, or the typography looks broken.
- **Both copies must stay byte-identical:** after any edit, `diff -q index.html public/index.html` (and the `apresentacao*.html` pairs) must report identical. Mirror every change.

When a session exposes a sloppiness pattern, fix the **whole class** (grep for siblings across all pages), then record the lesson HERE so the next session starts ahead.

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

`reports/` holds numbered research (`01`–`08`, plus `reports/exploration/`) on the CAR domain, competitors, and the haCARthon. Per `PIVOT-DESAFIO-02.md`, the CAR-domain reports (e.g. `02-dominio-car.md`, `06-edital-completo.md`) remain valid; product-framing reports written for Compadre are superseded. Raw source material (haCARthon Live transcripts, PDFs, official docs) lives in `source-material/` (`transcricoes-lives/` + `documentos/`).

## haCARthon delivery constraints (when producing a submission)

These come from the **Edital nº 158/2026 + anexos** (verified in `reports/09`) and the organizer's **Live 7** delivery briefing (`reports/10`; transcript in `source-material/transcricoes-lives/Live 7 *`):
- Deliverables = **ideação** (form) + **protótipo** (video ≤2 min) + **pitch** (slides + audio, ≤3 min). **Functional code is NOT required.** Event **remote/online**, **26–28/06/2026**; **deadline Sunday 23:59 BRT, no extension**. Prize R$75k = 5×R$15k. **Scale (Live 7): 200+ teams registered for 5 prizes** → low base rate; the only lever is focused delivery + real-client evidence. Stop quoting any "% chance" — it has no denominator; say "finalist-caliber submission".
- **Live 7 delivery rules (hard):** **Pitch format CHANGED** — no longer a free video; it must be **static PDF slides (no video, no animation) + recorded audio**, uploaded to YouTube (public/unlisted). **Protótipo = ≤2 min video** (>2 min **disqualifies**); YouTube **private link DISQUALIFIES** (test it first); **narration by a team member** is requested (so **drop the cloned-voice `public/*.mp3`, use a real human voice**); **AI may assist the video**. **≥1 mentoria is mandatory** (log mentor name + feedback). Ideação form wants a short **logo** (quality not judged), a **≤300-char summary**, and **"próximos passos"** — use it to name the ask (SEMAD-GO t0 access + OEMA-analyst validation + SFB-service/ABEMA/Fundo Amazônia); organizers said they want to **bridge** winning solutions to real development. The optional **complementary navigable link is NOT evaluated** — only the 2-min video counts.
- **Open source is the *expected model* (CAR as a DPG), not a mandatory deliverable.** ⚠️ Two rules previously treated as decisive are **NOT in the edital**: (a) "narration must be human / AI voice disqualifies" — narration is only *recommended*; (b) "no Google Earth Engine / ArcGIS" — not written anywhere. Both are prudent **best practices**, not requirements. (Dropping the repo's cloned-voice `public/*.mp3` is still sensible hygiene; avoiding GEE still aids portability — but neither is an edital gate.)
- Allowed/useful open data: MapBiomas (Col.10 = **Landsat 30 m**; the 10 m product is GEE-bound), PRODES/DETER via TerraBrasilis (**Shapefile/WFS**, not GeoPackage). SICAR ingests **shapefile/KML/GPX in SIRGAS 2000** (not GeoPackage/COG).

## Language

Product/strategy artifacts and the page are in **Brazilian Portuguese**. Match the language of the file you are editing.

## Response Quality Bar (read every session — the owner has flagged a recurring laziness pattern)

The test for any deliverable here is: **"What would a senior, perfectionist Product Owner / designer / PM build with this information?"** — then build that, the first time. This reframes what counts as an acceptable response; it is not optional polish.

- **No whack-a-mole.** Fix the *root cause and the whole class* of the problem, not just the one instance named. Grep for siblings; if the same issue exists in three files, fix three.
- **Don't lazily refuse on "missing input."** This repo is evidence-rich (`pm-role.md`, `reports/09`, `prd-outputs/`, `debate-outputs/`, `memory/ideas/`). If a skill wants structured JSONs that don't exist, *synthesize them from the real evidence* and document the synthesis + a `framing_caveat` (precedent: `memory/ideas/compadre/scores.json`, `memory/ideas/gabarito/scores.json`). Refuse only when evidence genuinely isn't there.
- **Respect the category.** The `idea-scoring` / validation skills are built for consumer B2C apps. The active product (Gabarito) is an **open-source DPG / single-buyer B2G**. Reinterpret consumer axes (WTP $/mo, viral loops, D30) into B2G equivalents (funding-path viability, institutional adoption channel, recurring operational use) and say so — never force the wrong rubric silently.
- **Ponytail laziness ≠ shallow output.** Ponytail shortens the *solution and unrequested prose*, never the *understanding* or the *completeness of an explicitly-requested artifact*. When the owner asks for thoroughness, ponytail's own rule applies: "User insists on the full version → build it, no re-arguing."
- **Self-improvement is durable, not per-turn.** When a session exposes a repeated failure mode, fix it *here* (this file is auto-loaded next session), not just in the current reply.

### Data-consistency protocol — MANDATORY whenever a fact, number, or product decision changes (added after the "I updated 4 files and declared done" miss, 27/06/2026)

A new debate / verification / decision is **not propagated** until it lives in **every** authoritative artifact. Updating `pm-role.md` + the PRD is **half the job**. The recurring laziness is stopping there. Do this, every time, as a checklist:

1. **Grep the whole repo for the stale claim BEFORE editing** — `grep -rinE "<claim>" --include=*.md --include=*.html --include=*.json .` (exclude `.git/`, `node_modules/`, `tools/`). The grep defines the scope; you do not get to guess it.
2. **Triage each hit** into: **LIVE-authoritative** (must fix) vs **immutable history** (must NOT rewrite). Immutable = debate transcripts (`debate-outputs/`), version-stamped snapshots (old `prd_*`), archived Compadre (`memory/ideas/compadre/`, `debate-materials/compadre-*`), `reports/exploration/`. Everything else is live and must be made consistent.
3. **The live-artifact checklist (touch or consciously clear each):** `README.md` · `pm-role.md` (canonical — add/refresh the dated decision block) · latest `prd-outputs/prd_*` (bump version, new file) · `memory/ideas/gabarito/scores.json` · `PIVOT-DESAFIO-02.md` · `CLAUDE.md` · the numbered `reports/` that state the fact · the **three HTML pairs** (`index`, `apresentacao`, `apresentacao-mentores` — root **and** `public/`, kept byte-identical; if a page is bundle-compiled and the change is structural, say so and flag the DesignSync regen rather than silently skipping).
4. **A new web-verification round = a new numbered `reports/NN`** (don't bury it only in `debate-outputs/`), and point the prior report to it.
5. **Close the loop:** after edits, re-run the same grep to prove no live artifact still asserts the stale claim; `diff -q` every HTML pair. Report the file list you touched **and** the ones you deliberately left (with reason) — never imply "done" without that ledger.

If you find yourself writing "I updated X and Y" with no repo-wide grep behind it, STOP — that is the whack-a-mole pattern this section exists to kill.

### Anti-fabrication guardrail — NEVER present unmeasured numbers as achieved results (added after the "Testamos em ~20 áreas de Goiás" miss, 28/06/2026)

There is **no prototype run, no backtest executed, no measured result**. Every performance number (days-of-anticipation per município, "≥2 meses mediana", "≥80% acerto", recall/kappa) is a **target/projection to be measured in the pilot** — never a past-tense fact.

- **Forbidden framing:** "Testamos…", "O resultado:…", "resultado publicado", any past tense asserting we ran a test, or a chart that reads as measured data without an unmistakable "projeção ilustrativa — não medido" label. The fine print does not cancel a headline that says "Testamos".
- **Required framing:** future/conditional — "o protótipo **é um backtest** que **vai medir**…", "**meta** de…", "**avisaria** · projeção (não medido)". This matches `pm-role.md` ("metas a medir no piloto, não resultados já cravados") and the deck's own "Honestidade" slide.
- **Geographic consistency:** pilot = **Goiás/SEMAD-GO**. Município examples MUST be Goiás (Rio Verde, Jataí, Mineiros, Anápolis, Catalão, Cristalina, Luziânia). The Claude Design bundles ship **Alagoas** placeholders (Penedo, Igreja Nova, Coruripe, Marechal Deodoro, `CAR-AL-*`) — wrong, swap to GO. **These placeholders live in the cockpit visual of THREE compiled surfaces, not just the pitch:** `pitch.html` (handled by the build trap), **`index.html` (`/`)** and **`apresentacao-mentores.html`** (hand-synced root+public pairs, no build script — grep + fix all four files on any bundle regen). When asked "did I miss anything?", grep **every** `*.html` (not only the file just touched) — that is the data-consistency protocol, and skipping it is how this exact miss happened.
- **When recompiling `pitch.html` from a DesignSync bundle, AUDIT the bundle text — do not trust it.** The designer's bundle is the source of *visuals*, not of *truthful claims*. `tools/build-pitch.cjs` carries a **sanitize map + a forbidden-string trap** (`Testamos`, `resultado publicado`, `Penedo`, `Coruripe`, `Igreja N`, `Marechal Deodoro`, `CAR-AL`, …): the build **throws** if any survive. If a new bundle reintroduces fabrications with new wording, the trap won't catch the new phrasing — re-audit the "A prova" and "O produto" slides on every bundle change and extend the map. The build is idempotent (same bundle+args → identical bytes; verify with a double-run `md5sum`).
- **Idempotency rule (owner, standing):** every deck fix lives in the build script as a literal transform, never as a one-off hand-edit to `pitch.html` that the next recompile silently reverts.
