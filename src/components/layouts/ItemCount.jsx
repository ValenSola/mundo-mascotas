import React, {useState} from 'react';

function ItemCount({stock, initial, onAdd}) {
const [cantidad, setCantidad] = useState(initial);
const sumar = () => {
setCantidad(cantidad+1)
}
const restar = () => {
setCantidad(cantidad-1)
}
return (
<div className='cart-form' action="">
    <button disabled={cantidad <=1} className='button-cantidad' onClick={restar}>-</button>
    {cantidad}
    <button disabled={cantidad>= stock} className='button-cantidad' onClick={sumar}>+</button>
    <button disabled={stock <=0} className='card-button' type='button' onClick={()=> onAdd(cantidad)}>Agregar al Carrito</button>
</div>
)
}

export default ItemCount;