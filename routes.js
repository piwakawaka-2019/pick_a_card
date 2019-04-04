const express = require('express')
const development = require('./knexfile').development
const knex = require('knex')(development)
const router = express.Router()

router.get('/', (req, res) => {
  knex('mana')
    .then(function (mana) {
      res.render('mana', { mana: mana })
    })
})

router.get('/mana/:id/costs', (req, res) => {
  let id = req.params.id

  let costs = [1, 2, 3, 4, 5, 6]

  res.render('costs', { costs: costs, mana_id: id })
})

router.get('/mana/:id/cards/withcost/:cost', (req, res) => {
  let id = req.params.id
  let cost = req.params.cost
  knex('cardInfo')
    .where('cardInfo.mana_id', id)
    .where('cardInfo.cost', cost)
    .then(function (cards) {
      console.log(cards)
      res.render('cards', { cards: cards })
    })
})


router.get('/cardProfile/:id', (req,res)=>{
  knex('mana')
  .then(function(mana){
    // console.log(mana)
    res.render('cardProfile', {mana: mana})
  })

router.get('/card')

module.exports = router