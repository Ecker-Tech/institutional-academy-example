import { Clock } from 'lucide-react';

const collectiveClasses = [
  { time: '06:00', name: 'Funcional' },
  { time: '07:15', name: 'Funcional' },
  { time: '18:00', name: 'Boxe' },
  { time: '19:30', name: 'Boxe' },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-lime-400 mb-4 text-balance uppercase font-display">
            Sua Rotina, Seus Horários. Treine Sem Desculpas
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Segunda a sexta — estrutura disponível ao longo de todo o dia
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Column 1 — Musculação: Horário Livre */}
          <div className="rounded-xl border border-primary/30 bg-card p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                <Clock className="w-4 h-4" />
                Horário Livre
              </div>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Musculação
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Treine no seu ritmo, sem horário marcado. A sala de musculação fica disponível durante todo o funcionamento da academia.
              </p>
            </div>
            <div className="mt-8 p-5 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Seg – Sex</p>
              <p className="text-4xl font-black text-primary">06:00 – 22:00</p>
              <p className="text-sm text-slate-400 mt-2">Sábados: 08:00 – 14:00</p>
            </div>
          </div>

          {/* Column 2 — Aulas Coletivas */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 space-y-1">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Aulas Coletivas
              </h3>
              <p className="text-slate-400 text-sm">Horários fixos — Segunda a Sexta</p>
            </div>

            {/* Timeline */}
            <ol className="relative border-l border-primary/30 space-y-6 pl-6">
              {collectiveClasses.map((item, index) => (
                <li key={index} className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[1.65rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex items-baseline gap-4">
                    <span className="text-primary font-bold text-lg tabular-nums w-14 shrink-0">
                      {item.time}
                    </span>
                    <span className="text-white font-semibold text-lg">{item.name}</span>
                  </div>
                </li>
              ))}
            </ol>

            {/* Saturday notice */}
            <div className="mt-8 p-4 rounded-lg bg-zinc-900 border border-border">
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">Sábados:</span>{' '}
                Aulas coletivas <span className="text-primary font-semibold">não ocorrem</span>. Musculação funciona das 08:00 às 14:00.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
