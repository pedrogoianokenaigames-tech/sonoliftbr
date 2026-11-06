from pathlib import Path
import re

source = Path('/mnt/user-uploads/meta_charset_utf-8_link_href_pasted-2.txt').read_text()
old_banner = '<span><b>Black Friday SonoLift</b> · Kit Facial + Colo GRÁTIS</span><span class="sl-timer">Termina em <b id="bf-timer">15:00</b></span>'
new_banner = '<span><b>BLACK FRIDAY ESTENDIDA</b> - Kit Facial<span data-colo-gift> + COLO GRÁTIS</span> termina em 01/12</span><span class="sl-timer"><b id="bf-timer" role="timer">-- dias : --h : --m : --s</b></span>'
assert old_banner in source
source = source.replace(old_banner, new_banner, 1)
source = source.replace('flex-wrap:wrap;align-items:center;justify-content:center;gap:8px 24px;text-align:center;font-size:13px', 'flex-wrap:wrap;flex-direction:column;align-items:center;justify-content:center;gap:8px 24px;text-align:center;font-size:13px', 1)
source = source.replace('</style>', '#slr [data-colo-gift][hidden]{display:none!important}#slr .sl-timer{max-width:100%}#slr #bf-timer{white-space:normal}@media(max-width:360px){#slr #bf-timer{font-size:24px}}</style>', 1)
source = source.replace('<div><img src="https://sonoliftbr.lovable.app/__l5e/assets-v1/2659e8e7', '<div data-colo-gift><img src="https://sonoliftbr.lovable.app/__l5e/assets-v1/2659e8e7', 1)
source = source.replace('Kit Facial 16 peças + Adesivo de Colo GRÁTIS</p>', 'Kit Facial 16 peças<span data-colo-gift> + Adesivo de Colo GRÁTIS</span></p>', 1)
source = source.replace('Kit Facial + Colo GRÁTIS</h3>', 'Kit Facial<span data-colo-gift> + Colo GRÁTIS</span></h3>', 1)
source = source.replace('16 patches reutilizáveis para o rosto + 1 patch de colo grátis</p>', '16 patches reutilizáveis para o rosto<span data-colo-gift> + 1 patch de colo grátis</span></p>', 1)
source = source.replace('Seu kit completo. O colo é nosso presente.</h2>', 'Seu kit completo.<span data-colo-gift> O colo é nosso presente.</span></h2>', 1)
start = source.index("var end=Date.now()+15*60*1000")
end = source.index("var t=document.getElementById('rv-track')", start)
timer = """var end=Date.parse('2026-12-01T23:59:59-03:00'),timer=document.getElementById('bf-timer');function tick(){var now=Date.now(),left=Math.max(0,Math.ceil((end-now)/1000)),expired=now>=end;timer.textContent=expired?'Oferta encerrada':Math.floor(left/86400)+' dias : '+String(Math.floor(left%86400/3600)).padStart(2,'0')+'h : '+String(Math.floor(left%3600/60)).padStart(2,'0')+'m : '+String(left%60).padStart(2,'0')+'s';document.querySelectorAll('[data-colo-gift]').forEach(function(el){el.hidden=expired})}tick();setInterval(tick,1000);document.addEventListener('visibilitychange',tick);"""
source = source[:start] + timer + source[end:]
assert len(source.encode('utf-16-le')) // 2 <= 50000
Path('sonolift-shopify-black-friday-estendida.html').write_text(source)
preview = re.sub(r'<script>.*?</script>', lambda m: '' if 'fbq' in m[0] or 'var l_ge=atob' in m[0] else m[0], source, flags=re.S)
preview = re.sub(r'<noscript>.*?</noscript>', '', preview, flags=re.S)
Path('src/content/sonolift-atual.html').write_text(preview)