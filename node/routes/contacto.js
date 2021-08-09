const express = require("express");
const router = express.Router();
const { send } = require("./../services/mail");

const renderView = (req, res) => {
  res.render("contacto");
};

const recibeEmailContacto = async (req, res) => {
  const email = req.body;
  if (email) {
    send({
      from: email.email,
      mail: process.env.MAIL_USER,
      asunto: email.asunto,
      cuerpo: email.cuerpo,
    });
    res.render("contacto", {message:"El email se ha enviado correctamente, le responderemos a la brevedad."})
  } else {
    res.render("contacto", {
      message:
        "El email no se pudo enviar, por favor intente con una cuenta de email válida.",
    });
  }
};

router.get("/", renderView);
router.post("/", recibeEmailContacto);

module.exports = router;
