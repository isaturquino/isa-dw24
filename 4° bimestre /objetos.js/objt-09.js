// Exercício 09 Atualizando Objetos em um Array
const estoque = [
    { id: 1, nome : "abacaxi", quantidade: 17 },
    { id: 2, nome : "Melancia", quantidade: 11 },
    { id: 3, nome : "Melão", quantidade: 21 },
];
function atualizarQuantidade(id, novaQuantidade) {
    const produto = estoque.find(item => item.id === id);
    
    if (produto) {
      produto.quantidade = novaQuantidade;
      console.log("Produto atualizado:", produto);
    } else {
      console.log("Produto com ID " + id + " não encontrado.");
    }
  }
  
  atualizarQuantidade(2, 9);