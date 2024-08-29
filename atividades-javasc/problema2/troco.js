let inputTroco = document.getElementById("troco")
divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calcularTroco

function calcularTroco (){
    // Entrada do troco
    let troco = Number(inputTroco.value)

    // Agr os calculos para celulas de 20 
    let cedulas20 = Math.trunc(troco / 20) 
    let resto = troco % 20 

    // calculos para as celulas de 10 e o que sobrar em moedas de 1
    let cedulas10 =  Math.trunc(resto/10)
    let moeda1 = Math.trunc(resto % 10)

    // vai sair 
    divSaida.innerText = 
    "Cédulas de R$20: " + cedulas20 + "\n" +
    "Cédulas de R$10: " + cedulas10 + "\n" +
    "Moedas de R$1: " + moeda1;
}