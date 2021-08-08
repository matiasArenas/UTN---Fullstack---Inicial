const express = require('express');
const router = express.Router();
const {getAllOficinaEscritorio} = require('./../models/productos');

const getAllEscritorios = async(req, res) => {
    const productos = await getAllOficinaEscritorio();
    res.render('oficina-escritorios', {productos});
}

router.get('/',getAllEscritorios);

module.exports = router;