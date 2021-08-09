const schemas = require("./schema/clientes");

const validateRegistro = (req, res, next) => {
    const { error, value } = schemas.registro.validate(req.body);
    error ? res.render('registro', {message: error.details.message}) : next();
    process.setMaxListeners(0);
}

module.exports = {validateRegistro}
