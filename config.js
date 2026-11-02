/* =====================================================================
   CONFIGURAÇÃO DO SITE — edite SÓ este arquivo para mudar textos, fotos,
   cores e links. Salve e recarregue a página para ver o resultado.
   Imagens: coloque os arquivos na pasta "imagens" e escreva o caminho,
   ex.: "imagens/capa.jpg". Campo vazio ("") mostra um espaço reservado.
   ===================================================================== */
const SITE = {
  nome: "Igor Correia",
  subtitulo: "Fotografia pet",
  cro: "",                          // deixe vazio: este site é de fotografia
  logo: "",                         // ex.: "imagens/logo.png" (vazio = usa o nome em texto)

  // Cores e fontes. Troque os códigos para mudar toda a identidade do site.
  cores: { principal: "#84a98c", fundo: "#e4804a", claro: "#F6BD60",  texto: "#3D261C", destaque: "#FDF6ED" },
  fontes: { titulo: "'Baskervville', Georgia, serif", texto: "'Jost', system-ui, sans-serif" },

  // Contato (WhatsApp: só números, com 55 + DDD)
  whatsapp: "5585988841530",
  mensagemWhats: "Olá! Vi seu portfólio e gostaria de saber mais sobre uma sessão de fotos com meu pet.",
  email: "contato@seudominio.com",
  instagram: "https://instagram.com/seuperfil",
  endereco: "Atendo em estúdio e em locações (praias, parques, sua casa)",
  horario: "Resposta em até 24 horas",

  menu: [
    { texto: "Sessões", id: "tratamentos" },
    { texto: "Portfólio", id: "portfolio" },
    { texto: "Sobre", id: "sobre" },
    { texto: "Depoimentos", id: "depoimentos" },
    { texto: "Bastidores", id: "posts" },
    { texto: "Contato", id: "contato" }
  ],

  // Ordem das seções. Reordene ou apague uma linha para esconder a seção.
  ordem: ["hero", "intro", "portfolio", "tratamentos", "destaque", "sobre", "depoimentos", "posts", "instagram", "contato"],

  hero: {
    imagem: "C:/Users/bacur/Downloads/site-igor (1)/site-igor/imagens/capa.png",                     // sua melhor foto, na horizontal
    titulo: "Fotografia pet que conta a história do seu melhor amigo",
    texto: "Retratos com cor, luz e personalidade, feitos com paciência para o seu pet ficar à vontade.",
    botao: "Reservar uma sessão"
  },

  intro: [
    { titulo: "Olhar de quem ama bicho", texto: "Escreva aqui como você trabalha e o que torna suas fotos diferentes." },
    { titulo: "Sessão sem pressa", texto: "O tempo do pet manda. Brincamos, esperamos e registramos o que ele tem de único." },
    { titulo: "Fotos para guardar", texto: "Entrega em alta resolução e opção de impressão em quadros e álbuns." }
  ],

  tratamentos: {
    titulo: "Sessões",
    texto: "Troque pelos tipos de sessão que você oferece.",
    itens: [
      { imagem: "", titulo: "Sessão em estúdio", texto: "Fundos coloridos, luz controlada e retratos de capa de revista." },
      { imagem: "", titulo: "Sessão em locação", texto: "Praia, parque ou sua casa: o pet na rotina que ele ama." },
      { imagem: "", titulo: "Pet e família", texto: "Tutores e pets juntos, com momentos naturais." }
    ]
  },

  destaque: {
    titulo: "Vamos fotografar o seu pet?",
    texto: "Me conte o nome, a idade e a personalidade dele. Eu respondo com datas e valores.",
    botao: "Chamar no WhatsApp",
    link: "",
    imagem: ""
  },

  portfolio: {
    titulo: "Portfólio",
    texto: "Alguns dos meus trabalhos favoritos.",
    fotos: [
      { imagem: "", categoria: "Cães", legenda: "Nome do cão" },
      { imagem: "", categoria: "Cães", legenda: "Nome do cão" },
      { imagem: "", categoria: "Gatos", legenda: "Nome do gato" },
      { imagem: "", categoria: "Filhotes", legenda: "Nome do filhote" },
      { imagem: "", categoria: "Pet e tutor", legenda: "Nome do pet e do tutor" },
      { imagem: "", categoria: "Gatos", legenda: "Nome do gato" }
    ]
  },

  sobre: {
    imagem: "",
    titulo: "Sobre mim",
    texto: ["Sou Igor, fotógrafo pet. Conte como começou, o que você busca em cada foto e como é uma sessão com você.",
            "Cada item desta lista vira um parágrafo."]
  },

  depoimentos: {
    titulo: "O que dizem os tutores",
    itens: [
      { texto: "Depoimento real de um tutor, com autorização.", nome: "Nome do tutor e do pet" },
      { texto: "Outro depoimento.", nome: "Nome do tutor e do pet" }
    ]
  },

  posts: {
    titulo: "Bastidores",
    texto: "Histórias das sessões e dicas para fotografar seu pet em casa.",
    itens: [
      { imagem: "", data: "Novembro 2026", titulo: "Título do post", texto: "Resumo em uma ou duas frases.", link: "" },
      { imagem: "", data: "Outubro 2026", titulo: "Título do post", texto: "Resumo em uma ou duas frases.", link: "" },
      { imagem: "", data: "Setembro 2026", titulo: "Título do post", texto: "Resumo em uma ou duas frases.", link: "" }
    ]
  },

  instagram: { titulo: "No Instagram", imagens: ["", "", "", "", "", ""] },

  contato: { titulo: "Reserve sua sessão", texto: "Conte sobre o seu pet. A mensagem abre no WhatsApp." },

  rodapeNota: "Todas as imagens são protegidas por direitos autorais."
};
