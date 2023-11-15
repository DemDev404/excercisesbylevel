/****************For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.****************
*****************Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1*************************************************************
*****************Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2*************************************************************/




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
