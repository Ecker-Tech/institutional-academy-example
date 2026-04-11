import { Dumbbell, Users, Building2, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Treino Personalizado",
    description:
      "Acompanhamento individual com profissionais qualificados para maximizar seus resultados.",
  },
  {
    icon: Dumbbell,
    title: "Equipamentos de Ponta",
    description:
      "Aparelhos modernos e bem mantidos das melhores marcas do mercado fitness.",
  },
  {
    icon: Building2,
    title: "Ambiente Exclusivo",
    description:
      "Espaço climatizado, limpo e organizado para você treinar com conforto total.",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento Profissional",
    description:
      "Avaliação física completa e prescrição de treino baseada nos seus objetivos.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-linear-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Por que escolher a{" "}
            <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Flex Force?
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Oferecemos uma experiência completa para você alcançar seus
            objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-600/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
