const connectDb = require('./db')
const { ObjectID } = require("mongodb")

module.exports = {
  createRealState: async (root, {input}) => {
    let db, state = []
      try{
        db = await connectDb()
        state = await db.collection('real_states').insertOne(input)
        input._id = state.insertedId
      }catch(error){
        console.error(error)
      }
      return input
  }
}