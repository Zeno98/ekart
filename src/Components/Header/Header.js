import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderStyle.css'
import Cart from '../Cart/Cart';
import Image from '../../Images/shopping.JPG'


function Header(){

    function clickks(){
        console.log('clicked');
        // {<Cart/>}
    }

    return(
        <>
        <div>
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Image} alt="" width="30" height="24" className="d-inline-block align-text-top" />
            <span className="happay-title">E-Com</span>
          </a>
          <Link className="cart" to="Cart">
          <i className="fas fa-shopping-cart fa-lg 2x"></i>
          </Link>
          <i className="far fa-user-circle login fa-2x"></i>
        </div>
      </nav>
            {/* <Link to="Cart">Cart</Link> */}

            </div>

        </>

    )
}

export default Header;