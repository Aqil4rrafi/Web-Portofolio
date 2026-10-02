import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Achievements() {
  return (
    <section className="portfolio-section" id="achievements">
      <SectionHeading
        index="06"
        eyebrow="Recognition"
        title="Achievements, certifications, and programs."
      />
      <div className="achievement-list">
        {portfolio.achievements.map((item) => (
          <article id={"achievement-" + item.id} key={item.id}>
            <time>{item.year}</time>
            <div>
              <p>{item.issuer}</p>
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </div>
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={"View credential for " + item.title}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
