let nums = [1, 2, 3]


///DRY - Dont' Repeat Yourself


/// .forEach iterates through array and invokes a function on each element - In English:
//forEach( element => do this )

nums.forEach(num => {
    return console.log(num + 2)
})

/// .map returns a NEW ARRAY of each element of the inputted array acted upon by the callback function
//map to a new array (element => element altered in some way)

console.log(nums.map(num => num + 2))

/// .filter returns a new array that is a 'filtered' version of the array based on a function that has a condition (true or false).
//In English:
//filter( eachElement => where this is true )

console.log(nums.filter(num => num < 2))

/// .reduce takes a previous value and current value as parameters along with what initial value to start at (used at the end of the callback --> (prev, current) . IF NO INITIAL VALUE TO START IS GIVEN, STARTS ON FIRST VALUE of the array. Then, it reduces everything in the array to a single value based on the operation given. 
let reduced = nums.reduce((currentTotal, currentNum) => currentTotal + currentNum)
console.log(reduced)


//// POKEMON EXAMPLES /////

const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 398, "name": "Staraptor", "types": ["flying"] },
    { "id": 363, "name": "Spheal", "types": ["water", "ice"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//get ids divis by 3
let divisBy3 = pokemon.filter(pokemon => pokemon.id % 3 === 0)
console.log(divisBy3)

//get fire types
let isFireType = pokemon.filter(pokemon => pokemon.types.includes("fire"))
console.log(isFireType)

//get pokemon with more than one type
let moreThanOneType = pokemon.filter(pokemon => pokemon.types.length > 1)
console.log(moreThanOneType)

//array with just pokemon names
let pokemonNames = pokemon.map(pokemon => pokemon.name)
console.log(pokemonNames)

//array with just pokemon names with id greater than 99
let pokemonNamesOver99 = pokemon.filter(pokemon => pokemon.id > 99).map(pokemon => pokemon.name)
console.log(pokemonNamesOver99)

//arr with names of pokemon with only type is poison 
let typePoison = pokemon.filter(pokemon => pokemon.types.includes('poison') && pokemon.types.length === 1).map(pokemon => pokemon.name)
console.log(typePoison)

// array containing just the first type of all pokemon whose second type is flying
let secondFlying = pokemon.filter(pokemon => pokemon.types[1] === "flying").map(pokemon => pokemon.types[0])
console.log(secondFlying)

// count of the number of normal type pokemon
let normalType = pokemon.filter(pokemon => pokemon.types.includes('normal'))
console.log(normalType.length) 

