var express = require('express');
var router = express.Router();
const articles = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('education', { title: 'Learn About the Constitution', articles });
  const article = articles.find(a => a.id === Number(req.params.id) )
});

module.exports = router;