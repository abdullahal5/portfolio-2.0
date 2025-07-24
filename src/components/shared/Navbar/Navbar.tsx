"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

import avatar from "../../../assets/avatar.jpg";
import { usePathname } from "next/navigation";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navbarY = useTransform(scrollY, [0, 100], [0, -10]);
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.98]); // Reduced scale change to minimize shaking

  const pathname = usePathname();

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        style={{ y: navbarY, scale: navbarScale }}
        className="fixed top-4 left-1/2 z-50 hidden w-full max-w-4xl md:block"
        initial={{ x: "-50%", opacity: 0, y: -20 }}
        animate={{ x: "-50%", opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.nav
          className={`relative mx-auto flex w-full items-center justify-between gap-5 rounded-2xl px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-white/10 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-black/80 dark:shadow-white/5"
              : "border-white/10 bg-white/60 backdrop-blur-md dark:border-white/5 dark:bg-black/60"
          }`}
          layout
        >
          {/* Logo/Avatar Section */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <Image
                className="h-9 w-9 rounded-full ring-2 ring-white/20 dark:ring-white/10"
                src={avatar}
                height={36}
                width={36}
                alt="Avatar"
              />
              <div className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-black"></div>
            </div>
            <div className="hidden sm:block">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                John Doe
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "font-semibold text-black dark:text-white"
                      : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="relative z-10 block">{item.title}</span>
                  {(hovered === idx || isActive) && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 rounded-lg bg-white/60 dark:bg-white/10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            {/* play ground button */}
            <Link href="/playground" passHref>
              <motion.button
                className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaCode className="text-gray-400" />
              </motion.button>
            </Link>

            {/* Theme Toggle */}
            <motion.button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </motion.button>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        className="fixed top-4 right-4 left-4 z-50 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.nav
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-black/80 dark:shadow-white/5"
              : "border-white/10 bg-white/60 backdrop-blur-md dark:border-white/5 dark:bg-black/60"
          }`}
        >
          {/* Mobile Logo */}
          <div className="flex items-center gap-3">
            <Image
              className="h-8 w-8 rounded-full ring-2 ring-white/20 dark:ring-white/10"
              src={avatar}
              height={32}
              width={32}
              alt="Avatar"
            />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              John Doe
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/60 dark:text-gray-300 dark:hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </motion.button>

            {/* play ground button */}
            <Link href="/playground" passHref>
              <motion.button
                className="cursor-pointer rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaCode className="text-gray-400" />
              </motion.button>
            </Link>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/60 dark:text-gray-300 dark:hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/60 backdrop-blur-md dark:border-white/5 dark:bg-black/60"
        >
          <div className="p-4">
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : -20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: idx * 0.1,
                }}
              >
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-white/60 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
