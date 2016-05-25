var year = 1901
var date = 1
var day = 2
var month = 0
var dayofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


var sundayCount = 0

function incrementDay(monthLength) {
	if (date + 1 > monthLength) {
		date = 1
		day = (day + 1) % 7
		month = (month + 1) % 12
	}
	else {
		date++
		day = (day + 1) % 7
	}
}

while (year < 2001) {
	switch (month) {
		case 0: // January
			incrementDay(31)
			break

		case 1: // February
			if (year % 4 == 0) {
				if (year == 2000 || year % 100 != 0) {
					incrementDay(29)
				}
				else {
					incrementDay(28)
				}
			}
			else {
				incrementDay(28)
			}
			break
		case 2: // March
			incrementDay(31)
			break

		case 3: // April
			incrementDay(30)
			break

		case 4: // May
			incrementDay(31)
			break

		case 5: // June
			incrementDay(30)
			break

		case 6: // July
			incrementDay(31)
			break

		case 7: // August
			incrementDay(31)
			break

		case 8: // September
			incrementDay(30)
			break

		case 9: // October
			incrementDay(31)
			break

		case 10: // November
			incrementDay(30)
			break

		case 11: // December
			incrementDay(31)
			if (month == 0) year++
			break
	}

	if (day == 0 && date == 1) {
		console.log("SUNDAY!!")
		sundayCount++
	}
}

console.log(sundayCount)