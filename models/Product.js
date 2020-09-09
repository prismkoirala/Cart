const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('products', ProductSchema);
