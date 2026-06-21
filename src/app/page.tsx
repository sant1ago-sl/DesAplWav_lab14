import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Layers3, Mail, Sparkles } from "lucide-react";
import CodePreview from "@/components/CodePreview";
import HeroScene from "@/components/HeroScene";
import ProjectCard from "@/components/ProjectCard";
import {
  focusAreas,
  personalInfo,
  profileSkills,
  profileStats,
  projects,
} from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.35),_transparent_22%),radial-gradient(circle_at_85%_15%,_rgba(196,181,253,0.28),_transparent_20%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)]">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal-up rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
                <Sparkles className="h-4 w-4" />
                Portafolio personal
              </div>

              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-slate-500">
                Santiago Salas
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-slate-950 md:text-6xl">
                Frontend en formacion.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Construyo interfaces limpias y sigo fortaleciendo mi perfil en
                desarrollo full-stack con una base cada vez mas solida.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal-up delay-1">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
                >
                  Ver proyectos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-100"
                >
                  Contacto
                  <Mail className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3 reveal-up delay-2">
                {profileStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="reveal-soft delay-1">
                <HeroScene />
              </div>
              <div className="reveal-up delay-2">
                <CodePreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal-up rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300">
                Perfil
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">
                Diseno, codigo y aprendizaje en equilibrio.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((area, index) => {
                const icons = [Layers3, BriefcaseBusiness, Sparkles];
                const Icon = icons[index] ?? Layers3;

                return (
                  <article
                    key={area.title}
                    className="reveal-up rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Tecnologias
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Tecnologias principales
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                Herramientas con las que estoy construyendo mi base como
                desarrollador, con especial interes en frontend.
              </p>
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-sky-600 transition hover:text-sky-700"
            >
              Ver perfil completo
            </Link>
          </div>

          <div className="reveal-up rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-6 md:p-8">
            <div className="flex flex-wrap gap-3">
              {profileSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Proyectos
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Proyectos destacados
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                Una seleccion breve de trabajos y practicas que muestran mi
                proceso y mi enfoque visual.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-sky-600 transition hover:text-sky-700"
            >
              Ver todos
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="reveal-up">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
