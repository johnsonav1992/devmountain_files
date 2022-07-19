// Backslash sequences

// \n --> new line
// \" --> escape double quote
// \' --> escape single quote

//////// String Methods Pair Programming /////////

let testString = "Hello, world"

//obtaining portions of a string

//substring and return "ell" ----->
console.log(testString.substring(1, 4))

//slice and return "worl" -----> 
console.log(testString.slice(7, -1))

//split and return an array of both words -----> 

let splitted = testString.split(', ')
console.log(splitted)

//Bonus: what method can take an array of words and put them back together

console.log(splitted.join(', '))

//searching a string

//indexOf "H" ---->
console.log(testString.indexOf('H'))

//lastIndexOf "l" ----> 
console.log(testString.lastIndexOf('l'))


//boolean searching funtions --> give you true or false

//startsWith "Hello" gives us?---> 

console.log(testString.startsWith("Hello"))

//endsWith "!" ---> 

console.log(testString.endsWith("!"))

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"

console.log(testString.replace('llo', 'ya'))

//toLowerCase ---> take a guess lol

console.log(testString.toLowerCase())

//toUpperCase ---> take another guess

console.log(testString.toUpperCase())

//inspecting individual characters of a string
//charAt 0 ---> 

console.log(testString.charAt(0)) 

//charCodeAt 0  --->
console.log(testString.charCodeAt(0)) 

//Bonus: find the range of lower and uppercase letters
let aToZLower = 'az'
console.log(aToZLower.charCodeAt(0)) //--> 97
console.log(aToZLower.charCodeAt(1)) //--> 122

let aToZUpper = 'AZ'
console.log(aToZUpper.charCodeAt(0)) //--> 65
console.log(aToZUpper.charCodeAt(1)) //--> 90

//space trim funtctions
//bonus mess with these methods
let test = "   test "

//trim test --->
console.log(test.trim())

//Bonus: mess with the other trims
//trimStart and trimEnd

console.log(test.trimStart())
console.log(test.trimEnd())

//////// Type Converison ///////

// && returns the first falsy value or the last value if no falsey value exists

// || if one or both is truthy, return truthy value, if both are falsey, returns last value
//Starts with the left and if that one is true, short circuits to that value



///////// Functions ///////////

////// Practice ///////

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Arrow Functions</title>
// </head>
// <body id="body">
//     <h1>My Boring Website</h1>
//     <p id="paragraph">
//         This website is boring, with very little CSS. 
//         However, we really just care about the javascript. 
//         For example, if you click <button id="button">this button</button>, the background of this paragraph tag will change to blue.
//     </p>
//     <p>We also have a <button id="alert">alert</button> button that will grab the text from the input below and show it in a popup.</p>
//     <div>
//         <input type="text" id="popup-input">
//     </div>
//     <p>
//         We just like random interactivity in the site, including a fun effect if you hover over <span id="hover-this">        <b>this.</b></span>
//     </p>
//     <p onmouseover="mouseOverFunction(this)">
//         Another task: This should be another feature. 
//         I want to click anywhere in this paragraph tag and I want to be able to change the background color to whatever is in this input: <input type="text" id="color-input"/>.
//     </p>
    // <script>
        document.getElementById("button").onclick = () => setBackgroundColorById("paragraph", "blue");

        document.getElementById("alert").onclick = () => alert(document.getElementById("popup-input").value);
        
        document.getElementById("hover-this").onmouseover = () => setBackgroundColorById("body", "red");
        
        document.getElementById("hover-this").onmouseout = () => setBackgroundColorById("body", "white");
    
        let getValueFromId = id => document.getElementById(id).value;
        
        let setBackgroundColorById = (id, color) => {
            document.getElementById(id).style = "background-color: " + color;
        }
        const mouseOverFunction = el => {
            el.style = `background-color: ${getValueFromId("color-input")}`;
        }
    // </script>
// </body>
// </html>
