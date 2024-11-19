function somaSerie(cont){
    let soma = 0
    let y = 1
    for (let x=1, y=1; x<=cont; x++, y +=2){
        soma = soma + x*y
       
    }
    return soma
}

console.log(somaSerie(5))
console.log(somaSerie(2))