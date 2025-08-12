"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  Plus,
  Minus,
  MessageSquare,
} from "lucide-react";
import SectionTitle from "@/components/shared/title/SectionTitle";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/about";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, including frontend development with React/Next.js, backend development with Node.js, database design, API development, and UI/UX design. I also offer website maintenance, performance optimization, and technical consulting services.",
  },
  {
    id: 2,
    question: "How much do you charge for a project?",
    answer:
      "Project costs vary based on complexity, timeline, and specific requirements. Simple websites start from $2,000, while complex web applications can range from $5,000 to $15,000+. I provide detailed quotes after understanding your project needs and offer both fixed-price and hourly rate options.",
  },
  {
    id: 3,
    question: "What's your typical project timeline?",
    answer:
      "Timeline depends on project scope and complexity. A simple website typically takes 2-3 weeks, while complex applications can take 6-12 weeks. I provide detailed project timelines during the planning phase and keep you updated throughout the development process.",
  },
];

interface FAQItemProps {
  faq: (typeof faqData)[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/80 dark:hover:border-neutral-700"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-6 py-5 text-left focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
        aria-expanded={isOpen}
      >
        <h3 className="pr-4 text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          ) : (
            <Plus className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="mb-4 h-px bg-neutral-200 dark:bg-neutral-800" />
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // if (errors[field]) {
    //   setErrors((prev) => ({ ...prev, [field]: undefined }));
    // }
  };

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="fixed top-0 right-0 left-0 -z-50 h-[900px] overflow-hidden">
        {/* Grid Pattern */}
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

        {/* Blur Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large blue orb */}
          <div className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-10 blur-[100px] dark:opacity-15"></div>

          {/* Medium purple orb */}
          <div className="absolute top-1/3 -right-20 h-[300px] w-[300px] rounded-full bg-purple-500 opacity-10 blur-[80px] dark:opacity-10"></div>

          {/* Small pink orb */}
          <div className="absolute right-1/4 bottom-20 h-[200px] w-[200px] rounded-full bg-pink-500 opacity-10 blur-[60px] dark:opacity-10"></div>

          {/* Teal accent orb */}
          <div className="absolute bottom-1/4 left-1/3 h-[250px] w-[250px] rounded-full bg-teal-400 opacity-10 blur-[70px] dark:opacity-10"></div>
        </div>
      </div>
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <SectionTitle
            title="Let's Connect"
            description="Whether you have a project in
            mind or just want to say hello, I'd love to hear from you."
          />
        </motion.div>

        <div className="mb-16 grid gap-6 lg:grid-cols-5">
          {/* Contact Form - Takes 3 columns */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <Card className="relative h-full overflow-hidden border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-neutral-800/50 dark:bg-neutral-900/80">
              <div className="absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-blue-500 opacity-10 blur-[80px] dark:opacity-5"></div>
              <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-purple-500 opacity-10 blur-[90px] dark:opacity-5"></div>
              <CardContent className="relative p-8">
                <h2 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                    <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label
                          htmlFor="fullName"
                          className="text-neutral-900 dark:text-neutral-100"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className={`border-neutral-200 bg-white/50 text-neutral-900 transition-all duration-200 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:hover:border-neutral-600 ${errors.fullName ? "border-red-500 focus:border-red-500" : "focus:border-neutral-400 dark:focus:border-neutral-500"}`}
                          placeholder="Your full name"
                        />
                        {errors.fullName && (
                          <p className="text-sm text-red-500">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <Label
                          htmlFor="email"
                          className="text-neutral-900 dark:text-neutral-100"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={`border-neutral-200 bg-white/50 text-neutral-900 transition-all duration-200 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:hover:border-neutral-600 ${errors.email ? "border-red-500 focus:border-red-500" : "focus:border-neutral-400 dark:focus:border-neutral-500"}`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="subject"
                        className="text-neutral-900 dark:text-neutral-100"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        className="border-neutral-200 bg-white/50 text-neutral-900 transition-all duration-200 hover:border-neutral-300 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:hover:border-neutral-600 dark:focus:border-neutral-500"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="message"
                        className="text-neutral-900 dark:text-neutral-100"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className={`min-h-[140px] border-neutral-200 bg-white/50 text-neutral-900 transition-all duration-200 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:hover:border-neutral-600 ${errors.message ? "border-red-500 focus:border-red-500" : "focus:border-neutral-400 dark:focus:border-neutral-500"}`}
                        placeholder="What's on your mind?"
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full cursor-pointer overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700 disabled:opacity-80"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </form>
                )}

                <div className="mt-7 w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.944635170491!2d90.39194831543104!3d23.750903594790807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8522b0c6aaf%3A0xa11dbad5de2d5fef!2sDhaka%20University!5e0!3m2!1sen!2sbd!4v1623062031234!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side Content - Takes 2 columns */}
          <motion.div
            className="space-y-6 lg:col-span-2"
            variants={itemVariants}
          >
            {/* Contact Details & Social in a 2-column grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {/* Direct Contact */}
              <Card className="relative overflow-hidden border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-neutral-800/50 dark:bg-neutral-900/80">
                <div className="absolute -top-10 -right-10 h-[150px] w-[150px] rounded-full bg-blue-500 opacity-10 blur-[60px] dark:opacity-5"></div>
                <CardContent className="relative p-6">
                  <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Get in Touch
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalfahin183@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm break-all text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                      >
                        abdullahalfahin183@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        Narayanganj, Dhaka
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="relative overflow-hidden border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-neutral-800/50 dark:bg-neutral-900/80">
                <div className="absolute -bottom-10 -left-10 h-[150px] w-[150px] rounded-full bg-purple-500 opacity-10 blur-[60px] dark:opacity-5"></div>
                <CardContent className="relative p-6">
                  <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Connect Online
                  </h3>
                  <div className="flex flex-wrap items-center justify-center space-x-2">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2 transform rounded-xl border border-white/20 bg-white/10 p-3 transition-all duration-200 hover:scale-110 ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <social.icon className="h-4 w-4 text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Anonymous Message - Full width in right column */}
            <Card className="relative overflow-hidden border border-neutral-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-neutral-800/50 dark:bg-neutral-900/80">
              <div className="absolute -top-10 -right-10 h-[150px] w-[150px] rounded-full bg-pink-500 opacity-10 blur-[60px] dark:opacity-5"></div>
              <CardContent className="relative p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Anonymous Message
                  </h3>
                </div>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Prefer to stay anonymous? Send me a message without revealing
                  your identity.
                </p>
                <div className="h-[320px] w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <iframe
                    src="https://tally.so/r/n9jvQ5"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Anonymous Message Form"
                    className="bg-white dark:bg-neutral-900"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl dark:text-neutral-100">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Get answers to common questions about my freelance services,
              process, and pricing.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openItems.includes(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
