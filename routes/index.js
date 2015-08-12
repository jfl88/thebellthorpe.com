var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to The Bellthorpe' });
});

router.get('/beer', function(req, res, next) {
  res.render('beer', { title: 'The Bellthorpe - Beer'});
});

router.get('/pong', function(req, res, next) {
  res.render('pong', { title: 'The Bellthorpe - Pong'});
});

module.exports = router;
