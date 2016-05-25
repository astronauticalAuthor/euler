function permutations(str, arr) {
	if (str.length == 0) return arr

	var newarr = []
	if (arr.length == 0) newarr.push(str.charAt(0))
	else {
		for (var x = 0; x < arr.length; x++) {
			var temp = arr[x]
			for (var y = 0; y <= temp.length; y++) {
				newarr.push(temp.slice(0, y) + str.charAt(0) + temp.slice(y))
			}
		}
	}

	return permutations(str.slice(1), newarr)
}

console.log(permutations("0123456789", []).sort()[999999])