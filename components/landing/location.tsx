"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const schedule = [
  { day: "Segunda a Sexta", hours: "05:30 às 22:00" },
  { day: "Sábado", hours: "09:00 às 12:00 e 14:00 às 16:00" },
  { day: "Domingo", hours: "10:00 às 12:00" },
]

export function Location() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contato" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 duration-700 text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Venha nos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              conhecer
            </span>
          </h2>
          <p className="animate-on-scroll opacity-0 duration-700 delay-150 text-white/60 max-w-2xl mx-auto">
            Estamos localizados no coração de Francisco Beltrão, prontos para receber você
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="animate-on-scroll opacity-0 duration-700 bg-zinc-900/50 border-zinc-800 overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1234567890123!2d-53.0550000!3d-26.0800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA0JzQ4LjAiUyA1M8KwMDMnMTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="animate-on-scroll opacity-0 duration-700 delay-150 bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">Endereço</h3>
                    <p className="text-white/70">R. São Joaquim, 39</p>
                    <p className="text-white/70">Cristo Rei, Francisco Beltrão - PR</p>
                    <p className="text-white/70">CEP: 85602-080</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll opacity-0 duration-700 delay-300 bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-3">Horários de Funcionamento</h3>
                    <div className="space-y-2">
                      {schedule.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-white/70">{item.day}</span>
                          <span className="text-white font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              asChild
              size="lg"
              className="animate-on-scroll opacity-0 duration-700 delay-500 w-full bg-zinc-800 hover:bg-zinc-700 text-white"
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R.+São+Joaquim,+39,+Cristo+Rei,+Francisco+Beltrão+-+PR,+85602-080"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
