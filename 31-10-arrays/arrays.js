let vetor = [10, 20, 30,40]
vetor.push(50) // adiciona ao final
vetor.unshift(5) // adiciona no inicio

// vetor[1] = 100 // substitui o elemento da posição 1
// vetor [7] = 200 

vetor[vetor.length] = 50 // adiciona no final através do lenght(conta quantos elementos)


// vetor[6] = vetor[5]
// vetor[5] = vetor[4]
// vetor[4] = vetor[3]


function inserir(vetor, pos, valor){
    for(i=vetor.length ; i > pos; i--){
        vetor[i] = vetor[i-1]
    }
    vetor[pos] = valor
}

console.log(10)