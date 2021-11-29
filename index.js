const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/users', (req, res) => {
    let friends = ["Evan", "Abbey", "Sarah", "Dinaker", "Kait", "John", "Gianna", "Emily", "Maria"]
    res.status(200).send(friends)
})

app.get('/weather/:temperature', (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
})
app.get('/api/users', )



app.listen(4000, () => console.log("Server jamming on 4000"))