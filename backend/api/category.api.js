const express = require('express');
const router = express.Router();
const controller = require('../controller/category.con');


module.exports = function() {
    router.post('/insertcategory', controller.createcategory);
    router.get('/getallcategory', controller.getallcategory);
    router.get('/getproductcategory/:id', controller.getproductforcategory);
    router.get('/calculation/:id', controller.calculation);


    return router;
}