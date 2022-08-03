const { getPokemon } = require('../controller/controller.js')

module.exports = (app) => {
    app.get(`/pokemon/:pokemon`, getPokemon)
}