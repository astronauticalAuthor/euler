var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function isPermutation(str) {
	for (var x = 0; x < 9; x++) {
		if (str.indexOf(digits[x]) < 0) {
			return false;
		}
	}

	return true;
}

var solutions = [];

for (var x = 2; x <= 9999; x++) {
	var temp = "";
	var count = 1;

	while (temp.length < 9) {
		temp += x * count;
		count++;
	}

	if (temp.length == 9 && isPermutation(temp)) {
		solutions.push(temp);
	}
}

console.log(Math.max.apply(null, solutions));