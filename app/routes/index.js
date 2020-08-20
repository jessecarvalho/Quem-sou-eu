let NeDB = require("nedb");
let db = new NeDB({
  filename:'characters.db',
  autoload: true
})

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
