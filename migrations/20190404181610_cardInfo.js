exports.up = function (knex, Promise) {
  return knex.schema.createTable('cardInfo', table => {
    table.increments('id').primary
    table.string('name')
    table.string('cost')
    table.string('type')
    table.integer('mana_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cardInfo')
};
