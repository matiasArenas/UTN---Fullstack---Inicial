const express = require('express');
const router = express.Router();
const {getAllProductos ,getSingleProducto, deleteProd, updateProd} = require('./../models/productos');

const getAll = async(req, res) => {
    const productos = await getAllProductos();
    res.render('modificaEliminaProductos', {productos});
}

const getUpdate = async(req, res) => {
    const [singleProd]  = await getSingleProducto(req.params.idProd);
    res.render('productoUpdate', {singleProd})
}

const postUpdate = async(req, res) => {
    console.log(req.body);
    console.log(req.params.idProd, req.body)
    const updateProductoS = await updateProd();

}

const del = async(req, res) => { console.log('entra del')
    const {idProd} = req.params;
    const deleteP = await deleteProd(idProd);
    res.render('productoEliminado');
}

router.get('/', getAll);
router.get('/update/:idProd',getUpdate);
router.get('/delete/:idProd', del);
router.post('/update/:idProd', postUpdate);

module.exports = router;