function combination(n, r) {
	return factorial(n, 1) / (factorial(r, 1) * factorial(n - r, 1));
}

function factorial(num, acc) {
	if (num <= 1) {
		return acc;
	}
	else {
		return factorial(num - 1, acc * num);
	}
}

var count = 0;

for (var n = 1; n <= 100; n++) {
	for (var r = 2; r < n; r++) {
		if (combination(n, r) > 1000000) {
			count++;
		}
	}
}

console.log(count);