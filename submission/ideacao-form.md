# Ideação, texto pronto para o formulário appdesafios

> Colar campo a campo. O resumo está dentro de 300 caracteres (contado).

## Nome da solução
**Gabarito**

## Desafio
Desafio 02, Melhorar o acesso aos dados geoespaciais do CAR

## Logo
Quadrado arredondado verde-mata (#25382A) com o ícone "gabarito" em dourado (#D6A23E):
uma grade/tabela com uma marca de conferência. (Qualidade do logo não é avaliada, usar o
SVG do cabeçalho de `../pitch.html`.)

## Resumo (≤ 300 caracteres), **274 caracteres**
> O Gabarito é o roteador auditável da análise do CAR: com Sentinel-2 + PRODES/DETER detecta os talhões que mudaram, remapeia só eles e entrega à analista da OEMA uma fila por risco com trilha de auditoria datada, tornando a liberação assinável. Aberto, roda em QGIS/PostGIS.

## Problema
A base de referência que o estado usa para conferir cada CAR é um **snapshot pontual**, anual e
em classes genéricas. A máquina já tria muito (Análise Dinamizada do SICAR: até **66 mil/dia**),
mas a conclusão nacional foi de **2,3% → 5,9%** em um ano e **~94% dos 8,1 mi de cadastros** seguem
sem conclusão. O gargalo **não é detecção, é uma decisão que o servidor aceite assinar**, porque
validar/notificar um CAR é ato administrativo com peso jurídico.

## Solução
Uma **base de referência viva**: detecta o que mudou (Sentinel-2 gratuito + alertas PRODES/DETER
sobre um t0 aberto), **remapeia só os talhões alterados** com revisão humana, e entrega a base
fresca em **formato aberto com um score de confiança por talhão**. O score é **invisível na fila**
(só ordena por risco) e **assinável sob demanda** (abre a evidência datada: recorte Sentinel,
alerta, base t0, versão do score). Roteia o automático onde a confiança é alta; manda ao humano
onde é baixa. **Não substitui o SICAR nem tira a decisão legal do analista.**

## Diferencial
Priorizar a análise **já existe** (o MapBiomas Alerta prioriza por imóvel). O que ninguém produtiza
é **confiança por talhão como decisão + trilha de auditoria assinável + classes do Código Florestal
sub-anual**. O score é **calibrado contra verdade independente** (PRODES/DETER/campo), nunca contra a
base velha, sem isso, mediria a própria ignorância.

## Próximos passos
1. **Piloto sem custo com a SEMAD-GO** (Goiás/Cerrado, céu limpo, base qualificada, menor
   desmatamento da série): acesso a um recorte de t0 + **backtest de antecipação** (precision,
   recall, kappa, falso-negativo visível = 0).
2. **Validação com analista de OEMA** (fluxo da fila + trilha).
3. **Arranjo de sustentação:** SFB-serviço + consórcio ABEMA + OPEX via Fundo Amazônia/BNDES;
   **minuta de Nota Técnica** que reparte a responsabilidade (anexa).
4. **Escala onde a pressão está:** Matopiba (77,9% do desmatamento do Cerrado) e Amazônia com
   Sentinel-1 (SAR), Fase 2.

> A organização declarou que quer **fazer a ponte** das soluções para o desenvolvimento real, 
> submeter com um pedido datado e um dono nomeado É o teste de adoção.
