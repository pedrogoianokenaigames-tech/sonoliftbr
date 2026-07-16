import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PolicyLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream text-midnight-deep">
      {/* Top bar */}
      <header className="border-b border-border/40 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-midnight-deep transition hover:text-gold"
          >
            <span aria-hidden>←</span> Voltar
          </Link>
          <Link to="/" className="font-display text-xl tracking-tight text-midnight-deep">
            SonoLift<sup className="text-gold">™</sup>
          </Link>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="font-display text-4xl leading-tight text-midnight-deep md:text-5xl">
          {title}
        </h1>
        {updatedAt && (
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">
            Última atualização: {updatedAt}
          </p>
        )}
        <div className="mt-10 space-y-5 font-sans text-[16px] leading-[1.75] text-midnight-deep/85">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-cream">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <div>
            <p className="font-medium text-midnight-deep">SonoLift Beauty LTDA</p>
            <p>CNPJ 76.047.876/0001-90</p>
          </div>
          <p className="tracking-wide text-midnight-deep/70">
            Visa · Mastercard · ELO · Pix
          </p>
        </div>
      </footer>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-2xl text-midnight-deep md:text-3xl">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}