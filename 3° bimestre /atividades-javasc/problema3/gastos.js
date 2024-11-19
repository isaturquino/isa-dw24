let inputDistancia = document.getElementById("distancia")
let inputAutonomia = document.getElementById("autonomia")
let inputCombustivel = document.getElementById("combustivel")
let inputPedagio = document.getElementById("pedagio")
let divsaida = document.getElementById("saida");

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calcularGastos

function calcularGastos(){
    let distancia = Number(inputDistancia.value )
    let autonomia = Number(inputAutonomia.value)
    let combustivel = Number(inputCombustivel.value)
    let pedagio = Number(inputPedagio.value)
    // Calculos agr 
    let combustivelTotal = distancia / autonomia
    let custoCombustivel = combustivelTotal *combustivel
    let gastosTotais = custoCombustivel + pedagio
    // Vai imprimir 
    divsaida.innerText = "Gastos totais da viagem: R$" + gastosTotais.toFixed(2);

}