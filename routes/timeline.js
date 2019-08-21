var express = require('express');
var router = express.Router();
let articles = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  articles = articles.map(a => { a.even = a.id % 2 === 0; return a; } )
  console.log(articles)
  res.render('timeline', { title: 'Timeline',  articles });
});

module.exports = router;
