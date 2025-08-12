/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { FileText, Mail } from "lucide-react";
import AnimatedSkills from "./_components/animated-skills";

const Banner = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const gradientText: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const scrollIndicator = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.5 },
    },
    hover: { y: 5, transition: { duration: 0.3 } },
  };

  const orbVariant: any = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Grid Background */}

      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

      <div className="absolute inset-0 opacity-40 dark:opacity-20"></div>

      {/* Simple Gradient Orbs */}
      <motion.div
        variants={orbVariant}
        initial="hidden"
        animate="show"
        className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-purple-300 opacity-50 blur-3xl dark:bg-purple-500/20 dark:opacity-30"
      />

      <motion.div
        variants={orbVariant}
        initial="hidden"
        animate="show"
        className="absolute top-1/3 right-10 h-64 w-64 rounded-full bg-pink-300 opacity-40 blur-3xl dark:bg-pink-500/20 dark:opacity-25"
      />

      <motion.div
        variants={orbVariant}
        initial="hidden"
        animate="show"
        className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-blue-300 opacity-55 blur-3xl dark:bg-blue-500/30 dark:opacity-30"
      />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Status Badge */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-6"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 dark:border-slate-700 dark:bg-[#1c1c1c]"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { repeat: Infinity, duration: 2 },
              }}
              className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
              Open to Opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl lg:text-8xl dark:text-white"
        >
          <motion.span
            variants={gradientText}
            className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent dark:from-white dark:via-purple-400 dark:to-white"
          >
            Abdullah
          </motion.span>
          <br />
          <motion.span
            variants={gradientText}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-purple-400"
          >
            Al Fahim
          </motion.span>
        </motion.h1>

        {/* Role */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="mt-2 mb-5"
        >
          <AnimatedSkills />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300"
        >
          I’m passionate about building scalable solutions and shaping the
          future through code. I love working with clean architecture and
          exploring innovative technologies that make a real impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalfahin183@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1URRTWHorRYZ8V1wzwfUOIlZs5jOpBL4T/view"
            rel="noopener noreferrer"
            target="_blank"
            variants={item}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-md dark:border-gray-600 dark:bg-[#1c1c1c] dark:text-slate-300 dark:hover:bg-[#333]"
          >
            <FileText className="h-4 w-4" />
            Resume
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={scrollIndicator}
          initial="hidden"
          animate="show"
          whileHover="hover"
          className="absolute bottom-8"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-slate-500">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-6 w-6 text-white"
            >
              <FiChevronDown className="h-full w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
