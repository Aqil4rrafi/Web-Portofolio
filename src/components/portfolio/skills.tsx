import { portfolio, toAnchor } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section className="portfolio-section" id="skills">
      <SectionHeading
        index="05"
        eyebrow="Capabilities"
        title="Tools, technologies, and working knowledge."
      />
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => (
                <li
                  id={"skill-" + toAnchor(group.category) + "-" + toAnchor(skill)}
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
            {group.note && <p className="skill-note">{group.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
