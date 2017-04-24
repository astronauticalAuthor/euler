function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}

function isPrime(num) {
	if (num <= 1) return false

	for (var x = 2; x <= Math.sqrt(num); x++) {
		if (num % x == 0) return false
	}

	return true
}

function primeRotations(str) {
	var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	var count = 0;
	var x = 0;
	if (str.charAt(0) == '*') {
		x = 1;
	}
	if (str.charAt(str.length - 1) == '*') {
		return 0;
	}

	for (x; x < digits.length; x++) {
		var temp = "";
		for (var y = 0; y < str.length; y++) {
			if (str.charAt(y) == '*') {
				temp += digits[x];
			}
			else {
				temp += str.charAt(y);
			}
		}

		// console.log(temp);
		// console.log(isPrime(temp));

		if (isPrime(parseInt(temp))) {
			count++;
		}
	}

	return count;
}

function combinations(str) {
    var result = [];

    var loop = function(start, depth, prefix) {
        for (var i = start; i < str.length; i++) {
            var next = prefix + str[i];
            if (depth > 0) {
            	loop(i + 1, depth - 1, next);                
            }
            else {
                result.push(next);
            }
        }
    }

    for (var i = 0; i < str.length; i++) {
        loop(0, i, '');
    }

    return result;
}

var smallest = 0;
var digits = "012345789"
for (var x = 11; x <= 999999 && smallest == 0; x++) {
	var str = x.toString();

	var combs = combinations(digits.substr(0, str.length));

	for (var y = 0; y < combs.length - 1; y++) {
		var temp = combs[y];
		var tempstr = str;

		for (var z = 0; z < temp.length; z++) {
			var index = parseInt(temp.charAt(z));
			tempstr = replaceAt(tempstr, index, "*");
		}

		if (primeRotations(tempstr) == 8) {
			smallest = x;
		}
	}
}

console.log(smallest);
