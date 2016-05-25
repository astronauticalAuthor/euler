var pentagons = [40755]
var hexagons = [40755]
var pentagonIndex = 166
var hexagonIndex = 144

function isPentagonal(num) {
	var lastIndex = pentagons.length - 1
	if (pentagons[lastIndex] > num) {
		return false
	}
	else if (pentagons[lastIndex] < num) {
		pentagons.push(pentagonIndex*(pentagonIndex*3 - 1)/2)
		pentagonIndex++
		return isPentagonal(num)
	}
	else {
		return true
	}
}

function isHexagonal(num) {
	var lastIndex = hexagons.length - 1
	if (hexagons[lastIndex] > num) {
		return false
	}
	else if (hexagons[lastIndex] < num) {
		hexagons.push(hexagonIndex*(hexagonIndex*2 - 1))
		hexagonIndex++
		return isHexagonal(num)
	}
	else {
		return true
	}
}



var x = 0
for (x = 286;; x++) {
	console.log(x)
	var triangle = x*(x+1)/2
	if (isPentagonal(triangle) && isHexagonal(triangle)) break
}

console.log(x*(x+1)/2)