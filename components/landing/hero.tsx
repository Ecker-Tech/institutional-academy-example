'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop"
        alt="Elite Academia interior"
        fill
        className="object-cover"
        priority
      />

      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-zinc-950" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-lime-400 text-balance leading-tight">
          Treine na Melhor Academia do Bairro
        </h1>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
          Estrutura moderna, ambiente familiar e professores focados no seu resultado.
        </p>
        <a
          href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Quero aproveitar a oferta do site e garantir minha vaga na Elite Academia!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 infinite-pulse-animation"
        >
          <Phone className="w-5 h-5" />
          Garantir Vaga no WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
