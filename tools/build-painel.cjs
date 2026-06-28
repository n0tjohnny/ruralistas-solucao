#!/usr/bin/env node
// Compila painel.html (+ public/) a partir do bundle Claude Design "Gabarito - Painel do
// Analista (protótipo)" e do runtime DCLogic (support.js). App interativo (React/DCLogic):
// ENRICH (conteúdo/comportamento) + SANITIZE (correções) + TRAP + ASSERTS — tudo idempotente.
// Correção e enriquecimento moram AQUI (transform), nunca como edição à mão do .html gerado.
//
// Uso:  node tools/build-painel.cjs        Idempotente: rode 2× e compare md5sum.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

let html = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/painel-bundle.dc.json'), 'utf8')).content;
const support = fs.readFileSync(path.join(ROOT, 'tools/painel-support.js'), 'utf8');

function must(from, to, expect) {
  const n = html.split(from).length - 1;
  if (n === 0) throw new Error(`build-painel: âncora não encontrado → "${from.slice(0,60)}…" (bundle mudou?)`);
  if (expect != null && n !== expect) throw new Error(`build-painel: âncora "${from.slice(0,40)}…" apareceu ${n}× (esperado ${expect})`);
  html = html.split(from).join(to);
}

// ════════════════════ ENRICH 1 — explicação por item (o analista assina) ════════════════════
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
for (const [car, mudou] of Object.entries(MUDOU)) must(`car:'${car}',`, `car:'${car}', mudou:'${mudou}',`, 1);

const SIGN = "({notificar:'o auto de notificação ao produtor, com a trilha datada (imagem + alerta + base) anexada como prova. É o seu nome no ato.',liberar:'que o talhão está regular e pode seguir, com recibo auditável anexado à análise dinamizada. É o seu nome no ato.',revisar:'nada ainda: o caso vai para fotointerpretação manual antes de qualquer decisão.',reagendar:'nada ainda: o sistema aguarda a próxima imagem de céu limpo para reavaliar.'})[sel.primary.action] || ''";
must('decideP: ()=>this.decide(sel.primary.action),', `selSign: ${SIGN},\n        decideP: ()=>this.decide(sel.primary.action),`, 1);
must('tagsText:c.tagsText,', 'tagsText:(c.changeKind||c.tagsText),', 1);

const RECO_OLD =
  '<!-- recomendação -->\n          <div style="margin:16px 20px 0; padding:14px 16px; background:{{ recoBg }}; border-left:3px solid {{ recoBd }}; border-radius:0 10px 10px 0;">\n            <p style="font-size:10px; letter-spacing:0.8px; text-transform:uppercase; color:{{ recoBd }}; font-weight:800; margin:0 0 7px;">{{ recoTag }}</p>\n            <p style="font-size:14px; line-height:1.5; margin:0; color:#3A3122;">{{ selected.reco }}</p>\n          </div>';
const RECO_NEW =
  '<!-- o que mudou (linguagem simples) -->\n          <div style="padding:16px 20px 0;">\n            <p style="font-size:10px; letter-spacing:1px; text-transform:uppercase; color:#8A7B63; font-weight:700; margin:0 0 6px;">O que mudou neste talhão</p>\n            <p style="font-size:14.5px; line-height:1.5; margin:0; color:#2E2519; font-weight:600;">{{ selected.mudou }}</p>\n          </div>\n\n          <!-- por que entrou na fila / o que pode estar errado + o que você assina -->\n          <div style="margin:14px 20px 0; padding:14px 16px; background:{{ recoBg }}; border-left:3px solid {{ recoBd }}; border-radius:0 10px 10px 0;">\n            <p style="font-size:10px; letter-spacing:0.8px; text-transform:uppercase; color:{{ recoBd }}; font-weight:800; margin:0 0 7px;">{{ recoTag }}</p>\n            <p style="font-size:13.5px; line-height:1.5; margin:0; color:#3A3122;">{{ selected.reco }}</p>\n            <div style="margin-top:11px; padding-top:11px; border-top:1px dashed rgba(138,123,99,0.4); display:flex; gap:8px; align-items:flex-start;">\n              <span style="flex:none; width:16px; height:16px; border-radius:5px; background:#D6A23E; color:#2A2008; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:800;">&#9998;</span>\n              <p style="font-size:12px; line-height:1.45; margin:0; color:#5A4F3D;"><strong style="color:#2E2519;">Você assina:</strong> {{ selSign }}</p>\n            </div>\n          </div>';
must(RECO_OLD, RECO_NEW, 1);

// ENRICH 1b — fixar a DECISÃO como rodapé sempre visível (botões saíam da área rolável e ficavam
// cortados em telas curtas/estreitas; o analista não via "Notificar/Liberar/Revisão"). Fecho a div
// rolável ANTES da decisão e torno a decisão um flex:none ancorado no rodapé do painel.
must('<!-- decisão -->\n          <div style="padding:18px 20px 24px;">',
     '</div>\n\n          <!-- decisão (rodapé sempre visível) -->\n          <div style="flex:none; border-top:1px solid #E4D8BD; background:#F4EEDF; padding:13px 20px 15px;">', 1);
must('dados ilustrativos (Goiás).</p>\n          </div>\n        </div>\n      </sc-if>',
     'dados ilustrativos (Goiás).</p>\n          </div>\n      </sc-if>', 1);
must('margin:14px 0 0; line-height:1.5; text-align:center;">Cada decisão',
     'margin:9px 0 0; line-height:1.4; text-align:center;">Cada decisão', 1);

// ════════════════════ ENRICH 2 — mapa POR TALHÃO + ENRICH 3 — zoom/pan ════════════════════
// Geometria por talhão (PRNG semeado pelo id → cada território é diferente). Antes/depois DRAMÁTICO:
// na Base a parcela em foco é nativa íntegra (verde) + wash esverdeado; no Sentinel-2 hoje ela vira
// SOLO EXPOSTO opaco (cicatriz) + wash âmbar — pra a troca de época mudar a imagem de forma óbvia.
// Zoom/pan: roda/arrasta e botões +/- atuam num wrapper com transform (CSS), centrado no cursor.
const TERRAIN_JS =
"  _rng(s){var h=2166136261>>>0;for(var i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;}return function(){h^=h<<13;h^=h>>>17;h^=h<<5;h=h>>>0;return h/4294967296;};}\n" +
"  _terrain(sel){var r=this._rng(sel.id),C=3,Rr=3,pts=[],i,j;function jit(b,a){return b+(r()*2-1)*a;}\n" +
"    for(i=0;i<=Rr;i++){pts[i]=[];for(j=0;j<=C;j++){var x=(j/C)*1100-50,y=(i/Rr)*1100-50;if(j>0&&j<C)x=jit(x,70);if(i>0&&i<Rr)y=jit(y,70);pts[i][j]={x:Math.round(x),y:Math.round(y)};}}\n" +
"    function quad(i,j){var a=pts[i][j],b=pts[i][j+1],c=pts[i+1][j+1],d=pts[i+1][j];return 'M'+a.x+','+a.y+' L'+b.x+','+b.y+' L'+c.x+','+c.y+' L'+d.x+','+d.y+' Z';}\n" +
"    function cen(i,j){var a=pts[i][j],b=pts[i][j+1],c=pts[i+1][j+1],d=pts[i+1][j];return {x:Math.round((a.x+b.x+c.x+d.x)/4),y:Math.round((a.y+b.y+c.y+d.y)/4)};}\n" +
"    var frontier=r()<0.5?1:2,nativa=[],fields=[],parcels=[],ng=['#2f4327','#33492b','#3a512f'],fg=['#b9a36e','#c2ad77','#ad9760'];\n" +
"    for(i=0;i<Rr;i++)for(j=0;j<C;j++){var d=quad(i,j);parcels.push({d:d});var isN=j<frontier?true:(r()<0.18);if(isN)nativa.push({d:d,fill:ng[Math.floor(r()*3)]});else fields.push({d:d,fill:fg[Math.floor(r()*3)]});}\n" +
"    var pivots=[],npv=Math.floor(r()*3)+1,k;for(k=0;k<npv;k++){var pi=Math.min(Math.floor(r()*Rr),Rr-1),pj=Math.min(frontier+Math.floor(r()*(C-frontier)),C-1),pc=cen(pi,pj);pivots.push({cx:pc.x,cy:pc.y,r:26+Math.floor(r()*22),fill:'rgba(120,150,80,0.45)'});}\n" +
"    var ry=jit(540,120),river='M-30,'+Math.round(jit(ry,40))+' C'+Math.round(jit(280,80))+','+Math.round(jit(ry,90))+' '+Math.round(jit(520,80))+','+Math.round(jit(ry+60,90))+' '+Math.round(jit(760,60))+','+Math.round(jit(ry,80))+' L1030,'+Math.round(jit(ry,40));\n" +
"    var fi=Math.min(Math.floor(r()*Rr),Rr-1),fj=sel.change?Math.max(0,frontier-1):Math.min(frontier+Math.floor(r()*(C-frontier)),C-1),fc=cen(fi,fj);\n" +
"    return {bg:'linear-gradient('+Math.floor(jit(135,30))+'deg,#3a4a2c,#445331)',nativa:nativa,fields:fields,pivots:pivots,river:river,parcels:parcels,focusD:quad(fi,fj),fcx:fc.x,fcy:fc.y};}\n" +
"  _mapDims(e){var r=e.currentTarget.getBoundingClientRect();this._mw=r.width;this._mh=r.height;this._ml=r.left;this._mt=r.top;}\n" +
"  _clampPan(px,py,z){var W=this._mw||800,H=this._mh||600;return {x:Math.max(W-z*W,Math.min(0,px)),y:Math.max(H-z*H,Math.min(0,py))};}\n" +
"  _zoomBtn(d){var z=this.state.zoom,nz=Math.max(1,Math.min(5,d>0?z*1.4:z/1.4)),W=this._mw||800,H=this._mh||600,cx=W/2,cy=H/2,k=nz/z,px=cx-k*(cx-this.state.panX),py=cy-k*(cy-this.state.panY),p=this._clampPan(px,py,nz);if(nz===1){p.x=0;p.y=0;}this.setState({zoom:nz,panX:p.x,panY:p.y,_smooth:true});}\n" +
"  _mapWheel(e){this._mapDims(e);var z=this.state.zoom,f=e.deltaY<0?1.18:1/1.18,nz=Math.max(1,Math.min(5,z*f)),cx=e.clientX-this._ml,cy=e.clientY-this._mt,k=nz/z,px=cx-k*(cx-this.state.panX),py=cy-k*(cy-this.state.panY),p=this._clampPan(px,py,nz);if(nz===1){p.x=0;p.y=0;}this.setState({zoom:nz,panX:p.x,panY:p.y,_smooth:false});}\n" +
"  _mapDown(e){if(this.state.zoom<=1)return;this._mapDims(e);this._drag={x:e.clientX,y:e.clientY,px:this.state.panX,py:this.state.panY};this.setState({_smooth:false});}\n" +
"  _mapMove(e){if(!this._drag)return;var px=this._drag.px+(e.clientX-this._drag.x),py=this._drag.py+(e.clientY-this._drag.y),p=this._clampPan(px,py,this.state.zoom);this.setState({panX:p.x,panY:p.y});}\n" +
"  _mapUp(){this._drag=null;}\n" +
"  renderVals(){";
must('  renderVals(){', TERRAIN_JS, 1);

// estado: zoom/pan
must("selectedId:'rv7', decided:{}, epoch:'atual',", "selectedId:'rv7', decided:{}, epoch:'atual', zoom:1, panX:0, panY:0, _smooth:true,", 1);
// ciclo de vida: listeners globais de drag (mousemove/up não existem no template do runtime)
must("window.addEventListener('resize', this._onResize);",
     "window.addEventListener('resize', this._onResize);\n    this._mmH=(e)=>this._mapMove(e); this._muH=()=>this._mapUp(); window.addEventListener('mousemove',this._mmH); window.addEventListener('mouseup',this._muH);", 1);
must("window.removeEventListener('resize', this._onResize);",
     "window.removeEventListener('resize', this._onResize);\n    window.removeEventListener('mousemove',this._mmH); window.removeEventListener('mouseup',this._muH);", 1);
// trocar de talhão reseta o zoom/pan
must("select(id){ this.setState({ selectedId:id, epoch:'atual' }); }",
     "select(id){ this.setState({ selectedId:id, epoch:'atual', zoom:1, panX:0, panY:0, _smooth:true }); }", 1);

// out base: defaults do mapa + handlers de zoom (sempre presentes)
must('tourActive: S.tourActive,\n    };',
  "tourActive: S.tourActive,\n      selMap:{bg:'linear-gradient(135deg,#3a4a2c,#445331)',nativa:[],fields:[],pivots:[],parcels:[],river:'',focusD:'',focusFill:'rgba(242,200,75,0.12)',scarFill:'#a8663f'}, selShowScar:false, selAlertPos:'left:20%; top:30%;', selEpochWash:'transparent',\n      mapStyle:'transform:translate('+S.panX+'px,'+S.panY+'px) scale('+S.zoom+'); transform-origin:0 0; transition:'+(S._smooth?'transform .16s ease':'none')+'; will-change:transform;', mapCursor:(S.zoom>1?'grab':'default'), mapWheel:(e)=>this._mapWheel(e), mapDown:(e)=>this._mapDown(e), zoomIn:()=>this._zoomBtn(1), zoomOut:()=>this._zoomBtn(-1),\n    };", 1);

// override por caso: antes/depois DRAMÁTICO (verde íntegro ↔ solo exposto) + wash de época
must('Object.assign(out, {\n        selected: sel,',
  "var __T=this._terrain(sel), __base=(S.epoch==='base');\n      Object.assign(out, {\n        selMap:{bg:__T.bg,nativa:__T.nativa,fields:__T.fields,pivots:__T.pivots,river:__T.river,parcels:__T.parcels,focusD:__T.focusD,focusFill:(sel.change&&__base)?'#33492b':'rgba(242,200,75,0.12)',scarFill:'#a8663f'},\n        selShowScar: !!sel.change && S.layers.mudanca && S.epoch==='atual',\n        selEpochWash: sel.change ? (__base?'rgba(54,96,52,0.20)':'rgba(176,112,58,0.16)') : 'transparent',\n        selAlertPos: 'left:'+Math.max(8,Math.min(70,Math.round(__T.fcx/10)))+'%; top:'+Math.max(12,Math.min(66,Math.round(__T.fcy/10)))+'%;',\n        selected: sel,", 1);

// substitui as CAMADAS estáticas por composição vetorial por talhão, dentro de um wrapper de zoom.
const mapStart = html.indexOf('<!-- imagery base -->');
const focusAt = html.indexOf('<!-- talhão em foco -->');
if (mapStart < 0 || focusAt < 0) throw new Error('build-painel: âncoras do mapa não encontradas');
const mapEnd = html.indexOf('</svg>', focusAt) + '</svg>'.length;
const NEW_MAP =
  '<!-- imagery + vetores (wrapper de zoom/pan) -->\n      <div style="position:absolute; inset:0; {{ mapStyle }}">\n' +
  '        <div style="position:absolute; inset:0; background:{{ selMap.bg }};"></div>\n' +
  '        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">\n' +
  '          <sc-if value="{{ layerConsolidada }}" hint-placeholder-val="{{ true }}">\n' +
  '            <sc-for list="{{ selMap.fields }}" as="f" hint-placeholder-count="3"><path d="{{ f.d }}" fill="{{ f.fill }}"/></sc-for>\n' +
  '            <sc-for list="{{ selMap.pivots }}" as="pv" hint-placeholder-count="2"><circle cx="{{ pv.cx }}" cy="{{ pv.cy }}" r="{{ pv.r }}" fill="{{ pv.fill }}"/></sc-for>\n' +
  '          </sc-if>\n' +
  '          <sc-if value="{{ layerNativa }}" hint-placeholder-val="{{ true }}">\n' +
  '            <sc-for list="{{ selMap.nativa }}" as="n" hint-placeholder-count="3"><path d="{{ n.d }}" fill="{{ n.fill }}"/></sc-for>\n' +
  '          </sc-if>\n' +
  '          <sc-if value="{{ layerHidro }}" hint-placeholder-val="{{ true }}">\n' +
  '            <path d="{{ selMap.river }}" fill="none" stroke="#4f7e9a" stroke-width="30" stroke-linecap="round" vector-effect="non-scaling-stroke"/>\n' +
  '            <path d="{{ selMap.river }}" fill="none" stroke="#7AA6BE" stroke-width="12" stroke-linecap="round" vector-effect="non-scaling-stroke"/>\n' +
  '          </sc-if>\n' +
  '          <g fill="none" stroke="rgba(247,238,205,0.4)" stroke-width="1.3" vector-effect="non-scaling-stroke" stroke-linejoin="round">\n' +
  '            <sc-for list="{{ selMap.parcels }}" as="p" hint-placeholder-count="6"><path d="{{ p.d }}"/></sc-for>\n' +
  '          </g>\n' +
  '          <sc-if value="{{ selShowScar }}" hint-placeholder-val="{{ true }}"><path d="{{ selMap.focusD }}" fill="{{ selMap.scarFill }}" stroke="#C0573B" stroke-width="2.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></sc-if>\n' +
  '          <path d="{{ selMap.focusD }}" fill="{{ selMap.focusFill }}" stroke="#F2C84B" stroke-width="2.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>\n' +
  '        </svg>\n' +
  '        <!-- wash de época (antes/depois) -->\n' +
  '        <div style="position:absolute; inset:0; pointer-events:none; background:{{ selEpochWash }}; transition:background .3s ease;"></div>\n' +
  '        <sc-if value="{{ selNuvem }}" hint-placeholder-val="{{ false }}">\n' +
  '          <div style="position:absolute; left:30%; top:24%; width:50%; height:54%; pointer-events:none; background:radial-gradient(circle, rgba(238,236,230,0.92), rgba(238,236,230,0.25) 66%, transparent); border-radius:50%; animation:gfade .5s ease;"></div>\n' +
  '        </sc-if>\n' +
  '      </div>\n\n' +
  '      <!-- overlays fixos (lente) -->\n' +
  '      <div style="position:absolute; inset:0; pointer-events:none; box-shadow:inset 0 0 130px rgba(8,14,8,0.6);"></div>\n' +
  '      <div style="position:absolute; inset:0; pointer-events:none; opacity:0.05; background-image:repeating-linear-gradient(0deg,#000 0 1px,transparent 1px 2px);"></div>\n';
html = html.slice(0, mapStart) + NEW_MAP + html.slice(mapEnd);

// liga wheel + arrasto na section do mapa + cursor
must('<section data-tour="map" style="position:relative; min-height:0; overflow:hidden; background:#3a4a2c;">',
     '<section data-tour="map" onWheel="{{ mapWheel }}" onMouseDown="{{ mapDown }}" style="position:relative; min-height:0; overflow:hidden; background:#3a4a2c; cursor:{{ mapCursor }};">', 1);
// liga os botões +/- (eram decorativos)
must('font-weight:300; border-bottom:1px solid rgba(255,255,255,0.12); cursor:pointer;">+</div>',
     'font-weight:300; border-bottom:1px solid rgba(255,255,255,0.12); cursor:pointer;" onClick="{{ zoomIn }}">+</div>', 1);
must('font-size:19px; font-weight:300; cursor:pointer;">−</div>',
     'font-size:19px; font-weight:300; cursor:pointer;" onClick="{{ zoomOut }}">−</div>', 1);

// ════════════════════ ENRICH 5 — fila "Concluídos" (quem revisou/finalizou) ════════════════════
// Fechava o caso e ele só sumia. Agora vira uma seção "Concluídos" no fim da fila, com a decisão
// tomada e o nome do analista (Luana A.) — a trilha de quem assinou, visível na própria fila.
must('    }).filter(g=>g.items.length);\n',
  "    }).filter(g=>g.items.length);\n" +
  "    var __cc=this.cases.filter(c=>decided[c.id]);\n" +
  "    if(__cc.length){var __lb={liberar:'Liberado',notificar:'Notificado',revisar:'Em revisão',reagendar:'Reagendado'};\n" +
  "      groups.push({key:'concluido',label:'Concluídos',color:'#7FB07A',sub:'revisados e finalizados · Luana A.',count:__cc.length,batchShow:false,\n" +
  "        items:__cc.map(c=>({id:c.id,municipio:c.municipio,gleba:c.gleba,tagsText:'✓ '+(__lb[decided[c.id]]||'Concluído')+' · Luana A.',tagFg:'#9FB191',tagBg:'rgba(127,176,122,0.12)',cardBg:c.id===S.selectedId?'#2E3E2B':'rgba(255,255,255,0.02)',outline:c.id===S.selectedId?'2px solid #D6A23E':'1px solid rgba(255,255,255,0.05)',onSelect:()=>this.select(c.id)}))});}\n", 1);

// ════════════════════ ENRICH 4 — responsivo (mobile/telas curtas) ════════════════════
// O grid fixo 288/1fr/384 estourava na horizontal em telas estreitas — colunas (e os botões)
// ficavam inacessíveis. Em <=880px as 3 colunas empilham e a página rola naturalmente.
must('  .ga-cream ::-webkit-scrollbar-thumb{background:rgba(46,37,25,0.18);}\n</style>',
  "  .ga-cream ::-webkit-scrollbar-thumb{background:rgba(46,37,25,0.18);}\n" +
  "  @media (max-width:880px){\n" +
  "    .ga-shell{height:auto!important;min-height:0!important;overflow:visible!important;}\n" +
  "    .ga-shell>header{flex-wrap:wrap;height:auto!important;padding:10px 14px!important;gap:10px!important;}\n" +
  "    .ga-main{display:block!important;}\n" +
  "    .ga-main>aside[data-tour=\"fila\"]{max-height:46vh;}\n" +
  "    .ga-main>section[data-tour=\"map\"]{height:58vh!important;min-height:330px;}\n" +
  "    .ga-main>aside.ga-cream{height:auto!important;border-left:none!important;border-top:1px solid rgba(0,0,0,0.08)!important;}\n" +
  "  }\n</style>", 1);
must('<div style="display:flex; flex-direction:column; height:100vh; min-height:680px; overflow:hidden; background:#16201A; font-family:\'Hanken Grotesk\',sans-serif; color:#F3ECDC;">',
     '<div class="ga-shell" style="display:flex; flex-direction:column; height:100vh; min-height:680px; overflow:hidden; background:#16201A; font-family:\'Hanken Grotesk\',sans-serif; color:#F3ECDC;">', 1);
must('<main style="flex:1; min-height:0; display:grid; grid-template-columns:288px 1fr 384px;">',
     '<main class="ga-main" style="flex:1; min-height:0; display:grid; grid-template-columns:288px 1fr 384px;">', 1);

// ════════════════════ SANITIZE ════════════════════
const SANITIZE = [
  ['dias de antecipação vs PRODES', 'dias de antecipação vs atualização da base · projeção'],
  ['<span>Base de referência atualizaria</span><span>PRODES anual</span>',
   '<span>Base de referência atualizaria</span><span>só na consolidação anual</span>'],
  ['</strong> na fila</div>', '</strong> na fila · exemplo</div>'],
];
for (const [from, to] of SANITIZE) { if (!html.includes(from)) { if (!html.includes(to)) throw new Error(`SANITIZE: "${from.slice(0,42)}…"`); continue; } html = html.split(from).join(to); }

// ════════════════════ TRAP ════════════════════
const FORBIDDEN = [/vs PRODES\b/, /PRODES anual/, /Testamos/, /resultado publicado/, /a gente avisou/, /Penedo/, /Coruripe/, /Igreja Nova/, /Marechal Deodoro/, /CAR-AL/, /Alagoas/, /aprova(r)? autom[aá]tico/i, /aprova sozinho/i, /fiscal ambiental/i];
for (const re of FORBIDDEN) { const m = html.match(re); if (m) throw new Error(`TRAP: string proibida: "${m[0]}"`); }

// ════════════════════ ASSERTS ════════════════════
const MUST = [
  'O que mudou neste talhão', '{{ selected.mudou }}', '{{ selSign }}', 'Você assina:',
  '_terrain(sel)', '{{ selMap.bg }}', '{{ selMap.focusD }}', '{{ selShowScar }}', '{{ selEpochWash }}',
  '_zoomBtn', 'zoom:1, panX:0', '{{ mapStyle }}', 'onWheel="{{ mapWheel }}"', 'onClick="{{ zoomIn }}"', 'onClick="{{ zoomOut }}"',
  'class="ga-shell"', 'class="ga-main"', '@media (max-width:880px)', 'rodapé sempre visível',
  "label:'Concluídos'", 'revisados e finalizados · Luana A.',
  'dias de antecipação vs atualização da base · projeção',
  '<span>Base de referência atualizaria</span><span>só na consolidação anual</span>',
  '</strong> na fila · exemplo</div>', 'nunca contra o t0', 'dados ilustrativos (Goiás)',
  '<x-dc>', 'data-dc-script', './support.js',
];
for (const s of MUST) { if (!html.includes(s)) throw new Error(`ASSERT: faltou "${s}"`); }
if ((html.match(/ mudou:'/g) || []).length !== 9) throw new Error('ASSERT: esperava 9 campos mudou:');
if (html.includes('M120,150 L430,120')) throw new Error('ASSERT: parcela estática antiga ainda presente');

for (const [rel, data] of [['painel.html', html], ['public/painel.html', html], ['support.js', support], ['public/support.js', support]]) fs.writeFileSync(path.join(ROOT, rel), data);
console.log('build-painel: OK ·', html.length, 'bytes · enrich(item + mapa por talhão + antes/depois + zoom/pan) · sanitize', SANITIZE.length, '· trap', FORBIDDEN.length, '· asserts', MUST.length);
