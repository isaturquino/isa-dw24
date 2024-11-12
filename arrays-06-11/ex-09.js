// exercício 09 
function reverseArray(arr) {
    let reversedArray = [];
    for (let element of arr) {
        reversedArray.unshift(element);
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4]));// Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])) // Deve exibir: ["banana", "apple"]
