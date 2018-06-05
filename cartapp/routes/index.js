var express = require('express');
var router = express.Router();
var mongocontroller = require('../controller/mongocontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getdata', mongocontroller.getdata);

module.exports = router;