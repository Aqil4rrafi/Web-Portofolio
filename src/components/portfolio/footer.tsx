import { portfolio } from "@/src/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 {portfolio.profile.name}</p>
      <p>Designed as a living digital CV.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
