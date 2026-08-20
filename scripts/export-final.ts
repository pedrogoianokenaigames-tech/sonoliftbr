import fs from 'fs';

const PROJECT_DOMAIN = 'https://sonoliftbr.lovable.app';

function resolveAsset(url: string) {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${PROJECT_DOMAIN}${url.startsWith('/') ? '' : '/'}${url}`;
}

async function generate() {
  console.log('Generating Final Shopify HTML (Full Version)...');

  const rootContent = fs.readFileSync('src/routes/__root.tsx', 'utf-8');
  
  const utmifyMatch = rootContent.match(/children:\s*`\(function\(\)\{var l_ge=atob\("([^"]+)"\)[^`]+`|children:\s*`([^`]*Utmify[^`]*)`/);
  const utmifyScript = utmifyMatch ? utmifyMatch[0].replace('children: ', '').replace(/`/g, '') : '';
  
  const metaPixelMatch = rootContent.match(/children:\s*`!function\(f,b,e,v,n,t,s\)[^`]+fbq\('track', 'PageView'\);`/);
  const metaPixelScript = metaPixelMatch ? metaPixelMatch[0].replace('children: ', '').replace(/`/g, '') : '';

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SonoLift™ — Kit Facial + Pescoço e Colo por R$ 197</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { gold: '#D4AF37', 'midnight-deep': '#0B1B3B', cream: '#FCF9F2' },
          fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Playfair Display', 'serif'] },
          backgroundImage: { 'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)' }
        }
      }
    }
  </script>
  
  <script>${utmifyScript}</script>
  <script>${metaPixelScript}</script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=976841758671110&ev=PageView&noscript=1"/></noscript>

  <style>
    body { background-color: #FCF9F2; color: #0B1B3B; font-family: 'Inter', sans-serif; }
    .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
    .reveal.active { opacity: 1; transform: translateY(0); }
    .hero-gallery img { max-height: 50vh; object-fit: contain; }
    @media (min-width: 768px) { .hero-gallery img { max-height: 600px; } }
  </style>
</head>
<body>
  <div class="sticky top-0 z-50 bg-black text-white py-2 text-center text-sm font-bold">
    ⏳ OFERTA RESERVADA POR: <span id="timer">09:59</span>
  </div>

  <nav class="bg-white border-b py-4 px-6 flex justify-between items-center sticky top-10 z-40">
    <a href="/" class="font-display text-2xl font-bold">SonoLift™</a>
    <div class="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
      <a href="/" class="hover:text-gold transition">Loja</a>
      <a href="#ciencia" class="hover:text-gold transition">Ciência</a>
    </div>
    <a href="#oferta" class="bg-midnight-deep text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Comprar</a>
  </nav>

  <main>
    <!-- HERO SECTION -->
    <section class="py-10 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div class="hero-gallery bg-white rounded-3xl p-4 shadow-xl">
        <img id="mainImage" src="${resolveAsset('/lovable-uploads/27116790-264f-4d2c-829d-d8122938006e.png')}" class="w-full">
        <div class="flex gap-2 mt-4 overflow-x-auto pb-2">
            <img onclick="document.getElementById('mainImage').src=this.src" src="${resolveAsset('/lovable-uploads/27116790-264f-4d2c-829d-d8122938006e.png')}" class="w-16 h-16 rounded-lg border cursor-pointer">
            <img onclick="document.getElementById('mainImage').src=this.src" src="${resolveAsset('/lovable-uploads/5d77431e-4361-460d-8547-49f3e4b77f11.png')}" class="w-16 h-16 rounded-lg border cursor-pointer">
            <img onclick="document.getElementById('mainImage').src=this.src" src="${resolveAsset('/lovable-uploads/d3e9c5ed-38e5-408f-89bc-992d9d150bf3.png')}" class="w-16 h-16 rounded-lg border cursor-pointer">
        </div>
      </div>

      <div>
        <div class="text-gold text-lg">★★★★★ <span class="text-midnight-deep text-sm font-bold ml-2">(12.480+ avaliações)</span></div>
        <h1 class="font-display text-4xl mt-2 leading-tight">Kit SonoLift™ Facial + Colo</h1>
        
        <div class="mt-6">
          <p class="text-gray-500 line-through">De R$ 397,00</p>
          <div class="flex items-center gap-4">
            <span class="text-red-600 text-5xl font-black">R$ 197</span>
            <span class="bg-red-600 text-white text-[10px] px-2 py-1 rounded font-bold">50% OFF</span>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span class="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
              Sistema Facial + Colo GRÁTIS
            </span>
          </div>
          <p class="text-emerald-700 font-bold mt-1">ou R$ 187,15 no Pix</p>
          <p class="text-sm">Em até 12x de R$ 16,42</p>
        </div>

        <div class="mt-6 bg-amber-50 border border-amber-200 p-3 rounded-xl text-center font-bold text-amber-900 text-sm">
          🎁 OFERTA: Kit Rosto + Kit Colo GRÁTIS
        </div>

        <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="block mt-6 bg-gold-gradient text-midnight-deep text-center py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition">
          GARANTIR MEU KIT + COLO GRÁTIS →
        </a>
        <div class="mt-3 text-center text-[13px] font-bold text-midnight-deep leading-snug">
          Leve 2 Kits pelo preço de 1 por apenas <span class="text-red-600">R$ 187,15 no Pix</span><br/>
          (ou 12x de R$ 19,78 no cartão)
        </div>

        <div class="mt-8 grid grid-cols-2 gap-4 text-xs font-bold uppercase opacity-80">
          <div>✓ Frete Grátis Brasil</div>
          <div>✓ Garantia 30 Dias</div>
          <div>✓ 16 Adesivos Rosto</div>
          <div>✓ +1 Colo Grátis</div>
        </div>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-border pt-6 opacity-95 sm:justify-start">
          <img src="https://img.icons8.com/color/48/visa.png" class="h-6">
          <img src="https://img.icons8.com/color/48/mastercard.png" class="h-6">
          <img src="${resolveAsset('/lovable-uploads/c1334645-12cf-46d5-a33e-1081a292d37c.png')}" class="h-6">
          <img src="${resolveAsset('/lovable-uploads/489f6631-01cd-4c8d-852b-7c42767df88e.png')}" class="h-6">
          <div class="h-4 w-px bg-gray-200 hidden sm:block"></div>
          <div class="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.895 10 4 10.895 4 12V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V12C20 10.895 19.105 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7ZM12 17C11.172 17 10.5 16.328 10.5 15.5C10.5 14.672 11.172 14 12 14C12.828 14 13.5 14.672 13.5 15.5C13.5 16.328 12.828 17 12 17Z" /></svg>
            Compra 100% Segura
          </div>
        </div>
      </div>
    </section>

    <!-- ADVERTORIAL -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-4xl mx-auto text-center reveal">
        <h2 class="font-display text-3xl mb-6">Você dorme de lado? O "Inimigo Invisível" do seu colo...</h2>
        <div class="aspect-[9/16] max-w-[350px] mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
          <video src="${resolveAsset('/lovable-uploads/5f946896-1c0c-4389-9b93-b27b0b1473e0.mp4')}" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
          <button onclick="this.previousElementSibling.muted = !this.previousElementSibling.muted" class="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full">🔊</button>
        </div>
      </div>
    </section>

    <!-- STUDY STATS -->
    <section class="bg-midnight-deep text-white py-16 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal">
        <div>
          <div class="text-4xl font-black text-gold">97%</div>
          <p class="text-xs uppercase mt-2">Pele mais lisa</p>
        </div>
        <div>
          <div class="text-4xl font-black text-gold">92%</div>
          <p class="text-xs uppercase mt-2">Menos rugas</p>
        </div>
        <div>
          <div class="text-4xl font-black text-gold">88%</div>
          <p class="text-xs uppercase mt-2">Colo hidratado</p>
        </div>
        <div>
          <div class="text-4xl font-black text-gold">95%</div>
          <p class="text-xs uppercase mt-2">Recomendariam</p>
        </div>
      </div>
    </section>
  </main>

  <!-- STICKY CTA -->
  <div id="stickyCTA" class="fixed bottom-0 left-0 w-full bg-white border-t p-4 z-[100] transition-transform translate-y-full md:hidden">
    <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="block bg-gold-gradient text-midnight-deep text-center py-4 rounded-full font-black shadow-lg">
      GARANTIR MEU KIT AGORA →
    </a>
  </div>

  <script>
    function startTimer(duration, display) {
      let timer = duration, minutes, seconds;
      setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        if (--timer < 0) timer = duration;
      }, 1000);
    }
    window.onload = function () {
      startTimer(600, document.querySelector('#timer'));
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      window.onscroll = function() {
        const sticky = document.getElementById('stickyCTA');
        if (window.scrollY > 800) sticky.style.transform = 'translateY(0)';
        else sticky.style.transform = 'translateY(100%)';
      };
    };
  </script>
</body>
</html>`;

  fs.writeFileSync('sonolift-shopify-v51.html', html);
  console.log('Success: sonolift-shopify-v51.html generated.');
}

generate();
