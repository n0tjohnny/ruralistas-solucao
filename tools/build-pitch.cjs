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

// self-contained: o bundle referencia assets/satelite-imovel.png (>256KiB, não baixável
// inteiro via DesignSync e fora do princípio "no external assets"). Troca por mock aéreo inline.
const satMock = `<!-- mock de imagem aérea (self-contained; substitui assets/satelite-imovel.png) -->\n            <div style="position:absolute; inset:0; background:radial-gradient(circle at 24% 28%, #51713f 0 11%, transparent 12%), radial-gradient(circle at 72% 62%, #5d7c4e 0 15%, transparent 16%), linear-gradient(115deg, #3c5836 0%, #46603c 36%, #6b7a44 62%, #4f6b42 100%);">\n              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute; inset:0; width:100%; height:100%; opacity:0.55;">\n                <rect x="0" y="0" width="40" height="55" fill="#54713f"/><rect x="40" y="0" width="60" height="30" fill="#6f7b42"/><rect x="0" y="55" width="55" height="45" fill="#415d38"/><rect x="55" y="30" width="45" height="40" fill="#5c7544"/><rect x="55" y="70" width="45" height="30" fill="#6b8a4c"/>\n                <path d="M0,68 Q30,58 55,74 T100,70 L100,80 Q60,71 0,82 Z" fill="#5e8ca8" opacity="0.5"/>\n              </svg>\n            </div>`;
sections = sections.replace(/<img src="assets\/satelite-imovel\.png"[^>]*>/g, satMock);

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
