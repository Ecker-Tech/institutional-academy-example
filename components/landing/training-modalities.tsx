"use client";

import Image from "next/image";

const modalities = [
  {
    id: "musculacao",
    title: "Musculação",
    description: "Equipamentos biomecânicos premium para ganho de força e hipertrofia.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
  },
  {
    id: "boxe",
    title: "Boxe",
    description: "Treino de boxe profissional para técnica, cardio e defesa pessoal.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
  },
  {
    id: "funcional",
    title: "Treino Funcional",
    description: "Movimentos naturais que trabalham o corpo todo com eficiência máxima.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
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
          {modalities.map((modality) => (
            <div
              key={modality.id}
              className="group relative h-96 rounded-xl overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={modality.image}
                alt={modality.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Inner shadow overlay — darkens bottom for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Title at bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">{modality.title}</h3>
                <p className="text-white/70 text-sm mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {modality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
