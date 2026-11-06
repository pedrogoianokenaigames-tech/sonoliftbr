from pathlib import Path
import re

source = Path('/mnt/user-uploads/meta_charset_utf-8_link_href_pasted.txt').read_text()
hero = '<p class="sl-daily-note">Sai menos que um café por dia para dormir sem acordar marcada. 12x de R$19,92 no cartão ou R$227,05 no Pix.</p>'
value = '<div class="sl-kit-value"><strong>O que você leva:</strong><p>16 patches reutilizáveis para o rosto + 1 patch de colo grátis</p><p>Usando 30 noites, sai R$7,50 por noite de sono</p><p>Você paga uma vez e usa todo mês em casa, sem precisar ir à clínica.</p></div>'
css = '#slr{--value-bg:#f3ecdf}#slr .sl-daily-note{max-width:540px;margin:10px auto 0;color:var(--muted);font-size:12px;line-height:1.5;text-align:center}#slr .sl-kit-value{max-width:540px;margin:20px auto 0;padding:18px;background:var(--value-bg);border-radius:8px;text-align:left;font-size:15px;line-height:1.5}#slr .sl-kit-value p{margin:10px 0 0}'
hero_anchor = '</a><div id="avaliacoes-rapidas"'
final_anchor = '<a class="sl-cta" href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" target="_blank" rel="noopener">GARANTIR MEU KIT SONOLIFT'
assert source.count(hero_anchor) == 1
assert source.count(final_anchor) == 1
output = source.replace('</style>', css + '</style>', 1)
output = output.replace(hero_anchor, '</a>' + hero + '<div id="avaliacoes-rapidas"', 1)
output = output.replace(final_anchor, value + final_anchor, 1)
old_guarantee = '<strong>Garantia Incondicional de 7 Dias</strong><p>Não gostou? Solicite a devolução em até 7 dias após receber o pedido.</p>'
assert output.count(old_guarantee) == 1
output = output.replace(old_guarantee, '<p>Garantia incondicional de 7 dias. Não gostou? Devolvemos seu dinheiro.</p>', 1)
assert len(output) <= 50000
Path('sonolift-shopify-black-friday-v3.html').write_text(output)
Path('/mnt/documents/sonolift-shopify-black-friday-v3.html').write_text(output)
# Preserve standalone tracking; the preview already loads trackers in its root head.
preview = re.sub(r'</style>.*?<div id="slr">', '</style><div id="slr">', output, count=1, flags=re.S)
Path('src/content/sonolift-atual.html').write_text(preview)
print(f'Export: {len(output)} characters')