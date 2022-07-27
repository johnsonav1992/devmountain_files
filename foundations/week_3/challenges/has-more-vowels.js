function hasMoreVowels(word) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']

    let vowelsOnly = Array.from(word.toLowerCase()).filter((letter) => vowelsArr.includes(letter))

    return vowelsOnly.length > (word.length / 2)
}

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aal'))

///// With Regex //////
const countVowels = (str) => str.match(/[aeiou]/gi).length > str.length / 2

console.log(countVowels('moose'))
console.log(countVowels('Aal'))
console.log(countVowels('mice'))