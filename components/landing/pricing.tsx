"use client";

import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pricingPlans = [
  {
    name: "Mensal",
    price: "R$ 99",
    period: "/mês",
    description: "Flexibilidade sem compromisso",
    features: [
      "Acesso ilimitado às instalações",
      "Todas as modalidades",
      "Avaliação física",
      "Ambiente familiar e acolhedor",
      "Comunidade Elite Academia",
    ],
    cta: "Começar Agora",
    highlighted: false,
  },
  {
    name: "Semestral",
    price: "R$ 499",
    period: "/semestre",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do plano Mensal",
      "Avaliação física a cada 60 dias",
      "Desconto em shake e suplementos",
      "Acesso ao app Elite Academia",
      "Prioridade em agendamentos",
      "Plano nutricional básico",
    ],
    cta: "Garantir Vaga",
    highlighted: false,
  },
  {
    name: "Anual",
    price: "R$ 899",
    period: "/ano",
    description: "Maior economia e benefícios",
    features: [
      "Tudo do plano Semestral",
      "Personal trainer consultoria (4x/mês)",
      "Programa personalizado",
      "Desconto em eventos da academia",
      "Análise de composição corporal trimestral",
      "Atendimento VIP",
    ],
    cta: "Transformar Agora",
    highlighted: true,
  },
];

export function Pricing() {
  const { ref, isInView } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-background"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isInView ? "in-view" : ""}`}
      >
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-lime-400 mb-3 sm:mb-4 text-balance uppercase font-display">
            Planos que se adaptam a você
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Escolha o plano perfeito para sua jornada. Qualidade premium com
            preço justo e sem taxas escondidas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`stagger-child relative rounded-lg sm:rounded-xl border overflow-hidden transition-all duration-300 group ${
                plan.highlighted
                  ? "border-primary bg-card md:scale-105 shadow-2xl shadow-primary/20 neon-glow-animation"
                  : "border-primary/20 bg-card/50 hover:border-primary/60 hover:bg-card"
              }`}
            >
              {/* Glow effect for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 -z-10 -m-1 bg-linear-to-br from-primary/50 to-primary/20 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              )}

              {/* Gradient background */}
              <div
                className={`absolute inset-0 ${
                  plan.highlighted
                    ? "bg-linear-to-br from-primary/15 via-transparent to-transparent"
                    : "bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                } transition-opacity`}
              />

              {/* Badge for highlighted plan */}
              {plan.highlighted && (
                <div className="relative bg-linear-to-r from-primary to-lime-500 px-3 py-1.5 sm:px-4 sm:py-2 text-center font-bold text-primary-foreground text-xs sm:text-sm">
                  Melhor Escolha
                </div>
              )}

              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8">
                {/* Plan name and description */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-1 mb-1.5 sm:mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {plan.period}
                    </span>
                  </div>
                  {plan.highlighted && (
                    <p className="text-xs text-primary font-semibold">
                      Economia de R$ 289 vs. mensal
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Gostaria de fazer a minha matrícula no Plano ${plan.name} que vi no site.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base mb-4 sm:mb-6 transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.highlighted
                      ? "bg-linear-to-r from-primary to-lime-500 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
                      : "border-2 border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                {/* Features list */}
                <div className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-4">
            Primeira aula experimental gratuita! Sem taxas de inscrição, sem
            multa por cancelamento.
          </p>
        </div>
      </div>
    </section>
  );
}
