const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("GO AWAY")
})
app.listen(3000)
