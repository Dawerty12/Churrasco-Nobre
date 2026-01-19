import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Calendar, Heart } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";

export const metadata: Metadata = {
  title: "Nossa História - 16 Anos de Tradição",
  description: "Conheça a história do Churrasco Nobre Rio. Desde 2008 levando sabor, qualidade e tradição para mais de 6.000 eventos no Rio de Janeiro e Baixada Fluminense.",
  openGraph: {
    title: "Nossa História - Churrasco Nobre Rio",
    description: "16 anos de tradição em churrasco premium",
    images: ["/img/Marcelo.jpeg"],
  },
};

export default function Sobre() {
  const stats = [
    { icon: Calendar, value: "16", label: "Anos de Experiência", suffix: "+" },
    { icon: Users, value: "6.000", label: "Eventos Realizados", suffix: "+" },
    { icon: Award, value: "4.9", label: "Avaliação Média", suffix: "/5" },
    { icon: Heart, value: "100", label: "Satisfação", suffix: "%" },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-4">
            Nossa História
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            16 Anos de <span className="text-gradient-gold">Tradição</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 leading-relaxed">
            Uma jornada de sabor, qualidade e paixão pelo verdadeiro churrasco brasileiro
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-gold rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl space-y-32">

        {/* Story Block 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Como Tudo <span className="text-primary">Começou</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Em 2008, o que começou como uma paixão entre amigos se transformou em uma 
              missão de vida: levar a autêntica experiência do churrasco brasileiro para 
              o conforto do seu lar.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Com receitas de família, cortes nobres cuidadosamente selecionados e um 
              atendimento que conquistou o coração dos cariocas, nasceu o Churrasco Nobre Rio.
            </p>
            <div className="glass-gold p-6 rounded-2xl border-l-4 border-primary">
              <p className="text-gray-200 italic">
                "Nossa missão sempre foi simples: servir como se estivéssemos recebendo 
                nossa própria família."
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-zinc-800 transform lg:rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/img/Marcelo.jpeg"
                alt="Fundador Marcelo - Churrasco Nobre"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Story Block 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-zinc-800 transform lg:-rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/img/MarceloEdgar1.jpeg"
                alt="Equipe em evento premium"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Mais de 6.000 <span className="text-primary">Celebrações</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ao longo dessa jornada, tivemos a honra de participar de mais de 6.000 
              momentos especiais. De casamentos intimistas a grandes eventos corporativos, 
              nossa equipe está sempre pronta para fazer da sua festa inesquecível.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Não vendemos apenas comida; entregamos tranquilidade. Nossa equipe é 
              treinada para que você seja um convidado na sua própria festa.
            </p>
            
            {/* Features List */}
            <ul className="space-y-4 pt-4">
              {[
                "Atendimento personalizado",
                "Carnes nobres selecionadas",
                "Equipe profissional uniformizada",
                "Preparo no local",
                "Limpeza completa incluída",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative">
          <div className="glass rounded-3xl p-12 md:p-16 text-center border-2 border-primary/20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 left-10 w-40 h-40 border-4 border-primary rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-primary rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                Nossa Filosofia
              </h2>
              <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-8">
                "Servir bem para servir sempre"
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Acreditamos que o churrasco é um momento sagrado de união entre família 
                e amigos. Por isso, qualidade não é diferencial, é nossa obrigação. 
                Cada detalhe importa, desde a seleção das carnes até o último prato lavado.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Nossos <span className="text-primary">Valores</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade",
                description: "Apenas os melhores cortes e ingredientes selecionados",
              },
              {
                title: "Tradição",
                description: "Receitas familiares passadas através de gerações",
              },
              {
                title: "Excelência",
                description: "Atendimento profissional que supera expectativas",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="glass-gold p-8 rounded-2xl text-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-black">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}