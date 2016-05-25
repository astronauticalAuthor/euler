var sum = 1
var skip = 2
var rows = 1
var current = 1

while (rows < 501) {
	for (var x = 0; x < 4; x++) {
		current += skip
		nums.push(current)
		sum += current
	}

	skip += 2
	rows++
}

console.log(sum)