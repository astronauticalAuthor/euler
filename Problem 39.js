var most = 0
var which = 0

for (var count = 10; count <= 1000; count++) {
	console.log(count)
	var lcount = 0
	for (var x = 1; x < count; x++) {
		for (var y = 1; y < count; y++) {
			var c = count - x - y
			if (c > 0 && x*x + y*y == c*c) lcount++
		}
	}

	if (lcount > most) {
		most = lcount
		which = count
	}
}

console.log(which)