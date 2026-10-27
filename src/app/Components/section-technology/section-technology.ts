import { Component } from '@angular/core';
import type { TechGroup, TechItem } from '../../Interface';

@Component({
  imports: [],
  selector: 'app-section-technology',
  styleUrl: './section-technology.css',
  templateUrl: './section-technology.html',
})
export class SectionTechnology {
  readonly groups: TechGroup[] = [
    {
      title: 'Frontend',
      variant: 'frontend',
      items: [
        {
          name: 'Angular',
          mono: 'A',
          description:
            'Desarrollo de aplicaciones SPA modulares y escalables con Angular. Trabajo con componentes reutilizables, rutas protegidas y una arquitectura clara que facilita el mantenimiento.',
          bullets: [
            'Componentes standalone, servicios e inyección de dependencias.',
            'Formularios reactivos con validaciones y control de estado.',
            'Consumo de APIs REST con HttpClient y manejo de errores.',
            'Rutas protegidas, lazy loading y navegación SPA.',
            'Optimización del rendimiento y estructura modular.',
          ],
        },
        {
          name: 'TypeScript',
          icon: 'typescript',
          description:
            'Uso TypeScript para construir código más seguro, legible y mantenible. El tipado estático me permite detectar errores a tiempo y refactorizar con confianza.',
          bullets: [
            'Tipos, interfaces, enums y genéricos.',
            'Programación orientada a objetos y principios SOLID.',
            'Tipado estricto en servicios, modelos y componentes.',
            'Refactorización segura y mejor autocompletado.',
            'Integración completa con Angular y APIs.',
          ],
        },
        {
          name: 'JavaScript',
          icon: 'javascript',
          description:
            'Base sólida de JavaScript moderno para crear interactividad, manipular el DOM y conectar la interfaz con servicios externos.',
          bullets: [
            'ES6+: promesas, async/await y módulos.',
            'Manipulación del DOM y manejo de eventos.',
            'Consumo de APIs REST y procesamiento de JSON.',
            'Funciones de orden superior y programación funcional.',
            'Depuración y buenas prácticas de rendimiento.',
          ],
        },
        {
          name: 'Bootstrap',
          icon: 'bootstrap',
          description:
            'Construcción de interfaces responsive y consistentes con Bootstrap, combinando su sistema de grillas con estilos personalizados.',
          bullets: [
            'Sistema de grillas, utilidades y breakpoints.',
            'Componentes: modales, navbar, cards y formularios.',
            'Personalización de variables y estilos propios.',
            'Diseño adaptable a móvil, tablet y escritorio.',
            'Accesibilidad y estructura semántica.',
          ],
        },
      ],
    },
    {
      title: 'Backend',
      variant: 'backend',
      items: [
        {
          name: '.NET',
          mono: '.NET',
          monoSmall: true,
          description:
            'Desarrollo de APIs y servicios backend con .NET, aplicando una arquitectura en capas y buenas prácticas para soluciones mantenibles.',
          bullets: [
            'ASP.NET Core Web API y controladores REST.',
            'Arquitectura en capas y separación de responsabilidades.',
            'Inyección de dependencias y configuración por entornos.',
            'Entity Framework Core y acceso a datos.',
            'Autenticación, autorización y manejo global de errores.',
          ],
        },
        {
          name: 'C#',
          mono: 'C#',
          description:
            'C# es mi lenguaje principal para backend. Lo utilizo para implementar lógica de negocio, servicios y soluciones orientadas a objetos.',
          bullets: [
            'Programación orientada a objetos y principios SOLID.',
            'LINQ, colecciones y expresiones lambda.',
            'Programación asíncrona con async/await.',
            'Manejo de excepciones y validaciones.',
            'Pruebas unitarias y código limpio.',
          ],
        },
      ],
    },
    {
      title: 'Bases de datos',
      variant: 'database',
      items: [
        {
          name: 'SQL Server',
          icon: 'database-fill',
          description:
            'Diseño y administración de bases de datos relacionales en SQL Server, desde el modelado hasta la optimización de consultas.',
          bullets: [
            'Modelado relacional, claves y relaciones.',
            'Consultas SQL, joins y procedimientos almacenados.',
            'Índices y optimización de rendimiento.',
            'Funciones, triggers y vistas.',
            'Respaldos, seguridad y control de acceso.',
          ],
        },
        {
          name: 'PostgreSQL',
          mono: 'PG',
          description:
            'Trabajo con PostgreSQL para almacenar y consultar información en aplicaciones modernas, aprovechando sus funciones avanzadas.',
          bullets: [
            'Modelado de datos y relaciones.',
            'Consultas avanzadas, CTEs y funciones de ventana.',
            'Funciones, triggers y tipos de datos avanzados.',
            'Optimización de consultas e índices.',
            'Integración con servicios backend y ORMs.',
          ],
        },
      ],
    },
    {
      title: 'Herramientas',
      variant: 'tools',
      items: [
        {
          name: 'GitHub',
          icon: 'github',
          description:
            'Uso GitHub para versionar código, colaborar en equipo y automatizar procesos de integración y despliegue.',
          bullets: [
            'Repositorios, ramas y flujo de trabajo colaborativo.',
            'Pull requests, revisiones y resolución de conflictos.',
            'GitHub Actions para CI/CD.',
            'Gestión de issues, labels y proyectos.',
            'Documentación con README y wikis.',
          ],
        },
        {
          name: 'Docker',
          icon: 'box-seam-fill',
          description:
            'Creación de entornos reproducibles con contenedores Docker para desarrollar, probar y desplegar aplicaciones.',
          bullets: [
            'Dockerfiles e imágenes optimizadas.',
            'Docker Compose para servicios múltiples.',
            'Volúmenes, redes y variables de entorno.',
            'Despliegue de entornos de desarrollo y producción.',
            'Buenas prácticas de seguridad y tamaño de imagen.',
          ],
        },
        {
          name: 'Postman',
          icon: 'send-fill',
          description:
            'Pruebas y documentación de APIs con Postman, verificando endpoints, payloads y respuestas antes de integrarlos.',
          bullets: [
            'Colecciones, carpetas y entornos.',
            'Pruebas automatizadas con scripts.',
            'Validación de códigos de estado y respuestas.',
            'Variables de entorno y autenticación.',
            'Documentación y ejemplos de endpoints.',
          ],
        },
        {
          name: 'Git',
          icon: 'git',
          description:
            'Control de versiones con Git para mantener un historial claro y trabajar de forma segura en equipo.',
          bullets: [
            'Creación y gestión de ramas.',
            'Commits atómicos y mensajes claros.',
            'Merge, rebase y resolución de conflictos.',
            'Etiquetas y versionado.',
            'Buenas prácticas de colaboración.',
          ],
        },
        {
          name: 'Visual Studio Code',
          icon: 'code-square',
          description:
            'Mi editor principal para desarrollo web. Lo configuro con extensiones y atajos para mantener un flujo de trabajo ágil.',
          bullets: [
            'Extensiones para Angular, TypeScript y .NET.',
            'Depuración integrada y breakpoints.',
            'Terminal integrada y tareas.',
            'Formateo, linting y snippets.',
            'Personalización de temas y atajos.',
          ],
        },
        {
          name: 'Visual Studio',
          mono: 'VS',
          description:
            'IDE para el desarrollo de soluciones .NET, con herramientas integradas de depuración, pruebas y publicación.',
          bullets: [
            'Creación y administración de soluciones y proyectos.',
            'Depuración avanzada y análisis de código.',
            'Integración con SQL Server y Entity Framework.',
            'Pruebas unitarias y de integración.',
            'Publicación y perfiles de despliegue.',
          ],
        },
      ],
    },
  ];

  onToggle(item: TechItem, event: Event): void {
    item.open = (event.target as HTMLDetailsElement).open;
  }
}
