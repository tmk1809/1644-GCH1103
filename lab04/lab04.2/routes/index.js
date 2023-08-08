var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res)=>{
  res.render('login');
})

router.post('/login', (req, res)=>{
  var data = req.body;
  var username = data.username;
  var password = data.password;
  
  // console.log(username);
  // console.log(password);
  if(username == "khoitm" && password == "123456"){
    res.send("<h1 style='color: red; background-color: yellow;'>Login passed !</h1>");
  }else{
    res.send("<h1 style='color: red; background-color: yellow;'>Login failed !</h1>");
  }
})

router.get('/input', (req, res)=>{
  res.render('add_student');
})

router.post('/output', (req, res)=>{
  res.render('view_student', {student : req.body});
})

module.exports = router;
