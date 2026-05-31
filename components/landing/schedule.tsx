"use client";

import { Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const collectiveClasses = [
  { time: "06:00", name: "Funcional" },
  { time: "07:15", name: "Funcional" },
  { time: "18:00", name: "Boxe" },
  { time: "19:30", name: "Boxe" },
];

export function Schedule() {
  const { ref, isInView } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-background"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isInView ? "in-view" : ""}`}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-lime-400 mb-3 sm:mb-4 text-balance uppercase font-display">
            Sua Rotina, Seus Horários. Treine Sem Desculpas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Segunda a sexta — estrutura disponível ao longo de todo o dia
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Column 1 — Musculação: Horário Livre */}
          <div className="stagger-child rounded-lg sm:rounded-xl border border-primary/30 bg-card p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:border-primary/60 transition-all duration-300">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Horário Livre
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Musculação
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Treine no seu ritmo, sem horário marcado. A sala de musculação
                fica disponível durante todo o funcionamento da academia.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Seg – Sex
              </p>
              <p className="text-3xl sm:text-4xl font-black text-primary">
                06:00 – 22:00
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Sábados: 08:00 – 14:00
              </p>
            </div>
          </div>

          {/* Column 2 — Aulas Coletivas */}
          <div className="stagger-child rounded-lg sm:rounded-xl border border-border bg-card p-5 sm:p-6 md:p-8 hover:border-primary/40 transition-all duration-300">
            <div className="mb-4 sm:mb-6 space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Aulas Coletivas
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Horários fixos — Segunda a Sexta
              </p>
            </div>

            {/* Timeline */}
            <ol className="relative border-l border-primary/30 space-y-4 sm:space-y-6 pl-5 sm:pl-6">
              {collectiveClasses.map((item, index) => (
                <li key={index} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute left-[-1.4rem] sm:left-[-1.65rem] top-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="text-primary font-bold text-base sm:text-lg tabular-nums w-12 sm:w-14 shrink-0">
                      {item.time}
                    </span>
                    <span className="text-white font-semibold text-base sm:text-lg">
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            {/* Saturday notice */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg bg-zinc-900 border border-border">
              <p className="text-xs sm:text-sm text-slate-400">
                <span className="text-white font-semibold">Sábados:</span> Aulas
                coletivas{" "}
                <span className="text-primary font-semibold">não ocorrem</span>.
                Musculação funciona das 08:00 às 14:00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
