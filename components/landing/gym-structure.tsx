import Image from 'next/image';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    alt: 'Sala de musculação com equipamentos modernos',
    label: 'Sala de Musculação',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    alt: 'Deck de cardio com esteiras e bicicletas',
    label: 'Deck de Cardio',
  },
  {
    src: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&h=600&fit=crop',
    alt: 'Área funcional e crossfit',
    label: 'Área Funcional',
  },
  {
    src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop',
    alt: 'Sala de boxe e artes marciais',
    label: 'Sala de Boxe',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
    alt: 'Vestiários modernos e limpos',
    label: 'Vestiários',
  },
  {
    src: 'https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=800&h=600&fit=crop',
    alt: 'Recepção e área de convivência',
    label: 'Recepção',
  },
];

export function GymStructure() {
  return (
    <section id="structure" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-lime-400 mb-4 text-balance">
            Ambiente de Elite para o Seu Máximo Rendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Espaços modernos e bem cuidados projetados para o seu melhor desempenho
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden bg-card"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-semibold text-sm tracking-wide">
                {photo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
