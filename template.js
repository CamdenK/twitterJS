var nunjucks = require('nunjucks')
var blanks = {
  title: 'An Example',
  people: [{name: 'Gandalf'},
          {name: 'Frodo'},
          {name: 'Hermione'}]
}

nunjucks.configure('views')
nunjucks.render('index.html', blanks, function(err,output){
  console.log(output)
})
