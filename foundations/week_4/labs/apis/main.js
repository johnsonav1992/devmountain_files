let residentsButton = document.querySelector('button')

function buttonClicked () {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
        .then(response => {
            console.log(response)
            let planet = response.data.results[0]
            console.log(planet)
            let { residents } = planet
            residents.forEach(resident => {
                axios.get(`${resident}`)
                    .then(response => {
                        console.log(response)
                        let h2 = document.createElement('h2')
                        h2.innerText = response.data.name
                        document.querySelector('body').append(h2)
                    })
            })
        })
}

residentsButton.addEventListener('click', buttonClicked)