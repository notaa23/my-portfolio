export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const PROFILE = {
  name: "Ryandi Surya",
  role: "Software Developer",
  tagline:
    "Membangun aplikasi web dan sistem yang cepat, bersih, dan fungsional.",
  about:
    "Saya adalah seorang pengembang perangkat lunak yang berfokus pada arsitektur modern, performa tinggi, dan pengalaman pengguna yang minimalis. Senang mengeksplorasi teknologi baru serta ekosistem open-source.",
  avatar: "../../public/ryandi.jpeg", // Ganti dengan nama file foto Anda di folder public/
  email: "ryandi248@gmail.com",
  github: "https://github.com/notaa23",
  linkedin: "https://www.linkedin.com/in/ryandi-surya-163695318",
};

export const SKILLS: string[] = [
  "TypeScript",
  "Astro",
  "Tailwind CSS",
  "React / Next.js",
  "Node.js",
  "Python",
  "Linux / Docker",
  "Git",
];

export const PROJECTS: Project[] = [
  {
    title: "LapBad - Badminton Court Management System",
    description:
      "A complete web-based management system for badminton court facilities with online booking, automatic completion, real-time reporting, and financial management.",
    tags: ["HTML", "Javascript", "NodeJS", "MySQL"],
    githubUrl: "https://github.com/notaa23/LapBadm",
  },
];
