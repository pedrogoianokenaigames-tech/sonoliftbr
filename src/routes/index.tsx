import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import heroImg from "@/assets/sonolift-hero.jpg";
import bonusImg from "@/assets/sonolift-bonus.jpg";
import sleepImg from "@/assets/sonolift-sleep.jpg";
import { fetchFeaturedProduct, type ProductNode } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useCartSync } from "@/hooks/useCartSync";

const CTA_LABEL = "QUERO MEU KIT FACIAL + BRINDE GRÁTIS";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useCartSync();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <Mechanism />
      <Science />
      <Ritual />
      <Offer />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

/* =========================================================================
 *  SECTION · Sticky Bar (Custom Liquid ready)
 * ========================================================================= */
function StickyBar() {
  const [time, setTime] = useState(15 * 60);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(time / 60)).padStart(2, "0");
  const ss = String(time % 60).padStart(2, "0");
  return (
    <div className="sticky top-0 z-50 bg-midnight-gradient text-porcelain">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-2.5 text-center text-[13px] sm:flex-row sm:gap-4 sm:text-sm">
        <span className="font-medium tracking-wide">
          🎁 <span className="text-gold">BRINDE GARANTIDO:</span> Kit Pescoço e Colo incluído grátis no seu pedido.
        </span>
        <span className="hidden text-gold/70 sm:inline">•</span>
        <span className="font-mono text-gold">
          reservado por {mm}:{ss}
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
 *  SECTION · Navigation
 * ========================================================================= */
function Nav() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" className="font-display text-2xl tracking-tight text-midnight-deep">
          SonoLift<sup className="text-gold">™</sup>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#ciencia" className="hover:text-midnight-deep">Ciência</a>
          <a href="#oferta" className="hover:text-midnight-deep">Oferta</a>
          <a href="#avaliacoes" className="hover:text-midnight-deep">Avaliações</a>
        </nav>
        <a
          href={CHECKOUT_URL}
          className="hidden rounded-full bg-midnight px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-porcelain shadow-soft transition hover:bg-midnight-deep md:inline-block"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}

/* =========================================================================
 *  SECTION · Hero
 * ========================================================================= */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 md:grid-cols-2 md:gap-20 md:py-28">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-champagne/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-midnight">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Tecnologia patenteada
          </span>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-midnight-deep sm:text-5xl md:text-6xl">
            Acorde sem as <em className="italic text-gold">marcas</em> que o travesseiro deixa.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            A barreira invisível contra as <strong className="text-midnight">rugas do sono</strong>. Silicone médico que protege sua pele durante as 8 horas mais decisivas do seu dia.
          </p>

          <OfferBadge />

          <CTAButton />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">⭐️⭐️⭐️⭐️⭐️ <strong className="text-midnight">+12.480</strong> avaliações verificadas</span>
            <span>· Compra 100% segura</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-gold-gradient opacity-20 blur-3xl" aria-hidden />
          <img
            src={heroImg}
            alt="Kit Facial SonoLift em embalagem dourada sobre seda azul midnight"
            width={1408}
            height={1600}
            className="relative rounded-[1.5rem] shadow-luxe"
          />
        </div>
      </div>
    </section>
  );
}

function OfferBadge() {
  return (
    <div className="rounded-2xl border border-gold/30 bg-card p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Oferta de lançamento</p>
      <p className="mt-2 font-display text-xl leading-tight text-midnight-deep sm:text-2xl">
        Kit Facial SonoLift <span className="text-muted-foreground">+</span> Pescoço e Colo <span className="text-gold">GRÁTIS</span>
      </p>
      <div className="mt-4 flex flex-wrap items-baseline gap-3">
        <span className="text-sm text-muted-foreground line-through">De R$ 397</span>
        <span className="font-display text-4xl font-semibold text-midnight-deep sm:text-5xl">R$ 197</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Em até <strong className="text-midnight">12x de R$ 16,42</strong> sem juros
      </p>
    </div>
  );
}

function CTAButton({ block = false }: { block?: boolean }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-midnight-deep shadow-luxe transition hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_oklch(0.78_0.13_82/0.6)] sm:text-base ${
        block ? "w-full" : ""
      }`}
    >
      {CTA_LABEL}
      <span className="transition group-hover:translate-x-1">→</span>
    </a>
  );
}

/* =========================================================================
 *  SECTION · Trust strip
 * ========================================================================= */
function TrustStrip() {
  const items = [
    "FRETE GRÁTIS PARA TODO BRASIL",
    "GARANTIA DE 30 NOITES",
    "SISTEMA SONOLIFT™ COMPLETO",
    "HIPOALERGÊNICO • DERMATOLOGICAMENTE TESTADO",
    "ENVIO RÁPIDO E SEGURO",
  ];
  return (
    <div className="border-y border-border/60 bg-midnight-gradient py-3 text-porcelain">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 text-[11px] font-medium tracking-[0.15em] text-porcelain/80">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-6">
            {t}
            {i < items.length - 1 && <span className="text-gold/60">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
 *  SECTION · Mechanism
 * ========================================================================= */
function Mechanism() {
  const bullets = [
    "Silicone médico autoadesivo reutilizável por 30 dias",
    "Hidratação ocluida — pele desperta 3x mais hidratada",
    "Compatível com qualquer rotina de skincare noturna",
    "Barreira invisível contra fricção, dobras e pressão",
  ];
  return (
    <section id="ciencia" className="bg-porcelain py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 md:grid-cols-2">
        <div>
          <img
            src={sleepImg}
            alt="Mulher dormindo tranquilamente sobre travesseiro de seda"
            width={1408}
            height={1008}
            loading="lazy"
            className="rounded-[1.5rem] shadow-luxe"
          />
        </div>
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Mecanismo de ação</p>
          <h2 className="font-display text-3xl leading-tight text-midnight-deep md:text-4xl">
            A dor invisível das <em className="italic text-gold">rugas do sono</em>.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Enquanto dormimos, o rosto pressiona o travesseiro por 6 a 9 horas seguidas. Essa compressão causa microfissuras no colágeno que evoluem para rugas permanentes — as chamadas <em>sleep wrinkles</em>.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            O SonoLift™ forma uma <strong className="text-midnight">barreira invisível</strong> de silicone médico que adere suavemente à pele e bloqueia fricção, dobras e pressão durante toda a noite.
          </p>
          <ul className="space-y-3 pt-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-midnight-deep">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-gradient text-[10px] font-bold text-midnight-deep">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · Science / Numbers
 * ========================================================================= */
function Science() {
  const stats = [
    { n: "94%", t: "redução das marcas matinais após 14 noites" },
    { n: "89%", t: "relatam pele visivelmente mais lisa ao acordar" },
    { n: "76%", t: "atenuação de linhas finas no rosto e colo" },
    { n: "100%", t: "hipoalergênico e seguro para uso contínuo" },
  ];
  return (
    <section className="bg-midnight-gradient py-24 text-porcelain md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Estudo clínico independente</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Eficácia comprovada.</h2>
          <p className="mt-4 text-sm text-porcelain/70">
            Resultados observados em estudo com 312 voluntárias entre 45 e 72 anos.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.n} className="rounded-2xl border border-gold/20 bg-white/[0.04] p-8 text-center backdrop-blur">
              <p className="font-display text-5xl font-semibold text-gold">{s.n}</p>
              <p className="mt-3 text-sm leading-relaxed text-porcelain/80">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · Ritual
 * ========================================================================= */
function Ritual() {
  const steps = [
    "Limpe o rosto com sua rotina habitual",
    "Aplique o sérum ou hidratante de sua preferência",
    "Posicione os patches SonoLift™ nas áreas-alvo",
    "Durma tranquila — a tecnologia trabalha por você",
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Seu ritual noturno</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-4xl">
          Quatro passos para acordar renovada.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Um gesto simples antes de dormir, resultados visíveis ao amanhecer.
        </p>
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s} className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft">
              <span className="font-display text-3xl text-gold">0{i + 1}</span>
              <p className="mt-3 text-sm leading-relaxed text-midnight-deep">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · Offer
 * ========================================================================= */
function Offer() {
  const items = [
    {
      tag: "Produto Principal",
      name: "SonoLift™ Facial",
      areas: ["Testa", "Região entre as sobrancelhas", "Área dos olhos", "Sulco nasolabial"],
      price: "R$ 97",
      free: false,
    },
    {
      tag: "Bônus Exclusivo",
      name: "SonoLift™ Pescoço",
      areas: ["Pescoço", "Linhas causadas pela posição de dormir"],
      price: "R$ 67",
      free: true,
    },
    {
      tag: "Bônus Exclusivo",
      name: "SonoLift™ Colo",
      areas: ["Colo", "Linhas e vincos causados pela compressão noturna"],
      price: "R$ 67",
      free: true,
    },
  ];
  return (
    <section id="oferta" className="bg-champagne/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Oferta especial de lançamento</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-4xl">
            Compre o Kit Facial e ganhe <em className="italic text-gold">Pescoço e Colo</em> grátis.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Proteção completa contra as marcas do travesseiro, pagando por uma única peça.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${i.free ? "text-gold" : "text-muted-foreground"}`}>
                {i.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl text-midnight-deep">{i.name}</h3>
              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted-foreground">
                {i.areas.map((a) => (
                  <li key={a} className="flex gap-2"><span className="text-gold">•</span> {a}</li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">Valor individual</p>
                <p className={`font-display text-2xl ${i.free ? "text-gold" : "text-midnight-deep"}`}>
                  {i.free ? "GRÁTIS" : i.price}
                  {i.free && <span className="ml-2 text-xs font-sans text-muted-foreground line-through">{i.price}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Consolidated offer card */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl bg-midnight-gradient p-8 text-porcelain shadow-luxe md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Você recebe hoje</p>
              <p className="mt-2 font-display text-2xl leading-tight md:text-3xl">
                Sistema Facial <span className="text-porcelain/70">+</span> Pescoço <span className="text-porcelain/70">+</span> Colo
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-sm text-porcelain/60 line-through">Valor total R$ 397</span>
              </div>
              <div className="mt-1 flex flex-wrap items-baseline gap-3">
                <span className="font-display text-5xl font-semibold text-gold md:text-6xl">R$ 197</span>
              </div>
              <p className="mt-2 text-sm text-porcelain/80">
                Em até <strong className="text-gold">12x de R$ 16,42</strong> sem juros
              </p>
            </div>
            <img
              src={bonusImg}
              alt="Bônus grátis: Kit Pescoço e Colo em embalagem dourada"
              width={1200}
              height={1200}
              loading="lazy"
              className="rounded-2xl shadow-luxe"
            />
          </div>
          <div className="mt-8">
            <CTAButton block />
            <p className="mt-4 text-center text-xs text-porcelain/60">
              Compra 100% segura · VISA · Mastercard · ELO · PIX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · Testimonials
 * ========================================================================= */
function Testimonials() {
  const reviews = [
    {
      title: "Adeus marcas do travesseiro",
      body: "Já na segunda semana acordei e meu marido perguntou o que eu tinha feito de diferente. Pele lisa como há anos não via.",
      name: "Patrícia M.",
    },
    {
      title: "Resultado em poucos dias",
      body: "Tenho 64 anos e minha pele do colo mudou completamente. Uso todas as noites e a diferença é absurda. Vale cada centavo.",
      name: "Carla R.",
    },
    {
      title: "Dormi melhor que nunca",
      body: "Pensei que seria desconfortável mas é o oposto. Nem sinto que estou usando e o efeito de manhã é instantâneo.",
      name: "Juliana T.",
    },
    {
      title: "Pele mais firme",
      body: "A textura do meu rosto mudou completamente. Recomendei para toda a família. Mesmo na pele madura de 68 anos, o resultado é incrível.",
      name: "Helena S.",
    },
  ];
  return (
    <section id="avaliacoes" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">+12.480 avaliações</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-4xl">
            Milhares de noites de sono transformadas.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="text-gold">★★★★★</div>
              <h3 className="mt-3 font-display text-xl text-midnight-deep">"{r.title}"</h3>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-wider text-midnight">
                — {r.name} · <span className="text-muted-foreground">Compra verificada</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · Guarantee
 * ========================================================================= */
function Guarantee() {
  return (
    <section className="bg-champagne/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold-gradient text-3xl shadow-luxe">
          🛡️
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Garantia de 30 noites</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-4xl">
          Experimente sem risco. Ame ou devolvemos seu dinheiro.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Teste o Sistema Facial SonoLift™ com Pescoço e Colo inclusos por 30 noites. Se você não acordar com a pele visivelmente mais lisa e firme, devolvemos 100% do seu investimento.
        </p>
        <div className="mt-8"><CTAButton /></div>
        <p className="mt-4 text-xs text-muted-foreground">
          Frete grátis Brasil · Pagamento 100% seguro · Até 12x sem juros
        </p>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · FAQ
 * ========================================================================= */
function FAQ() {
  const items = [
    {
      q: "Em quanto tempo vejo resultados?",
      a: "A maioria das clientes percebe pele mais lisa logo na primeira manhã. Resultados mais profundos em rugas e linhas aparecem entre 14 e 28 noites de uso contínuo.",
    },
    { q: "Os patches são reutilizáveis?", a: "Sim. Cada patch é reutilizável por até 30 noites com os cuidados de higiene indicados." },
    { q: "Posso usar com meu skincare habitual?", a: "Sim. Aplique após seu sérum ou hidratante já absorvido pela pele." },
    { q: "É indicado para peles sensíveis?", a: "Sim. Silicone médico hipoalergênico, dermatologicamente testado." },
    { q: "Como funciona a garantia?", a: "30 noites para testar. Não gostou? Devolvemos 100% do valor, sem burocracia." },
    { q: "Quanto tempo leva o envio?", a: "Envio em até 24h úteis com frete grátis para todo o Brasil." },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Dúvidas frequentes</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-midnight-deep md:text-4xl">
            Tudo que você precisa saber.
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((i) => (
            <details
              key={i.q}
              className="group rounded-xl border border-border bg-card p-5 shadow-soft transition open:shadow-luxe"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-midnight-deep">
                {i.q}
                <span className="ml-4 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
 *  SECTION · Footer
 * ========================================================================= */
function Footer() {
  return (
    <footer className="border-t border-border bg-midnight-gradient text-porcelain">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">SonoLift<sup className="text-gold">™</sup></p>
          <p className="mt-3 max-w-sm text-sm text-porcelain/70">
            Sistema de proteção contra rugas do sono. Tecnologia patenteada que cuida da sua pele enquanto você descansa.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Loja</p>
          <ul className="mt-4 space-y-2 text-sm text-porcelain/70">
            <li><a href="#oferta" className="hover:text-gold">Oferta</a></li>
            <li><a href="#ciencia" className="hover:text-gold">Ciência</a></li>
            <li><a href="#avaliacoes" className="hover:text-gold">Avaliações</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Institucional</p>
          <ul className="mt-4 space-y-2 text-sm text-porcelain/70">
            <li>Política de privacidade</li>
            <li>Termos de uso</li>
            <li>Reembolso e trocas</li>
            <li>Frete e entrega</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-porcelain/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-porcelain/60 md:flex-row">
          <span>© 2026 SonoLift™. Todos os direitos reservados.</span>
          <span>Visa · Mastercard · Pix</span>
        </div>
      </div>
    </footer>
  );
}
