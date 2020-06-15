
const connectDb = require('./db')

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
    getRealState: (root, args) => {
      const state = states.filter(x => x._id === args.id)
      return state.pop()
    }
 }
}