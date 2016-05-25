function factorial(num) {
	var ans = 1
	for (var x = 1; x <= num; x++) {
		ans *= x
	}

	return ans
}

function digitFactorial(num) {
	var temp = num.toString()
	var sum = 0
	while (temp.length > 0) {
		sum += factorial(parseInt(temp.charAt(0)))
		temp = temp.slice(1)
	}

	return sum
}


var sum = 0

for (var x = 3; x < 1000000; x++) {
	if (x == digitFactorial(x)) sum += x
}

console.log(sum)