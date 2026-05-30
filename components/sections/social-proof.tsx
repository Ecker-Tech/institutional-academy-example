'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Calendar, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 1500,
    suffix: '+',
    label: 'Alunos Ativos',
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '',
    label: 'Avaliação Google',
    decimals: 1,
  },
  {
    icon: Calendar,
    value: 10,
    suffix: '+',
    label: 'Anos de Mercado',
  },
  {
    icon: Trophy,
    value: 500,
    suffix: '+',
    label: 'Transformações',
  },
];

function Counter({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
