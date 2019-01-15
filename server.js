const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //Faz require de um diretorio
const cors = require('cors') //Tornar a API PUBLICA

//Iniciando o App
const app = express();
app.listen(3001);
app.use(express.json());
//Tornar a api publica
app.use(cors());

//Conectar ao mongodb
mongoose.connect('mongodb://gadsden:250433@localhost/cardapi?authSource=admin&w=1',
 { useNewUrlParser: true })

 //Routes
 app.use('/courses', require('./src/models/routes'))


