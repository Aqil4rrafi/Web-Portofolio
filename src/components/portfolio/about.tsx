import { portfolio } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function About() {
  const { about } = portfolio;

  return (
    <section className="portfolio-section" id="about" aria-labelledby="about-heading">
      <SectionHeading index="01" eyebrow="About me" title={about.statement} />
      <div className="about-grid">
        <div className="body-copy" id="about-heading">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <dl className="focus-list">
          {about.focus.map((item, index) => (
            <div key={item}>
              <dt>0{index + 1}</dt>
              <dd>{item}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
