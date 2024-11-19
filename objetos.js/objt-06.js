// exercício 06
const biblioteca = [
    { titulo: "Harry Potter e o Cálice de Fogo", autor: "J.K Rolling", anoPublicacao: 2000 },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", anoPublicacao: 2008 },
    { titulo: "Amor e Gelato", autor: "Jenna Evans Welch", anoPublicacao: 2016 }
]
const livros = biblioteca.map(biblioteca => biblioteca.titulo);
console.log(livros); 
