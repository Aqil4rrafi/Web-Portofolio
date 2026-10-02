import { portfolio } from "@/src/data/portfolio";
import { ResumeList } from "./resume-list";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section className="portfolio-section" id="experience">
      <SectionHeading
        index="02"
        eyebrow="Experience"
      />
      <ResumeList entries={portfolio.experience} anchorPrefix="experience" />
    </section>
  );
}
