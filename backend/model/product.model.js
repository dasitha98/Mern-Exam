const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    code: {type: String, required:true},
    name: {type: String, required:true},
    amount: {type: Number, required:true},
    size: {type: Number, required:true},
    categories: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'categories'}]
});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;