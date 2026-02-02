"use client";

import { siteConfig } from "@/app/config/site";
import { Phone, Mail, MapPin, Instagram, Loader2 } from "lucide-react"; 
import { useState } from "react";

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  // ESTADO PARA DUPLICAR O EMAIL
  const [emailValue, setEmailValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setStatus("success");
      form.reset();
      setEmailValue(""); // Limpa o email duplicado também
      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">
          Fale <span className="text-gradient-gold">Conosco</span>
        </h1>
        <p className="text-gray-400">Escolha o canal de sua preferência</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LADO ESQUERDO: INFORMAÇÕES */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-gold rounded-2xl p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
              </div>
              <div className="space-y-4">
                <a href={siteConfig.links.whatsappUrl} target="_blank" className="block group">
                  <div className="text-xs text-primary mb-1">Orçamentos</div>
                  <div className="font-bold text-lg group-hover:text-green-400 transition-colors">
                    {siteConfig.contato.whatsappPrincipalFormatado}
                  </div>
                </a>
                <a href={siteConfig.links.whatsappSecundarioUrl} target="_blank" className="block group border-t border-white/10 pt-4">
                  <div className="text-xs text-primary mb-1"> Orçamentos </div>
                  <div className="font-bold text-lg group-hover:text-green-400 transition-colors">
                    {siteConfig.contato.whatsappSecundarioFormatado}
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
               <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-white">E-mails</h3>
              </div>
              <div className="space-y-3">
                 <a href={`mailto:${siteConfig.contato.email}`} className="block group">
                    <span className="text-xs text-gray-400 block mb-1">Rio de Janeiro</span>
                    <span className="text-sm font-medium break-all group-hover:text-primary transition-colors">
                      {siteConfig.contato.email}
                    </span>
                 </a>
                 <a href={`mailto:${siteConfig.contato.emailBaixada}`} className="block group border-t border-white/10 pt-3">
                    <span className="text-xs text-gray-400 block mb-1">Baixada Fluminense</span>
                    <span className="text-sm font-medium break-all group-hover:text-primary transition-colors">
                      {siteConfig.contato.emailBaixada}
                    </span>
                 </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 space-y-4">
              <a href={siteConfig.contato.instagram} target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center">
                   <Instagram className="w-5 h-5" />
                </div>
                <span className="font-medium">{siteConfig.contato.instagramLabel}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 pt-4 border-t border-white/10">
                 <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                    <div className="text-xs text-gray-400">Atendemos</div>
                    <div className="text-sm font-bold">Rio de Janeiro e Baixada</div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* LADO DIREITO: FORMULÁRIO */}
          <div className="lg:col-span-2">
             <div className="glass rounded-2xl p-8 md:p-10 border border-zinc-800">
              <h2 className="text-2xl font-bold text-white mb-2">Solicitar Orçamento</h2>
              
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-200 animate-pulse">
                  ✅ Solicitação enviada com sucesso! Em breve entraremos em contato.
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-200">
                  ❌ Ocorreu um erro. Por favor, tente pelo WhatsApp.
                </div>
              )}

               <form 
                name="contato" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="space-y-6 mt-6"
              >
                <input type="hidden" name="form-name" value="contato" />
                
                {/* CAMPO ESPIÃO: Copia o valor do email para aparecer no corpo do texto */}
                <input type="hidden" name="email_escrito" value={emailValue} />

                {/* Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="nome" required placeholder="Nome Completo *" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-primary transition-colors" />
                  
                  {/* Input de Email com Estado */}
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Seu E-mail *" 
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-primary transition-colors"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
                
                {/* Telefone e Tipo de Cardápio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input type="tel" name="telefone" required placeholder="WhatsApp *" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-primary transition-colors" />
                   
                   <select name="tipo-cardapio" required className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none cursor-pointer">
                      <option value="">Cardápio de Interesse... *</option>
                      <option value="churrasco">Churrasco</option>
                      <option value="festa-junina">Festa Junina</option>
                      <option value="feijoada">Feijoada</option>
                      <option value="coquetel">Coquetel</option>
                   </select>
                </div>
                
                {/* Convidados e Data */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="number" name="convidados" required placeholder="Nº Convidados *" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none" />
                  <input type="text" name="data" required placeholder="Data do Evento *" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none" />
                </div>
                
                {/* Localização */}
                <div>
                  <input type="text" name="localizacao" required placeholder="Bairro / Cidade *" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none" />
                </div>
                
                {/* Mensagem */}
                <textarea name="mensagem" required rows={4} placeholder="Mensagem adicional... *" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 text-white outline-none resize-none"></textarea>
                
                <button 
                  type="submit" 
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" /> Enviando...
                    </>
                  ) : (
                    "Enviar Solicitação"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}