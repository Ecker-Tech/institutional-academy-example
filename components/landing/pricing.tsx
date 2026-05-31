'use client';

import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Mensal',
    price: 'R$ 99',
    period: '/mês',
    description: 'Flexibilidade sem compromisso',
    features: [
      'Acesso ilimitado às instalações',
      'Todas as modalidades',
      'Avaliação física',
      'Ambiente familiar e acolhedor',
      'Comunidade Elite Academia',
    ],
    cta: 'Começar Agora',
    highlighted: false,
  },
  {
    name: 'Semestral',
    price: 'R$ 499',
    period: '/semestre',
    description: 'Melhor custo-benefício',
    features: [
      'Tudo do plano Mensal',
      'Avaliação física a cada 60 dias',
      'Desconto em shake e suplementos',
      'Acesso ao app Elite Academia',
      'Prioridade em agendamentos',
      'Plano nutricional básico',
    ],
    cta: 'Garantir Vaga',
    highlighted: true,
  },
  {
    name: 'Anual',
    price: 'R$ 899',
    period: '/ano',
    description: 'Maior economia e benefícios',
    features: [
      'Tudo do plano Semestral',
      'Personal trainer consultoria (4x/mês)',
      'Programa personalizado',
      'Desconto em eventos da academia',
      'Análise de composição corporal trimestral',
      'Atendimento VIP',
    ],
    cta: 'Transformar Agora',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Planos que se adaptam a você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano perfeito para sua jornada. Qualidade premium com preço justo e sem taxas escondidas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border overflow-hidden transition-all duration-300 group ${
                plan.highlighted
                  ? 'border-primary/60 bg-card md:scale-105 shadow-2xl shadow-primary/20'
                  : 'border-primary/20 bg-card/50 hover:border-primary/60 hover:bg-card'
              }`}
            >
              {/* Glow effect for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 -z-10 -m-1 bg-gradient-to-br from-primary/50 to-primary/20 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              )}

              {/* Gradient background */}
              <div
                className={`absolute inset-0 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary/15 via-transparent to-transparent'
                    : 'bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100'
                } transition-opacity`}
              />

              {/* Badge for highlighted plan */}
              {plan.highlighted && (
                <div className="relative bg-gradient-to-r from-primary to-lime-500 px-4 py-2 text-center font-bold text-primary-foreground text-sm">
                  Plano Popular
                </div>
              )}

              {/* Content */}
              <div className="relative p-8">
                {/* Plan name and description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  {plan.highlighted && (
                    <p className="text-xs text-primary font-semibold">Melhor custo-benefício</p>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-6 transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-lime-500 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:scale-105'
                      : 'border-2 border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                {/* Features list */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Primeira aula experimental gratuita! Sem taxas de inscrição, sem multa por cancelamento.
          </p>
        </div>
      </div>
    </section>
  );
}
