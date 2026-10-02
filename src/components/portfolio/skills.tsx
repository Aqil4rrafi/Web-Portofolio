import { portfolio, toAnchor } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section className="portfolio-section" id="skills">
      <SectionHeading
        index="05"
        eyebrow="Skills"
      />
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <div className="skill-group" key={group.id}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => (
                <li
                  id={"skill-" + group.id + "-" + toAnchor(skill)}
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
