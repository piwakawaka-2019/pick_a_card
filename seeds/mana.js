
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mana').del()
    .then(function () {
      // Inserts seed entries
      return knex('mana').insert([
        {id: 1, type: 'White Mana',cost: '7-8',url:'./img/White_Mana.png'},
        {id: 2, type: 'Red Mana',cost: '5-6', url:'img/Red_Mana.png'},
        {id: 3, type: 'Green Mana',cost: '3-4',url:'img/Green_Mana.png'},
        {id: 4, type: 'Black Mana',cost: '1-2', url: 'img/Black_Mana.png'},
        {id: 5, type: 'Blue Mana',cost: '1-2', url: './img/Blue_Mana.png'},
      ]);
    });
};
