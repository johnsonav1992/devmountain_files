let pikachu = {
    name: 'Pikachu',
    types: [
        {
        name: 'Electric',
        weaknesses: ['Ground','Grass','Electric','Dragon'],
        strengths: ['Flying','Water']
        }
    ],
    evolutionChain: {
        count: 3,
        names: {
            baby: 'Pichu',
            teen: 'Pikachu',
            adult: 'Raichu'
        }
    },
    generation: 'Generation I',
    canEvolve: true,
    evolutionRequirements: "Thunder Stone",
    moves: [
        {
            name: "Thundershock",
            type: "Electric",
            damageType: "Special"
        },
        {
            name: "Dig",
            type: "Ground",
            damageType: "Physical"
        },
        {
            name: "Thunder Wave",
            type: "Electric",
            damageType: "Status"
        },
        {
            name: "Brick Break",
            type: "Fighting",
            damageType: "Physical"
        }
    ]
}

console.log(
    `My ${pikachu.name} is the best Pokemon in the world\nIt is an ${pikachu.types[0].name} type Pokemon, which means that it is weak to ${pikachu.types[0].weaknesses[1]} types, and strong against ${pikachu.types[0].strengths[1]} types.\nIts adult evolved form is ${pikachu.evolutionChain.names.adult}. It needs a ${pikachu.evolutionRequirements} to evolve into ${pikachu.evolutionChain.names.adult}, and it evolves from ${pikachu.evolutionChain.names.baby}!\nMy ${pikachu.name} knows many moves, and even though ${pikachu.name} is an ${pikachu.types[0].name} type, not all of its moves are that type.\nFor example, my ${pikachu.name} knows ${pikachu.moves[1].name} which is a ${pikachu.moves[1].type} type move, and does ${pikachu.moves[1].damageType} damage.`
)



//Write a function that creates a grammatically correct sentence, spelling out all of Pikachu's weaknesses, strengths, and moves (Their names, types, and damage types) and logs it to the console.

function pikachuCharacteristics(pikachu) {
    let weaknesses = pikachu.types[0].weaknesses
    let strengths = pikachu.types[0].strengths
    let movesArray = pikachu.moves

    let sentence = `${pikachu.name}'s weaknesses are ${weaknesses[0]}, ${weaknesses[1]}, ${weaknesses[2]}, and ${weaknesses[3]}. His strengths are ${strengths[0]} and ${strengths[1]}, and his moves are ${movesArray[0].name}, ${movesArray[1].name}, ${movesArray[2].name}, and ${movesArray[3].name}.`

    return sentence
}

console.log(pikachuCharacteristics(pikachu))



//////// Classes /////////

class Test {
    constructor(prop1, prop2) {
        this.prop1 = prop1
        this.prop2 = prop2
    }

    testFunc() {
        console.log('Hi')
    }
}


// Create a Ninja class 

class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(`${this.name}`)
    }

    showStats() {
        console.log(`Stats - name: ${this.name}, strength: ${this.strength}, 
        speed: ${this.speed}, health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10
    }
}
// add an attribute: name  
// add an attribute: health - give a default value of 100 
// add a attribute: speed - give a default value of 3  
// add a attribute: strength - give a default value of 3  
// add a method: sayName() - This should log that Ninja's name to the console  
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  
// add a method: drinkSake() - This should add +10 Health to the Ninja



// example output
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "Ninja Hyabusa has joined the dojo"
ninja1.showStats();
// -> Ninja Hyabusa stats:\nHealth: 100\nSpeed: 3\nStrength: 3



// might be on assessment idk - for sure
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()
// copy the superSensei using spread

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom() {
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }

    attack(attacker) {
        if(attacker instanceof Ninja) {

        if (attacker.strength > this.strength) {
            this.health -= 50
        } else attacker.health -= 50
    }

    }
}

//example output
const super_sensei = new Sensei("Master Splinter");
const copy = {...super_sensei}
const poser_sensei = new Sensei("Master sprinter", 200, 3, 4, 10);
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.attack(poser_sensei)
super_sensei.showStats();
//-> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// BONUS 
// create an attack function on the sensei class...EXTRA BONUS check if the object attacking is a type of ninja

