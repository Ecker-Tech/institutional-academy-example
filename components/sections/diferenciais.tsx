'use client';

import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Users, 
  Wind, 
  Target, 
  Clock, 
  Car 
} from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Equipamentos Modernos',
    description: 'Aparelhos de última geração das melhores marcas do mercado fitness.',
  },
  {
    icon: Users,
    title: 'Professores Qualificados',
    description: 'Equipe de profissionais certificados e em constante atualização.',
  },
  {
    icon: Wind,
    title: 'Ambiente Climatizado',
    description: 'Temperatura ideal para seu treino em qualquer época do ano.',
  },
  {
    icon: Target,
    title: 'Treinos Personalizados',
    description: 'Programas individualizados para atingir seus objetivos específicos.',
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Funcionamento em horários estendidos para sua conveniência.',
  },
  {
    icon: Car,
    title: 'Estacionamento',
    description: 'Estacionamento próprio e gratuito para alunos.',
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-background">
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
            POR QUE ESCOLHER A{' '}
            <span className="text-primary">ELITE FITNESS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência completa para você alcançar seus
            objetivos com conforto e segurança.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
