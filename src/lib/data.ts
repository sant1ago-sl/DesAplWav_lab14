import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Plataforma E-commerce",
    description:
      "Plataforma de comercio electronico con Next.js, Stripe y PostgreSQL",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/usuario/ecommerce",
    featured: true,
  },
  {
    slug: "task-manager",
    title: "Aplicacion de Tareas",
    description:
      "Aplicacion de gestion de tareas con autenticacion y tiempo real",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/usuario/task-manager",
    featured: true,
  },
  {
    slug: "weather-dashboard",
    title: "Panel del Clima",
    description: "Dashboard interactivo del clima con graficos y pronosticos",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/usuario/weather-app",
    featured: false,
  },
];

export const personalInfo = {
  name: "Santiago Salas",
  title:
    "Estudiante de TECSUP | Desarrollador en Formacion | Apasionado por la Tecnologia",
  description:
    "Estudiante de 5to ciclo en TECSUP Lima, enfocado en desarrollo full-stack y aprendizaje continuo.",
  email: "santiago.salas@tecsup.edu.pe",
  github: "https://github.com/sant1ago-sl",
  linkedin: "https://www.linkedin.com/in/santiagosalasperez/",
  siteUrl: "https://my-portafolio-omega.vercel.app",
  avatar:
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const profileStats = [
  { value: "5to", label: "ciclo en TECSUP Lima" },
  { value: "11", label: "tecnologias en enfoque activo" },
  { value: "Frontend", label: "ruta de formacion principal" },
];

export const profileSkills = [
  "Python",
  "Django",
  "React",
  "Java",
  "Kotlin",
  "MySQL",
  "n8n Basico",
  "Git",
  "HTML/CSS",
  "AWS",
  "Docker",
];

export const focusAreas = [
  {
    title: "Frontend",
    description: "Interfaces limpias, visuales y funcionales.",
  },
  {
    title: "UI y experiencia",
    description: "Jerarquia visual, claridad y buena lectura.",
  },
  {
    title: "Aprendizaje",
    description: "Constancia para mejorar y adaptarme rapido.",
  },
];

export const aboutParagraphs = [
  "Soy estudiante de 5to ciclo en TECSUP Lima y me interesa construir soluciones de software utiles, claras y bien pensadas.",
  "Actualmente sigo fortaleciendo mi formacion en desarrollo full-stack con tecnologias como Python, Django, React, Java, Kotlin y MySQL.",
];
