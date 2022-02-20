import React from 'react';
import { Link } from 'react-router-dom';
import TotalProd from './TotalProd';
import { CartContexts } from '../../Context/CartContext';
import CartItems from './CartItems';
import CartQty from './CartQty';
import CartSno from './CartSno';
import './Cart.css'

function Cart(props) {

    let [cartVal,setCartVal]=React.useContext(CartContexts);

    // let { value, value1 } = React.useContext(CartContexts);

    // let [cartVal, setCartVal] = value;
    // let [sNum, setSNum] = value1;

    // console.log(sNum);





    return (
        <>
            <div>
                <Link to='/'>
                    <h6><i className="fal fa-arrow-left fa-lg"></i> Back to Home</h6>
                </Link>
            </div>

            <header>
                {/* <h3><b>Order Summary {(`${props.cartVal.length} Item`)}</b></h3> */}
            </header>

            <div className=" container-fluid col-7 ">
                <table className="table-style" border={5}>
                    <tr>
                        <th colSpan={2}>SNO</th>
                        <th>ITEMS</th>
                        <th>QUANTITY</th>
                    </tr>

                    <tr>
                        <td>
                            {
                                
                                cartVal.map((sno, index) => {
                                    return (
            
                                        <CartSno sno={index + 1} />

                                    )
                                })
                            }
                            </td>
                            
                        
                        <td>
                            {

                                cartVal.map((ele) => {
                                    return (
                                        <CartItems currItems={ele} />
                                    )
                                })
                            }
                            </td>

                    
                    <td>
                            {
                                cartVal.map((qty) => {
                                    return (
                                        <CartQty qty={qty} />
                                        
                                    )
                                })
                            }

                        </td>
                        
                    </tr>

                </table>

            </div>

            <div className="col-5 border border-light bg-secondary bg-opacity-10">
                <header>
                    <h5><b>Price Details</b></h5>
                </header>
                <div className="row">
                    <div className="col-8">
                        {/* 1 X ${20} */}
                        {
                            cartVal.map((price) => {
                                return (
                                    <TotalProd price={price} />
                                )
                            })
                        }


                    </div>
                    <div className="col-4">
                        {/* ${totalPrice} //quatity* price */}
                        $20.00
                    </div>
                    <button className="btn btn-primary"><b>PLACE ORDER</b></button>
                </div>

            </div>
        </>
    )
}

export default Cart;