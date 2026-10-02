import { ArrowUpRight } from "lucide-react";
import { portfolio, type Project } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""}`}
      id={"project-" + project.id}
    >
      <div className="project-body">
        <div className="project-heading">
          <div>
            {project.featured && (
              <span className="featured-label">Featured project</span>
            )}
            <h3>{project.name}</h3>
            {project.organization && (
              <p className="project-org">{project.organization}</p>
            )}
          </div>
          <time>{project.year}</time>
        </div>
        <p>{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="tag-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.projectUrl && project.linkLabel && (
          <div className="project-links">
            <a href={project.projectUrl} target="_blank" rel="noreferrer">
              {project.linkLabel}
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="portfolio-section" id="projects">
      <SectionHeading index="03" eyebrow="Projects" />
      <div className="projects-grid">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
