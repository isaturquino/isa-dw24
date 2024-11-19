let inputCapital = document.getElementById("capital")
let inputTaxaJuros = document.getElementById("taxaJuros")
let inputTempoAplic = document.getElementById("tempoAplic")
let divsaida = document.getElementById("saida");

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calculaJC

function calculaJC (){
    // Entrada dos valores
    let capital = Number(inputCapital.value )
    let taxaJuros = Number(inputTaxaJuros.value) / 100
    let tempoAplic = Number(inputTempoAplic.value)

    // Agora a gnt calcula 
    let montante = capital * Math.pow((1 + taxaJuros), tempoAplic)

    // Calcula montante menos capital
    let lucroJuros = montante - capital 

    // vai impimir 
    divsaida.innerText = 
    "Montante: R$ " + montante.toFixed(2) + "\n" +
    "Capital Inicial: R$ "+ capital.toFixed(2) + "\n" +
    "Lucro com Juros (M - C): R$ " + lucroJuros.toFixed(2);
}