const express = require('express')
const development = require('./knexfile').development
const knex = require('knex')(development)
const router = express.Router()

router.get('/', (req, res) => {
  knex('mana')
  .then(function(mana){
    res.render('mana', {mana: mana})
  })
})

router.get('/list/:id', (req,res)=>{
  knex('mana')
  // .join('cardInfo', 'mana.type', 'cardInfo.manaType')
  .then(function(mana){
    console.log(mana)
    res.render('list', {mana: mana})
  })
})

router.get('/cards/:id', (req,res)=>{
  knex('mana')
  .join('cardInfo', 'mana')
})

module.exports = router