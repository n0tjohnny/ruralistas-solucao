#!/usr/bin/env node
// Baixa imagens de satélite REAIS (Sentinel-2) para o protótipo /painel e grava em
// public/assets/sat/. Fonte: EOX "Sentinel-2 cloudless" (s2maps.eu) — mosaicos anuais
// reais do Sentinel-2 (ESA/Copernicus), livres (CC-BY-4.0). Provenance auditável: cada
// imagem é uma cena Sentinel-2 real das coordenadas reais do município em Goiás.
//
// Uso:  node tools/fetch-satellite.cjs        (idempotente: re-baixa por cima)
// Requer: curl. Sem dependências npm.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '..', 'public', 'assets', 'sat');
fs.mkdirSync(OUT, { recursive: true });

const W = 1100, H = 900;                 // object-fit:cover no mapa
const HOJE = '2024', BASE = '2018';      // duas épocas REAIS do Sentinel-2 (cloudless)
// bbox aspect ~ W/H (1.222) para minimizar distorção: lonspan = 1.222 * latspan
const DLAT = 0.018, DLON = 0.022;        // meia-altura/largura do recorte (~4 km)

// coordenadas REAIS de talhões rurais em Goiás (frontier cerrado×agricultura).
// wipe:true → baixa BASE(2018)+HOJE(2024) para o antes/depois real.
const CASES = [
  { id:'rv7',  lat:-17.555, lon:-50.950, wipe:true  }, // Rio Verde — supressão (verde 2018 → solo exposto 2024)
  { id:'jat12',lat:-17.805, lon:-51.700, wipe:true  }, // Jataí — conversão de campo
  { id:'min8', lat:-17.760, lon:-52.605, wipe:true  }, // Mineiros — APP, rio proeminente
  { id:'cris4',lat:-16.400, lon:-47.600, wipe:false }, // Cristalina — pivôs centrais (+ nuvem parcial no overlay)
  { id:'ari3', lat:-15.900, lon:-52.250, wipe:false }, // Aragarças — cena coberta por nuvem no overlay
  { id:'luz2', lat:-16.350, lon:-47.900, wipe:false }, // Luziânia — estável
  { id:'cat5', lat:-18.100, lon:-47.900, wipe:false }, // Catalão — estável
  { id:'ita1', lat:-16.050, lon:-49.750, wipe:false }, // Itaberaí — estável
  { id:'for9', lat:-15.550, lon:-47.250, wipe:false }, // Formosa — estável
];

function url(lat, lon, year) {
  const bbox = `${(lon-DLON).toFixed(4)},${(lat-DLAT).toFixed(4)},${(lon+DLON).toFixed(4)},${(lat+DLAT).toFixed(4)}`;
  return `https://tiles.maps.eox.at/wms?service=WMS&version=1.1.1&request=GetMap`
    + `&layers=s2cloudless-${year}&srs=EPSG:4326&bbox=${bbox}&width=${W}&height=${H}&format=image/jpeg`;
}
function grab(u, dest) {
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      execFileSync('curl', ['-s', '--retry', '2', '--retry-delay', '2', '--max-time', '90', u, '-o', dest]);
      const b = fs.statSync(dest).size;
      if (b < 4000) throw new Error(`imagem vazia/erro (${b}B)`);
      return b;
    } catch (e) {
      lastErr = e;
      execFileSync('sleep', ['3']); // EOX rate-limit: espera e tenta de novo
    }
  }
  throw new Error(`falhou após 4 tentativas → ${dest}: ${lastErr && lastErr.message}`);
}

let total = 0;
for (const c of CASES) {
  total += grab(url(c.lat, c.lon, HOJE), path.join(OUT, `${c.id}-hoje.jpg`));
  if (c.wipe) total += grab(url(c.lat, c.lon, BASE), path.join(OUT, `${c.id}-base.jpg`));
  process.stdout.write(`  ${c.id} ✓${c.wipe ? ' (base+hoje)' : ''}\n`);
}
console.log(`fetch-satellite: OK · ${CASES.length} casos · ${(total/1024).toFixed(0)} KiB · fonte: EOX Sentinel-2 cloudless (${BASE}/${HOJE})`);
