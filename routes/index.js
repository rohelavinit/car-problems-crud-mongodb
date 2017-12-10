var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const modelData= { title: 'Allstate India cohort 1' };
  res.render('index', modelData);
});

module.exports = router;
