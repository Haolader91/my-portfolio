export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  overview: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  role: string;
  duration: string;
  teamSize: string;
  projectType: string;
  features: ProjectFeature[];
  challenges: string[];
  solutions: string[];
  gallery: string[];
}
