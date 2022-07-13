let blaziken = "Kelvin"
let gengar = "Lukas"

if (blaziken === "Lukas") {
    console.log("This is Lukas' Pokemon")
} else {
    console.log("This is Kelvin's Pokemon")
}

let blazikenAtk = 30
let gengarAtk = 30

let blazikenHP = 200
let gengarHP = 260

if (blazikenAtk > gengarAtk) {
    gengarHP -= blazikenAtk
    console.log(`Gengar's new HP is ${gengarHP}`)
} else if (gengarAtk > blazikenAtk) {
    blazikenHP -= gengarAtk
    console.log(`Blaziken's new HP is ${blazikenHP}`)
} else {
    console.log("They both missed!")
}

let furySwipes = 35

for (i = 0; i < 3; i++) {
    console.log("Blaziken used fury swipes!")
    gengarHP -= furySwipes
    console.log(`Gengar's HP is now ${gengarHP}`)
}

let lowKick = 60

console.clear()

for (i = 2; i > 0; i--) {
    console.log(`Gengar used low kick!`)
    blazikenHP -= lowKick
    console.log(`Blaiken's HP is ${blazikenHP}`)
}

let gengarFainted = false

if (gengarFainted) {
    console.log("Gengar has fainted!")
}

while (gengarHP > 0) {
    console.log("Blaziken used fury swipes!")
    gengarHP -= furySwipes

    if (gengarHP < 0) {
        gengarHP = 0
        gengarFainted = true
    }

    console.log(`Gengar's HP is now ${gengarHP}`)

    if (gengarFainted) {
        console.log("Gengar has fainted!")
    }
}

let boolean = false
let falseNum = 0
let falseString = ""

if (boolean) {
    console.log("True")
} else console.log("False")



