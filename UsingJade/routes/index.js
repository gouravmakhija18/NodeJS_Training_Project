var express = require('express');

var router = express.Router();


router.get('/', function (req, res) {    
    res.render('partial', { title: 'My Custom Jade Page' });
});

module.exports = router;