var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

router.get('/', async (req, res) => {
   //SQL: SELECT * FROM book
   //lấy dữ liệu từ collection "book" và lưu vào array "books"
  var books =  await BookModel.find();
  
  //console.log(books);
  //res.send(books);

  //render ra file "book_list.hbs" nằm trong "views"
   res.render('book_list', { books : books });
})

module.exports = router;