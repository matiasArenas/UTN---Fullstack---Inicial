var express = require('express');
var router = express.Router();

const renderView = (req,res)=>{
    res.render('registro');
}

router.get('/', renderView);

module.exports = router;