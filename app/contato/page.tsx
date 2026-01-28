// app/contato/page.tsx
"use client"; 

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro("");

    // =================================================================
    // QUANDO TIVER TEMPO, COLAR MEUS CÓDIGOS DO EMAILJS AQUI DENTRO:
    // =================================================================
    const serviceID = "service_xxxxxxx";  
    const templateID = "template_xxxxxxx"; 
    const publicKey = "xxxxxxxxxxxxxx";    
    // =================================================================

    if (formRef.current) {
      emailjs
        .sendForm(serviceID, templateID, formRef.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            setLoading(false);
            setSucesso(true);
            formRef.current?.reset();
          },
          (error: any) => {
            setLoading(false);
            setErro("Erro ao conectar. Verifique se as chaves do EmailJS estão configuradas.");
            console.error("Erro detalhado:", error.text);
          }
        );
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Fale Conosco</h1>
            <p className="text-gray-400">Preencha o formulário ou chame no WhatsApp.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/40 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md">
            
            {/* Lado Esquerdo (Dados de Contato) */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Canais de Atendimento</h3>
                    <p className="text-gray-400">Rio de Janeiro e Baixada Fluminense.</p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500">
                             {/* Ícone Telefone */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">WhatsApp / Telefone</p>
                            <p className="text-lg font-bold text-white">(21) 98643-9151</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500">
                            {/* Ícone Email */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-lg font-bold text-white">contatochurrasconobrerj@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lado Direito: Formulário */}
            <div className="bg-black/40 p-8 rounded-2xl border border-white/5 shadow-xl">
                
                {sucesso ? (
                  <div className="text-center py-12 animate-pulse-slow">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Recebemos seu pedido!</h3>
                    <p className="text-gray-400">Em breve entraremos em contato.</p>
                    <button onClick={() => setSucesso(false)} className="mt-8 text-yellow-500 hover:underline">Enviar nova mensagem</button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={sendEmail}>
                      <div className="space-y-5">
                          
                          {/* Nome - Obrigatório */}
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Seu Nome</label>
                              <input type="text" name="nome" required className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none" placeholder="Ex: Lucas Silva" />
                          </div>

                          {/* Email - Obrigatório */}
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Seu E-mail</label>
                              <input type="email" name="email" required className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none" placeholder="cliente@email.com" />
                          </div>

                          {/* WhatsApp - Obrigatório */}
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Seu WhatsApp</label>
                              <input type="tel" name="telefone" required className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none" placeholder="(21) 99999-9999" />
                          </div>

                          {/* Select */}
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Tipo de Evento</label>
                              <select name="evento" className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none">
                                  <option>Churrasco Tradicional</option>
                                  <option>Casamento</option>
                                  <option>Festa Junina</option>
                                  <option>Coquetel</option>
                                  <option>Feijoada</option>
                                  <option>Outro</option>
                              </select>
                          </div>

                          {/* Mensagem */}
                          <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
                              <textarea name="mensagem" rows={4} className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg p-3 text-white focus:border-yellow-500 outline-none" placeholder="Quantas pessoas? Data? Local?"></textarea>
                          </div>

                          {erro && <p className="text-red-500 text-sm">{erro}</p>}

                          <button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-lg transition-transform hover:scale-[1.02] shadow-lg shadow-yellow-500/10 disabled:opacity-50">
                              {loading ? "Enviando..." : "ENVIAR SOLICITAÇÃO"}
                          </button>
                      </div>
                  </form>
                )}
            </div>
        </div>
      </div>
    </main>
  );
}