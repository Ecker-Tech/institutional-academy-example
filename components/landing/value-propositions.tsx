'use client';

import { Zap, Users, Award } from 'lucide-react';

const valuePropItems = [
  {
    icon: Zap,
    title: 'Equipamentos de Ponta',
    description: 'Tecnologia premium e equipamentos de última geração para máxima performance e segurança em seu treino.',
  },
  {
    icon: Users,
    title: 'Comunidade Elite',
    description: 'Treine ao lado de atletas e profissionais que compartilham seus objetivos de excelência.',
  },
  {
    icon: Award,
    title: 'Treinadores Certificados',
    description: 'Especialistas altamente qualificados dedicados a sua transformação e progression contínua.',
  },
];

export function ValuePropositions() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">PULSAR</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma experiência completa de transformação corporal e mental em um ambiente premium.
          </p>
        </div>

        {/* Value Prop Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {valuePropItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
