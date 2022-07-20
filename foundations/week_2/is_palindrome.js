/////// METHODS Version ///////

function isPalindrome(str) {
	let forwards = str.split('')
	let reversed = forwards.reverse()
	let revStr = reversed.join('')

	if (str === revStr) {
		return true
	} else return false
}

let result = isPalindrome('racecar')
console.log(result)


////// LOOP Version //////

function checkPalindrome(string) {

    // find the length of a string
    const strLen = string.length;

    // loop through half of the string
    for (let i = 0; i < strLen / 2; i++) {

        // check if first and last string are same
        // if current letter is not equal to 
        // opposite letter on the other side of string
        if (string[i] !== string[(strLen - 1) - i]) {
            return false;
        }
    }
    return true;
}

// call the function
const value = checkPalindrome('Racecar');

console.log(value);