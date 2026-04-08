import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Cristiano Ribeiro",
    image: "/reviews/cristiano.png",
    rating: 5,
    text: "Ótima academia! Os instrutores são ótimos profissionais, comprometidos com o bem-estar dos alunos. Os aparelhos são modernos, com ótima ergonomia. O pessoal da recepção é sempre muito simpático e competente. Recomendo sempre!",
  },
  {
    name: "Carmen Melo",
    image: "/reviews/carmen.png",
    rating: 5,
    text: "Gosto da academia porque é um lugar tranquilo para se exercitar. Os aparelhos são de boa qualidade, e os instrutores são bem tranquilos. Respeitam o seu tempo e estão sempre atentos, auxiliando durante todo o treino.",
  },
  {
    name: "Rodrigo Melo",
    image: "/reviews/rodrigo.png",
    rating: 5,
    text: "Academia bem equipada, não é preciso esperar para usar os aparelhos; é chegar e malhar. Espaço amplo e excelente atendimento.",
  },
  {
    name: "Odlanyer Antonio Ferreira",
    image: "/reviews/odlanyer.png",
    rating: 5,
    text: "Lugar acessível para quem deseja fazer academia. Excelente localização, ambiente limpo e higiênico, além de ótimos professores. Gostei muito.",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que nossos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              alunos dizem
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Depoimentos reais de quem já transformou sua vida na RK Fitness
            Center
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
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-orange-500 text-orange-500"
                          />
                        ),
                      )}
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
  );
}
