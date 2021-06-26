const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


const productapi = require('./api/product.api');
const categoryapi = require('./api/category.api');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 5000;
const url = process.env.MONGO_DB;

mongoose.connect(url,
    {useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


mongoose.connection.once('open', () => {
    console.log('mongodb successfull');
})


app.use('/product', productapi());
app.use('/category', categoryapi());


module.exports = app;

app.listen(port, () =>{
    console.log(`server successfull ${port}`);
})