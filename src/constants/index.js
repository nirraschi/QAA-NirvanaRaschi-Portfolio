import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  code,
  code2,
  censys,
  playwright,
  cypress,
  postman,
  sql,

  carrent,
  jobit,
  tripguide,
  threejs,
  shopify,
  productos,
  jira,
  e2e,
  ui,
  portfolio

} from "../assets";

export const navLinks = [
  {
    id: "sobremi",
    title: "Sobre mi",
  },
  {
    id: "experiencia",
    title: "Experiencias",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "QA Manual Testing",
    icon: web,
  },
  {
    title: "Test Automation",
    icon: mobile,
  },
  {
    title: "API & Database Testing",
    icon: backend,
  },
  {
    title: "Developer Skills (React, JS)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Playwright",
    icon: playwright,
  },

  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "React JS",
    icon: reactjs,
  },


  {
    name: "SQL",
    icon: sql,
  },

  {
    name: "git",
    icon: git,
  },
    {
    name: "Cypress",
    icon: cypress,
  }

];

const experiences = [
  {
    title: "QA Manual",
    company_name: "Censys S.A",
    icon: censys,
    iconBg: "#fff",
    date: "May 2023 - Ene 2025",
    points: [
      "Como QA Manual en la empresa de software interbancario Censys, trabajé en un equipo crítico con metodología ágil Kanban, orientado al cumplimiento de normas del BCRA.", 

"Realicé Análisis de requerimientos funcionales,  diseño de casos de prueba en entornos críticos, con foco en procesos bancarios y normativas financieras.",

"Ejecución de pruebas funcionales, de regresión y performance bajo plazos ajustados y presión. Analisis de datos de pruebas. Preparación de entornos y datos de prueba.",

"Confección de documentos técnicos detallados. Administración y seguimiento de incidencias y tareas con herramientas de gestión de proyectos.",

"Coordinación activa con equipos multidisciplinarios para priorizar pruebas, gestionar riesgos, resolver conflictos y asegurar entregas de calidad.",

"Desarrollo de habilidades en pensamiento crítico, comunicación efectiva y trabajo bajo presión.",
"Adquirí expertise en procesos financieros y software bancario, aportando valor agregado en la detección temprana de defectos críticos.",
    ],
  },
  {
    title: "Global Learning - Testing Automation ",
    company_name: "Beca otorgada por Censys S.A",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Ago 2025 - Nov 2025",
    points: [
      "Bootcamp de testing automatizado con TypeScript y JavaScript utilizando herramientas como Playwright y Cypress. Desde pruebas unitarias a End-to-End testing.",
      "Testing de APIs con Postman e Insomnia. Migración de proyecto de JS a TS.",
      "Foco en buenas prácticas de automatización y patrones de diseño como Page Object Model. Integración de pruebas automatizadas en pipelines de CI/CD usando GitHub Actions."
    ],
  },
  {
    title: "Testing Manual",
    company_name: "Global Learning",
    icon: code,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Fundamentos de Testing, SDLC. Testing manual. Herramientas de gestión de proyectos. Pruebas de APIs.",

      "Habilidades desarrolladas: pensamiento sistémico, metodologías de testing, generación de datos de prueba, documentación de casos, seguimiento de bugs, testing funcional y no funcional.",
    ],
  },
  {
    title: "Bootcamp Programación Web Full Stack",
    company_name: "Soy Henry",
    icon: tesla,
    iconBg: "#383E56",
    date: "Nov 2022 - Abril 2023",
    points: [
      "Bootcamp de programación web full stack, donde trabajamos con tecnologías  y herramientas como Javascript / Typescript, React, Node.js, Maquedato y Estilado, SQL, Express, Redux, NoSQL.",
      "Desarrollo de aplicaciones web completas, como ecommerce, bibliotecas, integraciones con IA. Ciclo de vida del desarrollo de software, Testing Foundations y Testing Automatizado (JS, TS). TDD, BDD, Cucumber. Testing de API con Postman.",
      "Además de trabajar en habilidades técnicas, en Henry pusimos en práctica muchas habilidades blandas, como la comunicación asertiva, atención al detalle, razonamiento crítico y resolución de problemas, trabajo en equipo, colaboración, , adaptabilidad y aprendizaje continuo."


    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Quiero sumarme a un equipo buena onda, colaborativo y con ganas de crear cosas de calidad. Me encanta trabajar en entornos ágiles, donde haya comunicación abierta, se compartan ideas y siempre haya algo nuevo por aprender. Tengo experiencia en QA Manual, Automatización y desarrollo web, lo que me ayuda a ver el producto de forma integral y detectar mejoras desde el principio. Soy proactiva, detallista, curiosa y me adapto rápido a nuevas herramientas y metodologías. Mi objetivo es crecer junto al equipo, aportar soluciones, buena energía y resultados que realmente hagan la diferencia. Si te gusta mi perfil y pensás que puedo aportar a tu equipo, me encantaría charlar. Podés contactarme en la sección de abajo!",
    company: "Henry",

  },

];

const projects = [
  {
    name: "Automatización E2E - Playwright",
    description:
    "Proyecto de Automatización E2E con Playwright y BDD Objetivo del repositorio es probar aplicaciones web con dos enfoques distintos: TDD Playwright puro (playwright-test/) -> Tests rápidos, técnicos y orientados a CI/CD. Uso de @playwright/test. Casos como login, carrito de compras, etc. Y BDD con Cucumber (bdd/) -> Casos de prueba legibles para el equipo funcional. Escenarios escritos en Gherkin.",


    tags: [
      {
        name: "playwright",
        color: "blue-text-gradient",
      },
      {
        name: "Cucumber",
        color: "green-text-gradient",
      },
      {
        name: "GitHubActions",
        color: "pink-text-gradient",
      },
    ],
    image: e2e,
    source_code_link: "https://github.com/nirraschi/automation-e2e-example",
  },
  {
    name: "UI Automatization - Playwright",
    description:
      "Este repositorio contiene pruebas automatizadas con Playwright sobre la página https://letcode.in/, cubriendo múltiples interacciones con el DOM y escenarios de automatización. Se practican los siguientes conceptos: Estructura y organización: Page Object Model. Elementos básicos: Inputs, botones, select/dropdown, radio buttons, checkboxes y formularios completos. Alertas y diálogos. Navegación: Manejo de múltiples ventanas/pestañas, frames e iframes. Validación de elementos. Acciones avanzadas: Drag & drop, sort, multiselect y sliders. Sincronización: Esperas explícitas, implícitas y control de timeouts. Datos y visualización: Tablas simples/avanzadas, calendario, Shadow DOM. Subida y manejo de ficheros. Cada escenario sirve como laboratorio práctico para aprender y aplicar Playwright en casos reales.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Playwright",
        color: "green-text-gradient",
      },

    ],
    image: ui,
    source_code_link: "https://github.com/nirraschi/playwright-ui-automation-portfolio",
  },
  {
    name: "Portafolio Interactivo – Desarrollo Web",
    description:
      "Diseñé y desarrollé este portafolio utilizando **JavaScript, React, Three.js y Tailwind CSS**, buscando una experiencia visual atractiva y fluida. Incluye animaciones 3D, diseño responsive y componentes reutilizables, optimizando el rendimiento y la accesibilidad. Este proyecto me permitió combinar creatividad con buenas prácticas de desarrollo, y es el resultado de muchas horas de pruebas, mejoras y detalles… hechos por mí de principio a fin.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
            {
        name: "Javascript",
        color: "pink-text-gradient",
      },

    ],
    image: portfolio,
    source_code_link: "https://github.com/nirraschi/QAA-NirvanaRaschi-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };