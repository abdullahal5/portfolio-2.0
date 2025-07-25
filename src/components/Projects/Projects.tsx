"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../shared/title/SectionTitle";
import { technologies } from "@/utils/techIcon";
import Link from "next/link";
import TechExpand from "./TechExpand";

const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/macbook-scroll.png",
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
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
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
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/animated-testimonials.webp",
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
          <Link key={idx} href={`/projects/5`}>
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="group relative h-full overflow-hidden rounded-xl border border-gray-300 bg-neutral-100 transition-all duration-300 hover:border-purple-400 dark:border-neutral-800/50 dark:bg-[#191919] dark:hover:border-neutral-700"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.src || "/placeholder.svg"}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  alt={project.title}
                />
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Title with subtle animation */}
                <motion.h2
                  className="mb-2 text-xl font-bold text-gray-900 dark:text-white"
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h2>

                {/* Description with animated read more */}
                <div className="relative">
                  <p className="mt-1 mb-4 line-clamp-2 text-sm text-neutral-600 transition-all duration-300 group-hover:line-clamp-none dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack (unchanged as requested) */}
                <div className="relative mt-3 flex items-center">
                  {project.tech.map((techName, techIdx) => {
                    const tech = technologies[techName] || {
                      icon: "❓",
                      color: "#888888",
                      name: techName,
                    };

                    return (
                      <TechExpand
                        key={techIdx}
                        techIdx={techIdx}
                        tech={tech}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
