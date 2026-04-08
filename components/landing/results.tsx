import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const transformations = [
  {
    before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop",
    name: "Carlos M.",
    result: "Perdeu 15kg em 4 meses",
    description: "Transformação completa com foco em emagrecimento e definição muscular.",
  },
  {
    before: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=400&auto=format&fit=crop",
    name: "Ana P.",
    result: "Ganhou 5kg de massa magra",
    description: "Hipertrofia focada em glúteos e membros inferiores.",
  },
  {
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454122781-0a3d5a9e8423?q=80&w=400&auto=format&fit=crop",
    name: "Ricardo S.",
    result: "Definição em 6 meses",
    description: "Cutting com manutenção de força e definição muscular.",
  },
]

export function Results() {
  return (
    <section id="resultados" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Resultados{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Reais
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Veja as transformações dos nossos alunos e inspire-se para começar a sua jornada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 overflow-hidden group"
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.before}
                      alt={`${item.name} antes`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white">
                      ANTES
                    </div>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.after}
                      alt={`${item.name} depois`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-gradient-to-r from-orange-500 to-red-600 px-2 py-1 rounded text-xs font-medium text-white">
                      DEPOIS
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{item.result}</p>
                <p className="text-white/60 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
