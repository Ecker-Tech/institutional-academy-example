'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const modalidades = [
  {
    title: 'Musculação',
    description: 'Treinos para hipertrofia, força e definição muscular com acompanhamento profissional.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=800',
  },
  {
    title: 'Funcional',
    description: 'Exercícios que melhoram a capacidade funcional do corpo para atividades do dia a dia.',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=800',
  },
  {
    title: 'Personal Trainer',
    description: 'Atendimento exclusivo e personalizado para resultados mais rápidos e eficientes.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800',
  },
  {
    title: 'Cross Training',
    description: 'Treinos de alta intensidade que combinam força, cardio e agilidade.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800',
  },
  {
    title: 'Pilates',
    description: 'Método que fortalece o corpo, melhora a postura e aumenta a flexibilidade.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800',
  },
  {
    title: 'Spinning',
    description: 'Aulas de ciclismo indoor com música e energia para queima calórica intensa.',
    image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?q=80&w=800',
  },
];

export function Modalidades() {
  return (
    <section id="modalidades" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            NOSSAS{' '}
            <span className="text-primary">MODALIDADES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diversas opções de treino para você encontrar a atividade perfeita
            para seus objetivos.
          </p>
        </motion.div>

        {/* Modalidades Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalidades.map((modalidade, index) => (
            <motion.div
              key={modalidade.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={modalidade.image}
                  alt={modalidade.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {modalidade.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {modalidade.description}
                </p>
                <a
                  href="#aula-experimental"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
