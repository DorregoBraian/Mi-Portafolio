export interface TechItem {
  name: string;
  icon?: string;
  mono?: string;
  monoSmall?: boolean;
  description: string;
  bullets: string[];
  open?: boolean;
}

export interface TechGroup {
  title: string;
  variant: 'frontend' | 'backend' | 'database' | 'tools';
  items: TechItem[];
}
