"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/554699721175?text=Olá,%20quero%20agendar%20uma%20aula%20experimental%20na%20RK%20Fitness%20Center"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Agende sua aula!
      </span>
    </a>
  )
}
