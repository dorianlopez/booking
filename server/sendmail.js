var nodemailer = require('nodemailer');
const {
  EMAIL_ACOUNT,
  EMAIL_PASSWD
} = process.env

function sendInfoEmail(to_send,to_subject,mensaje,htm)
{
//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ACOUNT,
      pass: EMAIL_PASSWD
    }
  });
  
  
  var mailOptions = {
    from: EMAIL_ACOUNT,
    to: to_send,
    subject: to_subject,
    text: mensaje,
    html : htm
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });

}

module.exports = {
    sendInfoEmail
}