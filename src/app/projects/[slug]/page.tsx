import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-sky-600 transition hover:text-sky-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a proyectos
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold text-slate-950">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
                  >
                    Ver demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-100"
                  >
                    Ver codigo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
