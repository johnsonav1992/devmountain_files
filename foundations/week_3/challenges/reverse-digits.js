function printDigits(num) {
	while(num > 0) {
		console.log(num % 10)
		num = Math.floor(num /10)
		
	}
}

printDigits(764839)