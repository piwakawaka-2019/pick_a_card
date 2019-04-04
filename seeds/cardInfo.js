
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cardInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cardInfo').insert([
        {id: 1, name: 'Arrester`s Zeal', cost: '1', manaType: 'White', type: 'Instant'},
        {id: 2, name: 'Resolute Watchdog', cost: '1', manaType: 'White', type: 'Creature - Hound'},
        {id: 3, name: 'Sentinel`s Mark', cost: '2', manaType: 'White', type:'enchantment -Aura'},
        {id: 4, name: 'Summary Judgment', cost: '2', manaType: 'White', type: 'instant'},
        {id: 5, name: 'Tenth District Veteran', cost: '3', manaType: 'White', type: 'Creature - Human Soldier'},
        {id: 6, name: 'Undreakable Formation', cost: '3', manaType: 'White', type: 'instant'},
        {id: 7, name: 'Syndicate Messenger', cost: '4', manaType: 'white', type: 'Creature - Bird'},
        {id: 8, name: 'Spirit of the Spires', cost: '4', manaType: 'White', type: 'Creature - Spirit'},
        {id: 9, name: 'knight of Sorrows', cost: '5', manaType: 'White', type: 'Creature - Human Knight'},
        {id: 10, name: 'Lumbering Battlement', cost: '5', manaType: 'White', type: 'Creature - Human Knight'},
        {id: 11, name: 'Watchful Giant', cost: '6', manaType: 'White', type: 'Creature -Giant Soldier'},
        {id: 12, name: 'Benthic Biomancer', cost: '1', manaType: '', type: ''},
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
