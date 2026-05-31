"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    alt: "Sala de musculação com equipamentos modernos",
    label: "Sala de Musculação",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    alt: "Deck de cardio com esteiras e bicicletas",
    label: "Deck de Cardio",
  },
  {
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&h=600&fit=crop",
    alt: "Área funcional e crossfit",
    label: "Área Funcional",
  },
  {
    src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
    alt: "Sala de boxe e artes marciais",
    label: "Sala de Boxe",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
    alt: "Vestiários modernos e limpos",
    label: "Vestiários",
  },
  {
    src: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=800&h=600&fit=crop",
    alt: "Recepção e área de convivência",
    label: "Recepção",
  },
];

export function GymStructure() {
  const { ref, isInView } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="structure"
      ref={ref}
      className="py-12 sm:py-16 md:py-24 bg-background"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isInView ? "in-view" : ""}`}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-lime-400 mb-3 sm:mb-4 text-balance uppercase font-display">
            Ambiente de Elite para o Seu Máximo Rendimento
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Espaços modernos e bem cuidados projetados para o seu melhor
            desempenho
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="stagger-child group relative h-40 sm:h-56 md:h-64 rounded-lg sm:rounded-xl overflow-hidden bg-card hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
              <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white font-semibold text-xs sm:text-sm tracking-wide group-hover:text-primary transition-colors duration-300">
                {photo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
