let inputVelocidadeMax = document.getElementById("velocidadeMax")
let inputVelocidadeVeiculo = document.getElementById("veiculoVelocidade")
let divsaida = document.getElementById("saida");

let botaoCalcular = document.getElementById("calcular")
botaoCalcular.onclick = calculaMulta

function calculaMulta (){
    // entrada dos valores
    let velocidadeMax = Number(inputVelocidadeMax.value)
    let veiculoVelocidade = Number(inputVelocidadeVeiculo.value)
    
    
    // calcula o excesso
    let excesso = veiculoVelocidade - velocidadeMax
    // calcula o quantos % de excesso
    let porcentagemExcesso = (excesso / velocidadeMax) * 100;


    // calcula a multa 
    if (excesso <= 0 ){
        mensagem = "Não tem multa.";
    }
    else if (excesso <= (velocidadeMax * 0.20) ){
        mensagem = "Multa de R$ 130,16 - Você excedeu " + porcentagemExcesso.toFixed(2)+ "% do limite da via."; 
    }
    else if (excesso <= (velocidadeMax * 0.50) ){
        mensagem = "Multa de R$ 195,23 - De 20% até 50% acima do limite permitido";
    }
    else {
        mensagem = "Multa de R$ 880,41 - - Acima de 50% do limite permitido";
    }

    divsaida.innerText = mensagem
}
