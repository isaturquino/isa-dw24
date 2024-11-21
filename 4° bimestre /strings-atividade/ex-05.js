function getInitials(name){
    let maiusculas = name.toUpperCase();
    let array = maiusculas.split(" ");
    let inicial = array.map(word => word.slice(0, 1));
    let Iniciais = inicial.join("");
    return Iniciais;

}
console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"
console.log(getInitials("Isabely Turquino")); // Deve exibir: "IT"