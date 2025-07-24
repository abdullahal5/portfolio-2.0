"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Users,
  User,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const ProjectDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const project = {
    id: "1",
    title: "E-Commerce Dashboard",
    subtitle: "Full-Stack React Application",
    description:
      "A comprehensive e-commerce dashboard built with Next.js, featuring real-time analytics, inventory management, and customer insights. This project demonstrates modern web development practices with a focus on performance and user experience.",
    longDescription:
      "This e-commerce dashboard represents a complete solution for online store management. Built with cutting-edge technologies, it provides store owners with powerful tools to manage their business effectively. The application features real-time data synchronization, advanced filtering and search capabilities, responsive design, and comprehensive analytics. The project showcases expertise in full-stack development, database design, and modern UI/UX principles.",
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: [
      { name: "Next.js", icon: "⚛️", color: "#000000" },
      { name: "TypeScript", icon: "TS", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4" },
      { name: "Prisma", icon: "🔺", color: "#2D3748" },
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "Stripe", icon: "💳", color: "#635BFF" },
      { name: "Vercel", icon: "▲", color: "#000000" },
      { name: "Framer Motion", icon: "🎭", color: "#FF0055" },
    ],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/project",
    duration: "3 months",
    role: "Full-Stack Developer",
    team: "Solo Project",
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description:
          "Implementing real-time updates across multiple dashboard components while maintaining optimal performance was challenging. I solved this using WebSocket connections with proper error handling and reconnection logic.",
        solution:
          "Used Socket.io with Redis for scalable real-time communication and implemented optimistic updates for better UX.",
      },
      {
        title: "Complex State Management",
        description:
          "Managing complex application state with multiple data sources and user interactions required careful architecture planning.",
        solution:
          "Implemented Zustand for global state management with proper separation of concerns and middleware for persistence.",
      },
      {
        title: "Performance Optimization",
        description:
          "Ensuring fast load times and smooth interactions with large datasets was crucial for user experience.",
        solution:
          "Implemented virtual scrolling, lazy loading, and React Query for efficient data fetching and caching.",
      },
    ],
    features: [
      "Real-time analytics dashboard",
      "Inventory management system",
      "Customer relationship management",
      "Order processing and tracking",
      "Payment integration with Stripe",
      "Responsive design for all devices",
      "Dark/Light mode support",
      "Advanced filtering and search",
      "Export functionality",
      "Role-based access control",
    ],
    timeline: [
      {
        phase: "Planning & Design",
        duration: "1 week",
        description: "User research, wireframing, and system architecture",
      },
      {
        phase: "Backend Development",
        duration: "4 weeks",
        description: "API development, database design, and authentication",
      },
      {
        phase: "Frontend Development",
        duration: "6 weeks",
        description: "UI implementation, state management, and integrations",
      },
      {
        phase: "Testing & Deployment",
        duration: "1 week",
        description: "Testing, optimization, and production deployment",
      },
    ],
  };

  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      <div className="px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 h-[250px] w-full"
        >
          <div>
            <GridPattern
              width={50}
              height={50}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              )}
            />
          </div>

          {/* Project Info Overlay */}
          <div className="absolute right-0 bottom-0 left-0 p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
                {project?.title}
              </h1>
              <p className="mb-4 text-xl text-gray-200">{project?.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={project?.liveUrl} target="_blank">
                  <Button className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link href={project?.codeUrl} target="_blank">
                  <Button
                    variant="outline"
                    className="gap-2 border-white/20 bg-white/10 text-white hover:bg-white/20"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mx-5 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Project Overview
                  </h2>
                  <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                    {project?.longDescription}
                  </p>

                  {/* Features */}
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {project?.features?.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project?.technologies?.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/60 px-3 py-2 text-sm dark:bg-white/10"
                        >
                          <span className="mr-2" style={{ color: tech?.color }}>
                            {tech?.icon}
                          </span>
                          {tech?.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Image Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Gallery
                  </h2>

                  {/* Main Image */}
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project?.images[selectedImage] || "/placeholder.svg"}
                      alt={`${project?.title} screenshot ${selectedImage + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="grid grid-cols-4 gap-2">
                    {project?.images?.map((image, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === idx
                            ? "border-blue-500 ring-2 ring-blue-500/20"
                            : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Video Section */}
            {project?.video && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Demo Video
                    </h2>
                    {!showVideo ? (
                      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                        <Button
                          onClick={() => setShowVideo(true)}
                          size="lg"
                          className="gap-2"
                        >
                          <Play className="h-5 w-5" />
                          Play Demo
                        </Button>
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <iframe
                          src={project?.video}
                          className="h-full w-full"
                          allowFullScreen
                          title="Project Demo Video"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-6">
                    {project?.challenges?.map((challenge, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        className="border-l-4 border-blue-500 pl-4"
                      >
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                          {challenge?.title}
                        </h3>
                        <p className="mb-3 text-gray-600 dark:text-gray-300">
                          {challenge?.description}
                        </p>
                        <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Solution:</strong> {challenge?.solution}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Project Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Duration
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project?.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Role
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project?.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Team
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {project?.team}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Timeline
                  </h3>
                  <div className="space-y-4">
                    {project?.timeline?.map((phase, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="relative border-l-2 border-gray-200 pl-4 last:border-l-0 dark:border-gray-700"
                      >
                        <div className="absolute top-0 -left-2 h-4 w-4 rounded-full bg-blue-500" />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                            {phase?.phase}
                          </h4>
                          <p className="mb-1 text-xs text-blue-600 dark:text-blue-400">
                            {phase?.duration}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            {phase?.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-white/20 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/20">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href={project?.liveUrl}
                      target="_blank"
                      className="block"
                    >
                      <Button className="w-full gap-2" variant="default">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      href={project?.codeUrl}
                      target="_blank"
                      className="block"
                    >
                      <Button
                        className="w-full gap-2 bg-transparent"
                        variant="outline"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
