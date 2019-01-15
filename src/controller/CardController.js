const mongoose = require('mongoose');

const Card = mongoose.model('Card');

module.exports = {
    async index (req,res) {
        const {page = 1} = req.query;
        const cards = await Card.paginate({/*WHERE*/},{ page, limit: 10});

        return res.json(cards);
    },

    async create (req, res) {
        const card = await Card.create(req.body);    
        
        return res.json(card);
    }
}