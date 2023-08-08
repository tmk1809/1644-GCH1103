var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
     //render ra view index.hbs nằm trong thư mục views/laptop
   res.render('laptop/index');
})

module.exports = router;