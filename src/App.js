import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Products/Product';
import Cart from './Components/Cart/Cart';
import List from './Components/List/Lists';
import Header from './Components/Header/Header';
import { CartProvider } from './Context/CartContext';
import TotalProd from './Components/Cart/TotalProd';

function App(props) {


  return (
    <>
      <CartProvider>
        <Header />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<List />} />
            </Routes>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
        {/* <TotalProd /> */}
      </CartProvider>







    </>
  );
}



export default App;

























{/* <BrowserRouter> */ }
{/* <Routes> */ }
{/* <Route path='Order' element={<Order/>}></Route> */ }

{/* <Route path='/' element={<Home/>}></Route> */ }
{/* </Routes> */ }
{/* </BrowserRouter> */ }
{/* </div> */ }