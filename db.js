const config = require('./knexfile').development
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