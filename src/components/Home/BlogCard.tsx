"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Eye, User, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../shared/title/SectionTitle";

// Fake article data
const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt:
      "Explore advanced patterns and best practices for creating maintainable React applications that can grow with your team and requirements.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    author: {
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-01-15",
    readTime: 3,
    views: 1247,
    tags: ["React", "Architecture", "JavaScript"],
  },
  {
    id: 2,
    title: "The Future of Web Development: AI-Powered Tools and Workflows",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way we build, test, and deploy web applications in 2024 and beyond.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    author: {
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-01-10",
    readTime: 3,
    views: 892,
    tags: ["AI", "Web Development", "Future Tech"],
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Types and Design Patterns",
    excerpt:
      "Deep dive into TypeScript's advanced type system and learn how to implement robust design patterns for enterprise applications.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    author: {
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    publishedAt: "2024-01-05",
    readTime: 3,
    views: 1563,
    tags: ["TypeScript", "Design Patterns", "Programming"],
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatViews(views: number) {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}k`;
  }
  return views.toString();
}

interface BlogCardProps {
  article: (typeof articles)[0];
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900/80 dark:hover:border-neutral-700 dark:hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Read More Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-900/90"
        >
          <ArrowUpRight className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800/50 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-neutral-900 transition-colors duration-200 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {article.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-neutral-300 dark:ring-neutral-700">
              <Image
                src={article.author.avatar || "/placeholder.svg"}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <User className="h-4 w-4" />
              <span>{article.author.name}</span>
            </div>
          </div>

          {/* Meta Info Stats */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500 dark:text-neutral-500">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <Eye className="h-4 w-4" />
              <span>{formatViews(article.views)} views</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <SectionTitle
            title="Articles"
            description="Insights, tutorials, and thoughts on modern web development, design,
            and technology trends."
          />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
