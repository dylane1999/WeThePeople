var express = require('express');
var router = express.Router();
const articles = require('../database')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  const article = articles.find(a => a.id === Number(req.params.id) )

  if(article) {
    res.render('article', { title: 'We The People', article });
  } else {
    res.render('error', { message: 'article not found' });
  }

});

module.exports = router;
