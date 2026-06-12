import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AirplaneTilt, MapPin, HouseLine } from "@phosphor-icons/react";

const highlights = [
  {
    icon: HouseLine,
    label: "Hangar-Home Plots",
    description:
      "Residential lots designed for homes with integrated aircraft hangars — your garage door opens to the taxiway.",
  },
  {
    icon: AirplaneTilt,
    label: "Taxi-to-Takeoff Living",
    description:
      "Roll out of your driveway and onto the runway. No trailering, no airport commute — just pure fly-in freedom.",
  },
  {
    icon: MapPin,
    label: "Northwest Arkansas",
    description:
      "Nestled in the Ozarks, the Natural State's rolling hills and clear skies make every departure a postcard moment.",
  },
];

export default function AirparkHero() {
  return (
    <section
      id="airpark-hero"
      className="relative bg-background overflow-hidden py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      {/* Sky gradient field */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

      {/* Subtle decorative horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Cloud-white content card */}
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[560px]">
            {/* Left column — text, 55% */}
            <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-14 lg:py-16 lg:w-[55%]">
              {/* Logo mark + eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20">
                  <AirplaneTilt
                    weight="duotone"
                    size={22}
                    className="text-primary -rotate-45"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-semibold text-foreground tracking-tight text-sm">
                    NWA Air Park
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xs uppercase tracking-wide border-primary/30 text-primary px-2 py-0.5"
                  >
                    Northwest Arkansas
                  </Badge>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-foreground mb-5 max-w-xl">
                Live in Northwest Arkansas Where Your Garage Opens to the{" "}
                <span className="text-primary">Runway</span>
              </h1>

              {/* Lead copy */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-prose">
                NWA Air Park is a community-first fly-in neighborhood carved
                into the heart of the Natural State — where open skies,
                residential freedom, and Ozark roots come together on one
                private runway. Claim your plot and build the life you&#39;ve
                been cleared for.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button
                  size="lg"
                  className="rounded-lg bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  asChild
                >
                  <a href="#plot-opportunity">Reserve a Plot</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-border hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  asChild
                >
                  <a href="#community-benefits">View the Vision</a>
                </Button>
              </div>

              {/* Highlight items */}
              <div className="flex flex-col gap-4 border-t border-border pt-8">
                {highlights.map(({ icon: Icon, label, description }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-md bg-muted flex items-center justify-center border border-border">
                      <Icon
                        weight="duotone"
                        size={16}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-foreground leading-snug">
                        {label}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — image, 45% */}
            <div className="relative lg:w-[45%] min-h-[320px] lg:min-h-0 overflow-hidden group">
              {/* Decorative red accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary z-10 opacity-70" />

              <div className="w-full h-full aspect-[4/3] lg:aspect-auto">
                <img
                  src="https://c.animaapp.com/mq7inybvRFFcEP/img/ai_1.png"
                  alt="Small aircraft taxiing beside hangar homes"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-card/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating emblem badge */}
              <div className="absolute bottom-5 right-5 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg flex items-center gap-2">
                <img
                  src="https://c.animaapp.com/mq7inybvRFFcEP/img/ai_3.png"
                  alt="Patriotic aviation emblem with wing and runway"
                  loading="lazy"
                  className="w-8 h-8 object-cover rounded-md"
                />
                <div>
                  <p className="text-xs font-heading font-semibold text-foreground leading-none">
                    NWA Air Park
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-none">
                    Est. NW Arkansas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
