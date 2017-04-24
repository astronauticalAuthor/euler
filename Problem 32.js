var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function isPermutation(str) {
	for (var x = 0; x < 9; x++) {
		if (str.indexOf(digits[x]) < 0) {
			return false;
		}
	}

	return true;
}

var sum = 0
var solutions = [];

for (var x = 1; x < 10000; x++) {
	for (var y = 1; y < 10000; y++) {
		var prod = x * y;
		var temp = "" + x.toString() + y.toString() + prod.toString();

		if (temp.length === 9 && isPermutation(temp)) {
			console.log(x + " * " + y + " = " + prod);
			if (solutions.indexOf(prod) == -1) {
				solutions.push(prod);
				sum += prod;
			}
		}
	}
}

console.log(sum)