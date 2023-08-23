var express = require('express')
var app = express()

const port = 5000 


app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})