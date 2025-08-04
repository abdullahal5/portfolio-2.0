import { IProject } from "@/types";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Health Care",
    subtitle: "Full-Stack React Application",
    description:
      "A modern, full-featured healthcare web application designed to provide trusted medical services and information to patients. The platform offers a seamless user experience for booking appointments, exploring medical specialties, and understanding treatment processes — all while emphasizing patient safety, comfort, and care quality.",
    coverImage:
      "https://res.cloudinary.com/dhcjdfpf7/image/upload/v1754321667/portfolio-proejects/Blue_Simple_Geometric_Project_Presentation_ewsv1l.png",
    category: "Web Application",
    type: "full stack",
    technology: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    ],
    liveUrl: "https://healthcare-client.vercel.app",
    githubUrl: "https://github.com/abdullahal5/healthcare-client",
    duration: "3 months",
    role: "Full-Stack Developer",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    team: "Solo Project",
    challenges: [
      {
        title: "Secure Patient Data Handling",
        description:
          "Ensuring HIPAA-compliant handling and storage of sensitive patient information was a major challenge during development.",
        solution:
          "Implemented JWT-based authentication and role-based access control (RBAC). Used HTTPS, data validation, and encryption to secure data at rest and in transit.",
      },
      {
        title: "Real-time Appointment and Slot Updates",
        description:
          "Keeping appointment availability updated in real-time for doctors and patients was critical to avoid scheduling conflicts.",
        solution: "Used custome code and helps AI for real-time updates.",
      },
      {
        title: "Complex Dashboard and Role Management",
        description:
          "Designing dynamic dashboards tailored to different roles (admin, doctor, patient) while keeping the UI intuitive.",
        solution:
          "Created modular components and used Redux-toolkit for global state management with middleware for persisting role-based preferences.",
      },
    ],
    features: [
      "Patient and Doctor profile management",
      "Role-based access control (Admin, Doctor, Patient)",
      "Appointment booking and slot management",
      "Real-time updates of slots",
      "Prescription upload and access",
      "Payment history tracking",
      "Secure authentication with JWT",
      "Admin dashboard with analytics",
      "Responsive design",
      "SSL commerce payment integration",
    ],
    timeline: [
      {
        phase: "Requirement Gathering & Design",
        duration: "1 week",
        description:
          "Interviewed healthcare staff and created detailed wireframes with system flow diagrams.",
      },
      {
        phase: "Backend Development",
        duration: "3 weeks",
        description:
          "Developed REST APIs, user authentication, and RBAC with database schema using Postgres.",
      },
      {
        phase: "Frontend Development",
        duration: "4 weeks",
        description:
          "Built the dashboard and form flows using React, Redux-toolkit, and Tailwind CSS.",
      },
      {
        phase: "Testing & Deployment",
        duration: "1 week",
        description:
          "Tested locally across different scenarios and deployed the application using Vercel for production.",
      },
    ],
    date: "2025-08-04",
    featured: true,
  },
];
