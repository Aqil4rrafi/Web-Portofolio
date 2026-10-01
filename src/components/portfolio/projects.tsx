import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { portfolio, toAnchor, type Project } from "@/src/data/portfolio";
import { SectionHeading } from "./section-heading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={"project-card " + (project.featured ? "project-featured" : "")}
      id={"project-" + toAnchor(project.name)}
    >
      <a
        className="project-image"
        href={project.projectUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={"Open " + project.name}
      >
        <Image
          src={project.image}
          alt={"Preview of " + project.name}
          fill
          sizes={project.featured ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 36vw"}
        />
        <span>{project.featured ? "Featured work" : "Project 0" + (index + 1)}</span>
      </a>
      <div className="project-body">
        <div className="project-meta"><span>{project.role}</span><span>{project.year}</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          <a href={project.projectUrl} target="_blank" rel="noreferrer">
            {project.linkLabel}<ArrowUpRight size={15} />
          </a>
        </div>
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
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
