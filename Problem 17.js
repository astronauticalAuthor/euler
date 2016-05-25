var ones = ['XXX', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tens = ['XXX', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

function spell(thousand, hundred, ten, one) {
	var ans = ''
	if (thousand != 0) {
		ans += ones[thousand] + 'thousand'
	}

	if (hundred != 0) {
		ans += ones[hundred] + 'hundred'
		if (ten || one) ans += 'and'
	}
	
	if (ten == 1) {
		ans += teens[one]
		console.log(ans)
		return ans
	}
	else if (ten != 0) {
		ans += tens[ten]
	}

	if (one) {
		ans += ones[one]
	}
	console.log(ans)
	return ans
}


var number = ''

for (var x = 1; x <= 1000; x++) {
	var num = x.toString()
	while (num.length < 4) num = "0" + num
	number += spell(parseInt(num.charAt(0)), parseInt(num.charAt(1)), parseInt(num.charAt(2)), parseInt(num.charAt(3)))
}

console.log(number.length)