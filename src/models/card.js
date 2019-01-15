const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Float32Array,
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

CardSchema.plugin(mongoose);
mongoose.model("Card", ProductSchema)