import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/properties";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials · Abraham Rosa — Lyons Real Estate" },
      {
        name: "description",
        content:
          "Read what Arizona buyers, sellers, and investors say about working with Abraham Rosa of Lyons Real Estate — trust, results, and calm guidance.",
      },
      { property: "og:title", content: "Client Testimonials · Abraham Rosa" },
      {
        property: "og:description",
        content: "Real stories from Arizona clients who bought, sold, and invested with Abraham.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Testimonials</p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight md:text-6xl">
              Trust, in their own words
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The measure of this work is how clients feel when the keys
              change hands. Here's what they say afterward.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="card-lift flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-6 w-6 text-sage" />
                <p className="mt-5 flex-1 font-serif text-xl leading-relaxed">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {t.detail}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mx-auto max-w-md leading-relaxed text-muted-foreground">
              Ready to write your own success story?
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
