export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  sourceUrl: string;
  tags: string[];
  category: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
  pdfUrl: string;
  skills: string[];
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}