import Image from "next/image"

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    alt: "Equipamentos de musculação",
    title: "Equipamentos de Ponta",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
    alt: "Área de treino",
    title: "Área de Treino",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    alt: "Área de peso livre",
    title: "Peso Livre",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
    alt: "Treino funcional",
    title: "Funcional",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
    alt: "Área cardio",
    title: "Cardio",
    span: "col-span-2 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="modalidades" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Nossa{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Estrutura
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ambiente premium com equipamentos de última geração para você treinar com conforto e segurança
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
