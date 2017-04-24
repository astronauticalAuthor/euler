function isPentagon(start, num) {
	var x = start;
	var current = x * (3 * x - 1) / 2;
	while (current < num) {
		x++;
		current = x * (3 * x - 1) / 2;
	}

	return current == num;
}


var pentagons = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145]
var done = false

for (var x = 10; x < 10000; x++) {
	var current = x * (3 * x - 1) / 2;

	for (var y = 0; y < pentagons.length; y++) {
		var temp = pentagons[y];

		if (pentagons.indexOf(current - temp) >= 0) {
			if (isPentagon(x, current + temp)) {
				console.log(current + " - " + temp + " = " + (current - temp));
			}
		}
	}

	pentagons.push(current)
}