import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, Tag, TrendingUp, Compass, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Abraham Rosa — Lyons Real Estate Arizona" },
      {
        name: "description",
        content:
          "Buying, selling, investing, and real estate guidance across Arizona. Calm, expert representation with Abraham Rosa of Lyons Real Estate.",
      },
      { property: "og:title", content: "Real Estate Services · Abraham Rosa" },
      {
        property: "og:description",
        content: "Buying, selling, investing, and guidance across the Arizona market.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: KeyRound,
    title: "Buying",
    text: "From pre-approval to keys in hand, Abraham guides you through every decision — neighborhoods, inspections, negotiation, and closing — so you buy with clarity and confidence.",
    points: ["Off-market access", "Skilled negotiation", "Trusted lender network"],
  },
  {
    icon: Tag,
    title: "Selling",
    text: "Strategic pricing, editorial-quality marketing, and calm, firm negotiation. Abraham positions your home to stand out — and works to maximize your return.",
    points: ["Staging & photography", "Data-driven pricing", "Multi-channel marketing"],
  },
  {
    icon: TrendingUp,
    title: "Investing",
    text: "Numbers-first analysis of cash flow, appreciation, and risk. Abraham helps investors identify properties that perform — and avoid the ones that don't.",
    points: ["Rental market analysis", "Portfolio strategy", "1031 exchange guidance"],
  },
  {
    icon: Compass,
    title: "Real Estate Guidance",
    text: "Not ready to transact? Get honest advice on timing, market conditions, relocation planning, or what your home could be worth — no obligation attached.",
    points: ["Market consultations", "Relocation support", "Home value reviews"],
  },
];

function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Services</p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight md:text-6xl">
              How Abraham can help
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Four ways to work together — each grounded in the same calm,
              client-first approach.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="card-lift rounded-2xl border border-border bg-card p-10"
              >
                <div className="flex items-center justify-between">
                  <s.icon className="h-7 w-7 text-sage" />
                  <span className="font-serif text-4xl font-medium text-sand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-serif text-3xl font-medium">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:py-16">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/70">
              A short conversation is often all it takes to bring a plan into
              focus. No pressure, no obligation.
            </p>
            <Link to="/contact" className="btn-outline-light mt-8">
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
