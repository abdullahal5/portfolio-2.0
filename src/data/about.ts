import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Palette,
  Smartphone,
  Github,
  Globe,
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
} from "lucide-react";
import { Calendar, MapPin, Code } from "lucide-react";

export const socialLinks = [
  { icon: Facebook, href: "#", color: "text-blue-600 dark:text-blue-400" },
  { icon: Twitter, href: "#", color: "text-sky-500 dark:text-sky-400" },
  { icon: Instagram, href: "#", color: "text-pink-500 dark:text-pink-400" },
  { icon: Linkedin, href: "#", color: "text-blue-700 dark:text-blue-500" },
  { icon: Github, href: "#", color: "text-gray-800 dark:text-gray-300" },
];

export const services = [
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

export const contactInfo = [
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

export const experience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop",
    position: "Senior Full-Stack Developer",
    type: "Remote",
    startDate: "Jan 2022",
    endDate: "Present",
    current: true,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
    description:
      "Lead development of enterprise web applications, mentor junior developers, and architect scalable solutions for 100k+ users.",
    keyFeatures: [
      {
        icon: TrendingUp,
        title: "Performance Optimization",
        description:
          "Improved application load times by 65% through code splitting and lazy loading implementation.",
      },
      {
        icon: Users,
        title: "Team Leadership",
        description:
          "Led a team of 8 developers, conducted code reviews, and established best practices.",
      },
      {
        icon: Target,
        title: "Project Delivery",
        description:
          "Successfully delivered 12+ major features on time with 99.9% uptime.",
      },
      {
        icon: Award,
        title: "Recognition",
        description:
          "Received 'Developer of the Year' award for outstanding contributions to the platform.",
      },
    ],
  },
  {
    id: 2,
    company: "StartupXYZ",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop",
    position: "Frontend Developer",
    type: "Onsite",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    current: false,
    technologies: ["React", "JavaScript", "Sass", "Firebase", "Figma"],
    description:
      "Built responsive web applications from scratch, collaborated with design team, and improved performance by 40%.",
    keyFeatures: [
      {
        icon: Star,
        title: "UI/UX Excellence",
        description:
          "Designed and implemented user interfaces that increased user engagement by 45%.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Rate",
        description:
          "Optimized checkout flow resulting in 30% increase in conversion rates.",
      },
      {
        icon: Users,
        title: "Cross-functional Collaboration",
        description:
          "Worked closely with designers and product managers to deliver pixel-perfect implementations.",
      },
    ],
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=60&h=60&fit=crop",
    position: "Junior Web Developer",
    type: "Hybrid",
    startDate: "Aug 2019",
    endDate: "May 2020",
    current: false,
    completed: true,
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    description:
      "Developed custom WordPress themes, maintained client websites, and learned modern development practices.",
    keyFeatures: [
      {
        icon: Globe,
        title: "Client Projects",
        description:
          "Successfully delivered 25+ client websites with custom WordPress themes.",
      },
      {
        icon: TrendingUp,
        title: "Skill Development",
        description:
          "Rapidly learned modern JavaScript frameworks and development methodologies.",
      },
      {
        icon: Target,
        title: "Quality Assurance",
        description:
          "Maintained 100% client satisfaction rate through thorough testing and support.",
      },
    ],
  },
];

// Education data
export const education = [
  {
    id: 1,
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    gpa: "3.8/4.0",
    startDate: "2015",
    endDate: "Present",
    current: true,
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
  },
  {
    id: 2,
    institution: "FreeCodeCamp",
    degree: "Full Stack Web Development Certification",
    gpa: "4.50/5.00",
    startDate: "2018",
    endDate: "2019",
    current: false,
    completed: true,
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop",
  },
];

// Courses data
export const courses = [
  {
    name: "Advanced React Patterns",
    provider: "Epic React by Kent C. Dodds",
    year: "2023",
    certificate: true,
    certificateUrl: "https://yourdomain.com/certificates/react-patterns.pdf",
  },
  {
    name: "AWS Solutions Architect",
    provider: "Amazon Web Services",
    year: "2022",
    certificate: true,
    certificateUrl: "https://yourdomain.com/certificates/aws-solutions.pdf",
  },
  {
    name: "UI/UX Design Fundamentals",
    provider: "Google UX Design Certificate",
    year: "2021",
    certificate: true,
    certificateUrl: "https://yourdomain.com/certificates/ui-ux.pdf",
  },
];
