const countNonPrimeOddNumbers = x => {
    let count = 0
    for (let i = 3; i <= x; i += 2) {
        !isPrime(i) ? count++ : null
    }
    return count + 1
}
const isPrime = num => {
    if (num === 2) return true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}
console.log(countNonPrimeOddNumbers(5))  
console.log(countNonPrimeOddNumbers(10))
console.log(countNonPrimeOddNumbers(100))
