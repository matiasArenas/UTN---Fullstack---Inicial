const express = require('express');
const router = express.Router();
const {getAllCocinaVitrinas} = require('./../models/productos');

const getAllVitrinas = async(req, res) => {
    const productos = await getAllCocinaVitrinas();
    res.render('cocina-vitrinas', {productos});
}

router.get('/', getAllVitrinas);

module.exports = router;