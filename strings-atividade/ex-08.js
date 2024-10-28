function trimSpaces(str) {
    let trimstr = str.trim();                
    let array = trimstr.split(" ").filter(word => word !== "");
    return array.join(" ");       
}                    

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante ")); // Deve exibir: "Programação é interessante"
