/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Tag, Star, X, Database, Globe, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import ProjectCard from "@/components/Projects/ProjectCard";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/shared/title/SectionTitle";
import { projects } from "@/data/project";

const categories = [
  "All",
  "Web Application",
  "AI/ML",
  "API Development",
  "Mobile App",
  "System Architecture",
  "Analytics",
  "Education",
  "Real-time Systems",
  "Finance",
];

const allTechnologies = Array.from(
  new Set(projects?.flatMap((project) => project.technology)),
).sort();

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    [],
  );
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects?.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technology.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesType =
        selectedType === "All" || project.type === selectedType;

      const matchesTechnology =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.some((tech) => project.technology.includes(tech));

      const matchesFeatured = !showFeaturedOnly || project.featured;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesTechnology &&
        matchesFeatured
      );
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedType,
    selectedTechnologies,
    showFeaturedOnly,
  ]);

  const handleTechnologyToggle = (technology: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(technology)
        ? prev.filter((t) => t !== technology)
        : [...prev, technology],
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedType("All");
    setSelectedTechnologies([]);
    setShowFeaturedOnly(false);
  };

  const activeFiltersCount =
    (selectedCategory !== "All" ? 1 : 0) +
    (selectedType !== "All" ? 1 : 0) +
    selectedTechnologies.length +
    (showFeaturedOnly ? 1 : 0);

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const cardVariants: any = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 right-0 left-0 -z-50 h-full overflow-hidden">
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

      <div className="container mx-auto px-4 pt-20">
        {/* Header */}
        <SectionTitle
          title="Projects"
          description="Explore my collection of projects showcasing modern web development,
            backend systems, and innovative solutions."
        />

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-3 text-center"
        >
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {projects?.length}{" "}
            projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "relative mx-auto w-full max-w-4xl rounded-xl p-6",
            // Light mode
            "border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm",
            // Dark mode
            "dark:border-neutral-700 dark:bg-neutral-900/80 dark:backdrop-blur-sm",
          )}
        >
          <motion.div className="relative">
            <motion.div
              className={cn(
                "absolute -top-32 right-0 -z-50 h-[50vh] w-[50vh] rounded-full bg-blue-500 opacity-20",
                "blur-[90px] dark:opacity-10",
              )}
            />

            {/* Main Filter Card */}
            <Card className="relative overflow-hidden border-0 p-2">
              <div className="relative space-y-6">
                {/* Search and Filter Toggle Row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  {/* Enhanced Search Bar */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative w-full md:w-auto md:flex-1"
                  >
                    <div className="group relative">
                      <div className="relative rounded-xl outline-none">
                        {/* Search Icon */}
                        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                        {/* Input Field */}
                        <Input
                          type="text"
                          placeholder="Search projects, technologies..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className={cn(
                            // Base styles
                            "h-12 w-full rounded-xl border bg-white px-12 py-4 text-base",
                            "shadow-none transition-all duration-200 outline-none",
                            "placeholder:text-neutral-400",

                            // Light mode
                            "border-neutral-300",
                            "focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200",

                            // Dark mode
                            "dark:border-neutral-700 dark:bg-[#161616] dark:text-white dark:placeholder:text-neutral-500",
                            "dark:focus:border-neutral-500 dark:focus:ring-neutral-800",
                          )}
                        />
                        {/* Clear Button */}
                        <AnimatePresence>
                          {searchTerm && (
                            <motion.button
                              type="button"
                              className="absolute top-1/2 right-12 -translate-y-1/2 rounded-full p-1 hover:text-red-500 md:right-3"
                              onClick={() => setSearchTerm("")}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <X className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>

                  {/* Filter Toggle Button - Visible on mobile and desktop */}
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className={cn(
                      // Base styles
                      "h-12 w-full items-center gap-3 rounded-xl border px-4 transition-all duration-200",
                      "hover:shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2",

                      // Light mode
                      "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50",
                      "focus-visible:ring-neutral-300",

                      // Dark mode
                      "dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
                      "dark:focus-visible:ring-neutral-500",

                      // Responsive
                      "md:w-auto",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                      <span className="font-medium">Filters</span>
                      {activeFiltersCount > 0 && (
                        <Badge
                          variant="secondary"
                          className={cn(
                            "ml-1 border-0",
                            // Light
                            "bg-blue-100 text-blue-800",
                            // Dark
                            "dark:bg-blue-900/30 dark:text-blue-200",
                          )}
                        >
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </div>
                  </Button>
                </div>

                {/* Filter Controls - Conditionally shown */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 pt-4">
                        {/* Main Filters Grid */}
                        <motion.div
                          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {/* Type Filter */}
                          <div className="group w-full">
                            <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              Project Type
                            </Label>
                            <Select
                              value={selectedType}
                              onValueChange={setSelectedType}
                            >
                              <SelectTrigger className="h-full w-full rounded-xl border border-neutral-300 bg-white shadow-sm transition-all hover:border-neutral-400 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
                                <div className="flex items-center gap-3">
                                  {selectedType === "Frontend" && (
                                    <Globe className="h-4 w-4 text-blue-500" />
                                  )}
                                  {selectedType === "Backend" && (
                                    <Database className="h-4 w-4 text-purple-500" />
                                  )}
                                  {selectedType === "All" && (
                                    <Filter className="h-4 w-4 text-neutral-500" />
                                  )}
                                  <SelectValue placeholder="Select type" />
                                </div>
                              </SelectTrigger>
                              <SelectContent className="rounded-xl border border-neutral-300 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                                <SelectItem
                                  value="All"
                                  className="rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                >
                                  <div className="flex items-center gap-3">
                                    <span>All Types</span>
                                  </div>
                                </SelectItem>
                                <SelectItem
                                  value="Frontend"
                                  className="rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
                                >
                                  <div className="flex items-center gap-3">
                                    {/* <Globe className="h-4 w-4 text-blue-500" /> */}
                                    <span>Frontend</span>
                                  </div>
                                </SelectItem>
                                <SelectItem
                                  value="Backend"
                                  className="rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30"
                                >
                                  <div className="flex items-center gap-3">
                                    {/* <Database className="h-4 w-4 text-purple-500" /> */}
                                    <span>Backend</span>
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Category Filter */}
                          <div className="group w-full">
                            <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              Category
                            </Label>
                            <Select
                              value={selectedCategory}
                              onValueChange={setSelectedCategory}
                            >
                              <SelectTrigger className="h-12 w-full rounded-xl border border-neutral-300 bg-white shadow-sm transition-all hover:border-neutral-400 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl border border-neutral-300 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                                {categories.map((category) => (
                                  <SelectItem
                                    key={category}
                                    value={category}
                                    className="rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                  >
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Technology Filter - Updated */}
                          <div className="group w-full">
                            <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              Technologies
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="h-9 w-full justify-start gap-2 rounded-xl border border-neutral-300 bg-white px-4 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-50 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
                                >
                                  <Tag className="h-4 w-4 text-pink-500" />
                                  <span>Technologies</span>
                                  {selectedTechnologies.length > 0 && (
                                    <Badge
                                      variant="secondary"
                                      className="ml-1 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200"
                                    >
                                      {selectedTechnologies.length}
                                    </Badge>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-[300px] rounded-xl border border-neutral-300 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
                                align="start"
                              >
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                                      Filter by Technologies
                                    </h4>
                                    {selectedTechnologies.length > 0 && (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                          setSelectedTechnologies([])
                                        }
                                        className="text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:text-pink-400 dark:hover:bg-pink-900/30"
                                      >
                                        Clear all
                                      </Button>
                                    )}
                                  </div>
                                  <Separator className="bg-neutral-200 dark:bg-neutral-700" />
                                  <div className="max-h-[300px] overflow-y-auto">
                                    <div className="grid grid-cols-2 gap-3">
                                      {allTechnologies.map((tech) => (
                                        <motion.div
                                          key={tech}
                                          className="flex items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
                                          whileHover={{ scale: 1.02 }}
                                        >
                                          <Checkbox
                                            id={tech}
                                            className="border-neutral-300 data-[state=checked]:border-0 data-[state=checked]:bg-pink-500 dark:border-neutral-600"
                                            checked={selectedTechnologies.includes(
                                              tech,
                                            )}
                                            onCheckedChange={() =>
                                              handleTechnologyToggle(tech)
                                            }
                                          />
                                          <Label
                                            htmlFor={tech}
                                            className="text-sm font-medium"
                                          >
                                            {tech}
                                          </Label>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* Featured Filter */}
                          <div className="group w-full">
                            <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              Featured
                            </Label>
                            <Button
                              variant={showFeaturedOnly ? "default" : "outline"}
                              onClick={() =>
                                setShowFeaturedOnly(!showFeaturedOnly)
                              }
                              className={cn(
                                "h-9 w-full gap-2 rounded-xl border border-neutral-300 px-4 shadow-sm transition-all",
                                showFeaturedOnly
                                  ? "border-amber-500 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-200"
                                  : "bg-white hover:border-amber-300 hover:bg-amber-50/50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-amber-900/20",
                              )}
                            >
                              <Star
                                className={cn(
                                  "h-4 w-4",
                                  showFeaturedOnly
                                    ? "fill-amber-500"
                                    : "text-amber-500",
                                )}
                              />
                              <span>Featured Only</span>
                            </Button>
                          </div>
                        </motion.div>

                        {/* Active Filters */}
                        {(selectedCategory !== "All" ||
                          selectedType !== "All" ||
                          selectedTechnologies.length > 0 ||
                          showFeaturedOnly) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.2 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center gap-2">
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-600" />
                              <span className="px-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                Active filters
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-600" />
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                              {selectedCategory !== "All" && (
                                <Badge
                                  variant="outline"
                                  className="gap-1 rounded-full border-purple-200 bg-purple-50 px-3 py-1 text-purple-700 transition-colors hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                  onClick={() => setSelectedCategory("All")}
                                >
                                  <span>Category: {selectedCategory}</span>
                                  <X className="h-3 w-3" />
                                </Badge>
                              )}

                              {selectedType !== "All" && (
                                <Badge
                                  variant="outline"
                                  className="gap-1 rounded-full border-blue-200 bg-blue-50 px-3 py-1 text-blue-700 transition-colors hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                  onClick={() => setSelectedType("All")}
                                >
                                  {selectedType === "Frontend" && (
                                    <Globe className="h-3 w-3 text-blue-500" />
                                  )}
                                  {selectedType === "Backend" && (
                                    <Database className="h-3 w-3 text-purple-500" />
                                  )}
                                  <span>{selectedType}</span>
                                  <X className="h-3 w-3" />
                                </Badge>
                              )}

                              {selectedTechnologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="gap-1 rounded-full border-pink-200 bg-pink-50 px-3 py-1 text-pink-700 transition-colors hover:bg-pink-100 dark:border-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
                                  onClick={() => handleTechnologyToggle(tech)}
                                >
                                  <span>{tech}</span>
                                  <X className="h-3 w-3" />
                                </Badge>
                              ))}

                              {showFeaturedOnly && (
                                <Badge
                                  className="gap-1 rounded-full border-amber-200 bg-amber-50 px-3 py-1 text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                  onClick={() => setShowFeaturedOnly(false)}
                                >
                                  <Star className="h-3 w-3 fill-amber-500 dark:fill-amber-400" />
                                  <span>Featured</span>
                                  <X className="h-3 w-3" />
                                </Badge>
                              )}

                              <Button
                                variant="ghost"
                                onClick={clearAllFilters}
                                className="gap-1 rounded-full px-3 py-1 text-sm text-neutral-600 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-neutral-400 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                                size="sm"
                              >
                                <X className="h-3.5 w-3.5" />
                                <span>Clear all</span>
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${selectedCategory}-${selectedType}-${selectedTechnologies.join(",")}-${showFeaturedOnly}`}
            // variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                // variants={cardVariants}
                // whileHover={{ y: -5 }}
                // transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} idx={index} />
              </div>
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
            <h3 className="mb-2 text-2xl font-semibold">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={clearAllFilters} variant="outline">
              Clear all filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
