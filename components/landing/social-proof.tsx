"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ value, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-foreground/60 text-lg">{label}</p>
    </motion.div>
  );
}

export function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4 text-balance"
          >
            Resultados que Falam por Si
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            Transformações reais de membros satisfeitos que já atingiram seus objetivos
          </motion.p>
        </motion.div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter value={500} label="Membros Ativos" suffix="+" />
          <AnimatedCounter value={4500} label="Transformações Completadas" suffix="+" />
          <AnimatedCounter value={98} label="Taxa de Satisfação" suffix="%" />
          <AnimatedCounter value={10} label="Anos de Excelência" suffix="+" />
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 pt-16 border-t border-foreground/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-foreground/50 text-sm mb-8"
          >
            CERTIFICAÇÕES E RECONHECIMENTOS
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {["CREF", "ABNT", "ISO 9001", "Fit Pro", "Elite Gym Network"].map(
              (badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 border border-foreground/20 rounded-lg text-sm font-medium text-foreground/60 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {badge}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
