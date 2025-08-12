"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { use, useState } from "react";
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
import { projects } from "@/data/project";
import { IProject } from "@/types";

const ProjectDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const { slug } = use(params);

  const foundProject = projects?.find(
    (project) => Number(project.id) === Number(slug),
  );

  if (!foundProject) {
    return <div>Project not found</div>;
  }

  const project: IProject = foundProject;

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
            <Button
              variant="ghost"
              className="cursor-pointer gap-2 rounded-full border border-neutral-700"
            >
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
                <Link
                  href={project?.liveUrl}
                  target="_blank"
                >
                  <Button className="gap-2 cursor-pointer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link
                  href={project?.githubUrl}
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="gap-2 cursor-pointer border-white/20 bg-white/5 text-white hover:bg-white/20"
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
                    {project?.description}
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
                    {project?.technology?.map((tech, idx) => (
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
                          {tech}
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
                      <Button
                        className="w-full cursor-pointer gap-2"
                        variant="default"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      href={project?.githubUrl}
                      target="_blank"
                      className="block"
                    >
                      <Button
                        className="w-full cursor-pointer gap-2 border border-neutral-700 bg-transparent"
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
