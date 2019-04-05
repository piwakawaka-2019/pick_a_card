const config = require('./knexfile').development
const database= require('knex')(config)


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

function randomGenerator(db = database){
    return db('cardInfo').then(cards => {
        let randomIndex = Math.floor(Math.random() * cards.length)
        return cards[randomIndex]
    })

   
}
module.exports = {
  getAll,
  addCards,
  deleteCard,
  randomGenerator
}



