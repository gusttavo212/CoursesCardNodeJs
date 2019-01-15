const express = require('express');
const routes = express.Router();

const CardContoller = require('../controller/CardController');

routes.get('/cards', CardContoller.index);

routes.post('/cards',CardContoller.create);

module.exports = routes