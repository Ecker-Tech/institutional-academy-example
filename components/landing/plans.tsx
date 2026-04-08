import { Check, Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Mensal",
    price: "129",
    period: "/mês",
    features: [
      "Acesso ilimitado à academia",
      "Avaliação física inicial",
      "Prescrição de treino",
      "Área de musculação",
      "Área cardio",
    ],
    highlighted: false,
  },
  {
    name: "Trimestral",
    price: "99",
    period: "/mês",
    totalPrice: "R$ 297 (3 meses)",
    features: [
      "Acesso ilimitado à academia",
      "Avaliação física mensal",
      "Prescrição de treino personalizado",
      "Área de musculação",
      "Área cardio",
      "Acompanhamento nutricional",
    ],
    highlighted: false,
  },
  {
    name: "Anual",
    price: "79",
    period: "/mês",
    totalPrice: "R$ 948 (12 meses)",
    features: [
      "Acesso ilimitado à academia",
      "Avaliação física mensal",
      "Prescrição de treino personalizado",
      "Área de musculação",
      "Área cardio",
      "Acompanhamento nutricional",
      "Acesso a eventos exclusivos",
      "Desconto em parceiros",
    ],
    highlighted: true,
    badge: "Melhor custo-benefício",
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Escolha seu{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Plano
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Invista em você com o plano que mais combina com seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-orange-500 scale-105 shadow-[0_0_40px_rgba(249,115,22,0.2)]"
                  : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600" />
              )}
              
              <CardHeader className="text-center pb-4">
                {plan.badge && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                )}
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">R$ {plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                {plan.totalPrice && (
                  <p className="text-sm text-white/40 mt-2">{plan.totalPrice}</p>
                )}
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? "bg-gradient-to-r from-orange-500 to-red-600" : "bg-zinc-700"
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  <a
                    href={`https://wa.me/554699721175?text=Olá,%20tenho%20interesse%20no%20plano%20${plan.name}%20da%20RK%20Fitness%20Center`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escolher plano
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
