let idd = 0
function idadeAtleta(idd){
    if(idd>=5 && idd<=7){
        console.log("Categoria 'infantil A'")
    } else if (idd>=8 && idd<=10){
        console.log("Categoria 'infantil B'")
    } else if (idd>=11 && idd<=13){
        console.log("Categoria 'juvenil A'")
    } else if (idd>=14 && idd<=17){
        console.log("Categoria 'juvenil B'")
    } else if (idd>=18){
        console.log("Categoria 'adulto'")
    } else{
        console.log("Novo demais!")
    }
}
idadeAtleta(4)