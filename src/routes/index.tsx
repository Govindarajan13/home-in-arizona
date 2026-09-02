import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import { properties, testimonials } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertySearch } from "@/components/PropertySearch";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abraham Rosa · Lyons Real Estate — Arizona Luxury Homes" },
      {
        name: "description",
        content:
          "Abraham Rosa of Lyons Real Estate helps buyers, sellers, and investors find a place that feels like home across Phoenix, Tempe, and Scottsdale, Arizona.",
      },
      { property: "og:title", content: "Abraham Rosa · Lyons Real Estate" },
      {
        property: "og:description",
        content:
          "Finding a place that feels like home. Luxury real estate in Phoenix, Tempe & Scottsdale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Luxury Arizona desert home at dusk with saguaro cacti"
          width={1920}
          height={1152}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        <div className="container-site relative pb-24 pt-40 text-background">
          <p className="eyebrow fade-up !text-sand">Abraham Rosa · Lyons Real Estate</p>
          <h1
            className="fade-up mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.08] md:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Finding a place that feels like home.
          </h1>
          <p
            className="fade-up mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-background/80"
            style={{ animationDelay: "0.3s" }}
          >
            Phoenix · Tempe · Scottsdale
          </p>
          <div
            className="fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <Link to="/properties" className="btn-primary !bg-background !text-foreground hover:!bg-sand">
              Explore Properties
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Work With Me
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-background/60 md:block">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* Intro / About teaser */}
      <section className="py-24 md:py-32">
        <div className="container-site grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
              <img
                src={portrait}
                alt="Abraham Rosa, Arizona real estate agent"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card px-7 py-5 shadow-[var(--shadow-soft)] md:-right-8">
              <p className="font-serif text-3xl font-medium text-sage">15+</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Years in Arizona
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">About Abraham</p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Local expertise, honest guidance, lasting trust.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              For over fifteen years, Abraham Rosa has helped families,
              first-time buyers, and seasoned investors navigate the Arizona
              market with confidence. His approach is simple: listen first,
              advise honestly, and treat every transaction like it matters —
              because it does.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "300+", label: "Homes Sold" },
                { value: "$180M", label: "Career Volume" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-medium">{s.value}</p>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline mt-10">
              More About Me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Featured Properties"
            title="Homes with character"
            description="A curated selection of current listings across the Valley — each chosen for its quality, location, and sense of place."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/properties" className="btn-outline">
              View All Properties <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property search */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Property Search"
            title="Start with what matters to you"
            description="Tell me a little about your goals and I'll hand-pick properties worth your time."
          />
          <div className="mt-14">
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* Testimonials teaser */}
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow !text-sand">Client Words</p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Trusted by families across Arizona
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote
                key={t.name}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8"
              >
                <p className="font-serif text-xl leading-relaxed">
                  “{t.quote}”
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
                    {t.detail}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/testimonials" className="btn-outline-light">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-site text-center">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight md:text-6xl">
            Let's find your next opportunity.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Whether you're buying your first home, selling a beloved property,
            or building a portfolio — the conversation starts here.
          </p>
          <Link to="/contact" className="btn-primary mt-10">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
