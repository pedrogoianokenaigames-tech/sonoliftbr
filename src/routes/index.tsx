import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import sonoliftHtml from "../content/sonolift-v19.html?raw";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SonoLift™ — Adesivos de silicone contra as rugas do sono" },
      {
        name: "description",
        content:
          "Acorde sem as marcas do travesseiro. Kit Facial SonoLift™ + Kit Colo grátis. Silicone médico hipoalergênico, reutilizável por 30 noites. Frete grátis Brasil.",
      },
      { property: "og:title", content: "SonoLift™ — Adeus marcas do travesseiro" },
      {
        property: "og:description",
        content:
          "Compre o Kit Facial SonoLift™ e ganhe o Kit Colo 100% grátis. 12x de R$ 16,42 sem juros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
