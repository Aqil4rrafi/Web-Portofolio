export type SocialLink = {
  label: string;
  url: string;
};

export type ResumeEntry = {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description?: string;
  highlights?: string[];
  skills?: string[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
  organization?: string;
  image?: string;
  projectUrl?: string;
  linkLabel?: string;
  featured?: boolean;
};

export type SkillGroup = {
  id: string;
  category: string;
  items: string[];
  note?: string;
};

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  credentialUrl?: string;
};

export type SearchRecord = {
  id: string;
  category:
    | "Section"
    | "Experience"
    | "Project"
    | "Skill"
    | "Education"
    | "Achievement";
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

export function resumeAnchor(prefix: "experience" | "education", entry: ResumeEntry) {
  return `${prefix}-${entry.id}`;
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
    shortRole: "Electrical Engineering Student",
    role: "Electrical Engineering Student",
    introduction:
      "Electrical Engineering student at Universitas Gadjah Mada exploring IoT, AI, and intelligent systems, with an interest in technology for sustainable innovation.",
    location: "Yogyakarta, Indonesia",
    residence: "Darmaputra Santren UGM Residence",
    phone: "0887433061958",
    email: "arrafikresna@gmail.com",
    website: "https://aqilakresnaarrafi.vercel.app/",
    availability: "IoT & AI Enthusiast",
    image: "/Aqila.jpeg",
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/aqila-kresna-arrafi-75344933b",
      },
      { label: "Website", url: "https://aqilakresnaarrafi.vercel.app/" },
    ] satisfies SocialLink[],
  },
  about: {
    statement: "Exploring IoT and AI for meaningful, sustainable innovation.",
    paragraphs: [
      "I am a second-year Electrical Engineering student at Universitas Gadjah Mada with a strong interest in IoT and AI development.",
      "I was awarded the Paragon Scholarship 2025 for academic excellence and potential in leadership and community impact. My experience spans technology development, teaching, event organization, and collaborative projects.",
      "I am passionate about leveraging technology for sustainable innovation, with a long-term goal of contributing to Indonesia's net-zero emission efforts.",
    ],
    focus: ["IoT & AI development", "Technology & teaching", "Sustainable innovation"],
  },
  experience: [
    {
      id: "radian-mathematics-teacher-2025",
      title: "Mathematics Teacher",
      organization: "Radian Edu Solution Yogyakarta",
      period: "August 2025 — Present",
      description:
        "Delivered mathematics instruction from elementary to senior high school levels, including intensive UTBK preparation in Pengetahuan Kuantitatif and Penalaran Matematika.",
      highlights: [
        "Designed 5+ structured lesson plans and syllabi tailored to the curriculum.",
        "Created tailored exercises and practice materials to reinforce student understanding.",
      ],
    },
    {
      id: "pionir-it-2026",
      title: "Staff of IT",
      organization: "PIONIR Gadjah Mada 2026",
      period: "March 2026 — August 2026",
      description:
        "Translated design mockups into responsive web interfaces using Next.js and Tailwind CSS.",
      highlights: [
        "Optimized web applications for performance, scalability, and cross-browser compatibility.",
        "Collaborated with backend teams to integrate frontend components with server-side logic and APIs.",
        "Developed interactive 3D web applications and games using WebGL and Three.js.",
      ],
      skills: ["Next.js", "Tailwind CSS", "WebGL", "Three.js"],
    },
    {
      id: "technocorner-frontend-2026",
      title: "Staff of Front-End Developer",
      organization: "Website Development Technocorner 2026",
      period: "December 2025 — July 2026",
      description:
        "Translated design mockups into responsive interfaces using Next.js and Tailwind CSS.",
      highlights: [
        "Optimized applications for performance, scalability, and cross-browser compatibility.",
        "Collaborated with backend developers to integrate frontend components with APIs and server-side logic.",
      ],
      skills: ["Next.js", "Tailwind CSS", "Responsive Web Development"],
    },
    {
      id: "nesco-frontend-2026",
      title: "Staff of Front-End Developer",
      organization: "Website Development NESCO 2026",
      period: "December 2025 — June 2026",
      description:
        "Translated design mockups into responsive interfaces using Next.js and Tailwind CSS.",
      highlights: [
        "Optimized applications for performance, scalability, and cross-browser compatibility.",
        "Collaborated with backend developers to integrate frontend components with APIs and server-side logic.",
      ],
      skills: ["Next.js", "Tailwind CSS", "Responsive Web Development"],
    },
  ] satisfies ResumeEntry[],
  projects: [
    {
      id: "ai-posture-monitor-2026",
      name: "Real-Time AI Posture Monitor",
      year: "September 2026",
      description:
        "Real-time computer vision application for monitoring and evaluating sitting posture using YOLO11 Pose.",
      highlights: [
        "Developed a real-time AI posture monitoring application using YOLO11 Pose and webcam-based computer vision.",
        "Tracked shoulder tilt, head displacement, and torso inclination.",
        "Designed a posture scoring system from 0–100 with GOOD, FAIR, and BAD classifications.",
        "Implemented personalized posture calibration and Exponential Moving Average smoothing.",
        "Added continuous bad-posture detection and real-time corrective recommendations.",
        "Generated JSON session analytics including average posture score, posture distribution, bad-posture duration, and detected posture issues.",
      ],
      stack: ["YOLO11 Pose", "Computer Vision", "Python"],
      featured: true,
    },
    {
      id: "alzheimers-mil-classification-2026",
      name: "Alzheimer's Disease Classification Using Multiple Instance Learning",
      year: "July 2026",
      description:
        "Deep learning system for classifying Alzheimer's disease stages from brain MRI scans using Multiple Instance Learning.",
      highlights: [
        "Selected as a UGM contingent representative in Data Mining for GEMASTIK 2026 after securing 3rd place in UGM's internal selection.",
        "Developed a deep learning model for Alzheimer's disease classification from brain MRI images using Multiple Instance Learning.",
        "Implemented a ResNet18-based feature extractor.",
        "Trained the model to classify multiple stages of dementia from MRI scan bags.",
        "Used a Kaggle brain MRI dataset with image augmentation using Roboflow.",
      ],
      stack: ["Deep Learning", "Multiple Instance Learning", "ResNet18", "PyTorch", "Roboflow"],
      featured: true,
    },
    {
      id: "personal-portfolio-2025",
      name: "Personal Portfolio Website",
      year: "November 2025",
      description:
        "Responsive personal portfolio built to showcase projects, skills, and technical interests.",
      highlights: [
        "Built a responsive personal portfolio using Next.js and Tailwind CSS.",
        "Developed a simple interactive AI system based on Large Language Models using PyTorch.",
        "Deployed the website publicly to improve online visibility and personal branding.",
      ],
      stack: ["Next.js", "Tailwind CSS", "PyTorch", "LLM"],
      image: "/web.png",
      projectUrl: "https://aqilakresnaarrafi.vercel.app/",
      linkLabel: "Visit website",
    },
    {
      id: "robotics-electronics-intern-2025",
      name: "Electronic Team Intern",
      organization: "Gadjah Mada Robotic Team",
      year: "November 2025",
      description:
        "PCB fabrication and electrical system development for robotic applications.",
      highlights: [
        "Designed PCB layouts using KiCad.",
        "Performed manual PCB fabrication using heat transfer, drilling, and assembly.",
        "Executed wiring and electrical connections for robotic systems.",
      ],
      stack: ["KiCad", "PCB Design", "Electronics"],
      image: "/PCBDesign.jpeg",
    },
    {
      id: "smartwatch-wellness-journey-2024",
      name: "Smartwatch Guardian with WellnessJourney",
      year: "June 2024",
      description:
        "Smartwatch and digital wellness concept designed to help protect Generation Z from hypertension.",
      highlights: [
        "Developed the concept of a smartwatch prototype for monitoring blood pressure, sleep quality, and physical activity.",
        "Built a digital prototype with 3+ health-monitoring features.",
        "Designed an application prototype featuring an interactive Wellness Quest ecosystem to encourage long-term user engagement.",
      ],
      stack: ["Product Design", "Health Technology", "UI/UX"],
    },
  ] satisfies Project[],
  education: [
    {
      id: "ugm-electrical-engineering-2025",
      title: "Bachelor of Electrical Engineering",
      organization: "Universitas Gadjah Mada",
      period: "August 2025 — Present",
      location: "Yogyakarta, Indonesia",
    },
    {
      id: "lia-toefl-preparation-2023",
      title: "LIA Preparation Course for TOEFL Test",
      organization: "LIA",
      period: "August 2023 — August 2024",
      description:
        "Completed a one-year TOEFL preparation course covering listening, structure, reading, and writing.",
    },
  ] satisfies ResumeEntry[],
  skills: [
    {
      id: "ai-machine-learning",
      category: "AI & Machine Learning",
      items: ["Machine Learning", "Deep Learning", "Large Language Models", "PyTorch"],
    },
    {
      id: "web-development",
      category: "Web Development",
      items: [
        "Next.js",
        "Tailwind CSS",
        "Payload CMS",
        "Responsive Web Development",
        "Full-Stack Web Development",
      ],
    },
    { id: "electronics", category: "Electronics", items: ["PCB Design", "KiCad"] },
    { id: "design", category: "Design", items: ["Figma", "Canva", "PicsArt"] },
    {
      id: "additional-technical-skills",
      category: "Additional Technical Skills",
      items: [
        "Computer Vision",
        "YOLO Pose",
        "Multiple Instance Learning",
        "ResNet18",
        "WebGL",
        "Three.js",
      ],
    },
    {
      id: "soft-skills",
      category: "Soft Skills",
      items: ["Public Speaking", "Leadership", "Event Management"],
      note: "Led a 20-member team with 150+ participants.",
    },
    {
      id: "languages",
      category: "Languages",
      items: ["Indonesian — Native", "English — TOEFL Prediction Score 503 · LIA Certificate"],
    },
  ] satisfies SkillGroup[],
  achievements: [
    {
      id: "paragon-scholarship-2025",
      title: "Grantee of Paragon Scholarship",
      issuer: "Paragon Technology and Innovation",
      year: "November 2025",
    },
    {
      id: "islamic-youth-festival-dai-third-place-2023",
      title: "3rd Winner — Da'i Competition Islamic Youth Festival",
      issuer: "STT Nurul Fikri Jakarta",
      year: "December 2023",
    },
  ] as Achievement[],
};

export const searchRecords: SearchRecord[] = [
  ...navigation.map((item) => ({
    id: `section-${item.href.slice(1)}`,
    category: "Section" as const,
    label: item.label,
    detail: `Go to ${item.label}`,
    href: item.href,
    keywords: item.label,
  })),
  ...portfolio.experience.map((item) => ({
    id: `experience-${item.id}`,
    category: "Experience" as const,
    label: item.title,
    detail: item.organization,
    href: `#${resumeAnchor("experience", item)}`,
    keywords: [
      item.title,
      item.organization,
      item.period,
      item.description,
      item.highlights?.join(" "),
      item.skills?.join(" "),
    ]
      .filter(Boolean)
      .join(" "),
  })),
  ...portfolio.projects.map((item) => ({
    id: `project-${item.id}`,
    category: "Project" as const,
    label: item.name,
    detail: item.organization ?? item.stack.join(" · "),
    href: `#project-${item.id}`,
    keywords: [
      item.name,
      item.organization,
      item.year,
      item.description,
      item.highlights.join(" "),
      item.stack.join(" "),
    ]
      .filter(Boolean)
      .join(" "),
  })),
  ...portfolio.skills.flatMap((group) =>
    group.items.map((skill) => ({
      id: `skill-${group.id}-${toAnchor(skill)}`,
      category: "Skill" as const,
      label: skill,
      detail: group.category,
      href: `#skill-${group.id}-${toAnchor(skill)}`,
      keywords: `${skill} ${group.category} ${group.note ?? ""}`,
    })),
  ),
  ...portfolio.education.map((item) => ({
    id: `education-${item.id}`,
    category: "Education" as const,
    label: item.title,
    detail: item.organization,
    href: `#${resumeAnchor("education", item)}`,
    keywords: [item.title, item.organization, item.period, item.location, item.description]
      .filter(Boolean)
      .join(" "),
  })),
  ...portfolio.achievements.map((item) => ({
    id: `achievement-${item.id}`,
    category: "Achievement" as const,
    label: item.title,
    detail: item.issuer,
    href: `#achievement-${item.id}`,
    keywords: `${item.title} ${item.issuer} ${item.year}`,
  })),
];
