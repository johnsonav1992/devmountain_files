function stringDecoder(code) {
	let fixNumbers = Array.from(code).map((char => parseInt(char) || char))
	let result = []
		
	fixNumbers.map((char, i, array) => {
		if (char === '0') {
			result.push(array[(i + 1)])
		} else if (typeof char === 'number') {
			result.push(array[(i + 1) + char])
		} 
	})
	
	return result.join('')
}

console.log(`The secret code is "${stringDecoder('0h2xce5ngbrdy')}"`)
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'
// '3thul1fo4dhtyv0e' => 'love'