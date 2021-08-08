const express = require('express');
const router = express.Router();
const {getAllLivingRecibidores} = require('./../models/productos');

const getLivingRecibidores = async(req, res) => {
    const productos = await getAllLivingRecibidores();
    res.render('living-recibidores', {productos});
}

router.get('/',getLivingRecibidores);

module.exports = router;