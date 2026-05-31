import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const mapsUrl = 'https://google.com';

export function Location() {
  return (
    <section id="location" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            A Elite está pertinho de você. Venha nos conhecer!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos no coração de Pato Branco — fácil de encontrar e de chegar
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column — Address details */}
          <div className="flex flex-col justify-between rounded-xl border border-primary/30 bg-card p-8 gap-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Venha Treinar Conosco
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Elite Academia fica em um ponto de fácil acesso no bairro, com estacionamento próprio e próxima ao transporte público. Você não tem desculpa para não treinar!
              </p>

              {/* Address block */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Rua Exemplo, 1234 — Sala 01</p>
                    <p className="text-muted-foreground text-sm">Bairro Centro, Cidade — SP</p>
                    <p className="text-muted-foreground text-sm">CEP: 00000-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    A 5 min da Estação de Metrô XYZ — estacionamento gratuito no local
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-3 px-6 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              <MapPin className="w-5 h-5" />
              Abrir no Google Maps
            </a>
          </div>

          {/* Right Column — Stylized dark map placeholder */}
          <div className="relative rounded-xl overflow-hidden h-[400px] border border-primary/20 bg-zinc-900">

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
              <div className="w-44 h-44 rounded-full bg-primary/20 blur-3xl" />
            </div>

            {/* Pin + label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-0">
                {/* Pulse rings */}
                <span className="absolute w-16 h-16 rounded-full bg-primary/25 animate-ping" />
                <span className="absolute w-11 h-11 rounded-full bg-primary/35" />

                {/* Pin icon */}
                <div className="relative z-10 p-3 rounded-full bg-primary shadow-2xl shadow-primary/70 mb-1">
                  <MapPin className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
                </div>

                {/* Bubble label */}
                <div className="relative z-10 px-4 py-1.5 rounded-full bg-zinc-800 border border-primary/40 shadow-lg">
                  <span className="text-white text-sm font-bold whitespace-nowrap">Elite Academia</span>
                </div>
              </div>
            </div>

            {/* Attribution */}
            <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-zinc-800/80 border border-border">
              <span className="text-muted-foreground text-xs">Mapa ilustrativo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
