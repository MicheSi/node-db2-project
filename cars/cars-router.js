const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

// get all cars
router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

// get car by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    getById(id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

// add new car
router.post('/', (req, res) => {
    const carData = req.body;

    db('cars').insert(carData)
    .then(ids => {
        return getById(ids[0]).then(newCar => {
            res.status(201).json(newCar)
        })
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

module.exports = router;

function getById(id) {
    return db('cars')
        .where({id})
        .first();
}