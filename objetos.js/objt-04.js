// Crie um objeto chamado pessoa 04

const pessoa = {
    nome: "Isabely",
    idade: 16,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
}
};
pessoa.cumprimentar();