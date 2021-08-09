var express = require('express');
var router = express.Router();

/* GET home page. */
const renderView = (req, res, next) => {
  res.render('indexAdmin');
};

router.get('/', renderView);

module.exports = router;