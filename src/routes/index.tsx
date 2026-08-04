import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { fetchFeaturedProduct, type ProductNode } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useCartSync } from "@/hooks/useCartSync";
import ugc1 from "@/assets/ugc1.mp4.asset.json";
import ugc2 from "@/assets/ugc2.mp4.asset.json";
import ugc3 from "@/assets/ugc3.mp4.asset.json";
import ugc4 from "@/assets/ugc4.mp4.asset.json";
import areaTesta from "@/assets/testa.jpg.asset.json";
import areaOlho from "@/assets/olho-sorriso.jpg.asset.json";
import areaLabio from "@/assets/labio.jpg.asset.json";
import areaPescoco from "@/assets/pescoco.jpg.asset.json";
import areaPeito from "@/assets/peito.jpg.asset.json";
import stepPrepAsset from "@/assets/ritual-prep.webp.asset.json";
import stepPeelAsset from "@/assets/ritual-pos.webp.asset.json";
import stepNightAsset from "@/assets/ritual-noite.webp.asset.json";
import stepStoreAsset from "@/assets/step-store.webp.asset.json";
import heroImg1 from "@/assets/slide-kit.jpg.asset.json";
import heroImg2 from "@/assets/slide-colo.jpg.asset.json";
import heroImg3 from "@/assets/slide-resultado.jpg.asset.json";

const CTA_LABEL = "QUERO MEU KIT FACIAL + COLO GRÁTIS";

/* Placeholder media (Unsplash / Pexels). Swap for brand assets in Shopify. */
const HERO_IMG =
  "https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=1600&q=80";
const BEFORE_AFTER_VIDEO =
  "https://videos.pexels.com/video-files/6540923/6540923-uhd_1440_2732_25fps.mp4";
const UGC_VIDEOS: { src: string; poster: string; name: string; benefit: string }[] = [
  {
    src: ugc1.url,
    poster: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    name: "Marina S.",
    benefit: "Pele lisa ao acordar",
  },
  {
    src: ugc2.url,
    poster: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    name: "Cláudia R.",
    benefit: "Sumiram as marcas do travesseiro",
  },
  {
    src: ugc3.url,
    poster: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    name: "Regina T.",
    benefit: "Colo mais firme em 3 semanas",
  },
  {
    src: ugc4.url,
    poster: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=800&q=80",
    name: "Sônia L.",
    benefit: "Acordo descansada e sem vincos",
  },
];

const TREATMENT_MAP: { area: string; img: string }[] = [
  { area: "Testa", img: areaTesta.url },
  { area: "Olho e Sorriso", img: areaOlho.url },
  { area: "Lábio", img: areaLabio.url },
  { area: "Pescoço", img: areaPescoco.url },
  { area: "Peito", img: areaPeito.url },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useCartSync();
  return (
    <div className="min-h-screen bg-cream text-midnight-deep">
      <TopBar />
      <Marquee />
      <Nav />
      <HeroSection />
      <Reveal><InvisibleEnemySection /></Reveal>
      <Reveal><BeforeAfterSliderSection /></Reveal>
      <Reveal><ClinicalStudySection /></Reveal>
      <Reveal><MechanismsSection /></Reveal>
      <HowToUseSection />
      <Reveal><UGCSection /></Reveal>
      <Reveal><TreatmentMapSection /></Reveal>
      <Reveal><OfferSection /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
}

/* ============================================================
 *  WhatsApp Float — fixed bottom-right button
 * ============================================================ */
function WhatsAppFloat() {
  // Número de WhatsApp com DDD e código do país
  const WHATSAPP_NUMBER = "5511941942267";
  const message = encodeURIComponent("Olá! Vi o SonoLift e quero saber mais.");
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.715A9.944 9.944 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 22l4.915-1.375A9.944 9.944 0 0 0 12 22c5.523 0 10-4.477 10-10a9.943 9.943 0 0 0-4.949-8.333Z" />
      </svg>
    </a>
  );
}

/* ============================================================
 *  Reveal — Scroll-triggered fade-in-up (Intersection Observer)
 * ============================================================ */
function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = { animationDelay: `${delay}ms` };
  return (
    <Tag
      ref={ref as never}
      className={shown ? "reveal-in" : "reveal"}
      style={style}
    >
      {children}
    </Tag>
  );
}

/* ============================================================
 *  Sticky top bar (Shopify announcement bar)
 * ============================================================ */
function TopBar() {
  const [secondsLeft, setSecondsLeft] = useState(10 * 60);
  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  return (
    <div className="sticky top-0 z-50 bg-black text-cream">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2.5 text-center text-[13px] font-semibold tracking-wide sm:text-base">
        <span className="text-lg leading-none">⚠️</span>
        <span>
          <strong className="text-[#ff3b3b]">Atenção:</strong>{" "}
          <strong className="text-[#ff3b3b]">Kit Pescoço e Colo GRÁTIS</strong> reservado por:
        </span>
        <span className="rounded-md bg-[#c8102e] px-3 py-1 font-mono text-lg font-extrabold tabular-nums text-white shadow-md sm:text-2xl">
          {mm}:{ss}
        </span>
      </div>
    </div>
  );
}

/* ============================================================
 *  Marquee — rotating benefits banner
 * ============================================================ */
function Marquee() {
  const items = [
    "GARANTIA DE 30 DIAS",
    "SISTEMA SONOLIFT™ COMPLETO",
    "PROTEÇÃO CONTRA AS MARCAS DO SONO",
    "ENVIO RÁPIDO E SEGURO",
    "OFERTA ESPECIAL DE LANÇAMENTO",
  ];
  const line = items.join("  •  ");
  return (
    <div className="sticky top-[38px] z-40 overflow-hidden bg-[#7a0f14] text-white sm:top-[40px]">
      <div className="flex w-max animate-marquee whitespace-nowrap py-2 text-[12px] font-semibold uppercase tracking-widest sm:text-sm">
        <span className="px-6">{line}&nbsp;&nbsp;•&nbsp;&nbsp;{line}&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <span className="px-6" aria-hidden>
          {line}&nbsp;&nbsp;•&nbsp;&nbsp;{line}&nbsp;&nbsp;•&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
}

/* ============================================================
 *  Navigation
 * ============================================================ */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-border/40 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3">
        {/* Left slot */}
        <div className="justify-self-start">
          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="text-midnight-deep md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
          {/* Left links (desktop) */}
          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-widest text-midnight-deep md:flex">
            <a href="#oferta" className="hover:text-gold">Loja</a>
            <a href="#ciencia" className="hover:text-gold">Ciência</a>
          </nav>
        </div>

        {/* Centered logo */}
        <a
          href="#top"
          className="justify-self-center font-display text-2xl tracking-tight text-midnight-deep sm:text-3xl"
        >
          SonoLift<sup className="text-gold">™</sup>
        </a>

        {/* Right slot */}
        <div className="justify-self-end">
          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-widest text-midnight-deep md:flex">
            <a href="#resultados" className="hover:text-gold">Avaliações</a>
            <a href="#oferta" className="hover:text-gold">Comprar</a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col items-center gap-3 border-t border-border/40 bg-white py-4 text-sm font-semibold uppercase tracking-widest text-midnight-deep md:hidden">
          <a href="#oferta" onClick={() => setOpen(false)}>Loja</a>
          <a href="#ciencia" onClick={() => setOpen(false)}>Ciência</a>
          <a href="#resultados" onClick={() => setOpen(false)}>Avaliações</a>
          <a href="#oferta" onClick={() => setOpen(false)}>Comprar</a>
        </nav>
      )}
    </header>
  );
}

/* ============================================================
 *  Hero
 * ============================================================ */
function HeroSection() {
  const slides = [heroImg1.url, heroImg2.url, heroImg3.url];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-10 text-center md:py-16">
        {/* 2. Headline + descrição */}
        <h1 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-midnight-deep sm:text-5xl md:text-6xl">
          Acorde sem as <em className="italic text-gold">marcas</em> que o travesseiro deixa.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Uma barreira invisível de silicone médico que protege sua pele durante as 8 horas mais decisivas do seu dia.
        </p>

        {/* 3. Slider/carrossel de imagens */}
        <div className="relative mt-8 aspect-square w-full max-w-2xl overflow-hidden rounded-[2rem] shadow-luxe">
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`SonoLift em uso ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          ))}
        </div>

        {/* Indicadores */}
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${
                i === idx ? "scale-125 bg-midnight-deep" : "bg-midnight-deep/25"
              }`}
            />
          ))}
        </div>

        {/* 4. Caixa de oferta */}
        <div className="mt-8 w-full max-w-xl rounded-xl border border-amber-300/70 bg-amber-50 px-4 py-3 text-center text-sm font-semibold text-amber-900 sm:text-base">
          🎁 OFERTA DE HOJE: Compre o Kit Rosto e GANHE o Kit Colo 100% Grátis
        </div>

        {/* 4b. Bloco de preços */}
        <div className="mt-6 w-full max-w-xl rounded-2xl border border-[#c8102e]/25 bg-white px-5 py-6 shadow-soft">
          <p className="text-base text-muted-foreground sm:text-lg">
            De <span className="line-through decoration-[#c8102e] decoration-2">R$ 397</span>
          </p>
          <p className="mx-auto mt-2 w-fit rounded-full bg-[#c8102e] px-4 py-1 text-xs font-extrabold uppercase tracking-[0.22em] text-white sm:text-sm">
            Oferta especial
          </p>
          <p className="mt-2 font-display text-7xl font-extrabold leading-none text-[#c8102e] sm:text-8xl">
            R$ 197
          </p>
          <p className="mt-3 text-base font-semibold text-emerald-700 sm:text-lg">
            ou R$ 187,15 no Pix
          </p>
          <p className="mt-1 text-sm text-midnight-deep sm:text-base">
            Em até <strong>12x de R$ 16,42</strong> sem juros
          </p>
        </div>

        {/* 4b-2. Benefícios rápidos */}
        <ul className="mt-5 grid w-full max-w-xl gap-2 text-left text-base font-medium text-midnight-deep sm:grid-cols-2 sm:text-lg">
          <li className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2">✅ <span>16 adesivos faciais</span></li>
          <li className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2">🎁 <span>Kit Colo Grátis</span></li>
          <li className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2">🚚 <span>Frete Grátis para todo Brasil</span></li>
          <li className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2">🛡️ <span>Garantia de 30 dias</span></li>
        </ul>

        {/* 4c. CTA principal */}
        <div className="mt-6 w-full max-w-xl">
          <CTAButton block label="GARANTIR MEU KIT + COLO GRÁTIS →" />
          <p className="mt-2 text-center text-sm font-medium text-midnight-deep sm:text-base">
            🔒 Compra Segura • Frete Grátis • Garantia de 30 noites
          </p>
        </div>

        {/* 5. Avaliações */}
        <div className="mt-3 w-full max-w-xl rounded-2xl border border-gold/40 bg-white px-5 py-4">
          <div className="text-3xl tracking-[0.15em] text-gold sm:text-4xl">★★★★★</div>
          <p className="mt-1 text-lg font-semibold text-midnight-deep sm:text-xl">
            Mais de <strong className="text-xl sm:text-2xl">12.480</strong> mulheres já escolheram SonoLift<sup className="text-gold">™</sup>
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">avaliações verificadas</p>
        </div>

        {/* 5b. Indicadores de confiança */}
        <div className="mt-4 grid w-full max-w-xl grid-cols-2 gap-2 text-sm font-semibold text-midnight-deep sm:text-base">
          <span className="rounded-xl border border-border bg-white px-3 py-2">🔒 Compra 100% Segura</span>
          <span className="rounded-xl border border-border bg-white px-3 py-2">📦 Envio com Rastreamento</span>
          <span className="rounded-xl border border-border bg-white px-3 py-2">💳 Parcelamento em 12x</span>
          <span className="rounded-xl border border-border bg-white px-3 py-2">🛡️ Garantia de 30 dias</span>
        </div>

        {/* Gatilhos de confiança */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-emerald-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M1 3h13v13H1z" />
              <path d="M14 8h4l3 3v5h-7z" />
              <circle cx="5.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
            Frete Grátis Brasil
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-midnight-deep">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Compra 100% segura
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-midnight-deep">
            <span className="rounded border border-border bg-white px-2 py-1">VISA</span>
            <span className="rounded border border-border bg-white px-2 py-1">Mastercard</span>
            <span className="rounded border border-border bg-white px-2 py-1">Elo</span>
            <span className="rounded border border-border bg-white px-2 py-1 text-[#32BCAD]">Pix</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function useFeaturedProduct() {
  return useQuery({
    queryKey: ["sonolift-featured-product"],
    queryFn: fetchFeaturedProduct,
    staleTime: 5 * 60 * 1000,
  });
}

function CTAButton({ block = false, label = CTA_LABEL }: { block?: boolean; label?: string }) {
  return (
    <a
      href="https://sono-lift.pay.yampi.com.br/r/R558X0P2M5"
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-[60px] items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-[1.15rem] text-center text-base font-bold uppercase tracking-wider text-midnight-deep shadow-luxe animate-cta-pulse transition hover:scale-[1.02] hover:brightness-105 hover:shadow-xl sm:min-h-[64px] sm:text-lg ${block ? "w-full" : ""}`}
    >
      {label}
      <span className="transition group-hover:translate-x-1">→</span>
    </a>
  );
}

// Keep the type reachable so the module tree-shakes cleanly.
export type _P = ProductNode;

/* ============================================================
 *  Before & After (vertical video)
 * ============================================================ */
function BeforeAfterSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Antes & Depois</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
          Veja a transformação em poucas semanas.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Uso contínuo por 21 noites. Sem retoques, sem filtros.
        </p>
        <div className="mx-auto mt-12 w-full max-w-sm overflow-hidden rounded-[2rem] shadow-luxe">
          <video
            src={BEFORE_AFTER_VIDEO}
            className="aspect-[9/16] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Invisible Enemy — emotional hook for the 35+ audience
 * ============================================================ */
function InvisibleEnemySection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          O inimigo invisível
        </p>
        <h2 className="mt-4 font-display text-3xl leading-[1.15] text-midnight-deep md:text-5xl">
          Enquanto você descansa, algo invisível{" "}
          <em className="italic text-gold">marca</em> a sua pele.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          No começo, são apenas <strong className="text-midnight-deep">marcas</strong> de
          travesseiro que somem no banho. Mas com o tempo, a perda de colágeno
          transforma essas marcas em{" "}
          <em className="italic text-midnight-deep">rugas permanentes</em>. Você só
          percebe quando é tarde demais.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
 *  Before / After — interactive comparison slider
 * ============================================================ */
import antesAsset from "@/assets/antes.png.asset.json";
import depoisAsset from "@/assets/depois.png.asset.json";

const SLIDER_BEFORE = antesAsset.url;
const SLIDER_AFTER = depoisAsset.url;

function BeforeAfterSliderSection() {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Prova visual
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
          Suavize as marcas desde a primeira noite.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Deslize para ver a recuperação da pele do colo.
        </p>

        <div
          className="relative mx-auto mt-12 aspect-[4/3] w-full max-w-3xl cursor-ew-resize touch-none select-none overflow-hidden rounded-[2rem] shadow-luxe"
        >
          {/* After (base) */}
          <img
            src={SLIDER_AFTER}
            alt="Depois — pele lisa"
            className="absolute inset-0 h-full w-full object-cover scale-125 origin-center"
            draggable={false}
          />
          {/* Before (overlay clipped by slider position) */}
          <img
            src={SLIDER_BEFORE}
            alt="Antes — pele marcada"
            className="absolute inset-0 h-full w-full object-cover scale-125 origin-center"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            draggable={false}
          />

          {/* Labels */}
          <span className="absolute left-4 top-4 rounded-full bg-midnight-deep/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cream">
            Antes
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-midnight-deep">
            Depois
          </span>

          {/* Handle */}
          <div
            className="pointer-events-none absolute inset-y-0"
            style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          >
            <div className="h-full w-[3px] bg-white shadow-luxe" />
            <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-midnight-deep shadow-luxe">
              <span className="text-lg font-bold">⇔</span>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onInput={(event) => setPos(Number(event.currentTarget.value))}
            onChange={(event) => setPos(Number(event.currentTarget.value))}
            aria-label="Deslize para comparar antes e depois"
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Mechanisms — 3 pillars of how it works
 * ============================================================ */
function MechanismsSection() {
  const items = [
    {
      icon: "⟟",
      title: "Compressão Física",
      body: "Impede que a pele dobre e amasse contra o travesseiro durante o sono.",
    },
    {
      icon: "❈",
      title: "Hidratação Profunda",
      body: "Cria um microclima que puxa a umidade para a superfície da pele.",
    },
    {
      icon: "✦",
      title: "Estímulo Contínuo",
      body: "Melhora a circulação local e previne a quebra do colágeno noite após noite.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Como funciona
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Por que os adesivos Sonolift funcionam tanto?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nossos adesivos são <strong className="text-midnight-deep">100% de grau médico</strong>, feitos de silicone hipoalergênico e podem ser reutilizados por até <strong className="text-midnight-deep">30 noites</strong>.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Eles funcionam porque tratam a causa real das sleep lines, através de <strong className="text-midnight-deep">3 mecanismos</strong>:
          </p>
        </div>
        <div className="rounded-[2rem] bg-midnight-deep p-3 shadow-luxe md:p-4">
          {items.map((m, i) => {
            const isOpen = open === i;
            return (
              <button
                type="button"
                key={m.title}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full border-b border-white/10 px-5 py-5 text-left last:border-b-0 md:px-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-lg text-midnight-deep">
                      {m.icon}
                    </span>
                    <span className="font-display text-xl text-cream md:text-2xl">
                      {m.title}
                    </span>
                  </div>
                  <span
                    className={`text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden pl-14 pr-2 text-sm leading-relaxed text-cream/80">
                    {m.body}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  How To Use — 4 easy steps
 * ============================================================ */
function HowToUseSection() {
  const stepPrep = stepPrepAsset.url;
  const stepPeel = stepPeelAsset.url;
  const stepStore = stepStoreAsset.url;
  const steps = [
    {
      title: "Preparação",
      body: "Limpe e seque bem a pele. Não aplique cremes antes.",
      img: stepPrep,
    },
    {
      title: "Posicionamento",
      body: "Retire a película protetora e aplique o patch na região desejada.",
      img: stepPeel,
    },
    {
      title: "Ação Noturna",
      body: "Durma tranquilamente. O microclima do silicone faz o trabalho.",
      img: stepNightAsset.url,
    },
    {
      title: "Reutilização",
      body: "Ao acordar, retire suavemente, lave se necessário e guarde na base protetora.",
      img: stepStore,
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ritual simples</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Como blindar a sua pele em 4 passos rápidos.
          </h2>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {steps.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.title} delay={80}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    reverse ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="h-px w-10 bg-midnight-deep/70" />
                      <span className="font-display text-sm font-bold tracking-widest text-midnight-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
                      {s.title}
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[2rem] shadow-luxe">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Clinical Study — Count Up animation
 * ============================================================ */
function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) run();
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    // Failsafe: never leave the stat showing 0 if the observer never fires.
    const fallback = window.setTimeout(() => {
      if (!started.current) {
        started.current = true;
        setValue(target);
      }
    }, 3000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [target, durationMs]);

  return { ref, value };
}

function CountStat({ n, suffix = "%", label }: { n: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(n);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-soft"
    >
      <p
        className="font-display font-semibold tabular-nums text-midnight-deep"
        style={{ fontSize: "clamp(3.5rem,8vw,6rem)", lineHeight: 1, letterSpacing: "-.02em" }}
      >
        {value}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{label}</p>
    </div>
  );
}

function ClinicalStudySection() {
  const stats = [
    { n: 87, label: "reduziram as marcas matinais em 14 dias" },
    { n: 92, label: "relatam pele mais lisa ao acordar" },
    { n: 78, label: "atenuação visível de linhas finas no rosto e colo" },
    { n: 100, label: "hipoalergênico e seguro para uso contínuo" },
  ];
  return (
    <section id="ciencia" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Estudo clínico independente</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Eficácia comprovada.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resultados observados com 312 voluntárias entre 35 e 65 anos.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <CountStat n={s.n} label={s.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  UGC — Reels-style horizontal scroll
 * ============================================================ */
function UGCSection() {
  return (
    <section id="resultados" className="bg-lavender py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Resultados reais de manhã</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Elas acordam com a pele que sempre quiseram.
          </h2>
        </div>

        <div className="mt-12 -mx-4 overflow-x-auto pb-4">
          <div className="flex gap-5 px-4 snap-x snap-mandatory">
            {UGC_VIDEOS.map((v) => (
              <figure
                key={v.name}
                className="relative shrink-0 snap-start overflow-hidden rounded-[1.75rem] shadow-luxe"
                style={{ width: "260px" }}
              >
                <video
                  src={v.src}
                  poster={v.poster}
                  className="aspect-[9/16] h-auto w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  controls
                  controlsList="nodownload"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-4 text-white">
                  <p className="font-display text-lg leading-tight">{v.name}</p>
                  <p className="text-xs text-white/85">{v.benefit}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Treatment map — 6 areas
 * ============================================================ */
function TreatmentMapSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Alvo · Tratamento · Transformação</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Cada patch, uma área estratégica.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do rosto ao colo — proteção completa contra as rugas do sono.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {TREATMENT_MAP.map((t, i) => (
            <Reveal key={t.area} delay={i * 90}>
            <div className="group relative overflow-hidden rounded-2xl shadow-soft bg-midnight-deep">
              <img
                src={t.img}
                alt={`Área tratada: ${t.area}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Offer
 * ============================================================ */
function OfferSection() {
  return (
    <section id="oferta" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Oferta especial</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Receba o Sistema Facial SonoLift™ e ganhe proteção para o Colo.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <article className="flex flex-col rounded-3xl border border-border bg-cream p-8 shadow-soft">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Produto principal
            </p>
            <h3 className="mt-2 font-display text-2xl text-midnight-deep md:text-3xl">
              SonoLift™ Facial
            </h3>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-midnight">
              {[
                "Patches de silicone médico reutilizáveis por 30 noites",
                "Testa, entre-sobrancelhas, olhos e sulco nasolabial",
                "Barreira contra fricção, dobras e pressão",
                "Pele visivelmente mais lisa ao acordar",
              ].map((b) => (
                <li key={b} className="flex gap-2"><span className="text-gold">✓</span>{b}</li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
              Valor individual: <strong className="text-midnight-deep">R$ 230</strong>
            </p>
          </article>

          {/* Card 2 — Bônus */}
          <article className="relative mt-4 flex flex-col rounded-3xl border-2 border-gold bg-cream p-8 pt-9 shadow-luxe md:mt-0">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-gradient px-4 py-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.2em] text-midnight-deep shadow-soft md:left-6 md:translate-x-0">
              Bônus grátis
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              Bônus exclusivo
            </p>
            <h3 className="mt-2 font-display text-2xl text-midnight-deep md:text-3xl">
              SonoLift™ Colo
            </h3>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-midnight">
              {[
                "Patch anatômico exclusivo para a região do colo",
                "Atenua linhas verticais causadas pelo sono de lado",
                "Hipoalergênico, dermatologicamente testado",
                "Reutilizável por 30 noites",
              ].map((b) => (
                <li key={b} className="flex gap-2"><span className="text-gold">✓</span>{b}</li>
              ))}
            </ul>
            <p className="mt-6 border-t border-gold/40 pt-4 text-sm text-muted-foreground">
              Valor individual: <span className="line-through">R$ 167</span>{" "}
              <strong className="text-gold">(GRÁTIS)</strong>
            </p>
          </article>
        </div>

        {/* Final summary */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-midnight-gradient p-8 text-white shadow-luxe md:p-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Você recebe hoje
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 text-center font-display text-2xl leading-tight md:text-3xl">
            <span>Sistema Facial</span>
            <span className="text-white/60">+</span>
            <span>Colo</span>
            <span className="text-gold">GRÁTIS</span>
          </p>

          <div className="mt-6 text-center">
            <p className="text-sm text-white/60">
              Valor total: <span className="line-through">R$ 397</span>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">Oferta especial</p>
            <p className="font-display text-6xl font-semibold text-gold md:text-7xl">R$ 197</p>
            <p className="mt-2 text-sm text-white/80">
              Em até <strong className="text-gold">12x de R$ 16,42</strong> sem juros
            </p>
          </div>

          <div className="mt-8">
            <CTAButton block label="GARANTIR MEU KIT + COLO GRÁTIS →" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gold">
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Compra 100% Segura
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.15em] text-white/70">
            <span>VISA</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>ELO</span>
            <span>·</span>
            <span>PIX</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Reviews carousel
 * ============================================================ */
function ReviewsSection() {
  const reviews = [
    { title: "Adeus marcas do travesseiro", body: "Na segunda semana meu marido já perguntou o que eu tinha feito de diferente. Pele lisa como há anos não via.", name: "Patrícia M." },
    { title: "Resultado em poucos dias", body: "Tenho 64 anos e a pele do meu colo mudou completamente. Uso todas as noites e a diferença é absurda.", name: "Carla R." },
    { title: "Dormi melhor que nunca", body: "Pensei que seria desconfortável mas é o oposto. Nem sinto que estou usando e o efeito de manhã é instantâneo.", name: "Juliana T." },
    { title: "Pele mais firme", body: "A textura do meu rosto mudou completamente. Recomendei para toda a família. Aos 68 anos o resultado é incrível.", name: "Helena S." },
    { title: "Vale cada centavo", body: "Já testei de tudo e nada se compara. As linhas do colo praticamente sumiram em um mês.", name: "Rosana P." },
  ];
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">+12.480 avaliações</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Milhares de noites transformadas.
          </h2>
        </div>
        <div className="mt-12 -mx-4 overflow-x-auto pb-4">
          <div className="flex gap-5 px-4 snap-x snap-mandatory">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="shrink-0 snap-start rounded-3xl border border-border bg-white p-7 shadow-soft"
                style={{ width: "320px" }}
              >
                <div className="text-gold text-lg">★★★★★</div>
                <h3 className="mt-3 font-display text-xl text-midnight-deep">"{r.title}"</h3>
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-wider text-midnight">
                  — {r.name} · <span className="text-muted-foreground">Compra verificada</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  FAQ Accordion
 * ============================================================ */
function FAQSection() {
  const items = [
    { q: "Em quanto tempo vejo resultados?", a: "A maioria percebe pele mais lisa na primeira manhã. Resultados profundos em linhas aparecem entre 14 e 28 noites." },
    { q: "Os patches são reutilizáveis?", a: "Sim. Cada patch é reutilizável por até 30 noites com os cuidados de higiene indicados." },
    { q: "Posso usar com meu skincare habitual?", a: "Sim. Aplique após seu sérum ou hidratante já absorvido pela pele." },
    { q: "É indicado para peles sensíveis?", a: "Sim. Silicone médico hipoalergênico, dermatologicamente testado." },
    { q: "Como funciona a garantia?", a: "30 noites para testar. Não gostou? Devolvemos 100% do valor, sem burocracia." },
    { q: "Quanto tempo leva o envio?", a: "Envio em até 24h úteis com frete grátis para todo o Brasil." },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Dúvidas frequentes</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Tudo que você precisa saber.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((i) => (
            <details
              key={i.q}
              className="group rounded-2xl border border-border bg-cream p-5 shadow-soft transition open:shadow-luxe"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-midnight-deep">
                {i.q}
                <span className="ml-4 text-gold text-xl transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  Footer
 * ============================================================ */
function FooterSection() {
  const badges = [
    { icon: "🧴", label: "Hipoalergênico" },
    { icon: "🚚", label: "Frete Grátis Brasil" },
    { icon: "🔒", label: "Compra 100% Segura" },
    { icon: "🛡️", label: "Garantia 30 noites" },
  ];
  return (
    <footer className="bg-midnight-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">SonoLift<sup className="text-gold">™</sup></p>
            <p className="mt-3 max-w-sm text-sm text-cream/70">
              Sistema de proteção contra as rugas do sono. Silicone médico de alta performance.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Loja</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href="#oferta" className="hover:text-gold">Oferta</a></li>
              <li><a href="#ciencia" className="hover:text-gold">Ciência</a></li>
              <li><a href="#resultados" className="hover:text-gold">Resultados</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Institucional</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><Link to="/quem-somos" className="hover:text-gold">Quem somos</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-gold">Política de privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-gold">Termos de uso</Link></li>
              <li><a href="https://zggech-4a.myshopify.com/pages/reembolso-trocas-e-devolucoes" className="hover:text-gold">Reembolso e trocas</a></li>
              <li><a href="https://zggech-4a.myshopify.com/pages/frete-e-entrega" className="hover:text-gold">Frete e entrega</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/60 md:flex-row">
          <span>© 2026 SonoLift Beauty LTDA · CNPJ 76.047.876/0001-90</span>
          <span>Visa · Mastercard · ELO · Pix</span>
        </div>
      </div>
    </footer>
  );
}