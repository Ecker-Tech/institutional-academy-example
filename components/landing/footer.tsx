import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "../icons/instagram";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="min-w-55 max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Flex force"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-md"
                />
                <div>
                  <span className="text-xl font-bold text-primary">
                    FLEX FORCE
                  </span>
                  <p className="text-xs text-muted-foreground tracking-widest">
                    ACADEMIA
                  </p>
                </div>
              </Link>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Construa sua melhor versão com treinos personalizados e
              acompanhamento profissional.
            </p>
          </div>

          <div className="min-w-45 space-y-4">
            <h4 className="font-semibold text-white tracking-wide">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#servicos", label: "Serviços" },
                { href: "#estrutura", label: "Estrutura" },
                { href: "#planos", label: "Planos" },
                { href: "#resultados", label: "Resultados" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-50 space-y-4">
            <h4 className="font-semibold text-white tracking-wide">Horários</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Seg-Sex: 05:30 - 22:00</li>
              <li>Sábado: 09:00 - 12:00 / 14:00 - 16:00</li>
              <li>Domingo: 10:00 - 12:00</li>
            </ul>
          </div>

          <div className="min-w-55 space-y-4">
            <h4 className="font-semibold text-white tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5545991023526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (45) 99102-3526
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/leonardo_ecker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <InstagramIcon />
                  @flexforce.academia
                </a>
              </li>

              <li>
                <div className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    R. Getulio Vargas, 00, São Miguel, Francisco Beltrão - PR
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Flex Force
          </p>

          <p className="text-white/40 text-sm text-center md:text-right">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/leonardo_ecker/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors font-semibold"
            >
              Ecker Tech
            </a>{" "}
            <span className="text-white/30">• Soluções Web & Cloud</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
