"use client";

import Link from 'next/link';
import { siteConfig } from '@/app/config/site';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Link
        href={siteConfig.links.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transition-all flex items-center gap-3 pr-6">
            <MessageCircle className="w-7 h-7" />
            
            {/* Text Label (Hidden on mobile, shown on hover on desktop) */}
            <span className="hidden lg:block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap font-semibold">
              Fale Conosco
            </span>
          </div>

          {/* Tooltip for Mobile */}
          <div className="lg:hidden absolute -top-16 right-0 glass-gold px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="text-sm font-semibold text-white">Fale Conosco</span>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-primary/30 backdrop-blur-xl rotate-45"></div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}