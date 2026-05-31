'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 relative">
                <Image
                  src="/favicon.png"
                  alt="Elite Academia"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-lg font-bold italic text-primary">ELITE Academia</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ambiente familiar, professores certificados, equipamentos modernos e preço justo.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: 'Benefícios', href: '#benefits' },
                { label: 'Modalidades', href: '#modalities' },
                { label: 'Horários', href: '#schedule' },
                { label: 'Planos', href: '#pricing' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sobre Nós', href: '#' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Política de Privacidade', href: '#' },
                { label: 'Termos de Serviço', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@eliteacademia.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contato@elite.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Seu Bairro, SP, Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Elite Academia. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
