/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Clock, Eye, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/shared/title/SectionTitle";
import { BlogCard } from "@/components/Home/BlogCard";
import { GridPattern } from "@/components/ui/grid-pattern";

const articles = [
  {
    id: 1,
    title: "Optimizing Web Performance with Core Web Vitals",
    excerpt:
      "Learn how to improve user experience by measuring and optimizing Core Web Vitals for your websites.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
    author: {
      name: "Emily Carter",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-01-20",
    readTime: 4,
    views: 1325,
    tags: ["Performance", "SEO", "Web Vitals"],
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    excerpt:
      "Explore advanced TypeScript patterns that will make your code more robust and maintainable.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    author: {
      name: "Michael Johnson",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-02-15",
    readTime: 8,
    views: 982,
    tags: ["TypeScript", "Programming"],
  },
  {
    id: 3,
    title: "The Future of React Server Components",
    excerpt:
      "How React Server Components will change the way we build applications.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Williams",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-03-10",
    readTime: 6,
    views: 1543,
    tags: ["React", "Frontend"],
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
    author: {
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2023-12-05",
    readTime: 10,
    views: 876,
    tags: ["CSS", "Frontend"],
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for creating web applications that everyone can use, regardless of ability.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    author: {
      name: "Lisa Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-01-30",
    readTime: 12,
    views: 765,
    tags: ["Accessibility", "Web Development"],
  },
  {
    id: 6,
    title: "State Management in 2024",
    excerpt:
      "Comparing the latest state management solutions for modern web applications.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: {
      name: "James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-02-28",
    readTime: 7,
    views: 1120,
    tags: ["State Management", "Frontend"],
  },
];

const allTags = Array.from(
  new Set(articles.flatMap((article) => article.tags)),
);
const readTimeOptions = [
  { label: "< 5 min", value: "under5" },
  { label: "5–10 min", value: "5to10" },
  { label: "10+ min", value: "over10" },
];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Most Views", value: "mostViews" },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedReadTime, setSelectedReadTime] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filteredArticles = useMemo(() => {
    let result = [...articles];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter((article) =>
        selectedTags.some((tag) => article.tags.includes(tag)),
      );
    }

    // Filter by read time
    if (selectedReadTime.length > 0) {
      result = result.filter((article) => {
        if (selectedReadTime.includes("under5") && article.readTime < 5) {
          return true;
        }
        if (
          selectedReadTime.includes("5to10") &&
          article.readTime >= 5 &&
          article.readTime <= 10
        ) {
          return true;
        }
        if (selectedReadTime.includes("over10") && article.readTime > 10) {
          return true;
        }
        return false;
      });
    }

    // Sort articles
    switch (sortBy) {
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );
        break;
      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime(),
        );
        break;
      case "mostViews":
        result.sort((a, b) => b.views - a.views);
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, selectedTags, selectedReadTime, sortBy]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleReadTimeChange = (option: string) => {
    setSelectedReadTime((prev) =>
      prev.includes(option)
        ? prev.filter((t) => t !== option)
        : [...prev, option],
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
    setSelectedReadTime([]);
    setSortBy("newest");
  };

  const activeFiltersCount =
    selectedTags.length +
    selectedReadTime.length +
    (sortBy !== "newest" ? 1 : 0);

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
    <div className="pt-20">
      <SectionTitle title="Blogs" />

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

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-3 text-center"
      >
        <p className="text-muted-foreground">
          Showing {filteredArticles.length} of {articles.length} articles
        </p>
      </motion.div>

      {/* Filter Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "relative mx-auto mb-8 w-full max-w-4xl rounded-xl p-6",
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
                        placeholder="Search blogs, tags..."
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

                {/* Filter Toggle Button */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
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
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {/* Tags Filter */}
                        <div className="group w-full">
                          <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Tags
                          </Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "h-12 w-full justify-start gap-3 rounded-xl border border-neutral-300 bg-white px-4 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-50 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700",
                                )}
                              >
                                <Filter className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                                <span>Tags</span>
                                {selectedTags.length > 0 && (
                                  <Badge
                                    variant="secondary"
                                    className={cn(
                                      "ml-1 border-0",
                                      // Light
                                      "bg-purple-100 text-purple-800",
                                      // Dark
                                      "dark:bg-purple-900/30 dark:text-purple-200",
                                    )}
                                  >
                                    {selectedTags.length}
                                  </Badge>
                                )}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 rounded-xl border border-neutral-300 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                              {allTags.map((tag) => (
                                <DropdownMenuCheckboxItem
                                  key={tag}
                                  checked={selectedTags.includes(tag)}
                                  onCheckedChange={() => handleTagChange(tag)}
                                  className="rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                >
                                  {tag}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* Read Time Filter */}
                        <div className="group w-full">
                          <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Read Time
                          </Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "h-12 w-full justify-start gap-3 rounded-xl border border-neutral-300 bg-white px-4 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-50 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700",
                                )}
                              >
                                <Clock className="h-4 w-4 text-blue-500" />
                                <span>Read Time</span>
                                {selectedReadTime.length > 0 && (
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
                                    {selectedReadTime.length}
                                  </Badge>
                                )}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 rounded-xl border border-neutral-300 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                              {readTimeOptions.map((option) => (
                                <DropdownMenuCheckboxItem
                                  key={option.value}
                                  checked={selectedReadTime.includes(
                                    option.value,
                                  )}
                                  onCheckedChange={() =>
                                    handleReadTimeChange(option.value)
                                  }
                                  className="rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                >
                                  {option.label}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* Sort By Filter */}
                        <div className="group w-full">
                          <Label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Sort By
                          </Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "h-12 w-full justify-start gap-3 rounded-xl border border-neutral-300 bg-white px-4 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-50 focus:border-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700",
                                )}
                              >
                                <Eye className="h-4 w-4 text-green-500" />
                                <span>
                                  {
                                    sortOptions.find((o) => o.value === sortBy)
                                      ?.label
                                  }
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 rounded-xl border border-neutral-300 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
                              {sortOptions.map((option) => (
                                <DropdownMenuCheckboxItem
                                  key={option.value}
                                  checked={sortBy === option.value}
                                  onCheckedChange={() =>
                                    setSortBy(option.value)
                                  }
                                  className="rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                >
                                  {option.label}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </motion.div>

                      {/* Active Filters */}
                      {(selectedTags.length > 0 ||
                        selectedReadTime.length > 0 ||
                        sortBy !== "newest") && (
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
                            {selectedTags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="gap-1 rounded-full border-purple-200 bg-purple-50 px-3 py-1 text-purple-700 transition-colors hover:bg-purple-100 dark:border-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                onClick={() => handleTagChange(tag)}
                              >
                                <span>{tag}</span>
                                <X className="h-3 w-3" />
                              </Badge>
                            ))}

                            {selectedReadTime.map((option) => {
                              const label = readTimeOptions.find(
                                (o) => o.value === option,
                              )?.label;
                              return (
                                <Badge
                                  key={option}
                                  variant="outline"
                                  className="gap-1 rounded-full border-blue-200 bg-blue-50 px-3 py-1 text-blue-700 transition-colors hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                  onClick={() => handleReadTimeChange(option)}
                                >
                                  <span>{label}</span>
                                  <X className="h-3 w-3" />
                                </Badge>
                              );
                            })}

                            {sortBy !== "newest" && (
                              <Badge
                                variant="outline"
                                className="gap-1 rounded-full border-green-200 bg-green-50 px-3 py-1 text-green-700 transition-colors hover:bg-green-100 dark:border-green-700 dark:bg-green-900/30 dark:text-green-300"
                                onClick={() => setSortBy("newest")}
                              >
                                <span>
                                  Sort:{" "}
                                  {
                                    sortOptions.find((o) => o.value === sortBy)
                                      ?.label
                                  }
                                </span>
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

      {/* Articles Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${searchTerm}-${selectedTags.join(",")}-${selectedReadTime.join(",")}-${sortBy}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="py-16 text-center"
        >
          <div className="mb-4 text-6xl">🔍</div>
          <h3 className="mb-2 text-2xl font-semibold">No articles found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search criteria or filters
          </p>
          <Button onClick={clearAllFilters} variant="outline">
            Clear all filters
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;
