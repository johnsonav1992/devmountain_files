//Coding challenge Day 2
let x = 1
let y = 2

function maxOfTwo (num1, num2) {

    if (num1 === undefined || num2 === undefined) 
    return "Please input two numbers!"

	if (num1 > num2) {
		return num1
	} else if (num2 > num1) {
		return num2
	} else return "The values are identical."
}

console.log(maxOfTwo(x, y)) 

