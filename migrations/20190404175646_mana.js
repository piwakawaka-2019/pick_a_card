exports.up = function(knex, Promise) {
    return knex.schema.createTable('mana', table => {
        table.increments('id').primary
        table.string('type')
        table.string('cost') 
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('mana')
  };
  