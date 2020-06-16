const connectDb = require('./db')
const { ObjectID } = require('mongodb')
const utils = require('./utils')

module.exports = {
  getRealStates: async() => {
    let db, states = []
    try{
      db = await connectDb()
      states = await db.collection('real_states').find().toArray()
    }catch(error){
      console.error(error)
    }
    return states
  },
  getRealState: async (root, { id }) => {
    let db, state = []
    try{
      db = await connectDb()
      state = await db.collection('real_states').findOne({_id: ObjectID(id)})
    }catch(error){
      console.error(error)
    }
    return state
  },
  getOptions: async () => {
    let db, options = []
    try{
      db = await connectDb()
      options = await db.collection('option').find().toArray()
    }catch(error){
      console.error(error)
    }
    return options
  }, 
  signIn: async(root, { email,passwd }) => {
    let db, user = []
    let us = {}
    try{
      db = await connectDb()
      user = await db.collection('user').findOne({email})
      if(user.passwd !== null && utils.validPassword(passwd,user.passwd)){
        us = {email,name:user.name}
      }
    }catch(error){
      console.error(error)
    }
    return us
  }
}