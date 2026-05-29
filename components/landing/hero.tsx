import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Pulse glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge
            variant="outline"
            className="border-primary/50 text-primary bg-primary/10 px-4 py-2 text-sm inline-flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Transformação começa agora
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight float-up-animation">
            <span className="block text-foreground">Alcance seu</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              Potencial Máximo
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PULSAR é mais que uma academia premium. É uma comunidade de elite onde força, disciplina e excelência se encontram. Transforme seu corpo e sua mente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="group relative px-8 py-4 font-semibold text-foreground overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary group-hover:opacity-110 transition-opacity rounded-lg" />
              <span className="relative flex items-center justify-center gap-2">
                Agende uma Aula
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 font-semibold text-foreground border-2 border-primary hover:bg-primary/10 transition-colors rounded-lg">
              Conheça os Planos
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4 pt-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Membros Ativos</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">14+</div>
              <p className="text-sm text-muted-foreground">Anos de Excelência</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99%</div>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
