import React from 'react'
import { Link } from 'react-router-dom'
import Nav from "./Navbar"
import Product from './Product'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewProduct from './ViewProduct';

export default function HomePage() {
    return (
        <div>
            
            <Router>
      <Nav />
      <Switch>
        <Route path='/product' exact component={Product} />
        <Route path='/viewproduct' exact component={ViewProduct} />
       
      </Switch>
    </Router>

        </div>
        
    )
}
