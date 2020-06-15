
const connectDb = require('./db')
const { ObjectID } = require("mongodb")

module.exports = {
  Query: {
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
    }
 }
}