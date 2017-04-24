function squareDigitChain(num) {
	var current = num;
	while (current != 1 && current != 89) {
		var temp = 0;
		current.toString().split("").forEach(function(digit) {
			temp += Math.pow(parseInt(digit), 2);
		});
		current = temp;
	}

	return current == 89;
}

var count = 0;
for (var x = 2; x < 10000000; x++) {
	if (squareDigitChain(x)) {
		count++;
	}
}

console.log(count);