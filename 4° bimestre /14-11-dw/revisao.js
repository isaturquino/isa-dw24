const numeros = [10,15,20,25,30,35]

//numeros multiplicados por 10
// const novo_array = []
// for(element of numeros){
//     novo_array.push(numeros*10)
// }
// console.log(novo_array)

// usando map 
 function multiplica10(elemento){
    return elemento * 10
 }
const copia1 = numeros.map(multiplica10)
console.log(copia1)

// função anônima
const copia2 = numeros.map(function(elemento){
    return elemento * 10
})
console.log(copia2)

// usando arrow function anonima

const mutiplica2 = (elemento) => {
    return elemento*2
}
const copia3 = numeros.map(elemento => elemento * 3)
console.log(copia3)

const copiaString = numeros.map(numero => `numero ${numero*2} ksksksks`)
console.log(copiaString)