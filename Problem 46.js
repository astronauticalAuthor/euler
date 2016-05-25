var primes = [2, 3, 5, 7, 11, 13, 17]

function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

function goldbach(num) {
	for (var x = 0; x < primes.length; x++) {
		var square = (num - primes[x]) / 2
		if (Math.sqrt(square) % 1 === 0) return true
	}

	return false
}

for (var x = 19;; x += 2) {
	if (isPrime(x)) {
		primes.push(x)
	}
	else {
		if (! goldbach(x)) {
			break
		}
	}
}

console.log(x)