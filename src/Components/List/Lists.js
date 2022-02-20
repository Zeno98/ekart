import React from 'react';
import Api from '../Api/Api';
import TotalProd from '../Cart/TotalProd';
import Product from '../Products/Product';

function Lists(props){

    return(
        Api.map((eachItem,index)=>{
            return(
                // <Product id={item.id} name={item.name} description={item.description} price={item.original_price} original_price={item.original_price} final_price={item.final_price} img={item.img_url}key={index}/>
                <Product item={eachItem} key={index}/>
            )
        })
    )
}

export default Lists;