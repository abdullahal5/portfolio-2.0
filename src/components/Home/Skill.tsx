/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useCallback } from "react";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Palette,
  Settings,
  CodepenIcon as ReactIcon,
  CodepenIcon as Javascript,
  FileCode,
  Layers,
  Globe,
  Zap,
  Server,
  GitBranch,
  Container,
  Monitor,
  Figma,
  Brush,
  ImageIcon,
  Type,
  Wrench,
  Terminal,
} from "lucide-react";
import SectionTitle from "../shared/title/SectionTitle";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    skills: [
      {
        name: "React",
        icon: ReactIcon,
        level: 95,
        experience: "5 yrs",
        description: "Component-based UI library",
      },
      {
        name: "Next.js",
        icon: Globe,
        level: 90,
        experience: "4 yrs",
        description: "Full-stack React framework",
      },
      {
        name: "TypeScript",
        icon: FileCode,
        level: 88,
        experience: "4 yrs",
        description: "Typed JavaScript superset",
      },
      {
        name: "JavaScript",
        icon: Javascript,
        level: 92,
        experience: "5+ yrs",
        description: "Core web programming language",
      },
      {
        name: "Tailwind CSS",
        icon: Palette,
        level: 85,
        experience: "3+ yrs",
        description: "Utility-first CSS framework",
      },
      {
        name: "Framer Motion",
        icon: Zap,
        level: 80,
        experience: "2 yrs",
        description: "Animation library for React",
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
        icon: Server,
        level: 88,
        experience: "4+ yrs",
        description: "JavaScript runtime environment",
      },
      {
        name: "Python",
        icon: FileCode,
        level: 85,
        experience: "3 yrs",
        description: "Versatile programming language",
      },
      {
        name: "PostgreSQL",
        icon: Database,
        level: 82,
        experience: "2+ yrs",
        description: "Advanced relational database",
      },
      {
        name: "MongoDB",
        icon: Database,
        level: 78,
        experience: "3 yrs",
        description: "NoSQL document database",
      },
      {
        name: "GraphQL",
        icon: Layers,
        level: 75,
        experience: "2 yrs",
        description: "Query language for APIs",
      },
      {
        name: "REST APIs",
        icon: Globe,
        level: 90,
        experience: "5 yrs",
        description: "RESTful web services",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    skills: [
      {
        name: "React Native",
        icon: Smartphone,
        level: 80,
        experience: "2+ yrs",
        description: "Cross-platform mobile development",
      },
      {
        name: "Flutter",
        icon: Smartphone,
        level: 70,
        experience: "1 yr",
        description: "Google's UI toolkit",
      },
      {
        name: "iOS",
        icon: Smartphone,
        level: 65,
        experience: "1 yr",
        description: "Native iOS development",
      },
      {
        name: "Android",
        icon: Smartphone,
        level: 68,
        experience: "1 yr",
        description: "Native Android development",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: Cloud,
    skills: [
      {
        name: "Docker",
        icon: Container,
        level: 82,
        experience: "3 yrs",
        description: "Containerization platform",
      },
      {
        name: "AWS",
        icon: Cloud,
        level: 78,
        experience: "2+ yrs",
        description: "Amazon Web Services",
      },
      {
        name: "Vercel",
        icon: Zap,
        level: 85,
        experience: "3 yrs",
        description: "Frontend deployment platform",
      },
      {
        name: "Git",
        icon: GitBranch,
        level: 90,
        experience: "5+ yrs",
        description: "Version control system",
      },
      {
        name: "CI/CD",
        icon: Settings,
        level: 75,
        experience: "2+ yrs",
        description: "Continuous integration/deployment",
      },
      {
        name: "Linux",
        icon: Terminal,
        level: 80,
        experience: "3 yrs",
        description: "Unix-like operating system",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    skills: [
      {
        name: "Figma",
        icon: Figma,
        level: 85,
        experience: "3+ yrs",
        description: "Collaborative design tool",
      },
      {
        name: "Adobe XD",
        icon: Monitor,
        level: 75,
        experience: "2 yrs",
        description: "User experience design",
      },
      {
        name: "Photoshop",
        icon: ImageIcon,
        level: 70,
        experience: "2 yrs",
        description: "Image editing software",
      },
      {
        name: "UI/UX",
        icon: Brush,
        level: 82,
        experience: "4+ yrs",
        description: "User interface design",
      },
      {
        name: "Typography",
        icon: Type,
        level: 78,
        experience: "3 yrs",
        description: "Art of arranging type",
      },
      {
        name: "Prototyping",
        icon: Wrench,
        level: 80,
        experience: "3 yrs",
        description: "Interactive mockups",
      },
    ],
  },
];

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    },
    [mouseX, mouseY],
  );

  const SkillIcon = skill.icon;

  function getExperienceBadgeColor(experience: string) {
    const years = parseInt(experience);
    if (isNaN(years))
      return "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300";
    if (years >= 5)
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    if (years >= 3)
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
  }

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-xl border border-neutral-300 p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg dark:border-neutral-800/50 dark:bg-[#191919] dark:hover:border-neutral-700"
    >
      {/* Hover Light Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              rgba(139, 92, 246, 0.1),
              transparent 70%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="rounded-lg bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-100 dark:bg-blue-900/30 dark:group-hover:bg-blue-900/50"
          >
            <SkillIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              {skill.experience && (
                <motion.span
                  className={`mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${getExperienceBadgeColor(
                    skill.experience,
                  )}`}
                >
                  {skill.experience}
                </motion.span>
              )}
            </div>
            <motion.p className="mb-3 text-xs text-gray-500 dark:text-slate-400">
              {skill.description}
            </motion.p>
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-slate-400">
                  Proficiency
                </span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05 + 0.2,
                    type: "spring",
                  }}
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <SectionTitle
          title="Skills"
          description="Technologies I've worked with and use regularly"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-white text-blue-600 shadow-lg dark:bg-[#1c1c1c] dark:text-blue-400"
                    : "text-gray-600 hover:bg-white/50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-[#1c1c1c]/50 dark:hover:text-blue-400"
                }`}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full border border-blue-200 bg-white dark:border-blue-800 dark:bg-[#1c1c1c]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <IconComponent className="relative z-10 h-5 w-5" />
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-5"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      type: "spring",
                    }}
                  >
                    <SkillCard skill={skill} index={index} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}