import React, {Component} from 'react';
import axios from 'axios';

class Listallproduct extends Component{
    constructor(props){
        super(props);

        this.state = {
            names: []
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/product/getallproduct')
        .then(response => {
            //console.log(response.data.data);
            this.setState({names: response.data.data});
        })
    }

    deletepage(e,categoryId){
        axios.delete("http://localhost:5000/product/deleteproduct/" + categoryId)
        .then((response) => {
          console.log(response.data.data);
          location.reload();
        })
      }

    render(){
        return(
            <div className="container">
            <br/>
        <h3>List Products</h3>
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Amount</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
            <br/>
          </thead>
          <tbody>
              {this.state.names.length > 0 && this.state.names.map((item, index) => (
                    <tr key={index} >
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td>{item.amount}</td>
                        <td>{item.size}</td>
                        <td>
                            <button className="btn btn-primary" onClick={e => this.deletepage(e, item._id)}>
                                Delete
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

export default Listallproduct;