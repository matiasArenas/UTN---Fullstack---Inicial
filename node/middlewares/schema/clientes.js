const Joi = require('@hapi/joi');

const schemas = {
    contacto: Joi.object().keys({
        email: Joi.string().email().required(),
        asunto: Joi.string().required(),
        cuerpo: Joi.string().required()
    }),
     registro: Joi.object().keys({
         nombreCliente: Joi.any(),
         apellidoCliente: Joi.any(),
         dniCliente: Joi.any(),
         direccionCliente: Joi.any(),
         telefonoCliente: Joi.any(),
         mailCliente: Joi.any(),
         pass:Joi.any()
     }),
}

module.exports = schemas;

    // login: Joi.object().keys({
    //     mailCliente: Joi.string().email().required(),
    //     pass: Joi.string().min(3).min(20).required()
    // }),

    // nombreCliente: Joi.string().required(),
    // apellidoCliente: Joi.string().required(),
    // dniCliente: Joi.number().integer().required(),
    // direccionCliente: Joi.string().required(),
    // telefonoCliente: Joi.number().integer().required(),
    // mailCliente: Joi.email().required(),
    // pass:Joi.string().min(3).min(20).required()