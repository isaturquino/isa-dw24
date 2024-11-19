let ano = 0
function bissexto(ano){
    if (ano % 400 == 0){
        console.log("O ano é bissexto")
    } else if(ano % 100 == 0){
        console.log("O ano NÃO é bissexto")
    } else if (ano % 4 == 0){
        console.log("O ano é bissexto")
    } else{
        console.log("O ano NÃO é bissexto ")
    }
}
bissexto(1987)