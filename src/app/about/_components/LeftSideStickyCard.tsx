"use client";

import { contactInfo, socialLinks } from "@/data/about";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const LeftSideStickyCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-1"
    >
      <div className="sticky top-44 h-fit rounded-3xl border border-neutral-300 p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-800/50 dark:bg-[#191919] dark:hover:border-neutral-700">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mx-auto -mt-32 mb-6 h-48 w-48"
        >
          <div className="absolute h-full w-full overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800">
            <Image
              src="https://res.cloudinary.com/dhcjdfpf7/image/upload/v1747929540/qmvqqs3uu40fmmseli8o.jpg"
              alt="Abdullah Al Fahim"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Abdullah Al Fahim
          </h1>
          <p className="font-medium text-gray-600 dark:text-gray-300">
            MERN stack developer
          </p>
        </motion.div>

        {/* Social Links - Modern Style */}
        <motion.div className="mb-8 flex justify-center gap-2">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 text-neutral-500 dark:text-neutral-500 ${social.color} rounded-lg transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50`}
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8 space-y-3"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="group flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
            >
              <div className="rounded-lg bg-neutral-100 p-2 transition-colors duration-200 dark:bg-neutral-800">
                <info.icon
                  className={`h-4 w-4 text-neutral-600 transition-colors duration-200 ${info.color}`}
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
                  {info.label}
                </p>
                <p className="flex items-center justify-between text-sm font-semibold text-neutral-900 dark:text-white">
                  {info.value}
                  {/* {info.label === "Email" && (
                    <Button
                      onClick={() => window.navigator.clipboard}
                      className="h-4 w-4 cursor-pointer"
                    >
                      <CopyIcon className="" />
                    </Button>
                  )} */}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="space-y-3"
        >
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1URRTWHorRYZ8V1wzwfUOIlZs5jOpBL4T"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.a>

          <Link href={`/projects`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-300 px-4 py-3 font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800/50"
            >
              <ExternalLink className="h-4 w-4" />
              View Projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 border-t border-neutral-200 pt-6 dark:border-neutral-800"
        >
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            <span className="text-neutral-600 dark:text-neutral-400">
              Available for projects
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeftSideStickyCard;
