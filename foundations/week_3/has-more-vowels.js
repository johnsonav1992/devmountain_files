function hasMoreVowels(word) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']

    let vowelsOnly = Array.from(word).filter((letter) => vowelsArr.includes(letter))

    return vowelsOnly.length > (word.length / 2)
}

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aal'))