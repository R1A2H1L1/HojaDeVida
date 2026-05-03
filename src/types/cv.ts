export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startYear: number | null;
  endYear: number | null;
  current: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  context: string;
  link: string | null;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number | null;
  status: "completed" | "in-progress";
}

export interface CVData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  certifications: Certification[];
}
