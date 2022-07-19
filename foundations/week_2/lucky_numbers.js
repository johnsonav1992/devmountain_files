////////FIND LUCKY NUMBERS//////////
function findLuckyNumbers(n) {
	let result = []
	
	if(n < 0 || n > 10) return "Please select between 1 & 10!"

	while(result.length < n){
		let i = 0
		let newNum = Math.floor((Math.random() * 10) + 1)
		
		if(result.includes(newNum)) {
			result.splice(result[i], 1)
		} else {
			result.push(newNum)
		}
		
		i++
	}

	return result
		

}

console.log(findLuckyNumbers(9))

const luckyNumbers = n => {
	let uniqueSet = new Set([])
	while(uniqueSet.size < n){
	  uniqueSet.add(Math.floor(Math.random() * 10) + 1)
	}
	return [...uniqueSet]
  }
  
  console.log(luckyNumbers(9))

function findLuckyNumbers2(n) {
    let result = []
    
    if(n < 0 || n > 10) return "Please select between 1 & 10!"

    while(result.length < n){
        let newNum = Math.floor(Math.random() * 10)
        
        if(result.indexOf(newNum) <= 0) {
			result.push(newNum)
        }
    }

    return result
}

console.log(findLuckyNumbers(9))