function decToBin(num) {
	var ans = '';
	var nam = num

	for (var x = 20; x >= 0; x--) {
		if (nam > 0 && nam - Math.pow(2, x) >= 0) {
			ans += '1'
			nam = nam - Math.pow(2, x)
		}
		else {
			ans += '0'
		}
	}

	while (ans.charAt(0) == '0') {
		ans = ans.slice(1)
	}

	return ans
}

function isPalindrome(num) {
	return num.toString() == num.toString().split('').reverse().join('')
}

var sum = 0
for (var x = 1; x < 1000000; x++) {
	if (isPalindrome(x) && isPalindrome(decToBin(x))) {
		sum += x
	}
}

console.log(sum)