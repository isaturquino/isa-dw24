// exercício 07 Cálculo com Métodos de Objeto
const carrinho = {
    itens: [
        { nome: "Melância", preco: 18.50 },
        { nome: "Abacaxi", preco: 6.90 },
        { nome: "Melão", preco: 12.90 }
    ],
    calcularTotal: function() {
        let total = 0; 
        for (let element of this.itens) {
            total += element.preco; 
        }
        return total;
    }
};

console.log("Total do carrinho: R$ " + carrinho.calcularTotal());
