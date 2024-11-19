function replaceChar(str, oldChar, newChar) {
    let strsplit = str.split(oldChar);
    let resultado = strsplit.join(newChar);
    return resultado;
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o"));     // Deve exibir: "bonono"
console.log(replaceChar("caneta", "a", "i"));   

