#!/usr/bin/env node
// Compila painel.html (+ public/) a partir do bundle Claude Design "Gabarito - Painel do
// Analista (protótipo) v2" + o runtime DCLogic (support.js). App interativo (React/DCLogic).
//
// O bundle v2 já traz nativamente: explicação por talhão ("o que mudou"), fila Concluídos,
// rodapé de decisão fixo, "Você assina", antecipação acima da dobra, comparador antes/depois
// (wipe) com imagem real, estados de nuvem. Por isso o build é enxuto:
//   IMAGERY  — repõe as imagens ilustradas por Sentinel-2 REAL (public/assets/sat/, geradas
//              por tools/fetch-satellite.cjs · EOX Sentinel-2 cloudless 2018/2024).
//   SANITIZE — anti-fabricação (nada de resultado medido apresentado como fato).
//   TRAP     — derruba o build se string proibida (geografia errada, fabricação, asset antigo).
//   ASSERTS  — garante que imagem real + UI crítica + marcadores de honestidade estão presentes.
// Correção mora AQUI (transform idempotente), nunca como edição à mão do .html gerado.
//
// Uso:  node tools/build-painel.cjs        Idempotente: rode 2× e compare md5sum.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

let html = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/painel-bundle.dc.json'), 'utf8')).content;
const support = fs.readFileSync(path.join(ROOT, 'tools/painel-support.js'), 'utf8');

function must(from, to, expect) {
  const n = html.split(from).length - 1;
  if (n === 0) throw new Error(`build-painel: âncora não encontrado → "${from.slice(0,72)}…" (bundle mudou?)`);
  if (expect != null && n !== expect) throw new Error(`build-painel: âncora "${from.slice(0,46)}…" apareceu ${n}× (esperado ${expect})`);
  html = html.split(from).join(to);
}

// ════════════════ IMAGERY — Sentinel-2 REAL por talhão ════════════════
// Cada caso aponta para a sua própria cena real (coordenadas reais em Goiás). Os 3 casos com
// comparador antes/depois (rv7/jat12/min8) ganham par base(2018)+hoje(2024) co-registrado —
// duas datas REAIS do Sentinel-2, nunca uma "base" inventada.
const P = id => `assets/sat/${id}-hoje.jpg`, B = id => `assets/sat/${id}-base.jpg`;
const ROWS = [
  ['rv7:  { img:A,  baseImg:B,',  `rv7:  { img:'${P('rv7')}', baseImg:'${B('rv7')}',`],
  ['jat12:{ img:P,  baseImg:B,',  `jat12:{ img:'${P('jat12')}', baseImg:'${B('jat12')}',`],
  ['min8: { img:A,  baseImg:B,',  `min8: { img:'${P('min8')}', baseImg:'${B('min8')}',`],
  ["cris4:{ img:R,  baseImg:'',", `cris4:{ img:'${P('cris4')}', baseImg:'',`],
  ["ari3: { img:F,  baseImg:'',", `ari3: { img:'${P('ari3')}', baseImg:'',`],
  ["luz2: { img:F,  baseImg:'',", `luz2: { img:'${P('luz2')}', baseImg:'',`],
  ["cat5: { img:F2, baseImg:'',", `cat5: { img:'${P('cat5')}', baseImg:'',`],
  ["ita1: { img:R,  baseImg:'',", `ita1: { img:'${P('ita1')}', baseImg:'',`],
  ["for9: { img:F,  baseImg:'',", `for9: { img:'${P('for9')}', baseImg:'',`],
];
for (const [from, to] of ROWS) must(from, to, 1);
must("return m[sel.id] || { img:F, baseImg:''", `return m[sel.id] || { img:'${P('for9')}', baseImg:''`, 1);
// remove o bloco de consts das imagens ilustradas (agora sem uso) — robusto a espaços
{
  const i = html.indexOf("    const A='assets/sat-A-hoje.png'");
  const j = html.indexOf("const PARCEL=", i);
  if (i < 0 || j < 0) throw new Error('build-painel: bloco de const de assets não encontrado');
  html = html.slice(0, i) + html.slice(j);
}
// a cena default da fila (sem caso aberto) também era ilustrada → cena real estável
must("scene:{ img:'assets/sat-fields.png', baseImg:''", "scene:{ img:'assets/sat/luz2-hoje.jpg', baseImg:''", 1);

// ════════════════ LAYOUT — nada crítico abaixo da dobra (850px) ════════════════
// Aperta o ritmo vertical do painel creme para que "o que mudou" + antecipação + veredito +
// as 4 evidências caibam acima do rodapé de decisão, sem scroll (queixa direta do dono).
const TIGHTEN = [
  ['padding:17px 20px 14px; border-bottom:1px solid #E4D8BD;', 'padding:13px 20px 11px; border-bottom:1px solid #E4D8BD;'],
  ['padding:15px 20px 0;', 'padding:12px 20px 0;'],
  ['font-size:14px; line-height:1.5; margin:0; color:#2E2519; font-weight:600;', 'font-size:13.5px; line-height:1.45; margin:0; color:#2E2519; font-weight:600;'],
  ['margin:14px 20px 0; display:flex; align-items:center; gap:13px; padding:11px 14px;', 'margin:11px 20px 0; display:flex; align-items:center; gap:12px; padding:9px 13px;'],
  ["font-family:'Spectral',serif; font-size:30px; font-weight:700; color:#9A5A1E;", "font-family:'Spectral',serif; font-size:26px; font-weight:700; color:#9A5A1E;"],
  ['margin:14px 20px 0; padding:13px 15px; background:{{ recoBg }};', 'margin:11px 20px 0; padding:11px 14px; background:{{ recoBg }};'],
  ['font-size:13px; line-height:1.5; margin:0; color:#3A3122;', 'font-size:12.5px; line-height:1.45; margin:0; color:#3A3122;'],
  ['padding:16px 20px 18px;', 'padding:11px 20px 13px;'],
  ['grid-template-columns:1fr 1fr; gap:8px;', 'grid-template-columns:1fr 1fr; gap:7px;'],
  ['background:#FCF8EF; border:1px solid #E8DDC4; border-radius:9px; padding:9px 11px;', 'background:#FCF8EF; border:1px solid #E8DDC4; border-radius:9px; padding:8px 10px;'],
  ['flex:none; border-top:1px solid #E4D8BD; background:#F4EEDF; padding:12px 20px 14px;', 'flex:none; border-top:1px solid #E4D8BD; background:#F4EEDF; padding:10px 20px 12px;'],
  // painel mais alto + rodapé de decisão mais compacto (ganha ~22px → as 4 evidências cabem)
  ['right:14px; top:14px; bottom:14px; width:382px;', 'right:14px; top:10px; bottom:10px; width:382px;'],
  ['gap:8px; width:100%; padding:13px; border:none; border-radius:10px;', 'gap:8px; width:100%; padding:11px; border:none; border-radius:10px;'],
  ['flex:1; padding:10px; border:1.5px solid #D8C9A8;', 'flex:1; padding:9px; border:1.5px solid #D8C9A8;'],
  ['display:flex; gap:8px; margin-top:9px;', 'display:flex; gap:8px; margin-top:7px;'],
  ['display:flex; gap:8px; align-items:flex-start; margin-bottom:10px;', 'display:flex; gap:8px; align-items:flex-start; margin-bottom:8px;'],
  ['font-size:10px; color:#A2937A; margin:9px 0 0; line-height:1.4; text-align:center;', 'font-size:10px; color:#A2937A; margin:6px 0 0; line-height:1.4; text-align:center;'],
];
for (const [from, to] of TIGHTEN) must(from, to, 1);

// ════════════════ POLISH — menos poluição: some o chip de fonte durante o antes/depois ════
// (o chip "Sentinel-2 · fonte" colidia com os rótulos BASE/HOJE da alça no topo-centro).
must('<!-- fonte da cena (canto superior) -->\n      <sc-if value="{{ hasSelected }}"',
     '<!-- fonte da cena (canto superior) -->\n      <sc-if value="{{ sceneNoWipe }}"', 1);
must("sceneCoord:'Goiás',", "sceneCoord:'Goiás', sceneNoWipe:false,", 1);
must('selShowWipe: sc.wipe,', 'selShowWipe: sc.wipe,\n        sceneNoWipe: !sc.wipe,', 1);

// ════════════════ SANITIZE — anti-fabricação ════════════════
// "sinalizou" (passado) afirma um resultado medido. Vira condicional + marcador de projeção.
// (O número de dias é ilustrativo; o bloco passa a se declarar projeção, não fato.)
must(
  'de antecipação.</strong> O Gabarito sinalizou antes de a base de referência atualizar (só na consolidação anual). Calibrado contra PRODES/DETER.',
  'de antecipação · projeção (não medido).</strong> O Gabarito <em>sinalizaria</em> antes de a base de referência atualizar (só na consolidação anual). Meta a validar no backtest contra PRODES/DETER.',
  1
);

// ════════════════ TRAP — strings proibidas ════════════════
const FORBIDDEN = [
  /Penedo/, /Coruripe/, /Igreja Nova/, /Marechal Deodoro/, /CAR-AL/, /Alagoas/,   // geografia errada
  /Testamos/, /resultado publicado/, /a gente avisou/, /\bsinalizou\b/,           // fabricação / passado
  /vs PRODES\b/, /PRODES anual/,                                                   // anti-circularidade
  /aprova(r)? autom[aá]tico/i, /aprova sozinho/i, /fiscal ambiental/i,
  /sat-A-base/, /sat-A-hoje/, /sat-A-pasto/, /sat-fields/, /sat-river/,            // asset ilustrado antigo
];
for (const re of FORBIDDEN) { const m = html.match(re); if (m) throw new Error(`build-painel TRAP: string proibida "${m[0]}"`); }

// ════════════════ ASSERTS — presença obrigatória ════════════════
const MUST = [
  // imagem Sentinel-2 real conectada
  "assets/sat/rv7-hoje.jpg", "assets/sat/rv7-base.jpg", "assets/sat/min8-base.jpg", "assets/sat/jat12-base.jpg",
  // UI crítica do v2
  'O que mudou neste talhão', '{{ selSign }}', 'Você assina:', '{{ selShowWipe }}', '{{ wipeInset }}',
  'data-tour="map"', 'data-tour="wipe"', 'data-tour="trilha"', 'data-tour="decisao"', 'data-tour="fila"',
  'A prova guardada', 'Concluídos', 'Liberável c/ trilha',
  // honestidade / anti-fabricação
  'projeção (não medido)', 'na fila · exemplo', 'Dados ilustrativos (Goiás)', 'sinalizaria', 'sceneNoWipe',
  // runtime DCLogic
  '<x-dc>', 'data-dc-script', './support.js',
];
for (const s of MUST) { if (!html.includes(s)) throw new Error(`build-painel ASSERT: faltou "${s}"`); }
// 13 referências a imagem real (3 pares base+hoje = 6, 6 hoje únicas, 1 fallback)
const nReal = (html.match(/assets\/sat\//g) || []).length;
if (nReal < 12) throw new Error(`build-painel ASSERT: esperava ≥12 refs de imagem real, achei ${nReal}`);
// brand travado (Spectral + Hanken + cor-da-terra) — não pode ter virado fonte genérica
for (const brand of ['Spectral', 'Hanken Grotesk']) if (!html.includes(brand)) throw new Error(`build-painel ASSERT: fonte de marca "${brand}" sumiu`);

for (const [rel, data] of [['painel.html', html], ['public/painel.html', html], ['support.js', support], ['public/support.js', support]])
  fs.writeFileSync(path.join(ROOT, rel), data);
console.log(`build-painel: OK · ${html.length} bytes · v2 (imagem Sentinel-2 real) · ${nReal} refs de imagem · trap ${FORBIDDEN.length} · asserts ${MUST.length}`);
