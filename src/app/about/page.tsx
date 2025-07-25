"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { TimelineItem } from "./_components/Timeline";
import LeftSideStickyCard from "./_components/LeftSideStickyCard";
import { courses, education, experience } from "@/data/about";

const AboutPage = () => {
  return (
    <div className="relative pt-44 transition-colors duration-300">
      {/* blue orb */}
      <motion.div
        initial={{ x: "-10%", y: "20%", opacity: 0.3 }}
        animate={{ x: ["-10%", "10%", "-10%"], y: ["20%", "30%", "20%"] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed top-16 right-20 -z-50 h-[50vh] w-[40vh] rounded-full bg-blue-500 opacity-20",
          "opacity-70 blur-[100px]",
        )}
      />
      {/* purple orb */}
      <motion.div
        initial={{ x: "80%", y: "60%", opacity: 0.2 }}
        animate={{ x: ["80%", "70%", "80%"], y: ["60%", "50%", "60%"] }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        className={cn(
          "fixed -z-50 h-[40vh] w-[40vh] rounded-full bg-purple-500 opacity-20",
          "blur-[80px] dark:opacity-15",
        )}
      />
      {/* Pink orb */}
      <motion.div
        initial={{ x: "20%", y: "70%", opacity: 0.15 }}
        animate={{ x: ["20%", "30%", "20%"], y: ["70%", "80%", "70%"] }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 10,
        }}
        className={cn(
          "fixed -z-50 h-[50vh] w-[50vh] rounded-full bg-pink-500 opacity-20",
          "blur-[90px] dark:opacity-10",
        )}
      />
      {/* Background Pattern */}
      <div className="fixed top-0 right-0 left-0 -z-50 h-[900px] overflow-hidden">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "dark:[mask-image:radial-gradient(600px_circle_at_center,black,transparent)]",
          )}
        />
      </div>
      <div className="relative z-10 mx-auto px-4 py-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {/* Left Side - Sticky Profile Card */}
          <LeftSideStickyCard />
          {/* Right Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-neutral-300 p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-12 dark:border-neutral-800/50 dark:bg-[#191919] dark:hover:border-neutral-700">
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-12"
              >
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl dark:from-indigo-400 dark:to-purple-400">
                    About Me
                  </h2>
                  <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-transparent" />
                </div>
                <div className="space-y-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                  <p>
                    I&apos;m a Creative Director and UI/UX Designer from San
                    Francisco, working at the intersection of design and
                    technology. With over 8 years of experience, I specialize in
                    creating digital products that are both beautiful and
                    functional.
                  </p>
                  <p>
                    My approach combines aesthetic sensibility with technical
                    expertise, ensuring that every project delivers exceptional
                    user experiences while meeting business objectives.
                    I&apos;ve had the privilege of working with startups and
                    Fortune 500 companies alike.
                  </p>
                  <p>
                    When I&apos;m not designing, you can find me hiking in the
                    mountains, experimenting with new cooking recipes, or
                    contributing to open-source projects.
                  </p>
                </div>
              </motion.div>
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="mb-8 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Experience
                </h2>
                <div className="space-y-0">
                  {experience?.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      index={index}
                      type="experience"
                    />
                  ))}
                </div>
              </motion.section>
              {/* Education */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-16"
              >
                <h2 className="mb-8 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Education
                </h2>
                <div className="space-y-0">
                  {education.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      item={item}
                      index={index}
                      type="education"
                    />
                  ))}
                </div>
              </motion.section>
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-16"
              >
                <h2 className="mb-8 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Certifications & Courses
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200 hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/80 dark:hover:border-neutral-700"
                    >
                      <div className="mb-3 flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                          {course.name}
                        </h3>
                        {course.certificate && (
                          <Award className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                        )}
                      </div>
                      <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
                        {course.provider}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">
                        {course.year}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
