function coinSum(hundred, fifty, twenty, ten, five, two, one) {
	var sum = hundred * 100 + fifty * 50 + twenty * 20 + ten * 10 + five * 5 + two * 2 + one;
	return sum == 200;
}

var count = 1; //200p

for (var a = 0; a <= 2; a++) { //100p
	for (var b = 0; b <= 4; b++) { //50p
		for (var c = 0; c <= 10; c++) { //20p
			for (var d = 0; d <= 20; d++) { //10p
				for (var e = 0; e <= 40; e++) { //5p
					for (var f = 0; f <= 100; f++) { //2p
						for (var g = 0; g <= 200; g++) { //1p
							if (coinSum(a, b, c, d, e, f, g)) count++;
						}
					}
				}
			}
		}
	}
}

console.log(count);