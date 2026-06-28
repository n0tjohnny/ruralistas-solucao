#!/usr/bin/env node
// Compila painel.html (+ public/) a partir do bundle Claude Design "Gabarito - Painel do
// Analista (protótipo)" e do runtime DCLogic (support.js). Diferente do pitch, o painel é um
// app interativo (React/DCLogic): o bundle é shipado QUASE verbatim — só passa por um
// SANEAMENTO literal idempotente + um TRAP de strings proibidas. Mesma filosofia de
// build-pitch.cjs: a correção mora aqui (transform), nunca como edição à mão que o próximo
// re-pull do bundle reverte silenciosamente.
//
// Uso:  node tools/build-painel.cjs
// Fontes (versionadas em tools/, gitignored-mas-force-committed):
//   tools/painel-bundle.dc.json  → { content } cru do DesignSync get_file (.dc.html original)
//   tools/painel-support.js      → runtime DCLogic, NÃO editar (é o support.js gerado)
// Saídas (root + public, byte-idênticas): painel.html, support.js
//
// Idempotente: mesma fonte → mesmos bytes. Verifique com:  node tools/build-painel.cjs && md5sum painel.html && node tools/build-painel.cjs && md5sum painel.html
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');           // sem caminho absoluto hardcoded

const bundle = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/painel-bundle.dc.json'), 'utf8')).content;
const support = fs.readFileSync(path.join(ROOT, 'tools/painel-support.js'), 'utf8');

// ── SANEAMENTO (literal split/join = idempotente) ─────────────────────────────
// Por que cada troca existe (auditável):
//  1+2. Anti-circularidade (council/dealbreaker + backtest-recipe.md §4–6): a antecipação é
//       medida vs a ATUALIZAÇÃO DA BASE de referência, não "vs PRODES". O PRODES/DETER é a
//       VERDADE INDEPENDENTE de rotulagem — nunca o baseline que se corre para bater. O bundle
//       do designer enquadrava "vs PRODES" e equiparava base==PRODES; a narração já estava certa.
//  3.   Anti-fabricação: o nº de antecipação é PROJEÇÃO (não medido) — marca explícita.
//  4.   Anti-fabricação: o tamanho da fila (12.480) é dado de mockup — marca "exemplo"
//       (o rodapé já diz "dados ilustrativos (Goiás)", mas o guardrail exige marca por-número).
const SANITIZE = [
  ['dias de antecipação vs PRODES',
   'dias de antecipação vs atualização da base · projeção'],
  ['<span>Base de referência atualizaria</span><span>PRODES anual</span>',
   '<span>Base de referência atualizaria</span><span>só na consolidação anual</span>'],
  ['</strong> na fila</div>',
   '</strong> na fila · exemplo</div>'],
];

let html = bundle;
for (const [from, to] of SANITIZE) {
  if (!html.includes(from)) {
    // tolera fonte já-corrigida (não falha), mas avisa: o bundle pode ter mudado de wording
    if (!html.includes(to)) throw new Error(`SANITIZE: nem origem nem destino encontrados p/ "${from.slice(0,42)}…" — o bundle mudou, reveja o mapa.`);
    continue;
  }
  html = html.split(from).join(to);
}

// ── TRAP de strings proibidas (anti-fabricação + anti-circularidade + placeholders AL) ────────
// O bundle do designer pode (em re-pulls futuros) reintroduzir fabricação/Alagoas com novo
// texto. Este trap é a rede: o build QUEBRA antes de publicar qualquer um destes.
const FORBIDDEN = [
  /vs PRODES\b/, /PRODES anual/,                                   // circularidade
  /Testamos/, /resultado publicado/, /a gente avisou/,            // resultados fabricados
  /Penedo/, /Coruripe/, /Igreja Nova/, /Marechal Deodoro/, /CAR-AL/, /Alagoas/, // placeholders AL
  /aprova(r)? autom[aá]tico/i, /aprova sozinho/i, /fiscal ambiental/i, // posicionamento errado
];
for (const re of FORBIDDEN) {
  const m = html.match(re);
  if (m) throw new Error(`TRAP: string proibida no output do painel: "${m[0]}" — corrija a fonte/sanitize antes de publicar.`);
}

// ── ASSERÇÕES POSITIVAS (o conserto precisa ESTAR lá) ─────────────────────────
const MUST = [
  'dias de antecipação vs atualização da base · projeção',
  '<span>Base de referência atualizaria</span><span>só na consolidação anual</span>',
  '</strong> na fila · exemplo</div>',
  'nunca contra o t0',                       // anti-circularidade explícita no rodapé do painel
  'dados ilustrativos (Goiás)',              // disclaimer global
  '<x-dc>', 'data-dc-script',                // o app interativo continua íntegro
  './support.js',                            // referência ao runtime
];
for (const s of MUST) {
  if (!html.includes(s)) throw new Error(`ASSERT: faltou no output do painel: "${s}"`);
}

// ── ESCRITA (root + public, byte-idênticas) ───────────────────────────────────
const targets = [
  ['painel.html', html],
  ['public/painel.html', html],
  ['support.js', support],
  ['public/support.js', support],
];
for (const [rel, data] of targets) {
  fs.writeFileSync(path.join(ROOT, rel), data);
}

console.log('build-painel: OK');
console.log('  painel.html      ', html.length, 'bytes');
console.log('  support.js       ', support.length, 'bytes');
console.log('  saneamentos      ', SANITIZE.length, '· trap', FORBIDDEN.length, '· asserts', MUST.length);
