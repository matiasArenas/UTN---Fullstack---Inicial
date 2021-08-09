const schemas = require("./schema/clientes");

const validateEmailContacto = (req, res, next) => { console.log('schemas', schemas)
    const { error, value } = schemas.contacto.validate(req.body);
    error ? res.render('login', {message: error.details.message}) : next();
    process.setMaxListeners(0);
}

module.exports = {validateEmailContacto}