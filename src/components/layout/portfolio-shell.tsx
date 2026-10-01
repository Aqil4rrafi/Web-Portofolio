"use client";

import { useCallback, useEffect, useState } from "react";
import { navigation } from "@/src/data/portfolio";
import { MobileNavigation } from "./mobile-navigation";
import { PortfolioSearch } from "./portfolio-search";
import { PortfolioSidebar } from "./portfolio-sidebar";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("about");
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["top", ...navigation.map((item) => item.href.slice(1))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0] && visible[0].target.id !== "top") {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.1, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const handleNavigate = useCallback((href: string) => {
    setSearchOpen(false);
    setDrawerOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 20);
  }, []);

  return (
    <div className="portfolio-layout">
      <PortfolioSidebar
        activeSection={activeSection}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <MobileNavigation
        activeSection={activeSection}
        open={drawerOpen}
        onToggle={() => setDrawerOpen((current) => !current)}
        onClose={() => setDrawerOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <main className="portfolio-main">{children}</main>
      <PortfolioSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
