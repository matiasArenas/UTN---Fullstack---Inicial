const express = require('express');
const router = express.Router();
const {getAllDormitorioComodas} = require('./../models/productos');

const getAllComodas = async(req, res) => {
    const productos = await getAllDormitorioComodas();
    res.render('dormitorio-comodas', {productos});
}

router.get('/', getAllComodas);

module.exports = router;