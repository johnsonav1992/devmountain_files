// Given an array of numbers, write some code to loop through the array, 
// and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], 
// your code should print out -4, 37.

function smallestAndLargest(array) {

    let result = []
    let smallest = array[0]
    let largest = 0

    for(let i = 0; i < array.length; i++) {

        if (array[i] < smallest ) {
            smallest = array[i]
        }
    }
    result.push(smallest)
    
    for(let i = 0; i < array.length; i++) {

        if (array[i] > largest) {
            largest = array[i]
        }
    }
    result.push(largest)

    return result
}

console.log(smallestAndLargest([1, 4, 11, 2, 37, -4]))