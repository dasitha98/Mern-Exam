import axios from 'axios';
import React, {Component} from 'react';
import Select from 'react-select';

const initialstate={
  name: '',
  description: '',
  options: [],
  selectedproducts: [],
  products: []
}
class CreateCategory extends Component{
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onproductselected = this.onproductselected.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = initialstate;
  }


  componentDidMount(){
    axios.get('http://localhost:5000/product/getallproduct')
    .then(response => {
      this.setState({products: response.data.data}, () => {
        let data = [];
        this.state.products.map((item,index) => {
          let product={
            value: item._id,
            label: item.name
          }
          data.push(product)
          //console.log(product);
        });
        this.setState({options: data});
      })
    })
  }


  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onproductselected(e){
    this.setState({selectedproducts: e ? e.map(item => item.value) : [] });
  }


  onSubmit(e){
    e.preventDefault();
    let category={
      name: this.state.name,
      description: this.state.description,
      products: this.state.selectedproducts
    };
    console.log(category);
    axios.post('http://localhost:5000/category/insertcategory', category)
    .then(response => {
      alert('inserted');
      console.log(response);
    })
  }


    render(){
        return(
            <div className="container">
        <h1>Create Category</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">Category Name</label>
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
            <label htmlFor="subjectName" className="form-label">Description</label>
            <input 
              type="text" 
              className="form-control" 
              id="description" 
              name="description" 
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>


          <Select
          options={this.state.options}
          onChange={this.onproductselected}
            className="basic-multi-select"
            isMulti
          />
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
    };
};

export default CreateCategory;