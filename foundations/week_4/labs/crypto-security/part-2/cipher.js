function cipher(str) {
    let inputChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ' ']
    
    let codes = ['!', '|', '@', '_', '#', '<', '$', '/', '%', '9', '^', '8', '&', '7', '*', '6', '(', '5', ')', '4', '-', '3', '[', '2', ']', '1','D', 'G', 'E', 'R', 'Q', 'O', 'P', 'I', 'L', 'Y', '>']

    let strArr = Array.from(str)
    let result = []

    if (str.match(/[a-z][0-9]/g)) {

        for(let i = 0; i < strArr.length; i++) {
            let index = inputChars.indexOf(strArr[i])
            let code = codes[index]
            result.push(code)
        }

    } else {

        for(let i = 0; i < strArr.length; i++) {
            let index = codes.indexOf(strArr[i])
            let chars = inputChars[index]
            result.push(chars)
        }
    }
    return result.join('')
}
console.log(cipher('%>8*3#>@5]64*$5!6/]'))
console.log(cipher('i love cryptography'))

