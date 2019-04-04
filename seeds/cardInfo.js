
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cardInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cardInfo').insert([
        { id: 1, name: 'Arrester`s Zeal', cost: '1', mana_id: 1, type: 'Instant' },
        { id: 2, name: 'Resolute Watchdog', cost: '1', mana_id: 1, type: 'Creature - Hound' },
        { id: 3, name: 'Sentinel`s Mark', cost: '2', mana_id: 1, type: 'enchantment -Aura' },
        { id: 4, name: 'Summary Judgment', cost: '2', mana_id: 1, type: 'instant' },
        { id: 5, name: 'Tenth District Veteran', cost: '3', mana_id: 1, type: 'Creature - Human Soldier' },
        { id: 6, name: 'Undreakable Formation', cost: '3', mana_id: 1, type: 'instant' },
        { id: 7, name: 'Syndicate Messenger', cost: '4', mana_id: 1, type: 'Creature - Bird' },
        { id: 8, name: 'Spirit of the Spires', cost: '4', mana_id: 1, type: 'Creature - Spirit' },
        { id: 9, name: 'knight of Sorrows', cost: '5', mana_id: 1, type: 'Creature - Human Knight' },
        { id: 10, name: 'Lumbering Battlement', cost: '5', mana_id: 1, type: 'Creature - Human Knight' },
        { id: 11, name: 'Watchful Giant', cost: '6', mana_id: 1, type: 'Creature -Giant Soldier' },
        { id: 12, name: 'Benthic Biomancer', cost: '1', mana_id: 5, type: 'Creature - Merfolk Wizard Mutant' },
        { id: 13, name: 'Pteramander', cost: '1', mana_id: 5, type: 'Creature - Salamander Drake' },
        { id: 14, name: 'Slimebind', cost: '2', mana_id: 5, type: 'Enchantment - Aura' },
        { id: 15, name: 'Shimmer of Passibiliety', cost: '2', mana_id: 5, type: 'Sorcery' },
        { id: 16, name: 'Senate Courier', cost: '3', mana_id: 5, type: 'Creature - Bird' },
        { id: 17, name: 'Verity Circle', cost: '3', mana_id: 5, type: 'Enchantment' },
        { id: 18, name: 'Skatewing Spy', cost: '4', mana_id: 5, type: 'Creature -Vedalken Rogue Mutant' },
        { id: 19, name: 'Sketter Eel', cost: '4', mana_id: 5, type: 'Creature - Fish Crab' },
        { id: 20, name: 'Precongnitive Perception', cost: '5', mana_id: 5, type: 'instant' },
        { id: 21, name: 'Mesmerizing Benthid', cost: '5', mana_id: 5, type: 'Creature - Octopus' },
        { id: 22, name: 'Swirling Torrent', cost: '6', mana_id: 5, type: 'Sorcery' },
        { id: 23, name: 'Mass Manipulation', cost: 'xx4', mana_id: 5, type: 'Sorcery' },
        { id: 24, name: 'Font of Agonies', cost: '1', mana_id: 4, type: 'Enchantment' },
        { id: 25, name: 'BladeBrand', cost: '2', mana_id: 4, type: 'instant' },
        { id: 26, name: 'Gutterbones', cost: '1', mana_id: 4, type: 'Creature - Seletion Warrior' },
        { id: 27, name: 'Orzhov Enforcer', cost: '2', mana_id: 4, type: 'Creature - Human Rogue' },
        { id: 28, name: 'Pestilent Spirit', cost: '3', mana_id: 4, type: 'Creature - sprirt' },
        { id: 29, name: 'Undercity`s Embrace', cost: '3', mana_id: 4, type: 'instant' },
        { id: 30, name: 'Vindictive Vampire', cost: '4', mana_id: 4, type: 'Creature - Vampire' },
        { id: 31, name: 'lll-Gotten Inheritance', cost: '4', mana_id: 4, type: 'Enchantment' },
        { id: 32, name: 'Clear the Stage', cost: '5', mana_id: 4, type: 'instant' },
        { id: 33, name: 'Orzhov Racketeers', cost: '5', mana_id: 4, type: 'Creature - Human Rogue' },
        { id: 34, name: 'The Haunt of Hightower', cost: '6', mana_id: 4, type: 'Legendary Creature - Vampire' },
        { id: 35, name: 'Debtors` Transport', cost: '6', mana_id: 4, type: 'Creature -Thrull' },
        { id: 36, name: 'Deface', cost: '1', mana_id: 2, type: 'Creature - Cat' },
        { id: 37, name: 'Feral Maaka', cost: '2', mana_id: 2, type: 'Creature - Cat' },
        { id: 38, name: 'Gravel-Hide Godlin', cost: '2', mana_id: 2, type: 'Creature -Goblin Shaman' },
        { id: 39, name: 'Spear Spewer', cost: '1', mana_id: 2, type: 'Creature - Goblin Warrior' },
        { id: 40, name: 'Skewer the Crities', cost: '3', mana_id: 2, type: 'Sorcery' }
      ]);
    });
};
