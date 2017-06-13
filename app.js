const express = require('express')
const nunjucks = require('nunjucks')
const tweetBank = require('./tweetBank.js')
const app = express()
const routes = require('./routes')

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use('/', jsonParser)
app.use('/', urlencodedParser)

var socketio = require('socket.io')
var server = app.listen(3000)
var io = socketio.listen(server)


app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})

app.use(function(request, response, next){
  console.log(request.method, request.path)
  next()
})

app.use('/', routes(io))
