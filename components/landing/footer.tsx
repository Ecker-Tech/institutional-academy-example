import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Instagram } from "lucide-react";
import { InstagramIcon } from "../icons/instagram";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="RK Fitness Center"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm">
              Construa sua melhor versão com treinos personalizados e
              acompanhamento profissional.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#servicos"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#estrutura"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Estrutura
                </Link>
              </li>
              <li>
                <Link
                  href="#planos"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="#resultados"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Resultados
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Horários</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Seg-Sex: 05:30 - 22:00</li>
              <li>Sábado: 09:00 - 12:00 / 14:00 - 16:00</li>
              <li>Domingo: 10:00 - 12:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/554699721175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (46) 99721-1175
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rk.fitnesscenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <InstagramIcon />
                  @rk.fitnesscenter
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    R. São Joaquim, 39, Cristo Rei, Francisco Beltrão - PR
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 pb-20 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Academia RK Fitness Center. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
