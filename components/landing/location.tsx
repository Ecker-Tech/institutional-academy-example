'use client';

import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Pato+Branco+Parana';

export function Location() {
  const { ref, isInView } = useScrollReveal<HTMLElement>();

  return (
    <section id="location" ref={ref} className="relative py-24 bg-background">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isInView ? 'in-view' : ''}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-lime-400 mb-4 text-balance uppercase font-display">
            A Elite está pertinho de você. Venha nos conhecer!
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Estamos no coração de Pato Branco - Paraná — fácil de encontrar e de chegar
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column — Address details */}
          <div className="stagger-child flex flex-col justify-between rounded-xl border border-primary/30 bg-card p-8 gap-8 hover:border-primary/60 transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-white tracking-tighter font-display">
                Venha Treinar Conosco
              </h3>
              <p className="text-slate-300 leading-relaxed">
                A Elite Academia fica em um ponto de fácil acesso no bairro, com estacionamento próprio e próxima ao transporte público. Você não tem desculpa para não treinar!
              </p>

              {/* Address block */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Rua Exemplo, 1234 — Sala 01</p>
                    <p className="text-slate-300 text-sm">Bairro Centro</p>
                    <p className="text-slate-300 text-sm font-semibold">Pato Branco - Paraná</p>
                    <p className="text-slate-400 text-sm">CEP: 85501-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">
                    Estacionamento gratuito no local — Fácil acesso pelo centro da cidade
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-3 px-6 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              Abrir no Google Maps
            </a>
          </div>

          {/* Right Column — Interactive Map Placeholder (clickable) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-child relative rounded-xl overflow-hidden h-[400px] border border-primary/20 bg-zinc-900 block group cursor-pointer hover:border-primary/60 transition-all duration-300"
          >
            {/* Grid pattern */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d4ff00" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
            </svg>

            {/* Faux streets */}
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="30%" width="100%" height="4" fill="#d4ff00" />
              <rect x="0" y="56%" width="100%" height="6" fill="#909090" />
              <rect x="0" y="76%" width="100%" height="3" fill="#d4ff00" />
              <rect x="25%" y="0" width="4" height="100%" fill="#909090" />
              <rect x="55%" y="0" width="6" height="100%" fill="#d4ff00" />
              <rect x="80%" y="0" width="3" height="100%" fill="#909090" />
              <rect x="3%"  y="32%" width="20%" height="21%" fill="#27272a" />
              <rect x="27%" y="32%" width="26%" height="21%" fill="#1a1a1a" />
              <rect x="3%"  y="58%" width="20%" height="15%" fill="#1a1a1a" />
              <rect x="27%" y="58%" width="26%" height="15%" fill="#27272a" />
              <rect x="60%" y="32%" width="18%" height="21%" fill="#27272a" />
              <rect x="60%" y="58%" width="18%" height="15%" fill="#1a1a1a" />
            </svg>

            {/* Radial glow behind pin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-44 h-44 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-300" />
            </div>

            {/* Pin + label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-0">
                {/* Pulse rings */}
                <span className="absolute w-16 h-16 rounded-full bg-primary/25 animate-ping" />
                <span className="absolute w-11 h-11 rounded-full bg-primary/35" />

                {/* Pin icon */}
                <div className="relative z-10 p-3 rounded-full bg-primary shadow-2xl shadow-primary/70 mb-1 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
                </div>

                {/* Bubble label */}
                <div className="relative z-10 px-4 py-1.5 rounded-full bg-zinc-800 border border-primary/40 shadow-lg group-hover:border-primary/80 transition-all duration-300">
                  <span className="text-white text-sm font-bold whitespace-nowrap">Pato Branco - Paraná</span>
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-16 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold">
                <ExternalLink className="w-4 h-4" />
                Clique para abrir no Google Maps
              </div>
            </div>

            {/* Attribution */}
            <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-zinc-800/80 border border-border">
              <span className="text-slate-400 text-xs">Clique para abrir no Google Maps</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
