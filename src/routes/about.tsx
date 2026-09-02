import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, HeartHandshake, Award } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Abraham Rosa · Lyons Real Estate Arizona" },
      {
        name: "description",
        content:
          "Meet Abraham Rosa — 15+ years of Arizona real estate expertise, a client-first approach, and deep roots in Phoenix, Tempe, and Scottsdale.",
      },
      { property: "og:title", content: "About Abraham Rosa · Lyons Real Estate" },
      {
        property: "og:description",
        content: "Local expertise, honest guidance, lasting trust in Arizona real estate.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const strengths = [
  {
    icon: ShieldCheck,
    title: "Trust First",
    text: "Clear communication and honest counsel at every step — no pressure, no surprises.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    text: "Fifteen years of neighborhood-level knowledge across the Phoenix metro and beyond.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    text: "Your goals set the agenda. Abraham's job is to get you there with confidence.",
  },
  {
    icon: Award,
    title: "Proven Results",
    text: "300+ closed transactions and $180M in career volume across every market cycle.",
  },
];

function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-14 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="eyebrow">About</p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight md:text-6xl">
              A neighbor first, an agent second.
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Abraham Rosa was raised in the Valley and has spent his entire
              career helping people put down roots here. He believes a home is
              more than a transaction — it's where life happens. That belief
              shapes everything about how he works.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Clients describe him as calm under pressure, meticulous with
              detail, and genuinely invested in their outcome. Whether you're
              relocating across the country or moving across town, you'll
              always know where things stand — and what comes next.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When he's not negotiating contracts, you'll find him hiking
              Camelback at sunrise or exploring Arizona's back roads with his
              family.
            </p>
            <Link to="/contact" className="btn-primary mt-10">
              Work With Abraham
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
              <img
                src={portrait}
                alt="Portrait of Abraham Rosa"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Clients Choose Abraham</p>
            <h2 className="mt-3 font-serif text-4xl font-medium md:text-5xl">
              Strengths that show in results
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="card-lift rounded-2xl border border-border bg-card p-8"
              >
                <s.icon className="h-6 w-6 text-sage" />
                <h3 className="mt-5 font-serif text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-6 md:grid-cols-4">
          {[
            { value: "15+", label: "Years of Experience" },
            { value: "300+", label: "Homes Sold" },
            { value: "$180M", label: "Career Sales Volume" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]"
            >
              <p className="font-serif text-5xl font-medium text-sage">{s.value}</p>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <img
          src={hero}
          alt="Arizona desert estate at dusk"
          loading="lazy"
          width={1920}
          height={1152}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container-site relative text-center text-background">
          <p className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-snug md:text-4xl">
            “The right home changes everything. My job is to help you find it.”
          </p>
          <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-background/70">
            Abraham Rosa
          </p>
        </div>
      </section>
    </main>
  );
}
