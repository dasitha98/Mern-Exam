const Products = require('../model/product.model');

const createproduct = async(req,res) =>{
    if(req.body){
        const product = new Products(req.body);
        await product.save()
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}


const getallproduct = async (req,res) => {
    await Products.find({})
    .then(data => {
        res.status(200).send({data: data});
    })
    .catch(error => {
        res.status(500).send({error: error.message});
    });
}



const deleteproduct = async(req,res) => {
    await Products.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted'))
    .catch(err => res.status(400).json('error: '+err));
}



module.exports = {
    createproduct,
    getallproduct,
    deleteproduct
}
