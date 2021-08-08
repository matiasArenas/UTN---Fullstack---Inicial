const nodemailer = require("nodemailer");

const sendContacto = async ({ mail, asunto, cuerpo, from }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const info = {
      from: from,
      to: mail,
      subject: asunto,
      html: cuerpo,
    }; 
    const { messageId } = await transporter.sendMail(info);
    console.log('TRANSPORTER',transporter);
    console.log('INFO',info)
    console.log('MESSAGEID',messageId);
    return messageId;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { sendContacto };
