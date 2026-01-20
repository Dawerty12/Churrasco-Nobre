import { Metadata } from "next";
import PhotoGallery from "@/app/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Galeria de Fotos - Churrasco Nobre Rio",
  description: "Veja fotos dos nossos eventos, pratos e decorações. Churrasco, Feijoada e Festas Juninas no RJ.",
};

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
          Nossa <span className="text-gradient-gold">Galeria</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Confira alguns momentos especiais e a qualidade dos nossos pratos.
          Uma imagem vale mais que mil palavras.
        </p>
      </div>
      <PhotoGallery />

    </main>
  );
}