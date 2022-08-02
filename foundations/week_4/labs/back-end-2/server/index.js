const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

let PORT = 4004

app.listen(PORT,console.log(`Server running on ${PORT}`))

require('./routes')(app)