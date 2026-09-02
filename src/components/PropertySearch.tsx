import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

const intents = ["Buy", "Sell", "Invest"] as const;
const locations = ["Anywhere in the Valley", "Phoenix", "Tempe", "Scottsdale", "Paradise Valley", "Chandler", "Mesa", "Fountain Hills"];
const types = ["Any Type", "Single Family", "Condo / Townhome", "Luxury Estate", "New Construction", "Investment Property"];
const budgets = ["No Max", "Up to $500K", "Up to $1M", "Up to $1.5M", "Up to $2.5M", "$2.5M+"];

export function PropertySearch() {
  const [intent, setIntent] = useState<(typeof intents)[number]>("Buy");
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
      <div className="flex justify-center gap-2">
        {intents.map((i) => (
          <button
            key={i}
            onClick={() => setIntent(i)}
            className={`rounded-full px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all ${
              intent === i
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-sand"
            }`}
          >
            {i}
          </button>
        ))}
      </div>

      <form
        className="mt-8 grid gap-5 md:grid-cols-3"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/contact" });
        }}
      >
        {[
          { label: "Location", options: locations },
          { label: "Property Type", options: types },
          { label: "Budget", options: budgets },
        ].map((field) => (
          <label key={field.label} className="block text-left">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {field.label}
            </span>
            <select
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-sage"
            >
              {field.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        ))}
        <div className="md:col-span-3">
          <button type="submit" className="btn-primary w-full md:w-auto">
            <Search className="h-4 w-4" /> Find My Property
          </button>
        </div>
      </form>
    </div>
  );
}
