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
  jira

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
      "Bootcamp Desarrollo FullStack (2022)",
    company: "Henry",

  },
  {
    testimonial:
      "Curso TypeScript + Testing (2024)",
    company: "Fundación Integrar",
  },
  {
    testimonial:
      "Soy autodidacta, aprendiendo principalmente a través de recursos en línea, tutoriales y documentación. Me especialicé en el stack MERN.",
    company: "Formación Autodidacta",
  },
];

const projects = [
  {
    name: "Green Kitchen: Soy Henry",
    description:
      "Es una aplicación de comidas donde se renderizan tarjetas con recetas de comida tomadas de una API pública, y se puede ordenar y filtrar según tipos de dietas y otros detalles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/nirraschi/ProyectoIndividual-Foods",
  },
  {
    name: "EcoSun: Henry Proyecto Final",
    description:
      "Aplicación web eCommerce desarrollada en un equipo de 8 integrantes utilizando Javascript, React, Node.js, Redux, Express, Bootstrap y CSS Puro entre otras tecnologías. Todas las funcionalidades.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aliaz9/frontend-pf/",
  },
  {
    name: "Mi Portafolio",
    description:
      "Este portafolio fue desarrollado con react, tailwindcss para los estilos y con librerías como three.js para las animaciones 3d.",
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
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nirraschi/Portfolio-Nirvana",
  },
];

export { services, technologies, experiences, testimonials, projects };