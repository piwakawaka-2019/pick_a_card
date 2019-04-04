
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mana').del()
    .then(function () {
      // Inserts seed entries
      return knex('mana').insert([

        {id: 1, type: 'White Mana',cost: '7-8'url:},
        {id: 2, type: 'Red Mana', cost: '5-6'},
        {id: 3, type: 'Green Mana', cost: '3-4'},
        {id: 4, type: 'Black Mana', cost: '1-2'}

      ]);
    });
};
