function average(array){
    let soma = 0 
    let media = 0
    for (elemento of array){
        soma += elemento
        media = soma / array.length
    }
    return media

}

console.log(average([1, 2, 3, 4])) // Deve exibir: 2.5
console.log(average([10, 20, 30])) // Deve exibir: 20
console.log(average([15,16,17])) // Deve exibir: 16