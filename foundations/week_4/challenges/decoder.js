function decoder(str) {
	let result = ''
	let num = Number(str.charAt(0))

	for (let i = 1; i < str.length; i++) {
		let newChar = String.fromCharCode(str.charCodeAt(i) + num).toLowerCase()
		result += newChar
	}
	return result
}

console.log(decoder("2fcjjm"))

/* >>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
>>> "1ana" // "bob"
*/