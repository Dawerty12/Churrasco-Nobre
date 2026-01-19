import { siteConfig } from "@/app/config/site";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Solicite seu Orçamento",
  description: `Entre em contato com o ${siteConfig.name}. Atendemos Rio de Janeiro e Baixada Fluminense. ${siteConfig.contato.whatsappPrincipalFormatado}`,
  openGraph: {
    title: "Solicitar Orçamento - Churrasco Nobre Rio",
    description: "Fale conosco e transforme sua festa em um evento inesquecível",
  },
};

export default function Contato() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-4">
            Fale Conosco
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Vamos Fazer Sua Festa <span className="text-gradient-gold">Acontecer</span>
          </h1>
          <p className="text-xl text-gray-400">
            Preencha o formulário ou escolha seu canal preferido para falar com nossa equipe
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="glass-gold rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-white mb-6">Atendimento Rápido</h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={siteConfig.links.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">WhatsApp</div>
                    <div className="font-bold text-white">{siteConfig.contato.whatsappPrincipalFormatado}</div>
                    <div className="text-xs text-primary">Resposta em minutos</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contato.email}`}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="font-bold text-white text-sm break-all">{siteConfig.contato.email}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Atendemos</div>
                    <div className="font-bold text-white">Rio de Janeiro</div>
                    <div className="font-bold text-white">Baixada Fluminense</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="glass w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Horário</div>
                    <div className="font-bold text-white">Seg - Sex: 9h - 18h</div>
                    <div className="font-bold text-white">Sáb: 9h - 14h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
              <a
                href={siteConfig.contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors group"
              >
                <div className="glass group-hover:glass-gold w-10 h-10 rounded-lg flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@churrasconobrerio</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 md:p-10 border border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-2">Solicitar Orçamento</h2>
              <p className="text-gray-400 mb-8">
                Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis
              </p>

              <form 
                name="contato" 
                method="POST" 
                data-netlify="true" 
                action="/sucesso"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contato" />

                {/* Grid 1: Nome e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white placeholder-gray-500 outline-none transition-all"
                      placeholder="Ex: João Silva"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white placeholder-gray-500 outline-none transition-all"
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                </div>

                {/* Grid 2: Cardápio e Convidados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Cardápio de Interesse
                    </label>
                    <select
                      name="tipo-cardapio"
                      className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="" className="text-gray-500">Selecione o cardápio...</option>
                      <option value="churrasco">Churrasco (Econômico, Premium, Royal)</option>
                      <option value="festa-junina">Festa Junina</option>
                      <option value="feijoada">Feijoada</option>
                      <option value="coquetel">Coquetel</option>
                      <option value="personalizado">Outro / Personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Número de Convidados
                    </label>
                    <input
                      type="number"
                      name="convidados"
                      min="10"
                      className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white placeholder-gray-500 outline-none transition-all"
                      placeholder="Ex: 50"
                    />
                  </div>
                </div>

                {/* Grid 3: Data e Localização (NOVO) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Data do Evento
                    </label>
                    <input
                      type="date"
                      name="data"
                      className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Local do Evento (Bairro/Cidade)
                    </label>
                    <input
                      type="text"
                      name="localizacao"
                      className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white placeholder-gray-500 outline-none transition-all"
                      placeholder="Ex: Barra da Tijuca, RJ"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Mensagem Adicional
                  </label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-primary rounded-xl p-4 text-white placeholder-gray-500 outline-none transition-all resize-none"
                    placeholder="Gostaria de saber mais detalhes sobre o pacote Premium..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] hover:bg-right-bottom text-black font-bold py-5 rounded-xl transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
                >
                  <span>Enviar Solicitação</span>
                  <Phone className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você concorda em receber contato da nossa equipe via WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}