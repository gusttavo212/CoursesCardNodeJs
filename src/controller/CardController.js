const mongoose = require('mongoose');

const Card = require('../models/card')

module.exports = {
    async index (req,res) {
        const {page = 1} = req.query;
        const cards = await Card.paginate({/*WHERE*/},{ page, limit: 10});

        return res.json(cards);
    },
    async show(req, res) {
        const card = await Card.findById(req.params.id);
        return res.json(card)        
    },
    async create (req, res) {
        const card = await Card.create(req.body);    
        
        return res.json(card);
    },
    async update (req, res) {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(card);
    },
    async destroy(req, res){
        await Card.findByIdAndRemove(req.params.id);

        return res.send();
    }
}