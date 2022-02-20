import React from 'react';
import { CartContexts } from '../../Context/CartContext';
import './Cart.css'

function CartQty(props) {

    let {value,value1}=React.useContext(CartContexts);
        // let [carItem]=value
        // let [carItemss]=value1;
    // let [inc]=value2

    // console.log(carItemss);

    let [increment,setIncrement]=React.useState(1);

    let inc=()=>{
        setIncrement(increment+1);
    }
    let dec=()=>{
        if(increment==1){
            setIncrement(1);
        }else{
            setIncrement(increment-1);
        }
        
    }


    return (
    
               
               <div> 
                   {<br/>}
                 <i className="fal fa-minus" onClick={dec} ></i>
                    <input
                     className="qty" 
                     type="text" 
                     placeholder="1" 
                     value={increment}
                     />
                    <i className="fal fa-plus" onClick={inc}></i>
                
                </div>
                
                
            

    )
}
export default CartQty;