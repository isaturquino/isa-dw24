function reverseString(str){
    let splitStr = str.split("");
    let reverse = splitStr.reverse();
    let join = reverse.join("");
    return join;
    
}


console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"