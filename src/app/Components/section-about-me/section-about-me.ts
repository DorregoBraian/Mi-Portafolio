import { Component } from '@angular/core';
import type { EducationItem, Pillar, Stat, TimelineItem } from '../../Interface';

@Component({
  selector: 'app-section-about-me',
  styleUrl: './section-about-me.css',
  templateUrl: './section-about-me.html',
})
export class SectionAboutMe {
  readonly stats: Stat[] = [
    {
      value: '+5',
      label: 'años de experiencia',
      detail: 'Formación, proyectos y trabajo profesional',
    },
    {
      value: '70%+',
      label: 'de la carrera',
      detail: 'Ingeniería en Informática · UNAJ',
    },
    {
      value: 'Full Stack',
      label: 'perfil técnico',
      detail: '.NET + Angular',
    },
  ];

  readonly pillars: Pillar[] = [
    {
      title: 'Backend .NET',
      description:
        'APIs REST, lógica de negocio y servicios con C#, ASP.NET Core y Entity Framework Core.',
      icon: 'server',
      accent: 'red',
    },
    {
      title: 'Frontend Angular',
      description:
        'Interfaces SPA con Angular y TypeScript, componentes reutilizables y diseño responsive.',
      icon: 'window-stack',
      accent: 'cyan',
    },
    {
      title: 'Datos',
      description: 'Modelado relacional, consultas y optimización en SQL Server y PostgreSQL.',
      icon: 'database-fill',
      accent: 'green',
    },
    {
      title: 'Arquitectura',
      description:
        'Microservicios, arquitectura hexagonal, CQRS y pruebas unitarias con xUnit y Moq.',
      icon: 'diagram-3',
      accent: 'violet',
    },
  ];

  readonly timeline: TimelineItem[] = [
    {
      period: '2026',
      title: 'ExtensionVSFileArchitect',
      place: 'Proyecto personal · Herramienta para Visual Studio',
      description:
        'Extensión que prepara el esqueleto de soluciones .NET con arquitecturas Hexagonal, Clean o MVC, incluyendo proyectos, carpetas, referencias y configuración inicial.',
      bullets: [
        'Previsualización del plan antes de generar y validaciones para proteger la solución existente.',
        'Generación asíncrona con progreso, cancelación y limpieza ante errores; lógica central separada en FileArchitect.Core.',
        'Desarrollada con C#, WPF y Visual Studio SDK; admite EF Core y AutoMapper opcional.',
      ],
      accent: 'violet',
    },
    {
      period: '07/2026 — 09/2026',
      title: 'Reset Programs',
      place: 'Proyecto personal · Automatización Windows',
      description:
        'Instalador gráfico para preparar una instalación limpia de Windows e instalar los programas habituales con WinGet.',
      bullets: [
        'Interfaz dark/gamer en PowerShell + Windows Forms, con programas agrupados por categoría.',
        'Instalación masiva con WinGet, detección de programas ya instalados, resumen y logs.',
        'Configuración declarativa en JSON y actualización de programas con winget upgrade --all.',
      ],
      accent: 'green',
    },
    {
      period: '05/2024 — 09/2026',
      title: 'Desarrollador Full Stack',
      place: 'Consultora IT · Proyecto para Correo Argentino',
      description:
        'Desarrollo de soluciones para la gestión logística y administrativa, con foco en APIs REST y procesos críticos.',
      bullets: [
        'Endpoints RESTful en .NET Core para cálculo de costos de envío, notificaciones y packing.',
        'Módulo de carga masiva de SKUs y órdenes desde CSV, reduciendo el tiempo de ingreso un 80%.',
        'Arquitectura limpia y hexagonal, ceremonias Scrum y trabajo colaborativo.',
      ],
      accent: 'red',
    },
    {
      period: '07/2024 — 12/2024',
      title: 'Plataforma de venta de videojuegos',
      place: 'Proyecto personal · Full Stack',
      description:
        'E-commerce de videojuegos estilo Steam para aplicar un stack completo, desde la interfaz hasta los microservicios.',
      bullets: [
        'Frontend en Angular y backend en C#/.NET Core con microservicios.',
        'Comunicación entre servicios, tareas en segundo plano y pruebas con xUnit + Moq.',
      ],
      accent: 'cyan',
    },
    {
      period: '08/2024',
      title: 'E-commerce con Angular 17',
      place: 'Proyecto personal · Frontend',
      description:
        'Tienda de ropa online para practicar Angular, autenticación con Firebase y gestión de carrito y favoritos.',
      bullets: [
        'Catálogo con filtros por categoría, selector de moneda y vista de detalle del producto.',
        'Registro e inicio de sesión con Firebase Auth, foto de perfil en Storage y datos en Firestore.',
        'Angular 18.1 con standalone components, Bootstrap 5, Fake Store API y despliegue en GitHub Pages.',
      ],
      accent: 'green',
    },
    {
      period: '2023',
      title: 'PokeCardStore',
      place: 'Proyecto personal · Frontend',
      description:
        'Tienda/demo de cartas Pokémon que consume PokeAPI para explorar un catálogo dinámico y guardar favoritos.',
      bullets: [
        'Catálogo con filtros por región, tipo y color, paginación y vista de detalle.',
        'Favoritos en localStorage y formulario de contacto con validación.',
        'HTML, CSS, JavaScript, jQuery y Bootstrap 5; incluye una implementación alternativa en Vue 3.',
      ],
      accent: 'violet',
    },
    {
      period: '2021',
      title: 'Simulación de colonias de hormigas',
      place: 'Beca de investigación · UNAJ',
      description:
        'Participación en una beca para simular la obtención de alimentos en colonias de hormigas.',
      bullets: [
        'Aplicación de Computación de Altas Prestaciones (HPC).',
        'Trabajo presentado en el 9º Congreso Nacional de Ingeniería Informática/Sistemas de Información (CoNaIISI 2021).',
      ],
      accent: 'red',
    },
  ];

  readonly education: EducationItem[] = [
    {
      title: 'Ingeniería en Informática',
      place: 'Universidad Nacional Arturo Jauretche (UNAJ)',
      period: '2018 — Actualidad · +70% aprobado',
      icon: 'mortarboard',
    },
    {
      title: 'Python Full Stack',
      place: 'Codo a Codo GCBA',
      period: '2023',
      icon: 'braces',
    },
    {
      title: 'Seguridad de Redes e Informática y Hacking',
      place: 'Universidad Nacional Arturo Jauretche (UNAJ)',
      period: '2019',
      icon: 'shield-lock',
    },
    {
      title: 'Formación y Certificación en Lenguas Extranjeras',
      place: 'Beca Manuel Belgrano',
      period: '2022',
      icon: 'translate',
    },
  ];

  readonly strengths: string[] = [
    'Trabajo en equipo',
    'Comunicación',
    'Resolución de problemas',
    'Aprendizaje rápido',
    'Pensamiento analítico',
    'Responsabilidad',
    'Organización',
  ];
}
