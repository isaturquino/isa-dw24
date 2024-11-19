
function mostraTabuada(n){
    
    let contador = 0
    while(contador <=10){
        console.log(`${n} * ${contador} = ${n*contador}`)
        contador++
    }
    console.log()
}
mostraTabuada(5)
mostraTabuada(3)

// tudo dentro da function, a variável precisa ficar dentro da function para que ela zere quando for chamar ela outra vez 
// pd se usar para texto: "", '',``(crase)
// A crase(``)`pode colocar espaço dentro, e posso colocar o valor da variável conm ${}
// \t é um tab 
// /n é pula linha
