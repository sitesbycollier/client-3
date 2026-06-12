import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Airplane, MapPin, Users, Star } from "@phosphor-icons/react";

const contentItems = [
  {
    icon: MapPin,
    eyebrow: "Plot Reservation Overview",
    headline: "Secure Your Homesite Early",
    body: "Founding reservations give you first access to select your plot along the private runway — choosing your orientation, hangar footprint, and proximity to the taxiway before the community opens to the public. A reservation holds your position with a fully refundable deposit while final planning is completed.",
  },
  {
    icon: Star,
    eyebrow: "Vision Funding Model",
    headline: "Reservations Move the Runway Forward",
    body: "Early reservation interest directly unlocks the land acquisition and infrastructure phases. Each deposit signals real demand to lenders and partners, accelerating the timeline from concept to cleared runway. Founding residents aren't just buyers — they're the proof of concept that makes NWA Air Park possible.",
  },
  {
    icon: Users,
    eyebrow: "Early Buyer Positioning",
    headline: "Shape Northwest Arkansas's First Aviation Community",
    body: "There is no comparable fly-in residential community in the Arkansas Ozarks. Founding residents will have a voice in community covenants, hangar design standards, and shared amenity priorities. You're not moving into someone else's vision — you're building it alongside neighbors who share the same sky.",
  },
];

export default function PlotOpportunity() {
  return (
    <section
      id="plot-opportunity"
      className="bg-background py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Plane-mark badge */}
        <div className="flex items-center gap-2 mb-6">
          <Badge className="bg-primary text-primary-foreground uppercase tracking-widest text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-sans">
            <Airplane weight="duotone" size={14} />
            Founding Opportunity
          </Badge>
        </div>

        {/* Heading block */}
        <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight text-foreground text-center mb-3">
          Founding Plot Reservations
        </h2>

        <p className="text-base md:text-lg text-muted-foreground text-center max-w-xl mb-8">
          A limited number of homesite plots are available for early reservation
          at NWA Air Park — Northwest Arkansas&#39;s first private runway
          community.
        </p>

        {/* Accent rule */}
        <div className="flex w-24 mb-10 rounded-full overflow-hidden h-1">
          <div className="flex-1 bg-destructive" />
          <div className="flex-1 bg-primary" />
        </div>

        {/* White content card */}
        <div className="w-full bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
          {/* Hero image strip */}
          <div className="aspect-video w-full">
            <img
              src="https://c.animaapp.com/mq7inybvRFFcEP/img/ai_4.png"
              alt="Residential lot markers near private runway"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content items */}
          <div className="p-8 flex flex-col gap-0">
            {contentItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.eyebrow}>
                  <div className="flex flex-col sm:flex-row gap-4 py-8">
                    {/* Icon column */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        <Icon
                          weight="duotone"
                          size={22}
                          className="text-primary"
                        />
                      </div>
                    </div>

                    {/* Text column */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                        {item.eyebrow}
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl leading-snug text-foreground">
                        {item.headline}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
                        {item.body}
                      </p>
                    </div>
                  </div>

                  {index < contentItems.length - 1 && (
                    <Separator className="bg-border" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer accent strip inside card */}
          <div className="flex h-1 w-full">
            <div className="flex-1 bg-destructive" />
            <div className="flex-1 bg-muted" />
            <div className="flex-1 bg-primary" />
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-sm text-muted-foreground text-center max-w-md">
          Reservations are fully refundable until a purchase agreement is
          executed. Plots are allocated on a first-reserved basis.
        </p>
      </div>
    </section>
  );
}
