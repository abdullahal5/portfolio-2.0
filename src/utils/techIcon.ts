import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiSocketdotio,
  SiJsonwebtokens,
  SiGithub,
  SiVite,
  SiNestjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type TechInfo = {
  name: string;
  icon: React.ComponentType;
  color: string;
};

export const technologies: { [key: string]: TechInfo } = {
  React: { name: "React", icon: FaReact, color: "#61DAFB" },
  "Next.js": { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  Tailwind: { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  "Three.js": { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
  TypeScript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  "Vue.js": { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  "Node.js": { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  MongoDB: { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  Express: { name: "Express.js", icon: SiExpress, color: "#000000" },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  Firebase: { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  Redux: { name: "Redux", icon: SiRedux, color: "#764ABC" },
  GraphQL: { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  Apollo: { name: "Apollo", icon: SiApollographql, color: "#311C87" },
  SocketIO: { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
  JWT: { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
  Docker: { name: "Docker", icon: FaDocker, color: "#0db7ed" },
  Git: { name: "Git", icon: FaGitAlt, color: "#F05032" },
  GitHub: { name: "GitHub", icon: SiGithub, color: "#181717" },
  VSCode: { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  Vite: { name: "Vite", icon: SiVite, color: "#646CFF" },
  NestJS: { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
};
