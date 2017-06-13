const express = require('express')
const nunjucks = require('nunjucks')
const tweetBank = require('./tweetBank.js')
const app = express()
const routes = require('./routes')
app.use('/', routes)

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})

app.use(function(request, response, next){
  console.log(request.method, request.path)
  next()
})

app.listen(3000, function(){
  console.log("server listening")
})


