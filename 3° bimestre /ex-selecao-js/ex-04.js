let idade = 0
let peso = 0 
function dosagemMedicamento(idade,peso){
    if(idade >= 12){
        if (peso >= 60){
            console.log("40 gotas")
        }else{
        console.log("33 gotas")}
    } else if (peso >=5 && peso <= 9){
        console.log("5 gotas")
    } else if(peso >9 && peso <= 16){
        console.log("10 gotas")
    } else if(peso >16 && peso <= 24){
        console.log("20 gotas")
    } else if (peso > 24){
        console.log("30 gotas")
    }
}
dosagemMedicamento(6,21)