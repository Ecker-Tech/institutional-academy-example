'use client';

import Image from 'next/image';

const benefitsItems = [
  {
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=120&h=120&fit=crop',
    title: 'Ambiente Familiar',
    description: 'Você se sente bem-vindo desde o primeiro dia. Comunidade acolhedora onde todos se conhecem e se ajudam.',
  },
  {
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=120&h=120&fit=crop',
    title: 'Professores Certificados',
    description: 'Profissionais qualificados e apaixonados por educação física, dedicados ao seu sucesso e transformação.',
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&h=120&fit=crop',
    title: 'Equipamentos Modernos',
    description: 'Máquinas biomecânicas de última geração para máxima segurança, conforto e efetividade nos treinos.',
  },
  {
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=120&h=120&fit=crop',
    title: 'Preço Justo',
    description: 'Qualidade premium sem mensalidades exorbitantes. Transparência total, sem taxas escondidas.',
  },
];

export function ValuePropositions() {
  return (
    <section id="benefits" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-lime-400 mb-4 text-balance">
            Por que escolher Elite Academia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para alcançar seus objetivos fitness em um único lugar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-primary/30 bg-card/50 hover:bg-card hover:border-primary transition-all duration-300 overflow-hidden"
            >
              {/* Glow border effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Image */}
              <div className="relative mb-4 w-14 h-14 rounded-lg overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Lime tint overlay */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
