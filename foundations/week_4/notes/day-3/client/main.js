const form = document.querySelector('form')
const baseURL = 'http://localhost:4000'

const getPokemon = e => {
    e.preventDefault()
    const input = document.querySelector('input')
    let pokemon = input.value

    axios.get(`${baseURL}/pokemon/${pokemon}`)
        .then(response => {
            // let pokemon = response.data
            // let { sprites } = pokemon
            // let { front_default } = sprites

            let { front_default } = response.data.sprites
            console.log(front_default)
            let pokemonSprite = document.createElement('img')
            pokemonSprite.src = front_default
            let body = document.querySelector('body')
            body.append(pokemonSprite)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', getPokemon)
