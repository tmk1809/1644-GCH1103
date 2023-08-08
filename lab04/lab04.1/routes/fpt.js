const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('fpt');
})

router.get('/cloud', (req, res)=>{
    res.render('1644');
})

router.get('/')

module.exports = router;