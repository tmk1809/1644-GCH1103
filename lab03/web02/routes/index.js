var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hn', (req, res) => {
  res.render('hanoi');
})

router.get('/danang', (req, res) => {
  res.render('danang');
})

module.exports = router;
