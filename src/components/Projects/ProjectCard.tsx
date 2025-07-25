import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/utils/techIcon";
import TechExpand from "./TechExpand";
import { MdErrorOutline } from "react-icons/md";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProjectCard = ({ project, idx }: { project: any; idx: number }) => {
  return (
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

          <div className="relative">
            <p className="mt-1 mb-4 line-clamp-2 text-sm text-neutral-600 transition-all duration-300 group-hover:line-clamp-none dark:text-gray-300">
              {project.description}
            </p>
          </div>

          <div className="relative mt-3 flex items-center">
            {project.tech.map((techName: string, techIdx: number) => {
                console.log(techName);
              const tech = technologies[techName] || {
                icon: MdErrorOutline,
                color: "#888888",
                name: techName,
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
