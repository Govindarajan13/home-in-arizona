import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Abraham Rosa · Lyons Real Estate Arizona" },
      {
        name: "description",
        content:
          "Schedule a consultation with Abraham Rosa of Lyons Real Estate. Buying, selling, or investing in Phoenix, Tempe, or Scottsdale — let's talk.",
      },
      { property: "og:title", content: "Contact Abraham Rosa · Lyons Real Estate" },
      {
        property: "og:description",
        content: "Let's find your next opportunity. Schedule a consultation today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight md:text-6xl">
              Let's find your next opportunity.
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Share a few details below and Abraham will reach out personally
              within one business day. Prefer to talk? Call or email anytime.
            </p>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                  <Phone className="h-4 w-4 text-sage" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Phone</p>
                  <p className="mt-0.5 font-medium">(602) 555-0147</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                  <Mail className="h-4 w-4 text-sage" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Email</p>
                  <p className="mt-0.5 font-medium">abraham@lyonsrealestate.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                  <MapPin className="h-4 w-4 text-sage" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Office</p>
                  <p className="mt-0.5 font-medium">4747 N 7th St, Suite 210, Phoenix, AZ 85014</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-sage" />
                <h2 className="mt-6 font-serif text-3xl font-medium">
                  Message received
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. Abraham will be in touch within
                  one business day to schedule your consultation.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Name</span>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Email</span>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Phone</span>
                  <input
                    type="tel"
                    placeholder="(optional)"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Message</span>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your goals — buying, selling, investing, or just exploring…"
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Schedule a Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
