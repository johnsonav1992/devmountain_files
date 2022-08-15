const towerBuilder = require('./day1-challenge')

//describing tests
describe('tower builder function morning challenge',  () => {
    //tests go here
    test('Is a function', () => {
        expect(typeof towerBuilder).toEqual('function')
    })

    //it is the same as tests, just reads better
    it('returns an array', () => {
        let returnedValue = towerBuilder(0)
        expect(Array.isArray(returnedValue)).toEqual(true)
    })

    it('returns a formatted pyramid', () => {
        let returnValue = towerBuilder(3)
        expect(returnValue).toEqual([ '  *  ', ' *** ', '*****' ])
    })

})