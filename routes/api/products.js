const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');

// @route POST api/products/test
// @desc   Tests products route
// @access   Public
router.post('/', async (req, res) => {
    const { name, price, avatar } = req.body;

    try {
        const products = new Product({
            name,
            price,
            avatar,
        });

        const product = await products.save();

        console.log(product);

        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.send('Server Error');
    }
});

module.exports = router;
