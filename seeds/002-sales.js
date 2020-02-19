
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      const sales = [
        {
          id: 1,
          car_id: 1,
          Price: 65000,
          Date_Sold: 20200218
        }
      ]

      return knex('sales').insert(sales);
    });
};
