"use client";
import { projects } from "@/data/project";
import SectionTitle from "../shared/title/SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
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
