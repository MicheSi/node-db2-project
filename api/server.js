const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h2>Node DB2 Project</h2>')
})

module.exports = server;