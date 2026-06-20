import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projects } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.45),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
      <div className="container mx-auto px-4 py-12">
        <section className="mb-20 text-center">
          <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-[0_18px_50px_rgba(37,99,235,0.16)]">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
              sizes="128px"
            />
          </div>

          <h1 className="mb-4 font-sans text-4xl font-bold text-gray-900 md:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mb-6 text-xl text-blue-700 md:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-700">
            {personalInfo.description}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/about"
              className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-300"
            >
              Sobre Mi
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Proyectos Destacados
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
