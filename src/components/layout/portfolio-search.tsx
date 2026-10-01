"use client";

import { ArrowDownLeft, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchRecords } from "@/src/data/portfolio";

type PortfolioSearchProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
};

export function PortfolioSearch({
  open,
  onClose,
  onNavigate,
}: PortfolioSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.classList.add("search-is-open");
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("search-is-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchRecords.filter((item) => item.category === "Section");

    return searchRecords
      .filter((item) =>
        `${item.label} ${item.detail} ${item.keywords}`
          .toLowerCase()
          .includes(normalized),
      )
      .slice(0, 10);
  }, [query]);

  if (!open) return null;

  return (
    <div className="search-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Search portfolio"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="search-input-row">
          <Search size={18} aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, skills, experience…"
            aria-label="Search portfolio"
          />
          <button type="button" onClick={onClose} aria-label="Close search">
            <X size={17} />
          </button>
        </div>

        <div className="search-results" aria-live="polite">
          <p className="search-caption">
            {query ? `${results.length} matching results` : "Browse sections"}
          </p>
          {results.length > 0 ? (
            results.map((item, index) => (
              <button
                type="button"
                className="search-result"
                key={`${item.category}-${item.label}-${index}`}
                onClick={() => onNavigate(item.href)}
              >
                <span className="search-result-type">{item.category}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </span>
                <ArrowDownLeft size={15} aria-hidden="true" />
              </button>
            ))
          ) : (
            <div className="search-empty">
              <p>No matching work found.</p>
              <span>Try a section name, technology, or project.</span>
            </div>
          )}
        </div>
        <footer className="search-footer">
          <span><kbd>tab</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </footer>
      </section>
    </div>
  );
}
