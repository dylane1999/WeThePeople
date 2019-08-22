var express = require('express');
var router = express.Router();
// const articles = require('../database')
const saveNumber = require('../lib/saveNumber')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'We The People'});
});


router.post('/', function(req, res) {
  let number = req.body.number

  if(/\d{9}/.test(number)) {
    saveNumber(number)
    res.redirect('/')
  } else {
    res.send(`the number you entereed [${number}] isn't valid`)
  }
})



module.exports = router;


