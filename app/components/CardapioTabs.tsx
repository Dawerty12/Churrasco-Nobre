"use client";

import { useState } from "react";
import { Variacao } from "@/app/data/cardapios";
import { CheckCircle2, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CardapioTabsProps {
  variacoes: Variacao[];
}

export default function CardapioTabs({ variacoes }: CardapioTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Navegação das Abas */}
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-12">
        {variacoes.map((variacao, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                isActive
                  ? "bg-primary text-black shadow-lg shadow-primary/25 scale-105"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {variacao.nome}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Conteúdo da Aba */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  {variacoes[activeTab].nome}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {variacoes[activeTab].itensPorCategoria.map((categoria, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-lg font-bold text-primary border-b border-primary/20 pb-2 inline-block">
                      {categoria.nome}
                      {categoria.nota && (
                        <span className="text-xs text-gray-500 font-normal ml-2 italic">
                          {categoria.nota}
                        </span>
                      )}
                    </h4>
                    <ul className="space-y-2">
                      {categoria.itens.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                          <CheckCircle2 className="w-4 h-4 text-primary/50 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {variacoes[activeTab].notaRodape && (
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-sm text-gray-500 italic">
                    {variacoes[activeTab].notaRodape}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}