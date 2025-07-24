"use client";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";

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

  const gradientText = {
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

      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        //     style={{
        //       backgroundImage: `
        //   linear-gradient(to right, rgba(139, 92, 246, 0.3) 2px, transparent 1px),
        //   linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 2px, transparent 1px)
        // `,
        //       backgroundSize: "40px 40px",
        //       maskImage:
        //         "radial-gradient(ellipse 60% 90% at 50% 0%, #000 70%, transparent 100%)",
        //       WebkitMaskImage:
        //         "radial-gradient(ellipse 60% 80% at 50% 0%, #000 70%, transparent 100%)",
        //     }}
      >
        {/* Sine line moving horizontally */}
        {/* {[20, 35, 50, 65, 80].map((top, index) => (
          <div
            key={`h-${index}`}
            className="sine-x absolute left-0 h-[2px] w-full bg-gradient-to-r from-gray-400 to-transparent opacity-80 dark:bg-gradient-to-r dark:from-white dark:to-transparent"
            style={{
              top: `${top}%`,
              animationDuration: `${3 + (index % 3)}s`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}

        {[10, 30, 50, 70, 90].map((left, index) => (
          <div
            key={`v-${index}`}
            className="sine-y absolute top-0 h-full w-[2px] bg-gradient-to-b from-gray-400 to-transparent opacity-80 dark:bg-gradient-to-b dark:from-white dark:to-transparent"
            style={{
              left: `${left}%`,
              animationDuration: `${4 + (index % 2)}s`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))} */}
      </div>

      {/* Simple Gradient Orbs */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-purple-300 opacity-50 blur-3xl dark:bg-purple-500 dark:opacity-30" />
      <div className="absolute top-1/3 right-10 h-64 w-64 rounded-full bg-pink-300 opacity-40 blur-3xl dark:bg-pink-500 dark:opacity-25" />
      <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-blue-300 opacity-55 blur-3xl dark:bg-blue-500 dark:opacity-30" />

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
              Available for Work
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
          className="mb-6"
        >
          <p className="text-xl font-semibold text-purple-600 md:text-2xl dark:text-purple-400">
            Software Engineer
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300"
        >
          Crafting scalable solutions and building the future, one line of code
          at a time. Passionate about clean architecture and innovative
          technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.button
            variants={item}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            Get In Touch
          </motion.button>
          <motion.button
            variants={item}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-md dark:border-gray-600 dark:bg-[#1c1c1c] dark:text-slate-300 dark:hover:bg-[#333]"
          >
            <span className="flex items-center gap-2">
              View Portfolio
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </span>
          </motion.button>
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
