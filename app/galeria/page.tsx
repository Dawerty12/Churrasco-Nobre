import { Metadata } from "next";
import fs from "fs";
import path from "path";


import GalleryGrid from "@/app/components/PhotoGallery"; 

export const metadata: Metadata = {
  title: "Galeria de Fotos - Churrasco Nobre Rio",
  description: "Confira fotos reais dos nossos eventos. Churrasco, Feijoada e Festas Juninas no RJ.",
};

export default function GaleriaPage() {
  const galleryDirectory = path.join(process.cwd(), "public/img/galeria");

  let images: string[] = [];

  try {
    const fileNames = fs.readdirSync(galleryDirectory);

    images = fileNames
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/img/galeria/${file}`);
      
  } catch (error) {
    console.error("Aviso: Crie a pasta public/img/galeria e coloque fotos lá.");
  }

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
          Nossa <span className="text-gradient-gold">Galeria</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Veja a qualidade dos nossos pratos e a organização dos nossos eventos.
        </p>
      </div>

      <GalleryGrid images={images} />

    </main>
  );
}