const express = require('express');
const router = express.Router();
const {getAllLivingMesas} = require('./../models/productos');

const getLivingMesas = async(req, res) => {
    const productos = await getAllLivingMesas();
    res.render('living-mesas', {productos});
}

router.get('/',getLivingMesas);

module.exports = router;