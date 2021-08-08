const express = require('express');
const router = express.Router();
const {getAllCocinaArrime} = require('./../models/productos');

const getAllArrime = async(req, res) => {
    const productos = await getAllCocinaArrime();
    res.render('cocina-arrime', {productos});
}

router.get('/', getAllArrime);

module.exports = router;