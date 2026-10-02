import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { portfolio, type Project } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const imageContent = project.image ? (
    <>
      <Image
        src={project.image}
        alt={"Preview of " + project.name}
        fill
        sizes={project.featured ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 36vw"}
      />
      <span>{project.featured ? "Featured work" : "Project 0" + (index + 1)}</span>
    </>
  ) : null;

  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""} ${project.image ? "" : "project-no-image"}`}
      id={"project-" + project.id}
    >
      {project.image && (
        project.projectUrl ? (
          <a
            className="project-image"
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={"Open " + project.name}
          >
            {imageContent}
          </a>
        ) : (
          <div className="project-image">{imageContent}</div>
        )
      )}
      <div className="project-body">
        <div className="project-meta">
          {project.organization ? <span>{project.organization}</span> : project.featured ? <span>Featured project</span> : null}
          <span>{project.year}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        {project.projectUrl && project.linkLabel && (
          <div className="project-links">
            <a href={project.projectUrl} target="_blank" rel="noreferrer">
              {project.linkLabel}<ArrowUpRight size={15} />
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
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="A focused selection of things I have built."
      />
      <div className="projects-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
