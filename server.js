const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //Faz require de um diretorio
const cors = require('cors') //Tornar a API PUBLICA

//Iniciando o App
const app = express();

app.use(express.json());
//Tornar a api publica
app.use(cors());

//Conect MongoDB
mongoose.connect('mongodb://gadsden:250433@localhost/cards?authSource=admin&w=1',
 { useNewUrlParser: true })

 requireDir('./src/models')//require do model


 /* FAZER O PRIMEIRO TEST NO BANCO E CRIAR O BANCO
 const Card = mongoose.model('Card');
 app.get("/", (req, res) => {
    Card.create({
        name: 'React',
        price: 20,
        description: 'Curso de React Native'
    })

    return res.send("Hello World")
 })*/
 app.listen(3001);

 //Routes
 app.use('/courses', require('./src/models/routes'))
 console.log('Servidor rodando na porta 3001')


