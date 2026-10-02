type SectionHeadingProps = {
  index: string;
  eyebrow: string;
};

export function SectionHeading({ index, eyebrow }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span>{index}</span>
      <h2>{eyebrow}</h2>
    </header>
  );
}
