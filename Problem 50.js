function isPrime(num) {
	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

var primes = [2, 3, 5, 7]
for (var x = 9; x < 1000000; x += 2) {
	if (isPrime(x)) primes.push(x)
}

var cumulativePrimes = []
var sum = 0
for (var x = 0; x < primes.length; x++) {
	sum += primes[x]
	cumulativePrimes[x] = sum
}


var longestChain = 0
var longestPrime = 0


for (var x = primes.length - 1; x >= 0; x--) {
	for (var y = x - 1; y >= 0; y--) {
		var sum = cumulativePrimes[x] - cumulativePrimes[y]
		if (sum < 1000000 && isPrime(sum) && x - y > longestChain) {
			longestChain = x - y
			longestPrime = sum
		}
	}
}

console.log(longestPrime)