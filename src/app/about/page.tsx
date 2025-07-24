"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Palette,
  Smartphone,
  Github,
  Code,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#", color: "text-blue-600 dark:text-blue-400" },
    { icon: Twitter, href: "#", color: "text-sky-500 dark:text-sky-400" },
    { icon: Instagram, href: "#", color: "text-pink-500 dark:text-pink-400" },
    { icon: Linkedin, href: "#", color: "text-blue-700 dark:text-blue-500" },
    { icon: Github, href: "#", color: "text-gray-800 dark:text-gray-300" },
  ];

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting beautiful, intuitive interfaces with a focus on user experience and accessibility.",
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Building performant mobile applications with React Native and Flutter.",
      color: "text-orange-500 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/30",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Creating responsive, modern web applications with Next.js and Tailwind CSS.",
      color: "text-emerald-500 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description:
        "Improving search rankings and driving organic traffic to your website.",
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (234) 567-8900",
      color: "text-pink-500 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/30",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      color: "text-red-500 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/30",
    },
    {
      icon: Calendar,
      label: "Birthday",
      value: "May 27, 1990",
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="relative pt-44 transition-colors duration-300">
      {/* blue orb */}
      <motion.div
        initial={{ x: "-10%", y: "20%", opacity: 0.3 }}
        animate={{ x: ["-10%", "10%", "-10%"], y: ["20%", "30%", "20%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed top-16 right-20 -z-50 h-[50vh] w-[40vh] rounded-full bg-blue-500 opacity-20",
          "blur-[100px] opacity-70",
        )}
      />

      {/* purple orb */}
      <motion.div
        initial={{ x: "80%", y: "60%", opacity: 0.2 }}
        animate={{ x: ["80%", "70%", "80%"], y: ["60%", "50%", "60%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
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
          repeat: Infinity,
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
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Johnson"
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
                  Alex Johnson
                </h1>
                <p className="font-medium text-gray-600 dark:text-gray-300">
                  Senior UI/UX Designer & Developer
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-8 flex justify-center gap-3"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-full p-3 transition-all ${social.color} bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600`}
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
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  >
                    <div className={`rounded-lg p-2 ${info.bgColor}`}>
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

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

                <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
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

              {/* What I Do Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-12"
              >
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl dark:from-indigo-400 dark:to-purple-400">
                    What I Do
                  </h3>
                  <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-transparent" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                      className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-700"
                    >
                      <div
                        className={`h-16 w-16 rounded-2xl ${service.bgColor} mb-4 flex items-center justify-center`}
                      >
                        <service.icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <h4 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h4>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl dark:from-indigo-400 dark:to-purple-400">
                    My Skills
                  </h3>
                  <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-transparent" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    { name: "UI/UX Design", level: 90, color: "bg-purple-500" },
                    { name: "Figma", level: 85, color: "bg-pink-500" },
                    { name: "React", level: 80, color: "bg-blue-500" },
                    {
                      name: "Next.js",
                      level: 75,
                      color: "bg-gray-800 dark:bg-gray-300",
                    },
                    { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
                    { name: "TypeScript", level: 70, color: "bg-blue-600" },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            delay: 1.2 + index * 0.1,
                            duration: 1,
                            type: "spring",
                          }}
                          className={`h-full rounded-full ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
