
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();

        tbl
            .integer('car_id')
            .references('id')
            .inTable('cars')
            .notNullable();
        
        tbl.integer('Price');

        tbl.date('Date_Sold');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
