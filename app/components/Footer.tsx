import Link from "next/link";
import { siteConfig } from "@/app/config/site";
import { Instagram, Phone, Mail, MapPin, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-premium opacity-5"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                CHURRASCO<span className="text-primary">NOBRE</span>
              </h3>
              <p className="text-xs text-gray-500 tracking-widest uppercase">
                Tradição desde 2008
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            
            {/* Trust Badge */}
            <div className="glass-gold px-4 py-3 rounded-xl inline-flex items-center gap-2">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <div className="text-sm">
                <div className="font-bold text-white">4.9/5.0</div>
                <div className="text-xs text-gray-400">+500 Avaliações</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/#cardapios", label: "Cardápios" },
                { href: "/sobre", label: "Nossa História" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={siteConfig.links.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                  <div>
                    <div className="font-semibold text-white mb-1">Rio de Janeiro</div>
                    <div>{siteConfig.contato.whatsappPrincipalFormatado}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contato.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="break-all">{siteConfig.contato.email}</div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <div>Rio de Janeiro & Baixada Fluminense</div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Redes Sociais</h4>
            <div className="space-y-4">
              <a
                href={siteConfig.contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors group"
              >
                <div className="glass group-hover:glass-gold w-12 h-12 rounded-xl flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-sm">@churrasconobrerio</span>
              </a>
              
              {/* CTA */}
              <div className="pt-4">
                <Link href="/contato">
                  <button className="w-full bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] hover:bg-right-bottom text-black font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all duration-500 text-sm">
                    Solicitar Orçamento
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span>Feito com 🔥 no Rio de Janeiro</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}