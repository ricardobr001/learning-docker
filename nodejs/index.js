var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
    console.log('GET [200] - ' + req.headers["user-agent"]);
    res.send('Hello World')
})
 
app.listen(3000, () => {
    console.log('Server started on port 3000')
})