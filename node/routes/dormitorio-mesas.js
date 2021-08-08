const express = require('express');
const router = express.Router();
const {getAllDormitorioMesas} = require('./../models/productos');

const getAllMesasD = async(req, res) => {
    const productos = await getAllDormitorioMesas();
    res.render('dormitorio-mesas', {productos});
}

router.get('/', getAllMesasD);

module.exports = router;