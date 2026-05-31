"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 sm:gap-3 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <Image
                  src="/favicon.png"
                  alt="Elite Academia"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-base sm:text-lg font-bold italic text-primary">
                ELITE Academia
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Ambiente familiar, professores certificados, equipamentos modernos
              e preço justo.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-foreground text-sm sm:text-base">
              Navegação
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: "Benefícios", href: "#benefits" },
                { label: "Modalidades", href: "#modalities" },
                { label: "Horários", href: "#schedule" },
                { label: "Planos", href: "#pricing" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-foreground text-sm sm:text-base">
              Empresa
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: "Sobre Nós", href: "#" },
                { label: "FAQ", href: "#faq" },
                { label: "Política de Privacidade", href: "#" },
                { label: "Termos de Serviço", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <h4 className="font-bold text-foreground text-sm sm:text-base">
              Contato
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-slate-400 hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <a
                  href="mailto:contato@eliteacademia.com.br"
                  className="text-slate-400 hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  contato@elite.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs sm:text-sm">
                  Pato Branco, Paraná
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6 sm:my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Copyright */}
          <p className="text-slate-400 text-xs sm:text-sm">
            © {currentYear} Elite Academia. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="p-1.5 sm:p-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Developer credit */}
        <p className="text-center text-slate-400 text-[10px] sm:text-xs mt-4 sm:mt-6">
          Desenvolvido por{" "}
          <a
            href="https://eckertech.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Ecker Tech
          </a>
        </p>
      </div>
    </footer>
  );
}
