let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]

console.log(myPokemon[1])

//.push --> add to end of arry
//.pop --> remove from end of array
//.unshift --> add to front
//.shift--> remove from front

myPokemon.push("Milotic")

myPokemon.pop()

myPokemon.unshift("Turtwig")

myPokemon.shift()

//.slice() take an element out of the array, but does not change 
//the array (makes a new one instead)
// takes two params => what index does it start, where does it end

//.splice() takes a "chunk" out (start, # to delete, optional new value)

let copy = myPokemon.slice()

myPokemon.splice(2, 0, "Bulbasaur")

console.log(myPokemon, copy);


////////////// Array Loops //////////////////

for (let i = 0; i < myPokemon.length; i++) {
    console.log(myPokemon[i]);

    if (i % 2 === 0) {
    console.log(myPokemon[i]);
    } else {
        myPokemon.splice(i, 1, "Bulbasaur")
    }
}

console.log("-------------");

for (let i = 0; i < myPokemon.length; i++) {
    if (myPokemon[i] === "Bulbasaur") {
        console.log(myPokemon[i]);
    }
}

//////// Control Flow ////////

let guessMe = 54

while (guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
}

/////// Challenge ////////


