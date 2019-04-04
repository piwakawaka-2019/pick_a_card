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
  // .join('cardInfo', 'mana')
  .then(function(mana){
    console.log(mana)
    res.render('cards',{mana: mana})
  })
})

router.get('/cardProfile/:id', (req,res)=>{
  knex('mana')
  .then(function(mana){
    // console.log(mana)
    res.render('cardProfile', {mana: mana})
  })
})

router.get('/card')

module.exports = router