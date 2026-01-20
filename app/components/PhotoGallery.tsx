"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GalleryProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p>Adicione fotos na pasta <code>public/img/galeria</code></p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-900 shadow-md"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Foto Galeria ${index}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white drop-shadow-lg w-10 h-10 opacity-90 scale-50 group-hover:scale-100 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/50 rounded-full p-2">
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Visualização ampliada"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}