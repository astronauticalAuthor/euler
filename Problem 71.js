var nArr = [];
var dArr = [];

for (var d = 1; d <= 1000000; d++) {
	for (var n = 1; n < d; n++) {
		nArr.push(n);
		dArr.push(d);
	}
}

// for (var d = 1; d <= 8; d++) {
// 	for (var n = 1; n < 8; n++) {
// 		nArr.push(n);
// 		dArr.push(d);
// 	}
// }

var threeSevenths = 3 / 7;
var nextSmallest = 0;
var smallestDifference = 20;

for (var x = 0; x < nArr.length; x++) {
	var current = nArr[x] / dArr[x];
	if (current < threeSevenths) {
		if (threeSevenths - current < smallestDifference) {
			smallestDifference = threeSevenths - current;
			nextSmallest = x;
		}
	}
}

console.log(nArr[nextSmallest] + " / " + dArr[nextSmallest]);