"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/app/config/site';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);


  const links = [
    { href: "/", label: "INÍCIO" },
    { href: "/sobre", label: "NOSSA HISTÓRIA" },
    { href: "/#cardapios", label: "CARDÁPIOS" },
    { href: "/galeria", label: "GALERIA" }, 
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Premium */}
          <Link href="/" className="group relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start"
            >
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
                <span className="text-white group-hover:text-gradient-gold transition-all">CHURRASCO</span>
                <span className="text-primary ml-1">NOBRE</span>
              </span>
              <span className="text-[10px] md:text-xs text-gray-400 tracking-[0.2em] uppercase">
                Tradição desde 2008
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-gray-300 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links & CTA */}
            <div className="flex items-center gap-4 pl-6 border-l border-gray-700">
              <motion.a
                href={siteConfig.contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>

              <motion.a
                href={siteConfig.links.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </motion.a>

              <Link href="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] hover:bg-right-bottom text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 transition-all duration-500"
                >
                  SOLICITAR ORÇAMENTO
                </motion.button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white z-50 p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 bg-black/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <nav className="flex flex-col items-center gap-6">
                {/* Links do Menu Mobile + Contato */}
                {[...links, { href: "/contato", label: "CONTATO" }].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-2xl font-bold text-white hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a
                  href={siteConfig.contato.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={siteConfig.links.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  <Phone size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}