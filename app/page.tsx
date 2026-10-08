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
import { profileStructuredData } from "@/src/data/seo";

export default function Home() {
  return (
    <PortfolioShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c"),
        }}
      />
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
