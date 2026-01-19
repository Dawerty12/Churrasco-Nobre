import MenuSection from "@/app/components/MenuSection";
import HeroCarousel from "@/app/components/HeroCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      
      {/* Carrossel no topo */}
      <HeroCarousel />

      {/* Seção de cardápios logo abaixo */}
      <MenuSection />
      
    </main>
  );
}