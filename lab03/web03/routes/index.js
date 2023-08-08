var express = require ('express');
var router = express.Router();

router.get('/', (req, res) => {
  var country = "Vietnam";  //String
  var year = 2023;  //integer
  var grade = 7.5;   //double
  var pass = true;   //boolean
  var gender = 'm';   //character
  var sports = ["football", "badminton", "swimming", "voleyball", "running", "golf"];  //array
  res.render('index',
    {
        country: country,
        year: year,
        grade: grade,
        pass: pass,
        gender: gender,
        sports: sports
    }
  )
})


module.exports = router;