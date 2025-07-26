import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/utils/techIcon";
import TechExpand from "./TechExpand";
import { MdErrorOutline } from "react-icons/md";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Monitor, Paintbrush } from "lucide-react";
import { JSX } from "react";

const typeConfig: Record<string, { icon: JSX.Element; color: string }> = {
  frontend: {
    icon: <Monitor size={14} />,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  },
  backend: {
    icon: <Code size={14} />,
    color:
      "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300",
  },
  design: {
    icon: <Paintbrush size={14} />,
    color: "bg-pink-100 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300",
  },
  "full stack": {
    icon: <Layers size={14} />,
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300",
  },
  default: {
    icon: <Code size={14} />,
    color: "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-300",
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  const type = (project.type || "default").toLowerCase();
  const { icon, color } = typeConfig[type] || typeConfig.default;

  return (
    <Link key={idx} href={`/projects/${project.id || "#"}`}>
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
        className="group relative h-full overflow-hidden rounded-xl border border-gray-300 bg-neutral-100 transition-all duration-300 hover:border-neutral-400 dark:border-neutral-800/50 dark:bg-[#191919] dark:hover:border-neutral-700"
      >
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <Badge
              variant="default"
              className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 shadow-sm dark:bg-amber-900/30 dark:text-amber-200"
            >
              <FaStar className="h-3 w-3 fill-amber-500 dark:fill-amber-400" />
              <span>Featured</span>
            </Badge>
          </div>
        )}

        {/* Image with gradient overlay */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
            alt={project.title || "Project image"}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            {/* Title with subtle animation */}
            <motion.h2
              className="text-xl font-bold text-gray-900 dark:text-white"
              transition={{ duration: 0.3 }}
            >
              {project.title || "Untitled Project"}
            </motion.h2>

            {/* Project type badge */}
            <Badge
              variant="default"
              className={`ml-2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${color}`}
            >
              {icon}
              {project.type || "Project"}
            </Badge>
          </div>

          {/* Date with icon */}
          {project.date && (
            <div className="mb-2 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <FaCalendarAlt className="mr-1 h-3 w-3" />
              <span>
                {new Date(project.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
          )}

          <div className="relative">
            <p className="mt-1 mb-4 line-clamp-2 text-sm text-neutral-600 dark:text-gray-300">
              {project.description || "No description available"}
            </p>
          </div>

          <div className="relative mt-3 flex items-center">
            {(project.tech || []).map((techName: string, techIdx: number) => {
              const tech = technologies[techName] || {
                icon: MdErrorOutline,
                color: "#888888",
                name: techName || "Unknown Tech",
              };

              return <TechExpand key={techIdx} techIdx={techIdx} tech={tech} />;
            })}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
