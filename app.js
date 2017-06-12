const express = require('express')
const app = express()

app.use(function(request, response, next){
  console.log(request.method, request.path)
  next()
})
app.get('/', function(request, response){
  response.send('Welcome to Bitter')
})

app.get('/news', function(request, response){
  response.send('News')
})

app.listen(3000, function(){
  console.log("server listening")
})


