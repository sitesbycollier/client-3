import { Mountains, AirplaneTilt, UsersThree } from "@phosphor-icons/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Mountains,
    label: "Natural State",
    title: "Arkansas Beauty",
    description:
      "Rolling Ozark ridgelines frame every morning takeoff. Open sky stretches in every direction, and the calm of the Natural State surrounds your property year-round — a landscape that rewards the decision to put down roots here.",
    accent: "border-t-2 border-t-primary",
  },
  {
    icon: AirplaneTilt,
    label: "Aviation-First",
    title: "Aviation-First Living",
    description:
      "Your hangar is your garage. Taxi straight from your front apron to the runway without a trailer, a tow, or a drive to the airport. Homes at NWA Air Park are designed from the ground up for pilots who want to fly on their own schedule.",
    accent: "border-t-2 border-t-primary",
    featured: true,
  },
  {
    icon: UsersThree,
    label: "Founding Member",
    title: "Founding Community",
    description:
      "Early buyers don&#39;t just purchase land — they help write the rules, shape the culture, and define what NWA Air Park becomes. Founding members have a direct voice in community standards, shared infrastructure, and the character of the air park.",
    accent: "border-t-2 border-t-primary",
  },
];

export default function CommunityBenefits() {
  return (
    <section
      id="community-benefits"
      className="bg-muted py-20 px-4 md:px-8 lg:px-16"
    >
      {/* Intro block */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Plane-mark detail with restrained accent lines */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-10 bg-primary opacity-60" />
            <span className="flex items-center gap-1.5">
              <AirplaneTilt
                weight="duotone"
                size={18}
                className="text-primary"
              />
              <Badge
                variant="outline"
                className="uppercase tracking-widest text-xs border-primary text-primary px-3 py-0.5"
              >
                NWA Air Park
              </Badge>
            </span>
            <span className="block h-px w-10 bg-primary opacity-60" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight text-foreground mb-4">
            Why Buy Early at NWA Air Park
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-prose">
            Founding plots are limited. Here's what sets this community apart —
            and why the right time to secure your place in the sky is now.
          </p>

          {/* Decorative accent rule */}
          <div className="flex items-center gap-1 mt-6">
            <span className="block h-1 w-8 rounded-full bg-primary" />
            <span className="block h-1 w-3 rounded-full bg-accent" />
            <span className="block h-1 w-3 rounded-full bg-primary opacity-40" />
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className={`
                  bg-card border border-border rounded-xl shadow-sm
                  transition-all duration-200 ease-out
                  hover:-translate-y-1 hover:shadow-md
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                  ${benefit.featured ? "ring-2 ring-primary shadow-md" : ""}
                  overflow-hidden
                `}
              >
                {/* Top accent line */}
                <div
                  className={`h-1 w-full ${benefit.featured ? "bg-primary" : "bg-muted-foreground opacity-20"}`}
                />

                <CardHeader className="p-6 pb-3">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`
                        flex items-center justify-center w-10 h-10 rounded-lg
                        ${benefit.featured ? "bg-primary text-primary-foreground" : "bg-muted text-primary"}
                      `}
                    >
                      <Icon weight="duotone" size={22} />
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-1.5 uppercase tracking-widest text-xs border-border text-muted-foreground px-2.5 py-0.5"
                    >
                      {benefit.label}
                    </Badge>
                  </div>

                  <CardTitle className="font-heading text-xl leading-snug text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>

                  {benefit.featured && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="block h-px flex-1 bg-border" />
                      <span className="text-xs uppercase tracking-widest text-primary font-medium">
                        Most Popular
                      </span>
                      <span className="block h-px flex-1 bg-border" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
