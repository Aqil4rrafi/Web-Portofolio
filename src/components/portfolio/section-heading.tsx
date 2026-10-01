type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </header>
  );
}
