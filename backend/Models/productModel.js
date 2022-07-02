const mongoose = require('mongoose')

const productModel = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
   
  });
  module.exports = mongoose.model('products', productModel);