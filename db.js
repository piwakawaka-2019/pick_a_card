const config = require('./knexfile').development
<<<<<<< HEAD
const database = require('knex')(config)

function getAll (db = database) {
  return db('cardInfo').select()
}

function addCards(newCard,db = database) {
  return db('cardInfo')
    .insert(newCard)
    .then()
}

function deleteCard (id, db = database) {
  console.log(id)
  return db('cardInfo')
    .where('id',id)
    .delete()
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

// function close (db = database) {
//   db.destroy()
// }


module.exports = {
  getAll,
//   close,
//   wombleChars,
//   wombleAssignments,
//   getCharacteristics,
//   getRubbish,
  addCards,
  deleteCard
}
=======
const db = require('knex')(config)


function randomGenerator(){
    return db('cardInfo').then(cards => {
        let randomIndex = Math.floor(Math.random() * cards.length)
        return cards[randomIndex]
    })

    // item_id = 'cardInfo'.id
    // item = item_id[Math.floor(Math.random()*'cardInfo'.length)];
}

module.exports = {
  randomGenerator
}
>>>>>>> a7ea2a8c41a3d38823aca5668fd9a854e1b22563
