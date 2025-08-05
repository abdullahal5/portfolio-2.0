import { Code2, Server } from "lucide-react";
import { FaReact, FaJs, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscTools, VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    skills: [
      {
        name: "React",
        icon: FaReact,
        level: 80,
        experience: "2 yrs",
        description: "Library for building UIs",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        level: 80,
        experience: "1 yrs",
        description: "Framework for SSR and full-stack apps",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: 60,
        experience: "1 yrs",
        description: "Typed JavaScript for safer code",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        level: 60,
        experience: "1+ yrs",
        description: "Language for dynamic web apps",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 85,
        experience: "1+ yrs",
        description: "Utility-first CSS framework",
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        level: 70,
        experience: "1+ yrs",
        description: "Toolset for state management",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: 75,
        experience: "1.5+ yrs",
        description: "JavaScript runtime for server-side apps",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: 80,
        experience: "1.5+ yrs",
        description: "Minimal Node.js web framework",
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
        level: 80,
        experience: "1.5 yrs",
        description: "MongoDB object modeling tool",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: 50,
        experience: "6 mon",
        description: "Powerful relational database",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 78,
        experience: "1.5 yrs",
        description: "NoSQL document database",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        level: 50,
        experience: "6 mon",
        description: "Type-safe ORM for databases",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: VscTools,
    skills: [
      {
        name: "Vercel",
        icon: IoLogoVercel,
        level: 85,
        experience: "2 yrs",
        description: "Frontend deployment platform",
      },
      {
        name: "Git",
        icon: FaGithub,
        level: 90,
        experience: "2 yrs",
        description: "Version control system",
      },
      {
        name: "Postman",
        icon: SiPostman,
        level: 90,
        experience: "1.5 yrs",
        description: "API testing tool",
      },
      {
        name: "Figma",
        icon: FaFigma,
        level: 60,
        experience: "2 yrs",
        description: "UI/UX design tool",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        level: 90,
        experience: "2 yrs",
        description: "Code editor",
      },
    ],
  },
];
