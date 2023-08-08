var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hn", (res, req)=>{
  res.render("hanoi");
})

router.get("/danang", (res, req)=>{
  res.render("danang");
})
module.exports = router;
