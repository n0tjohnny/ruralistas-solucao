#!/usr/bin/env node
// Compila painel.html (+ public/) a partir do bundle Claude Design "Gabarito - Painel do
// Analista (protótipo)" e do runtime DCLogic (support.js). O painel é um app interativo
// (React/DCLogic): o bundle passa por ENRICH (conteúdo que o designer não tinha) + SANITIZE
// (correções) + TRAP (strings proibidas) + ASSERTS — tudo literal e idempotente. A correção e
// o enriquecimento moram AQUI (transform), nunca como edição à mão do .html gerado, que o
// próximo re-pull do bundle reverteria silenciosamente. Mesma filosofia de build-pitch.cjs.
//
// Uso:  node tools/build-painel.cjs
// Fontes (tools/, gitignored-mas-force-committed):
//   painel-bundle.dc.json  → { content } cru do DesignSync get_file (.dc.html original)
//   painel-support.js      → runtime DCLogic, NÃO editar (é o support.js gerado)
// Saídas (root + public, byte-idênticas): painel.html, support.js
// Idempotente: node tools/build-painel.cjs && md5sum painel.html && node tools/build-painel.cjs && md5sum painel.html
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');                 // sem caminho absoluto hardcoded

let html = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/painel-bundle.dc.json'), 'utf8')).content;
const support = fs.readFileSync(path.join(ROOT, 'tools/painel-support.js'), 'utf8');

// helper: troca literal que FALHA se o âncora sumiu (re-pull mudou o bundle → revisar aqui).
function must(from, to, expect) {
  const n = html.split(from).length - 1;
  if (n === 0) throw new Error(`build-painel: âncora não encontrado → "${from.slice(0,60)}…" (bundle mudou?)`);
  if (expect != null && n !== expect) throw new Error(`build-painel: âncora "${from.slice(0,40)}…" apareceu ${n}× (esperado ${expect})`);
  html = html.split(from).join(to);
}

// ════════════════════ ENRICH ════════════════════
// Por quê (feedback do dono, 28/06): o analista põe o NOME dele na decisão. O bundle do
// designer mostrava só um parágrafo "reco" — não dizia, por item, em linguagem simples,
// O QUE MUDOU e O QUE ESTÁ ERRADO. Aqui cada caso ganha três respostas que o analista lê de
// cima a baixo: (1) O que mudou · (2) Por que entrou na fila / o que pode estar errado [reco] ·
// (3) O que você assina. E a etiqueta da fila passa a nomear o problema (changeKind), não "delta".
// Conteúdo ilustrativo (o painel inteiro é "dados ilustrativos (Goiás)"); sem apóstrofo p/ não
// quebrar a string JS de aspas simples.

// (1) "O que mudou" por caso — chave = id do CAR (âncora único por talhão).
const MUDOU = {
  'CAR‑GO‑52218‑7':  'Era vegetação nativa na base de 2023. A imagem de 14/03/26 mostra solo exposto: houve supressão de nativa recente, sem autorização registrada no CAR.',
  'CAR‑GO‑48091‑4':  'Há um sinal de mudança na borda do talhão, mas a imagem de 11/03 está com 38% de nuvem e a classe está fora da calibração. Não dá para afirmar com segurança.',
  'CAR‑GO‑51120‑12': 'Era vegetação nativa na base de 2022; a imagem de 09/03/26 mostra pastagem. Conversão de nativa para pasto, confirmada pelo PRODES 2025.',
  'CAR‑GO‑49370‑8':  'Houve supressão dentro da faixa de 30 m da margem do rio, que é Área de Preservação Permanente (APP). A base de 2023 ainda mostra vegetação nessa faixa.',
  'CAR‑GO‑50442‑3':  'Não dá para saber ainda: as três últimas passagens do Sentinel-2 vieram totalmente encobertas por nuvem. Sem imagem válida, não há delta para medir.',
  'CAR‑GO‑53310‑2':  'Nada mudou desde a base de 2023. A cobertura está estável, sem sinal de supressão ou conversão.',
  'CAR‑GO‑47815‑5':  'Área consolidada estável desde o t0. Nenhuma mudança relevante no período.',
  'CAR‑GO‑46002‑1':  'Sem mudança desde a base de 2022. Cobertura estável no período.',
  'CAR‑GO‑54127‑9':  'Nada mudou no período e a confiança está alta. Apta a liberar com trilha.',
};
for (const [car, mudou] of Object.entries(MUDOU)) {
  must(`car:'${car}',`, `car:'${car}', mudou:'${mudou}',`, 1);
}

// (3) "O que você assina" — derivado da ação primária (mapa no próprio componente, sem dado por-caso).
const SIGN = "({notificar:'o auto de notificação ao produtor, com a trilha datada (imagem + alerta + base) anexada como prova. É o seu nome no ato.',liberar:'que o talhão está regular e pode seguir, com recibo auditável anexado à análise dinamizada. É o seu nome no ato.',revisar:'nada ainda: o caso vai para fotointerpretação manual antes de qualquer decisão.',reagendar:'nada ainda: o sistema aguarda a próxima imagem de céu limpo para reavaliar.'})[sel.primary.action] || ''";
must('decideP: ()=>this.decide(sel.primary.action),',
     `selSign: ${SIGN},\n        decideP: ()=>this.decide(sel.primary.action),`, 1);

// (etiqueta da fila) — nomear o problema em vez de "delta · t0 2023".
must('tagsText:c.tagsText,', 'tagsText:(c.changeKind||c.tagsText),', 1);

// (template) — substitui o bloco "recomendação" único por: O que mudou + recomendação + Você assina.
const RECO_OLD =
  '<!-- recomendação -->\n          <div style="margin:16px 20px 0; padding:14px 16px; background:{{ recoBg }}; border-left:3px solid {{ recoBd }}; border-radius:0 10px 10px 0;">\n            <p style="font-size:10px; letter-spacing:0.8px; text-transform:uppercase; color:{{ recoBd }}; font-weight:800; margin:0 0 7px;">{{ recoTag }}</p>\n            <p style="font-size:14px; line-height:1.5; margin:0; color:#3A3122;">{{ selected.reco }}</p>\n          </div>';
const RECO_NEW =
  '<!-- o que mudou (linguagem simples) -->\n          <div style="padding:16px 20px 0;">\n            <p style="font-size:10px; letter-spacing:1px; text-transform:uppercase; color:#8A7B63; font-weight:700; margin:0 0 6px;">O que mudou neste talhão</p>\n            <p style="font-size:14.5px; line-height:1.5; margin:0; color:#2E2519; font-weight:600;">{{ selected.mudou }}</p>\n          </div>\n\n          <!-- por que entrou na fila / o que pode estar errado + o que você assina -->\n          <div style="margin:14px 20px 0; padding:14px 16px; background:{{ recoBg }}; border-left:3px solid {{ recoBd }}; border-radius:0 10px 10px 0;">\n            <p style="font-size:10px; letter-spacing:0.8px; text-transform:uppercase; color:{{ recoBd }}; font-weight:800; margin:0 0 7px;">{{ recoTag }}</p>\n            <p style="font-size:13.5px; line-height:1.5; margin:0; color:#3A3122;">{{ selected.reco }}</p>\n            <div style="margin-top:11px; padding-top:11px; border-top:1px dashed rgba(138,123,99,0.4); display:flex; gap:8px; align-items:flex-start;">\n              <span style="flex:none; width:16px; height:16px; border-radius:5px; background:#D6A23E; color:#2A2008; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800;">&#9998;</span>\n              <p style="font-size:12px; line-height:1.45; margin:0; color:#5A4F3D;"><strong style="color:#2E2519;">Você assina:</strong> {{ selSign }}</p>\n            </div>\n          </div>';
must(RECO_OLD, RECO_NEW, 1);

// ════════════════════ SANITIZE ════════════════════
// 1+2. Anti-circularidade (council/dealbreaker + backtest-recipe.md §4-6): antecipação é medida
//      vs a ATUALIZAÇÃO DA BASE, não "vs PRODES". PRODES/DETER = verdade independente de rótulo.
// 3+4. Anti-fabricação: nº de antecipação é PROJEÇÃO; tamanho da fila (12.480) é EXEMPLO de mockup.
const SANITIZE = [
  ['dias de antecipação vs PRODES', 'dias de antecipação vs atualização da base · projeção'],
  ['<span>Base de referência atualizaria</span><span>PRODES anual</span>',
   '<span>Base de referência atualizaria</span><span>só na consolidação anual</span>'],
  ['</strong> na fila</div>', '</strong> na fila · exemplo</div>'],
];
for (const [from, to] of SANITIZE) {
  if (!html.includes(from)) { if (!html.includes(to)) throw new Error(`SANITIZE: nem origem nem destino p/ "${from.slice(0,42)}…"`); continue; }
  html = html.split(from).join(to);
}

// ════════════════════ TRAP (rede contra re-pull que reintroduza fabricação/AL/circularidade) ═══
const FORBIDDEN = [
  /vs PRODES\b/, /PRODES anual/,
  /Testamos/, /resultado publicado/, /a gente avisou/,
  /Penedo/, /Coruripe/, /Igreja Nova/, /Marechal Deodoro/, /CAR-AL/, /Alagoas/,
  /aprova(r)? autom[aá]tico/i, /aprova sozinho/i, /fiscal ambiental/i,
];
for (const re of FORBIDDEN) { const m = html.match(re); if (m) throw new Error(`TRAP: string proibida no painel: "${m[0]}"`); }

// ════════════════════ ASSERTS (o enrich+conserto precisam ESTAR lá) ═══
const MUST = [
  'O que mudou neste talhão', '{{ selected.mudou }}', '{{ selSign }}', 'Você assina:',   // enrich
  'dias de antecipação vs atualização da base · projeção',                               // anti-circ
  '<span>Base de referência atualizaria</span><span>só na consolidação anual</span>',
  '</strong> na fila · exemplo</div>', 'nunca contra o t0', 'dados ilustrativos (Goiás)', // anti-fab
  '<x-dc>', 'data-dc-script', './support.js',                                             // app íntegro
];
for (const s of MUST) { if (!html.includes(s)) throw new Error(`ASSERT: faltou no painel: "${s}"`); }
if ((html.match(/ mudou:'/g) || []).length !== 9) throw new Error('ASSERT: esperava 9 campos mudou: injetados');

// ════════════════════ ESCRITA (root + public, byte-idênticas) ═══
for (const [rel, data] of [['painel.html', html], ['public/painel.html', html], ['support.js', support], ['public/support.js', support]]) {
  fs.writeFileSync(path.join(ROOT, rel), data);
}
console.log('build-painel: OK ·', html.length, 'bytes · enrich 9 casos + 1 mapa-assina + etiqueta + template · sanitize', SANITIZE.length, '· trap', FORBIDDEN.length, '· asserts', MUST.length);
