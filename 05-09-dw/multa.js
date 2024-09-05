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

    // calcula a multa 
    if (excesso <= 0 ){
        mensagem = "Não tem multa";
    }
    else if (excesso <= (velocidadeMax * 0.20) ){
        mensagem = "Multa de R$ 130,16 - Até 20% acima do limite permitido."; 
    }
    else if (excesso <= (velocidadeMax * 0.50) ){
        mensagem = "Multa de R$ 195,23 - De 20% até 50% acima do limite permitido";
    }
    else excesso > (velocidadeMax * 0.50){
        mensagem = "Multa de R$ 880,41 - - Acima de 50% do limite permitido";
    }

    divsaida.innerText = mensagem;
}
