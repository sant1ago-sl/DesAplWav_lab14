import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Explora mi coleccion de proyectos de desarrollo web y aplicaciones",
  openGraph: {
    title: "Proyectos - Portafolio",
    description: "Explora mi coleccion de proyectos de desarrollo web",
    images: ["/og-projects.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#eff6ff_100%)]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Mis Proyectos</h1>
        <p className="mb-12 text-lg text-gray-600">
          Una coleccion de proyectos en los que he trabajado
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
