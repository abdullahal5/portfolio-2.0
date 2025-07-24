"use client";
import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="relative overflow-hidden py-10 text-center">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="-mb-5 text-5xl font-bold tracking-widest text-gray-200 uppercase lg:-mb-12 lg:-ml-2 lg:text-9xl dark:text-neutral-800"
      >
        {title}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-xl font-bold tracking-widest text-violet-600 uppercase lg:text-6xl"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base dark:text-gray-400 italic tracking-wide"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionTitle;
