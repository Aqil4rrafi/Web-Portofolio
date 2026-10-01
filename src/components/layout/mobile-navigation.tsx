"use client";

import { Menu, Search, X } from "lucide-react";
import { navigation, portfolio } from "@/src/data/portfolio";

type MobileNavigationProps = {
  activeSection: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpenSearch: () => void;
};

export function MobileNavigation({
  activeSection,
  open,
  onToggle,
  onClose,
  onOpenSearch,
}: MobileNavigationProps) {
  return (
    <>
      <header className="mobile-header">
        <a href="#top" className="mobile-wordmark" aria-label="Back to introduction">
          <span>{portfolio.profile.initials}</span>
          <strong>{portfolio.profile.name}</strong>
        </a>
        <div>
          <button type="button" onClick={onOpenSearch} aria-label="Search portfolio">
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={onToggle}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${open ? "is-open" : ""}`} id="mobile-navigation">
        <div className="mobile-drawer-heading">
          <p>Portfolio index</p>
          <span>{portfolio.profile.shortRole}</span>
        </div>
        <nav aria-label="Mobile portfolio sections">
          {navigation.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === id ? "is-active" : undefined}
                onClick={onClose}
              >
                <span>{item.index}</span>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
      {open && <button className="drawer-scrim" onClick={onClose} aria-label="Close navigation" />}
    </>
  );
}
