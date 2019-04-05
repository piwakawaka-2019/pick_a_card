
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cardInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cardInfo').insert([
        { id: 1, name: 'Arrester`s Zeal', cost: '1', mana_id: 1, type: 'Instant' ,url:'/img/cards/Arrester`s Zeal.png'},
        { id: 2, name: 'Resolute Watchdog', cost: '1', mana_id: 1, type: 'Creature - Hound' ,url:'/img/cards/Resolute Watchdog.png'},
        { id: 3, name: 'Sentinel`s Mark', cost: '2', mana_id: 1, type: 'enchantment -Aura' ,url:'/img/cards/Sentinel`s Mark.png'},
        { id: 4, name: 'Summary Judgment', cost: '2', mana_id: 1, type: 'instant',url:'/img/cards/Summary Judgment.png'},
        { id: 5, name: 'Tenth District Veteran', cost: '3', mana_id: 1, type: 'Creature - Human Soldier',url:'/img/cards/Tenth District Veteran.png'},
        { id: 6, name: 'Undreakable Formation', cost: '3', mana_id: 1, type: 'instant',url:'/img/cards/Undreakable Formation.png'},
        { id: 7, name: 'Syndicate Messenger', cost: '4', mana_id: 1, type: 'Creature - Bird',url:'/img/cards/Syndicate Messenger.png'},
        { id: 8, name: 'Spirit of the Spires', cost: '4', mana_id: 1, type: 'Creature - Spirit' ,url:'/img/cards/Spirit of the Spires.png'}, ,
        { id: 9, name: 'knight of Sorrows', cost: '5', mana_id: 1, type: 'Creature - Human Knight',url:'/img/cards/knight of Sorrows.png'}, 
        { id: 10, name: 'Lumbering Battlement', cost: '5', mana_id: 1, type: 'Creature - Human Knight',url:'/img/cards/Lambering Battlement.png'},
        { id: 11, name: 'Watchful Giant', cost: '6', mana_id: 1, type: 'Creature -Giant Soldier' ,url:'/img/cards/Watchful Giant.png'},
        { id: 12, name: 'Benthic Biomancer', cost: '1', mana_id: 5, type: 'Creature - Merfolk Wizard Mutant',url:'/img/cards/Benthic Biomancer.png'},
        { id: 13, name: 'Pteramander', cost: '1', mana_id: 5, type: 'Creature - Salamander Drake',url:'/img/cards/Pteramander.png'},
        { id: 14, name: 'Slimebind', cost: '2', mana_id: 5, type: 'Enchantment - Aura' ,url:'/img/cards/Slimebind.png'},
        { id: 15, name: 'Shimmer of Passibiliety', cost: '2', mana_id: 5, type: 'Sorcery' ,url:'/img/cards/Shimmer of Passibiliety.png'},
        { id: 16, name: 'Senate Courier', cost: '3', mana_id: 5, type: 'Creature - Bird',url:'/img/cards/Senate Courier.png'},
        { id: 17, name: 'Verity Circle', cost: '3', mana_id: 5, type: 'Enchantment' ,url:'/img/cards/Verity Circle.png'},
        { id: 18, name: 'Skatewing Spy', cost: '4', mana_id: 5, type: 'Creature -Vedalken Rogue Mutant' ,url:'/img/cards/Skatewing.png'},
        { id: 19, name: 'Sketter Eel', cost: '4', mana_id: 5, type: 'Creature - Fish Crab' ,url:'/img/cards/Skatewing Spy.png'},
        { id: 20, name: 'Precongnitive Perception', cost: '5', mana_id: 5, type: 'instant' ,url:'/img/cards/Precongnitive.png'},
        { id: 21, name: 'Mesmerizing Benthid', cost: '5', mana_id: 5, type: 'Creature - Octopus' ,url:'/img/cards/Mesmerizing Benthid.png'},
        { id: 22, name: 'Swirling Torrent', cost: '6', mana_id: 5, type: 'Sorcery' ,url:'/img/cards/Sworling Torrent.png'},
        { id: 23, name: 'Mass Manipulation', cost: 'xx4', mana_id: 5, type: 'Sorcery' ,url:'/img/cards/Mass Manipulation.png'},
        { id: 24, name: 'Font of Agonies', cost: '1', mana_id: 4, type: 'Enchantment' ,url:'/img/cards/Font of Agonies.png'},
        { id: 25, name: 'BladeBrand', cost: '2', mana_id: 4, type: 'instant' ,url:'/img/cards/BladeBrand.png'},
        { id: 26, name: 'Gutterbones', cost: '1', mana_id: 4, type: 'Creature - Seletion Warrior' ,url:'/img/cards/Gutterbones.png'},
        { id: 27, name: 'Orzhov Enforcer', cost: '2', mana_id: 4, type: 'Creature - Human Rogue' ,url:'/img/cards/Orzhov Enforcer.png'},
        { id: 28, name: 'Pestilent Spirit', cost: '3', mana_id: 4, type: 'Creature - sprirt' ,url:'/img/cards/Pestilent Spirit.png'},
        { id: 29, name: 'Undercity`s Embrace', cost: '3', mana_id: 4, type: 'instant' ,url:'/img/cards/Undercity`s Embarce.png'},
        { id: 30, name: 'Vindictive Vampire', cost: '4', mana_id: 4, type: 'Creature - Vampire' ,url:'/img/cards/Vindictive Vampire.png'},
        { id: 31, name: 'lll-Gotten Inheritance', cost: '4', mana_id: 4, type: 'Enchantment' ,url:'/img/cards/lll-Gotten Inheritance.png'},
        { id: 32, name: 'Clear the Stage', cost: '5', mana_id: 4, type: 'instant' ,url:'/img/cards/Clear the Stage.png'},
        { id: 33, name: 'Orzhov Racketeers', cost: '5', mana_id: 4, type: 'Creature - Human Rogue' ,url:'/img/cards/The Haunt of Hightower.png'},
        { id: 34, name: 'The Haunt of Hightower', cost: '6', mana_id: 4, type: 'Legendary Creature - Vampire' ,url:'/img/cards/The Haunt of Hightower.png'},
        { id: 35, name: 'Debtors` Transport', cost: '6', mana_id: 4, type: 'Creature -Thrull' ,url:'/img/cards/Debtors Transport.png'},
        { id: 36, name: 'Deface', cost: '1', mana_id: 2, type: 'Creature - Cat' ,url:'/img/cards/Deface.png'},
        { id: 37, name: 'Feral Maaka', cost: '2', mana_id: 2, type: 'Creature - Cat' ,url:'/img/cards/Feral Maaka.png'},
        { id: 38, name: 'Gravel-Hide Godlin', cost: '2', mana_id: 2, type: 'Creature -Goblin Shaman' ,url:'/img/cards/Gravel-Hide Godlin.png'},
        { id: 39, name: 'Spear Spewer', cost: '1', mana_id: 2, type: 'Creature - Goblin Warrior' ,url:'/img/cards/Spear Spewer.png'},
        { id: 40, name: 'Skewer the Crities', cost: '3', mana_id: 2, type: 'Sorcery' ,url:'/img/cards/Skewer the Crities.png'}
      ]);
    });
};
