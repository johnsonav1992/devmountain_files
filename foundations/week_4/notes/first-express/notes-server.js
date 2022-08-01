const express = require('express') //getting our express function
const cors = require('cors') // getting cors dependency 
const app = express() //setting app to the invocation of express function

app.use(express.json()) //allows JSON to be accepted
app.use(cors()) // use cors

// app.get(route, function)

const magicSet = [
    {id: 1, setName: "KTK"},
    {id: 2, setName: "2X2"},
    {id: 3, setName: "RAV"},
]

app.get('/api/magicSet', (req, res) => {
    res.send(magicSet)
})

app.post('/api/magicSet', (req, res) => {
    magicSet.push(req.body)
    res.send(req.body)
})

app.put('/api/magicSet/:setId', (req, res) => {
    const set = magicSet.find(setObj => {
        setObj.id === parseInt(req.params.setId)
    })
    set.setName = req.body.setName
    res.status(200).json({message: "ok"})
})

app.delete('api/magicSet/:set_id', (req, res) => {
    const set = magicSet.find(setObj => {
        setObj.id === parseInt(req.params.setId)
    })
    magicSet.splice(req.params.set_id - 1, 1)
    res.send('you did it')
})

app.listen(8000, () => {
    console.log("We are live!")
}) //puts our server live on a specific port