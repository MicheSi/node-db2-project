
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();

        tbl
            .integer('car_id')
            .unsigned()
            .references('id')
            .inTable('cars')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        
        tbl.integer('Price');

        tbl.date('Date_Sold');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
