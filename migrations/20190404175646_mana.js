exports.up = function(knex, Promise) {
    return knex.schema.createTable('mana', table => {
        table.increments('id').primary
        table.string('type')
        table.string('cost')
        table.string('url') 
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('mana')
  };
  