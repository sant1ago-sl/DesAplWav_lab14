import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Explora mi coleccion de proyectos de desarrollo web y aplicaciones",
  openGraph: {
    title: "Proyectos - Portafolio",
    description: "Explora mi coleccion de proyectos de desarrollo web",
    images: ["/portfolio-visual.png"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-14">
          <h1 className="text-4xl font-semibold text-slate-950">Proyectos</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Una seleccion de trabajos y practicas que representan mi proceso.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
