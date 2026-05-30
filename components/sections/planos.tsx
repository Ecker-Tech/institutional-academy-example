'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const planos = [
  {
    name: 'Mensal',
    price: '149',
    period: '/mês',
    description: 'Ideal para quem quer experimentar',
    features: [
      'Acesso a todas as áreas',
      'Musculação e cardio',
      'Avaliação física inicial',
      'Acompanhamento de professores',
      'Vestiário com armário',
    ],
    highlighted: false,
  },
  {
    name: 'Trimestral',
    price: '119',
    period: '/mês',
    description: 'Melhor custo-benefício',
    features: [
      'Tudo do plano Mensal',
      'Personal 1x por semana',
      'Acesso às aulas coletivas',
      'App de treinos exclusivo',
      'Desconto em suplementos',
      'Toalha inclusa',
    ],
    highlighted: true,
    badge: 'MAIS POPULAR',
  },
  {
    name: 'Anual',
    price: '99',
    period: '/mês',
    description: 'Para quem busca compromisso',
    features: [
      'Tudo do plano Trimestral',
      'Personal 2x por semana',
      'Avaliação física mensal',
      'Nutricionista incluso',
      'Acesso 24 horas',
      'Estacionamento VIP',
    ],
    highlighted: false,
  },
];

export function Planos() {
  return (
    <section id="planos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ESCOLHA SEU{' '}
            <span className="text-primary">PLANO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis que se adaptam aos seus objetivos e ao seu bolso.
            Comece sua transformação hoje.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: plano.highlighted ? 1 : 1.02, y: plano.highlighted ? 0 : -5 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plano.highlighted
                  ? 'bg-primary/5 border-primary scale-105 shadow-xl shadow-primary/10'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {/* Badge */}
              {plano.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    {plano.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-foreground mb-2">{plano.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plano.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">R$</span>
                <span
                  className={`text-5xl font-bold ${plano.highlighted ? 'text-primary' : 'text-foreground'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {plano.price}
                </span>
                <span className="text-muted-foreground">{plano.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plano.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plano.highlighted ? 'bg-primary' : 'bg-primary/20'
                    }`}>
                      <Check className={`w-3 h-3 ${plano.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#aula-experimental"
                className={`block w-full py-4 text-center font-semibold rounded-lg transition-all duration-300 ${
                  plano.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:bg-primary/5'
                }`}
              >
                Começar Agora
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Todos os planos incluem acesso à musculação, cardio e acompanhamento profissional.
          <br />
          Sem taxa de matrícula. Cancele quando quiser.
        </motion.p>
      </div>
    </section>
  );
}
