// exercício 04 Objeto com Função (Método)

const pessoa = {
    nome: "Isabely",
    idade: 16,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
}
};
pessoa.cumprimentar();