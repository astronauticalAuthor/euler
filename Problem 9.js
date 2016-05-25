function findTriplet() {
	for (var x = 1; x < 1000; x++) {
		console.log(x)
		for (var y = 1; y < 1000; y++) {
			var c = 1000 - x - y
			if (c > 0 && x*x + y*y == c*c) {
				return x * y * c
			}
		}
	}
}

console.log(findTriplet())