import type { Metadata } from "next";
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_100%)]">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contacto</h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-600">
            Si tienes una idea, una vacante o un proyecto en mente, puedes
            escribirme por cualquiera de estos medios.
          </p>

          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Datos de contacto
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Email:</span>{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">GitHub:</span>{" "}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {personalInfo.github}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">LinkedIn:</span>{" "}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {personalInfo.linkedin}
                  </a>
                </p>
              </div>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Enviame un mensaje
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500"
                    placeholder="santiago.salas@tecsup.edu.pe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500"
                    placeholder="Cuentame sobre tu proyecto"
                  />
                </div>
                <a
                  href={`mailto:${personalInfo.email}?subject=Contacto%20desde%20portafolio`}
                  className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                  Enviar por Email
                </a>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
