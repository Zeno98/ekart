import React from 'react';
import Cart from '../Cart/Cart'
import {CartContexts} from '../../Context/CartContext';
import { CartIncrementContext} from '../../Context/CartIncrementDecrementContext';

function TotalProd(props){

    let {value,value1}=React.useContext(CartContexts);
    let [totalVal,setTotalVal]=value;
    let [selected,setSelected]=React.useState();



    // console.log(cartItem.id);
    // console.log(totalVal.length);

    

    return(
        <>
        <p>{1}  X  $ {props.price.final_price}.00</p>
        
        </>
    )

}

export default TotalProd;