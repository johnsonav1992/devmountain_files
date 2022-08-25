let numbers = [0,1,2,3,4,5,6,7,8,9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function findFourth(numbers) {
    var count = 1
    var answer = 0
  
    for (let i = 0; i < numbers.length; i++) {
        if (count === 4) {
            return answer = numbers[i]
        } else {
            count += 1
        }
    }
  }

//   console.log(findFourth(numbers)

  console.log(numbers[3])