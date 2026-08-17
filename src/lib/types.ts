export interface Experience {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  skills: string[];
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  html: string;
}
