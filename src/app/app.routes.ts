import { Routes } from '@angular/router';
import { SectionAboutMe } from './Components/section-about-me/section-about-me';
import { SectionSkills } from './Components/section-skills/section-skills';
import { SectionProjects } from './Components/section-projects/section-projects';
import { SectionTechnology } from './Components/section-technology/section-technology';

export const routes: Routes = [
  {
    path: '',
    component: SectionAboutMe,
    title: 'Sobre mí | Braian Dev'
  },
  {
    path: 'habilidades',
    component: SectionSkills,
    title: 'Habilidades | Braian Dev'
  },
  {
    path: 'proyectos',
    component: SectionProjects,
    title: 'Proyectos | Braian Dev'
  },
  {
    path: 'tecnologias',
    component: SectionTechnology,
    title: 'Tecnologías | Braian Dev'
  },
  {
    path: 'about-me',
    redirectTo: ''
  },
  {
    path: 'skills',
    redirectTo: 'habilidades'
  },
  {
    path: 'projects',
    redirectTo: 'proyectos'
  },
  {
    path: 'technology',
    redirectTo: 'tecnologias'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
