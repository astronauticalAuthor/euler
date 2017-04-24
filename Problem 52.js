function arePermutations(one, two, three, four, five, six) {
	oneArr = one.split("").sort().join();
	twoArr = two.split("").sort().join();
	threeArr = three.split("").sort().join();
	fourArr = four.split("").sort().join();
	fiveArr = five.split("").sort().join();
	sixArr = six.split("").sort().join();

	return  oneArr == twoArr &&
			oneArr == threeArr &&
			oneArr == fourArr &&
			oneArr == fiveArr &&
			oneArr == sixArr;
}

var num = 0;
var count = 1;
while (num == 0) {
	var one = count.toString();
	var two = (count * 2).toString();
	var three = (count * 3).toString();
	var four = (count * 4).toString();
	var five = (count * 5).toString();
	var six = (count * 6).toString();
	if (one.length == two.length && one.length == three.length && one.length == four.length && one.length == five.length && one.length == six.length) {
		if (arePermutations(one, two, three, four, five, six)) {
			num = count;
		}
	}

	count++;
}

console.log(num);