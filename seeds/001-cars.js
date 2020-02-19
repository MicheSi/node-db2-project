
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      const cars = [
        {
          VIN: '100101CC',
          Make: 'Chevrolet',
          Model: 'Corvette',
          Mileage: 10000,
          Automatic: true,
          Title: 'Clean'
        },
        {
          VIN: 'GHK10928ZY',
          Make: 'Acura',
          Model: 'NSX',
          Mileage: 500,
          Automatic: true,
          Title: 'Clean'
        },
        {
          VIN: 'ZZ12345ABC',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: 150000,
          Automatic: false,
          Title: 'Salvaged'
        },
      ]

      return knex('cars').insert(cars);
    });
};
