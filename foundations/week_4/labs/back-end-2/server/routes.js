const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js')

module.exports = (app) => {
    app.get('/api/houses', getHouses)
    app.post('/api/houses', createHouse)
    app.put('/api/houses/:id', updateHouse)
    app.delete('/api/houses/:id', deleteHouse)
}