function toSnakeCase(str){
    let array = str.split(" ")
    let resultado = array.join("_")
    return resultado
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
console.log(toSnakeCase("Desenvolvimento de Web")); // Deve exibir: "Desenvolvimento_de_Web"
