function fatorial(n) {
    if (n < 0) {
        return "Número inválido!"
    }
    let resultado = 1
    let i = n

    while (i > 1) {
        resultado *= i
        i--
    }

    return resultado
}


console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(-3))
