const express = require('express')
const nunjucks = require('nunjucks')
const app = express()


app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})


app.use(function(request, response, next){
  console.log(request.method, request.path)
  next()
})
app.get('/', function(request, response){
  const people =[{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}, {name: 'Nick'}];
  response.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/news', function(request, response){
  response.send('News')
})

app.listen(3000, function(){
  console.log("server listening")
})


