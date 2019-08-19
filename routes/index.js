var express = require('express');
var router = express.Router();
const articles = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'We The People', articles });
});

module.exports = router;
