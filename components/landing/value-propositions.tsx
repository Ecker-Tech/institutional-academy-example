"use client";

import { Users, Award, Dumbbell, Wallet } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const benefitsItems = [
  {
    icon: Users,
    title: "Ambiente Familiar",
    description:
      "Você se sente bem-vindo desde o primeiro dia. Comunidade acolhedora onde todos se conhecem e se ajudam.",
  },
  {
    icon: Award,
    title: "Professores Certificados",
    description:
      "Profissionais qualificados e apaixonados por educação física, dedicados ao seu sucesso e transformação.",
  },
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    description:
      "Máquinas biomecânicas de última geração para máxima segurança, conforto e efetividade nos treinos.",
  },
  {
    icon: Wallet,
    title: "Preço Justo",
    description:
      "Qualidade premium sem mensalidades exorbitantes. Transparência total, sem taxas escondidas.",
  },
];

export function ValuePropositions() {
  const { ref, isInView } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="benefits"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-background"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isInView ? "in-view" : ""}`}
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-lime-400 mb-3 sm:mb-4 text-balance uppercase font-display">
            Por que escolher Elite Academia
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tudo o que você precisa para alcançar seus objetivos fitness em um
            único lugar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefitsItems.map((item, index) => (
            <div
              key={index}
              className="stagger-child group relative p-4 sm:p-6 rounded-lg border border-primary/30 bg-card/50 hover:bg-card hover:border-primary transition-all duration-300 overflow-hidden hover:scale-105"
            >
              {/* Glow border effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-linear-to-br from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Icon Container */}
              <div className="relative mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-lime-500/10 border-2 border-lime-500/40 group-hover:border-lime-400 group-hover:bg-lime-500/20 transition-all duration-300">
                <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary group-hover:animate-bounce-subtle transition-all" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
