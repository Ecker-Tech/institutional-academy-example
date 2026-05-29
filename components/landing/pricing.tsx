'use client';

import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Essencial',
    price: 'R$ 89',
    period: '/mês',
    description: 'Início perfeito para sua jornada',
    features: [
      'Acesso às instalações',
      'Equipamentos completos',
      'Ambiente premium',
      'Comunidade PULSAR',
      'App de acompanhamento',
    ],
    cta: 'Comece Agora',
    highlighted: false,
  },
  {
    name: 'Elite',
    price: 'R$ 149',
    period: '/mês',
    description: 'Para quem busca resultados reais',
    features: [
      'Tudo do plano Essencial',
      'Aulas em grupo (ilimitadas)',
      'Avaliação corporal mensal',
      'Suplementação com desconto',
      'Acesso a eventos exclusivos',
      'Análise de treino semanal',
    ],
    cta: 'Tornar-se Elite',
    highlighted: true,
  },
  {
    name: 'Apex',
    price: 'R$ 299',
    period: '/mês',
    description: 'O máximo em performance',
    features: [
      'Tudo do plano Elite',
      'Personal trainer dedicado',
      'Planejamento nutricional',
      'Sessões de coaching semanal',
      'Prioridade em agendamentos',
      'Acesso VIP a eventos',
      'Consultoria especializada',
    ],
    cta: 'Alcance o Apex',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planos que se adaptam a você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para sua jornada de transformação. Todos incluem acesso a nossas instalações premium.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border overflow-hidden transition-all duration-300 group ${
                plan.highlighted
                  ? 'border-primary/50 bg-card ring-2 ring-primary/20 md:scale-105 shadow-xl'
                  : 'border-border bg-card/50 hover:bg-card'
              }`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary/10 via-transparent to-secondary/10'
                    : 'bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100'
                } transition-opacity`}
              />

              {/* Badge for highlighted plan */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary px-4 py-1 text-center text-sm font-bold text-foreground">
                  Mais Popular
                </div>
              )}

              {/* Content */}
              <div className="relative p-8">
                {/* Plan name and description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-6 transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-secondary text-foreground hover:shadow-lg hover:shadow-primary/50'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Features list */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem cancelamento sem multa e primeiro mês com 50% de desconto.
          </p>
          <button className="text-primary hover:text-secondary font-semibold transition-colors">
            Ver comparação detalhada →
          </button>
        </div>
      </div>
    </section>
  );
}
