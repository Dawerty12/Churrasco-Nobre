"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// DADOS DO CARROUSEL
const slides = [
  {
    id: 1,
    // Churrasco
    image: "/img/churrasco.jpg",
    imageMobile: "/img/churrasco.jpg", 
    title: "O Verdadeiro Churrasco",
    subtitle: "Tradição e sabor na sua casa",
    cta: "Ver Cardápios",
    link: "#cardapios"
  },
  {
    id: 2,
    // Festa Junina
    image: "/img/junina.jpg",
    imageMobile: "/img/junina.jpg",
    title: "Festa Junina Completa",
    subtitle: "Do milho ao quentão, levamos o arraiá até você",
    cta: "Conhecer Pacotes",
    link: "/cardapios/2"
  },
  {
    id: 3,
    // Feijoada
    image: "/img/feijoada.jpg",
    imageMobile: "/img/feijoada.jpg",
    title: "Feijoada Premium",
    subtitle: "Aquele sabor brasileiro servido com excelência",
    cta: "Solicitar Agora",
    link: "/cardapios/3"
  },
  {
    id: 4,
    image: "/img/coquetel4.jpeg",
    imageMobile: "/img/coquetel4.jpeg",
    title: "Coquetel",
    subtitle: "Elegância e praticidade para seu evento",
    cta: "Ver Opções",
    link: "/cardapios/4"
  }
];

export default function HeroCarousel() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            
            {/* IMAGEM DESKTOP (Escondida no Mobile) */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                quality={90}
                sizes="100vw"
              />
            </div>

            {/* IMAGEM MOBILE (Escondida no Desktop) */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
              <Image
                src={slide.imageMobile}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
                quality={90}
                sizes="100vh"
              />
            </div>

            {/* Overlay Escuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 md:to-transparent"></div>

            {/* Texto e Botões */}
            <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
              <div className="max-w-4xl space-y-6">
                
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-sm animate-fade-in-up">
                  Desde 2008
                </span>

                <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                  {slide.subtitle}
                </p>

                <div className="pt-8">
                  <Link href={slide.link}>
                    <button className="bg-primary hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                      {slide.cta}
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilização dos pontinhos (Bullets) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37 !important;
          width: 20px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}