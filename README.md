# Mi Portafolio - Braian Dorrego

Portafolio personal desarrollado con **Angular 22**, **TypeScript** y **Bootstrap 5**. Incluye secciones sobre mí, proyectos interactivos (ruleta de proyectos), habilidades técnicas, tecnologías y contacto.

## 🚀 Demo en GitHub Pages
[https://dorregobraian.github.io/Mi-Portafolio/](https://dorregobraian.github.io/Mi-Portafolio/)

---

## 📦 Despliegue en GitHub Pages

### Configuración manual (recomendada)

1. **Settings > Pages > Build and deployment > Source** → Seleccionar **GitHub Actions**
2. El workflow se ejecutará automáticamente en cada `push` a `master`

### Workflow de despliegue (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master ]
permissions:
  contents: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build -- --configuration production
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/portafolio-angular/browser
```

---

## 🛠 Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4300)
npm start

# Build de producción (salida en dist/portafolio-angular/browser)
npm run build
```

---

## 📁 Estructura principal
```
src/
├── app/
│   ├── Components/
│   │   ├── section-about-me/    # Sobre mí + Trayectoria
│   │   ├── section-projects/    # Ruleta de proyectos (7 proyectos)
│   │   ├── section-skills/      # Habilidades técnicas
│   │   └── section-technology/  # Stack tecnológico
│   ├── Interface/               # Tipos TypeScript
│   ├── app.css                  # Estilos globales + Navbar
│   ├── app.html                 # Layout principal
│   └── app.routes.ts            # Rutas
└── public/
    ├── projects/                # Imágenes de proyectos
    └── cv-braian-dorrego.pdf    # CV descargable
```

---

## 🎯 Proyectos incluidos
1. **File Architect** (ExtensionVSFileArchitect) – Extensión VS para arquitecturas .NET
2. **Reset Programs** – Instalador Windows con WinGet
3. **RopaStore** – E-commerce de indumentaria
4. **PokeCardStore** – Tienda de cartas Pokémon
5. **Simulación de Hormigas** – Algoritmo colonia de hormigas
6. **E-commerce Videojuegos** – Full stack Angular + .NET
7. **Biblioteca Municipal** – Sistema de gestión

---

## 📄 Licencia
Uso personal / educativo. Contacto: `rayan22dorrego@gmail.com`