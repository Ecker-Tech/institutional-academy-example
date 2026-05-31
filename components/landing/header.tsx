'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Modalidades', href: '#modalities' },
    { label: 'Horários', href: '#schedule' },
    { label: 'Planos', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative">
            <Image
              src="/favicon.png"
              alt="Elite Academia"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <span className="text-xl font-bold italic text-white hidden sm:inline">ELITE Academia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Vi o site da Elite Academia e gostaria de tirar dúvidas sobre a matrícula.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Garantir Vaga</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Vi o site da Elite Academia e gostaria de tirar dúvidas sobre a matrícula.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <Phone className="w-4 h-4" />
              Garantir Vaga no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
