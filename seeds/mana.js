
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mana').del()
    .then(function () {
      // Inserts seed entries
      return knex('mana').insert([
        {id: 1, type: 'rowValue1', cost: '7-8'},
        {id: 2, type: 'rowValue2', cost: '5-6'},
        {id: 3, type: 'rowValue3', cost: '3-4'},
        {id: 4, type: 'rowValue3', cost: '1-2'}
      ]);
    });
};
