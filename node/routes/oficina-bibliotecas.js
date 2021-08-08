const express = require('express');
const router = express.Router();
const {getAllOficinaBibliotecas} = require('./../models/productos');

const getAllBiblioteca = async(req, res) => {
    const productos = await getAllOficinaBibliotecas();
    res.render('oficina-bibliotecas', {productos});
}

router.get('/',getAllBiblioteca);

module.exports = router;