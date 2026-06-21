import type { Metadata } from "next";
import Image from "next/image";
import { aboutParagraphs, personalInfo, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Mi",
  description: `Conoce mas sobre ${personalInfo.name}, estudiante de TECSUP Lima y desarrollador en formacion.`,
};

const traits = [
  {
    title: "Como desarrollador",
    items: [
      "Full-stack en formacion",
      "Frontend y backend",
      "Interfaces limpias",
      "Aprendizaje continuo",
      "Resolver problemas",
    ],
  },
  {
    title: "Como creador",
    items: [
      "Python y Django",
      "React y Java",
      "Kotlin y MySQL",
      "Git y HTML/CSS",
      "n8n basico",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "HTML/CSS", "Interfaces limpias"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Java", "MySQL"],
  },
  {
    title: "Herramientas",
    items: ["Git", "Docker", "AWS", "n8n basico"],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f6f2] text-[#343434]">
      <section className="border-b border-[#ddd9cf]">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl reveal-up">
              <h1 className="text-[5rem] font-black leading-none tracking-tight text-[#343434] md:text-[7rem]">
                santiago.
              </h1>

              <p className="mt-6 text-2xl leading-10 text-[#6b6b6b] reveal-up delay-1">
                Estudiante de TECSUP Lima, enfocado principalmente en frontend
                y en construir interfaces cada vez mejores.
              </p>

              <div className="mt-10 space-y-5 text-lg leading-9 text-[#505050] reveal-up delay-2">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden reveal-soft delay-1">
              <div className="absolute bottom-10 left-12 h-24 w-24 rotate-[-10deg] rounded-2xl bg-[#f7c9b6]" />
              <div className="absolute bottom-16 left-28 h-20 w-20 rotate-[12deg] rounded-2xl bg-[#b8e3de]" />
              <div className="absolute bottom-4 left-44 h-16 w-16 rotate-[-8deg] rounded-2xl bg-[#f1d36f]" />
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="mt-10 border-t border-[#ddd9cf] pt-8 reveal-up delay-3">
            <div className="flex flex-wrap gap-5">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.slug}
                  className="overflow-hidden rounded-2xl border border-[#d9d5cc] bg-white p-2 shadow-sm"
                >
                  <div className="relative h-24 w-36 overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ddd9cf] bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {traits.map((group) => (
              <div key={group.title} className="reveal-up">
                <h2 className="text-4xl font-bold tracking-tight text-[#343434]">
                  {group.title}
                </h2>
                <ul className="mt-6 space-y-3 text-lg text-[#5f5f5f]">
                  {group.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold tracking-tight text-[#343434] reveal-up">
            Habilidades
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="reveal-up rounded-[1.75rem] border border-[#d9d5cc] bg-white p-6"
              >
                <h3 className="text-2xl font-bold text-[#343434]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f3efe7] px-4 py-2 text-sm text-[#4d4d4d]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
