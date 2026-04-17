import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="h-[70px] bg-white border-b border-[color:var(--color-border-light)] sticky top-0 z-40">
      <div className="h-full px-4 sm:px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Terminal className="text-[color:var(--color-primary)] w-6 h-6" />
          <span className="font-extrabold text-xl text-[color:var(--color-primary)] tracking-tight">
            IBOGUN COMPUTER VILLAGE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[color:var(--color-primary)]",
                  isActive ? "text-[color:var(--color-primary)]" : "text-[color:var(--color-text-muted)]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary)] focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn("md:hidden border-b border-[color:var(--color-border-light)] bg-white absolute w-full left-0", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-2 text-base font-medium border-l-2",
                  isActive 
                    ? "text-[color:var(--color-primary)] border-[color:var(--color-primary)]" 
                    : "text-[color:var(--color-text-muted)] border-transparent hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
