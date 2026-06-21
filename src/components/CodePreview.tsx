export default function CodePreview() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <div className="ml-3 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
          portafolio.tsx
        </div>
      </div>

      <div className="space-y-3 px-5 py-5 font-mono text-sm">
        <div className="text-sky-300">const developer = {"{"}</div>
        <div className="pl-5 text-slate-300">
          <span className="text-violet-300">name</span>:{" "}
          <span className="text-emerald-300">"Santiago Salas"</span>,
        </div>
        <div className="pl-5 text-slate-300">
          <span className="text-violet-300">focus</span>: [
          <span className="text-emerald-300">"frontend"</span>,{" "}
          <span className="text-emerald-300">"ui"</span>,{" "}
          <span className="text-emerald-300">"full-stack"</span>],
        </div>
        <div className="pl-5 text-slate-300">
          <span className="text-violet-300">stack</span>: [
          <span className="text-emerald-300">"Python"</span>,{" "}
          <span className="text-emerald-300">"React"</span>,{" "}
          <span className="text-emerald-300">"Java"</span>],
        </div>
        <div className="pl-5 text-slate-300">
          <span className="text-violet-300">estado</span>:{" "}
          <span className="text-emerald-300">"aprendiendo"</span>
        </div>
        <div className="text-sky-300">{"}"};</div>
      </div>
    </div>
  );
}
