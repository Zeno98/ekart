import React from 'react';

export const CartIncrementDecrementContext=React.createContext();

export const CartIncDecProvider=(props)=>{

    // let [inc,setInc]=React.useState(1);
    console.log(inc)

    let [increment,setIncrement]=React.useState(1);

    function inc(){

        setIncrement(increment+1);

    }

    function dec(){

        if(increment==1){
            setIncrement(1)
        }
        else{
            setIncrement(increment-1);

        }
        
    }

    return(
        <CartIncrementDecrementContext.Provider>
            {props.children}
            </CartIncrementDecrementContext.Provider>
    )
}