import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge
            variant="outline"
            className="border-orange-500/50 text-orange-400 bg-orange-500/10 px-4 py-2 text-sm"
          >
            <Flame className="w-4 h-4 mr-2" />
            Vagas limitadas este mês
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Sua melhor versão{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              começa aqui
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Treine com foco em saúde, estética e performance em um ambiente premium. 
            Equipamentos de ponta e acompanhamento profissional para você alcançar seus objetivos.
          </p>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-all duration-300"
            >
              <a
                href="https://wa.me/554699721175?text=Olá,%20quero%20agendar%20uma%20aula%20experimental%20na%20RK%20Fitness%20Center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero minha Aula Experimental
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Aberto agora</span>
            </div>
            <div>+500 alunos ativos</div>
            <div className="hidden sm:block">Desde 2010</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
