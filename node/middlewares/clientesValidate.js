const schemas = require("./schema/clientes");

const validateEmailContacto = (req, res, next) => {
    const { error, value } = schemas.contacto.validate(req.body);
    error ? res.render('contacto', {message: error.details.message}) : next();
    process.setMaxListeners(0);
}

module.exports = {validateEmailContacto}