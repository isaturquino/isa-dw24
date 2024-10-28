function capitalizeWords(str) {
    let array = str.split(" "); 
    let capitalizedArray = array.map(word => {
        let primeira = word.slice(0, 1).toUpperCase(); 
        let resto = word.slice(1).toLowerCase();
        return primeira + resto; 
    });
    return capitalizedArray.join(" ");
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"
