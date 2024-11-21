function getEvenNumbers(array){
    let novoArray = []
    for (elemento of array){
        if (elemento % 2 == 0)
            novoArray.push(elemento)
      }
    return novoArray

}

// function isPar(elemento) {
//     return elemento % 2 == 0
//  }
 
//  let vetor = [1, 2, 3, 4, 5]
//  let v5 = vetor.filter(isPar)
 
//  console.log(v5)
//  usando  o filter
 

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]