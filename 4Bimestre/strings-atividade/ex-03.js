function isPalindrome(str){
    let splitStr = str.split("");
    let reverse = splitStr.reverse();
    let join = reverse.join("");
    if(join == str){
        return true
    }else return false
    
}


console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false
console.log(isPalindrome("reviver")); // Deve exibir: true
console.log(isPalindrome("ovo")); // Deve exibir: true
