import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
return (
<>
    <Link className='invert' to={"/carrito"}> 
        <img className='shop-cart' src="../resources/icons/shop-cart.jpg" alt="" />
    </Link>
</>
);
}

export default CartWidget;