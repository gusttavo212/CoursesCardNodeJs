const express = require('express');
const routes = express.Router();

const CardContoller = require('../models/card');

routes.get('/cards', CardContoller.index)

module.exports = routes