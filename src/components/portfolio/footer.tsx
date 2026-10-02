import { portfolio } from "@/src/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 {portfolio.profile.name}</p>
      <p>Si ganteng dan baiknya elektro ugm</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
