export interface Project {
  id: number;
  title: string;
  category: string;
  tagline: string;

  gradFrom: string;
  gradTo: string;
  accent: string;

  github: string;
  demo: string;

  description: string;

  tech: string[];
  features: string[];
  highlights: string[];
}

export interface ThemeType {
  fg: string;
  fg2: string;
  fg3: string;
  fg4: string;
  fg5: string;
  fg6: string;

  border: string;
  borderMd: string;
  borderLg: string;

  card: string;
  cardHov: string;
  cardShadow: string;

  navBg: string;
  menuBg: string;

  termBg: string;
  termHead: string;

  codeNum: string;
  codeOn: string;
  codeOff: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initial: string;
  color: string;
  rating: number;
}