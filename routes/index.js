const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('./stylesheets/style.css', function(req, res) {
    res.sendFile('../public/stylesheets/style.css');
})
// router.post('/tweets', function(request, response, next) {
//   //response.send('')
// })



///////////
// app.get('/', function(request, response){
//   const people =[{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}, {name: 'Nick'}];
//   response.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// app.get('/news', function(request, response){
//   response.send('News')
// })


module.exports = router;