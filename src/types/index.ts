interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface FeatureTimeline {
  phase: string;
  duration: string;
  description: string;
}

export interface IProject {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  category: string;
  type: string;
  technology: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  duration: string;
  role?: string;
  video?: string;
  team?: string;
  challenges?: Challenge[];
  features?: string[];
  timeline?: FeatureTimeline[];
  date: string;
  featured: boolean;
  demoUrl?: string;
}

