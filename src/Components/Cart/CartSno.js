import React from "react";
import { CartContexts } from "../../Context/CartContext";

function CartSno(props){
    // let {value,value1}=React.useContext(CartContexts)
    // let [sNo,setsNo]=value1;
    console.log("sno" + " " + props.sno);

    return(
        <div>
            {<br/>}
           
        {props.sno}
        
        </div>

    )
}

export default CartSno;