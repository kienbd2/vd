var express = require('express')
var app = express()
var port = 8080

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('anh yeu em')
})
app.listen( port,function () {
  console.log("Example app listening on port" + port)
})