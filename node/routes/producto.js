const express = require('express');
const router = express.Router();
const {getAllProductos} = require('./../models/productos');

const obtieneProductos = async(req, res) => {
    const productos = await getAllProductos();
    console.log(productos);
    res.render('productos', {productos});
}

module.exports = router;