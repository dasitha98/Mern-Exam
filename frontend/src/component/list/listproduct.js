import React, {Component} from 'react';
import axios from 'axios';

const initialstate={
    product: [],
    total: ''
}
class ListProduct extends Component{
    constructor(props){
        super(props);
        this.state = initialstate;
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/category/getproductcategory/${this.props.match.params.id}`)
        .then(response =>{
            console.log(response.data.product);
            this.setState({product: response.data.products})
            console.log(product);
        })

        axios.get(`http://localhost:5000/category/calculation/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data.total);
            this.setState({total: response.data.total})
        })
    }

    render(){
        return(
            <div className="container">
            <h1>Products list</h1>
            <h3>Delivery Charges: 500</h3>
            <h4>Total Amount with Delivery Charges: {this.state.total}</h4>
            {this.state.product.length > 0 && this.state.product.map((item, index) => (
            <div  className="card mb-3">
                <div className="p-3">
                <h4>Code: {item.code}</h4>
                <h4>Name: {item.name}</h4>
                <h4>Amount: {item.amount}</h4>
                <h4>Size: {item.size}</h4>
                </div>
            </div>
            ))}
        </div>
        );
    };
};

export default ListProduct;