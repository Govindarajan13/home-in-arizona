import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/areas", label: "Areas" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onDarkHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" className="group flex flex-col leading-none">
          <span
            className={`font-serif text-2xl font-medium tracking-wide transition-colors ${
              onDarkHero ? "text-background" : "text-foreground"
            }`}
          >
            Abraham Rosa
          </span>
          <span
            className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] transition-colors ${
              onDarkHero ? "text-background/70" : "text-muted-foreground"
            }`}
          >
            Lyons Real Estate
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                onDarkHero
                  ? "text-background/80 hover:text-background"
                  : "text-muted-foreground hover:text-foreground"
              } ${pathname === l.to ? (onDarkHero ? "!text-background" : "!text-sage") : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`rounded-full px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all ${
              onDarkHero
                ? "bg-background text-foreground hover:bg-sand"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            Let's Talk
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`lg:hidden ${onDarkHero ? "text-background" : "text-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                  pathname === l.to ? "text-sage" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-2 w-fit">
              Let's Talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
