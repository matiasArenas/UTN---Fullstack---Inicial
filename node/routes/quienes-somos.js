var express = require('express');
var router = express.Router();

const renderView = (req,res)=>{
    res.render('quienes-somos');
}

router.get('/', renderView);
module.exports = router;