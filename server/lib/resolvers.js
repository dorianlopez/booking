
const states =  [
  {
    _id: 'xxxx',
    title: "Prueba",
    price: "20000",
    photos: [],
    options: [],
    date_disp: []
  },
  {
    _id: 'xxxxy',
    title: "Prueba",
    price: "20000",
    photos: [],
    options: [],
    date_disp: []
  }
]

module.exports = {
  Query: {
    getRealStates: () => {
      return states
    }
 }
}