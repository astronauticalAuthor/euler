function substringDivisibility(number) {
	var primes = [2, 3, 5, 7, 11, 13, 17]

	for (var x = 1; x < 8; x++) {
		var num = parseInt(number.slice(x, x + 3))
		if (num % primes[x - 1] != 0) return false
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

var perms = permutations("0123456789", [])
var sum = 0
for (var x = 0; x < perms.length; x++) {
	if (substringDivisibility(perms[x])) {
		sum += parseInt(perms[x])
	}
}

console.log(sum)