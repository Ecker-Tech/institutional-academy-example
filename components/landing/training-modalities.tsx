"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Dumbbell, Wind, Radio, User, Flower2, Music } from "lucide-react";

const modalities = [
  {
    id: "musculacao",
    title: "Musculação",
    description: "Ganhe força e hipertrofia com equipamentos premium e orientação profissional.",
    icon: Dumbbell,
    image: "/images/weight-training-area.png",
    color: "from-red-500 to-red-600",
  },
  {
    id: "funcional",
    title: "Treino Funcional",
    description: "Trabalhe grupos musculares inteiros com movimentos naturais e dinâmicos.",
    icon: Wind,
    image: "/images/functional-training.png",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "cross",
    title: "Cross Training",
    description: "Combine força, resistência e flexibilidade em treinos intensos e variados.",
    icon: Zap,
    image: "/images/cross-training.png",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "spinning",
    title: "Spinning",
    description: "Pedal intenso em grupo com ritmo de música energética e motivadora.",
    icon: Radio,
    image: "/images/spinning-area.png",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "personal",
    title: "Personal Training",
    description: "Acompanhamento individualizado para resultados máximos e seguros.",
    icon: User,
    image: "/images/personal-training.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "pilates",
    title: "Pilates",
    description: "Fortaleça o core e melhore a postura com exercícios controlados.",
    icon: Flower2,
    image: "/images/pilates-studio.png",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "fitdance",
    title: "Fit Dance",
    description: "Dance, divirta-se e queime calorias em uma experiência inesquecível.",
    icon: Music,
    image: "/images/fit-dance.png",
    color: "from-cyan-500 to-cyan-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

export function TrainingModalities() {
  return (
    <section id="modalidades" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-balance">
            Nossas Modalidades
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Encontre a atividade perfeita para seus objetivos e preferências
          </p>
        </motion.div>

        {/* Modalities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {modalities.map((modality) => {
            const IconComponent = modality.icon;
            return (
              <motion.div
                key={modality.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative h-96 rounded-xl overflow-hidden bg-card border border-foreground/10 hover:border-primary/50 transition-colors cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={modality.image}
                  alt={modality.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent group-hover:via-background/60 transition-colors duration-300`} />

                {/* Icon Background */}
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br ${modality.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <IconComponent size={24} />
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {modality.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {modality.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 mb-6">
            Comece com uma aula experimental gratuita
          </p>
          <a
            href="https://wa.me/5545991023526?text=Olá!%20Vim%20pelo%20site%20PULSAR%20e%20gostaria%20de%20experimentar%20as%20modalidades."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
          >
            Agendar Aula Experimental
          </a>
        </motion.div>
      </div>
    </section>
  );
}
