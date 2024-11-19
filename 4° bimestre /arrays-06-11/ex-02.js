function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { 
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMax([-10, 0, 10, 5])); 
