import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 transition hover:text-blue-600"
          >
            {personalInfo.name}
          </Link>

          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 transition hover:text-blue-600"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-700 transition hover:text-blue-600"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 transition hover:text-blue-600"
              >
                Sobre Mi
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 transition hover:text-blue-600"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
