import { resumeAnchor, type ResumeEntry } from "@/src/data/portfolio";

type ResumeListProps = {
  entries: ResumeEntry[];
  anchorPrefix: "experience" | "education";
};

export function ResumeList({ entries, anchorPrefix }: ResumeListProps) {
  return (
    <div className="resume-list">
      {entries.map((entry) => (
        <article
          className="resume-entry"
          id={resumeAnchor(anchorPrefix, entry)}
          key={entry.id}
        >
          <div className="entry-meta">
            <time>{entry.period}</time>
            {entry.location && <span>{entry.location}</span>}
          </div>
          <div className="entry-content">
            <p className="entry-org">{entry.organization}</p>
            <h3>{entry.title}</h3>
            {entry.description && <p>{entry.description}</p>}
            {entry.highlights && (
              <ul>{entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            )}
            {entry.skills && (
              <div className="tag-list">{entry.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
