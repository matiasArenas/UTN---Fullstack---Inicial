const express = require('express');
const router = express.Router();
const {getAllCocinaMesas} = require('./../models/productos');

const getAllMesasC = async(req, res) => {
    const productos = await getAllCocinaMesas();
    res.render('cocina-mesas', {productos});
}

router.get('/', getAllMesasC);

module.exports = router;