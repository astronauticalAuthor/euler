var num = ''

var count = 0
while (num.length <= 1000000) {
	num += count.toString()
	count++
}

var val = parseInt(num[1])
			* parseInt(num[10])
			* parseInt(num[100])
			* parseInt(num[1000])
			* parseInt(num[10000])
			* parseInt(num[100000])
			* parseInt(num[1000000])
console.log(val)
