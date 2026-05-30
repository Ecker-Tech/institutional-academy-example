'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const resultados = [
  {
    id: 1,
    name: 'Carlos Silva',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400',
    beforeWeight: '95kg',
    afterWeight: '78kg',
    duration: '6 meses',
    testimonial: 'A Elite Fitness mudou minha vida. Perdi 17kg e ganhei muita disposição. Os professores são incríveis!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ana Paula',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400',
    beforeWeight: '72kg',
    afterWeight: '58kg',
    duration: '8 meses',
    testimonial: 'Nunca imaginei que conseguiria alcançar meus objetivos. O ambiente é motivador e a equipe é muito atenciosa.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Roberto Mendes',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400',
    beforeWeight: '85kg',
    afterWeight: '82kg',
    duration: '4 meses',
    testimonial: 'Ganhei 5kg de massa muscular pura. O acompanhamento personalizado fez toda diferença nos meus resultados.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fernanda Costa',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400',
    beforeWeight: '68kg',
    afterWeight: '55kg',
    duration: '5 meses',
    testimonial: 'Melhor academia que já frequentei! Equipamentos de primeira e profissionais muito qualificados.',
    rating: 5,
  },
];

export function Resultados() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resultados.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resultados.length) % resultados.length);
  };

  return (
    <section id="resultados" className="py-24 bg-card">
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
            RESULTADOS{' '}
            <span className="text-primary">REAIS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja as histórias de transformação dos nossos alunos e inspire-se
            para começar a sua jornada.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {resultados.map((resultado) => (
                <div
                  key={resultado.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-2xl overflow-hidden"
                      >
                        <Image
                          src={resultado.image}
                          alt={resultado.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                          <div className="flex justify-center gap-8 text-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Antes</p>
                              <p className="text-xl font-bold text-foreground">{resultado.beforeWeight}</p>
                            </div>
                            <div className="w-px bg-border" />
                            <div>
                              <p className="text-sm text-muted-foreground">Depois</p>
                              <p className="text-xl font-bold text-primary">{resultado.afterWeight}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-6">
                        <Quote className="w-12 h-12 text-primary/20" />
                        <p className="text-lg text-foreground leading-relaxed italic">
                          {`"${resultado.testimonial}"`}
                        </p>
                        <div className="flex items-center gap-1">
                          {[...Array(resultado.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{resultado.name}</h4>
                          <p className="text-muted-foreground">Transformação em {resultado.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {resultados.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
