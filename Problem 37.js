function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

function truncatableLeft(num) {
	var number = num.toString()
	while (number.length > 0) {
		if (!isPrime(parseInt(number))) return false
		number = number.slice(1)
	}

	return true
}

function truncatableRight(num) {
	var number = num.toString()
	while (number.length > 0) {
		if (!isPrime(parseInt(number))) return false
		number = number.slice(0, number.length - 1)
	}

	return true
}

var primes = []
var count = 11

while (primes.length < 11) {
	if (truncatableLeft(count) && truncatableRight(count)) primes.push(count)
	count += 2
}

var sum = 0
for (var x = 0; x < 11; x++) {
	sum += primes[x]
}

console.log(sum)