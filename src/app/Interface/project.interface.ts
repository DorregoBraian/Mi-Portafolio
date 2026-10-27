import type { Accent } from './about-me.interface';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  technologies: string[];
  image: string;
  accent: Accent;
  demoUrl?: string;
  repoUrl?: string;
  repoLabel?: string;
}

export interface ProjectConnection {
  from: string;
  to: string;
  path: string;
  junctionX: number;
  junctionY: number;
}

export interface CircuitTick {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  major: boolean;
}
