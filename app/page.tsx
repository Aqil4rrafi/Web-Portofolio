import { PortfolioShell } from "@/src/components/layout/portfolio-shell";
import { About } from "@/src/components/portfolio/about";
import { Achievements } from "@/src/components/portfolio/achievements";
import { Contact } from "@/src/components/portfolio/contact";
import { Education } from "@/src/components/portfolio/education";
import { Experience } from "@/src/components/portfolio/experience";
import { Footer } from "@/src/components/portfolio/footer";
import { Introduction } from "@/src/components/portfolio/introduction";
import { Projects } from "@/src/components/portfolio/projects";
import { Skills } from "@/src/components/portfolio/skills";

export default function Home() {
  return (
    <PortfolioShell>
      <Introduction />
      <div className="portfolio-content">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </PortfolioShell>
  );
}
