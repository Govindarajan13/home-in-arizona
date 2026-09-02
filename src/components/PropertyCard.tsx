import { Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Bath, Ruler } from "lucide-react";
import type { Property } from "@/lib/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="card-lift group overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={`${property.title}, ${property.location}`}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
          {property.tag}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-medium">{property.title}</h3>
            <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {property.location}, Arizona
            </p>
          </div>
          <p className="whitespace-nowrap font-serif text-xl font-medium text-sage">
            {property.price}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-6 border-t border-border pt-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-sage" /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-sage" /> {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-sage" /> {property.sqft} Sq Ft
          </span>
        </div>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-sage"
        >
          View Property <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
