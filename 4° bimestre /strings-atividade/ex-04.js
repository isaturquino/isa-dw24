function countOccurrences(str, char){
    let strsplit = str.split("");
    let count = 0 
    for(let i = 0; i < strsplit.length; i++){
        if(strsplit[i] == char){
            count ++
        }
    }
    return count
}


console.log(countOccurrences("banana", "n")); // Deve exibir: 2
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3
