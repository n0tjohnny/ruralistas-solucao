# Gabarito

**One-liner:** Base de referência *viva* para o CAR — detecta o que mudou no território (Sentinel-2 + PRODES/DETER sobre um t0 = base estadual ou MapBiomas Col.10), remapeia só os talhões alterados e emite um **score de confiança por talhão auditável** que roteia a análise dinamizada: libera automático onde a confiança é alta, manda pro humano onde é baixa.

**Contexto:** Solução para o haCARthon (ENAP/MGI/FBDS/Impact Hub; financ. Noruega) — **Desafio 02** (acesso a dados geoespaciais do CAR). Open source + agnóstico de plataforma (boa prática, não requisito do edital — `reports/09`). Persona primária: **Luana** (analista de OEMA estadual). Um único artefato (delta + score por talhão) serve **três públicos**: analista (ordena a fila), análise dinamizada/SICAR (automatiza com trilha de auditoria), produtor/RT (corrige a declaração antes da notificação).

**Status:** scoring (em validação) — pivô de Compadre/Desafio 01 (ver `PIVOT-DESAFIO-02.md`).
**monetization_validated:** false — DPG/open source; pagador provável = ente público (SFB opera o OPEX da dinamizada) ou edital (Fundo Amazônia/BNDES/Noruega). Analista e produtor nunca pagam.

**Tese de valor (corrigida em `reports/09` e confirmada no debate `debate_output_tese-tecnico-operacional_2606271430.md`):** o fosso é **técnico-operacional, não econômico**. A tese "só-CAPEX/sem-OPEX" foi refutada (MapBiomas anual+gratuito e PRODES/DETER contínuo+gratuito já são camadas custeadas por terceiros). O fosso real e inédito = **fusão regulatória por talhão**: declaração do CAR × delta sub-anual × classes do Código Florestal × decisão de liberação auditável. Frescor e confiança-por-parcela isolados são **commodity** (USGS/NASA, dataset global de 3,17 bi de polígonos com raster de confiança, DETER diário).

Fontes de evidência: `pm-role.md`, `reports/09-verificacao-dados-2026.md`, `prd-outputs/prd_gabarito_2606271400.md`, `debate-outputs/` (5 debates, esp. `debate_output_tese-tecnico-operacional_2606271430.md`).
