
// Captura os elementos html que serão manipulados pelo javscript
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calculaImc

function calculaImc (){
    // ENTRADA
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)
    // PROCESSO
    let imc = peso / (altura * altura)

    // SAÍDA
    divSaida.innerText = imc

}

