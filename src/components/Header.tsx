import Link from "next/link";
import { BriefcaseBusiness, FolderGit2, Mail } from "lucide-react";

const links = [
  { href: "/about", label: "sobre mi" },
  { href: "/projects", label: "proyectos" },
  { href: "/", label: "inicio" },
  { href: "/contact", label: "contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#151515] text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-5">
        <Link href="/" className="text-4xl font-black leading-none tracking-tight">
          S
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://github.com/sant1ago-sl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition hover:text-white"
              aria-label="GitHub"
            >
              <FolderGit2 className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/santiagosalasperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness className="h-5 w-5" />
            </a>
            <a
              href="mailto:santiago.salas@tecsup.edu.pe"
              className="text-white/80 transition hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
