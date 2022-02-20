import React from 'react';
import './Product.css'
import { CartContexts } from '../../Context/CartContext'
import CartSno from '../Cart/CartSno';

function Product(props) {

    
    let [cartVal, setCart] = React.useContext(CartContexts);
    // let {value,value1} = React.useContext(CartContexts);
    // let [cartVal, setCart] = value;
    // let [sNum,setSNum]=value1;
    let [cartButton, setCartButton] = React.useState(false);


    // console.log(cartVal);
    let { item } = props;
    // console.log(item.img_url);
    // console.log(props);
    // React.useEffect(
        function atc()  {
        // let atc = () =>
            setCart(item);
            setCartButton(true);
            
        }
    // }, [])


    console.log(cartVal);
    return (
        <>

            <div className="col-4">
                <div className="card">
                    <img src={item.img_url} className="card-img-top img-size" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}<span className="price"><b> ${item.final_price}.00</b></span></h5>
                        <p className="card-text">{item.description}</p>
                        {/* <a  className ="btn btn-primary" onClick={()=>setCart(item) setCartButton(true)}>Add to Cart</a> */}

                        {
                            cartButton ? (
                                <>
                                    <a className="btn btn-primary" onClick={()=> setCartButton(true)}>Clicked</a> 
                                    </>
                                    
                            ) :
                                (
                                    <>
                                        <a className="btn btn-primary" onClick={atc}>Add to Cart</a>
                                    </>
                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;