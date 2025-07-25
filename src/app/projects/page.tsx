/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Tag,
} from "lucide-react";
import ProjectCard from "@/components/Projects/ProjectCard";

// Demo portfolio data
const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights.",
    image: "/placeholder.svg?height=300&width=500&text=E-Commerce+Dashboard",
    category: "Web Application",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by AI with smart responses, file sharing, and multi-language support.",
    image: "/placeholder.svg?height=300&width=500&text=AI+Chat+App",
    category: "AI/ML",
    tech: ["React", "Node.js", "SocketIO", "OpenAI", "MongoDB"],
    demoUrl: "https://chat.example.com",
    githubUrl: "https://github.com/example/ai-chat",
    date: "2023-12-10",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Collaborative project management tool with kanban boards, time tracking, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500&text=Task+Management",
    category: "Productivity",
    tech: ["Vue.js", "Express", "MySQL", "Redis", "Docker"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/task-manager",
    date: "2023-11-20",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.",
    image: "/placeholder.svg?height=300&width=500&text=Weather+App",
    category: "Mobile App",
    tech: ["React Native", "TypeScript", "Weather API", "Maps SDK"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/example/weather-app",
    date: "2023-10-05",
    featured: false,
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency price tracking with portfolio management, alerts, and market analysis tools.",
    image: "/placeholder.svg?height=300&width=500&text=Crypto+Tracker",
    category: "Finance",
    tech: [
      "React",
      "Chart.js",
      "SocketIO",
      "CoinGecko API",
      "Styled Components",
    ],
    demoUrl: "https://crypto.example.com",
    githubUrl: "https://github.com/example/crypto-tracker",
    date: "2023-09-15",
    featured: true,
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description:
      "Comprehensive social media analytics platform with engagement metrics, audience insights, and content optimization.",
    image: "/placeholder.svg?height=300&width=500&text=Social+Analytics",
    category: "Analytics",
    tech: ["Python", "Django", "React", "D3.js", "PostgreSQL", "Celery"],
    demoUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/social-analytics",
    date: "2023-08-30",
    featured: false,
  },
  {
    id: 7,
    title: "Recipe Sharing Platform",
    description:
      "Community-driven recipe sharing platform with ingredient tracking, meal planning, and cooking tutorials.",
    image: "/placeholder.svg?height=300&width=500&text=Recipe+Platform",
    category: "Social Platform",
    tech: ["Next.js", "Prisma", "Tailwind"],
    demoUrl: "https://recipes.example.com",
    githubUrl: "https://github.com/example/recipe-platform",
    date: "2023-07-12",
    featured: false,
  },
  {
    id: 8,
    title: "Learning Management System",
    description:
      "Modern LMS with interactive courses, progress tracking, video streaming, and certification management.",
    image: "/placeholder.svg?height=300&width=500&text=Learning+Management",
    category: "Education",
    tech: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "WebRTC"],
    demoUrl: "https://learn.example.com",
    githubUrl: "https://github.com/example/lms",
    date: "2023-06-25",
    featured: true,
  },
];

const categories = [
  "All",
  "Web Application",
  "AI/ML",
  "Productivity",
  "Mobile App",
  "Finance",
  "Analytics",
  "Social Platform",
  "Education",
];
const allTechnologies = Array.from(
  new Set(portfolioProjects.flatMap((project) => project.tech)),
);

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    [],
  );
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    categories: false,
    technologies: false,
  });

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategories.includes("All") ||
        selectedCategories.includes(project.category);

      const matchesTechnology =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.some((tech) =>
          project.tech.includes(tech),
        );

      const matchesFeatured = !showFeaturedOnly || project.featured;

      return (
        matchesSearch && matchesCategory && matchesTechnology && matchesFeatured
      );
    });
  }, [searchTerm, selectedCategories, selectedTechnologies, showFeaturedOnly]);

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev.filter((c) => c !== "All"), category];
        return newCategories.length === 0 ? ["All"] : newCategories;
      });
    }
  };

  const handleTechnologyChange = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((t) => t !== technology)
        : [...prev, technology],
    );
  };

  const toggleDropdown = (type: "categories" | "technologies") => {
    setDropdownOpen((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            My Portfolio
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Explore my collection of projects showcasing modern web development,
            AI integration, and innovative solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative mx-auto max-w-md">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pl-10 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("categories")}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              >
                <Filter className="h-4 w-4" />
                Categories ({selectedCategories.length})
              </button>
              {dropdownOpen.categories && (
                <div className="absolute z-10 mt-1 w-56 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Technology Filter */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("technologies")}
                className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              >
                <Tag className="h-4 w-4" />
                Technologies ({selectedTechnologies.length})
              </button>
              {dropdownOpen.technologies && (
                <div className="absolute z-10 mt-1 max-h-64 w-56 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800">
                  {allTechnologies.map((tech) => (
                    <label
                      key={tech}
                      className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTechnologies.includes(tech)}
                        onChange={() => handleTechnologyChange(tech)}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                      />
                      {tech}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Filter */}
            <button
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className={`flex items-center gap-2 rounded-md px-4 py-2 ${
                showFeaturedOnly
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              }`}
            >
              ⭐ Featured Only
            </button>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 1 ||
            !selectedCategories.includes("All") ||
            selectedTechnologies.length > 0) && (
            <div className="flex flex-wrap justify-center gap-2">
              {selectedCategories
                .filter((cat) => cat !== "All")
                .map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {category}
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className="ml-1 rounded-full p-0.5 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              {selectedTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tech}
                  <button
                    onClick={() => handleTechnologyChange(tech)}
                    className="ml-1 rounded-full p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Showing {filteredProjects.length} of {portfolioProjects.length}{" "}
            projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${selectedCategories.join(",")}-${selectedTechnologies.join(",")}-${showFeaturedOnly}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard key={index} project={project} idx={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="py-16 text-center"
          >
            <div className="mb-4 text-6xl">🔍</div>
            <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              No projects found
            </h3>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategories(["All"]);
                setSelectedTechnologies([]);
                setShowFeaturedOnly(false);
              }}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
