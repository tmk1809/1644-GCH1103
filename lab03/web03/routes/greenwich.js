var express = require ('express');
var router = express.Router();

router.get('/hn', (req, res) => {
   var address = "Số 2 Phạm Văn Bạch - Cầu Giấy - Hà Nội";
   var image = "https://vcdn-vnexpress.vnecdn.net/2022/06/03/Image-249300564-ExtractWord-0-8746-7982-1654231437.png"
   res.render('hanoi', { hn: "Hà Nội", diachi : address, image : image });
})

router.get('/hcm', (req, res) => {
   res.render('hcm');
})

module.exports = router;