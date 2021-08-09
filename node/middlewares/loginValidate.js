const schemas = require("./schema/clientes");

 const validateLogin = (req, res, next) => {
     const { error, value } = schemas.login.validate(req.body);
     error ? res.render('indexAdmin', {message: error.details.message}) : next();
     process.setMaxListeners(0);
 }

module.exports = {validateLogin}