function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

var longest = 0
var product = 0

for (var a = -999; a < 1000; a++) {
	console.log(a)
	for (var b = -999; b < 1000; b++) {
		var count = 0
		var current = (count * count) + (count * a) + b
		while (isPrime(current)) {
			count++
			current = (count * count) + (count * a) + b
		}

		if (count > longest) {
			longest = count
			product = a * b
		}
	}
}

console.log(product)