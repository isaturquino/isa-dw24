let medida = 13
let unidade = "m"
// você coloca aqui a medida e a unidade que quer converter 
function converter(medida, unidade) {
    let resultado;

    if (unidade === "m") { 
        resultado = medida * 100 + " cm"
    } else if (unidade === "mm") { 
        resultado = medida / 10  + " cm"
    } else if (unidade === "km") {
        resultado = medida * 100000 + " cm"
    } else {
        console.log("Unidade inválida. Use 'm', 'mm' ou 'km'.");
        return
    }
    return resultado
}
console.log(converter(medida, unidade))

