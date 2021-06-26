import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Switch } from 'react-router-dom';

import Navbar from './component/navbar';
import createcategory from './component/create/createcategory';
import CreateProduct from './component/create/createproduct';
import ListCategory from './component/list/listcategory';
import ListProduct from './component/list/listproduct';
import Listallproduct from './component/list/listallproduct';

const App = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <section>
                <Switch>
                    <Route path="/create-category" component={createcategory} exact />
                    <Route path="/" component={CreateProduct} exact />
                    <Route path="/list-category" component={ListCategory} exact />
                    <Route path="/listproduct/:id" component={ListProduct} exact />
                    <Route path="/list-all-products" component={Listallproduct} exact />

                </Switch>
            </section>
        </React.Fragment>
    );
};

export default App;