const express = require('express')
const development = require('./knexfile').development
const knex = require('knex')(development)
const router = express.Router()
const db = require('./db')

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
    console.log(mana)
    res.render('cardProfile', {mana: mana})
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