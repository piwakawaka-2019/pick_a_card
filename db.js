const config = require('./knexfile').development
const db = require('knex')(config)


function getAll() {
  return db('cardInfo').select()
}
// console.log(cardInfo)
// function close() {
//   db.destroy()
// }


// function showById(id) {
//   return db('cardInfo').join('mana', 'cardInfo.mana.id', '=', 'mana.id')
//     .where('cardInfo.id', '=', id).select()
// }

// function getAllManaTypes(manaType) {
//   return db('cardInfo')
    
// }

function randomGenerator(manaType, cost){
    return db('cardInfo')
    .from('cardInfo')
    .where()
    .rand();

}

module.exports = {
  getAll,
  randomGenerator
}