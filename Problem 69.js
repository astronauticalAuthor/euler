var primeFactors = [[], []];

function isPrime(num) {
	if (num <= 1) return false;

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false;
	}

	return true;
}

function getPrimeFactors(num) {
	var factors = [];

	for (var x = 2; x <= Math.sqrt(x); x++) {
		console.log(x);
		if (num % x == 0 && isPrime(x)) {
			factors.push(x);

			var temp = num / x;
			if (isPrime(temp)) {
				factors.push(temp);
			}
		}
	}

	if (isPrime(num)) {
		factors.push(num);
	}

	return factors;
}

function relPrime(a, b) {
	var aFactors = primeFactors[a];
	var bFactors = primeFactors[b];

	var x = 0;
	var y = 0;

	while (y != bFactors.length && x != aFactors.length) {
		// console.log("X: " + x + ", Y: " + y);
		if (aFactors[x] == bFactors[y]) {
			return false;
		}
		else if (bFactors[y] < aFactors[x]) {
			y++;
		}
		else {
			x++;
		}
	}

	// for (var x = 0; x < bFactors.length; x++) {
	// 	if (a % bFactors[x] == 0) {
	// 		return false;
	// 	}
	// }

	return true;
}

function totient(n) {
	var count = 1;

	// if (isPrime(n)) {
	// 	return n - 1;
	// }

	for (var x = 2; x < n; x++) {
		if (relPrime(n, x)) {
			// console.log("    " + x);
			count++;
		}
	}

	return count;
}

var max = 0;
var maxN = 0;

// for (var x = 2; x <= 10; x++) {
// 	if (x == 100000 || x == 200000 || x == 300000 || x == 400000 || x == 500000 || x == 600000 || x == 700000 || x == 800000 || x == 900000) {
// 		console.log(x);
// 	}


// 	primeFactors.push(getPrimeFactors(x));
// 	var temp1 = totient(x);

// 	// console.log(x, temp1, x / temp1);
// 	console.log(x);
// 	console.log(primeFactors[x]);

// 	var temp = x / temp1;

// 	if (temp > max) {
// 		max = temp;
// 		maxN = x;
// 	}

// }

// console.log(maxN, max);
console.log(getPrimeFactors(4));
// console.log(primeFactors);