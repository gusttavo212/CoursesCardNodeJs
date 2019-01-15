const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
CardSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Card', CardSchema)

//mongoose.model("Card", CardSchema)