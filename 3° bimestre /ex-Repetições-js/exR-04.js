function primo(num){
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(primo(2))
console.log(primo(35))
console.log(primo(5))