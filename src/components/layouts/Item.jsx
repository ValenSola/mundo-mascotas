import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

return (
<>
    <div className='image-container'>
        <img className='image-producto' src={item.imagen} alt="" />
    </div>
    <div className='cart-description-container'>
        <p className='titulo-producto'>Nombre: {item.nombre}</p>
        <p className='titulo-producto'>Tipo: {item.tipo}</p>
        <p className='titulo-producto'>Precio: ${item.precio}</p>
        <p className='titulo-producto'>stock: {item.stock} unidades</p>
    </div>
    <Link to={`/item/${item.id}`}> 
    <button className='card-button-detail'>ver detalles</button>
    </Link>
</>
);
}

export default Item;