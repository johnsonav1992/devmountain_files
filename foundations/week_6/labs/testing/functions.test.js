const functions = require('./functions')

let { returnTwo, greeting, add, subtract, multiply, divide } = functions

///Return 2
it ('should return the number 2', () => {
    expect(returnTwo()).toEqual(2)
})

///Greeting
describe('test greeting function', () => {
    it ('should return the correct greeting with name inserted', () => {
        expect(greeting('Alex')).toEqual('Hello, Alex.')
        
    })
    
    it ('should return the correct greeting with name inserted', () => {
        expect(greeting('James')).toEqual('Hello, James.')
        
    })
    
    it ('should return the correct greeting with name inserted', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
        
    })
})


///Math Funtions
describe('Math functions', () => {
    it ('should return the two numbers added together', () => {
        expect(add(1, 2)).toEqual(3)
    })

    it ('should return the two numbers subtracted', () => {
        expect(subtract(10, 6)).toEqual(4)
    })

    it ('should return the two numbers multiplied together', () => {
        expect(multiply(3, 4)).toEqual(12)
    })

    it ('should return the two numbers divided', () => {
        expect(divide(10, 5)).toEqual(2)
    })

})

