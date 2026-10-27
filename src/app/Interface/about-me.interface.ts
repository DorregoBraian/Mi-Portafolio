export type Accent = 'red' | 'cyan' | 'green' | 'violet';

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
  accent: Accent;
}

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
  bullets: string[];
  accent: Accent;
  current?: boolean;
}

export interface EducationItem {
  title: string;
  place: string;
  period: string;
  icon: string;
}
