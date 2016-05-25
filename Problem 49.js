function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

function permutations(str, arr) {
	if (str.length == 0) return arr

	var newarr = []
	if (arr.length == 0) newarr.push(str.charAt(0))
	else {
		for (var x = 0; x < arr.length; x++) {
			var temp = arr[x]
			for (var y = 0; y <= temp.length; y++) {
				newarr.push(temp.slice(0, y) + str.charAt(0) + temp.slice(y))
			}
		}
	}

	return permutations(str.slice(1), newarr)
}

function arePermutations(x, y, z) {
	var perms = permutations(x.toString(), [])
	if (perms.indexOf(y.toString()) == -1 || perms.indexOf(z.toString()) == -1) return false

	return true
}

var primes = []
for (var x = 1001; x <= 9999; x += 2) {
	if (isPrime(x)) primes.push(x)
}

var next = []
for (var x = 0; x < primes.length - 1; x++) {
	for (var y = x + 1; y < primes.length; y++) {
		var difference = primes[y] - primes[x]
		var primesZ = primes[y] + difference

		if (isPrime(primesZ) && arePermutations(primes[x], primes[y], primesZ)) {
			console.log(primes[x] + ", " + primes[y] + ", " + primesZ)
		}
	}
}
