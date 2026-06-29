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

// 3. ESTRUTURA OFICIAL DO PITCH (Live 08): 10 slides na ordem INTRODUÇÃO · PROBLEMA ·
// SOLUÇÃO · COMO FUNCIONA · DIFERENCIAIS · IMPACTO · TIME · PRÓXIMOS PASSOS · ENCERRAMENTO.
// Sem a analogia GPS (vive em /entenda). Cortamos 3 seções redundantes e injetamos o TIME.
function dropSection(label) {
  const i = sections.indexOf('data-label="' + label + '"');
  if (i < 0) throw new Error('dropSection: não achei ' + label);
  const start = sections.lastIndexOf('<section', i);
  const end = sections.indexOf('</section>', i) + '</section>'.length;
  sections = sections.slice(0, start) + sections.slice(end);
}
['A virada', 'Frase âncora', 'Honestidade'].forEach(dropSection);

// 3.1 kickers ganham o rótulo da estrutura oficial (e somem travessões: "— é coisa de IA")
const kickers = [
  ['Os números do próprio CAR', 'Problema · os números do CAR'],
  ['O produto, na prática', 'Solução · o produto na prática'],
  ['Por que vamos ganhar', 'Diferenciais · por que vamos ganhar'],
  ['A prova — protótipo do haCARthon', 'Impacto esperado · a prova que vamos medir'],
];
for (const [a, b] of kickers) sections = sections.split(a).join(b);

// 3.2 menos texto por slide (Live 08 pede sucinto): encurta parágrafos e tira travessões
const trims = [
  ['É ela quem olha a fila de propriedades e decide cada caso. No fim, é o nome dela na aprovação ou na notificação. O que ela quer não é um número novo — é <strong style="color:#F3ECDC;">uma fila que para de crescer</strong> e um parecer que ela aceita assinar.',
   'No fim, é o nome dela em cada CAR que libera. O que ela quer não é um mapa novo, é <strong style="color:#F3ECDC;">uma fila que para de crescer</strong> e um parecer que ela aceita assinar.'],
  ['Compara um mapa-base aberto com imagens de satélite gratuitas e os alertas oficiais de desmatamento. Mostra onde a base realmente envelheceu.',
   'Cruza o mapa-base com satélite grátis e alertas oficiais. Aponta onde a base envelheceu.'],
  ['Em vez de redesenhar a propriedade inteira, atualiza só a parte que mudou — e uma pessoa revisa ali mesmo. O vaivém de meses entre estado e empresa vira um fluxo só.',
   'Atualiza só a parte que mudou, e uma pessoa revisa ali mesmo. O vaivém de meses vira um fluxo só.'],
  ['Mapa novo em formato aberto, com uma nota de risco que organiza a fila e a evidência datada pra decidir. Automático onde a confiança é alta; humano onde é baixa.',
   'Mapa novo e aberto, com a nota de risco que ordena a fila e a prova datada. Automático onde a confiança é alta, humano onde é baixa.'],
];
for (const [a, b] of trims) sections = sections.split(a).join(b);

// 3.3 slide TIME (não existe no bundle) — injeta antes de "A chamada".
// Nomes REAIS da equipe; cards descrevem só o método/trabalho verificável (sem papéis inventados).
const TEAM_MARIO = b64('public/assets/team/mario.jpg');
const TEAM_JACKSON = b64('public/assets/team/jackson.jpg');
const AV = 'width:88px; height:88px; border-radius:50%; object-fit:cover; margin-bottom:16px; border:2px solid #3a5440; display:block;';
const MONO = "width:88px; height:88px; border-radius:50%; background:#3a5440; color:#F3ECDC; display:flex; align-items:center; justify-content:center; font-family:'Spectral',serif; font-size:32px; font-weight:700; margin-bottom:16px;";
const time = `\n  <!-- ================= TIME ================= -->\n  <section class="stage" data-label="Time" data-screen-label="Time" data-speaker-notes="Somos três: Mário Machado, João Marcos Cassol e Jackson Meires. Time de TI: arquitetura e infraestrutura, segurança da informação e engenharia de software. O que nos diferencia é o método: fomos atrás da dor real, com debates e verificação dos nossos próprios números. As escolhas de produto são nossas; a IA foi apoio." style="background:#1F2D22; color:#F3ECDC; padding:84px 120px; display:flex; flex-direction:column; justify-content:center; font-family:'Hanken Grotesk',sans-serif;">\n    <div style="max-width:1560px; margin:0 auto; width:100%;">\n      <p style="font-size:21px; letter-spacing:4px; text-transform:uppercase; color:var(--ga-accent,#D6A23E); font-weight:700; margin:0 0 16px;">Time</p>\n      <h2 style="font-family:'Spectral',serif; font-weight:700; font-size:56px; line-height:1.05; margin:0 0 12px; letter-spacing:-1px;">Somos três. O que muda o jogo é o método.</h2>\n      <p style="font-size:21px; line-height:1.5; color:#9FB191; max-width:1100px; margin:0 0 36px;">Equipe Gabarito · Desafio 02. Fomos atrás da dor real, não da primeira ideia: debates e verificação dos próprios números antes de confiar neles.</p>\n      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:22px;">\n        <div style="background:#25382A; border:1px solid #2f4733; border-radius:18px; padding:28px 28px;"><img src="data:image/jpeg;base64,${TEAM_MARIO}" alt="Mário" style="${AV}"><p style="font-family:'Spectral',serif; font-size:23px; font-weight:700; color:#F3ECDC; margin:0 0 8px;">Mário G. Machado Souza</p><p style="font-size:18px; line-height:1.45; color:#C7CFB9; margin:0;">Tecnólogo em Gestão da TI. Pós em Arquitetura e Gestão de Infraestrutura em TI.</p></div>\n        <div style="background:#25382A; border:1px solid #2f4733; border-radius:18px; padding:28px 28px;"><div style="${MONO}">JC</div><p style="font-family:'Spectral',serif; font-size:23px; font-weight:700; color:#F3ECDC; margin:0 0 8px;">João Marcos Cassol</p><p style="font-size:18px; line-height:1.45; color:#C7CFB9; margin:0;">Analista de Segurança da Informação.</p></div>\n        <div style="background:#25382A; border:1px solid #2f4733; border-radius:18px; padding:28px 28px;"><img src="data:image/jpeg;base64,${TEAM_JACKSON}" alt="Jackson" style="${AV}"><p style="font-family:'Spectral',serif; font-size:23px; font-weight:700; color:#F3ECDC; margin:0 0 8px;">Jackson Meires D. Canuto</p><p style="font-size:18px; line-height:1.45; color:#C7CFB9; margin:0;">Mestre em Engenharia de Software. Graduação em Sistemas de Informação.</p></div>\n      </div>\n      <p style="margin:30px 0 0; font-size:16px; line-height:1.5; color:#7E8E72;">As escolhas de produto e os cortes de escopo são da equipe. A IA foi apoio: pesquisa, verificação dos números, redação e protótipo.</p>\n    </div>\n  </section>\n`;
const chamadaIdx = sections.indexOf('data-label="A chamada"');
if (chamadaIdx < 0) throw new Error('não achei a seção A chamada');
const chamadaStart = sections.lastIndexOf('<section', chamadaIdx);
sections = sections.slice(0, chamadaStart) + time + sections.slice(chamadaStart);

let out = preamble + sections + '\n\n' + postamble;
// voz natural/humana (igual à página #perguntas, que tem 0 travessões): "— é coisa de IA".
// Todo travessão aqui é " — " (espaçado) em texto/comentário, nunca em CSS/JS — vírgula é segura.
out = out.split(' — ').join(', ');
if (out.includes('—')) throw new Error('sobrou travessão (não espaçado) — revisar');
const nSlides = (out.match(/<section class="stage"/g) || []).length;
if (nSlides !== 10) throw new Error('esperado 10 slides (estrutura Live 08), veio ' + nSlides);
// contador estático (antes do JS rodar / fallback de print) reflete a contagem real
out = out.replace(/(id="counter">)[^<]*(<)/, "$11 / "+nSlides+"$2");
fs.writeFileSync(path.join(ROOT, 'pitch.html'), out);
fs.writeFileSync(path.join(ROOT, 'public/pitch.html'), out);
const n = (out.match(/<section class="stage"/g) || []).length;
console.log('OK · slides:', n, '· bytes:', out.length);
