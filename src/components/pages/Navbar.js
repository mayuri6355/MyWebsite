import React from 'react';
import {  Link } from "react-router-dom";
function Nav(){
    const navstyle={
    width: "100%",
    background:"gray",
    margin:"2px",
    padding:"7px",
    
    
    }
    const a={
        padding:"8px",
        display:"block",
        margin: "2px",
        padding: "4px",
        overflow: "hidden",
        float: "left",
    }
    
    return(

        
     <div>
     <ul style={navstyle}>
    <li>
      <Link to="/product"><a style={a}> Add Product</a></Link>
      <Link to="/viewproduct"><a style={a}> View Product</a></Link>
     
    </li>
    </ul>


    </div>
    )
}
export default Nav;