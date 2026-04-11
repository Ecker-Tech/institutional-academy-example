import { MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  { day: "Segunda a Sexta", hours: "05:30 às 22:00" },
  { day: "Sábado", hours: "09:00 às 12:00 e 14:00 às 16:00" },
  { day: "Domingo", hours: "10:00 às 12:00" },
];

export function Location() {
  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Venha nos{" "}
            <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              conhecer
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Estamos localizados no coração de Francisco Beltrão, prontos para
            receber você
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <a
            href="https://maps.app.goo.gl/Shrtmbkd1igdBuWA6"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-colors">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.926745407493!2d-53.075094325252216!3d-26.06865035846584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0729481698b1f%3A0xf72965d970f0074b!2sAv.%20Presidente%20Get%C3%BAlio%20Vargas%2C%20791%20-%20S%C3%A3o%20Miguel%2C%20Francisco%20Beltr%C3%A3o%20-%20PR%2C%2085602-120!5e0!3m2!1spt-BR!2sbr!4v1775931028871!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </a>

          <div className="space-y-6">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Endereço
                    </h3>
                    <p className="text-white/70">R. Getulio Vargas, 00</p>
                    <p className="text-white/70">
                      São Miguel, Francisco Beltrão - PR
                    </p>
                    <p className="text-white/70">CEP: 85602-120</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-3">
                      Horários de Funcionamento
                    </h3>
                    <div className="space-y-2">
                      {schedule.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-white/70">{item.day}</span>
                          <span className="text-white font-medium">
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
