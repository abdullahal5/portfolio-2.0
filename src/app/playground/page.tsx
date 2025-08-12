"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/title/SectionTitle";
import LivePreview from "@/components/code/live-preview";
import CodeEditor from "@/components/code/code-editor";

const defaultCode = `// Interactive JavaScript Playground
// Try different examples below!

// Example 1: Profile Object (Default)
const profile = {
  name: 'Abdullah Al Fahim',
  title: 'Full-Stack Developer | Backend Developer',
  skills: [
    'React', 'Next.js', 'Redux', 'Express',
   'MongoDB', 'TypeScript',
    'GraphQL', 'Git'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 1,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 3
    );
  }
};

console.log('Profile created:', profile.name);
console.log('Skills count:', profile.skills.length);
console.log('Hireable status:', profile.hireable());

// Return the profile for visual display
return profile;

// Try these other examples:
// return "Hello World!";
// return [1, 2, 3, 4, 5];
// return { message: "Test", count: 42 };`;

export default function CodePlayground() {
  const [code, setCode] = useState(defaultCode);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset to default code on page load/reload
    setCode(defaultCode);
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl pt-14"
      >
        {/* Header */}
        <SectionTitle
          title="Playground"
          description="Experiment with JavaScript code and see live results. Edit the code
            on the left to see changes in real-time!"
        />

        {/* Main Content */}
        <motion.div
          variants={itemVariants}
          className="grid h-[calc(100vh-200px)] gap-6 lg:grid-cols-2"
        >
          {/* Code Editor */}
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/80 p-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-sm text-gray-300">
                  playground.js
                </span>
              </div>
              <button
                onClick={() => setCode(defaultCode)}
                className="rounded-md bg-purple-600 px-3 py-1 text-sm text-white transition-colors hover:bg-purple-700"
              >
                Reset
              </button>
            </div>
            <CodeEditor code={code} onChange={setCode} />
          </motion.div>

          {/* Live Preview */}
          <motion.div
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/50 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/80 p-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-300">Live Preview</span>
              </div>
              <div className="text-xs text-gray-400">Real-time execution</div>
            </div>
            <LivePreview code={code} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
