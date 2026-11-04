"""Preserve the supplied Shopify fragment and add the supplied customer reviews."""
from pathlib import Path
import html
import re

uploads = Path('/mnt/user-uploads')
source = (uploads / 'Enquanto_você_dorme_a_SonoLift_cria_uma_camada_pasted.html').read_text()
brief = (uploads / 'Lovable_crie_uma_seção_moderna_e_de_altíssima_pasted.md').read_text()
reviews = re.findall(r'\d+\. (.*?) \((.*?)\)\s*- Texto: "(.*?)"\s*- Imagem: (https://\S+)', brief)
assert len(reviews) == 8
css = '''#slr{--review-paper:#fff;--review-ink:#1a1c33;--review-muted:#666;--review-line:#e5e1d9;--review-star:#b78832;--review-verified:#176b45;--review-tint:#edf8f1}#slr .rv{padding:64px 16px;background:var(--review-paper);color:var(--review-ink)}#slr .rv>div{max-width:1056px;margin:auto}#slr .rv header{text-align:center;margin-bottom:32px}#slr .rv h2{font-size:2rem!important;line-height:1.25!important;letter-spacing:0}#slr .rv header p{font-size:15px;line-height:1.6;margin:12px auto 0;max-width:560px;color:var(--review-muted)}#slr .rv header strong{display:block;margin-top:20px;font-size:20px}#slr .rs{color:var(--review-star);letter-spacing:0}#slr .rg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}#slr .rg article{padding:24px;border:1px solid var(--review-line);border-radius:8px;min-width:0}#slr .rn{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px}#slr .rn b{font-size:16px}#slr .rn small{display:block;font-size:13px;color:var(--review-muted)}#slr .rv .vb{color:var(--review-verified);background:var(--review-tint);font-size:11px;font-weight:600;padding:4px 8px;border-radius:4px;white-space:nowrap}#slr .rg .rs{margin-top:14px;font-size:18px}#slr .rg p{font-size:16px;line-height:1.65;margin:10px 0 18px}#slr .rg img{display:block;width:100%;height:240px;object-fit:contain;border-radius:4px}@media(max-width:767px){#slr .rg{grid-template-columns:minmax(0,1fr);gap:16px}#slr .rg article{padding:20px}#slr .rv{padding:48px 16px}#slr .rv h2{font-size:1.75rem!important}}'''
cards = ''.join(f'<article><div class="rn"><div><b>{html.escape(name)}</b><small>{html.escape(state)}</small></div><span class="vb">✓ Compra Verificada</span></div><div class="rs" aria-label="5 de 5 estrelas">★★★★★</div><p>“{html.escape(text)}”</p><img src="{url}" alt="Foto enviada por {html.escape(name)}" loading="lazy" width="480" height="240"></article>' for name,state,text,url in reviews)
section = '<section id="avaliacoes" class="rv" aria-labelledby="rv-title"><div><header><h2 id="rv-title">O que nossas clientes dizem sobre o SonoLift</h2><strong><span class="rs" aria-label="5 estrelas">★★★★★</span> 4.8/5.0</strong><p>Baseado em mais de 90 avaliações verificadas de clientes em todo o Brasil</p></header><div class="rg">'+cards+'</div></div></section>'
assert source.count('<section id="oferta"') == 1
output = source.replace('<section id="oferta"', section+'<section id="oferta"', 1)
output = '<style>'+css+'</style>'+output
# Shorten repeated media prefixes without changing their resolved destinations.
host = 'https://sonoliftbr.lovable.app/__l5e/assets-v1/'
output = output.replace('src="'+host, 'data-s="')
output += '<script>document.querySelectorAll("#slr [data-s]").forEach(function(e){e.src="'+host+'"+e.getAttribute("data-s")})</script>'
review_host = 'https://ae-pic-a1.aliexpress-media.com/kf/'
output = output.replace('src="'+review_host, 'data-r="')
output += '<script>document.querySelectorAll("#avaliacoes [data-r]").forEach(function(e){e.src="'+review_host+'"+e.getAttribute("data-r")})</script>'
output = output.replace('alt="Foto enviada por ', 'alt="Foto: ')
output = output.replace(' width="480" height="240"', '')
# Remove only legacy handlers whose associated controls are absent in this file.
assert 'id="sl-ba-range"' not in source and 'class="sl-count"' not in source and 'sl-scroll"' not in source
start = output.index("var range=document.getElementById('sl-ba-range')")
end = output.index("(function(){var sroot=document.getElementById('sl-hero-slideshow')", start)
output = output[:start]+output[end:]
# Remove indentation and inter-tag whitespace only; keep visible copy and scripts.
output = re.sub(r'>\s+<', '><', output)
output = re.sub(r'/\*.*?\*/', '', output, flags=re.S)
output = re.sub(r'<style>(.*?)</style>', lambda m: '<style>'+re.sub(r'\s*([{}:;,])\s*',r'\1',m[1].strip())+'</style>', output, flags=re.S)
assert len(output.encode('utf-16-le'))//2 <= 50000, len(output)
Path('sonolift-shopify-avaliacoes.html').write_text(output)
# Root head already contains these two trackers in the preview.
preview = re.sub(r'<script>.*?</script>', lambda m: '' if 'fbq' in m[0] or 'var l_ge=atob(' in m[0] else m[0], output, flags=re.S)
preview = re.sub(r'<noscript>.*?</noscript>', '', preview, flags=re.S)
Path('src/content/sonolift-atual.html').write_text(preview)
print('Export characters:', len(output), 'Shopify UTF-16 characters:',len(output.encode('utf-16-le'))//2)