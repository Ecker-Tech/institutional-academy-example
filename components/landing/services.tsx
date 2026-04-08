"use client"

import { Dumbbell, Music, User } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Dumbbell,
    title: "Musculação",
    description: "Treinos personalizados com foco em ganho de massa muscular, força e definição. Equipamentos de ponta para todos os níveis.",
  },
  {
    icon: Music,
    title: "Aulas de Zumba",
    description: "Aulas animadas e divertidas que combinam dança e exercício físico. Perfeito para quem busca cardio com ritmo e energia.",
  },
  {
    icon: User,
    title: "Personal Trainer",
    description: "Acompanhamento personalizado e orientação profissional para alcançar seus objetivos com segurança e eficiência.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Nossos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços e modalidades para você alcançar seus objetivos de saúde e fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-zinc-900/50 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 p-8 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-600/0 group-hover:from-orange-500/10 group-hover:to-red-600/10 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
