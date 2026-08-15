import re
import os

def generate():
    # Base URL for assets
    base_url = "https://id-preview--8e2875b6-88f6-4189-acb8-98d3a3a05914.lovable.app/assets/"
    images = [base_url + img for img in ["1_imagem_um_pro_carrosel.webp", "61Gwf0eAogL._AC_SL1024_.jpg", "31Llvy0XlML._AC_.jpg", "61ODU3qW6OL._AC_SL1024_.jpg", "2_imagem.webp", "51ABNwxk9HL._AC_SL1200_.jpg"]]

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {{ --cream: #FDFCF9; --gold: #C5A059; --midnight: #1A1A1A; }}
        body {{ font-family: 'Inter', sans-serif; background: var(--cream); color: var(--midnight); overflow-x: hidden; padding-bottom: 80px; }}
        @media (min-width: 768px) {{ body {{ padding-bottom: 0; }} }}
        .font-display {{ font-family: 'Instrument Serif', serif; }}
        .bg-gold-gradient {{ background: linear-gradient(135deg, #D4AF37 0%, #C5A059 100%); }}
        .no-scrollbar::-webkit-scrollbar {{ display: none; }}
        .no-scrollbar {{ -ms-overflow-style: none; scrollbar-width: none; }}
        .shadow-up {{ box-shadow: 0 -4px 10px rgba(0,0,0,0.08); }}
    </style>
</head>
<body>
    <!-- Top Bar -->
    <div class="sticky top-0 z-50 bg-black text-white py-2 text-center text-sm font-bold">
        ⚠️ ATENÇÃO: KIT COLO GRÁTIS RESERVADO POR: <span id="timer">10:00</span>
    </div>

    <!-- Nav -->
    <nav class="bg-white border-b px-4 py-4 flex justify-between items-center text-center">
        <div class="w-full font-display text-3xl">SonoLift<span class="text-[#C5A059]">™</span></div>
    </nav>

    <!-- Hero Section -->
    <section class="px-4 py-6 max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-1/2">
                <div class="relative aspect-square bg-white rounded-2xl shadow-sm overflow-hidden max-h-[50vh] md:max-h-none">
                    <img id="main-img" src="{images[0]}" class="w-full h-full object-contain p-4">
                </div>
                <div class="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
                    {"".join([f'<button onclick="changeImg({i})" class="w-20 aspect-square flex-shrink-0 border-2 rounded-lg overflow-hidden bg-white"><img src="{img}" class="w-full h-full object-cover"></button>' for i, img in enumerate(images)])}
                </div>
            </div>
            <div class="w-full md:w-1/2 flex flex-col">
                <div class="flex items-center gap-2 text-gold">★★★★★ <span class="text-xs text-midnight font-bold">(12.480+ avaliações)</span></div>
                <h1 class="font-display text-4xl mt-2 leading-tight">Kit SonoLift™ Facial + Colo</h1>
                
                <div class="mt-4">
                    <div class="text-sm text-gray-500">De <span class="line-through text-red-600">R$ 397,00</span></div>
                    <div class="flex items-baseline gap-2">
                        <span class="text-5xl font-extrabold text-red-600">R$ 197</span>
                        <span class="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">50% OFF</span>
                    </div>
                    <div class="text-emerald-700 font-bold mt-1">ou R$ 187,15 no Pix</div>
                </div>

                <div class="mt-4 bg-amber-50 border border-amber-200 rounded-xl py-2.5 text-center text-[13px] font-bold text-amber-900">
                    🎁 OFERTA: Kit Rosto + Kit Colo GRÁTIS
                </div>

                <a href="/checkout" class="mt-4 block w-full bg-[#FFD700] hover:bg-[#FFC800] text-black font-black py-5 rounded-full text-center text-lg shadow-lg transform active:scale-95 transition-all">
                    GARANTIR MEU KIT →
                </a>

                <div class="mt-6 grid grid-cols-2 gap-2 text-[12px] font-bold">
                    <div><span class="text-emerald-600">✓</span> Frete Grátis</div>
                    <div><span class="text-emerald-600">✓</span> Garantia 30 Dias</div>
                    <div><span class="text-emerald-600">✓</span> 16 Adesivos Rosto</div>
                    <div><span class="text-emerald-600">✓</span> +1 Colo Grátis</div>
                </div>

                <!-- Trust Badges Updated -->
                <div class="mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-x-5 gap-y-3 opacity-90">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" class="h-5 w-auto object-contain">
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" class="h-6 w-auto object-contain">
                    <img src="https://img.icons8.com/color/48/000000/elo.png" alt="Elo" class="h-5 w-auto object-contain">
                    <img src="https://cdn.worldvectorlogo.com/logos/pix-1.svg" alt="Pix" class="h-4 w-auto object-contain">
                    <div class="h-4 w-px bg-gray-200 hidden sm:block"></div>
                    <div class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 text-emerald-600">
                            <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.895 10 4 10.895 4 12V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V12C20 10.895 19.105 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7ZM12 17C11.172 17 10.5 16.328 10.5 15.5C10.5 14.672 11.172 14 12 14C12.828 14 13.5 14.672 13.5 15.5C13.5 16.328 12.828 17 12 17Z" />
                        </svg>
                        Seguro
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sticky Mobile CTA -->
    <div id="sticky-bar" class="fixed bottom-0 left-0 z-[999] w-full bg-white/95 p-3 shadow-up backdrop-blur-sm md:hidden hidden">
        <a href="/checkout" class="block w-full bg-[#FFD700] text-black font-black py-4 rounded-full text-center text-md shadow-md">
            GARANTIR MEU KIT
        </a>
    </div>

    <!-- Scripts -->
    <script>
        const imgs = {images};
        function changeImg(i) {{ document.getElementById('main-img').src = imgs[i]; }}
        
        let time = 600;
        setInterval(() => {{
            if (time > 0) time--;
            let m = Math.floor(time / 60);
            let s = time % 60;
            document.getElementById('timer').innerText = `${{m.toString().padStart(2, '0')}}:${{s.toString().padStart(2, '0')}}`;
        }}, 1000);

        window.addEventListener('scroll', () => {{
            const bar = document.getElementById('sticky-bar');
            if (window.scrollY > 600) bar.classList.remove('hidden');
            else bar.classList.add('hidden');
        }});
    </script>
</body>
</html>
"""
    with open('sonolift-shopify-v33.html', 'w', encoding='utf-8') as f:
        f.write(html)

generate()
