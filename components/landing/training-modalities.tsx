"use client";

import { Dumbbell, Zap, Wind, Flame } from "lucide-react";

const modalities = [
  {
    id: "musculacao",
    title: "Musculação",
    description: "Equipamentos biomecânicos premium para ganho de força e hipertrofia.",
    icon: Dumbbell,
  },
  {
    id: "boxe",
    title: "Boxe",
    description: "Treino de boxe profissional para técnica, cardio e defesa pessoal.",
    icon: Flame,
  },
  {
    id: "funcional",
    title: "Treino Funcional",
    description: "Movimentos naturais que trabalham o corpo todo com eficiência máxima.",
    icon: Wind,
  },
];

export function TrainingModalities() {
  return (
    <section id="modalities" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Modalidades Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Treinos especializados com o melhor da tecnologia e orientação profissional
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modalities.map((modality) => {
            const IconComponent = modality.icon;
            return (
              <div
                key={modality.id}
                className="group relative h-80 rounded-xl overflow-hidden bg-card border border-primary/20 hover:border-primary/60 transition-all duration-300"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-background/50 group-hover:from-primary/20 transition-all duration-300" />

                {/* Overlay image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent group-hover:via-background/40 transition-all duration-300" />

                {/* Icon with scale effect */}
                <div className="absolute top-6 right-6 p-4 rounded-lg bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 transform group-hover:scale-110">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {modality.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {modality.description}
                  </p>
                </div>

                {/* Scale effect on image hover */}
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
