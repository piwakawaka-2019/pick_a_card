
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cardInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cardInfo').insert([
        {id: 1, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 2, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 3, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 4, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 5, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 6, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 7, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 8, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 9, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 10, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 11, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 12, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 13, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 14, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 15, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 16, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 17, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 18, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 19, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 20, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 21, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 22, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 23, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 24, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 25, name: 'rowValue2', cost: '', manaType: '', type: ''},
        {id: 26, name: 'rowValue3', cost: '', manaType: '', type: ''},
        {id: 27, name: 'rowValue1', cost: '', manaType: '', type: ''},
        {id: 28, name: 'rowValue2', cost: '', manaType: '', type: ''},
      ]);
    });
};
