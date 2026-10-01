export type SocialLink = {
  label: string;
  url: string;
};

export type ResumeEntry = {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  skills?: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  image: string;
  projectUrl: string;
  linkLabel: string;
  featured?: boolean;
};

export type SearchRecord = {
  category: "Section" | "Experience" | "Project" | "Skill" | "Achievement";
  label: string;
  detail: string;
  href: string;
  keywords: string;
};

export function toAnchor(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const navigation = [
  { label: "About", href: "#about", index: "01" },
  { label: "Experience", href: "#experience", index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Education", href: "#education", index: "04" },
  { label: "Skills", href: "#skills", index: "05" },
  { label: "Achievements", href: "#achievements", index: "06" },
  { label: "Contact", href: "#contact", index: "07" },
] as const;

export const portfolio = {
  profile: {
    name: "Aqila Kresna Arrafi",
    initials: "AK",
    shortRole: "Frontend & ML Developer",
    role: "Front-End & Machine Learning Developer",
    introduction:
      "Electrical Engineering student building clear digital interfaces, intelligent systems, and practical tools across software and hardware.",
    location: "Yogyakarta, Indonesia",
    email: "arrafikresna@gmail.com",
    availability: "Open to internships and collaborations",
    image: "/Aqila.jpeg",
    socials: [
      { label: "GitHub", url: "https://github.com/Aqil4rrafi" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/aqila-kresna-arrafi-75344933b",
      },
      { label: "Instagram", url: "https://instagram.com/kresnarrafi" },
    ] satisfies SocialLink[],
  },
  about: {
    statement: "I turn curiosity into systems that are useful, considered, and built to last.",
    paragraphs: [
      "I am an Electrical Engineering student at Universitas Gadjah Mada with a growing practice across front-end development, machine learning, and embedded systems.",
      "My work is shaped by persistence and a bias toward making. I enjoy moving from an ambiguous problem to a structured solution—whether that means designing an interface, training a model, or prototyping a circuit.",
    ],
    focus: ["Interface engineering", "Applied machine learning", "Embedded systems"],
  },
  experience: [
    {
      title: "Frontend & Machine Learning Developer",
      organization: "Independent Projects",
      period: "2025 — Present",
      location: "Yogyakarta",
      description:
        "Designing and developing project-based solutions that connect modern web interfaces with practical engineering and machine-learning workflows.",
      highlights: [
        "Built responsive products from interface concept through implementation.",
        "Explored model development, data workflows, and human-centered product decisions.",
      ],
      skills: ["Next.js", "TypeScript", "Python"],
    },
    {
      title: "Technology & Learning Contributor",
      organization: "Student Initiatives",
      period: "2024 — Present",
      location: "Indonesia",
      description:
        "Supporting collaborative learning through technical projects, peer discussion, and knowledge-sharing activities.",
      highlights: [
        "Translated technical topics into approachable explanations and working demonstrations.",
      ],
      skills: ["Communication", "Teaching", "Teamwork"],
    },
  ] satisfies ResumeEntry[],
  projects: [
    {
      name: "Web Portfolio",
      description:
        "A personal digital space that brings together selected work, technical direction, and an evolving engineering practice in one focused experience.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      role: "Design & Development",
      year: "2026",
      image: "/web.png",
      projectUrl: "https://aqilas-web-portofolio.vercel.app/",
      linkLabel: "Live site",
      featured: true,
    },
    {
      name: "Library Space",
      description:
        "A desktop library booking application that makes room and resource reservations simpler for students.",
      stack: ["C++", "Qt UI"],
      role: "Application Development",
      year: "2025",
      image: "/LibSpace.png",
      projectUrl:
        "https://github.com/qlaqilaa/Project-Pemrograman-Dasar-62765-62767-64101",
      linkLabel: "Repository",
    },
    {
      name: "ESP32 PCB System",
      description:
        "A compact circuit-board exploration for an ESP32-based system, developed from schematic decisions through board layout.",
      stack: ["KiCad", "ESP32", "PCB Design"],
      role: "Hardware Design",
      year: "2025",
      image: "/PCBDesign.jpeg",
      projectUrl:
        "https://drive.google.com/drive/folders/1rCzU5xTsz1v-kUhwy_7cSlPHWet1tFgn",
      linkLabel: "Project files",
    },
  ] satisfies Project[],
  education: [
    {
      title: "Bachelor of Electrical Engineering",
      organization: "Universitas Gadjah Mada",
      period: "2025 — Present",
      location: "Yogyakarta, Indonesia",
      description:
        "Studying electrical engineering fundamentals while developing a cross-disciplinary focus in software, artificial intelligence, and embedded technology.",
    },
  ] satisfies ResumeEntry[],
  skills: [
    { category: "Programming", items: ["TypeScript", "Python", "C++"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { category: "AI & Data", items: ["TensorFlow", "PyTorch", "Data analysis"] },
    { category: "Hardware", items: ["ESP32", "Arduino", "PCB design"] },
    { category: "Design", items: ["Figma", "UI / UX", "Prototyping"] },
    { category: "Workflow", items: ["Git", "Linux", "Visual Studio Code"] },
  ],
  achievements: [
    {
      title: "Paragon Scholarship Recipient",
      issuer: "ParagonCorp",
      year: "2025",
      description:
        "Selected for a development program supporting students with strong initiative, resilience, and community involvement.",
      credentialUrl: "",
    },
    {
      title: "Engineering Project Showcase",
      issuer: "Academic Project",
      year: "2025",
      description:
        "Presented an integrated software and hardware project with an emphasis on clear implementation and collaborative delivery.",
      credentialUrl: "",
    },
  ],
};

export const searchRecords: SearchRecord[] = [
  ...navigation.map((item) => ({
    category: "Section" as const,
    label: item.label,
    detail: `Go to ${item.label}`,
    href: item.href,
    keywords: item.label,
  })),
  ...portfolio.experience.map((item) => ({
    category: "Experience" as const,
    label: item.title,
    detail: item.organization,
    href: `#experience-${toAnchor(item.title)}`,
    keywords: `${item.title} ${item.organization} ${item.skills?.join(" ") ?? ""}`,
  })),
  ...portfolio.projects.map((item) => ({
    category: "Project" as const,
    label: item.name,
    detail: item.stack.join(" · "),
    href: `#project-${toAnchor(item.name)}`,
    keywords: `${item.name} ${item.description} ${item.stack.join(" ")}`,
  })),
  ...portfolio.skills.flatMap((group) =>
    group.items.map((skill) => ({
      category: "Skill" as const,
      label: skill,
      detail: group.category,
      href: `#skill-${toAnchor(group.category)}-${toAnchor(skill)}`,
      keywords: `${skill} ${group.category}`,
    })),
  ),
  ...portfolio.achievements.map((item) => ({
    category: "Achievement" as const,
    label: item.title,
    detail: item.issuer,
    href: `#achievement-${toAnchor(item.title)}`,
    keywords: `${item.title} ${item.issuer} ${item.description}`,
  })),
];
