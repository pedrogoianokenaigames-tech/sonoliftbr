import { Bun } from 'bun';

const DOMAIN = 'https://sonoliftbr.lovable.app';

// Assets from project:
const IMG_1 = `${DOMAIN}/__l5e/assets-v1/d2ac6e58-2eb5-4be3-ab66-d4313d953980/1_imagem_um_pro_carrosel.webp`;
const IMG_2 = `${DOMAIN}/__l5e/assets-v1/48ae66d3-8f16-474e-b6d0-8c014e61044c/2_imagem.webp`;
const IMG_3 = `${DOMAIN}/__l5e/assets-v1/533aa605-08a3-4b90-9cf1-e437390e8190/31Llvy0XlML._AC_.jpg`;
const IMG_4 = `${DOMAIN}/__l5e/assets-v1/ce3110de-e365-423e-9a19-31040066ccd9/51ABNwxk9HL._AC_SL1200.jpg`;
const IMG_5 = `${DOMAIN}/__l5e/assets-v1/37398a2a-9049-4158-9aaf-200fd60474d5/61Gwf0eAogL._AC_SL1024.jpg`;
const IMG_6 = `${DOMAIN}/__l5e/assets-v1/479bdfe6-6a43-4926-8239-f6fc60509891/61ODU3qW6OL._AC_SL1024.jpg`;
const HERO_VIDEO = `${DOMAIN}/__l5e/assets-v1/ffe73f55-6f15-44c5-ba81-1e8528f04917/hero-video-2.mp4`;
const PIX_LOGO = `${DOMAIN}/__l5e/assets-v1/09b47fe5-b917-4ff3-876c-927e5539a1e8/pix-logo.png`;
const ELO_LOGO = `${DOMAIN}/__l5e/assets-v1/1f918b71-1da4-4f35-8aaf-16ff26ae674f/elo-logo.jpg`;

const finalHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: sans-serif; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
  </style>
</head>
<body>
  <div class="min-h-screen bg-[#fdfaf5]">
    <!-- Header -->
    <header class="bg-white border-b border-black/10">
      <div class="mx-auto max-w-6xl grid grid-cols-3 px-4 py-3 items-center">
        <div class="text-xl">SonoLift</div>
        <div class="text-center font-bold">Menu</div>
        <div class="text-right">Comprar</div>
      </div>
    </header>
    
    <!-- Hero Gallery -->
    <div class="mx-auto max-w-6xl p-4">
      <div class="overflow-hidden rounded-2xl max-h-[50vh]">
        <img src="${IMG_1}" class="w-full h-full object-contain">
      </div>
      <div class="grid grid-cols-6 gap-2 mt-4">
        <img src="${IMG_1}" class="rounded-lg aspect-square object-cover">
        <img src="${IMG_2}" class="rounded-lg aspect-square object-cover">
        <img src="${IMG_3}" class="rounded-lg aspect-square object-cover">
        <img src="${IMG_4}" class="rounded-lg aspect-square object-cover">
        <img src="${IMG_5}" class="rounded-lg aspect-square object-cover">
        <img src="${IMG_6}" class="rounded-lg aspect-square object-cover">
      </div>
    </div>

    <!-- Final Summary Icons Correction -->
    <div class="flex items-center justify-center gap-4 py-8">
      <img src="https://img.icons8.com/color/48/visa.png" class="h-8">
      <img src="https://img.icons8.com/color/48/mastercard.png" class="h-8">
      <img src="${ELO_LOGO}" class="h-8">
      <img src="${PIX_LOGO}" class="h-8">
    </div>
  </div>
</body>
</html>
`;
await Bun.write('sonolift-shopify-v44.html', finalHtml);
