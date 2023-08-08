var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//1. use get method to render login page for form input
router.get('/login', (req, res) => {
  res.render('login');
})
//2. use post method to receive input from form
router.post('/login', (req, res) => {
  //lấy dữ liệu nhập vào form
  var data = req.body;
  var username = data.username;
  var password = data.password;

  //1. trả dữ liệu về console
  /* console.log(username);
  console.log(password); */

  //2. trả dữ liệu với format JSON 
  //res.send(data);

  if (username == "admin" && password == "123456") {
    res.send("<h1 style='color: red; background-color: yellow;'>Login Passed !</h1>");
  } else {
    res.send("<h1 style='color: red; background-color: yellow;'>Login Failed !</h1>");
  }
})

router.get('/input', (req, res) => {
  res.render('add_student');
})

router.post('/output', (req, res) => {
  res.render('view_student', { student : req.body });
})

module.exports = router;
