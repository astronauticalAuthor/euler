function isAbundant(num) {
	var sum = 0
	for (var x = 1; x <= num / 2; x++) {
		if (num % x == 0) sum += x
	}
	
	return sum > num
}

var abundants = []
for (var x = 12; x < 28123; x++) {
	console.log("ABUNDANTS: " + x)
	if (isAbundant(x)) abundants.push(x)
}

console.log(abundants.length)

var sum = 0
for (var x = 1; x <= 28123; x++) {
	console.log(x)
	var y
	for (y = 0; y < abundants.length; y++) {
		var temp = x - abundants[y]
		if (temp <= 0) {
			sum += x
			break
		}
		else if (abundants.indexOf(temp) > -1) {
			break
		}
	}

	if (y == abundants.length) sum += x
}

console.log(sum)