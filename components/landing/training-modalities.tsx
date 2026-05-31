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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-lime-400 mb-4 text-balance uppercase font-display">
            Escolha o Seu Desafio e Mude o Seu Corpo
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Treinos especializados com o melhor da tecnologia e orientação profissional
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modalities.map((modality, index) => (
            <div
              key={modality.id}
              className="group relative h-96 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background image */}
              <Image
                src={modality.image}
                alt={modality.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Inner shadow overlay — darkens bottom for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />

              {/* Title at bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{modality.title}</h3>
                <p className="text-slate-300 text-sm mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
