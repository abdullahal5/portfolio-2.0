/* eslint-disable @typescript-eslint/no-explicit-any */
import TechExpand from "@/components/Projects/TechExpand";
import { education, experience } from "@/data/about";
import { technologies } from "@/utils/techIcon";
import { motion, useAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function TimelineItem({
  item,
  index,
  type,
}: {
  item: any;
  index: number;
  type: "experience" | "education";
}) {
  const controls = useAnimation();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasKeyFeatures =
    type === "experience" && item.keyFeatures && item.keyFeatures.length > 0;

  const toggleFeatures = async () => {
    if (!hasKeyFeatures) return;

    const willExpand = !isExpanded;
    setIsExpanded(willExpand);

    await controls.start({
      height: willExpand ? "auto" : 0,
      opacity: willExpand ? 1 : 0,
      y: willExpand ? 0 : -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  const items = type === "experience" ? experience : education;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline line and logo */}
      <div className="flex flex-col items-center">
        {/* Top connecting line */}
        {index > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-0.5 origin-top"
          />
        )}

        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="relative flex items-center justify-center"
        >
          <div
            className={`relative z-10 h-4 w-4 rounded-full border-2 transition-all duration-300 ${
              item.completed
                ? "border-green-500 bg-green-500 shadow-lg shadow-green-500/30"
                : item.current
                  ? "border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/30"
                  : "border-slate-300 bg-white group-hover:border-slate-400"
            } `}
          >
            {/* Completed checkmark */}
            {item.completed && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  className="h-2.5 w-2.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            )}

            {/* Current item pulse */}
            {item.current && (
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-blue-400"
              />
            )}
          </div>
        </motion.div>

        {/* Bottom connecting line - only show if not the last item */}
        {index < items.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: index * 0.15 + 0.3,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="min-h-16 w-0.5 flex-1 origin-top bg-neutral-300 dark:bg-neutral-700"
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="group relative mb-5 overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800/50 dark:bg-neutral-900/80"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-neutral-800/20" />

          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {item.logo && (
                <Image
                  src={item.logo}
                  className="h-12 w-12 rounded-full object-cover"
                  width={20}
                  height={20}
                  alt="logo"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {type === "experience" ? item.position : item.degree}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {type === "experience" ? item.company : item.institution}
                </p>
                {type === "education" && item.gpa && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    GPA: {item.gpa}
                  </p>
                )}
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {type === "experience" || type === "education"
                      ? `${item.startDate} - ${item.current ? "Present" : item.endDate}`
                      : `${item.startDate} - ${item.endDate}`}
                  </div>
                  {item.current && (
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  )}
                </div>
                {type === "experience" && (
                  <span className="mt-1 inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                    {item.type}
                  </span>
                )}
              </div>
            </div>

            {type === "experience" ? (
              <>
                <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
                <div className="relative flex items-center">
                  {item.technologies.map(
                    (techName: string, techIdx: number) => {
                      const tech = technologies[techName] || {
                        icon: "❓",
                        color: "#888888",
                        name: techName,
                      };

                      return (
                        <TechExpand
                          key={techIdx}
                          techIdx={techIdx}
                          tech={tech}
                        />
                      );
                    },
                  )}
                </div>

                {hasKeyFeatures && (
                  <motion.button
                    onClick={toggleFeatures}
                    className="flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-left transition-all duration-200 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Key Achievements ({item.keyFeatures.length})
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 text-neutral-500" />
                    </motion.div>
                  </motion.button>
                )}
              </>
            ) : (
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description || "Completed degree program with honors."}
              </p>
            )}
          </div>
        </motion.div>

        {hasKeyFeatures && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={controls}
            className={`overflow-hidden`}
          >
            <div className="mb-5 grid gap-3 md:grid-cols-2">
              {item.keyFeatures.map((feature: any, featureIndex: number) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: featureIndex * 0.1 }}
                  className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-lg bg-neutral-100 p-2 dark:bg-neutral-700">
                      <feature.icon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
