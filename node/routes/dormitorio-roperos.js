const express = require('express');
const router = express.Router();
const {getAllDormitorioRoperos} = require('./../models/productos');

const getAllRoperos = async(req, res) => {
    const productos = await getAllDormitorioRoperos();
    res.render('dormitorio-roperos', {productos});
}

router.get('/', getAllRoperos);

module.exports = router;