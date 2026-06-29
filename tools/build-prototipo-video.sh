#!/usr/bin/env bash
# Builds submission/prototipo-gabarito.mp4 (<=2min) from REAL captures of the live
# /painel prototype + the pitch deck, with pt-BR TTS narration (espeak-ng).
# AI voice is allowed by the edital (human narration is only recommended) — this is a
# ready-to-upload DRAFT; ideally re-voice with a team member before publishing.
# Idempotent: re-running overwrites outputs. Needs: chromium-browser, espeak-ng, ffmpeg, magick.
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$PWD"; TMP="$(mktemp -d)"; CH=/usr/bin/chromium-browser
VOICE="${1:-espeak}"   # espeak (license-clean, robótica) | xtts (natural pt-BR, modelo CPML não-comercial em cache)
RATE=168               # espeak wpm; bump if total creeps over budget
XTTS=tools/xtts-venv/bin/tts; XSPK="Ana Florence"
if [ "$VOICE" = "xtts" ]; then OUT="$ROOT/submission/prototipo-gabarito-voz-natural.mp4";
else OUT="$ROOT/submission/prototipo-gabarito.mp4"; fi
synth () { # $1=text $2=outwav
  if [ "$VOICE" = "xtts" ]; then
    "$XTTS" --model_name tts_models/multilingual/multi-dataset/xtts_v2 \
      --text "$1" --language_idx pt --speaker_idx "$XSPK" --out_path "$2" >/dev/null 2>&1
  else
    espeak-ng -v pt-br -s $RATE -p 42 "$1" -w "$2" 2>/dev/null
  fi
}

# --- narration per scene (number words expanded for clean TTS) ---
N1="Validar um C A R é um ato com peso jurídico, leva o nome de uma servidora. A máquina já tria sessenta e seis mil cadastros por dia, mas o país concluiu só cinco vírgula nove por cento. O gargalo não é detecção. É uma decisão que alguém aceite assinar."
N2="O Gabarito ordena a fila por risco. O score fica invisível aqui, ele só decide a ordem. A analista gasta o olho onde importa: nos talhões que mudaram e na confiança baixa."
N3="Ela abre o caso e arrasta. À esquerda a base, à direita a imagem de hoje. O desmate aparece com os próprios olhos, em satélite real. Ao lado, a evidência datada: a cena Sentinel, o alerta DETER, a base de dois mil e vinte e três, e a versão do score. É essa trilha que torna a liberação assinável."
N4="E o mais importante: quando há borda, nuvem ou classe não calibrada, o sistema não libera. Ele encaminha para foto-interpretação manual e diz por quê. Falso negativo visível é critério de morte: na dúvida, vai para a pessoa."
N5="Não pedimos para acreditar. No backtest em talhões de Goiás, medimos quantos dias o sinal aparece antes de a base anual ser atualizada, sempre calibrando contra PRODES e DETER, nunca contra o mapa velho. Esse é o Gabarito."

# --- 1. capture real frames ---
shot_painel () { # $1=selectedId  $2=outfile
  local f="public/_vid_$1.html"
  sed -e "s/tourActive:!done/tourActive:false/" -e "s/selectedId:'rv7'/selectedId:'$1'/" public/painel.html > "$f"
  "$CH" --headless=new --no-sandbox --hide-scrollbars --virtual-time-budget=16000 \
        --window-size=1280,720 --force-device-scale-factor=1.5 \
        --screenshot="$TMP/$2" "file://$ROOT/$f" >/dev/null 2>&1
  rm -f "$f"
}
echo "[1/4] capturing frames…"
magick -density 150 "submission/gabarito-pitch.pdf[0]" -background "#25382A" -flatten "$TMP/s1.png"  # capa
shot_painel rv7  s2.png
# cena 3 = plano de detalhe: zoom na trilha de auditoria (painel direito do mesmo frame)
magick "$TMP/s2.png" -crop 820x1080+1100+0 +repage "$TMP/s3.png"
shot_painel ari3 s4.png                                                                              # conf baixa -> bloqueio
magick -density 150 "submission/gabarito-pitch.pdf[6]" -background "#25382A" -flatten "$TMP/s5.png"  # Impacto/backtest

# --- 2. TTS + per-scene clips ---
echo "[2/4] narration + clips… (voz=$VOICE)"
if [ "$VOICE" = "xtts" ]; then AF="atempo=1.06,apad=pad_dur=0.4"; else AF="apad=pad_dur=0.45"; fi
# xtts: gera as 5 narrações carregando o modelo UMA vez (CLI recarrega 1.8GB por chamada)
if [ "$VOICE" = "xtts" ]; then tools/xtts-venv/bin/python tools/xtts-narrate.py "$TMP"; fi
i=0; : > "$TMP/list.txt"
for VAR in N1 N2 N3 N4 N5; do
  i=$((i+1)); txt="${!VAR}"
  [ -f "$TMP/a$i.wav" ] || synth "$txt" "$TMP/a$i.wav"
  ffmpeg -y -loglevel error -loop 1 -i "$TMP/s$i.png" -i "$TMP/a$i.wav" \
    -af "$AF" -shortest \
    -c:v libx264 -tune stillimage -r 25 -pix_fmt yuv420p \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x25382A,setsar=1" \
    -c:a aac -b:a 128k "$TMP/clip$i.mp4"
  echo "file '$TMP/clip$i.mp4'" >> "$TMP/list.txt"
done

# --- 3. concat ---
echo "[3/4] concat…"
ffmpeg -y -loglevel error -f concat -safe 0 -i "$TMP/list.txt" -c copy "$OUT"

# --- 4. verify duration budget ---
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT")
echo "[4/4] done -> $OUT   (${DUR}s)"
awk -v d="$DUR" 'BEGIN{ if (d>119){ print "FATAL: >119s, raise RATE"; exit 1 } else print "OK: under 2:00 budget" }'
rm -rf "$TMP"
