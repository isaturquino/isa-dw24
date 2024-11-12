// exercício 10
function findIndex(arr, element){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1