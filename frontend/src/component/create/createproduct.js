import React, {Component} from 'react';
import axios from 'axios';

const initialstate={
    code: '',
    name: '',
    amount: 0,
    size: 0
}

class CreateProduct extends Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = initialstate;
    }



    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        let product={
            code: this.state.code,
            name: this.state.name,
            amount: this.state.amount,
            size: this.state.size
        };

        console.log(product);

        axios.post('http://localhost:5000/product/insertproduct', product)
        .then(response => {
            alert('inserted');
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })
    }



    render(){
        return(
            <div className="container">
            <h1>Create Product</h1>
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label htmlFor="subjectName" className="form-label">Code</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="code" 
                  name="code" 
                  value={this.state.code}
                  onChange={this.onChange}
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="subjectName" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange} 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subjectName" className="form-label">Amount</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="amount" 
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange} 
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="subjectName" className="form-label">Size</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="size" 
                  name="size"
                  value={this.state.size}
                  onChange={this.onChange} 
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
    };
};

export default CreateProduct;