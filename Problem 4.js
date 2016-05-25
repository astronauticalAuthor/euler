function isPalindrome(num) {
	return (num.toString() == num.toString().split('').reverse().join(''))
}

var largest = 0

for (var x = 100; x <= 999; x++) {
	console.log(x)
	for (var y = 100; y <= 999; y++) {
		var product = x * y
		if (isPalindrome(product) && product > largest) {
			largest = product
		}
	}
}

console.log(largest)