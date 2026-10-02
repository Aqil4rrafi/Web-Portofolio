import { portfolio } from "@/src/data/portfolio";
import { ResumeList } from "./resume-list";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section className="portfolio-section" id="education">
      <SectionHeading
        index="04"
        eyebrow="Education"
      />
      <ResumeList entries={portfolio.education} anchorPrefix="education" />
    </section>
  );
}
