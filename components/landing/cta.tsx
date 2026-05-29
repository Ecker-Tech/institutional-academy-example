'use client';

import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para sua <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">transformação</span>?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Junte-se a centenas de membros Elite que já estão alcançando seus objetivos em PULSAR. Sua jornada começa hoje.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-10 py-4 font-bold text-lg text-foreground overflow-hidden rounded-lg w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary group-hover:opacity-110 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              Comece sua Aula Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-10 py-4 font-bold text-lg text-foreground border-2 border-primary hover:bg-primary/10 transition-colors rounded-lg w-full sm:w-auto">
            Fale com um especialista
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">
            Confiado por atletas e profissionais em todo Brasil
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
            {['Google', 'Trustpilot', 'Verified', 'Premium'].map((badge) => (
              <div key={badge} className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
