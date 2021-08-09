var express = require('express');
var router = express.Router();
const model = require('./../models/usuarios');
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const { send } = require('./../services/mail')
const  {validateRegistro} = require('../middlewares/registroValidate');

const renderView = (req,res)=>{
    res.render('registro');
}

const create = async (req, res) => {
    const usuario = req.body;
    let duplicado = false;
    const uid = uuid();
    const usuarioFinal = {
        nombreCliente: usuario.nombreCliente,
        apellidoCliente: usuario.apellidoCliente,
        dniCliente: usuario.dniCliente,
        direccionCliente: usuario.direccionCliente,
        telefonoCliente: usuario.telefonoCliente,
        mailCliente: usuario.mailCliente,
        idRol:2,
        habilitado:0,
        pass: sha1(usuario.pass),
        confirmacionCorreo: uid,
    }
    const usuariosExistentes = await model.getAllUsers();
    usuariosExistentes.forEach(usuario => {
        if (usuario.dniCliente == usuarioFinal.dniCliente) duplicado = true;
    })
    if (!duplicado) {
        const agregado = await model.createUser(usuarioFinal);
        send({
            mail : usuarioFinal.mailCliente,
            cuerpo:
            `<h1> Bienvenido ${usuarioFinal.nombreCliente, usuarioFinal.apellidoCliente}</h1>
            <h3>Aldea muebles le da la bienvenida, por favor, verifique su cuenta en el siguiente link</h3>
            <a href="${process.env.URL_SERVER}:${process.env.PORT}/registro/verify/${usuarioFinal.confirmacionCorreo}">LINK DE VERIFICACIÓN</a>`,
            });
        res.render('registro', {message : "Tu usuario ha sido generado, verifica tu email para iniciar sesion"});
    }
    else {
        res.render('registro', {message : "el nombre de usuario y/o mail ingresado ya extisten"})
    }
}

const verify = async(req, res) => {
    const {uid} = req.params;
    const messageId = await model.verifyUser(uid);
    res.redirect('/');
}

router.get('/', renderView);
router.post('/', validateRegistro, create);
router.get('/verify/:uid', verify);

module.exports = router;