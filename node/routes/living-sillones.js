const express = require('express');
const router = express.Router();
const {getAllLivingSillones} = require('./../models/productos');

const getLivingSillones = async(req, res) => {
    const productos = await getAllLivingSillones();
    res.render('living-sillones', {productos});
}

router.get('/',getLivingSillones);

module.exports = router;