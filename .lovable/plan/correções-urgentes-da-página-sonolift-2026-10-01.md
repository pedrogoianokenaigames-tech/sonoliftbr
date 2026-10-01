# Correções urgentes da página SonoLift

## Alterações
- Trocar a mensagem da barra superior pelo novo texto e iniciar o cronômetro em 25:00, reiniciando automaticamente ao zerar.
- Remover as menções a R$ 187,15 e R$ 19,78 e padronizar a oferta para R$ 197,00 no Pix ou 12x de R$ 16,42 sem juros no cartão.
- Manter os percentuais existentes do estudo (87%, 92%, 78% e 100%) e tornar sua exibição resistente a falhas da animação.
- Gerar um novo arquivo HTML completo para Shopify dentro do limite do bloco Custom Liquid.

## Verificação
- Conferir no computador e no celular a barra, o preço e os quatro percentuais.
- Confirmar que o cronômetro conta regressivamente e que o HTML exportado não contém os preços antigos.

## Detalhes técnicos
- A aparência, o checkout, o WhatsApp, os vídeos, os pixels e as demais seções permanecem inalterados.
- Os números serão mostrados imediatamente no HTML; a animação fará apenas a progressão visual, sem deixar `0%` caso não seja iniciada.