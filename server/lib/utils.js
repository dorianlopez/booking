var bcrypt = require('bcrypt-nodejs');

function generateHash(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validPassword(pwd_param,pwd_db){
  return bcrypt.compareSync(pwd_param, pwd_db);
}

module.exports = {
  validPassword,
  generateHash
}