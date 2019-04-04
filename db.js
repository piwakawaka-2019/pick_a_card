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

function randomGenerator(mana_id, type, cost){
    return db('cardInfo')
    .from('cardInfo')
    .where('cardInfo.mana_id', mana_id)
    .where('cardInfo.cost', cost)
    .rand('cardInfo.type', type);
}

module.exports = {
  getAll,
  randomGenerator
}