const connectDb = require('./db')
const { ObjectID } = require("mongodb")
var uniqid = require('uniqid');
var fs = require('fs');
const utils = require('./utils')

module.exports = {
  createRealState: async (root, {input}) => {
    let db, state = []
      try{
        db = await connectDb()
        var dir = `server/resources/images`;  
        
        var i = 0;
        (input.photos).forEach(p => {
            // carga de fotos
            let base64 = p.url_foto;
            var extension = '.png';
            var toReplace = '';
            var cadena = base64.substr(1,40);
            
            if(cadena.indexOf('jpg') !== -1 || cadena.indexOf('jpeg') !== -1){
                extension = '.jpg';
                toReplace = /^data:image\/jpg;base64,/;
            }else if(cadena.indexOf('png') !== -1){
                extension = '.png';
                toReplace = /^data:image\/png;base64,/
            }

            base64 =  base64.replace(toReplace, "");
            // guarda la imagen en disco 
            var name_img = uniqid()+extension;
            fs.writeFile(`${dir}/${name_img}`,base64,'base64',(err_img)=>{
                if(err_img){
                  console.error(err_img)
                }
            })
            input.photos[i]['url_foto'] = name_img;
            i++;
        });
    
        state = await db.collection('real_states').insertOne(input)
        input._id = state.insertedId
      }catch(error){
        console.error(error)
      }
      return input
  },
  signUp: async (root, {input}) => {
    let db, state = []
    let status = false
    let message = ''
      try{
        db = await connectDb()
        let passwd = utils.generateHash(input.passwd);
        input.passwd = passwd
        state = await db.collection('user').insertOne(input)
        status = (state.insertedId !== null)
        message = (state.insertedId !== null) ? 'La información se guardo correctamente' : 'Problemas al guardar'
      }catch(error){
        console.error(error)
      }
      return {status, message}
  }
}