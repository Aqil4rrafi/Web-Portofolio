"use client";

import { ArrowUpRight, Search } from "lucide-react";
import { navigation, portfolio } from "@/src/data/portfolio";

type PortfolioSidebarProps = {
  activeSection: string;
  onOpenSearch: () => void;
};

export function PortfolioSidebar({
  activeSection,
  onOpenSearch,
}: PortfolioSidebarProps) {
  const { profile } = portfolio;

  return (
    <aside className="portfolio-sidebar">
      <div className="sidebar-inner">
        <a className="sidebar-identity" href="#top" aria-label="Back to introduction">
          <span className="identity-mark">{profile.initials}</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.shortRole}</small>
          </span>
        </a>

        <button className="sidebar-search" type="button" onClick={onOpenSearch}>
          <Search size={15} aria-hidden="true" />
          <span>Search portfolio</span>
          <kbd>⌘ K</kbd>
        </button>

        <nav className="sidebar-nav" aria-label="Portfolio sections">
          <p>Index</p>
          {navigation.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === id ? "is-active" : undefined}
                aria-current={activeSection === id ? "location" : undefined}
              >
                <span>{item.index}</span>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <p>{profile.availability}</p>
          <div>
            {profile.socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                {social.label}
                <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            ))}
          </div>
          <span>© 2026 · Indonesia</span>
        </div>
      </div>
    </aside>
  );
}
