const verifyUser = (req, res, next) => {
    if(req.session.userId){
        next();
    }else{
        res.render('login', {message: 'necesitas loguearte para acceder'})
    }
}
const verifyAdmin = (req, res, next) => {
    if(req.session.idRol == 1){
        next();
    }
    else{
        res.render('login', {message: "Permiso restringido, solo usuarios con rol admin pueden acceder"});
    }
}

module.exports = {verifyUser, verifyAdmin}