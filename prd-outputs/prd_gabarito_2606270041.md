# Gabarito — Product Requirement Document

| Campo | Valor |
|-------|-------|
| Versão | 1.0 |
| Data | 2026-06-27 |
| Autor | AI Product Manager |
| Status | Draft |
| Produto | **Gabarito** — base de referência viva do CAR (haCARthon, Desafio 02) |
| Fontes | `pm-role.md` (P1), `index.html` (página de visão — cópia do produto), `PIVOT-DESAFIO-02.md`, `reports/01-desafio-oficial.md`, `reports/02-dominio-car.md`, `reports/06-edital-completo.md`, `reports/exploration/02-car-prepreenchido-apis.md`, `Identificacao_oportunidades.pdf` / `ideacao_prototipacao.pdf` (persona oficial Luana) |

> **Nota de pivô:** este PRD substitui o produto anterior (Compadre / Desafio 01). O workspace ainda não tem código do sistema — o único artefato implementado é a **página de visão** (`index.html`). Este documento especifica o **sistema Gabarito** a construir.

---

## 2. Resumo Executivo

O **Gabarito** é uma **base de referência viva** para o Cadastro Ambiental Rural (CAR): detecta o que mudou no território (cruzando imagem Sentinel‑2 gratuita com alertas oficiais PRODES/DETER), remapeia **apenas os talhões alterados** e entrega ao órgão estadual de meio ambiente (OEMA) um mapa de uso e cobertura do solo atualizado **com um score de confiança por talhão**, em formato aberto (GeoPackage/COG). Ele serve a **Luana** — a analista ambiental/geógrafa que segura sozinha a fila de validação de cadastros de um estado inteiro. O problema central do Desafio 02 do haCARthon é que a base de referência ("o gabarito" que confere cada declaração) leva 2–2,5 anos para ser refeita e já nasce defasada; sem base confiável, a **análise dinamizada** (automatizada) não pode ser usada e a analista cai na conferência manual (~6 imóveis/dia). **Por que agora:** o CAR foi lançado na COP30 (nov/2025) como o primeiro Bem Público Digital do governo brasileiro, com exigência estrutural de soluções **open source e agnósticas de plataforma**. **Diferencial:** somos os únicos que remapeamos só o *delta*, atribuímos confiança auditável por talhão e devolvemos a decisão (e a evidência) à analista — sem GEE, sem ArcGIS, sem lock‑in.

---

## 3. Problema (Problem Statement)

### Dores do usuário (observáveis, com evidência)
- **A base de referência envelhece sozinha.** O mapeamento de uso e cobertura do solo leva 2–2,5 anos entre licitação, classificação e ida‑e‑volta com a empresa contratada; quando entra no sistema, já está defasado. *(pm-role.md; página §3)*
- **Fila travada.** OEMAs operam com filas de dezenas de milhares de cadastros pendentes (cenário de referência: ~12 mil na fila da analista). *(persona oficial Luana — ideacao_prototipacao.pdf)*
- **Insegurança jurídica de validar no escuro.** Um "validado" errado tem peso legal e é de responsabilidade nominal da analista; em área de pressão ela não confia num mapa de 2 anos atrás, abandona a automação e abre cada imóvel à mão (~6/dia). *(página §3, §4)*
- **Fricção de ferramentas.** A analista alterna entre ~4 sistemas; o QGIS é o ambiente real de trabalho. *(persona Luana)*
- **Sobreposições difíceis de detectar** entre imóveis e com áreas protegidas. *(persona Luana; report 02 §9)*

### Lacuna de mercado
As alternativas atuais ou (a) remapeiam o estado inteiro periodicamente (caro, lento, sem priorização), ou (b) dependem de pipelines presos a **Google Earth Engine / ArcGIS** — licenças que o estado não banca e que ferem a regra open‑source do CAR DPG. Nenhuma entrega **confiança calibrada por talhão** com **revisão humana embutida** e saída no formato que o SICAR já confronta.

### Custo da inação
Cada ano de defasagem = mais um ano de análise manual, de desmatamento sem flagrante (mapa velho não pega mudança recente) e de produtor regular preso na fila. A análise dinamizada — que existe e destravaria a fila — continua inutilizável por falta de base confiável.

---

## 4. Visão & Objetivos

**Visão:** manter "o gabarito" (a base de referência do CAR) sempre no presente — viva, barata e confiável — para que a análise automatizada volte a rodar em escala e nenhum cadastro espere anos por um mapa.

**Objetivos (mensuráveis):**
1. **Reduzir o esforço de remapeamento** ao remapear apenas o *delta*: ≥ 90% da área estável de um recorte é poupada de reclassificação por ciclo (meta de protótipo: demonstrar em 1 município).
2. **Atualizar a base com rapidez:** transformar o ciclo de 2–2,5 anos em um ciclo de atualização **≤ trimestral** para áreas com mudança detectada (meta de visão; protótipo demonstra o fluxo ponta‑a‑ponta em 1 recorte).
3. **Habilitar a análise dinamizada:** ≥ X% dos talhões recebem score de confiança alto o bastante para liberar análise automática (X a calibrar no piloto; alvo inicial ≥ 60% da área).
4. **Acurácia auditável:** índice **kappa** por classe ≥ 0,75 nos talhões marcados como "alta confiança", validado contra amostra revisada por humano.
5. **Conformidade com o edital:** 100% open source, zero dependência de GEE/ArcGIS, saída em formato aberto (GeoPackage/COG).

**Não‑objetivos (exclusões explícitas):**
- **Não** substituir o SICAR nem a análise dinamizada oficial.
- **Não** tomar a decisão legal de validação — o sistema recomenda e evidencia; a analista decide.
- **Não** atender o produtor rural final (isso era o Desafio 01 / Compadre).
- **Não** fazer remapeamento de cobertura nacional em tempo real (começamos por recorte municipal/estadual).
- **Não** depender de imagem de alta resolução paga como insumo base (só refino opcional).

---

## 5. Usuários & Personas

| Campo | Luana (primária) | Coordenador da OEMA (secundária) | MGI/SFB — curador do CAR DPG (terciária) |
|-------|------------------|----------------------------------|------------------------------------------|
| Papel | Analista ambiental / geógrafa, órgão estadual (OEMA) | Gestor da fila de validação estadual | Mantenedor do CAR como Bem Público Digital |
| Necessidade #1 | Zerar a fila com segurança, sem refém de mapa velho | Throughput da análise + defensabilidade jurídica | Soluções abertas, reusáveis, sem lock‑in |
| Workaround atual | Conferência manual no QGIS (~6 imóveis/dia); 4 sistemas abertos | Licitar remapeamento periódico; aceitar base defasada | Remapeamentos estaduais isolados |
| Sucesso = | Volta a confiar na automação; fila anda | Mais validações/mês com risco controlado | Módulo aberto adotável por qualquer estado/país |
| Frequência | Diária (ferramenta de trabalho) | Semanal (acompanhamento) | Pontual (avaliação/adoção) |

**Foco deliberado:** OEMA de **alta pressão** (Amazônia ou Cerrado), onde a fila e a mudança de território doem mais.

---

## 6. User Stories & Cenários

#### US-01: Detectar onde a base envelheceu
**Como** Luana, **quero** que o sistema cruze imagem recente (Sentinel‑2) com alertas oficiais (PRODES/DETER) e me mostre **só os talhões que mudaram**, **para** não perder tempo com o que está estável.
**Critérios de aceite:**
- [ ] Dado um recorte (município) e uma janela temporal, o sistema produz uma lista de talhões com mudança detectada, cada um com data, tipo e magnitude da mudança.
- [ ] Cada talhão marcado traz a **evidência**: par de imagens (antes/depois) e o alerta oficial que o corrobora (quando houver).
- [ ] Talhões sem mudança não entram na fila de remapeamento.
**Edge cases:**
- Cobertura de nuvem na janela → usar a melhor cena disponível e sinalizar "baixa observabilidade".
- Mudança detectada por imagem **sem** alerta PRODES/DETER correspondente → entra como "mudança candidata, não corroborada" (confiança menor).
**Prioridade:** P0 · **Complexidade:** Alta

#### US-02: Remapear só o que mudou, com humano no loop
**Como** Luana, **quero** reclassificar apenas os talhões sinalizados e **corrigir ali mesmo** o que a máquina errou, **para** não refazer o estado inteiro nem aceitar classificação cega.
**Critérios de aceite:**
- [ ] A classificação (classes do Código Florestal) roda **apenas** nos talhões marcados em US-01.
- [ ] A analista revê e edita a classe de um talhão dentro do fluxo (no QGIS e/ou no painel), e a edição é registrada (autoria + timestamp).
- [ ] A correção humana realimenta o cálculo de confiança do talhão.
**Edge cases:**
- Talhão com classes mistas (ex.: parte APP, parte consolidada) → permitir subdivisão do talhão.
- Conflito entre classe declarada no CAR e classe detectada → marcar como divergência para parecer.
**Prioridade:** P0 · **Complexidade:** Alta

#### US-03: Confiar (ou não) via score por talhão
**Como** Luana, **quero** um **score de confiança por talhão** que me diga onde a automação é segura, **para** liberar a análise dinamizada onde a base é boa e revisar à mão só onde não é.
**Critérios de aceite:**
- [ ] Cada talhão da base de saída tem um score 0–100% com a métrica e a evidência que o sustentam.
- [ ] Há um corte configurável: ≥ corte → "liberar p/ análise dinamizada"; < corte → "encaminhar p/ revisão humana".
- [ ] O score é calibrado contra amostra revisada por humano (kappa reportado por classe/bioma).
**Edge cases:**
- Score alto mas em área de alerta DETER recente → rebaixar e exigir revisão (segurança jurídica).
- Amostra de calibração insuficiente para um bioma → score sai com flag "não calibrado".
**Prioridade:** P0 · **Complexidade:** Alta

#### US-04: Triagem da fila no painel do analista (cockpit)
**Como** Luana, **quero** um painel que ordene a fila de validação por mudança + score, **para** atacar primeiro o que importa e despachar em lote o que é seguro.
**Critérios de aceite:**
- [ ] O painel lista imóveis/cadastros pendentes com: status, % de mudança detectada, score da base, e ação recomendada ("liberar p/ dinamizada" / "revisar base" / "encaminhar p/ revisão humana").
- [ ] Filtrar/ordenar por município, score, presença de alerta, data da base.
- [ ] Ação em lote para o conjunto "alta confiança".
**Edge cases:**
- Imóvel com sobreposição a outro CAR ou a área protegida → destaque de sobreposição, bloqueia liberação automática.
**Prioridade:** P0 · **Complexidade:** Média

#### US-05: Exportar base + confiança em formato aberto
**Como** coordenador da OEMA, **quero** exportar a base atualizada e os scores em formato aberto, **para** alimentar a análise dinamizada do SICAR e o QGIS/PostGIS do estado.
**Critérios de aceite:**
- [ ] Exporta a base de referência em **GeoPackage** (vetor) e/ou **COG** (raster), com o score por talhão como atributo.
- [ ] Inclui metadados de proveniência (data da imagem, alerta usado, versão do modelo, autor das edições).
- [ ] Saída validável em QGIS sem plugins proprietários.
**Edge cases:**
- Exportação parcial (só talhões revisados) → permitida e marcada como "base parcial".
**Prioridade:** P0 · **Complexidade:** Média

#### US-06: Auditar a evidência de uma decisão
**Como** Luana, **quero** abrir qualquer talhão e ver imagem datada + alerta + histórico de edição, **para** sustentar juridicamente um "validado".
**Critérios de aceite:**
- [ ] Toda confiança exibida tem link para a imagem e o alerta que a embasam.
- [ ] Trilha de auditoria imutável por talhão (quem mudou o quê, quando).
**Prioridade:** P1 · **Complexidade:** Média

---

## 7. Requisitos Funcionais

| FR-ID | Área | Descrição | Input | Output | Prioridade | Dep. |
|-------|------|-----------|-------|--------|-----------|------|
| FR-001 | Ingestão | Ingerir mosaico Sentinel‑2 (Copernicus) para um recorte e janela temporal | bbox/município + intervalo de datas | Cenas/mosaico co‑registrado, com máscara de nuvem | P0 | — |
| FR-002 | Ingestão | Ingerir alertas oficiais PRODES (anual) e DETER (incrementais) | recorte + período | Vetores de alerta com data/classe | P0 | — |
| FR-003 | Ingestão | Importar base de referência atual do estado e camadas SICAR (imóveis, APP, RL, hidrografia, uso do solo) | shapefile/GeoPackage; GeoServer WMS; Conecta SICAR‑Tema (acesso OEMA) | Camadas normalizadas em PostGIS | P0 | — |
| FR-004 | Segmentação | Particionar o recorte em **talhões** (unidade atômica de mudança/score) | base de referência + imagem | Tabela de talhões com geometria | P0 | FR-001, FR-003 |
| FR-005 | Detecção de mudança | Rodar *change detection* (libs abertas) imagem×imagem e cruzar com PRODES/DETER | mosaicos t0/t1 + alertas | Talhões marcados como "mudou" (tipo, magnitude, corroborado?) | P0 | FR-001, FR-002, FR-004 |
| FR-006 | Classificação | Classificar **só** talhões marcados nas classes do Código Florestal (nativa, consolidada pré‑2008, APP, RL, hidrografia, antrópico) | talhões marcados + imagem | Classe por talhão + probabilidade | P0 | FR-005 |
| FR-007 | Revisão humana | Permitir edição de classe/geometria do talhão com registro de autoria | ação da analista | Talhão corrigido + log de auditoria | P0 | FR-006 |
| FR-008 | Confiança | Calcular score por talhão e calibrar por kappa contra amostra revisada | classe, corroboração, observabilidade, correções | Score 0–100% + flag de calibração | P0 | FR-006, FR-007 |
| FR-009 | Handoff | Recomendar ação por corte de score (liberar dinamizada / revisar / humano) | score + regras (alerta, sobreposição) | Recomendação por talhão/imóvel | P0 | FR-008 |
| FR-010 | Painel (cockpit) | Listar/filtrar/ordenar a fila de validação por mudança+score; ação em lote | base + recomendações | Fila priorizada interativa | P0 | FR-009 |
| FR-011 | Sobreposição | Detectar sobreposição entre imóveis e com áreas protegidas (TI/UC) | camadas de imóveis + protegidas | Flags de sobreposição | P1 | FR-003 |
| FR-012 | Exportação | Exportar base + score + proveniência em GeoPackage/COG | base revisada | Arquivos abertos + metadados | P0 | FR-008 |
| FR-013 | Auditoria | Trilha imutável e visualização de evidência (imagem+alerta) por talhão | eventos | Histórico auditável | P1 | FR-007 |
| FR-014 | Calibração | Gerenciar amostras de validação por bioma e reportar kappa | amostras humanas | Relatório de acurácia | P1 | FR-008 |

---

## 8. Requisitos Não‑Funcionais

| Categoria | Requisito | Alvo |
|-----------|-----------|------|
| Conformidade | Licença | Open source (OSI; **MIT ou Apache‑2.0** — confirmar exigência do edital) |
| Conformidade | Independência de plataforma | **Sem Google Earth Engine, sem ArcGIS**; apenas libs abertas |
| Portabilidade | Ambiente da OEMA | Roda em QGIS/PostGIS; CLI/serviço em contêiner (Docker) |
| Formatos | Saída | GeoPackage (vetor) + COG (raster); entrada Shapefile/GeoPackage/GeoTIFF |
| Performance | Detecção de mudança | Processar 1 município típico (~1.000–5.000 km²) em ≤ 1 ciclo noturno (batch) |
| Performance | Painel — resposta | Interações de fila < 500 ms (p95) sobre recorte municipal |
| Acurácia | Kappa (alta confiança) | ≥ 0,75 por classe no recorte do piloto |
| Escalabilidade | Recorte | Município no protótipo; arquitetura particionável por tile para escalar a estado |
| Confiabilidade | Reprodutibilidade | Pipeline determinístico e versionado (mesmo input → mesma base + proveniência) |
| Segurança | Dados | Dados públicos/abertos no protótipo; APIs Conecta só sob credencial da OEMA |
| Auditabilidade | Trilha | Log imutável de edições humanas por talhão |
| Acessibilidade | Painel | WCAG 2.1 AA; navegação por teclado; contraste conforme paleta da marca |
| i18n | Idioma | pt‑BR (UI); código/documentação com termos técnicos preservados (talhão, kappa) |
| Navegadores | Painel web | Chrome, Firefox, Safari, Edge (2 últimas versões) |

---

## 9. Modelo de Dados

**Entidades principais**
- **Recorte (AreaOfInterest):** id, geometria (município/estado), bioma, datas de processamento.
- **Talhão:** id, recorte_id, geometria, classe_atual, classe_detectada, status_mudança, score_confiança, observabilidade, versão_base. *(unidade atômica)*
- **ImóvelCAR:** codigo_car, identificador, geometria, status_sicar (ativo/pendente/...), modulo_fiscal_municipio, sobreposições[].
- **AlertaMudança:** id, talhão_id, fonte (PRODES|DETER|Sentinel‑change), data, tipo, magnitude, corroborado(bool).
- **Classificação:** talhão_id, classe (NativaVeg|Consolidada|APP|RL|Hidrografia|Antrópico), probabilidade, origem (modelo|humano), modelo_versão.
- **ScoreConfiança:** talhão_id, valor(0–100), kappa_classe, base_calibração, evidência_refs[], calibrado(bool).
- **RevisãoHumana:** id, talhão_id, analista_id, ação (edita_classe|edita_geometria|aprova|rejeita), antes, depois, timestamp.
- **BaseReferência:** id, recorte_id, versão, data, cobertura, formato_export, proveniência.
- **ItemFilaValidação:** imóvel_car, pct_mudança, score_base, recomendação (liberar|revisar_base|revisão_humana), flags (sobreposição, alerta_recente).
- **Usuário (Analista):** id, nome, oema, papel (analista|coordenador), permissões.

**Relacionamentos**
- Recorte 1:N Talhão; Recorte 1:N ImóvelCAR.
- Talhão 1:N AlertaMudança; Talhão 1:1 Classificação corrente (1:N histórico); Talhão 1:1 ScoreConfiança; Talhão 1:N RevisãoHumana.
- ImóvelCAR N:M Talhão (um imóvel cobre vários talhões; um talhão pode tocar imóveis vizinhos → base da detecção de sobreposição).
- BaseReferência 1:N Talhão (versionado).
- ItemFilaValidação 1:1 ImóvelCAR (derivado).

**Restrições‑chave**
- `codigo_car` único; classe ∈ enum do Código Florestal; score ∈ [0,100].
- RL exigida varia por bioma (Amazônia: 80% floresta / 35% cerrado / 20% campos; demais biomas 20%); área consolidada = ocupação pré‑22/07/2008 (regra de classificação/parecer).
- Talhão sempre pertence a uma versão de BaseReferência (imutabilidade por versão).

**Ciclo de vida:** Talhão criado na segmentação → marcado por mudança → (re)classificado → revisado (humano) → score calculado → publicado em BaseReferência versionada → exportado. Versões antigas são retidas (auditoria), nunca sobrescritas.

---

## 10. Design de API

> APIs internas do serviço Gabarito (REST/JSON). Integrações externas em §12. Auth interna por token de sessão da OEMA.

```
POST /recortes
Propósito: criar um recorte (município) e disparar ingestão
Auth: analista
Request: { municipio_ibge, janela: {t0, t1} }
Response: { recorte_id, status: "ingesting" }
Erros: 400 (recorte inválido), 409 (já existe)

POST /recortes/{id}/detectar-mudanca
Propósito: rodar detecção de mudança (FR-005)
Auth: analista
Response: { job_id, talhoes_marcados: <n> }
Erros: 422 (sem imagem utilizável — alta nuvem)

GET /recortes/{id}/fila?ordenar=score|mudanca&min_score=&municipio=
Propósito: fila de validação priorizada (US-04/FR-010)
Response: [ { imovel_car, pct_mudanca, score_base, recomendacao, flags[] } ]

GET /talhoes/{id}
Propósito: detalhe + evidência (US-06)
Response: { geometria, classe, score, evidencia: { img_antes, img_depois, alerta }, historico[] }

PATCH /talhoes/{id}
Propósito: edição humana de classe/geometria (FR-007)
Auth: analista
Request: { classe?, geometria?, nota? }
Response: { talhao atualizado, score_recalculado }
Erros: 403 (sem permissão), 409 (versão de base divergente)

POST /recortes/{id}/exportar
Propósito: exportar base + score (FR-012)
Request: { formato: "gpkg"|"cog", escopo: "completo"|"revisado" }
Response: { url_download, proveniencia }
```

---

## 11. Requisitos de UI/UX

- **Telas principais:**
  1. **Cockpit / Fila de validação** — a tela‑herói (é o painel da seção 2 da página de visão): lista priorizada por mudança+score, com ações "Liberar p/ análise dinamizada" e "Encaminhar p/ revisão humana".
  2. **Mapa do recorte** — camadas (vegetação nativa, área consolidada, hidrografia, mudança recente, imóvel CAR) com a legenda = paleta da marca; talhões coloridos por score.
  3. **Detalhe do talhão** — imagem antes/depois, alerta, classe, score, edição inline, histórico.
  4. **Exportação** — escolha de formato e escopo + proveniência.
  5. **Relatório de acurácia/calibração** — kappa por classe/bioma.
- **Fluxo crítico (entrada → valor):** abrir cockpit → ordenar por score → liberar em lote os de alta confiança → abrir os de baixa confiança → conferir evidência → corrigir classe → exportar base. **Meta: triar um lote em ≤ 3 cliques por imóvel de alta confiança.**
- **Padrões de interação:** atualização do score em tempo real após edição; seleção em lote; integração de ida‑e‑volta com QGIS (camadas abertas no formato nativo).
- **Responsivo:** desktop‑first (ferramenta de trabalho em estação com QGIS); ≥ 1280px alvo; degradar para 768px sem perder a fila.
- **Acessibilidade:** WCAG AA; navegação por teclado na fila; contraste validado; a cor nunca é o único portador de informação (score também em texto/ícone).
- **Marca:** Spectral (títulos) + Hanken Grotesk (texto); paleta terra+carta (Mata #25382A, Nativa #5F8A55, Consolidada #C9A86A, Hidro #5E8CA8, Trigo/confiável #D6A23E, Mudança #C0573B).

---

## 12. Dependências & Integrações

| Dependência | Tipo | Propósito | Fallback |
|-------------|------|-----------|----------|
| Sentinel‑2 / Copernicus | Dado aberto | Imagem para detecção de mudança e classificação | Landsat (USGS) como alternativa aberta |
| PRODES / DETER (INPE) | Dado aberto | Alertas oficiais de desmatamento/mudança | MapBiomas Alerta (aberto) como corroboração secundária |
| SICAR — shapefiles por município | Dado aberto | Polígonos de imóveis, APP, RL, hidrografia, uso do solo | GeoServer WMS do SICAR |
| Conecta GOV.BR — SICAR‑Tema / SICAR‑Imóvel | API (só órgão público) | Camadas e dados de imóvel atualizados | Download público de shapefiles (sem credencial) |
| Base INCRA — módulo fiscal por município | Dado aberto | Calcular obrigações de APP/RL por porte | Tabela estática Embrapa/INCRA |
| QGIS / PostGIS / GDAL | Lib aberta | Processamento e visualização geoespacial | — (núcleo do stack) |
| Bibliotecas de change detection/ML abertas (ex.: rasterio, scikit‑learn, segment models open) | Lib aberta | Detecção e classificação | — |

> **Restrição dura:** as APIs do Conecta exigem que o consumidor seja **órgão público** (a própria OEMA). No protótipo do haCARthon, usar **dados abertos** (shapefiles/WMS/Sentinel/PRODES/DETER) que não exigem convênio.

---

## 13. Estratégia de Release

- **MVP (protótipo do haCARthon):** pipeline ponta‑a‑ponta em **1 município** de OEMA de alta pressão — FR-001..FR-010 + FR-012, com o **cockpit** funcionando e a exportação aberta. Demonstração de 3 minutos: "detecta → remapeia o delta → score → libera dinamizada / encaminha humano → exporta".
- **Fase 2:** sobreposições (FR-011), auditoria/evidência completa (FR-013), calibração por bioma (FR-014), integração Conecta sob credencial da OEMA, escala para o estado por tiling.
- **Fase 3:** múltiplos estados/biomas; loop de aprendizado a partir das correções humanas; pacote de adoção DPG (documentação para outros países).
- **Feature flags:** integração Conecta; ação em lote; refino com imagem de alta resolução.
- **Rollout:** piloto com **uma OEMA** (recorte de município) → expansão por município → estado.

---

## 14. Métricas de Sucesso

| Métrica | Definição | Alvo | Como medir |
|---------|-----------|------|-----------|
| Aquisição | OEMAs/estados em piloto | ≥ 1 (haCARthon) → 3 (fase 2) | Convênios/pilotos firmados |
| Engajamento | Talhões triados via cockpit por analista/dia | ≥ 10× a linha de base manual (de ~6 imóveis/dia) | Telemetria do painel |
| Eficiência | % da área poupada de remapeamento (delta‑only) | ≥ 90% | Razão área marcada / área total do recorte |
| Qualidade | Kappa por classe nos talhões de alta confiança | ≥ 0,75 | Amostra revisada por humano (FR-014) |
| Retenção | Uso recorrente do cockpit por ciclo de atualização | Uso em ≥ 2 ciclos consecutivos | Telemetria |
| Resultado de negócio | Redução do tempo de atualização da base | De 2–2,5 anos → ≤ trimestral (áreas com mudança) | Tempo entre detecção e base publicada |

---

## 15. Riscos & Mitigações

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| **Score mal calibrado** libera automação onde não devia (erro com peso jurídico) | Média | Alto | Kappa por classe/bioma + corte conservador + rebaixa automática em alerta/sobreposição + revisão humana |
| **Generalização entre biomas** (modelo de classificação não transfere) | Alta | Alto | Começar por 1 bioma/recorte; calibração por bioma; flag "não calibrado" |
| **Cobertura de nuvem** degrada a detecção | Alta | Médio | Composição multi‑temporal; flag de observabilidade; fallback Landsat |
| **Acesso a dados/APIs** (Conecta só p/ órgão público; base estadual heterogênea) | Média | Médio | Usar dados abertos no protótipo; integração Conecta só na fase com OEMA |
| **Validação do handoff** com a análise dinamizada não confirmada | Média | Alto | Incluir no *ask* do piloto: acesso à interface da análise dinamizada |
| **Edital** (licença/entregáveis não confirmados) | Média | Médio | Adotar Apache‑2.0 desde já; preparar repo+pitch+demo; confirmar regras na plataforma ENAP |
| **Timeline do hackathon** (26–28/jun, 3 dias) | Alta | Alto | Escopo MVP = 1 município, dados abertos, stack pronta (QGIS/PostGIS/GDAL) |
| **Confiança da analista** (dashboard que ninguém usa) | Média | Alto | Empatia+autoridade: toda confiança vem com evidência; roda no QGIS dela |

---

## 16. Questões em Aberto

| Questão | Responsável | Prazo | Status |
|---------|-------------|-------|--------|
| Licença open source exigida pelo edital (MIT/Apache/GPL?) e momento (inscrição vs. entrega) | Time / org. haCARthon | Antes da entrega | Aberto |
| Lista exata de entregáveis (repo, vídeo, pitch, doc) e prazo interno | Time / ENAP | Durante a maratona | Aberto |
| Qual OEMA/recorte de município usar no protótipo | Time | Dia 1 | Aberto |
| Como é exatamente o input/output da "análise dinamizada" oficial (para desenhar o handoff) | Org. CAR / OEMA | Piloto | Aberto |
| Definição operacional de "talhão" (grade fixa? segmentação por imagem? por polígono CAR?) | Eng. geo | Dia 1 | Aberto |
| Corte de score para liberar automação (valor + regra por bioma) | Eng. + analista | Piloto | Aberto |
| Métrica de acurácia aceita pela banca além de kappa (ex.: F1 por classe) | Time | Antes do pitch | Aberto |

---

## 17. Apêndice

**Glossário**
- **Base de referência ("gabarito"):** mapa de uso e cobertura do solo usado pela OEMA para conferir cada declaração do CAR.
- **Análise dinamizada:** análise automatizada de cadastros do CAR usada pelos estados; depende de base confiável.
- **Talhão:** unidade espacial atômica de mudança/classificação/score.
- **APP:** Área de Preservação Permanente (faixas fixadas pela Lei 12.651/2012, Art. 4º).
- **Reserva Legal (RL):** % de vegetação nativa por imóvel, variável por bioma (Art. 12).
- **Área consolidada:** ocupação rural anterior a 22/07/2008 (regras especiais por módulo fiscal, Art. 61‑A).
- **Módulo fiscal:** unidade de medida agrária por município (base INCRA); define porte e obrigações.
- **Kappa (Cohen):** índice de concordância usado para acurácia de classificação.
- **PRODES/DETER:** sistemas oficiais do INPE de desmatamento anual / alertas.
- **GeoPackage / COG:** formatos geoespaciais abertos (vetor / raster otimizado para nuvem).
- **OEMA:** Órgão Estadual de Meio Ambiente.

**Materiais‑fonte**
- `pm-role.md`, `index.html` (página de visão), `PIVOT-DESAFIO-02.md`.
- `reports/01-desafio-oficial.md` (os 3 desafios; Desafio 02), `reports/02-dominio-car.md` (domínio/Código Florestal), `reports/06-edital-completo.md` (regras), `reports/exploration/02-car-prepreenchido-apis.md` (datasets/APIs abertos).
- Persona oficial Luana: `Identificacao_oportunidades.pdf`, `ideacao_prototipacao.pdf`.

**Fontes de dados abertas (eng.)**
- Sentinel‑2/Copernicus; PRODES/DETER (INPE); SICAR shapefiles por município (`car.gov.br/publico/municipios/downloads`); GeoServer WMS (`geoserver.car.gov.br`); Conecta SICAR‑Tema (`gov.br/conecta/catalogo`); Base dos Dados — CAR.

**Resumo competitivo:** alternativas = remapeamento estadual periódico (caro/lento) ou pipeline preso a GEE/ArcGIS (fere edital). Gabarito = delta‑only + score por talhão + revisão humana + 100% aberto.

**Arquitetura (texto):**
`Sentinel‑2 + PRODES/DETER + base estadual/SICAR → [PostGIS] → segmentação em talhões → change detection (delta) → classificação dirigida (Código Florestal) → revisão humana (QGIS/painel) → score de confiança (kappa) → handoff (dinamizada × humano) → export GeoPackage/COG + proveniência`.
