
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mana').del()
    .then(function () {
      // Inserts seed entries
      return knex('mana').insert([
        {id: 1, type: 'White Mana',cost: '7-8', url:'/public/img/White_Mana.png'},
        {id: 2, type: 'Red Mana',  cost: '5-6', url:'/public/img/Red_Mana.png'},
        {id: 3, type: 'Green Mana',cost: '3-4', url:'/public/img/Green_Mana.png'},
        {id: 4, type: 'Black Mana',cost: '1-2', url:'/public/img/Black_Mana.png'},
        {id: 5, type: 'Blue Mana', cost: '1-2', url:'git /public/img/Blue_Mana.png'},
      ]);
    });
};
