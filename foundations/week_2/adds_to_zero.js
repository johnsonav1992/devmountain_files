let arr = [1, 4, 11, 2, 37, -4]

let equalsZero = false

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
            equalsZero = true 
        }
    }
    
}



console.log(equalsZero)