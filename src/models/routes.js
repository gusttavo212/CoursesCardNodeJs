const express = require('express');
const routes = express.Router();

const CardContoller = require('../controller/CardController');

routes.get('/cards', CardContoller.index);
routes.get('/cards/:id', CardContoller.show);
routes.post('/cards',CardContoller.create);
routes.put('/cards/:id', CardContoller.update);
routes.delete('/cards/:id', CardContoller.destroy);

module.exports = routes