// app/data/cardapios.ts

export interface CategoriaItens {
  nome: string;
  itens: string[];
  nota?: string;
}

export interface Variacao {
  nome: string;
  itensPorCategoria: CategoriaItens[];
  notaRodape?: string;
}

export interface CardapioItem {
  id: number;
  titulo: string;
  resumo: string;
  texto1: string;
  texto2: string;
  texto3: string;
  variacoes?: Variacao[];
  itens?: string[]; 
  imagemPrincipal: string; 
  imagemCapa: string;      
  imagensExtras: string[];
  destaque?: boolean;
}

export const cardapios: CardapioItem[] = [
  {
    id: 1,
    titulo: "Churrasco",
    resumo: "O clássico churrasco carioca em 3 opções de pacotes exclusivos.",
    texto1: "Nosso carro chefe. O churrasco é essencial na vida de todo carioca, e nada é melhor que reunir a família e amigos para aproveitar sem preocupações.",
    texto2: "Com 16 anos de experiência, trazemos cortes selecionados e serviço impecável. Além das carnes nobres, nossa equipe prepara os acompanhamentos na hora, garantindo aquele sabor de comida caseira fresca.",
    texto3: "Escolha o pacote ideal para o tamanho e estilo do seu evento.",
    imagemPrincipal: "/img/churrasco.jpg",
    imagemCapa: "/img/Churrasqueira.jpeg", 
    imagensExtras: ["/img/MesaChurrasco.jpeg", "/img/MesaRoda.jpeg", "/img/churrasco.jpg"],
    destaque: true,
    variacoes: [
      {
        nome: "Pacote Econômico",
        itensPorCategoria: [
          { nome: "Entradas", itens: ["Pão de Alho", "Linguiça de Pernil"] },
          { nome: "Guarnições", itens: ["Arroz Branco", "Molho à Campanha", "Farofa"] },
          { nome: "Saladas", itens: ["Verduras", "Folhas", "Salada de macarrão"] },
          { nome: "Carnes", itens: ["Alcatra", "Maminha", "Baby Beef", "Miolo da Alcatra", "Drummet de Frango", "Costelinha Suína", "Pernil Suíno"] },
          { nome: "Sobremesa", itens: ["Banana na Brasa com Calda e Sorvete"] }
        ],
        notaRodape: "* Adicionais como picanha, coração, batata frita e etc podem ser inclusos por preço definido em tabela"
      },
      {
        nome: "Pacote Premium",
        itensPorCategoria: [
          { nome: "Entradas", itens: ["Pão de Alho", "Linguiça de Pernil", "Salsichão"] },
          { nome: "Guarnições", itens: ["Arroz Branco", "Arroz Colorido", "Molho à Campanha", "Farofa"] },
          { nome: "Saladas", itens: ["Verduras", "Frutas", "Folhas", "Feijão Fradinho", "Ovos de Codorna", "Fuzilli a Francesa", "Salpicão de presunto"], nota: "(escolher 5 opções)" },
          { nome: "Carnes", itens: ["Picanha", "Alcatra", "Maminha", "Baby Beef", "Miolo da Alcatra", "Drummet de Frango", "Costelinha Suína", "Pernil Suíno", "Coração de Galinha"] },
          { nome: "Sobremesa", itens: ["Banana na Brasa com Calda e Sorvete"] }
        ],
        notaRodape: "* Adicionais como Picanha black angus, kafta, batata frita e etc podem ser inclusos por preço definido em tabela"
      },
      {
        nome: "Pacote Royal",
        itensPorCategoria: [
          { nome: "Entradas", itens: ["Pão de Alho", "Linguiça Mineira Petisco", "Linguiça Toscana", "Fraldinha ao Alho"] },
          { nome: "Guarnições", itens: ["Arroz Branco", "Arroz com Brocolis", "Batata frita", "Molho à Campanha", "Farofa com Ovos e Bacon", "Molho de Ervas", "Feijão Tropeiro"] },
          { nome: "Saladas", itens: ["Frutas", "Salada Caesar", "Salada Verde com Queijos em Cubos", "Salada de Batata com Maionese"] },
          { nome: "Carnes", itens: ["Picanha", "Bife de Ancho", "Bife de Tira", "Filé Mignon ao Queijo", "Costelinha de Porco ao Barbecue", "Picanha Suína", "Coração de Galinha"] },
          { nome: "Sobremesa", itens: ["Banana na Brasa com Calda e Sorvete"] }
        ],
        notaRodape: "* Adicionais como Picanha black angus, Kafta, OpenBar e etc podem ser inclusos por preço definido em tabela"
      }
    ]
  },
  {
    id: 2,
    titulo: "Festa Junina",
    resumo: "O melhor clima de arraiá o ano inteiro.",
    texto1: "Uma opção prática, temática e deliciosa. O serviço de festa junina traz aquela nostalgia das comidas típicas com o padrão de qualidade Churrasco Nobre.",
    texto2: "Nossos pratos são montados artesanalmente com ingredientes frescos. Oferecemos desde os caldos tradicionais até os espetinhos feitos na hora.",
    texto3: "Perfeito para eventos corporativos, aniversários temáticos e condomínios.",
    imagemPrincipal: "/img/junina.jpg",
    imagemCapa: "/img/MesaFestaJuninaCaldos1.jpeg",
    imagensExtras: ["/img/ChurrasqueiraEspetinhos1.jpeg", "/img/MesaFestaJuninaGrande2.jpeg", "/img/junina.jpg"],
    variacoes: [
      {
        nome: "Festa Completa",
        itensPorCategoria: [
          { nome: "Espetinhos", itens: ["Carne", "Frango", "Linguiça", "Salsichão", "Queijo Coalho", "Misto", "Coração de Frango", "Farofa Especial", "Molho à Campanha"] },
          { nome: "Caldos", itens: ["Feijão com Torresmo", "Caldo de Ervilha com Linguiça e Bacon", "Caldo Verde com Linguiça Calabresa"] },
          { nome: "Petiscos", itens: ["Cachorro Quente", "Pão de Alho", "Milho Cozido", "Batata Frita", "Pastéiszinhos", "Pipoca"] },
          { nome: "Doces", itens: ["Docinho de Coco", "Doce de Abóbora", "Bolo de Aipim", "Bolo de Milho", "Maria Mole", "Pé de Moleque", "Doce de Leite", "Maçã do Amor", "Bananinha", "Amendoim", "Paçoca", "Cocada"] }
        ]
      },
      {
        nome: "Festa Econômica",
        itensPorCategoria: [
          { nome: "Espetinhos", itens: ["Carne", "Frango", "Salsichão", "Farofa Especial", "Molho à Campanha"] },
          { nome: "Caldos", itens: ["Caldo de Ervilha com Linguiça e Bacon", "Caldo Verde com Linguiça Calabresa"] },
          { nome: "Petiscos", itens: ["Cachorro Quente", "Milho Cozido", "Batata Frita", "Pipoca"] },
          { nome: "Doces", itens: ["Bolo de Aipim", "Bolo de Milho", "Pé de Moleque", "Doce de Leite", "Maçã do Amor", "Bananinha", "Amendoim", "Paçoca", "Cocada"] }
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "Feijoada",
    resumo: "A verdadeira feijoada completa com o tradicional sabor e tempero que nunca podem faltar.",
    texto1: "Nossa feijoada é preparada com carnes separadas e dessalgadas no ponto certo, garantindo sabor sem excesso de gordura.",
    texto2: "Acompanha todos os itens tradicionais que não podem faltar, servidos em rechauds de barro para manter a temperatura e o charme.",
    texto3: "Ideal para almoços de fim de semana e confraternizações.",
    imagemPrincipal: "/img/feijoada.jpg",
    imagemCapa: "/img/Feijoada1.jpeg", 
    imagensExtras: ["/img/Feijoada3.jpeg", "/img/feijoada.jpg"],
    variacoes: [
      {
        nome: "Buffet Completo",
        itensPorCategoria: [
          { nome: "Entradas", itens: ["Batata Frita", "Torresmo", "Aipim Frito"] },
          { nome: "Guarnições", itens: ["Arroz Branco", "Feijão", "Farofa com Bacon", "Couve à Mineira", "Salada de Verduras", "Salada de Folhas", "Laranja"] },
          { nome: "Carnes", itens: ["Carne Seca", "Lombo Salgado", "Linguiça Calabresa", "Paio", "Costelinha Suína", "Orelha (opcional)", "Chispe (opcional)", "Rabinho (opcional)"] },
          { nome: "Sobremesa", itens: ["Doce de Abóbora", "Doce de Leite", "Romeu e Julieta"] }
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "Coquetel",
    resumo: "Elegância e praticidade para seu evento corporativo.",
    texto1: "Serviço volante com salgados fritos e assados na hora, canapés e frios impecáveis.",
    texto2: "Opções variadas para agradar a todos os paladares, com serviço de garçons uniformizados.",
    texto3: "A melhor escolha para inaugurações e reuniões.",
    imagemPrincipal: "/img/coquetel1.jpeg",
    imagemCapa: "/img/coquetel1.jpeg", 
    imagensExtras: ["/img/coquetel4.jpeg", "/img/coquetel5.jpeg"],
    variacoes: [
      {
        nome: "Menu Coquetel",
        itensPorCategoria: [
          { nome: "Mesa Fixa", itens: ["Canapés", "Tábua de Frios", "Mousses e Pasta"] },
          { nome: "Mini Degustação", itens: ["Risoto de Camarão", "Penne ao Molho Calabresa", "Isca de Filé ao Molho Madeira"] },
          { nome: "Salgados", itens: ["Camarão", "Bolinha de Queijo", "Bolinho de Bacalhau", "Rissole Napolitano", "Coxinha com Catupiry", "Coxinha sem Catupiry", "Quibe com Queijo", "Quibe sem Queijo"] }
        ]
      }
    ]
  },
];