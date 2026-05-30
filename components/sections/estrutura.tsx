'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Área de Musculação',
    description: 'Equipamentos de última geração para treinos completos',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Área Funcional',
    description: 'Espaço amplo para treinos funcionais e crossfit',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Área Cardio',
    description: 'Esteiras, bikes e elípticos modernos',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Recepção',
    description: 'Ambiente moderno e acolhedor',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    title: 'Vestiários',
    description: 'Vestiários completos com armários e chuveiros',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    title: 'Equipamentos Premium',
    description: 'Máquinas das melhores marcas do mercado',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200',
    span: 'col-span-2 row-span-1',
  },
];

export function Estrutura() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="estrutura" className="py-24 bg-card">
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
            CONHEÇA NOSSA{' '}
            <span className="text-primary">ESTRUTURA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 800m² de área dedicada ao seu treino, com equipamentos
            modernos e ambiente climatizado.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${item.span}`}
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
