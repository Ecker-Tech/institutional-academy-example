'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white text-balance">
                Treine na Melhor Academia do Bairro
              </h1>
              <p className="text-lg md:text-xl font-normal text-muted-foreground leading-relaxed">
                Estrutura moderna, ambiente familiar e professores focados no seu resultado.
              </p>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 infinite-pulse-animation"
            >
              <Phone className="w-5 h-5" />
              Garantir Vaga no WhatsApp
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-96 md:h-[500px] order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-zinc-900 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
                alt="Elite Academia - Equipamentos de última geração"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
