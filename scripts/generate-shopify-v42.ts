(async () => {
  const file = 'src/routes/index.tsx';
  
  const DOMAIN = 'https://sonoliftbr.lovable.app';
  
  const finalHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  <style>
    :root {
      --midnight-deep: #1a1a2e;
      --midnight: #242445;
      --gold: #d4af37;
      --gold-gradient: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
      --cream: #fdfaf5;
      --border: rgba(0,0,0,0.1);
      --shadow-luxe: 0 30px 60px -20px rgba(26,26,46,0.35);
      --shadow-soft: 0 10px 30px -12px rgba(26,26,46,0.18);
    }
    body { font-family: 'Inter', sans-serif; background: #fdfaf5; color: #1a1a2e; margin: 0; }
    .font-display { font-family: 'Playfair Display', serif; }
    .bg-gold-gradient { background: var(--gold-gradient); }
    .bg-midnight-gradient { background: linear-gradient(140deg, #1a1a2e 0%, #242445 100%); }
    .shadow-luxe { box-shadow: var(--shadow-luxe); }
    .shadow-soft { box-shadow: var(--shadow-soft); }
    .animate-cta-pulse { animation: cta-pulse 2.4s ease-in-out infinite; }
    @keyframes cta-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.55), var(--shadow-luxe); }
      50% { box-shadow: 0 0 0 14px rgba(212,175,55,0), var(--shadow-luxe); }
    }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
    .reveal.active { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>
  <div id="shopify-lp-content">
    <div class="min-h-screen bg-[#fdfaf5] text-[#1a1a2e] pb-[80px] md:pb-0">
      
      <!-- TopBar -->
      <div class="sticky top-0 z-50 bg-black text-[#fdfaf5]">
        <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2.5 text-center text-[13px] font-semibold tracking-wide sm:text-base">
          <span class="text-lg leading-none">⚠️</span>
          <span>
            <strong class="text-[#ff3b3b]">Atenção:</strong> 
            <strong class="text-[#ff3b3b]">Kit Pescoço e Colo GRÁTIS</strong> reservado por:
          </span>
          <span id="promo-timer" class="rounded-md bg-[#c8102e] px-3 py-1 font-mono text-lg font-extrabold tabular-nums text-white shadow-md sm:text-2xl">
            10:00
          </span>
        </div>
      </div>

      <!-- Nav -->
      <header class="border-b border-black/10 bg-white">
        <div class="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3">
          <div class="flex items-center">
            <button type="button" class="text-[#1a1a2e] md:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <nav class="hidden gap-8 text-[13px] font-bold uppercase tracking-widest text-[#1a1a2e] md:flex">
              <a href="#oferta" class="hover:text-[#d4af37]">Loja</a>
              <a href="#ciencia" class="hover:text-[#d4af37]">Ciência</a>
            </nav>
          </div>
          <div class="flex justify-center">
            <a href="#" class="font-display text-2xl tracking-tighter text-[#1a1a2e] sm:text-3xl">
              SonoLift<sup class="text-[#d4af37] font-sans text-xs">™</sup>
            </a>
          </div>
          <div class="flex items-center justify-end">
            <nav class="hidden gap-8 text-[13px] font-bold uppercase tracking-widest text-[#1a1a2e] md:flex">
              <a href="#resultados" class="hover:text-[#d4af37]">Avaliações</a>
              <a href="#oferta" class="hover:text-[#d4af37]">Comprar</a>
            </nav>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="bg-[#fdfaf5] py-6 md:py-12 px-4">
        <div class="mx-auto max-w-6xl flex flex-col md:flex-row md:gap-12">
          <!-- Gallery -->
          <div class="w-full md:w-1/2">
            <div class="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-soft max-h-[50vh] sm:max-h-[550px] md:max-h-none">
              <img src="https://sonoliftbr.lovable.app/1_imagem_um_pro_carrosel.webp" alt="Produto" class="h-full w-full object-contain p-2 sm:p-4">
            </div>
            <div class="mt-4 flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide sm:grid sm:grid-cols-6 sm:overflow-visible">
              <div class="relative aspect-square w-16 min-w-[64px] rounded-lg border-2 border-[#d4af37] bg-white"><img src="https://sonoliftbr.lovable.app/1_imagem_um_pro_carrosel.webp" class="h-full w-full object-cover rounded-lg"></div>
              <div class="relative aspect-square w-16 min-w-[64px] rounded-lg border-2 border-transparent bg-white opacity-60"><img src="https://sonoliftbr.lovable.app/2_imagem.webp" class="h-full w-full object-cover rounded-lg"></div>
              <div class="relative aspect-square w-16 min-w-[64px] rounded-lg border-2 border-transparent bg-white opacity-60"><img src="https://sonoliftbr.lovable.app/31Llvy0XlML._AC_.jpg" class="h-full w-full object-cover rounded-lg"></div>
              <div class="relative aspect-square w-16 min-w-[64px] rounded-lg border-2 border-transparent bg-white opacity-60"><img src="https://sonoliftbr.lovable.app/51ABNwxk9HL._AC_SL1200.jpg" class="h-full w-full object-cover rounded-lg"></div>
              <div class="relative aspect-square w-16 min-w-[64px] rounded-lg border-2 border-transparent bg-white opacity-60"><img src="https://sonoliftbr.lovable.app/Imagem_01.webp" class="h-full w-full object-cover rounded-lg"></div>
              <div class="relative aspect-square w-16 min-w-[64px] rounded-lg border-2 border-transparent bg-white opacity-60"><img src="https://sonoliftbr.lovable.app/61Gwf0eAogL._AC_SL1024.jpg" class="h-full w-full object-cover rounded-lg"></div>
            </div>
          </div>
          <!-- Content -->
          <div class="mt-8 md:mt-0 md:w-1/2">
            <div class="flex items-center gap-2">
              <div class="text-xl text-[#d4af37]">★★★★★</div>
              <span class="text-sm font-semibold text-[#1a1a2e]">(12.480+ avaliações)</span>
            </div>
            <h1 class="mt-3 font-display text-3xl leading-tight text-[#1a1a2e] sm:text-4xl">Kit SonoLift™ Facial + Colo</h1>
            <div class="mt-6">
              <p class="text-sm text-gray-500">De <span class="line-through decoration-[#c8102e] decoration-2">R$ 397,00</span></p>
              <div class="mt-1 flex items-baseline gap-3">
                <span class="font-display text-5xl font-extrabold text-[#c8102e]">R$ 197</span>
                <span class="rounded-full bg-[#c8102e] px-3 py-0.5 text-[10px] font-black text-white">50% OFF</span>
              </div>
              <p class="mt-2 text-base font-semibold text-emerald-700">ou R$ 187,15 no Pix</p>
              <p class="text-sm text-[#1a1a2e]">Em até <strong>12x de R$ 16,42</strong> sem juros</p>
            </div>
            <div class="mt-6 rounded-xl border border-amber-300/70 bg-amber-50 px-4 py-2.5 text-center text-[13px] font-bold text-amber-900">
              🎁 OFERTA: Kit Rosto + Kit Colo GRÁTIS
            </div>
            <div class="mt-6">
              <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="animate-cta-pulse flex h-[64px] items-center justify-center rounded-full bg-gold-gradient text-lg font-bold uppercase tracking-wider text-[#1a1a2e] shadow-luxe w-full text-center">
                GARANTIR MEU KIT →
              </a>
            </div>
            <div class="mt-6 grid grid-cols-2 gap-3 text-[13px] font-semibold text-[#1a1a2e]">
              <div><span class="text-emerald-600">✓</span> Frete Grátis Brasil</div>
              <div><span class="text-emerald-600">✓</span> Garantia 30 Dias</div>
              <div><span class="text-emerald-600">✓</span> 16 Adesivos Rosto</div>
              <div><span class="text-emerald-600">✓</span> +1 Colo Grátis</div>
            </div>
            <!-- Trust badges -->
            <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-black/10 pt-6">
              <div class="flex h-6 items-center"><img src="https://img.icons8.com/color/48/visa.png" class="h-full w-auto object-contain"></div>
              <div class="flex h-8 items-center"><img src="https://img.icons8.com/color/48/mastercard.png" class="h-full w-auto object-contain"></div>
              <div class="flex h-6 items-center"><img src="${DOMAIN}/elo-logo.jpg" class="h-full w-auto object-contain"></div>
              <div class="flex h-6 items-center"><img src="${DOMAIN}/pix-logo.png" class="h-full w-auto object-contain"></div>
              <div class="flex items-center gap-1.5 text-[11px] font-bold uppercase text-emerald-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.895 10 4 10.895 4 12V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V12C20 10.895 19.105 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7ZM12 17C11.172 17 10.5 16.328 10.5 15.5C10.5 14.672 11.172 14 12 14C12.828 14 13.5 14.672 13.5 15.5C13.5 16.328 12.828 17 12 17Z"/></svg>
                Seguro
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advertorial -->
      <section class="bg-[#fdfaf5] py-20 px-4 reveal">
        <div class="mx-auto max-w-6xl text-center">
          <div class="mb-6 inline-block rounded-full bg-gold-gradient px-6 py-1 text-[11px] font-black uppercase tracking-[0.25em] text-[#1a1a2e] shadow-soft">Você dorme de lado?</div>
          <h2 class="font-display text-4xl text-[#1a1a2e] sm:text-5xl md:text-6xl">Acorde sem as <em class="italic text-[#d4af37]">marcas</em> que o travesseiro deixa.</h2>
          <p class="mt-6 text-lg text-gray-500 max-w-xl mx-auto">Uma barreira invisível de silicone médico que protege sua pele durante as 8 horas mais decisivas do seu dia.</p>
          <div class="relative mt-12 aspect-[9/16] w-full max-w-[380px] mx-auto rounded-[2.5rem] bg-black shadow-luxe overflow-hidden">
             <video src="https://sonoliftbr.lovable.app/video5186417616897444079.mp4" autoplay loop muted playsinline class="h-full w-full object-contain"></video>
          </div>
        </div>
      </section>

      <!-- Final Summary -->
      <section class="bg-[#fdfaf5] py-20 px-4 reveal">
        <div class="mx-auto max-w-3xl rounded-3xl bg-midnight-gradient p-8 text-white shadow-luxe md:p-12">
          <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Você recebe hoje</p>
          <div class="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-center font-display text-2xl md:text-3xl">
            <span>Sistema Facial</span>
            <span class="text-white/60">+</span>
            <span>Colo</span>
            <span class="inline-block rounded-md bg-gold-gradient px-2 py-0.5 text-[#1a1a2e] text-lg font-black uppercase shadow-soft">GRÁTIS</span>
          </div>
          <div class="mt-8 text-center">
            <p class="text-sm text-white/60">Valor total: <span class="line-through">R$ 397</span></p>
            <p class="mt-2 text-sm uppercase tracking-[0.2em] text-[#d4af37]">Oferta especial</p>
            <p class="font-display text-6xl font-semibold text-[#d4af37] md:text-7xl">R$ 197</p>
          </div>
          <div class="mt-8">
            <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="flex h-[64px] items-center justify-center rounded-full bg-gold-gradient text-lg font-bold uppercase tracking-wider text-[#1a1a2e] shadow-luxe w-full text-center">
              GARANTIR MEU KIT + COLO GRÁTIS →
            </a>
          </div>
          <div class="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 opacity-90 filter brightness-0 invert">
            <img src="https://img.icons8.com/color/48/visa.png" class="h-4 w-auto">
            <img src="https://img.icons8.com/color/48/mastercard.png" class="h-5 w-auto">
            <img src="${DOMAIN}/elo-logo.jpg" class="h-4 w-auto">
            <img src="${DOMAIN}/pix-logo.png" class="h-4 w-auto">
          </div>
        </div>
      </section>

      <!-- Footer minimal -->
      <footer class="bg-[#1a1a2e] text-[#fdfaf5] py-12 px-4">
        <div class="mx-auto max-w-6xl text-center">
           <p class="font-display text-2xl">SonoLift<sup class="text-[#d4af37]">™</sup></p>
           <p class="mt-8 text-xs text-white/40">© 2026 SonoLift Beauty LTDA · CNPJ 76.047.876/0001-90</p>
        </div>
      </footer>

      <!-- WhatsApp -->
      <a href="https://wa.me/5511941942267" class="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.715A9.944 9.944 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 22l4.915-1.375A9.944 9.944 0 0 0 12 22c5.523 0 10-4.477 10-10a9.943 9.943 0 0 0-4.949-8.333Z"/></svg>
      </a>

      <!-- Sticky CTA -->
      <div id="sticky-cta" class="fixed bottom-0 left-0 z-[999] w-full bg-white/95 p-3 shadow-soft backdrop-blur-sm md:hidden hidden">
        <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="flex h-[60px] items-center justify-center rounded-full bg-gold-gradient font-bold uppercase tracking-wider text-[#1a1a2e] w-full max-w-md mx-auto text-center">
          GARANTIR MEU KIT
        </a>
      </div>

    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Sticky CTA show on scroll
      const stickyCta = document.getElementById('sticky-cta');
      window.addEventListener('scroll', () => {
        if(window.scrollY > 600) {
          stickyCta.classList.remove('hidden');
        } else {
          stickyCta.classList.add('hidden');
        }
      });

      // Observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) entry.target.classList.add('active');
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      
      // Cronômetro
      let timeLeft = 600;
      const timerEl = document.getElementById('promo-timer');
      if(timerEl) {
        setInterval(() => {
          if(timeLeft > 0) timeLeft--;
          const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
          const s = (timeLeft % 60).toString().padStart(2, '0');
          timerEl.innerText = \`\${m}:\${s}\`;
        }, 1000);
      }
    });
  </script>
</body>
</html>
  `;

  await Bun.write('sonolift-shopify-v42.html', finalHtml);
})();
