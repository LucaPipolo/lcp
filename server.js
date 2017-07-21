var express = require('express')
var compression = require('compression')
var sslRedirect = require('heroku-ssl-redirect')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.use(compression())
app.use(sslRedirect())
app.use(express.static(path.join(__dirname, './dist')))
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, './dist/index.html'))
})
app.listen(port)
