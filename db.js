const config = require('./knexfile').development
const db = require('knex')(config)


function randomGenerator(){
    item_id = 'cardInfo.id'
    item = item_id[Math.floor(Math.random()*item_id.length)];
    newItem = [item, item['cardInfo.mana_id'], item['cardInfo.costs']]
    console.log(newItem)
    }


module.exports = {
  randomGenerator
}