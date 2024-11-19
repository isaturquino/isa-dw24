function primeirosPrimos(N) {
    let count = 0
    let num = 2

    while (count < N) {
        let isPrime = true
    
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(num);
            count++;
        }
        num++
    }
}

primeirosPrimos(10)
