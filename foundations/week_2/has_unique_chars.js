function hasUniqueChars(str) {
	
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < i; j++) {
			if (str.charCodeAt(i) === str.charCodeAt(j)) {
				return false
			}
		}
	}
	
	return true
}

console.log(hasUniqueChars("Monday"))

/* ES6 Sets automatically make an array 
into a set of unique elements, including differences in charCode - so that is automatically done for you under the hood! */

function hasUniqueCharsAlt(str) {
	let strArray = str.split('')
    return new Set(strArray).size === strArray.length
}

console.log(hasUniqueCharsAlt("Monondaydam"))


