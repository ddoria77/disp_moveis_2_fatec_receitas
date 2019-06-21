import { Recipe } from '../../models/recipe';

export const RECIPES: Recipe[] = [
  { 
    id: "Acarajé da Bahia ", 
    recipeName: 'Acarajé', 
    thumbnailImageUrl: 'assets/imgs/acarajeT.jpg', 
    largeImageUrl: 'assets/imgs/acarajeG.jpg', 
    totalTimeInSeconds: 1800,
    rating: 4.44,
    numberOfServings: 6,
    ingredients: [
          "1/2 kg de feijão fradinho quebrado",
          "2 litros de água",
          "1 cebola grande cortada em 4 pedaços",
          "Sal a gosto",
          "1 litro de azeite de dendê para fritar"          
      ],
      preparations: [
        "Coloque o feijão quebrado de molho numa vasilha com os 2 litros de água no dia anterior por cerca de 12 horas.",
        "Coloque suas mãos dentro da água com o feijão e esfregue bem com as duas mãos o feijão para retirar a casca.",
        "Continue esfregando e enxaguando quantas vezes for necessária até retirar toda a casca com as pintinhas pretas",
        "Escorra usando um escorredor de macarrão e reserve.",
        "Coloque o feijão, a cebola e o sal no liquidificador e bata bem até ficar uma massa macia e fina.",
        "Acrescente um pouquinho de água se a massa ficar muito dura e bata até dar o ponto.",
        "Leve a massa à geladeira e deixe descansar por 1 hora.",
        "Bata a massa com uma colher de pau grande até fermentar ficando branquinha e leve.",
        "Leve uma panela ou uma frigideira funda com o azeite de dendê ao fogo médio alto para esquentar.",
        "Forme bolinhos redondos com o auxílio de uma colher de pau e uma colher de sopa e frite os bolinhos até que fiquem bem dourados.",
        "Corte ao meio e recheie com molho de pimenta, vatapá e camarão. Sirva quente."
    ]
  },
  { 
    id: "Vatapa Baiano", 
    recipeName: 'Vatapa', 
    thumbnailImageUrl: 'assets/imgs/vatapaT.jpg',
    largeImageUrl: 'assets/imgs/vatapaG.jpg',  
    totalTimeInSeconds: 3600,
    rating: 4,
    numberOfServings:6,
    ingredients: [
          "4 pães franceses amanhecidos",
          "1 garrafa de leite de coco 400 ml ",
          "200 grs de camarao seco moido no liquidificador",
          "200 grs de amendoim torrado sem pele e moido ",
          "200 grs de castanha torrada moida ",
          "4 cebolas grandes",
          "1 colher de cha de gengibre ",
          "azeite de dende a gosto"
          
      ],
      preparations: [
          "Coloque os paes de molho com metade da garrafa do leite de coco. Em seguida moa no liquidificador separadamente, a castanha, o camarao seco sem a cabeca, o amendoim. Depois coloque no liquidificador tambem as cebolas com um pouco de agua e o gengibre e bata.",
          "A seguir pegue os paes de molho e bata no liquidificador junto com as cebolas que ja foram batidas, depois de bater todo o pao coloque na panela e va adicionando metade do camarao, a castanha, o amendoim e comece a cozinhar mexendo sempre para nao pegar no fundo da panela. ",
          "Quando comecar a engrossar, numa panela a parte coloque o azeite de dende para fritar o restante do camarao seco. ",
          "Quando der uma fritadinha nesse camarao despeje na panela do vatapa e continue mexendo para engrossar",
          "O ponto deve ser obtido quando estiver bem grosso tipo pirao e vc coloca um pouco no fundo de um pires, espera esfriar e vira o prato, se nao cair e soltar do fundo do pires, esta pronto.",
          
      ]
  },
  { 
    id: "ice-cream", 
    recipeName: 'Ice Cream', 
    thumbnailImageUrl: 'assets/imgs/r3_thumb.jpg', 
    largeImageUrl: 'assets/imgs/r3.jpg', 
    totalTimeInSeconds: 3600,
    rating: 4.2,
    numberOfServings: 3,
    ingredients: [
          "chili powder",
          "chopped celery",
          "long grain rice",
          "kidney beans",
          "shredded cabbage",
          "red pepper",
          "carrot",
          "onion",
          "minced garlic"
      ],
      preparations: [
          "***********************************************************************************************************",
          "***********************************************************************************************************",
          "***********************************************************************************************************",
          "***********************************************************************************************************",
          "***********************************************************************************************************",
               ]
  },
  { 
    id: "russian-salad", 
    recipeName: 'Russian Salad', 
    thumbnailImageUrl: 'assets/imgs/r4_thumb.jpg', 
    largeImageUrl: 'assets/imgs/r4.jpg', 
    totalTimeInSeconds: 1800,
    rating: 5,
    numberOfServings: 7,
    ingredients: [
          "carrots",
          "cauliflower",
          "water",
          "onions",
          "garlic cloves",
          "pepper",
          "potatoes",
          "brussels sprouts",
          "salt"
      ],
      preparations: [
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
      ] 
  },
  { 
    id: "sweet-bites", 
    recipeName: 'Sweet Bites', 
    thumbnailImageUrl: 'assets/imgs/r5_thumb.jpg', 
    largeImageUrl: 'assets/imgs/r5.jpg', 
    totalTimeInSeconds: 900,
    rating: 4.9,
    numberOfServings: 1,
    ingredients: [
          "salt",
          "onions",
          "broccoli",
          "celery",
          "carrots",
          "lentils",
          "green pepper",
          "tomato juice",
          "tomato puree"
      ],
      preparations: [
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
      ]  
  },
  { 
    id: "spicy-pizza", 
    recipeName: 'Spicy Pizza', 
    thumbnailImageUrl: 'assets/imgs/r6_thumb.jpg',
    largeImageUrl: 'assets/imgs/r6.jpg', 
    totalTimeInSeconds: 1800,
    rating: 4.5,
    numberOfServings: 5,
    ingredients: [
          "tomato paste",
          "water",
          "celery",
          "corn",
          "shredded cabbage",
          "green beans",
          "pepper"
      ],
      preparations: [
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
        "***********************************************************************************************************",
      ]   
  },
  { 
    id: "fast-food", 
    recipeName: 'Fast Food', 
    thumbnailImageUrl: 'assets/imgs/r7_thumb.jpg', 
    largeImageUrl: 'assets/imgs/r7.jpg', 
    totalTimeInSeconds: 900,
    rating: 4.7,
    numberOfServings: 2,
    ingredients: [
          "bay leaves",
          "white onion",
          "tofu",
          "peppercorns",
          "diced tomatoes",
          "cabbage",
          "red wine"
    ],
    preparations: [
        "***********************************************************************************************************",
          "***********************************************************************************************************",
          "***********************************************************************************************************",
          "***********************************************************************************************************",
          "***********************************************************************************************************",
    ]
  }
];