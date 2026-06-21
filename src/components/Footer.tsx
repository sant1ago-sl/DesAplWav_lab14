import { BriefcaseBusiness, FolderGit2, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto flex flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-900">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-slate-500">{personalInfo.title}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="GitHub"
          >
            <FolderGit2 className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
