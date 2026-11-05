import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import sonoliftHtml from "../content/sonolift-atual.html?raw";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Black Friday SonoLift™ — Kit Facial + Colo Grátis" },
      {
        name: "description",
        content:
          "Patches reutilizáveis SonoLift: kit facial de 16 peças com colo grátis. R$ 239,00 no cartão ou R$ 227,05 no Pix. Frete grátis e garantia de 7 dias.",
      },
      { property: "og:title", content: "Black Friday SonoLift™ — Kit Facial + Colo Grátis" },
      {
        property: "og:description",
        content:
          "Kit facial de 16 peças e colo grátis. Em 12x de R$ 19,92 ou R$ 227,05 no Pix, com frete grátis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://sonoliftbr.lovable.app/__l5e/assets-v1/00a82198-30b1-4465-b793-ada529e83874/ritual-prep.webp" },
      { name: "twitter:image", content: "https://sonoliftbr.lovable.app/__l5e/assets-v1/00a82198-30b1-4465-b793-ada529e83874/ritual-prep.webp" },
    ],
  }),
});

function Home() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.dataset.mounted === "1") return;
    host.dataset.mounted = "1";
    host.innerHTML = sonoliftHtml;

    // innerHTML never executes scripts — re-create them in order.
    const scripts = Array.from(host.querySelectorAll("script"));
    let cancelled = false;

    const run = async () => {
      for (const old of scripts) {
        if (cancelled) return;
        const s = document.createElement("script");
        for (const attr of Array.from(old.attributes)) {
          s.setAttribute(attr.name, attr.value);
        }
        if (old.src) {
          const loaded = new Promise<void>((resolve) => {
            s.onload = () => resolve();
            s.onerror = () => resolve();
          });
          old.replaceWith(s);
          await loaded;
        } else {
          s.textContent = old.textContent;
          old.replaceWith(s);
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={hostRef} />;
}
