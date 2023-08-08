const express = require('express');
const router = express.Router();
const Mobile = require('./models/Mobile');

router.get('/', (req, res)=>{
    var text = "Mobile evolution";
    var year = 2023;

    res.render('mobile/index', {chu : text, so : year});
})

router.get('/list', (req, res)=>{
    var mobile1 = new Mobile(1, 'iphone 14 pro max', 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg');
    var mobile2 = new Mobile(2, 'galaxy s22 ultra', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEYFIrrmdMAepM8oi_tSa3IJqem6-wIOwIw&usqp=CAU');
    var mobile3 = new Mobile(3, 'note 10 ultra', 'https://sathya.in/media/89369/catalog/Oppo%20Mobile%20A77%204GB%20RAM%20128GB_03.jpg');
    var mobileList = [mobile1, mobile2, mobile3];

    res.render('mobile/list', {mobiles : mobileList});
})

module.exports = router;