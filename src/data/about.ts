import {
  Facebook,
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
import { FaDiscord } from "react-icons/fa";

export const socialLinks = [
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/abdullahal5",
    color: "hover:text-neutral-900 dark:hover:text-white",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "https://discordapp.com/users/1050280128158109828",
    color: "hover:text-neutral-900 dark:hover:text-[#4C59F0]",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/fahim2006",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalfahin183@gmail.com",
    icon: Mail,
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/abdullahal.fahim.9421",
    color: "hover:text-[#0866FF] dark:hover:text-[#0866FF]",
  },
  // {
  //   name: "Twitter",
  //   icon: Twitter,
  //   href: "#",
  //   color: "hover:text-blue-500 dark:hover:text-blue-400",
  // },
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
    value: "01914049327",
    color: "text-pink-500 dark:text-pink-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "abdullahalfahin183@gmail.com",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Narayanganj, Dhaka",
    color: "text-red-500 dark:text-red-400",
  },
  {
    icon: Calendar,
    label: "Birthday",
    value: "Oct 19, 2006",
    color: "text-purple-500 dark:text-purple-400",
  },
];

export const experience = [
  {
    id: 1,
    company: "Ena Ema Technology",
    logo: "https://scontent.fdac147-1.fna.fbcdn.net/v/t39.30808-6/517618970_1235916548546086_1499583541101435772_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGJk3r69wit_Hj2aArb_rAbzyi9WHXpdtfPKL1Ydel21yDA5JGWtsPpIdTCdAcFRZbXo_dT_zv0c-dDdMDZRbyB&_nc_ohc=6cUdRGnluSsQ7kNvwGzSH4f&_nc_oc=AdmhRLGHB1zT884OX3SagCrb_5GwkYcwXyk_VhuM6P3RZw4AHUdRkn35q9IA-Tyf0IM&_nc_zt=23&_nc_ht=scontent.fdac147-1.fna&_nc_gid=BZeTkzh_vsjwfvlZKvgNwQ&oh=00_AfUJL0RbVs8onv5nbu_r3ddhSE_ikWr4S78PtqrYu6MtpA&oe=689684EA",
    position: "Backend Developer",
    type: "Remote",
    startDate: "Jan 2025",
    endDate: "Jul 2025",
    current: false,
    technologies: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "Prisma",
      "JWT",
      "AWS",
    ],
    description:
      "Built and optimized REST APIs using Node.js and Express for multiple live projects. Enhanced performance via query optimization and caching. Implemented secure role-based access using JWT.",
    keyFeatures: [
      {
        icon: TrendingUp,
        title: "API Performance",
        description:
          "Optimized REST API performance by reducing query response times with indexing and caching strategies.",
      },
      {
        icon: Users,
        title: "Collaboration & Reviews",
        description:
          "Collaborated in a cross-functional team, conducted code reviews, and promoted clean code practices.",
      },
      {
        icon: Target,
        title: "Timely Delivery",
        description:
          "Delivered multiple features across 5+ live projects, maintaining high reliability and minimal downtime.",
      },
      {
        icon: Award,
        title: "Achievement",
        description:
          "Recognized for technical impact and contribution to backend system scalability and security.",
      },
    ],
  },
  {
    id: 2,
    company: "Hamsfly limited",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQE0UDYpfnShgw/company-logo_200_200/company-logo_200_200/0/1731999612934/hams_fly_logo?e=1756944000&v=beta&t=ndwoe2Wm974RTA3LD6YFD-B8Lez8gYAS28gq_tfR-SM",
    position: "Junior Backend Developer",
    type: "Remote",
    startDate: "June 2024",
    endDate: "Sept 2024",
    current: false,
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "Firebase",
      "Figma",
      "Redux",
    ],
    description:
      "Developed scalable backend services using Node.js and Express, integrated third-party APIs, and collaborated with frontend and design teams to deliver production-ready features.",
    keyFeatures: [
      {
        icon: TrendingUp,
        title: "Backend Optimization",
        description:
          "Improved API performance and reduced response time by 35% through query optimization and code refactoring.",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description:
          "Worked closely with frontend developers and designers to ensure seamless integration and consistent data flow.",
      },
      {
        icon: Star,
        title: "Database Design",
        description:
          "Designed and maintained MongoDB schemas, improving data consistency and supporting business logic efficiently.",
      },
    ],
  },
];

// Education data
export const education = [
  {
    id: 1,
    institution: "Munshiganj Polytechnic Institute, Mirkadim, Munshiganj.",
    degree: "Diploma in Computer Science and Technology (CST).",
    description: "Currently studing in 4th semester.",
    gpa: "N/A",
    startDate: "Jan 2024",
    endDate: "Present",
    current: true,
    // logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
  },
  {
    id: 2,
    institution: "Quazi Mohiuddin Model High School, Rupganj",
    degree: "Secondary School Certificate (SSC).",
    description: "Completed high school level.",
    gpa: "4.50/5.00",
    startDate: "2018",
    endDate: "2019",
    current: false,
    completed: true,
    // logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop",
  },
];

// Courses data
export const courses = [
  {
    name: "Web Development Course",
    provider: "by programming hero",
    year: "July-Dec-2023",
    certificate: true,
    certificateUrl:
      "https://drive.google.com/file/d/15dknnenX7ftplvHv4O1f07x6ckUDkLd7/view",
  },
  {
    name: "Next Level Web Development",
    provider: "by programming hero",
    year: "May-Dec-2024",
    certificate: true,
    certificateUrl:
      "https://drive.google.com/file/d/1MBaHUbrCJ2Mp1ADQTZrj1SKsHobwgs8X/view",
  },
  {
    name: "Certificate of Steller",
    provider: "by programming hero",
    year: "jan 2025",
    certificate: true,
    certificateUrl:
      "https://drive.google.com/file/d/1BadosjyZp5bIgWjg44NtZ4W49PVWfzm-/view?usp=sharing",
  },
];
