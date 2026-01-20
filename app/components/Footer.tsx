import { siteConfig } from "@/app/config/site";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-white mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-2">
               <a href={siteConfig.contato.instagram} target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
                 <Instagram size={16} /> {siteConfig.contato.instagramLabel}
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-primary transition-colors">Nossa História</Link></li>
              <li><Link href="/#cardapios" className="hover:text-primary transition-colors">Cardápios</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Solicitar Orçamento</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Fale Conosco</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="space-y-3">
                <a href={siteConfig.links.whatsappUrl} target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-green-500/20">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm">{siteConfig.contato.whatsappPrincipalFormatado}</span>
                </a>
                
                <a href={siteConfig.links.whatsappSecundarioUrl} target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-green-500/20">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm">{siteConfig.contato.whatsappSecundarioFormatado}</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href={`mailto:${siteConfig.contato.email}`} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm break-all">{siteConfig.contato.email}</span>
                </a>
                <a href={`mailto:${siteConfig.contato.emailBaixada}`} className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm break-all">{siteConfig.contato.emailBaixada}</span>
                </a>

                <div className="flex items-center gap-3 text-gray-400 pt-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <span className="text-sm">Rio de Janeiro, RJ</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js</p>
        </div>
      </div>
    </footer>
  );
}