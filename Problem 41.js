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

function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

var largest = 0
var arr = permutations("1234567", []).sort()
for (var x = 0; x < arr.length; x++) {
	if (isPrime(parseInt(arr[x]))) largest = parseInt(arr[x])
}

console.log(largest)