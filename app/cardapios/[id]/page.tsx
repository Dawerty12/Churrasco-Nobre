import { cardapios } from "../../data/cardapios";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import CardapioTabs from "@/app/components/CardapioTabs";

export function generateStaticParams() {
  return cardapios.map((cardapio) => ({
    id: cardapio.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const cardapio = cardapios.find((c) => c.id === Number(id));

  if (!cardapio) {
    return { title: "Cardápio não encontrado" };
  }

  // SEM SEGURANÇA: Usa direto a imagemCapa para o compartilhamento
  return {
    title: `${cardapio.titulo} - Buffet Premium`,
    description: `${cardapio.resumo}`,
    openGraph: {
      title: `${cardapio.titulo} - ${siteConfig.name}`,
      description: cardapio.texto1,
      url: `${siteConfig.url}/cardapios/${id}`,
      images: [{ url: `${siteConfig.url}${cardapio.imagemCapa}`, width: 1200, height: 630, alt: cardapio.titulo }],
    },
  };
}

export default async function DetalheCardapio({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cardapio = cardapios.find((c) => c.id === Number(id));

  if (!cardapio) notFound();

  // SEM SEGURANÇA: Removemos a linha que fazia o "fallback" (|| cardapio.imagemPrincipal)
  // Se cardapio.imagemCapa não existir, o Next.js vai reclamar (o que ajuda a identificar o erro).

  return (
    <main className="min-h-screen text-gray-100 pb-24 pt-32">
      <div className="container mx-auto px-4">
        
        <Link
          href="/#cardapios"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para Cardápios</span>
        </Link>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              {cardapio.destaque && (
                <span className="inline-block glass-gold px-4 py-2 rounded-full text-sm font-bold text-primary">
                  ⭐ Cardápio Mais Pedido
                </span>
              )}
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                {cardapio.titulo}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">{cardapio.resumo}</p>
              
              <div className="pt-4">
                 <Link href="/contato">
                    <button className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] hover:bg-right-bottom text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-primary/30 transition-all duration-500">
                      <Phone className="w-5 h-5" />
                      <span>Solicitar Orçamento</span>
                    </button>
                  </Link>
              </div>
            </div>

            {/* AQUI: Usando imagemCapa direto, sem proteção */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-zinc-800 group">
              <Image
                src={cardapio.imagemCapa} 
                alt={cardapio.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 mb-16 max-w-5xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p className="text-gray-300 leading-relaxed">{cardapio.texto1}</p>
              <p className="text-gray-300 leading-relaxed">{cardapio.texto2}</p>
            </div>
          </div>

          {/* ÁREA DE ITENS: Abas ou Lista Simples */}
          <div className="mb-20 max-w-5xl mx-auto">
            {cardapio.variacoes ? (
              <CardapioTabs variacoes={cardapio.variacoes} />
            ) : (
              <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Itens Inclusos
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {cardapio.itens?.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300 bg-black/20 p-3 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Galeria */}
          {cardapio.imagensExtras && cardapio.imagensExtras.length > 0 && (
            <div className="mb-20 max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                Galeria de Fotos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cardapio.imagensExtras.map((img, index) => (
                  <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-zinc-800 group">
                    <Image
                      src={img}
                      alt={`${cardapio.titulo} - Foto ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer */}
          <div className="glass-gold rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic text-white mb-8 leading-relaxed">
              "{cardapio.texto3}"
            </p>
            <Link href="/contato">
              <button className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] hover:bg-right-bottom text-black font-bold py-4 px-12 rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl shadow-primary/30 inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Solicitar Orçamento Agora
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}