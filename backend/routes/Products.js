const express = require('express');
const router = express.Router();
const {
    allproducts,
    PostProduct,
    oneproduct,
    delone
} = require('../controllers/products')
router.route('/').get(allproducts).post(PostProduct)
router.route('/:id').get(oneproduct).delete(delone)







module.exports = router