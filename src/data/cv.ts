import type { CVData } from "@/types/cv";

export const cvData: CVData = {
  personal: {
    name: "Roller Andrés Hernández López",
    title: "Desarrollador Fullstack",
    location: "Medellín, Colombia",
    email: "roller.hernandezl@udea.edu.co",
    github: "https://github.com/R1A2H1L1",
    linkedin: "https://www.linkedin.com/in/roller-andres-hernandez-lopez",
    bio: "Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia, con experiencia práctica como desarrollador fullstack en Protección S.A. Me especializo en el backend con Java y Spring Boot usando programación reactiva (WebFlux/Project Reactor), arquitectura limpia y estructuras Gradle multi-módulo. También tengo experiencia en desarrollo frontend y en gestión de bases de datos relacionales y no relacionales.",
  },
  experience: [
    {
      company: "Protección S.A.",
      role: "Desarrollador Fullstack",
      location: "Medellín, Colombia",
      startDate: "Feb 2025",
      endDate: null,
      bullets: [
        "Desarrollo y mantenimiento de microservicios en Java/Spring Boot con programación reactiva (WebFlux/Project Reactor) bajo arquitectura limpia.",
        "Implementación de migraciones de base de datos con Flyway y gestión de integraciones con servicios externos (ASPEN, AFP Core).",
        "Participación activa en pipelines CI/CD, pruebas automatizadas con Serenity BDD/Cucumber y cobertura con JaCoCo.",
      ],
    },
  ],
  education: [
    {
      institution: "Universidad de Antioquia",
      degree: "Ingeniería de Sistemas",
      location: "Medellín, Colombia",
      startYear: 2023,
      endYear: 2027,
      current: true,
    },
    {
      institution: "Institución Educativa Joaquín Cárdenz Gómez",
      degree: "Bachiller",
      location: "Colombia",
      startYear: null,
      endYear: 2019,
      current: false,
    },
  ],
  skills: [
    {
      category: "Lenguajes",
      items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "WebFlux", "Project Reactor", "React"],
    },
    {
      category: "Bases de datos",
      items: ["PostgreSQL", "NoSQL", "Flyway"],
    },
    {
      category: "Herramientas",
      items: ["Gradle", "Docker", "Git", "JaCoCo"],
    },
    {
      category: "Testing",
      items: ["JUnit", "Mockito", "Serenity BDD", "Cucumber"],
    },
    {
      category: "Cloud / DevOps",
      items: ["AWS", "CloudWatch", "S3", "SQS", "API Gateway", "Kubernetes"],
    },
  ],
  projects: [
    {
      name: "Simulador Smurfit Kappa",
      description:
        "Microservicio de simulación pensional para 29 beneficiarios del cliente Smurfit Kappa, con cálculos actuariales y regímenes pensionales.",
      context: "Protección S.A.",
      link: null,
    },
    {
      name: "Simulador Macrocomplemento",
      description:
        "Simulador de acumulación de ahorros periódicos usando programación reactiva con Spring Boot y WebFlux.",
      context: "Protección S.A.",
      link: null,
    },
    {
      name: "Notas",
      description:
        "Proyecto universitario con integración de SonarCloud para análisis de calidad de código y cobertura de pruebas con JaCoCo.",
      context: "Universidad de Antioquia",
      link: null,
    },
    {
      name: "LifeTracker",
      description:
        "Aplicación de bienestar con backend en Spring Boot y frontend en React/TypeScript para seguimiento de hábitos personales.",
      context: "Proyecto personal",
      link: null,
    },
  ],
  certifications: [
    {
      name: "AWS Cloud",
      issuer: "Ubits",
      year: null,
      status: "in-progress",
    },
  ],
};
