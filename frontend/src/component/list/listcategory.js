import React, {Component} from 'react';
import axios from 'axios';

class ListCategory extends Component{
    constructor(props){
        super(props);

        this.state = {
            names: []
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/category/getallcategory')
        .then(response => {
            //console.log(response.data.data);
            this.setState({names: response.data.data});
        })
    }

    navigateproductPage(e, categoryId) {
        window.location = `/listproduct/${categoryId}`
      }

    render(){
        return(
            <div className="container">
            <br/>
        <h3>List Category</h3>
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            <br/>
          </thead>
          <tbody>
              {this.state.names.length > 0 && this.state.names.map((item, index) => (
                    <tr key={index} >
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <button className="btn btn-primary" onClick={e => this.navigateproductPage(e, item._id)}>
                                list
                            </button>
                        </td>
                    </tr>
                ))}
          </tbody>
        </table>
      </div>
        );
    };
};

export default ListCategory;