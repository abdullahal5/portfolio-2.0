"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../shared/title/SectionTitle";
import Link from "next/link";

// Common freelancer FAQ data
const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, including frontend development with React/Next.js, backend development with Node.js, database design, API development, and UI/UX design. I also offer website maintenance, performance optimization, and technical consulting services.",
  },
  {
    id: 2,
    question: "How much do you charge for a project?",
    answer:
      "Project costs vary based on complexity, timeline, and specific requirements. Simple websites start from $2,000, while complex web applications can range from $5,000 to $15,000+. I provide detailed quotes after understanding your project needs and offer both fixed-price and hourly rate options.",
  },
  {
    id: 3,
    question: "What's your typical project timeline?",
    answer:
      "Timeline depends on project scope and complexity. A simple website typically takes 2-3 weeks, while complex applications can take 6-12 weeks. I provide detailed project timelines during the planning phase and keep you updated throughout the development process.",
  },
  //   {
  //     id: 4,
  //     question: "Do you work with clients internationally?",
  //     answer:
  //       "Yes, I work with clients worldwide. I'm experienced in remote collaboration and use modern communication tools to ensure smooth project delivery regardless of time zones. I'm flexible with meeting schedules to accommodate different time zones.",
  //   },
  //   {
  //     id: 5,
  //     question: "What's included in your development process?",
  //     answer:
  //       "My process includes initial consultation, project planning, design mockups, development, testing, deployment, and post-launch support. I provide regular updates, involve you in key decisions, and ensure the final product meets your expectations and business goals.",
  //   },
  //   {
  //     id: 6,
  //     question: "Do you provide ongoing support and maintenance?",
  //     answer:
  //       "Yes, I offer ongoing support and maintenance packages. This includes regular updates, security patches, performance monitoring, content updates, and technical support. I also provide training to help you manage your website independently if needed.",
  //   },
  //   {
  //     id: 7,
  //     question: "What technologies do you work with?",
  //     answer:
  //       "I work with modern technologies including React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, and various other tools. I stay updated with the latest technologies and choose the best stack for each project's specific needs.",
  //   },
  //   {
  //     id: 8,
  //     question: "How do you handle project communication?",
  //     answer:
  //       "I believe in transparent communication throughout the project. I provide regular updates via email, schedule weekly check-ins, use project management tools for tracking progress, and am available for quick questions via messaging platforms during business hours.",
  //   },
];

interface FAQItemProps {
  faq: (typeof faqData)[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/80 dark:hover:border-neutral-700"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-6 py-5 text-left focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
        aria-expanded={isOpen}
      >
        <h3 className="pr-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          ) : (
            <Plus className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="mb-4 h-px bg-neutral-200 dark:bg-neutral-800" />
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <SectionTitle
            title="FAQ"
            description=" Get answers to common questions about my freelance services, process, and pricing."
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="rounded-xl border border-neutral-200 bg-white p-8 dark:border-neutral-800/50 dark:bg-neutral-900/80">
            <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Still have questions?
            </h3>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              I&apos;m here to help! Feel free to reach out for a free
              consultation about your project.
            </p>
            <Link href={"/contact"}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex cursor-pointer items-center rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:outline-none dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
