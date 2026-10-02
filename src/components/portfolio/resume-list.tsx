import { resumeAnchor, type ResumeEntry } from "@/src/data/portfolio";

type ResumeListProps = {
  entries: ResumeEntry[];
  anchorPrefix: "experience" | "education";
};

export function ResumeList({ entries, anchorPrefix }: ResumeListProps) {
  const isEducation = anchorPrefix === "education";

  return (
    <div className="resume-list">
      {entries.map((entry) => (
        <article
          className="resume-entry"
          id={resumeAnchor(anchorPrefix, entry)}
          key={entry.id}
        >
          <div className="entry-content">
            <div className="entry-heading">
              <div>
                <h3>{isEducation ? entry.organization : entry.title}</h3>
                <p className="entry-org">{isEducation ? entry.title : entry.organization}</p>
              </div>
              <div className="entry-meta">
                <time>{entry.period}</time>
                {entry.location && <span>{entry.location}</span>}
              </div>
            </div>
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
