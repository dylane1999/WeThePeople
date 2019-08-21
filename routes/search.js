var express = require('express');
var router = express.Router();
// const articles = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'Real Time Action'});
});

router.get('/search', function(req, res, next){
  res.render('search')
})

module.exports = router;
