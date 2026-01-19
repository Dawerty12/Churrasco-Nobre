"use client";

import Image from 'next/image';
import Link from 'next/link';
import { cardapios } from '@/app/data/cardapios';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

export default function MenuSection() {
  return (
    <section id="cardapios" className="relative py-32 bg-zinc-950 scroll-mt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-4">
            Nossos Cardápios
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Sabores que <span className="text-yellow-500">Encantam</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Escolha entre nossas opções exclusivas, preparadas com ingredientes selecionados 
            e o cuidado de quem faz churrasco há 16 anos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cardapios.map((item, index) => {
            // CORREÇÃO AQUI: Garante que nunca seja undefined
            const previewItens = item.itens ?? 
              (item.variacoes ? item.variacoes[0].itensPorCategoria.flatMap(c => c.itens) : []);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-primary/30 transition-all duration-500 ${
                  item.destaque ? 'ring-2 ring-primary/30 shadow-lg shadow-primary/10' : ''
                }`}>
                  {item.destaque && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-bold text-white">Mais Pedido</span>
                      </div>
                    </div>
                  )}

                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.imagemPrincipal}
                      alt={item.titulo}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors">
                      {item.titulo}
                    </h3>

                    <ul className="space-y-2">
                      {previewItens.slice(0, 4).map((comida, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0"></span>
                          {comida}
                        </li>
                      ))}
                      {previewItens.length > 4 && (
                        <li className="text-sm text-primary font-semibold">
                          +{previewItens.length - 4} itens
                        </li>
                      )}
                    </ul>

                    <Link
                      href={`/cardapios/${item.id}`}
                      className="group/btn relative block w-full pt-2"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white/5 border border-white/10 hover:border-primary/50 text-white hover:text-primary py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 overflow-hidden"
                      >
                        <span>Ver Detalhes</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Não encontrou o que procura? Criamos cardápios personalizados!
          </p>
          <Link href="/contato">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary hover:bg-primary/10 text-primary hover:text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg shadow-primary/10 hover:shadow-primary/30"
            >
              Fale com Nossa Equipe
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}