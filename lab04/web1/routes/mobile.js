var express = require('express');
var router = express.Router();

//import module MobilePhone
var MobilePhone = require ('../models/MobilePhone');

router.get('/', (req, res) => {
   //gửi dữ liệu sang front-end (view)
   var text = "Mobile evolution";
   var year = 2023;

   //render ra view index.hbs nằm trong thư mục views/mobile
   res.render('mobile/index', { chu : text, so : year });
})

router.get('/list', (req, res) => {
   //tạo các object MobilePhone
   var mobile1 = new MobilePhone(1, "iphone 14 Pro Max", "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/iphone14promax_1.jpg?VersionId=TF0EiCCvxCMCnvSN4R5Z2FfnkoH.u51l&size=690:388");
   var mobile2 = new MobilePhone(2, "Galaxy S23 Ultra", "https://cdn.hoanghamobile.com/i/preview/Uploads/2023/02/02/image-removebg-preview-2_638109032737377121.png");
   var mobile3 = new MobilePhone(3, "Mi Note 10 Pro", "https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg");
   
   //tạo array chứa các object MobilePhone
   var mobileList = [mobile1, mobile2, mobile3];

   res.render('mobile/list', { mobiles : mobileList});
})
module.exports = router;