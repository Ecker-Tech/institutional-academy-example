import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mariana Costa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "A RK mudou minha vida! Em 6 meses consegui resultados que não tinha conseguido em anos. Equipe incrível e ambiente motivador.",
  },
  {
    name: "Pedro Henrique",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Melhor academia da região. Equipamentos de primeira qualidade e os professores realmente se importam com o seu progresso.",
  },
  {
    name: "Juliana Mendes",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Ambiente limpo, organizado e bem climatizado. Me sinto em casa treinando aqui. Super recomendo para quem busca qualidade!",
  },
  {
    name: "Fernando Lima",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "O acompanhamento personalizado fez toda diferença nos meus resultados. Profissionais muito competentes e atenciosos.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            O que nossos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              alunos dizem
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Depoimentos reais de quem já transformou sua vida na RK Fitness Center
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{`"${testimonial.text}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
