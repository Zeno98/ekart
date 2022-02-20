import React from 'react';

export const CartContexts=React.createContext();

 export const CartProvider=(props)=>{

    let [cartVal,setCartVal]=React.useState([]);
    // let [cartVal,setCartVal]=React.useState({
    //     sno:'',
    //     item:[]
    // });
    let [sNum,setSNum]=React.useState([]);

    function addToCart(selectedItem){

        // setCartVal({
        //     ...cartVal,
        //     [cartVal.sno]:[cartVal.sno+1],
        //     item:[...cartVal,selectedItem]
        // })

        let counter=0

        setCartVal([...cartVal,selectedItem])
        setSNum([...sNum,counter+1]);
    }

    // let [increment,setIncrement]=React.useState();

    // function inc(){

    //     setIncrement(increment+1);

    // }

    // let [decrement,setDecrement]=React.useState();

    // function dec(){

    //     setDecrement(decrement-1);

    // }

    return(

        <CartContexts.Provider value={cartVal,addToCart}>
            {/* <CartContexts.Provider value={{value:[cartVal,addToCart],value1:[sNum,addToCart],value2:[increment,inc],value3:[decrement,dec]}}>    original context */}

            {props.children}

            </CartContexts.Provider>
    )

    
}