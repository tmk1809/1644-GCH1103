var express = require('express');
var router = express.Router();

router.get('/', async(req, res)=>{
    var students = await StudentModel.find();
    res.render('studentList', {students : students});
})

module.exports = router;