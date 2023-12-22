import React from 'react';
import { Link } from 'react-router-dom';


const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.nombre} />
        <div>
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {(producto.categoria)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
    <Link to={`/item/${item.id}`}> 
    <button className='card-button-detail'>ver detalles</button>
    </Link>
</>
);
}

export default Item;