"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const structureItems = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    alt: "Equipamentos de musculação",
    title: "Equipamentos de Ponta",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop",
    alt: "Área de treino",
    title: "Área de Treino",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    alt: "Área de peso livre",
    title: "Peso Livre",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop",
    alt: "Treino funcional",
    title: "Funcional",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop",
    alt: "Área cardio",
    title: "Cardio",
  },
];

export function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % structureItems.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + structureItems.length) % structureItems.length,
    );
    setAutoPlay(false);
  };

  useEffect(() => {
    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % structureItems.length);
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, autoPlay]);

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <section id="estrutura" className="py-24 bg-black scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nossa{" "}
            <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Estrutura
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ambiente premium com equipamentos de última geração para você
            treinar com conforto e segurança
          </p>
        </div>

        <div
          className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carrossel */}
          <div className="relative h-96 md:h-125">
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white font-bold text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            size="icon"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
            size="icon"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>

          {/* Indicadores (dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {structureItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
