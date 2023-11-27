import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

const onAdd = (cantidad) => {
if(cantidad === 1) {
alert(`${cantidad} Item ha sido agregado al carrito.`)
}else {
alert(`${cantidad} Items han sido agregados al carrito.`)
}
}

return (
<div className='cart-container-detail'>
    <div className='image-container-detail'>
        <img className='image-producto-detail' src={item.imagen} alt="" />
    </div>
    <div className='cart-description-container-detail'>
        <p className='titulo-producto'>Nombre: {item.nombre}</p>
        <p className='titulo-producto'>Tipo: {item.tipo}</p>
        <p className='titulo-producto'>Detalle: {item.detalle}</p>
        <p className='titulo-producto'>Precio: ${item.precio}</p>
        <p className='titulo-producto'>stock: {item.stock} unidades</p>
    </div>
    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
</div>
);
}

export default ItemDetail;