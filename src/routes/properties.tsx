import { createFileRoute } from "@tanstack/react-router";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertySearch } from "@/components/PropertySearch";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Featured Properties · Abraham Rosa — Lyons Real Estate" },
      {
        name: "description",
        content:
          "Browse curated Arizona listings — luxury homes in Scottsdale, Phoenix, Tempe, Paradise Valley and beyond with Abraham Rosa of Lyons Real Estate.",
      },
      { property: "og:title", content: "Featured Properties · Abraham Rosa" },
      {
        property: "og:description",
        content: "Curated Arizona listings across Scottsdale, Phoenix, Tempe and the Valley.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Current Listings"
            title="Featured Properties"
            description="Every listing is personally walked, vetted, and represented by Abraham. New opportunities are added each week."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Not Seeing It?"
            title="Tell me what you're looking for"
            description="Many of the best opportunities never reach the public market. Share your criteria and get first access."
          />
          <div className="mt-14">
            <PropertySearch />
          </div>
        </div>
      </section>
    </main>
  );
}
