const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

newQuestion()

function newQuestion() {
    reader.question("What would you like to calculate? (press 'c' to close) ", function(input){
	    const tokens = input.split(' ');
	
	    const operand = tokens[0];
	    const num1 = Number(tokens[1]);
	    const num2 = Number(tokens[2]);

        if (operand === "+") {
            console.log(num1 + num2)
            newQuestion()
        }

        if (operand === "-") {
            console.log(num1 - num2)
            newQuestion()
        }

        if (operand === "*") {
            console.log(num1 * num2)
            newQuestion()
        }

        if (operand === "/") {
            console.log(num1 / num2)
            newQuestion()
        }

        if (operand === "sqrt") {
            console.log(Math.sqrt(num1))
            newQuestion()
        }

        if (operand === 'c') {
            reader.close() // This line closes the connection to the command line interface.

        }

    })
}
