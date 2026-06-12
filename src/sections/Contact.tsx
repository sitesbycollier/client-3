import { Phone, MapPin, User } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background py-20 px-4 md:px-8 lg:px-16 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-10 bg-primary opacity-60" />
            <span className="uppercase tracking-widest text-xs text-primary font-semibold">
              Contact
            </span>
            <span className="block h-px w-10 bg-primary opacity-60" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight text-foreground mb-4">
            Ready to Secure Your Plot?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-prose">
            Reach out directly to discuss available lots, pricing, and what it
            means to become a founding member of NWA Air Park.
          </p>
          <div className="flex items-center gap-1 mt-6">
            <span className="block h-1 w-8 rounded-full bg-primary" />
            <span className="block h-1 w-3 rounded-full bg-accent" />
            <span className="block h-1 w-3 rounded-full bg-primary opacity-40" />
          </div>
        </div>

        {/* Contact Card */}
        <div className="mx-auto max-w-md bg-card border-2 border-primary rounded-2xl shadow-lg overflow-hidden">
          {/* Top accent bar */}
          <div className="h-2 w-full bg-primary" />

          <div className="p-8 flex flex-col gap-6">
            {/* Name */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User weight="duotone" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                  Your Contact
                </p>
                <p className="font-heading text-xl font-bold text-foreground">
                  Russell Jackson
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-border" />

            {/* Phone */}
            <a
              href="tel:+15017642025"
              className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                <Phone weight="duotone" size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                  Cell
                </p>
                <p className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  (501) 764-2025
                </p>
              </div>
            </a>

            <div className="h-px w-full bg-border" />

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-muted text-primary">
                <MapPin weight="duotone" size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                  Location
                </p>
                <p className="font-heading text-base font-semibold text-foreground">
                  Northwest Arkansas
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Exact address released to qualified buyers
                </p>
              </div>
            </div>

            {/* CTA note */}
            <div className="mt-2 p-4 rounded-xl bg-muted border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                <span className="font-semibold text-foreground">
                  Founding plots are limited.
                </span>{" "}
                Call Russell today to reserve your position before Phase 1 lots
                are released.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
