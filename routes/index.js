module.exports = function(io) {

  const express = require('express');
  const router = express.Router();
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');
  router.use(express.static('public'));

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { username: "", tweets: tweets, showForm: true} );
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { username: name, tweets: list, showForm: true});
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', {name, text});
    res.redirect('/');
  });
  

  return router;
};
