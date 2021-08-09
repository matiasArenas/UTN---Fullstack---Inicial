const express = require("express");
const router = express.Router();
const { authUser } = require("./../models/usuarios");
const sha1 = require("sha1");
const { validateLogin } = require("../middlewares/loginValidate");


const renderView = (req, res) => {
  res.render("login");
};

// const login = async (req, res) => {
//   let { mail, pass } = req.body;
//   pass = sha1(pass);
//   console.log('usuario y pass', mail, pass);
//   const logged = await authUser(mail, pass);
//   if (logged.length === 0) {
//     res.render("login", { message: "Usuario o pass incorrectos" });
//   } else {
//     const [{ id, admin }] = logged;
//     console.log( req.session.user,req.session.admin)
//     req.session.user = id;
//     req.session.admin = admin;
//     res.render("/indexAdmin");
//   }
// };

const login = async (req,res) =>{
    let {emailCliente, pass} = req.body;
    pass = sha1(pass)
    const logged = await authUser(emailCliente, pass);
    if(logged.length === 0){
        res.render('login', {message : "Email o pass incorrectos"});
    }else{
        const[{idCliente, idRol}] = logged;
        req.session.userId = idCliente;
        req.session.idRol = idRol;
        res.render('indexAdmin');
    }
}

router.get("/", renderView);
router.post("/", login);
module.exports = router;
