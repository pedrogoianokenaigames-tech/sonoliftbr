import { write } from "bun";

const DOMAIN = 'https://sonoliftbr.lovable.app';

const finalHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Reset e Variáveis */
    #shopify-lp-content {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #fdfaf5;
      color: #1a1a2e;
      line-height: 1.5;
    }
    #shopify-lp-content * { box-sizing: border-box; }
    
    /* Utilitários Essenciais (Baseados no Tailwind) */
    .lp-bg-cream { background-color: #fdfaf5; }
    .lp-bg-white { background-color: #ffffff; }
    .lp-bg-black { background-color: #000000; }
    .lp-text-white { color: #ffffff; }
    .lp-text-red { color: #c8102e; }
    .lp-flex { display: flex; }
    .lp-flex-col { flex-direction: column; }
    .lp-items-center { align-items: center; }
    .lp-justify-center { justify-content: center; }
    .lp-text-center { text-align: center; }
    .lp-w-full { width: 100%; }
    .lp-max-w-6xl { max-width: 1200px; margin-left: auto; margin-right: auto; }
    .lp-p-4 { padding: 1rem; }
    .lp-mt-6 { margin-top: 1.5rem; }
    .lp-rounded-2xl { border-radius: 1rem; }
    .lp-shadow-soft { box-shadow: 0 10px 30px -12px rgba(26,26,46,0.18); }
    .lp-font-bold { font-weight: 700; }
    
    /* Componentes Específicos */
    .lp-topbar { padding: 10px; font-size: 14px; position: sticky; top: 0; z-index: 100; }
    .lp-timer { background: #c8102e; color: white; padding: 2px 8px; border-radius: 4px; font-family: monospace; font-weight: 800; }
    
    .lp-hero-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
    @media (min-width: 768px) { .lp-hero-grid { grid-template-columns: 1fr 1fr; } }
    
    .lp-main-img-container { aspect-ratio: 1/1; background: white; border-radius: 1rem; overflow: hidden; display: flex; align-items: center; justify-content: center; }
    .lp-main-img-container img { max-width: 100%; max-height: 50vh; object-fit: contain; }
    
    .lp-cta-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 64px;
      background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
      color: #1a1a2e;
      text-decoration: none;
      font-weight: 900;
      text-transform: uppercase;
      border-radius: 9999px;
      box-shadow: 0 20px 40px -10px rgba(212,175,55,0.4);
      transition: transform 0.2s;
    }
    .lp-cta-button:active { transform: scale(0.98); }
    
    .lp-gallery-thumbs { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; margin-top: 1rem; }
    .lp-thumb { width: 64px; height: 64px; border-radius: 8px; border: 2px solid transparent; cursor: pointer; object-fit: cover; background: white; }
    .lp-thumb.active { border-color: #d4af37; }
    
    .lp-video-container { width: 100%; max-width: 380px; margin: 2rem auto; border-radius: 2rem; overflow: hidden; box-shadow: 0 30px 60px -20px rgba(0,0,0,0.3); background: black; line-height: 0; }
    .lp-video-container video { width: 100%; height: auto; }
    
    .lp-sticky-cta { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.95); padding: 12px; z-index: 1000; border-top: 1px solid #eee; display: none; }
    @media (max-width: 767px) { .lp-sticky-cta.visible { display: block; } }

    .lp-price-large { font-size: 3.5rem; font-weight: 900; color: #c8102e; margin: 0; }
    .lp-badge { background: #c8102e; color: white; padding: 2px 10px; border-radius: 99px; font-size: 12px; font-weight: 900; }
  </style>
</head>
<body>
  <div id="shopify-lp-content">
    <!-- TopBar -->
    <div class="lp-topbar lp-bg-black lp-text-white lp-text-center">
      ⚠️ <span class="lp-font-bold">Kit Pescoço e Colo GRÁTIS</span> reservado por: 
      <span id="lp-timer-display" class="lp-timer">10:00</span>
    </div>

    <!-- Hero Section -->
    <div class="lp-p-4 lp-max-w-6xl">
      <div class="lp-hero-grid lp-items-center">
        <!-- Galeria -->
        <div>
          <div class="lp-main-img-container lp-shadow-soft">
            <img id="lp-hero-main" src="${DOMAIN}/__l5e/assets-v1/2566ecb8-15cf-4d9e-9d22-6b5e09f58356/hero1.webp" alt="SonoLift">
          </div>
          <div class="lp-gallery-thumbs">
            <img class="lp-thumb active" src="${DOMAIN}/__l5e/assets-v1/2566ecb8-15cf-4d9e-9d22-6b5e09f58356/hero1.webp" onclick="lpChangeHero(this)">
            <img class="lp-thumb" src="${DOMAIN}/__l5e/assets-v1/9a4192b6-5f1e-4ce2-b062-673ebf156cd4/hero2.jpg" onclick="lpChangeHero(this)">
            <img class="lp-thumb" src="${DOMAIN}/__l5e/assets-v1/053b1156-32d8-4f16-bd09-54b9d07f35a0/hero3.jpg" onclick="lpChangeHero(this)">
            <img class="lp-thumb" src="${DOMAIN}/__l5e/assets-v1/b8559197-243e-425b-ae49-6234f9a0b1cc/hero4.jpg" onclick="lpChangeHero(this)">
            <img class="lp-thumb" src="${DOMAIN}/__l5e/assets-v1/1852077e-2cf8-410a-8664-968b6b0d9c49/hero5.webp" onclick="lpChangeHero(this)">
            <img class="lp-thumb" src="${DOMAIN}/__l5e/assets-v1/c768903c-e674-4b47-b391-9e5fa4189cc3/hero6.jpg" onclick="lpChangeHero(this)">
          </div>
        </div>

        <!-- Info -->
        <div>
          <div style="color: #d4af37; font-size: 20px;">★★★★★ <span style="color: #1a1a2e; font-size: 14px; font-weight: 700;">(12.480+ avaliações)</span></div>
          <h1 style="font-size: 32px; margin: 10px 0;">Kit SonoLift™ Facial + Colo</h1>
          
          <div class="lp-mt-6">
            <span style="text-decoration: line-through; color: #666;">De R$ 397,00</span>
            <div class="lp-flex lp-items-center" style="gap: 15px; margin-top: 5px;">
              <p class="lp-price-large">R$ 197</p>
              <span class="lp-badge">50% OFF</span>
            </div>
            <p style="color: #059669; font-weight: 700; margin: 10px 0;">ou R$ 187,15 no Pix</p>
            <p style="font-size: 14px;">Em até <strong>12x de R$ 16,42</strong></p>
          </div>

          <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="lp-cta-button lp-mt-6">
            GARANTIR MEU KIT + BRINDE →
          </a>

          <div class="lp-flex lp-justify-center" style="gap: 20px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            <img src="https://img.icons8.com/color/48/visa.png" style="height: 20px;">
            <img src="https://img.icons8.com/color/48/mastercard.png" style="height: 25px;">
            <img src="${DOMAIN}/__l5e/assets-v1/450cf449-62f4-4a4b-8422-9596c56858e7/elo-logo.jpg" style="height: 20px;">
            <img src="${DOMAIN}/__l5e/assets-v1/095b5465-9831-4821-b3b3-85f0962b9a78/pix-logo.png" style="height: 20px;">
          </div>
        </div>
      </div>
    </div>

    <!-- Advertorial Video -->
    <div class="lp-p-4 lp-text-center lp-mt-6 lp-bg-white" style="padding: 60px 20px;">
      <h2 style="font-size: 36px; margin-bottom: 30px;">Acorde sem as <span style="color: #d4af37; font-style: italic;">marcas</span> do travesseiro.</h2>
      <div class="lp-video-container">
        <video src="${DOMAIN}/__l5e/assets-v1/ffe73f55-6f15-44c5-ba81-1e8528f04917/hero-video-2.mp4" autoplay loop muted playsinline></video>
      </div>
    </div>

    <!-- Sticky CTA Mobile -->
    <div id="lp-sticky-cta" class="lp-sticky-cta">
      <a href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5" class="lp-cta-button" style="height: 54px; font-size: 16px;">
        GARANTIR MEU KIT
      </a>
    </div>
  </div>

  <script>
    (function() {
      // Troca de Imagem da Galeria
      window.lpChangeHero = function(el) {
        document.getElementById('lp-hero-main').src = el.src;
        document.querySelectorAll('.lp-thumb').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
      };

      // Cronômetro
      var seconds = 600;
      var timerEl = document.getElementById('lp-timer-display');
      var interval = setInterval(function() {
        seconds--;
        if (seconds <= 0) clearInterval(interval);
        var m = Math.floor(seconds / 60);
        var s = seconds % 60;
        timerEl.innerText = m + ":" + (s < 10 ? "0" + s : s);
      }, 1000);

      // Sticky CTA show on scroll
      var sticky = document.getElementById('lp-sticky-cta');
      window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          sticky.classList.add('visible');
        } else {
          sticky.classList.remove('visible');
        }
      });
    })();
  </script>
</body>
</html>`;

await Bun.write('sonolift-shopify-v46.html', finalHtml);
