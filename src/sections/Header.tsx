import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X, AirplaneTilt } from "@phosphor-icons/react";

const navLinks = [
  { label: "Benefits", href: "#community-benefits" },
  { label: "Plot Opportunity", href: "#plot-opportunity" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header
      id="header"
      className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      {/* Accent line — restrained red-to-blue gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-white to-blue-700 opacity-80" />

      {/* Main bar */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* ── Logo / Wordmark ── */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="NWA Air Park — return to top"
          >
            {/* Plane mark */}
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-sm group-hover:shadow-md transition-all duration-200 ease-out group-hover:-translate-y-0.5">
              <AirplaneTilt weight="duotone" size={20} />
            </span>

            {/* Wordmark */}
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base md:text-lg font-semibold tracking-tight text-foreground">
                NWA Air Park
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
                Northwest Arkansas
              </span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Right side: CTA + mobile toggle ── */}
          <div className="flex items-center gap-2">
            {/* CTA — always visible */}
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-xs md:text-sm px-4 md:px-5"
            >
              <a href="#contact">Contact Us</a>
            </Button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-muted transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? (
                <X weight="duotone" size={20} />
              ) : (
                <List weight="duotone" size={20} />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Nav Overlay ── */}
        {mobileNavOpen && (
          <nav
            className="md:hidden border-t border-border bg-background/98 pb-4 pt-2"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileNavOpen(false)}
                    className="flex items-center px-4 py-3 rounded-md text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Bottom shadow line to lift header off page */}
      <div className="h-px w-full bg-border opacity-60" />
    </header>
  );
}
