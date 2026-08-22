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
          colors: { 
            gold: '#D4AF37', 
            'midnight-deep': '#0B1B3B', 
            cream: '#FCF9F2',
            border: '#e8e2d2'
          },
          fontFamily: { 
            sans: ['Inter', 'sans-serif'], 
            display: ['Playfair Display', 'serif'] 
          },
          backgroundImage: { 
            'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)' 
          }
        }
      }
    }
  </script>
  
  <script>${utmifyScript}</script>
  <script>${metaPixelScript}</script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=976841758671110&ev=PageView&noscript=1"/></noscript>

  <style>
    body { background-color: #FCF9F2; color: #0B1B3B; font-family: 'Inter', sans-serif; margin: 0; }
    .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
    .reveal.active { opacity: 1; transform: translateY(0); }
    .hero-gallery img { max-height: 50vh; object-fit: contain; }
    @media (min-width: 768px) { .hero-gallery img { max-height: 600px; } }
    
    /* Dots Indicators */
    .dot-indicator { height: 6px; border-radius: 9999px; }
    .dot-small { width: 6px; background-color: rgba(11, 27, 59, 0.2); }
    .dot-large { width: 12px; background-color: #D4AF37; }
    .dot-small-white { width: 6px; background-color: rgba(255, 255, 255, 0.2); }
    .dot-large-gold { width: 12px; background-color: #D4AF37; }
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
    <section id="oferta" class="py-10 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div class="hero-gallery bg-white rounded-3xl p-4 shadow-xl">
        <img id="mainImage" src="${resolveAsset('/lovable-uploads/27116790-264f-4d2c-829d-d8122938006e.png')}" class="w-full">
        <div class="flex gap-2 mt-4 overflow-x-auto pb-2">
            <img onclick="document.getElementById('mainImage').src=this.src" src="${resolveAsset('/lovable-uploads/27116790-264f-4d2c-829d-d8122938006e.png')}" class="w-16 h-16 rounded-lg border cursor-pointer">
            <img onclick="document.getElementById('mainImage').src=this.src" src="${resolveAsset('/lovable-uploads/5d77431e-4361-460d-8547-49f3e4b77f11.png')}" class="w-16 h-16 rounded-lg border cursor-pointer">
            <img onclick="document.getElementById('mainImage').src=this.src" src="${resolveAsset('/lovable-uploads/d3e9c5ed-38e5-408f-89bc-992d9d150bf3.png')}" class="w-16 h-16 rounded-lg border cursor-pointer">
        </div>
      </div>

      <div>
        <div class="mt-6 flex flex-col items-center sm:items-start">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">VOCÊ RECEBE HOJE</p>
            <div class="flex items-center gap-3">
              <h2 class="font-display text-2xl text-midnight-deep sm:text-3xl">Sistema Facial + Colo</h2>
              <span class="rounded bg-gold px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-midnight-deep shadow-sm">
                GRÁTIS
              </span>
            </div>
            
            <div class="mt-4 flex flex-col items-center sm:items-start">
              <p class="text-[13px] text-gray-500 font-medium">
                Valor total: <span class="line-through decoration-red-600 decoration-1 opacity-70">R$ 397</span>
              </p>
              <p class="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-gold">OFERTA ESPECIAL</p>
              <div class="mt-0 flex items-baseline gap-2">
                <span class="font-display text-6xl font-extrabold text-gold leading-tight drop-shadow-sm">R$ 197</span>
              </div>
              <p class="mt-1 text-[13px] text-midnight-deep font-medium opacity-90">
                Em até <strong class="text-gold">12x de R$ 16,42</strong> sem juros
              </p>
            </div>
        </div>

        <div class="mt-6 bg-amber-50 border border-amber-200 p-3 rounded-xl text-center font-bold text-amber-900 text-sm">
          🎁 OFERTA: Kit Rosto + Kit Colo GRÁTIS
        </div>

        <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="block mt-6 bg-gold-gradient text-midnight-deep text-center py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition">
          GARANTIR MEU KIT + COLO GRÁTIS →
        </a>
        
        <div class="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
            <div class="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-midnight-deep opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 text-gold">
                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.895 10 4 10.895 4 12V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V12C20 10.895 19.105 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7ZM12 17C11.172 17 10.5 16.328 10.5 15.5C10.5 14.672 11.172 14 12 14C12.828 14 13.5 14.672 13.5 15.5C13.5 16.328 12.828 17 12 17Z" />
                </svg>
                Compra 100% Segura
            </div>
        </div>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-gray-200 pt-6 sm:justify-start">
            <img src="https://img.icons8.com/color/48/visa.png" class="h-5">
            <img src="https://img.icons8.com/color/48/mastercard.png" class="h-6">
            <img src="${resolveAsset('/lovable-uploads/c1334645-12cf-46d5-a33e-1081a292d37c.png')}" class="h-5">
            <img src="${resolveAsset('/lovable-uploads/489f6631-01cd-4c8d-852b-7c42767df88e.png')}" class="h-5">
        </div>

        <!-- Dots Indicator (Pricing Block) -->
        <div class="mt-8 flex items-center justify-center gap-2 sm:justify-start">
            <div class="dot-indicator dot-small"></div>
            <div class="dot-indicator dot-small"></div>
            <div class="dot-indicator dot-large"></div>
            <div class="dot-indicator dot-small"></div>
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

  <!-- FOOTER -->
  <footer class="bg-midnight-deep text-white pt-16 border-t border-white/5">
    <div class="max-w-6xl mx-auto px-4 pb-12">
        <div class="grid gap-10 md:grid-cols-3">
          <div>
            <p class="font-display text-2xl">SonoLift<sup class="text-gold">™</sup></p>
            <p class="mt-3 max-w-sm text-sm opacity-70">
              Sistema de proteção contra as rugas do sono. Silicone médico de alta performance.
            </p>
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Loja</p>
            <ul class="mt-4 space-y-2 text-sm opacity-70">
              <li><a href="#oferta" class="hover:text-gold">Oferta</a></li>
              <li><a href="#ciencia" class="hover:text-gold">Ciência</a></li>
              <li><a href="#resultados" class="hover:text-gold">Resultados</a></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Institucional</p>
            <ul class="mt-4 space-y-2 text-sm opacity-70">
              <li><a href="/pages/quem-somos" class="hover:text-gold">Quem somos</a></li>
              <li><a href="/pages/politica-de-privacidade" class="hover:text-gold">Política de privacidade</a></li>
              <li><a href="/pages/termos-de-uso" class="hover:text-gold">Termos de uso</a></li>
            </ul>
          </div>
        </div>
    </div>
    
    <div class="border-t border-white/10 py-8">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
            <span>© 2026 SonoLift Beauty LTDA · CNPJ 76.047.876/0001-90</span>
            
            <!-- Dots Indicator (Footer) -->
            <div class="flex items-center justify-center gap-2">
                <div class="dot-indicator dot-small-white"></div>
                <div class="dot-indicator dot-small-white"></div>
                <div class="dot-indicator dot-large-gold"></div>
                <div class="dot-indicator dot-small-white"></div>
            </div>
        </div>
    </div>
  </footer>

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
</html>\`;

  fs.writeFileSync('sonolift-shopify-v52.html', html);
  console.log('Success: sonolift-shopify-v52.html generated.');
}

generate();
