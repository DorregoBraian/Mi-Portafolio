import { Component, computed, signal } from '@angular/core';
import type { CircuitTick, ProjectConnection, ProjectItem } from '../../Interface';

const STAGE_SIZE = 860;
const STAGE_CENTER = STAGE_SIZE / 2;
const NODE_RADIUS = 310;

@Component({
  imports: [],
  selector: 'app-section-projects',
  styleUrl: './section-projects.css',
  templateUrl: './section-projects.html',
})
export class SectionProjects {
  readonly projects: ProjectItem[] = [
    {
      id: 'extension-vs-file-architect',
      title: 'File Architect',
      category: 'Developer Tooling · Visual Studio',
      year: '2026',
      summary:
        'Extensión para Visual Studio que genera esqueletos .NET con arquitecturas Hexagonal, Clean o MVC, vista previa y configuración inicial.',
      technologies: ['C#', 'WPF', '.NET Framework', 'Visual Studio SDK'],
      image: '/projects/file-architect.png',
      accent: 'violet',
      repoUrl: 'https://github.com/DorregoBraian/ExtensionVSFileArchitect',
    },
    {
      id: 'reset-programs',
      title: 'Reset Programs',
      category: 'Desktop · Automatización',
      year: '2026',
      summary: 'Prepará un Windows limpio e instalá tus programas habituales con WinGet.',
      technologies: ['PowerShell', 'Windows Forms', 'WinGet', 'JSON'],
      image: '/projects/reset-programs.jpg',
      accent: 'green',
      repoUrl: 'https://github.com/DorregoBraian/winget-bundle-ninite',
    },
    {
      id: 'ropastore',
      title: 'RopaStore',
      category: 'Frontend · E-commerce',
      year: '2024',
      summary: 'Tienda de ropa con catálogo, filtros, carrito, favoritos y Firebase.',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Bootstrap'],
      image: '/projects/ropastore.jpg',
      accent: 'cyan',
      demoUrl: 'https://dorregobraian.github.io/Proyecto-Ecommerce-con-Angular-17/',
      repoUrl: 'https://github.com/DorregoBraian/Proyecto-Ecommerce-con-Angular-17',
    },
    {
      id: 'venta-videojuegos',
      title: 'Venta de videojuegos',
      category: 'Full Stack · E-commerce',
      year: '2024',
      summary: 'Tienda estilo Steam con Angular y microservicios en C#/.NET Core.',
      technologies: ['Angular', 'C#/.NET', 'REST', 'xUnit'],
      image: '/projects/videojuegos.jpg',
      accent: 'red',
      demoUrl: 'https://dorregobraian.github.io/Proyecto-Venta-Videojuegos',
      repoUrl: 'https://github.com/DorregoBraian/Proyecto-Venta-Videojuegos',
    },
    {
      id: 'pokecardstore',
      title: 'PokeCardStore',
      category: 'Frontend · Catálogo',
      year: '2023',
      summary: 'Catálogo de cartas Pokémon con filtros, favoritos y consumo de PokeAPI.',
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'PokeAPI'],
      image: '/projects/pokecardstore.jpg',
      accent: 'violet',
      demoUrl: 'https://dorregobraian.github.io/PokeCardStore/',
      repoUrl: 'https://github.com/DorregoBraian/PokeCardStore',
    },
    {
      id: 'biblioteca-municipal',
      title: 'Biblioteca Municipal',
      category: 'Full Stack · Gestión',
      year: '2026',
      summary: 'Administración de libros, clientes, reservas, alquileres y stock.',
      technologies: ['.NET 6', 'EF Core', 'SQL Server', 'Swagger'],
      image: '/projects/biblioteca.jpg',
      accent: 'green',
      repoUrl: 'https://github.com/DorregoBraian/LibreriaMunicipal',
    },
    {
      id: 'simulacion-hormigas',
      title: 'Simulación de hormigas',
      category: 'Investigación · HPC',
      year: '2021',
      summary: 'Simulación de colonias de hormigas con Computación de Altas Prestaciones.',
      technologies: ['HPC', 'Simulación', 'Investigación'],
      image: '/projects/simulacion-hormigas.svg',
      accent: 'red',
      repoUrl: 'https://github.com/DorregoBraian?tab=repositories',
      repoLabel: 'Ver repositorios',
    },
  ];

  readonly selectedId = signal<string | null>(null);
  readonly selectedProject = computed(
    () => this.projects.find((project) => project.id === this.selectedId()) ?? null,
  );

  readonly projectCountLabel = this.projects.length.toString().padStart(2, '0');

  private readonly nodePoints = this.projects.map((_, index) =>
    this.polar(-90 + (index * 360) / this.projects.length, NODE_RADIUS),
  );

  readonly innerHexagon = this.nodePoints
    .map((point) => {
      const x = STAGE_CENTER + (point.x - STAGE_CENTER) * 0.74;
      const y = STAGE_CENTER + (point.y - STAGE_CENTER) * 0.74;
      return `${this.round(x)},${this.round(y)}`;
    })
    .join(' ');

  readonly connections: ProjectConnection[] = this.projects.map((project, index) => {
    const nextProject = this.projects[(index + 1) % this.projects.length];
    const from = this.nodePoints[index];
    const to = this.nodePoints[(index + 1) % this.projects.length];

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const middleX = (from.x + to.x) / 2;
    const middleY = (from.y + to.y) / 2;
    const normalLength = Math.hypot(middleX - STAGE_CENTER, middleY - STAGE_CENTER) || 1;
    const normalX = ((middleX - STAGE_CENTER) / normalLength) * 18;
    const normalY = ((middleY - STAGE_CENTER) / normalLength) * 18;
    const raisedX = ((middleX - STAGE_CENTER) / normalLength) * 32;
    const raisedY = ((middleY - STAGE_CENTER) / normalLength) * 32;

    const point = (ratio: number, offsetX = 0, offsetY = 0) => ({
      x: from.x + dx * ratio + offsetX,
      y: from.y + dy * ratio + offsetY,
    });

    const first = point(0.16);
    const second = point(0.16, normalX, normalY);
    const third = point(0.38, normalX, normalY);
    const fourth = point(0.38, raisedX, raisedY);
    const fifth = point(0.62, raisedX, raisedY);
    const sixth = point(0.62, normalX, normalY);
    const seventh = point(0.84, normalX, normalY);
    const eighth = point(0.84);

    return {
      from: project.id,
      to: nextProject.id,
      path: [
        `M ${this.round(from.x)} ${this.round(from.y)}`,
        `L ${this.round(first.x)} ${this.round(first.y)}`,
        `L ${this.round(second.x)} ${this.round(second.y)}`,
        `L ${this.round(third.x)} ${this.round(third.y)}`,
        `L ${this.round(fourth.x)} ${this.round(fourth.y)}`,
        `L ${this.round(fifth.x)} ${this.round(fifth.y)}`,
        `L ${this.round(sixth.x)} ${this.round(sixth.y)}`,
        `L ${this.round(seventh.x)} ${this.round(seventh.y)}`,
        `L ${this.round(eighth.x)} ${this.round(eighth.y)}`,
        `L ${this.round(to.x)} ${this.round(to.y)}`,
      ].join(' '),
      junctionX: middleX + raisedX,
      junctionY: middleY + raisedY,
    };
  });

  readonly ticks: CircuitTick[] = Array.from({ length: 36 }, (_, index) => {
    const angle = ((index * 10 - 90) * Math.PI) / 180;
    const major = index % 3 === 0;
    const innerRadius = major ? 352 : 360;
    const outerRadius = 370;

    return {
      x1: STAGE_CENTER + Math.cos(angle) * innerRadius,
      y1: STAGE_CENTER + Math.sin(angle) * innerRadius,
      x2: STAGE_CENTER + Math.cos(angle) * outerRadius,
      y2: STAGE_CENTER + Math.sin(angle) * outerRadius,
      major,
    };
  });

  selectProject(project: ProjectItem): void {
    this.selectedId.set(project.id);
  }

  clearSelection(): void {
    this.selectedId.set(null);
  }

  isSelected(projectId: string): boolean {
    return this.selectedId() === projectId;
  }

  isConnectionActive(connection: ProjectConnection): boolean {
    const selected = this.selectedId();
    return selected !== null && (connection.from === selected || connection.to === selected);
  }

  private polar(angle: number, radius: number): { x: number; y: number } {
    const radians = (angle * Math.PI) / 180;
    return {
      x: STAGE_CENTER + Math.cos(radians) * radius,
      y: STAGE_CENTER + Math.sin(radians) * radius,
    };
  }

  private round(value: number): number {
    return Math.round(value * 10) / 10;
  }
}
