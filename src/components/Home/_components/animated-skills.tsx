"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesText } from "./Sparkles-text";

const skills = [
  "React & Next.js",
  "TypeScript & JavaScript",
  "Node.js & Express",
  "MongoDB & PostgreSQL",
  "Tailwind CSS & Framer Motion",
  "REST APIs & GraphQL",
  "AWS & Docker",
  "Git & CI/CD",
];

const AnimatedSkills = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={skills[currentSkill]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-full border border-gray-400 px-4 py-1 text-sm text-gray-500 dark:border-gray-600 dark:text-gray-400"
          >
            <SparklesText
              sparklesCount={3}
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              className="text-sm"
            >
              {skills[currentSkill]}
            </SparklesText>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedSkills;
