"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/img/churrasco.jpg", alt: "Churrasco Nobre", category: "Churrasco" },
  { id: 2, src: "/img/junina.jpg", alt: "Festa Junina", category: "Junina" },
  { id: 3, src: "/img/feijoada.jpg", alt: "Feijoada Completa", category: "Feijoada" },
  { id: 4, src: "/img/tradicional.jpg", alt: "Coquetel Volante", category: "Coquetel" },
  { id: 5, src: "/img/churrasco.jpg", alt: "Carnes Nobres", category: "Churrasco" },
  { id: 6, src: "/img/feijoada.jpg", alt: "Buffet Completo", category: "Feijoada" },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative h-80 overflow-hidden rounded-xl cursor-pointer shadow-lg border border-white/10"
              onClick={() => setSelectedImage(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{photo.category}</span>
                <h3 className="text-xl font-serif font-bold">{photo.alt}</h3>
                <p className="text-xs text-gray-300 mt-2">Clique para ampliar</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
            <X size={40} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Galeria Churrasco Nobre"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </section>
  );
}