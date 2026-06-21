import type { Metadata } from "next";
import { BriefcaseBusiness, FolderGit2, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${personalInfo.name} para proyectos, colaboraciones o consultas.`,
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: `Habla con ${personalInfo.name} sobre desarrollo web, colaboraciones y oportunidades.`,
    images: ["/portfolio-visual.png"],
  },
};

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "sant1ago-sl",
    href: personalInfo.github,
    icon: FolderGit2,
  },
  {
    label: "LinkedIn",
    value: "santiagosalasperez",
    href: personalInfo.linkedin,
    icon: BriefcaseBusiness,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-14">
          <h1 className="text-4xl font-semibold text-slate-950">Contacto</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Si tienes una idea, una consulta o una oportunidad, puedes
            escribirme por cualquiera de estos medios o usar el formulario.
            Siempre estoy abierto a conversar sobre proyectos, colaboraciones o
            nuevas experiencias de aprendizaje.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm text-slate-500">{item.label}</p>
                  <p className="mt-1 text-slate-900">{item.value}</p>
                </a>
              );
            })}
          </div>

          <form
            action={`https://formsubmit.co/${personalInfo.email}`}
            method="POST"
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 md:p-8"
          >
            <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portafolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <h2 className="text-2xl font-semibold text-slate-950">
              Enviame un mensaje
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Completa el formulario y el mensaje llegara directamente a mi
              correo para poder responderte con mas facilidad.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-600" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-600" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-600" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500"
                placeholder="Cuentame sobre tu proyecto o consulta"
              />
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
