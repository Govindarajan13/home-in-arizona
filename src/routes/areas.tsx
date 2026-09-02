import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas Served · Abraham Rosa — Lyons Real Estate Arizona" },
      {
        name: "description",
        content:
          "Abraham Rosa serves Phoenix, Tempe, Scottsdale, Paradise Valley, Chandler, Mesa and the greater Arizona Valley with local real estate expertise.",
      },
      { property: "og:title", content: "Areas Served · Abraham Rosa" },
      {
        property: "og:description",
        content: "Local expertise across Phoenix, Tempe, Scottsdale and greater Arizona.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AreasPage,
});

const featured = [
  {
    name: "Phoenix",
    image: prop2,
    blurb:
      "From historic Arcadia to the vibrant downtown core — Arizona's capital offers remarkable variety for every stage of life.",
    median: "Median $685K",
  },
  {
    name: "Tempe",
    image: prop3,
    blurb:
      "University energy, lakefront living, and a thriving tech corridor make Tempe one of the Valley's most dynamic markets.",
    median: "Median $540K",
  },
  {
    name: "Scottsdale",
    image: prop1,
    blurb:
      "Resort-caliber homes, world-class golf, and desert serenity. Scottsdale remains Arizona's premier luxury destination.",
    median: "Median $1.1M",
  },
];

const otherAreas = [
  "Paradise Valley",
  "Chandler",
  "Mesa",
  "Gilbert",
  "Fountain Hills",
  "Cave Creek",
  "Ahwatukee",
  "Peoria",
];

function AreasPage() {
  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Areas Served</p>
            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight md:text-6xl">
              Deep roots across the Valley
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Abraham knows these streets personally — the schools, the
              commute patterns, the pockets of value, and the character of
              every neighborhood he serves.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {featured.map((a) => (
              <article
                key={a.name}
                className="card-lift group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.image}
                    alt={`${a.name}, Arizona real estate`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
                    <MapPin className="h-3 w-3 text-sage" /> {a.median}
                  </span>
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-3xl font-medium">{a.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {a.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)]">
            <h2 className="text-center font-serif text-3xl font-medium">
              Also serving
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {otherAreas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-secondary px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="mx-auto max-w-lg leading-relaxed text-muted-foreground">
              Curious about a specific neighborhood, school district, or price
              trend? Ask — local knowledge is the whole point.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Ask About an Area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
