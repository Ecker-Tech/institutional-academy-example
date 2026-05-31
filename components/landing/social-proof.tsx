'use client';

import { Users, Star, MapPin, Trophy } from 'lucide-react';

const proofBadges = [
  {
    icon: Users,
    text: '+1.500 Alunos Ativos',
  },
  {
    icon: Star,
    text: 'Nota 4.9 no Google Maps',
  },
  {
    icon: MapPin,
    text: 'A maior de Pato Branco',
  },
  {
    icon: Trophy,
    text: 'Resultado Garantido em 90 Dias',
  },
];

export function SocialProof() {
  return (
    <section className="relative py-5 sm:py-8 bg-background border-y border-primary/20 overflow-hidden">
      {/* Animated marquee container */}
      <div className="relative flex overflow-hidden">
        {/* First set of badges */}
        <div className="flex animate-marquee gap-4 sm:gap-6 pr-4 sm:pr-6">
          {proofBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-primary/60 bg-primary/10 whitespace-nowrap hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 cursor-default"
            >
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-slate-200 font-bold text-xs sm:text-sm tracking-tight">{badge.text}</span>
            </div>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex animate-marquee gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
          {proofBadges.map((badge, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-primary/60 bg-primary/10 whitespace-nowrap hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 cursor-default"
            >
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-slate-200 font-bold text-xs sm:text-sm tracking-tight">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
