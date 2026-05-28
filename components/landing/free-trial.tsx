"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FreeTrial() {
  const benefits = [
    "Avaliação física completa",
    "Treino personalizado",
    "Acompanhamento profissional",
    "Conhecer toda a estrutura",
    "Sem compromisso",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6 text-primary text-sm font-semibold">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              OFERTA ESPECIAL
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-balance">
              Primeira Aula é <span className="text-primary">Grátis</span>
            </h2>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Experimente toda a qualidade e infraestrutura da PULSAR sem nenhum compromisso. Nossa equipe está pronta para recebê-lo(a) e iniciar sua jornada de transformação.
            </p>

            {/* Benefits List */}
            <motion.div
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold"
              >
                <a
                  href="https://wa.me/5545991023526?text=Olá!%20Gostaria%20de%20agendar%20minha%20primeira%20aula%20gratuita%20na%20PULSAR."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Agora
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-bold"
              >
                <a href="#planos">
                  Ver Planos
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats/Visual */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center"
              whileHover={{ y: -5 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-foreground/60">Satisfação</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-2xl p-8 text-center"
              whileHover={{ y: -5 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-accent mb-2">0</p>
              <p className="text-foreground/60">Mensalidade*</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center col-span-2"
              whileHover={{ y: -5 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl font-bold text-primary mb-2">Sem Compromisso</p>
              <p className="text-foreground/60 text-sm">*Na aula experimental</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
