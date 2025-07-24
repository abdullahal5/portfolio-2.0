"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";

// Navigation data organized by sections
const footerNavigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Consulting", href: "/services/consulting" },
    { name: "Maintenance", href: "/services/maintenance" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

// Social media links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
    color: "hover:text-neutral-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: Twitter,
    color: "hover:text-blue-500 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
];

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full bg-neutral-900 p-3 text-white transition-colors duration-200 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:outline-none dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-950"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function FooterLink({ href, children, external = false }: FooterLinkProps) {
  const linkContent = (
    <motion.span
      whileHover={{ x: 2 }}
      className="inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {children}
      {external && <ExternalLink className="h-3 w-3" />}
    </motion.span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} className="block">
      {linkContent}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-200 dark:border-neutral-800/50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Alex Johnson
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Full-stack developer crafting modern web experiences with clean
                code and thoughtful design.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
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
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase dark:text-neutral-100">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase dark:text-neutral-100">
                Services
              </h4>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 uppercase dark:text-neutral-100">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t border-neutral-200 pt-8 dark:border-neutral-800/50"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <div className="text-center text-sm text-neutral-500 sm:text-left dark:text-neutral-500">
              <p>© {currentYear} Alex Johnson. All rights reserved.</p>
              <p className="mt-1">
                Built with{" "}
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Next.js
                </span>
                ,{" "}
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  TypeScript
                </span>{" "}
                &{" "}
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Tailwind CSS
                </span>
              </p>
            </div>

            {/* Scroll to Top */}
            <ScrollToTop />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
