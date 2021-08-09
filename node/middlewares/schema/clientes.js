const Joi = require('@hapi/joi');

const schemas = {
    contacto: Joi.object().keys({
        email: Joi.any(),
        asunto: Joi.any(),
        cuerpo: Joi.any()
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
     login: Joi.object().keys({
             mailCliente: Joi.any(),
             pass: Joi.any()
         }),
}

module.exports = schemas;