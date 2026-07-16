import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { fetchFeaturedProduct, type ProductNode } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useCartSync } from "@/hooks/useCartSync";

const CTA_LABEL = "QUERO MEU KIT FACIAL + COLO GRÁTIS";

/* Placeholder media (Unsplash / Pexels). Swap for brand assets in Shopify. */
const HERO_IMG =
  "https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=1600&q=80";
const BEFORE_AFTER_VIDEO =
  "https://videos.pexels.com/video-files/6540923/6540923-uhd_1440_2732_25fps.mp4";
const UGC_VIDEOS: { src: string; poster: string; name: string; benefit: string }[] = [
  {
    src: "https://videos.pexels.com/video-files/8940722/8940722-uhd_1440_2732_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    name: "Marina S.",
    benefit: "Pele lisa ao acordar",
  },
  {
    src: "https://videos.pexels.com/video-files/7592725/7592725-uhd_1440_2732_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    name: "Cláudia R.",
    benefit: "Sumiram as marcas do travesseiro",
  },
  {
    src: "https://videos.pexels.com/video-files/8940924/8940924-uhd_1440_2732_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    name: "Regina T.",
    benefit: "Colo mais firme em 3 semanas",
  },
  {
    src: "https://videos.pexels.com/video-files/7592731/7592731-uhd_1440_2732_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=800&q=80",
    name: "Sônia L.",
    benefit: "Acordo descansada e sem vincos",
  },
  {
    src: "https://videos.pexels.com/video-files/7663029/7663029-uhd_1440_2732_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    name: "Beatriz F.",
    benefit: "Rugas do sono atenuadas",
  },
];

const TREATMENT_MAP: { area: string; img: string }[] = [
  { area: "Testa", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80" },
  { area: "Contorno dos olhos", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80" },
  { area: "Sulco nasolabial", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80" },
  { area: "Bochechas", img: "https://images.unsplash.com/photo-1614270263654-cf9a49b3f26a?auto=format&fit=crop&w=800&q=80" },
  { area: "Pescoço", img: "https://images.unsplash.com/photo-1614285457768-646e5eff8ab9?auto=format&fit=crop&w=800&q=80" },
  { area: "Colo", img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useCartSync();
  return (
    <div className="min-h-screen bg-cream text-midnight-deep">
      <TopBar />
      <Nav />
      <HeroSection />
      <Reveal><InvisibleEnemySection /></Reveal>
      <Reveal><BeforeAfterSliderSection /></Reveal>
      <Reveal><BeforeAfterSection /></Reveal>
      <Reveal><ClinicalStudySection /></Reveal>
      <Reveal><MechanismsSection /></Reveal>
      <Reveal><HowToUseSection /></Reveal>
      <Reveal><UGCSection /></Reveal>
      <Reveal><TreatmentMapSection /></Reveal>
      <Reveal><OfferSection /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <FooterSection />
    </div>
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
  return (
    <div className="sticky top-0 z-50 bg-black text-cream">
      <div className="mx-auto max-w-6xl px-4 py-2.5 text-center text-[13px] font-medium tracking-wide sm:text-sm">
        🎁 <span className="text-gold">BRINDE GARANTIDO:</span> Kit Colo incluído grátis no seu pedido.
      </div>
    </div>
  );
}

/* ============================================================
 *  Navigation
 * ============================================================ */
function Nav() {
  return (
    <header className="border-b border-border/40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" className="font-display text-2xl tracking-tight text-midnight-deep">
          SonoLift<sup className="text-gold">™</sup>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#ciencia" className="hover:text-midnight-deep">Eficácia</a>
          <a href="#resultados" className="hover:text-midnight-deep">Resultados</a>
          <a href="#oferta" className="hover:text-midnight-deep">Oferta</a>
        </nav>
        <a
          href="#oferta"
          className="hidden rounded-full bg-midnight px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream shadow-soft transition hover:bg-midnight-deep md:inline-block"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}

/* ============================================================
 *  Hero
 * ============================================================ */
function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/40 md:from-cream md:via-cream/70 md:to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-lavender px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-midnight-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Tecnologia patenteada
          </span>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-midnight-deep sm:text-5xl md:text-6xl">
            Acorde sem as <em className="italic text-gold">marcas</em> que o travesseiro deixa.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Uma barreira invisível de silicone médico que protege sua pele durante as 8 horas mais decisivas do seu dia.
          </p>
          <CTAButton />
          <div className="flex items-center gap-3 text-sm text-midnight">
            <span className="text-gold text-lg">★★★★★</span>
            <span><strong>+12.480</strong> avaliações verificadas</span>
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
  const { data: product, isLoading: loadingProduct } = useFeaturedProduct();
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const handleClick = async () => {
    const variant = product?.variants.edges[0]?.node;
    if (!variant) {
      toast.error("Produto indisponível no momento.");
      return;
    }
    const checkoutUrl = await addItem({
      variantId: variant.id,
      title: product.title,
      imageUrl: product.images.edges[0]?.node.url,
      price: variant.price,
      quantity: 1,
    });
    if (checkoutUrl) window.open(checkoutUrl, "_blank");
    else toast.error("Não foi possível iniciar o checkout. Tente novamente.");
  };

  const busy = loadingProduct || isLoading;
  return (
    <button
      onClick={handleClick}
      disabled={busy}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-midnight-deep shadow-luxe animate-cta-pulse transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base ${block ? "w-full" : ""}`}
    >
      {busy ? "Processando…" : label}
      {!busy && <span className="transition group-hover:translate-x-1">→</span>}
    </button>
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
  const steps = [
    {
      title: "Preparação",
      body: "Limpe e seque bem a pele. Não aplique cremes antes.",
      img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Posicionamento",
      body: "Retire a película protetora e aplique o patch na região desejada.",
      img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Ação Noturna",
      body: "Durma tranquilamente. O microclima do silicone faz o trabalho.",
      img: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Reutilização",
      body: "Ao acordar, retire suavemente, lave se necessário e guarde na base protetora.",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Ritual simples
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-5xl">
            Como blindar a sua pele em 4 passos rápidos.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-cream shadow-soft transition hover:shadow-luxe"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-midnight-deep shadow-luxe">
                  {i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-midnight-deep">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
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
      <p className="font-display text-6xl font-semibold tabular-nums text-midnight-deep md:text-7xl">
        {value}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{label}</p>
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
            Resultados observados com 312 voluntárias entre 35 e 50 anos.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <CountStat key={s.label} n={s.n} label={s.label} />
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
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
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
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {TREATMENT_MAP.map((t) => (
            <div key={t.area} className="group relative overflow-hidden rounded-2xl shadow-soft">
              <img
                src={t.img}
                alt={`Área tratada: ${t.area}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/80 via-midnight-deep/10 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-xl text-white md:text-2xl">
                {t.area}
              </p>
            </div>
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
          <article className="relative flex flex-col rounded-3xl border-2 border-gold bg-cream p-8 shadow-luxe">
            <span className="absolute -top-3 left-6 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-deep">
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
          <p className="mt-3 text-center font-display text-2xl leading-tight md:text-3xl">
            Sistema Facial <span className="text-white/60">+</span> Colo <span className="text-gold">GRÁTIS</span>
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
            <CTAButton block label="GARANTIR MEU KIT FACIAL + COLO GRÁTIS" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.15em] text-white/70">
            <span>🔒 Compra segura</span>
            <span>·</span>
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
              Sistema de proteção contra as rugas do sono. Tecnologia patenteada de silicone médico.
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
              <li><Link to="/politica-de-reembolso" className="hover:text-gold">Reembolso e trocas</Link></li>
              <li><Link to="/politica-de-frete" className="hover:text-gold">Frete e entrega</Link></li>
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