import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3 md:py-20">
        <div>
          <p className="font-serif text-3xl font-medium">Abraham Rosa</p>
          <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
            Lyons Real Estate · Arizona
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Helping clients find a place that feels like home — across Phoenix,
            Tempe, Scottsdale, and the greater Valley.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Facebook, label: "Facebook" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
            Explore
          </p>
          <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/properties", label: "Properties" },
              { to: "/services", label: "Services" },
              { to: "/areas", label: "Areas" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
            Contact
          </p>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary-foreground/50" />
              (602) 555-0147
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary-foreground/50" />
              abraham@lyonsrealestate.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
              4747 N 7th St, Suite 210
              <br />
              Phoenix, AZ 85014
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Abraham Rosa · Lyons Real Estate. All rights reserved.</p>
          <p>AZ DRE License #BR654321000 · Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
