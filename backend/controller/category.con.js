const Category = require('../model/category.model');

const createcategory = async (req,res) => {
    if(req.body){
        const category = new Category(req.body);
        await category.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}


const getallcategory = async (req,res) => {
    await Category.find({})
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    })
}


const getproductforcategory = async (req,res) => {
    if(req.params && req.params.id){
        await Category.findById(req.params.id)
        .populate('products', 'code name amount size')
        .then(data => {
            res.status(200).send({products: data.products});
        })
        .catch(error => {
            res.status(500).send({error : error.message});
        })
    }
}


const calculation = async(req,res) => {
    if(req.params && req.params.id){
        const category = await Category.findById(req.params.id)
        .populate('products', 'amount')
        let total = 0;

        if(category.products.length > 0){
            category.products.map((pr) => {
                total += pr.amount;
            });
            total += 500;
        }
        res.status(200).send({total: total});
    }
}



module.exports = {
    createcategory,
    getallcategory,
    getproductforcategory,
    calculation
}