'use client';

import { Users, Zap, Dumbbell, TrendingUp } from 'lucide-react';

const benefitsItems = [
  {
    icon: Users,
    title: 'Ambiente Familiar',
    description: 'Você se sente bem-vindo desde o primeiro dia. Comunidade acolhedora onde todos se conhecem e se ajudam.',
  },
  {
    icon: Zap,
    title: 'Professores Certificados',
    description: 'Profissionais qualificados e apaixonados por educação física, dedicados ao seu sucesso e transformação.',
  },
  {
    icon: Dumbbell,
    title: 'Equipamentos Modernos',
    description: 'Máquinas biomecânicas de última geração para máxima segurança, conforto e efetividade nos treinos.',
  },
  {
    icon: TrendingUp,
    title: 'Preço Justo',
    description: 'Qualidade premium sem mensalidades exorbitantes. Transparência total, sem taxas escondidas.',
  },
];

export function ValuePropositions() {
  return (
    <section id="benefits" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Por que escolher Elite Academia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para alcançar seus objetivos fitness em um único lugar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-lg border border-primary/30 bg-card/50 hover:bg-card hover:border-primary transition-all duration-300 overflow-hidden"
              >
                {/* Glow border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                </div>

                {/* Icon */}
                <div className="relative mb-4 inline-flex">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
