var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('article5', { title: 'Article 5' });
});

module.exports = router;
