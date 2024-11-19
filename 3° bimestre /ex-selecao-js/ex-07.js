let valorAlcool = 0
let valorGasolina = 0
function compensaAlcool(valorAlcool, valorGasolina){
    let porcentagem = valorGasolina * 0.7
    if(valorAlcool < porcentagem){
        return true
    } else {
        return false
    }
}
console.log(compensaAlcool(3.67, 6.00))
console.log(compensaAlcool(3.25, 6.00))
console.log(compensaAlcool(6.5, 6.00))
console.log(compensaAlcool(3.73, 6.00))