const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/', function (req, res) {
    
    res.end('hello world!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))