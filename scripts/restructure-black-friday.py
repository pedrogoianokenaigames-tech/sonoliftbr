from pathlib import Path
from bs4 import BeautifulSoup
import re

source = Path('/mnt/user-uploads/Acorda_com_o_rosto_marcado_pelo_travesseiro_pasted.html').read_text()
soup = BeautifulSoup(source, 'html.parser')
host = 'https://sonoliftbr.lovable.app/__l5e/assets-v1/'
for el in soup.select('[data-s]'):
    el['src'] = host + el['data-s']; del el['data-s']
for el in soup.select('[data-r]'):
    el['src'] = 'https://ae-pic-a1.aliexpress-media.com/kf/' + el['data-r']; del el['data-r']
checkout = soup.select_one('#oferta a')['href']
trackers = ''.join(str(s) for s in soup.find_all('script') if 'fbq' in s.text or 'var l_ge=atob' in s.text)
trackers = trackers.replace('n.laoaded', 'n.loaded')
noscript = str(soup.find('noscript'))
font = str(soup.find('link', href=re.compile('fonts.googleapis')))
header = soup.select_one('#sl-header')
for a in header.select('a[href="#como-usar"]'): a['href'] = '#videos-sonolift'; a.string = 'Como usar'
header.select_one('.sl-hamb')['aria-label'] = 'Abrir menu'
footer = soup.find('footer')
footer.select_one('.mt-3.max-w-sm').string = 'Patches reutilizáveis de silicone. Cuidado noturno para rosto e colo.'
for a in footer.select('a[href="#como-usar"]'): a['href'] = '#videos-sonolift'
whatsapp = soup.select_one('.sl-whatsapp'); whatsapp['aria-label'] = 'Falar no WhatsApp'
reviews = soup.select_one('#avaliacoes')
short_reviews = []
for index in [3,5]:
    card = BeautifulSoup(str(reviews.select('article')[index]), 'html.parser').article
    card['class'] = 'quick-review'
    short_reviews.append(str(card))
videos = soup.select('#videos-sonolift video')
for i,v in enumerate(videos):
    v['preload'] = 'metadata'
    v['poster'] = soup.select('#sl-hero-slideshow img')[i]['src']
    v['aria-label'] = 'SonoLift em uso — vídeo ' + str(i+1)

def image(path,alt):
    return '<img src="'+host+path+'" alt="'+alt+'" loading="lazy">'
def button(label):
    return '<a class="sl-cta" href="'+checkout+'" target="_blank" rel="noopener">'+label+' <span aria-hidden="true">→</span></a>'
def price():
    return '<div class="price"><strong>R$ 227,05 no Pix</strong><span>5% OFF · ou R$ 239,00 em 12x de R$ 19,92 sem juros</span></div>'
security = '<div class="security"><span>🔒 Compra segura</span><span>VISA</span><span>Mastercard</span><span>Pix</span></div>'
hero_image = soup.select('#sl-hero-slideshow img')[0]['src']
hero = '<section id="top"><div class="wrap hero"><p class="eyebrow">SonoLift™ · Cuidado noturno</p><h1>Cansada de acordar com o rosto marcado pelo travesseiro?</h1><p class="intro">Patches de silicone criam uma camada física para reduzir o atrito e preservar a hidratação da pele à noite.</p><img class="hero-photo" src="'+hero_image+'" alt="Patches SonoLift aplicados no rosto" fetchpriority="high"><p class="gift">Kit Facial 16 peças + Adesivo de Colo GRÁTIS</p>'+price()+button('QUERO MEU KIT + COLO GRÁTIS')+'<div id="avaliacoes-rapidas" class="quick-grid">'+''.join(short_reviews)+'</div><p class="social">★★★★★ · Mais de 12 mil clientes atendidas</p><p class="shipping">Frete Grátis Brasil</p>'+security+'</div></section>'
mechanism = '<section id="microclima" class="band"><div class="wrap"><p class="eyebrow">Microclima de proteção noturna</p><h2>Cuidado simples enquanto você dorme.</h2><div class="mechanism">'+''.join('<article><span class="number">'+n+'</span><h3>'+title+'</h3><p>'+text+'</p></article>' for n,title,text in [('01','Proteção','Reduz o atrito direto com o travesseiro.'),('02','Preservação','Ajuda a manter a hidratação superficial da pele.'),('03','Aparência','A pele pode acordar mais macia e descansada.')])+'</div><p class="disclaimer">Produto cosmético de uso externo. Não é tratamento médico e não elimina rugas permanentemente. Os resultados variam.</p></div></section>'
proof = '<section id="prova-visual"><div class="wrap"><p class="eyebrow">Veja de perto</p><h2>Rosto e colo: o cuidado em imagens.</h2><div class="proof-grid"><figure>'+image('636add08-96df-44c6-a92b-64e913b9e48f/antes.png','Colo antes do uso')+'<figcaption>Colo · Antes</figcaption></figure><figure>'+image('ee13a90a-ef08-4fdf-b1a8-10d2d2e9e3f3/depois.png','Colo depois do uso')+'<figcaption>Colo · Depois</figcaption></figure></div><figure class="face-proof">'+image('fb8c427a-6e09-4eed-8886-c1737ba3b9ad/ANTES_E_DEPOIS_imagem_02.webp','Comparação visual do rosto antes e depois')+'<figcaption>Rosto · Comparação visual</figcaption></figure><p class="disclaimer">A aparência após o uso varia de pessoa para pessoa.</p></div></section>'
ugc = '<section id="videos-sonolift" class="band"><div class="wrap"><p class="eyebrow">Na prática</p><h2>Veja o SonoLift em uso.</h2><div class="video-grid">'+''.join('<figure>'+str(v)+'</figure>' for v in videos)+'</div><p class="ritual">Pele limpa e seca. Aplique, descanse, retire e lave.</p></div></section>'
offer = '<section id="oferta"><div class="wrap"><p class="eyebrow">Black Friday SonoLift</p><h2>Seu kit completo. O colo é nosso presente.</h2><div id="conteudo-kit" class="kit-grid"><div>'+image('25376bb6-4fe6-40a5-ae0a-cf30885001a6/rejuderme-smile.webp','Kit Facial SonoLift de silicone')+'<h3>Kit Facial · 16 peças</h3><p>Patches reutilizáveis para as regiões do rosto.</p></div><div>'+image('2659e8e7-44ce-44ce-9b5e-cba0bab43994/peito.jpg','Adesivo SonoLift para o colo')+'<h3>Patch de Colo · GRÁTIS</h3><p>Mais cuidado para quem dorme de lado.</p></div></div><div class="closing"><h3>Kit Facial + Colo GRÁTIS</h3>'+price()+button('GARANTIR MEU KIT SONOLIFT')+security+'<div class="guarantee" data-guarantee-days="7"><strong>Garantia Incondicional de 7 Dias</strong><p>Não gostou? Solicite a devolução em até 7 dias após receber o pedido.</p><a href="https://www.sonolift.com.br/pages/reembolso-trocas-e-devolucoes">Ver política de reembolso</a></div></div></div></section>'
questions = [('Como aplicar?','Limpe e seque bem a pele. Retire a película e pressione o patch suavemente.'),('Como lavar e guardar?','Enxágue com água corrente após o uso. Deixe secar naturalmente e guarde na película protetora.'),('Quanto tempo dura?','Reutilizável por até 30 noites, conforme limpeza, secagem e conservação.'),('Posso usar em pele sensível?','Faça um teste em uma pequena área. Não use sobre pele irritada ou lesionada. Suspenda se houver desconforto.'),('Qual é o prazo de entrega?','De 6 a 15 dias. O despacho ocorre em até 48 horas após a confirmação do pedido.'),('Tenho garantia?','Sim. Você tem 7 dias após receber o pedido para solicitar devolução.')]
faq = '<section id="duvidas" class="band"><div class="wrap faq"><h2>Dúvidas rápidas.</h2>'+''.join('<details><summary>'+q+'<span aria-hidden="true">+</span></summary><p>'+a+'</p></details>' for q,a in questions)+'</div></section>'
urgency = '<div class="sl-urgency"><div class="sl-urgency-inner"><span><b>Black Friday SonoLift</b> · Kit Facial + Colo GRÁTIS</span><span class="sl-timer">Termina em <b id="bf-timer">--:--:--</b></span></div></div>'
sticky = '<div class="k" id="k">'+price()+'<a href="'+checkout+'" rel="noopener" target="_blank">COMPRAR →</a></div>'
js = '''(function(){var end=Date.parse('2026-11-28T00:00:00-03:00'),timer=document.getElementById('bf-timer');function tick(){var left=Math.max(0,Math.floor((end-Date.now())/1000)),days=Math.floor(left/86400);timer.textContent=(days?days+'d ':'')+[Math.floor(left%86400/3600),Math.floor(left%3600/60),left%60].map(function(n){return String(n).padStart(2,'0')}).join(':');if(!left)timer.textContent='Encerrada'}tick();setInterval(tick,1000);var t=document.getElementById('rv-track'),buttons=document.querySelectorAll('[data-rv-dir]');function update(){buttons[0].disabled=t.scrollLeft<2;buttons[1].disabled=t.scrollLeft>=t.scrollWidth-t.clientWidth-2}function move(d){t.scrollBy({left:d*(t.children[0].getBoundingClientRect().width+20),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}buttons.forEach(function(b){b.onclick=function(){move(Number(b.dataset.rvDir))}});t.addEventListener('scroll',update,{passive:true});t.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1)}});new ResizeObserver(update).observe(t);update();var bar=document.getElementById('k');function show(){bar.classList.toggle('on',scrollY>500)}addEventListener('scroll',show,{passive:true});show()})();'''
css = Path('src/content/black-friday.css').read_text()
output = '<meta charset="utf-8">'+font+'<style>'+css+'</style>'+trackers+noscript+'<div id="slr">'+urgency+str(header)+hero+mechanism+proof+ugc+str(reviews)+offer+faq+str(footer)+str(whatsapp)+'</div>'+sticky+'<script>'+js+'</script>'
output = re.sub(r'>\s+<','><',output)
assert len(output.encode('utf-16-le'))//2 < 50000
Path('sonolift-shopify-black-friday-v2.html').write_text(output)
preview = output.replace(trackers,'').replace(noscript,'')
Path('src/content/sonolift-atual.html').write_text(preview)
print('Shopify characters:',len(output.encode('utf-16-le'))//2)