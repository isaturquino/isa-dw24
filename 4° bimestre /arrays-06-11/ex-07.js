// Exercício 7: Mesclar Dois Arrays
function mergeArrays(arr1, arr2){
    let array_novo = []
    for(element of arr1){
        array_novo.push(element)
    }
    for(element of arr2){
        array_novo.push(element)
    }
    return array_novo
}
console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]
