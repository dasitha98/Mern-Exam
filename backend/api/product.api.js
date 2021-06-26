const express = require('express');
const router = express.Router();
const controller = require('../controller/product.con');

module.exports = function() {
    router.post('/insertproduct', controller.createproduct);
    router.get('/getallproduct', controller.getallproduct);
    router.delete('/deleteproduct/:id', controller.deleteproduct);


    return router;
}