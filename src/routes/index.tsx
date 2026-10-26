import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import sonoliftHtml from "../content/sonolift-atual.html?raw";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SonoLift™ — Kit Facial Completo + Colo de brinde por R$ 239" },
      {
        name: "description",
        content:
          "Kit Facial Completo SonoLift™ por R$ 239,00 com tratamento para o colo de brinde. Silicone médico reutilizável. Frete grátis Brasil.",
      },
      { property: "og:title", content: "SonoLift™ — Kit Facial Completo + Colo de brinde por R$ 239" },
      {
        property: "og:description",
        content:
          "Kit Facial Completo por R$ 239,00 com tratamento para o colo de brinde. Em até 12x de R$ 19,92 sem juros.",
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
