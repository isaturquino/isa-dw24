const produto = {
    nome : "Coca-cola",
    preco: 2.50,
    categoria: "refrigerantes"
}
for (let chave in produto) {
    console.log(chave + ": " + produto[chave]);
  }