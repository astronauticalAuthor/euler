var pentagons = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145]
var done = false

for (var x = 10; !done; x++) {
	var current = x * (3 * x - 1) / 2
	for (var y = 0; y < pentagons.length; y++) {
		if (pentagons.indexOf(current - pentagons[y]) != -1 && pentagons.indexOf(current + pentagons[y]) != -1) {
			console.log(current + ", " + pentagons[y])
			done = true
			break
		}
	}

	pentagons.push(current)
}