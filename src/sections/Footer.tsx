import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Airplane,
  MapPin,
  Phone,
  // FacebookLogo,
  // InstagramLogo,
  // YoutubeLogo,
} from "@phosphor-icons/react";

const siteLinks = [
  { label: "Benefits", href: "#community-benefits" },
  { label: "Plot Opportunity", href: "#plot-opportunity" },
];

const developmentLinks = [
  { label: "Phase 1 Lots", href: "#plot-opportunity" },
  { label: "Community Vision", href: "#community-benefits" },
  { label: "Runway Access", href: "#community-benefits" },
  { label: "Hangar Homes", href: "#plot-opportunity" },
];

// const socialLinks = [
//   { icon: FacebookLogo, label: "Facebook", href: "#" },
//   { icon: InstagramLogo, label: "Instagram", href: "#" },
//   { icon: YoutubeLogo, label: "YouTube", href: "#" },
// ];

export default function Footer() {
  return (
    <footer id="footer" className="bg-card border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Block */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <Airplane
                  weight="duotone"
                  size={22}
                  className="text-primary-foreground -rotate-45"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl tracking-tight text-foreground font-bold">
                  NWA Air
                </span>
                <span className="font-heading text-xl tracking-tight text-accent font-bold -mt-0.5">
                  Park
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A patriotic Arkansas air park community where your runway is your
              driveway. Rooted in the Natural State. Built for those who fly.
            </p>

            {/* Accent badges */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs uppercase tracking-wide border-primary text-primary px-2.5 py-0.5 rounded-full"
              >
                Northwest Arkansas
              </Badge>
              <Badge
                variant="outline"
                className="text-xs uppercase tracking-wide border-border text-muted-foreground px-2.5 py-0.5 rounded-full"
              >
                The Natural State
              </Badge>
            </div>

            {/* Social icons — commented out until accounts are live */}
            {/* <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Icon weight="duotone" size={18} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Link Groups */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-8 md:justify-center">
            {/* Site Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="font-heading text-sm uppercase tracking-widest text-foreground font-semibold">
                Navigate
              </h4>
              <ul className="flex flex-col gap-2.5">
                {siteLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Development Updates */}
            <div className="flex flex-col gap-4">
              <h4 className="font-heading text-sm uppercase tracking-widest text-foreground font-semibold">
                Development
              </h4>
              <ul className="flex flex-col gap-2.5">
                {developmentLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Block */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading text-sm uppercase tracking-widest text-foreground font-semibold">
              Get in Touch
            </h4>

            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+15017642025"
                  className="flex items-start gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
                >
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-muted text-primary">
                    <Phone weight="duotone" size={15} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">
                      Russell Jackson
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-all duration-200 ease-out">
                      (501) 764-2025
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-muted text-primary">
                    <MapPin weight="duotone" size={15} />
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Northwest Arkansas
                    <br />
                    <span className="text-xs text-muted-foreground opacity-75">
                      Exact location released to qualified buyers
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            {/* CTA note */}
            <div className="mt-1 p-4 rounded-xl border border-border bg-muted">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  Call to reserve.
                </span>{" "}
                Reach Russell directly to join the interest list and secure your
                position before Phase 1 lots are released.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <Separator className="bg-border" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} NWA Air Park LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Airplane
              weight="duotone"
              size={13}
              className="text-primary -rotate-45"
            />
            <span>Proudly rooted in Arkansas</span>
          </div>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Design by{" "}
            <a
              href="https://sitesbycollier.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Sites By Collier
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
