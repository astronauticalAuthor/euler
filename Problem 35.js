function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

function rotate(num) {
	return num.slice(1) + num.charAt(0)
}

var count = 13

for (var x = 99; x < 1000000; x++) {
	var next = x.toString()
	var found = true

	do {
		if (!isPrime(parseInt(next))) {
			found = false
			break
		}
		else {
			next = rotate(next)
		}
	} while (next != x)

	if (found) count++
}

console.log(count)