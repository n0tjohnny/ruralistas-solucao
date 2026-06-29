#!/usr/bin/env python3
# Loads XTTS-v2 ONCE and synthesizes the 5 prototype scenes to <outdir>/a1..a5.wav.
# Per-call `tts` CLI reloads the 1.8GB model every time (5x = minutes wasted); this loads once.
import sys, os
outdir = sys.argv[1] if len(sys.argv) > 1 else "/tmp/xtts"
os.makedirs(outdir, exist_ok=True)
SCENES = [
 "Validar um C A R é um ato com peso jurídico, leva o nome de uma servidora. A máquina já tria sessenta e seis mil cadastros por dia, mas o país concluiu só cinco vírgula nove por cento. O gargalo não é detecção. É uma decisão que alguém aceite assinar.",
 "O Gabarito ordena a fila por risco. O score fica invisível aqui, ele só decide a ordem. A analista gasta o olho onde importa: nos talhões que mudaram e na confiança baixa.",
 "Ela abre o caso e arrasta. À esquerda a base, à direita a imagem de hoje. O desmate aparece com os próprios olhos, em satélite real. Ao lado, a evidência datada: a cena Sentinel, o alerta DETER, a base de dois mil e vinte e três, e a versão do score. É essa trilha que torna a liberação assinável.",
 "E o mais importante: quando há borda, nuvem ou classe não calibrada, o sistema não libera. Ele encaminha para foto-interpretação manual e diz por quê. Falso negativo visível é critério de morte: na dúvida, vai para a pessoa.",
 "Não pedimos para acreditar. No backtest em talhões de Goiás, medimos quantos dias o sinal aparece antes de a base anual ser atualizada, sempre calibrando contra PRODES e DETER, nunca contra o mapa velho. Esse é o Gabarito.",
]
from TTS.api import TTS
print("loading XTTS-v2 (once)…", flush=True)
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2")
for i, text in enumerate(SCENES, 1):
    out = os.path.join(outdir, f"a{i}.wav")
    print(f"scene {i}/5 -> {out}", flush=True)
    tts.tts_to_file(text=text, language="pt", speaker="Ana Florence", file_path=out)
print("DONE", flush=True)
