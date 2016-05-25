function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

function primeFactorization(num, acc) {
	if (num == 1) {
		return acc
	}

	for (var x = 2; x <= num; x++) {
		if (isPrime(x) && num % x == 0) break
	}

	acc.add(x)
	return primeFactorization(num / x, acc)
}

var current = 0
var chainlength = 0

for (var x = 16;; x++) {
	if (primeFactorization(x, new Set()).size == 4) {
		chainlength++
		if (chainlength >= 4) break
	}
	else {
		current = x + 1
		chainlength = 0
	}
}

console.log(current)