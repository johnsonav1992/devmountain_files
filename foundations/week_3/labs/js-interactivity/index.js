const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle) //adds title to the list item

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const moviesUl = document.querySelector('ul') //gets the ul
    moviesUl.appendChild(movie) // adds a new movie li to the ul
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else message.textContent = `${event.target.textContent} added back!`
}

function revealMessage() {
    message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie) //adds movie on form submit


































