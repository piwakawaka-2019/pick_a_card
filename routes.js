const express = require('express')
const development = require('./knexfile').development
const knex = require('knex')(development)
const router = express.Router()

const dbFunctions = require('./db')

router.get('/', (req, res) => {
  knex('mana')
    .then(function (mana) {
      res.render('mana', { mana: mana })
    })
    .catch(error => {
      console.error('something went wrong: ' + error.message);
      res.send('Something went wrong: ' + error.message);
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
    .catch(error => {
      console.error('something went wrong: ' + error.message);
      res.send('Something went wrong: ' + error.message);
    })
})


router.get('/cards/:id', (req,res)=>{
  let id = req.params.id

  knex('cardInfo')
  .where('cardInfo.id', id)
  .first()
  .then(function(card){
    console.log(card)
    res.render('cardProfile', {card: card})
  })
  .catch(error => {
    console.error('something went wrong: ' + error.message);
    res.send('Something went wrong: ' + error.message);
  })
})

router.get("/addCard", (req,res) => {
  knex('cardInfo')
  .then(function(cards){
    // console.log(mana)
    res.render('cardAdd', {cards: cards})
  })
  .catch(error => {
    console.error('something went wrong: ' + error.message);
    res.send('Something went wrong: ' + error.message);
  })
})

router.get("/cards", (req,res) => {
  knex('cardInfo')
  .then(function(cards){
    res.render('cards',  {cards: cards})
  })
  .catch(error => {
    console.error('something went wrong: ' + error.message);
    res.send('Something went wrong: ' + error.message);
  })
})

router.get("/deleteCard/:id", (req,res) => {
  let id = req.params.id
  dbFunctions.deleteCard(id)
  .then(function(cards) {
    res.redirect('/cards');
  })
  .catch(error => {
    console.error('something went wrong: ' + error.message);
    res.send('Something went wrong: ' + error.message);
  })
})

router.post("/cards", (req,res) => {
  knex("cardInfo")
  .then(function(cards) {
    let newCard = req.body
    dbFunctions.addCards(newCard);

    res.redirect('cards');
  })
  .catch(error => {
    console.error('something went wrong: ' + error.message);
    res.send('Something went wrong: ' + error.message);
  })
})

router.get('/cards/:id', (res,req) => {
  knex('cardInfo')
  .then(function(cards) {
    
    res.render('cardAdd', {cards: cards})
  })
  .catch(error => {
    console.error('something went wrong: ' + error.message);
    res.send('Something went wrong: ' + error.message);
  })
})


module.exports = router