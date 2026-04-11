"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Planos", href: "#planos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 shadow-md"
            >
              <Image
                src="/logo.png"
                alt="Flex Force"
                fill
                className="object-cover"
                priority
              />
            </Link>

            <div>
              <span className="text-xl font-bold text-primary">FLEX FORCE</span>
              <p className="text-xs text-muted-foreground tracking-widest">
                ACADEMIA
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6"
            >
              <a
                href="https://wa.me/5545991023526?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20academia."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende sua Aula
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold mt-4"
            >
              <a
                href="https://wa.me/5545991023526?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20academia."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende sua Aula
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
