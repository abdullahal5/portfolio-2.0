"use client";
import SectionTitle from "../shared/title/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      image: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/macbook-scroll.png",
      description:
        "A clone of Apple website that showcases their products and services",
      href: "#",
      tech: [
        "React",
        "Next.js",
        "Tailwind",
        "TypeScript",
        "JWT",
        "PostgreSQL",
        "Redux",
        "SocketIO",
        "NestJS",
        "Express",
      ],
    },
    {
      title: "3D Card",
      image: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
      description:
        "A flight simulator that allows you to experience the thrill of flying",
      href: "#",
      tech: [
        "Three.js",
        "Vue.js",
        "Node.js",
        "JavaScript",
        "Apollo",
        "GraphQL",
        "Firebase",
        "Docker",
      ],
    },
    {
      title: "Instant Feedback",
      image: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/animated-testimonials.webp",
      description: "Instant visual feedback for interactive UI testing",
      href: "#",
      tech: ["Vue.js", "Node.js", "MongoDB", "VSCode", "GitHub"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-16">
      <SectionTitle
        title="Projects"
        description="Discover some of the projects I've built – showcasing creativity, responsiveness, and interactivity."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
