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
import SectionTitle from "../shared/title/SectionTitle";
import { skillCategories } from "@/data/skills";

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
    <div className="px-4 py-16">
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
