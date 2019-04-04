const express = require('express')
const development = require('./knexfile').development
const knex = require('knex')(development)
const router = express.Router()
const db = require('./db')

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

router.get('/cards/:id', (req, res) => {
  let id = req.params.id

  knex('cardInfo')
    .where('id', id)
    .first()
    .then(function (card) {
      console.log(card)
      res.render('cardProfile', { card: card })
    })
})


module.exports = router






router.get('/view', (req, res) => {

  db.getAll().then(wombles => {
      console.log(wombles)
      res.render('partials/allWombles', {
        wombles: wombles
      })
    })
    .catch(error => {
      console.error('err', error)
      res.send('Somethings Wrong')
    })
})

router.get('/view/:id', (req, res) => {
  let id = req.params.id;
  //spectifially get the womble obj
  db.showById(id)
    .then(wombles => {
      console.log(wombles)
      res.render('partials/individualWomble', wombles[0])
    })
    .catch(error => {
      console.log('err', error);
      res.send('you fucked up kid')
    })
  //pass that into the hbs
})

router.get('/assignments', (req, res) => {

  db.getAll_rubbish().then(wombles => {
      console.log(wombles)
      res.render('partials/allAssignments', {
        wombles: wombles
      })
    })
    .catch(error => {
      console.error('err', error)
      res.send('Somethings Wrong')
    })
})

router.get('/add_new', (req, res) => {

})

router.post('/add_new', (req, res) => {
  
})

module.exports = router;