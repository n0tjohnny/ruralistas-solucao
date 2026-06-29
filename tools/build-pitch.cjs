#!/usr/bin/env node
// Compila pitch.html a partir do bundle Claude Design (.dc.html) baixado via DesignSync.
// Recipe (CLAUDE.md): tira o wrapper x-dc/x-import/support.js, reusa o scaffolding standalone
// do pitch.html atual (head+CSS+JS), e injeta a analogia do GPS (slide validado pelo time).
const fs = require('fs');
const path = require('path');
const ROOT = '/home/pepperoni/Documents/ruralistas-solucao';

const bundle = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/pitch-bundle.dc.json'), 'utf8')).content;
const cur = fs.readFileSync(path.join(ROOT, 'pitch.html'), 'utf8');

// 1. scaffolding do pitch.html atual: preâmbulo (até o 1º <section) e postâmbulo (do </div> do deck até o fim)
const firstSec = cur.indexOf('<section class="stage"');
const preamble = cur.slice(0, firstSec);
const postIdx = cur.indexOf('\n</div>\n\n<!-- chrome -->');
if (firstSec < 0 || postIdx < 0) throw new Error('não achei limites do scaffolding');
const postamble = cur.slice(postIdx + 1); // começa em </div>

// 2. seções do bundle: do 1º <section ao último </section>
const bStart = bundle.indexOf('<section ');
const bEnd = bundle.lastIndexOf('</section>') + '</section>'.length;
let sections = bundle.slice(bStart, bEnd);
// adiciona class="stage" (o runtime standalone seleciona por section.stage)
sections = sections.replace(/<section (?!class=)/g, '<section class="stage" ');

// self-contained: o bundle referencia assets/satelite-imovel.png (não baixável via DesignSync e
// fora do princípio "no external assets"). Troca pela MESMA imagem real do protótipo /painel:
// Sentinel-2 do caso rv7 (Rio Verde, gleba 7), antes (verde) | depois (solo exposto), em
// base64 — assim o deck segue self-contained e exporta em PDF sem asset externo.
const b64 = f => fs.readFileSync(path.join(ROOT, f)).toString('base64');
const RV7_BASE = b64('public/assets/sat/rv7-base.jpg');
const RV7_HOJE = b64('public/assets/sat/rv7-hoje.jpg');
const dateChip = (pos, txt) => `<div style="position:absolute; ${pos} transform:translateX(-50%); background:rgba(20,17,12,0.82); color:#F3ECDC; padding:6px 14px; border-radius:999px; font-size:15px; font-weight:700; letter-spacing:1px;">${txt}</div>`;
const satMock = `<!-- imagem REAL Sentinel-2 (antes/depois) — mesmo caso e mesmo enquadramento do protótipo /painel (Rio Verde · gleba 7): clip-path divide a MESMA cena em duas datas, igual ao swipe -->\n            <img src="data:image/jpeg;base64,${RV7_HOJE}" alt="Satélite · depois (solo exposto)" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; display:block;">\n            <img src="data:image/jpeg;base64,${RV7_BASE}" alt="Satélite · antes (vegetação)" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; display:block; clip-path:inset(0 50% 0 0);">\n            <div style="position:absolute; left:50%; top:0; bottom:0; width:3px; background:#F6EFE0; transform:translateX(-1.5px); box-shadow:0 0 12px rgba(0,0,0,0.4);"></div>\n            ${dateChip('top:16px; left:25%;', 'ANTES')}\n            ${dateChip('top:16px; left:75%;', 'DEPOIS')}`;
sections = sections.replace(/<img src="assets\/satelite-imovel\.png"[^>]*>/g, satMock);

// a imagem agora é real: remove o retângulo vermelho fabricado (cairia em local arbitrário) e a
// legenda de classificação (engana sobre RGB cru). A mudança fica óbvia no contraste antes/depois.
sections = sections.replace(/\s*<rect x="58" y="30" width="30" height="36" fill="rgba\(192,87,59,0\.18\)" stroke="#FF6A4D" stroke-width="2\.4" vector-effect="non-scaling-stroke"\/>/, '');
sections = sections.replace(/\s*<!-- legenda -->[\s\S]*?Mudança recente<\/span>\s*<\/div>/, '');
// nota de rodapé honesta no lugar da legenda removida
sections = sections.replace(/(<!-- chips QGIS-like -->)/, '<div style="position:absolute; right:14px; bottom:14px; background:rgba(20,17,12,0.72); color:#EDE6D5; padding:7px 13px; border-radius:9px; font-size:13px;">Imagem real Sentinel-2 · área de exemplo (Goiás)</div>\n            $1');

// 2.5 SANEAMENTO (idempotente) — o bundle do designer afirma resultados FABRICADOS
// como fato ("Testamos", gráfico com dias por município, "resultado publicado") e usa
// municípios de Alagoas num slide que diz "Goiás". Nunca rodamos teste: é backtest a medir.
// Reescrevemos pra honesto (futuro/projeção) e trocamos AL->GO. split/join = literal, idempotente.
const sanitize = [
  ['Testamos em cerca de vinte áreas de Goiás, no Cerrado, com céu limpo. O resultado: o Gabarito apontou a mudança antes do alerta oficial, com pelo menos dois meses de antecedência na mediana, e mais de oitenta por cento de acerto na fila.',
   'Nosso protótipo é um backtest: vamos medir, em cerca de vinte áreas de Goiás no Cerrado de céu limpo, quantos dias o Gabarito aponta a mudança antes do alerta oficial. As metas são pelo menos dois meses de antecedência na mediana e mais de oitenta por cento de acerto na fila — números a validar no piloto, não resultados já obtidos.'],
  ['Testamos em ~20 áreas de ', 'O protótipo é um backtest em ~20 áreas de '],
  ['(Cerrado, céu limpo): o Gabarito apontou a mudança ', '(Cerrado, céu limpo): mede se o Gabarito aponta a mudança '],
  ['Quantos dias antes a gente avisou · por área', 'Quantos dias antes o Gabarito avisaria · projeção (não medido)'],
  ['de antecedência (mediana)<', 'meta de antecedência · mediana<'],
  ['de acerto na fila<', 'meta de acerto na fila<'],
  ['Ilustrativo · valores a confirmar no teste do 1º semestre (resultado publicado).',
   'Projeção ilustrativa — não medido. Valores a apurar no backtest do piloto, validável pela SEMAD-GO contra PRODES/DETER; matriz de confusão pública.'],
  ['Penedo · g7', 'Jataí · g7'],
  ['Igreja N. · t4', 'Mineiros · t4'],
  ['Coruripe · b2', 'Catalão · b2'],
  ['Penedo · gleba 7', 'Rio Verde · gleba 7'],
  ['Igreja Nova · t4', 'Cristalina · t4'],
  ['Marechal Deodoro', 'Luziânia'],
  ['CAR-AL-0421', 'CAR-GO-0421'],
  // --- números de UI inventados: marcar como exemplo (não são dados operacionais reais) ---
  ['propriedades aguardando análise', 'propriedades aguardando análise · exemplo'],
  ['A prova, com data · imóvel CAR-GO-0421', 'A prova, com data · imóvel exemplo CAR-GO-0421'],
  // a imagem virou antes/depois real: ajusta a fala (não há mais retângulo vermelho)
  ['A área que mudou aparece destacada em vermelho, dentro do limite do imóvel.',
   'Dá pra ver a mudança comparando as duas datas: o que era verde virou solo exposto, dentro do limite do imóvel.'],
];
for (const [a, b] of sanitize) sections = sections.split(a).join(b);
const forbidden = ['Testamos', 'resultado publicado', 'a gente avisou', 'O resultado:', 'Penedo', 'Coruripe', 'Igreja N', 'Marechal Deodoro', 'CAR-AL'];
const leaked = forbidden.filter(s => sections.includes(s));
if (leaked.length) throw new Error('SANEAMENTO falhou — strings fabricadas/inconsistentes sobreviveram: ' + leaked.join(', '));

// 3. analogia do GPS — inserir logo após a seção "Quem assina"
const gps = `
  <!-- ================= 2B · A ANALOGIA (GPS DESATUALIZADO) ================= -->
  <section class="stage" data-label="A analogia" data-screen-label="A analogia" data-speaker-notes="Pra explicar sem termo técnico: o mapa que a Luana usa pra conferir é como um GPS desatualizado. Ele mostra as ruas de anos atrás — tem rua nova, tem rua que virou rio. Você não confia, então dirige devagar, olhando pela janela. É exatamente o que ela faz: sem confiar no mapa, confere tudo na mão. O Gabarito é a atualização automática desse GPS — mostra só o que mudou." style="background:#F6EFE0; color:#2E2519; padding:96px 120px; display:flex; flex-direction:column; justify-content:center; font-family:'Hanken Grotesk',sans-serif;">
    <div style="max-width:1560px; margin:0 auto; width:100%;">
      <p style="font-size:22px; letter-spacing:4px; text-transform:uppercase; color:#C0573B; font-weight:700; margin:0 0 26px;">Pra entender em 10 segundos</p>
      <h2 style="font-family:'Spectral',serif; font-weight:700; font-size:78px; line-height:1.04; margin:0 0 44px; letter-spacing:-1.4px;">O mapa do governo é um <span style="color:var(--ga-accent,#D6A23E);">GPS desatualizado</span>.</h2>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:34px; align-items:stretch;">
        <div style="background:#FBEDE6; border:1px solid #E8C3B4; border-radius:24px; padding:46px 44px;">
          <div style="font-size:52px; margin-bottom:18px;">\u{1F5FA}\u{FE0F}</div>
          <p style="font-size:30px; line-height:1.45; margin:0; color:#7A2E1C;">Seu GPS ainda mostra as ruas de anos atrás. Tem rua nova, tem rua que virou rio. Você <strong>não confia</strong> — então dirige devagar, olhando pela janela.</p>
        </div>
        <div style="background:#25382A; border-radius:24px; padding:46px 44px; color:#F3ECDC;">
          <div style="font-size:52px; margin-bottom:18px;">\u{1F6F0}\u{FE0F}</div>
          <p style="font-size:30px; line-height:1.45; margin:0; color:#DCD3BE;">A base que a Luana usa pra conferir é assim: feita anos atrás. Sem confiar, ela confere tudo à mão. <strong style="color:#F3ECDC;">O Gabarito é a atualização automática desse GPS</strong> — mostra só o que mudou.</p>
        </div>
      </div>
    </div>
  </section>
`;
// ponto de inserção: fim da seção "Quem assina" (primeira </section> após data-label="Quem assina")
const qaIdx = sections.indexOf('data-label="Quem assina"');
if (qaIdx < 0) throw new Error('não achei a seção Quem assina');
const closeIdx = sections.indexOf('</section>', qaIdx) + '</section>'.length;
sections = sections.slice(0, closeIdx) + '\n' + gps + sections.slice(closeIdx);

let out = preamble + sections + '\n\n' + postamble;
const nSlides = (out.match(/<section class="stage"/g) || []).length;
// contador estático (antes do JS rodar / fallback de print) reflete a contagem real
out = out.replace(/(id="counter">)[^<]*(<)/, "$11 / "+nSlides+"$2");
fs.writeFileSync(path.join(ROOT, 'pitch.html'), out);
fs.writeFileSync(path.join(ROOT, 'public/pitch.html'), out);
const n = (out.match(/<section class="stage"/g) || []).length;
console.log('OK · slides:', n, '· bytes:', out.length);
