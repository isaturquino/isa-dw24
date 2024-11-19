let lado1 = 0
let lado2 = 0
let lado3 = 0

function tipoTriangulo(lado1, lado2, lado3){
    if (
        lado1 < lado2 + lado3 && lado1 > (lado2 - lado3) &&
        lado2 < lado1 + lado3 && lado2 > (lado1 - lado3) &&
        lado3 < lado1 + lado2 && lado3 > (lado1 - lado2)
    ){
        if(lado1 == lado2 == lado3){
            console.log ("Triângulo equilátero")
        } else if (lado1 == lado2 ||lado1 == lado3 || lado2 == lado3){
            console.log("Triângulo isóceles")
        } else{
            console.log("Triângulo escaleno")}
    } else {
        console.log("Os lados NÃO formam um triângulo")
    }
    }
tipoTriangulo(2,3,1)



