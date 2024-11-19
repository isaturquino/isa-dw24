function countVowels(str){
    let vogais = "AEIOUaeiou"
    let contar = 0 
    
    for(let i = 0; i < str.length; i++){
        if(vogais.includes(str[i])){
            contar ++
        } 
    }
    return contar

    

}
console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3
console.log(countVowels("Isabely")); // Deve exibir: 3
console.log(countVowels("Desenvolvimento")); // Deve exibir: 6
console.log(countVowels("Web")); // Deve exibir: 1
