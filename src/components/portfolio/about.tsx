import { portfolio } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

export function About() {
  const { about, achievements, profile } = portfolio;

  return (
    <section className="portfolio-section" id="about" aria-labelledby="about-heading">
      <SectionHeading index="01" eyebrow="About" />
      <div className="about-grid">
        <div className="body-copy">
          <div className="about-identity">
            <h3 id="about-heading">{profile.name}</h3>
            <p>{profile.role} — Universitas Gadjah Mada</p>
          </div>
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <dl className="profile-facts">
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Interests</dt>
            <dd>{about.focus.join(" · ")}</dd>
          </div>
          <div>
            <dt>Scholarship</dt>
            <dd>{achievements[0].title} · {achievements[0].year}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
