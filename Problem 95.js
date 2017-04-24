function properDivisorSum(num) {
	var sum = 1;

	var squareRoot = Math.sqrt(num);

	for (var x = 2; x < squareRoot; x++) {
		if (num % x == 0) {
			sum += x;
			sum += num / x;
		}
	}

	if (squareRoot == Math.floor(squareRoot)) {
		sum += squareRoot;
	}

	return sum;
}

var longestChain = 0;
var smallestVal = 0;

for (var x = 3; x < 327600; x++) {
// for (var x = 12496; x <= 12496; x++) {
	console.log(x);
	var smallest = x;
	var current = x;
	var broken = false;
	
	var y;
	for (y = 0; y < 10000; y++) {
		if (current == 1 || current > 1000000) {
			broken = true;
			break;
		}

		if (current < smallest) {
			smallest = current;
		}

		var temp = properDivisorSum(current);
		if (current == temp) {
			broken = true;
			break;
		}

		current = temp;

		if (current == x) {
			break;
		}
		// console.log("    Index " + y + ": " + current);
	}

	if (!broken && y < 10000 && y > longestChain) {
		longestChain = y;
		smallestVal = smallest;
	}
	
}

console.log(longestChain, smallestVal);
