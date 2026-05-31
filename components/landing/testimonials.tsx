"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Santos",
    role: "Empresário",
    avatar: "👨‍💼",
    content:
      "PULSAR transformou minha vida. Em 6 meses, ganhei 8kg de massa muscular e reduzi meu percentual de gordura. A dedicação dos treinadores é incomparável.",
    rating: 5,
  },
  {
    name: "Marina Costa",
    role: "Atleta Profissional",
    avatar: "👩‍⚕️",
    content:
      "O ambiente, a comunidade e a qualidade dos equipamentos fazem toda diferença. Alcancei meus melhores resultados treinar em PULSAR.",
    rating: 5,
  },
  {
    name: "João Oliveira",
    role: "Iniciante em Fitness",
    avatar: "👨‍💻",
    content:
      "Comecei do zero e os treinadores foram fundamentais. Sinto-me confiante e motivado todo dia. PULSAR é a melhor decisão que tomei.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos membros Elite estão alcançando seus objetivos e
            transformando suas vidas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Rating */}
              <div className="relative mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="relative text-foreground mb-6 leading-relaxed italic">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="relative flex items-center gap-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* More testimonials CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-semibold transition-all">
            Ver mais histórias de sucesso →
          </button>
        </div>
      </div>
    </section>
  );
}
