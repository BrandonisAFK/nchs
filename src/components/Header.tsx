import { Phone, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on page change or Escape
  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = isScrolled || isMobileMenuOpen;
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2.5 font-medium text-sm transition-colors ${isActive ? "text-gold-400" : "text-white/70 hover:text-white"}`;

  return (
    <header
      role="banner"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        solid ? "bg-navy-950/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="New Covenant Home Services home" className="flex items-center">
            <img src={logo} alt="New Covenant Home Services LLC" className="h-14 w-auto object-contain rounded-lg" />
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <a
              href="tel:615-390-3994"
              className="ml-3 flex items-center gap-2 bg-gradient-gold text-navy-950 px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold"
            >
              <Phone className="w-4 h-4" />
              615-390-3994
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="md:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile" className="md:hidden absolute top-full left-0 right-0 bg-navy-950 border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium text-base ${isActive ? "text-gold-400 bg-white/5" : "text-white/80 hover:bg-white/5"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="tel:615-390-3994"
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-gold text-navy-950 px-5 py-3 rounded-lg font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call 615-390-3994
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
