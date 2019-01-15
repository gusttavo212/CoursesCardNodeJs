const hapi = require('hapi');
const mongoose = require('mongoose');
const Card = require('./src/models/card')

mongoose.connect('mongodb://gadsden:250433@localhost/cards?authSource=admin&w=1',
 { useNewUrlParser: true })

 const app = new hapi.Server({
     port: 5000
 });



async function main() {
    
    app.route({
        method: 'GET',
        path: '/',
        handler: (req, reply) =>{
            return Card.find()
        }
      }),
      app.route({
        method: 'POST',
        path: '/',
        handler: (req, reply) =>{
            const {name, price, description} = req.payload;
            const card = new Card({
                name,
                price,
                description
            })

            return card.save();
        }
      });

    await app.start();
    console.log('Servidor rodando na porta'+ app.info.port)
}

main()



