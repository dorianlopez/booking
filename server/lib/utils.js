var bcrypt = require('bcrypt-nodejs');
const template = require('../templates/templateEmail');
const sendmail = require('../sendmail')

function generateHash(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validPassword(pwd_param,pwd_db){
  return bcrypt.compareSync(pwd_param, pwd_db);
}

// envio de booking
function sendEmailBooking(email,date,real_state){
  let html = template.htmlEmailCodeAccess('Estimado usuario','rgb(20,78,156)','Servicio de Booking',`Su reserva en <strong>${real_state}</strong> se genero con éxito para el día ${date}`,);
   sendmail.sendInfoEmail(email,'Your Booking',`Info booking`, html)
}

module.exports = {
  validPassword,
  generateHash,
  sendEmailBooking
}