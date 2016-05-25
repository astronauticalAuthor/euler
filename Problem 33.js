function improperSimplify(x, y) {
	var num = x.toString()
	var den = y.toString()

	for (var count = 1; count < 10; count++) {
		var indx = num.indexOf(count.toString())
		var indy = den.indexOf(count.toString())

		if (indx != -1 && indy != -1) {
			num = num.replace(count.toString(), '')
			den = den.replace(count.toString(), '')
			return parseInt(num) / parseInt(den)
		}
	}
}

var numerators = []
var denominators = []

for (var x = 10; x <= 99; x++) {
	for (var y = 10; y <= 99; y++) {
		if (x != y && x/y < 1 && x/y === improperSimplify(x, y)) {
			numerators.push(x)
			denominators.push(y)
		}
	}
}

console.log(numerators)
console.log(denominators)