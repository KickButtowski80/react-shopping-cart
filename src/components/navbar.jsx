import React, {Component} from 'react';

const NavBar = (props) =>{
         return (
           <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
              <span className="badge badge-pill badge-secondary">
                number of items: {props.totalCounters }  
                <br/>
                total prices: {props.totalPrice}
                
              </span>
           </nav>                 
            )    
}

export default NavBar;