const config = require('./knexfile').development
const database = require('knex')(config)

function getAll (db = database) {
  return db('cardInfo').select()
}

// function wombleChars (wombleID, db = database) {
//   return db('wombles')
//      .join(`characteristics`, 'characteristic_id', '=', 'characteristics.id')
//      .where({'wombles.id': wombleID}).select();
    
// }

// function wombleAssignments (db = database) {
//   return db('wombles')
//      .join(`rubbish`, 'rubbish_id', '=', 'rubbish.id')
//      .select('*', 'wombles.id AS wombles_id', 'rubbish.id AS rubbish_id', 'wombles.name AS wombles_name', 'rubbish.name AS rubbish_name');

// }

// function getCharacteristics (db = database) {
//   return db('characteristics')
//     .select()
// }

// function getRubbish (db = database) {
//   return db('rubbish')
//     .select()
// }

// function addWomble(newWomble,db = database) {
//   return db('wombles')
//     .insert(newWomble)
// }

// function close (db = database) {
//   db.destroy()
// }

// function deleteWomble (wombleID, db = database) {
//   return db('wombles')
//     .where({id:wombleID})
//     .del()
// }

module.exports = {
  getAll,
//   close,
//   wombleChars,
//   wombleAssignments,
//   getCharacteristics,
//   getRubbish,
//   addWomble,
//   deleteWomble
}
