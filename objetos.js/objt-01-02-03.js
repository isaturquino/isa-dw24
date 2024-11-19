// Exercício 01
const carro = {
    marca: "toyota",
    modelo: "RAV4",
    ano:2014,
}
// EXERCÍCIO 02
console.log(carro.marca)
carro.ano = 2021
console.log(carro.ano)

// exercício 03
carro.cor = "preto"
delete carro.modelo
console.log(carro)
